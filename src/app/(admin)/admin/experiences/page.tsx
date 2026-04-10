import Link from "next/link";

import { AdminShell } from "@/components/admin/admin-shell";
import { AdminTable } from "@/components/admin/admin-table";
import { Button } from "@/components/ui/button";
import { requireAdminGuard } from "@/lib/auth/guard";
import { listAdminContent } from "@/lib/repositories/admin/content";

export const metadata = {
  title: "Experiences",
};

export default async function AdminExperiencesPage() {
  await requireAdminGuard();
  const content = await listAdminContent();

  return (
    <AdminShell
      title="Experiences"
      description="Curate professional and research experience with featured ordering and publish control."
      activePath="/admin/experiences"
      actions={
        <Link href="/admin/experiences/new">
          <Button type="button">New experience</Button>
        </Link>
      }
    >
      <AdminTable
        items={content.experiences}
        emptyState="No experience records yet."
        columns={[
          { key: "title", header: "Title", render: (item) => item.title },
          { key: "org", header: "Organization", render: (item) => item.organization },
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
              <Link href={`/admin/experiences/${item.id}`} className="text-accent">
                Edit
              </Link>
            ),
          },
        ]}
      />
    </AdminShell>
  );
}

