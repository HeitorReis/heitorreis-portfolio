# Heitor Portfolio

Recruiter-first personal portfolio for Heitor, built with Next.js App Router, TypeScript, and Tailwind CSS.

## Stack

- Next.js 16 App Router
- TypeScript
- Tailwind CSS v4
- Static content in the repository

## What is included

- Public portfolio homepage with recruiter-first section ordering
- Experience summary page and dedicated detail pages
- Lightweight updates feed
- Contact through external social profiles only
- Static public content with no server-side contact collection

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

2. Create optional environment variables:

```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_ENABLE_INDEXING=false
```

3. Run the app:

```bash
npm run dev
```

4. Typecheck:

```bash
npm run typecheck
```

The site is configured to stay `noindex` by default. Only enable indexing after real content is reviewed and intentionally published.

## Content notes

Public content lives in `src/lib/repositories/public/content.ts` and supporting constants live under `src/lib/constants`.

More implementation notes live in:

- `docs/architecture.md`
- `docs/content-model.md`
