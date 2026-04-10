# Backend Contracts

This backend contract is Supabase-first and intentionally conservative. It only seeds content that is explicitly named in the prompt, and it leaves incomplete public-facing records unpublished by default when the brief does not provide enough factual detail to publish safely.

## 1. Schema Recommendations

The requested tables are implemented in [0001_portfolio_schema.sql](/mnt/d/LocalVSCodes/portfolio/supabase/migrations/0001_portfolio_schema.sql).

Recommended additions beyond the minimum prompt fields:

- `experiences`, `projects`, and `achievements` include `is_published` and `published_at` so public read access can be enforced cleanly and admin publish/unpublish flows do not depend on implicit state.
- `media` includes `bucket_id` and `is_public` so the media catalog can describe both public recruiter-facing assets and private admin-only assets.
- Array-like content fields use `jsonb` arrays instead of freeform text:
  - `responsibilities`
  - `technologies`
  - `impact`
  - `learnings`
  - `detail_content`
- `homepage_settings` is treated as a singleton row with `id = 1`.
- `media.related_entity_id` is stored as `text` because media is polymorphic and may attach to UUID-backed content or singleton settings rows.

Practical modeling notes:

- `slug` is validated at the database level for stable public routing.
- `detail_content` is structured content storage for medium-depth recruiter detail pages. Recommended shape:

```json
[
  { "heading": "Context", "body": "..." },
  { "heading": "Problem", "body": "..." },
  { "heading": "What I Did", "body": "..." },
  { "heading": "Technologies", "body": "..." },
  { "heading": "Impact", "body": "..." },
  { "heading": "Key Learning", "body": "..." }
]
```

- `posts.content` stays plain text or markdown-friendly text to keep short-form publishing simple for both admin entry and future automation.
- `analytics_events.metadata_json` is constrained to a small JSON object so analytics stays privacy-conscious and operationally cheap.

## 2. RLS And Storage Policy Approach

The policy migration is in [0002_portfolio_rls_storage.sql](/mnt/d/LocalVSCodes/portfolio/supabase/migrations/0002_portfolio_rls_storage.sql).

RLS model:

- Public read:
  - `experiences`, `projects`, `achievements`: only rows with `is_published = true`
  - `posts`: only rows with `is_published = true` and `published_at <= now()`
  - `homepage_settings`: readable by everyone
  - `media`: only rows with `is_public = true`
- Public write:
  - `visitor_interest`: insert only, with `consent_given = true`
  - `analytics_events`: insert only, limited by event freshness and table-level constraints
- Admin access:
  - authenticated users who satisfy `public.is_admin()` get CRUD on content tables
  - `admin_profiles` is readable only by admins
  - bootstrap of the first admin profile should be done with the Supabase dashboard, SQL editor, or service-role code, not by client-side inserts

Storage model:

- Bucket `portfolio-public`
  - recruiter-facing images
  - public read
  - admin-only upload, update, delete
- Bucket `portfolio-private`
  - optional private admin files
  - admin-only read and write

Recommended application behavior:

- Do not expose the service role key to the browser.
- Prefer server-mediated mutations for admin CRUD even though RLS is present. RLS is the database guardrail, not the only control plane.
- Keep direct browser-to-Supabase writes limited to the contact form and lightweight analytics, or proxy those through server routes for stricter rate limiting.

## 3. Seed Data Plan

The seed file is in [seed.sql](/mnt/d/LocalVSCodes/portfolio/supabase/seed.sql).

Seed principles:

- Only names and labels explicitly present in the prompt are inserted.
- No roles, metrics, technologies, dates, summaries, or claims are fabricated.
- Incomplete experiences and projects are seeded as drafts with `is_published = false`.
- Achievements that are explicitly stated in the prompt are safe to seed as published titles.

What is seeded:

- `homepage_settings`
  - headline from the positioning statement
  - hero placeholder image path
- `media`
  - required placeholder filenames from the prompt
- `experiences`
  - `Embraer`
