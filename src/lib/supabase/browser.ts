"use client";

import { createBrowserClient } from "@supabase/ssr";
import type { SupabaseClient } from "@supabase/supabase-js";

import { env, isSupabaseConfigured } from "@/lib/env";
import type { Database } from "@/types/database";

let browserClient: SupabaseClient<Database> | null = null;

export function getBrowserSupabaseClient() {
  if (!isSupabaseConfigured()) return null;

  if (!browserClient) {
    browserClient = createBrowserClient<Database>(
      env.publicSupabaseUrl,
      env.publicSupabaseAnonKey,
    );
  }

  return browserClient;
}

