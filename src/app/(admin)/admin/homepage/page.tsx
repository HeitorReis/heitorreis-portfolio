import { saveHomepageSettingsAction } from "@/app/(admin)/admin/actions";
import { AdminShell } from "@/components/admin/admin-shell";
import { HomepageSettingsEditor } from "@/components/admin/homepage-settings-editor";
import { requireAdminGuard } from "@/lib/auth/guard";
import { listAdminContent } from "@/lib/repositories/admin/content";

export default async function AdminHomepagePage() {
  await requireAdminGuard();
  const content = await listAdminContent();

  return (
    <AdminShell
      title="Homepage settings"
      description="Update the main headline, subheadline, and hero image path."
      activePath="/admin/homepage"
    >
      <div className="rounded-[28px] border border-line/70 bg-surface p-6">
        <HomepageSettingsEditor
          settings={content.homepageSettings}
          action={saveHomepageSettingsAction}
        />
      </div>
    </AdminShell>
  );
}

