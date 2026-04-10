alter table public.experiences enable row level security;
alter table public.experiences force row level security;

alter table public.projects enable row level security;
alter table public.projects force row level security;

alter table public.achievements enable row level security;
alter table public.achievements force row level security;

alter table public.posts enable row level security;
alter table public.posts force row level security;

alter table public.media enable row level security;
alter table public.media force row level security;

alter table public.homepage_settings enable row level security;
alter table public.homepage_settings force row level security;

alter table public.visitor_interest enable row level security;
alter table public.visitor_interest force row level security;

alter table public.analytics_events enable row level security;
alter table public.analytics_events force row level security;

alter table public.admin_profiles enable row level security;
alter table public.admin_profiles force row level security;

drop policy if exists experiences_public_read on public.experiences;
create policy experiences_public_read
on public.experiences
for select
to anon, authenticated
using (is_published = true);

drop policy if exists experiences_admin_all on public.experiences;
create policy experiences_admin_all
on public.experiences
for all
to authenticated
using (public.is_admin())
with check (public.is_admin());

drop policy if exists projects_public_read on public.projects;
create policy projects_public_read
on public.projects
for select
to anon, authenticated
using (is_published = true);

drop policy if exists projects_admin_all on public.projects;
create policy projects_admin_all
on public.projects
for all
to authenticated
using (public.is_admin())
with check (public.is_admin());

drop policy if exists achievements_public_read on public.achievements;
create policy achievements_public_read
on public.achievements
for select
to anon, authenticated
using (is_published = true);

drop policy if exists achievements_admin_all on public.achievements;
create policy achievements_admin_all
on public.achievements
for all
to authenticated
using (public.is_admin())
with check (public.is_admin());

drop policy if exists posts_public_read on public.posts;
create policy posts_public_read
on public.posts
for select
to anon, authenticated
using (is_published = true and published_at <= now());

drop policy if exists posts_admin_all on public.posts;
create policy posts_admin_all
on public.posts
for all
to authenticated
using (public.is_admin())
with check (public.is_admin());

drop policy if exists media_public_read on public.media;
create policy media_public_read
on public.media
for select
to anon, authenticated
using (is_public = true);

drop policy if exists media_admin_all on public.media;
create policy media_admin_all
on public.media
for all
to authenticated
using (public.is_admin())
with check (public.is_admin());

drop policy if exists homepage_settings_public_read on public.homepage_settings;
create policy homepage_settings_public_read
on public.homepage_settings
for select
to anon, authenticated
using (true);

drop policy if exists homepage_settings_admin_all on public.homepage_settings;
create policy homepage_settings_admin_all
on public.homepage_settings
for all
to authenticated
using (public.is_admin())
with check (public.is_admin());

drop policy if exists visitor_interest_public_insert on public.visitor_interest;
create policy visitor_interest_public_insert
on public.visitor_interest
for insert
to anon, authenticated
with check (consent_given = true);

drop policy if exists visitor_interest_admin_select on public.visitor_interest;
create policy visitor_interest_admin_select
on public.visitor_interest
for select
to authenticated
using (public.is_admin());

drop policy if exists visitor_interest_admin_delete on public.visitor_interest;
create policy visitor_interest_admin_delete
on public.visitor_interest
for delete
to authenticated
using (public.is_admin());

drop policy if exists analytics_events_public_insert on public.analytics_events;
create policy analytics_events_public_insert
on public.analytics_events
for insert
to anon, authenticated
with check (
  occurred_at >= now() - interval '1 day'
  and occurred_at <= now() + interval '5 minutes'
);

drop policy if exists analytics_events_admin_select on public.analytics_events;
create policy analytics_events_admin_select
on public.analytics_events
for select
to authenticated
using (public.is_admin());

drop policy if exists analytics_events_admin_delete on public.analytics_events;
create policy analytics_events_admin_delete
on public.analytics_events
for delete
to authenticated
using (public.is_admin());

drop policy if exists admin_profiles_admin_select on public.admin_profiles;
create policy admin_profiles_admin_select
on public.admin_profiles
for select
to authenticated
using (public.is_admin());

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values
  (
    'portfolio-public',
    'portfolio-public',
    true,
    10485760,
    array['image/jpeg', 'image/png', 'image/webp', 'image/avif']
  ),
  (
    'portfolio-private',
    'portfolio-private',
    false,
    10485760,
    array['image/jpeg', 'image/png', 'image/webp', 'application/pdf']
  )
on conflict (id) do update
set
  public = excluded.public,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists portfolio_public_bucket_read on storage.objects;
create policy portfolio_public_bucket_read
on storage.objects
for select
to anon, authenticated
using (bucket_id = 'portfolio-public');

drop policy if exists portfolio_public_bucket_admin_insert on storage.objects;
create policy portfolio_public_bucket_admin_insert
on storage.objects
for insert
to authenticated
with check (
  bucket_id = 'portfolio-public'
  and public.is_admin()
);

drop policy if exists portfolio_public_bucket_admin_update on storage.objects;
create policy portfolio_public_bucket_admin_update
on storage.objects
for update
to authenticated
using (
  bucket_id = 'portfolio-public'
  and public.is_admin()
)
with check (
  bucket_id = 'portfolio-public'
  and public.is_admin()
);

drop policy if exists portfolio_public_bucket_admin_delete on storage.objects;
create policy portfolio_public_bucket_admin_delete
on storage.objects
for delete
to authenticated
using (
  bucket_id = 'portfolio-public'
  and public.is_admin()
);

drop policy if exists portfolio_private_bucket_admin_select on storage.objects;
create policy portfolio_private_bucket_admin_select
on storage.objects
for select
to authenticated
using (
  bucket_id = 'portfolio-private'
  and public.is_admin()
);

drop policy if exists portfolio_private_bucket_admin_insert on storage.objects;
create policy portfolio_private_bucket_admin_insert
on storage.objects
for insert
to authenticated
with check (
  bucket_id = 'portfolio-private'
  and public.is_admin()
);

drop policy if exists portfolio_private_bucket_admin_update on storage.objects;
create policy portfolio_private_bucket_admin_update
on storage.objects
for update
to authenticated
using (
  bucket_id = 'portfolio-private'
  and public.is_admin()
)
with check (
  bucket_id = 'portfolio-private'
  and public.is_admin()
);

drop policy if exists portfolio_private_bucket_admin_delete on storage.objects;
create policy portfolio_private_bucket_admin_delete
on storage.objects
for delete
to authenticated
using (
  bucket_id = 'portfolio-private'
  and public.is_admin()
);
