import { notFound } from "next/navigation";

import {
  deleteExperienceAction,
  saveExperienceAction,
} from "@/app/(admin)/admin/actions";
import { AdminShell } from "@/components/admin/admin-shell";
import { ExperienceEditor } from "@/components/admin/experience-editor";
import { requireAdminGuard } from "@/lib/auth/guard";
import { listAdminContent } from "@/lib/repositories/admin/content";

export default async function EditExperiencePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  await requireAdminGuard();
  const { id } = await params;
  const content = await listAdminContent();
  const experience = content.experiences.find((entry) => entry.id === id);

  if (!experience) notFound();

  return (
    <AdminShell
      title={`Edit experience: ${experience.title}`}
      description="Update the public summary, publication state, and featured ordering."
      activePath="/admin/experiences"
    >
      <ExperienceEditor
        experience={experience}
        action={saveExperienceAction}
        deleteAction={deleteExperienceAction}
      />
    </AdminShell>
  );
}

