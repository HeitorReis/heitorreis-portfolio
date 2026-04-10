import { redirect } from "next/navigation";

import { signInAction } from "@/app/(admin)/admin/actions";
import { getAdminGuardState } from "@/lib/auth/guard";
import { Button } from "@/components/ui/button";
import { InputField } from "@/components/ui/input-field";

export const metadata = {
  title: "Admin Login",
};

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const guard = await getAdminGuardState();

  if (guard.isAdmin) {
    redirect("/admin");
  }

  const params = await searchParams;

  return (
    <div className="page-shell flex min-h-screen items-center justify-center py-16">
      <div className="w-full max-w-md rounded-[32px] border border-line/70 bg-surface p-8 shadow-[var(--shadow-md)]">
        <p className="text-meta">Admin</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-[-0.03em]">Sign in</h1>
        <p className="mt-3 text-sm leading-7 text-muted">
          This area is protected with Supabase Auth and admin role checks.
        </p>

        {params.error ? (
          <p className="mt-4 rounded-2xl border border-danger/20 bg-danger/10 px-4 py-3 text-sm text-danger">
            {decodeURIComponent(params.error)}
          </p>
        ) : null}

        <form action={signInAction} className="mt-6 space-y-5">
          <InputField label="Email" name="email" type="email" required />
          <InputField label="Password" name="password" type="password" required />
          <Button type="submit">Sign in</Button>
        </form>
      </div>
    </div>
  );
}

