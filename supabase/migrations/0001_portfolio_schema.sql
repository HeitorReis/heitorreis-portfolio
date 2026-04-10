create extension if not exists pgcrypto;

do $$
begin
  if not exists (
    select 1
    from pg_type
    where typname = 'media_type'
      and typnamespace = 'public'::regnamespace
  ) then
    create type public.media_type as enum ('image', 'video', 'document', 'other');
  end if;
end
$$;

do $$
begin
  if not exists (
    select 1
    from pg_type
    where typname = 'related_entity_type'
      and typnamespace = 'public'::regnamespace
  ) then
    create type public.related_entity_type as enum (
      'experience',
      'project',
      'achievement',
      'post',
      'homepage',
      'personal',
      'site'
    );
  end if;
end
$$;

do $$
begin
  if not exists (
    select 1
    from pg_type
    where typname = 'analytics_event_type'
      and typnamespace = 'public'::regnamespace
  ) then
    create type public.analytics_event_type as enum (
      'page_view',
      'section_view',
      'featured_click',
      'post_click',
      'contact_submit',
      'cta_click'
    );
  end if;
end
$$;

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create table if not exists public.experiences (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  organization text not null,
  category text not null,
  location text not null default '',
  summary text not null default '',
  responsibilities jsonb not null default '[]'::jsonb,
  technologies jsonb not null default '[]'::jsonb,
  impact jsonb not null default '[]'::jsonb,
  timeframe_label text not null default '',
  start_date date,
  end_date date,
  is_featured boolean not null default false,
  feature_rank integer,
  detail_content jsonb not null default '[]'::jsonb,
  image_path text,
  is_published boolean not null default false,
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint experiences_slug_format_chk
    check (slug ~ '^[a-z0-9]+(?:-[a-z0-9]+)*$'),
  constraint experiences_feature_rank_chk
    check (feature_rank is null or feature_rank > 0),
  constraint experiences_date_order_chk
    check (start_date is null or end_date is null or end_date >= start_date),
  constraint experiences_responsibilities_array_chk
    check (jsonb_typeof(responsibilities) = 'array'),
  constraint experiences_technologies_array_chk
    check (jsonb_typeof(technologies) = 'array'),
  constraint experiences_impact_array_chk
    check (jsonb_typeof(impact) = 'array'),
  constraint experiences_detail_content_array_chk
    check (jsonb_typeof(detail_content) = 'array'),
  constraint experiences_publish_state_chk
    check (not is_published or published_at is not null)
);

create table if not exists public.projects (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  category text not null,
  summary text not null default '',
  context text not null default '',
  problem text not null default '',
  solution text not null default '',
  technologies jsonb not null default '[]'::jsonb,
  impact jsonb not null default '[]'::jsonb,
  learnings jsonb not null default '[]'::jsonb,
  is_featured boolean not null default false,
  feature_rank integer,
  related_experience_id uuid references public.experiences(id) on update cascade on delete set null,
  image_path text,
  is_published boolean not null default false,
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint projects_slug_format_chk
    check (slug ~ '^[a-z0-9]+(?:-[a-z0-9]+)*$'),
  constraint projects_feature_rank_chk
    check (feature_rank is null or feature_rank > 0),
  constraint projects_technologies_array_chk
    check (jsonb_typeof(technologies) = 'array'),
  constraint projects_impact_array_chk
    check (jsonb_typeof(impact) = 'array'),
  constraint projects_learnings_array_chk
    check (jsonb_typeof(learnings) = 'array'),
  constraint projects_publish_state_chk
    check (not is_published or published_at is not null)
);

create table if not exists public.achievements (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  organization text not null,
  summary text not null default '',
  impact text not null default '',
  timeframe_label text not null default '',
  image_path text,
  is_featured boolean not null default false,
  sort_order integer not null default 100,
  is_published boolean not null default false,
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint achievements_identity_unique
    unique (title, organization, timeframe_label),
  constraint achievements_sort_order_chk
    check (sort_order > 0),
  constraint achievements_publish_state_chk
    check (not is_published or published_at is not null)
);

create table if not exists public.posts (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  excerpt text not null default '',
  content text not null default '',
  category text not null,
  related_section text not null default '',
  related_project_slug text references public.projects(slug) on update cascade on delete set null,
  published_at timestamptz,
  is_published boolean not null default false,
  cover_image_path text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint posts_slug_format_chk
    check (slug ~ '^[a-z0-9]+(?:-[a-z0-9]+)*$'),
  constraint posts_publish_state_chk
    check (not is_published or published_at is not null)
);

create table if not exists public.media (
  id uuid primary key default gen_random_uuid(),
  file_name text not null,
  file_path text not null,
  alt_text text,
  media_type public.media_type not null default 'image',
  bucket_id text not null default 'portfolio-public',
  is_public boolean not null default true,
  related_entity_type public.related_entity_type,
  related_entity_id text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint media_bucket_path_unique unique (bucket_id, file_path)
);

