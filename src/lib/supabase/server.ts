import { cookies } from "next/headers";
import { createServerClient } from "@supabase/ssr";
import { createClient } from "@supabase/supabase-js";

import { env, hasServiceRole, isSupabaseConfigured } from "@/lib/env";
import type { Database } from "@/types/database";

export async function getServerSupabaseClient() {
  if (!isSupabaseConfigured()) return null;

  const cookieStore = await cookies();

  return createServerClient<Database>(env.publicSupabaseUrl, env.publicSupabaseAnonKey, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options));
        } catch {
          // Server Components cannot always write cookies. Server Actions and Route Handlers can.
        }
      },
    },
  });
}

export function getPublicServerSupabaseClient() {
  if (!isSupabaseConfigured()) return null;

  return createClient<Database>(env.publicSupabaseUrl, env.publicSupabaseAnonKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
}

export function getServiceRoleSupabaseClient() {
  if (!hasServiceRole()) return null;

  return createClient<Database>(env.publicSupabaseUrl, env.supabaseServiceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
}
