import { AdminShell } from "@/components/admin/admin-shell";
import { AdminTable } from "@/components/admin/admin-table";
import { requireAdminGuard } from "@/lib/auth/guard";
import { listVisitorInterestRecords } from "@/lib/repositories/admin/content";
import { formatDateTime } from "@/lib/utils";

export default async function AdminVisitorInterestPage() {
  await requireAdminGuard();
  const records = await listVisitorInterestRecords();

  return (
    <AdminShell
      title="Visitor interest"
      description="Review low-friction contact submissions with only the data the visitor chose to share."
      activePath="/admin/visitor-interest"
    >
      <AdminTable
        items={records}
        emptyState="No contact submissions yet."
        columns={[
          { key: "name", header: "Name", render: (item) => item.fullName },
          { key: "email", header: "Email", render: (item) => item.email ?? "Not provided" },
          { key: "company", header: "Company", render: (item) => item.company ?? "Not provided" },
          { key: "role", header: "Role", render: (item) => item.role ?? "Not provided" },
          {
            key: "submitted",
            header: "Submitted",
            render: (item) => formatDateTime(item.submittedAt) ?? "Unknown",
          },
        ]}
      />
    </AdminShell>
  );
}
