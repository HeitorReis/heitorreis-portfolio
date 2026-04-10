import { redirect } from "next/navigation";

import { getServerSupabaseClient } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/env";

export interface AdminGuardState {
  configured: boolean;
  isAuthenticated: boolean;
  isAdmin: boolean;
  userId: string | null;
}

export async function getAdminGuardState(): Promise<AdminGuardState> {
  if (!isSupabaseConfigured()) {
    return {
      configured: false,
      isAuthenticated: false,
      isAdmin: false,
      userId: null,
    };
  }

  const supabase = await getServerSupabaseClient();

  if (!supabase) {
    return {
      configured: false,
      isAuthenticated: false,
      isAdmin: false,
      userId: null,
    };
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return {
      configured: true,
      isAuthenticated: false,
      isAdmin: false,
      userId: null,
    };
  }

  const { data: adminProfile } = await supabase
    .from("admin_profiles")
    .select("id, role")
    .eq("user_id", user.id)
    .maybeSingle();

  return {
    configured: true,
    isAuthenticated: true,
    isAdmin: Boolean(adminProfile),
    userId: user.id,
  };
}

export async function requireAdminGuard() {
  const guard = await getAdminGuardState();

  if (!guard.configured) {
    return guard;
  }

  if (!guard.isAuthenticated) {
    redirect("/admin/login");
  }

  if (!guard.isAdmin) {
    redirect("/admin/login?error=unauthorized");
  }

  return guard;
}

