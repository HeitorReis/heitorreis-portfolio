# Database Install

The app no longer uses runtime local content as a fallback data source for experiences, projects, achievements, or posts. Supabase is now the intended source of truth.

## Remote install steps

1. Authenticate the Supabase CLI:

```bash
npm run db:login
```

2. Link this repo to the remote project:

```bash
npm run db:link
```

This step will ask for the database password for project `dqztdyxkmaghsarwrncj`.

3. Push the schema migrations:

```bash
npm run db:push
```

4. Apply the seed data:

- Option A: run `supabase/seed.sql` in the Supabase SQL editor
- Option B: apply it through your preferred Postgres client using the project connection string

## Notes

- `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` and `SUPABASE_SECRET_KEY` are already supported by the app runtime.
- The CLI still requires Supabase authentication and a database password; the service role key alone is not enough to push schema migrations.
- The personal photo placeholders remain static UI placeholders and are not a database fallback.
