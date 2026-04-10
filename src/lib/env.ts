const publicSupabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const publicSupabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ??
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ??
  "";
const supabaseServiceRoleKey =
  process.env.SUPABASE_SECRET_KEY ?? process.env.SUPABASE_SERVICE_ROLE_KEY ?? "";
const publicSiteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "";
const siteIndexingEnabled = process.env.NEXT_PUBLIC_ENABLE_INDEXING === "true";
const ingestApiToken = process.env.INGEST_API_TOKEN ?? "";

export const env = {
  publicSupabaseUrl,
  publicSupabaseAnonKey,
  supabaseServiceRoleKey,
  publicSiteUrl,
  siteIndexingEnabled,
  ingestApiToken,
};

export function isSupabaseConfigured() {
  return Boolean(publicSupabaseUrl && publicSupabaseAnonKey);
}

export function hasServiceRole() {
  return isSupabaseConfigured() && Boolean(supabaseServiceRoleKey);
}

export function isIngestConfigured() {
  return Boolean(ingestApiToken);
}
