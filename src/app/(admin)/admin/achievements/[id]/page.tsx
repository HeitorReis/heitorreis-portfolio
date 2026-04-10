import { notFound } from "next/navigation";

import {
  deleteAchievementAction,
  saveAchievementAction,
} from "@/app/(admin)/admin/actions";
import { AchievementEditor } from "@/components/admin/achievement-editor";
import { AdminShell } from "@/components/admin/admin-shell";
import { requireAdminGuard } from "@/lib/auth/guard";
import { listAdminContent } from "@/lib/repositories/admin/content";

export default async function EditAchievementPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  await requireAdminGuard();
  const { id } = await params;
  const content = await listAdminContent();
  const achievement = content.achievements.find((entry) => entry.id === id);

  if (!achievement) notFound();

  return (
    <AdminShell
      title={`Edit achievement: ${achievement.title}`}
      description="Adjust summary, ordering, and publication state."
      activePath="/admin/achievements"
    >
      <AchievementEditor
        achievement={achievement}
        action={saveAchievementAction}
        deleteAction={deleteAchievementAction}
      />
    </AdminShell>
  );
}