- `projects`
  - `Emma`
  - `C- Compiler`
  - `ARM-based Processor`
  - `Eye-Tracking System`
  - `TimeLapseCreator`
  - `CEMADEN/FAPESP Research`
- `achievements`
  - `Harvard Brazil Hackathon` winner
  - `Huawei Seeds for the Future 2024`
  - `Huawei Seeds for the Future 2025`
  - `In.Cube` acceleration
  - `GOI Peace Foundation` honorable mention

What is intentionally not seeded:

- posts with invented text
- contact submissions
- analytics events
- admin profiles
- any unpublished detail copy not supported by the prompt

## 4. Server-Side Validation And Secure Data Flow Notes

Recommended validation layers:

- Route handler or server action validation with `zod`
- Database constraints as a second line of defense
- RLS as authorization, not validation

Recommended payload rules:

- `visitor_interest`
  - `full_name`: required, 2-120 chars
  - `email`: optional, valid email if present
  - `linkedin`: optional, LinkedIn URL if present
  - `company`: optional, <= 120 chars
  - `role`: optional, <= 120 chars
  - `message`: optional, <= 4000 chars
  - `consent_text_version`: required
  - `consent_given`: must be `true`
- `analytics_events`
  - `session_id`: opaque pseudonymous ID only
  - `event_type`: enum only
  - `page_path`: site-relative path only
  - `section_key`: optional short identifier
  - `metadata_json`: small, non-PII object

Recommended admin flow:

1. User signs in with Supabase Auth.
2. Next.js server checks the session.
3. Server verifies `admin_profiles` membership.
4. Server validates payload with `zod`.
5. Server writes through the authenticated Supabase server client or service-role client, depending on the operation.
6. Database constraints and RLS still apply.

Recommended public flow for contact and analytics:

1. Browser submits to Next.js route handlers, not directly to broad table APIs.
2. Route handler validates and normalizes payload.
3. Route handler inserts minimal allowed fields only.
4. Route handler returns a narrow success/failure response with no database internals.

This pattern gives better control over rate limiting, abuse prevention, and future audit logging than direct browser writes alone.

## 5. Automation Endpoint Contract Recommendations

Use server-only ingestion endpoints. Do not expose direct automation writes from external bots to the database.

Recommended endpoints:

- `POST /api/ingest/v1/posts`
- `POST /api/ingest/v1/achievements`
- `POST /api/ingest/v1/project-updates`

Recommended authentication:

- `Authorization: Bearer <AUTOMATION_SECRET>`
- `X-Idempotency-Key: <uuid>`
- optional `X-Signature` HMAC if the caller is external and replay resistance matters

Recommended post payload:

```json
{
  "slug": "string",
  "title": "string",
  "excerpt": "string",
  "content": "string",
  "category": "project_update | achievement | learning | milestone",
  "related_section": "updates",
  "related_project_slug": "string | null",
  "published_at": "ISO-8601 timestamp | null",
  "is_published": true,
  "cover_image_path": "string | null"
}
```

Recommended achievement payload:

```json
{
  "title": "string",
  "organization": "string",
  "summary": "string",
  "impact": "string",
  "timeframe_label": "string",
  "image_path": "string | null",
  "is_featured": false,
  "sort_order": 100,
  "is_published": false
}
```

Recommended project update payload:

```json
{
  "project_slug": "string",
  "summary": "string | null",
  "impact": ["string"],
  "learnings": ["string"],
  "image_path": "string | null",
  "publish_post": {
    "title": "string",
    "excerpt": "string",
    "content": "string",
    "is_published": false
  }
}
```

Recommended automation behavior:

- validate every request server-side
- reject unknown fields
- use idempotency keys for safe retries
- allow draft insertion by default
- only publish automatically when the payload explicitly sets publish state
- resolve `related_project_slug` against existing projects before insert
- keep all secrets server-only

## Implementation Priority

1. Apply schema migration.
2. Apply RLS and storage migration.
3. Load the conservative seed.
4. Build Next.js server helpers around these contracts.
5. Add admin CRUD and automation routes on top of validated server-side writes.
