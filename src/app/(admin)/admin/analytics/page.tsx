import { AdminShell } from "@/components/admin/admin-shell";
import { AdminTable } from "@/components/admin/admin-table";
import { Stat } from "@/components/ui/stat";
import { requireAdminGuard } from "@/lib/auth/guard";
import { getAdminDashboardData, listAnalyticsEvents } from "@/lib/repositories/admin/content";
import { formatDateTime } from "@/lib/utils";

export default async function AdminAnalyticsPage() {
  await requireAdminGuard();
  const dashboard = await getAdminDashboardData();
  const events = await listAnalyticsEvents();

  return (
    <AdminShell
      title="Analytics"
      description="Privacy-conscious visibility into visits, section views, clicks, and contact submissions."
      activePath="/admin/analytics"
    >
      <div className="grid gap-5 md:grid-cols-3">
        <Stat label="Total visits" value={dashboard.analytics.totalVisits} />
        <Stat label="Contact submissions" value={dashboard.analytics.totalContactSubmissions} />
        <Stat
          label="Top sections"
          value={dashboard.analytics.mostViewedSections.length || 0}
        />
      </div>

      <AdminTable
        items={events}
        emptyState="No analytics events recorded yet."
        columns={[
          { key: "event", header: "Event", render: (item) => item.eventType },
          { key: "page", header: "Page", render: (item) => item.pagePath },
          { key: "section", header: "Section", render: (item) => item.sectionKey ?? "None" },
          {
            key: "time",
            header: "Occurred",
            render: (item) => formatDateTime(item.occurredAt) ?? "Unknown",
          },
        ]}
      />
    </AdminShell>
  );
}
