begin;

-- Clears application data without dropping tables, types, functions, policies, or indexes.
-- This only affects the app-owned tables in the public schema.
-- It does not delete Supabase-managed records in auth.users or storage.objects.
-- If you still need admin access after running this, reinsert the row in public.admin_profiles.

truncate table
  public.analytics_events,
  public.visitor_interest,
  public.posts,
  public.projects,
  public.experiences,
  public.achievements,
  public.media,
  public.homepage_settings,
  public.admin_profiles
restart identity cascade;

commit;
