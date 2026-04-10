import { notFound } from "next/navigation";

import { deleteProjectAction, saveProjectAction } from "@/app/(admin)/admin/actions";
import { AdminShell } from "@/components/admin/admin-shell";
import { ProjectEditor } from "@/components/admin/project-editor";
import { requireAdminGuard } from "@/lib/auth/guard";
import { listAdminContent } from "@/lib/repositories/admin/content";

export default async function EditProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  await requireAdminGuard();
  const { id } = await params;
  const content = await listAdminContent();
  const project = content.projects.find((entry) => entry.id === id);

  if (!project) notFound();

  return (
    <AdminShell
      title={`Edit project: ${project.title}`}
      description="Update the project story, publication state, and related experience links."
      activePath="/admin/projects"
    >
      <ProjectEditor project={project} action={saveProjectAction} deleteAction={deleteProjectAction} />
    </AdminShell>
  );
}

