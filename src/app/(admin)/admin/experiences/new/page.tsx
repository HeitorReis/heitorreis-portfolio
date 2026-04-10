import { saveExperienceAction } from "@/app/(admin)/admin/actions";
import { AdminShell } from "@/components/admin/admin-shell";
import { ExperienceEditor } from "@/components/admin/experience-editor";
import { requireAdminGuard } from "@/lib/auth/guard";

export default async function NewExperiencePage() {
  await requireAdminGuard();

  return (
    <AdminShell
      title="New experience"
      description="Create a new experience record. Leave unsupported factual fields blank rather than guessing."
      activePath="/admin/experiences"
    >
      <ExperienceEditor action={saveExperienceAction} />
    </AdminShell>
  );
}

