import { Button } from "@/components/ui/button";
import { InputField } from "@/components/ui/input-field";
import { TextareaField } from "@/components/ui/textarea-field";
import type { HomepageSettings } from "@/types/domain";

export function HomepageSettingsEditor({
  settings,
  action,
}: {
  settings: HomepageSettings;
  action: (formData: FormData) => Promise<void>;
}) {
  return (
    <form action={action} className="space-y-6">
      <TextareaField label="Headline" name="headline" defaultValue={settings.headline} required />
      <TextareaField
        label="Subheadline"
        name="subheadline"
        defaultValue={settings.subheadline}
        required
      />
      <InputField
        label="Hero image path"
        name="heroImagePath"
        defaultValue={settings.heroImagePath ?? ""}
      />
      <label className="flex items-center gap-3 rounded-[24px] border border-line bg-surface p-4 text-sm">
        <input type="checkbox" name="showPhotoInHero" defaultChecked={settings.showPhotoInHero} />
        Show photo in hero
      </label>
      <Button type="submit">Save homepage settings</Button>
    </form>
  );
}

