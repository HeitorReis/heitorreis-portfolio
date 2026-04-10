# Admin Workflows

## Sign-in

- Create an admin user in Supabase Auth.
- Add that user ID to `public.admin_profiles`.
- Sign in at `/admin/login`.

## Updating public content

- Experiences: `/admin/experiences`
- Projects: `/admin/projects`
- Achievements: `/admin/achievements`
- Posts: `/admin/posts`
- Homepage settings: `/admin/homepage`

## Media

- Upload through `/admin/media`.
- Public uploads return a public URL when the asset is stored in `portfolio-public`.
- Use that URL or a placeholder filename in content records.

## Visitor interest and analytics

- Review contact submissions at `/admin/visitor-interest`.
- Review engagement summaries and recent events at `/admin/analytics`.

## Editing guidance

- Keep unsupported factual fields blank.
- Use one item per line in array-based textareas.
- Publish only after the record is ready for the public site.

