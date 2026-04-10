import { saveAchievementAction } from "@/app/(admin)/admin/actions";
import { AchievementEditor } from "@/components/admin/achievement-editor";
import { AdminShell } from "@/components/admin/admin-shell";
import { requireAdminGuard } from "@/lib/auth/guard";

export default async function NewAchievementPage() {
  await requireAdminGuard();

  return (
    <AdminShell
      title="New achievement"
      description="Create a concise recognition record with clear ordering and publish state."
      activePath="/admin/achievements"
    >
      <AchievementEditor action={saveAchievementAction} />
    </AdminShell>
  );
}

