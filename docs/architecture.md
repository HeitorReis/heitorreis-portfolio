# Architecture

## Goal

This codebase is structured as a recruiter-first portfolio platform with a protected admin area and a Supabase-backed content model that can expand without moving to a separate CMS later.

## Main areas

- `src/app`
  - public routes
  - admin routes
  - API route handlers
- `src/components`
  - shared UI primitives
  - public sections and cards
  - admin editing components
  - analytics helpers
- `src/lib`
  - Supabase clients
  - validation
  - repositories
  - services
  - auth guards
  - constants and seed content
- `src/types`
  - domain contracts
  - API payload types
  - database row shapes
- `supabase`
  - schema, RLS, storage policies, and seed data

## Data flow

1. Public pages read through server-side repository functions.
2. Client-side interactions are limited to theme changes, analytics events, media upload, and contact submission.
3. Admin writes go through server actions or protected route handlers.
4. Automation writes go through versioned ingest routes.

## Design decisions

- Dedicated detail pages are used instead of public modals for recruiter usability and clean URLs.
- Seed data stays conservative and avoids invented facts.
- Image components fall back gracefully when placeholder files are not uploaded yet.
- Publish control is explicit in the database via `is_published` and `published_at`.

## Implementation order

1. Shared domain types and theme tokens
2. Supabase schema and RLS
3. Public homepage and detail routes
4. Contact and analytics flows
5. Admin CRUD surfaces
6. Automation-ready endpoints

