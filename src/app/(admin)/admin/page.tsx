import { signOutAction } from "@/app/(admin)/admin/actions";
import { AdminShell } from "@/components/admin/admin-shell";
import { AdminNote } from "@/components/admin/admin-note";
import { Stat } from "@/components/ui/stat";
import { Button } from "@/components/ui/button";
import { requireAdminGuard } from "@/lib/auth/guard";
import { getAdminDashboardData } from "@/lib/repositories/admin/content";

export const metadata = {
  title: "Admin Dashboard",
};

export default async function AdminDashboardPage() {
  const guard = await requireAdminGuard();
  const dashboard = await getAdminDashboardData();

  return (
    <AdminShell
      title="Dashboard"
      description="A compact overview of content, outreach, and engagement."
      activePath="/admin"
      actions={
        <form action={signOutAction}>
          <Button type="submit" variant="secondary">
            Sign out
          </Button>
        </form>
      }
    >
      {!guard.configured ? (
        <AdminNote
          title="Supabase is not configured"
          body="Read-only development data is available, but admin writes and authentication require the Supabase environment variables."
        />
      ) : null}

      <div className="grid gap-5 md:grid-cols-4">
        <Stat label="Experiences" value={dashboard.counts.experiences} />
        <Stat label="Projects" value={dashboard.counts.projects} />
        <Stat label="Achievements" value={dashboard.counts.achievements} />
        <Stat label="Posts" value={dashboard.counts.posts} />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-[28px] border border-line/70 bg-surface p-6">
          <p className="text-meta">Recent posts</p>
          <ul className="mt-4 space-y-3 text-sm text-muted">
            {dashboard.recentPosts.map((post) => (
              <li key={post.id}>{post.title}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-[28px] border border-line/70 bg-surface p-6">
          <p className="text-meta">Analytics snapshot</p>
          <div className="mt-4 space-y-3 text-sm text-muted">
            <p>Total visits: {dashboard.analytics.totalVisits}</p>
            <p>Contact submissions: {dashboard.analytics.totalContactSubmissions}</p>
            <p>
              Most viewed sections:{" "}
              {dashboard.analytics.mostViewedSections.length
                ? dashboard.analytics.mostViewedSections
                    .map((entry) => `${entry.sectionKey} (${entry.count})`)
                    .join(", ")
                : "No events recorded yet"}
            </p>
          </div>
        </div>
      </div>
    </AdminShell>
  );
}

