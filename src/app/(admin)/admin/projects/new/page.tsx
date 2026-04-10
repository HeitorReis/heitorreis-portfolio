import { saveProjectAction } from "@/app/(admin)/admin/actions";
import { AdminShell } from "@/components/admin/admin-shell";
import { ProjectEditor } from "@/components/admin/project-editor";
import { requireAdminGuard } from "@/lib/auth/guard";

export default async function NewProjectPage() {
  await requireAdminGuard();

  return (
    <AdminShell
      title="New project"
      description="Create a structured project record for the public site and future automation."
      activePath="/admin/projects"
    >
      <ProjectEditor action={saveProjectAction} />
    </AdminShell>
  );
}

