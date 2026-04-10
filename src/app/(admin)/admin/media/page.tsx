import { AdminShell } from "@/components/admin/admin-shell";
import { AdminTable } from "@/components/admin/admin-table";
import { MediaUploadForm } from "@/components/admin/media-upload-form";
import { requireAdminGuard } from "@/lib/auth/guard";
import { listAdminContent } from "@/lib/repositories/admin/content";

export default async function AdminMediaPage() {
  await requireAdminGuard();
  const content = await listAdminContent();

  return (
    <AdminShell
      title="Media"
      description="Upload public or private assets, then connect them to content records."
      activePath="/admin/media"
    >
      <div className="rounded-[28px] border border-line/70 bg-surface p-6">
        <MediaUploadForm />
      </div>

      <AdminTable
        items={content.media}
        emptyState="No media records yet."
        columns={[
          { key: "name", header: "File", render: (item) => item.fileName },
          { key: "path", header: "Path", render: (item) => item.filePath },
          { key: "bucket", header: "Bucket", render: (item) => item.bucketId },
          { key: "public", header: "Public", render: (item) => (item.isPublic ? "Yes" : "No") },
        ]}
      />
    </AdminShell>
  );
}

