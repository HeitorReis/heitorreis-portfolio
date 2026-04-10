import { savePostAction } from "@/app/(admin)/admin/actions";
import { AdminShell } from "@/components/admin/admin-shell";
import { PostEditor } from "@/components/admin/post-editor";
import { requireAdminGuard } from "@/lib/auth/guard";

export default async function NewPostPage() {
  await requireAdminGuard();

  return (
    <AdminShell
      title="New post"
      description="Add a short-form update or milestone. Keep it concise and publication-aware."
      activePath="/admin/posts"
    >
      <PostEditor action={savePostAction} />
    </AdminShell>
  );
}

