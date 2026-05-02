# Architecture

## Goal

This codebase is a recruiter-first static portfolio. The public site is built from repository content and direct social links, without a server-side contact collection or content management area.

## Main areas

- `src/app`
  - public routes
  - sitemap and robots metadata
- `src/components`
  - shared UI primitives
  - public sections and cards
- `src/lib`
  - static content repository
  - constants
- `src/types`
  - domain contracts used by static content and UI components

## Data flow

1. Public pages read content from `src/lib/repositories/public/content.ts`.
2. Client-side behavior is limited to theme changes, links, and image fallback handling.
3. Contact happens through external social profiles.

## Design decisions

- Dedicated detail pages are used instead of public modals for recruiter usability and clean URLs.
- Portfolio claims stay conservative and avoid invented facts.
- Image components fall back gracefully when local placeholder files are unavailable.
- Public content is changed through normal repository edits.
