import Link from "next/link";

import { AdminShell } from "@/components/admin/admin-shell";
import { AdminTable } from "@/components/admin/admin-table";
import { Button } from "@/components/ui/button";
import { requireAdminGuard } from "@/lib/auth/guard";
import { listAdminContent } from "@/lib/repositories/admin/content";

export default async function AdminPostsPage() {
  await requireAdminGuard();
  const content = await listAdminContent();

  return (
    <AdminShell
      title="Posts"
      description="Manage the lightweight updates feed and keep payloads aligned with automation routes."
      activePath="/admin/posts"
      actions={
        <Link href="/admin/posts/new">
          <Button type="button">New post</Button>
        </Link>
      }
    >
      <AdminTable
        items={content.posts}
        emptyState="No posts yet."
        columns={[
          { key: "title", header: "Title", render: (item) => item.title },
          { key: "category", header: "Category", render: (item) => item.category },
          {
            key: "related",
            header: "Related project",
            render: (item) => item.relatedProjectSlug ?? "None",
          },
          { key: "published", header: "Published", render: (item) => (item.isPublished ? "Yes" : "No") },
          {
            key: "edit",
            header: "",
            render: (item) => (
              <Link href={`/admin/posts/${item.id}`} className="text-accent">
                Edit
              </Link>
            ),
          },
        ]}
      />
    </AdminShell>
  );
}

