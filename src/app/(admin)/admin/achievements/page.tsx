import Link from "next/link";

import { AdminShell } from "@/components/admin/admin-shell";
import { AdminTable } from "@/components/admin/admin-table";
import { Button } from "@/components/ui/button";
import { requireAdminGuard } from "@/lib/auth/guard";
import { listAdminContent } from "@/lib/repositories/admin/content";

export default async function AdminAchievementsPage() {
  await requireAdminGuard();
  const content = await listAdminContent();

  return (
    <AdminShell
      title="Achievements"
      description="Maintain concise recognition records with featured visibility and ordering."
      activePath="/admin/achievements"
      actions={
        <Link href="/admin/achievements/new">
          <Button type="button">New achievement</Button>
        </Link>
      }
    >
      <AdminTable
        items={content.achievements}
        emptyState="No achievement records yet."
        columns={[
          { key: "title", header: "Title", render: (item) => item.title },
          { key: "organization", header: "Organization", render: (item) => item.organization },
          { key: "sort", header: "Sort order", render: (item) => item.sortOrder },
          { key: "published", header: "Published", render: (item) => (item.isPublished ? "Yes" : "No") },
          {
            key: "edit",
            header: "",
            render: (item) => (
              <Link href={`/admin/achievements/${item.id}`} className="text-accent">
                Edit
              </Link>
            ),
          },
        ]}
      />
    </AdminShell>
  );
}

