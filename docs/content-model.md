# Content Model

## Public content

- `experiences`
  - recruiter-facing professional or research experience
  - compact homepage preview plus detail page
- `projects`
  - technical work with structured context, problem, solution, impact, and learning
- `achievements`
  - concise recognition records
- `posts`
  - lightweight professional updates
- `homepage_settings`
  - headline, subheadline, and hero image path

## Supporting content

- `media`
  - asset catalog for public and private files
- `visitor_interest`
  - contact submissions with minimal fields and consent metadata
- `analytics_events`
  - low-granularity engagement events
- `admin_profiles`
  - authorization bridge between Supabase Auth users and admin access

## Important constraints

- Unknown claims remain blank rather than guessed.
- Homepage ordering is curated with `feature_rank` and `sort_order`.
- Public content is filtered by publish state.
- Detail content is structured, not stored as a single freeform blob.

