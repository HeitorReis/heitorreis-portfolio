import Link from "next/link";

import { AdminShell } from "@/components/admin/admin-shell";
import { AdminTable } from "@/components/admin/admin-table";
import { Button } from "@/components/ui/button";
import { requireAdminGuard } from "@/lib/auth/guard";
import { listAdminContent } from "@/lib/repositories/admin/content";

export default async function AdminProjectsPage() {
  await requireAdminGuard();
  const content = await listAdminContent();

  return (
    <AdminShell
      title="Projects"
      description="Manage project detail pages, summaries, and featured ordering."
      activePath="/admin/projects"
      actions={
        <Link href="/admin/projects/new">
          <Button type="button">New project</Button>
        </Link>
      }
    >
      <AdminTable
        items={content.projects}
        emptyState="No project records yet."
        columns={[
          { key: "title", header: "Title", render: (item) => item.title },
          { key: "category", header: "Category", render: (item) => item.category },
          {
            key: "featured",
            header: "Featured",
            render: (item) => (item.isFeatured ? `Yes (${item.featureRank ?? "-"})` : "No"),
          },
          { key: "published", header: "Published", render: (item) => (item.isPublished ? "Yes" : "No") },
          {
            key: "edit",
            header: "",
            render: (item) => (
              <Link href={`/admin/projects/${item.id}`} className="text-accent">
                Edit
              </Link>
            ),
          },
        ]}
      />
    </AdminShell>
  );
}

