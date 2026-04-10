# Automation

## Available endpoints

- `POST /api/ingest/v1/posts`
- `POST /api/ingest/v1/achievements`
- `POST /api/ingest/v1/project-updates`

## Authentication

Use either:

- `Authorization: Bearer <INGEST_API_TOKEN>` with a configured service role key
- an authenticated admin session

## Payload guidance

- Keep payloads explicit and small.
- Send only fields supported by the validation schema.
- Publish explicitly. Draft-first is safer by default.

## Recommended future bot flow

1. Prepare validated payload from an external script.
2. Send it to the appropriate `v1` ingest endpoint.
3. Let the route validate and write through server-side Supabase access.
4. Reuse the same content model as the admin UI.
