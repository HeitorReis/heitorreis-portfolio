# Heitor Portfolio Platform

Recruiter-first personal portfolio and admin platform for Heitor, built with Next.js App Router, TypeScript, Tailwind CSS, and Supabase.

## Stack

- Next.js 16 App Router
- TypeScript
- Tailwind CSS v4
- Supabase Auth, Database, and Storage
- Zod validation

## What is included

- Premium public portfolio homepage with recruiter-first section ordering
- Experience summary page and dedicated detail pages
- Lightweight updates feed
- Contact form with consent-aware storage
- Privacy-conscious analytics capture
- Protected admin area for experiences, projects, achievements, posts, media, homepage settings, visitor-interest review, and analytics
- Supabase schema, RLS, storage policies, and seed content
- Automation-ready ingest routes under `/api/ingest/v1/*`

## Setup

1. Install dependencies:

```bash
npm install
```

If you run the project from WSL, install dependencies with Linux Node.js inside WSL, not
Windows Node.js forwarded into the WSL shell. Check:

```bash
which node
which npm
```

Both commands should resolve to Linux paths. If they point into `/mnt/.../Program Files/nodejs`,
clear the mixed install before trying again:

```bash
rm -rf node_modules .next
npm install
```

2. Create environment variables:

```bash
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=
SUPABASE_SECRET_KEY=
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_ENABLE_INDEXING=false
INGEST_API_TOKEN=
```

3. Run the app:

```bash
npm run dev
```

4. Typecheck:

```bash
npm run typecheck
```

## Supabase

Apply the SQL in this order:

1. `supabase/migrations/0001_portfolio_schema.sql`
2. `supabase/migrations/0002_portfolio_rls_storage.sql`
3. `supabase/seed.sql`

Create the first admin user in Supabase Auth, then insert that user ID into `public.admin_profiles` through the Supabase dashboard or SQL editor.

The site is configured to stay `noindex` by default. Only enable indexing after real content is reviewed and intentionally published.

## Content notes

The seeded content is intentionally conservative and uses only information explicitly provided in the prompt. Unknown dates, technologies, role titles, metrics, and detailed narratives remain blank or compact by design.

More implementation notes live in:

- `docs/architecture.md`
- `docs/content-model.md`
- `docs/admin-workflows.md`
- `docs/automation.md`
- `docs/backend-contracts.md`
- `docs/database-install.md`