create table if not exists public.homepage_settings (
  id integer primary key default 1,
  headline text not null default '',
  subheadline text not null default '',
  hero_image_path text,
  show_photo_in_hero boolean not null default true,
  updated_at timestamptz not null default now(),
  constraint homepage_settings_singleton_chk check (id = 1)
);

create table if not exists public.visitor_interest (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  email text,
  linkedin text,
  company text,
  role text,
  message text,
  consent_text_version text not null,
  consent_given boolean not null default false,
  submitted_at timestamptz not null default now(),
  created_at timestamptz not null default now(),
  constraint visitor_interest_full_name_chk
    check (char_length(trim(full_name)) between 2 and 120),
  constraint visitor_interest_email_chk
    check (
      email is null
      or email ~* '^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$'
    ),
  constraint visitor_interest_linkedin_chk
    check (
      linkedin is null
      or linkedin ~* '^https?://(www\.)?linkedin\.com/.*$'
    ),
  constraint visitor_interest_company_chk
    check (company is null or char_length(company) <= 120),
  constraint visitor_interest_role_chk
    check (role is null or char_length(role) <= 120),
  constraint visitor_interest_message_chk
    check (message is null or char_length(message) <= 4000),
  constraint visitor_interest_consent_version_chk
    check (char_length(consent_text_version) between 1 and 50)
);

create table if not exists public.analytics_events (
  id uuid primary key default gen_random_uuid(),
  session_id text not null,
  event_type public.analytics_event_type not null,
  page_path text not null,
  section_key text,
  metadata_json jsonb not null default '{}'::jsonb,
  occurred_at timestamptz not null default now(),
  created_at timestamptz not null default now(),
  constraint analytics_events_session_id_chk
    check (char_length(session_id) between 16 and 128),
  constraint analytics_events_page_path_chk
    check (char_length(page_path) between 1 and 200 and left(page_path, 1) = '/'),
  constraint analytics_events_section_key_chk
    check (section_key is null or char_length(section_key) <= 80),
  constraint analytics_events_metadata_object_chk
    check (jsonb_typeof(metadata_json) = 'object'),
  constraint analytics_events_metadata_size_chk
    check (pg_column_size(metadata_json) <= 4096)
);

create table if not exists public.admin_profiles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null unique references auth.users(id) on delete cascade,
  role text not null default 'admin',
  created_at timestamptz not null default now(),
  constraint admin_profiles_role_chk
    check (role in ('admin'))
);

create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.admin_profiles ap
    where ap.user_id = auth.uid()
      and ap.role = 'admin'
  );
$$;

revoke all on function public.is_admin() from public;
grant execute on function public.is_admin() to anon, authenticated;

create index if not exists experiences_public_listing_idx
  on public.experiences (is_published, is_featured, feature_rank, published_at desc, created_at desc);

create index if not exists projects_public_listing_idx
  on public.projects (is_published, is_featured, feature_rank, published_at desc, created_at desc);

create index if not exists achievements_public_listing_idx
  on public.achievements (is_published, is_featured, sort_order, published_at desc);

create index if not exists posts_public_listing_idx
  on public.posts (is_published, published_at desc, created_at desc);

create index if not exists media_related_entity_idx
  on public.media (related_entity_type, related_entity_id);

create index if not exists media_public_idx
  on public.media (is_public, bucket_id, created_at desc);

create index if not exists visitor_interest_submitted_idx
  on public.visitor_interest (submitted_at desc);

create index if not exists analytics_events_rollup_idx
  on public.analytics_events (event_type, occurred_at desc);

create index if not exists analytics_events_page_section_idx
  on public.analytics_events (page_path, section_key, occurred_at desc);

drop trigger if exists set_experiences_updated_at on public.experiences;
create trigger set_experiences_updated_at
before update on public.experiences
for each row
execute function public.set_updated_at();

drop trigger if exists set_projects_updated_at on public.projects;
create trigger set_projects_updated_at
before update on public.projects
for each row
execute function public.set_updated_at();

drop trigger if exists set_achievements_updated_at on public.achievements;
create trigger set_achievements_updated_at
before update on public.achievements
for each row
execute function public.set_updated_at();

drop trigger if exists set_posts_updated_at on public.posts;
create trigger set_posts_updated_at
before update on public.posts
for each row
execute function public.set_updated_at();

drop trigger if exists set_media_updated_at on public.media;
create trigger set_media_updated_at
before update on public.media
for each row
execute function public.set_updated_at();

drop trigger if exists set_homepage_settings_updated_at on public.homepage_settings;
create trigger set_homepage_settings_updated_at
before update on public.homepage_settings
for each row
execute function public.set_updated_at();
