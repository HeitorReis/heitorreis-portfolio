import { notFound } from "next/navigation";

import { deletePostAction, savePostAction } from "@/app/(admin)/admin/actions";
import { AdminShell } from "@/components/admin/admin-shell";
import { PostEditor } from "@/components/admin/post-editor";
import { requireAdminGuard } from "@/lib/auth/guard";
import { listAdminContent } from "@/lib/repositories/admin/content";

export default async function EditPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  await requireAdminGuard();
  const { id } = await params;
  const content = await listAdminContent();
  const post = content.posts.find((entry) => entry.id === id);

  if (!post) notFound();

  return (
    <AdminShell
      title={`Edit post: ${post.title}`}
      description="Keep post copy aligned with the public feed and automation payloads."
      activePath="/admin/posts"
    >
      <PostEditor post={post} action={savePostAction} deleteAction={deletePostAction} />
    </AdminShell>
  );
}

