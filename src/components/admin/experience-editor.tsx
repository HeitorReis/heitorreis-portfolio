import { Button } from "@/components/ui/button";
import { InputField } from "@/components/ui/input-field";
import { TextareaField } from "@/components/ui/textarea-field";
import { joinLines } from "@/lib/utils";
import type { Experience } from "@/types/domain";

export function ExperienceEditor({
  experience,
  action,
  deleteAction,
}: {
  experience?: Experience | null;
  action: (formData: FormData) => Promise<void>;
  deleteAction?: (formData: FormData) => Promise<void>;
}) {
  return (
    <div className="space-y-6">
      <form action={action} className="space-y-6">
        <input type="hidden" name="id" defaultValue={experience?.id} />
        <div className="grid gap-5 md:grid-cols-2">
          <InputField label="Title" name="title" defaultValue={experience?.title} required />
          <InputField
            label="Organization"
            name="organization"
            defaultValue={experience?.organization}
            required
          />
          <InputField label="Slug" name="slug" defaultValue={experience?.slug} required />
          <InputField
            label="Category"
            name="category"
            defaultValue={experience?.category ?? "professional"}
            required
          />
          <InputField label="Location" name="location" defaultValue={experience?.location ?? ""} />
          <InputField
            label="Timeframe label"
            name="timeframeLabel"
            defaultValue={experience?.timeframeLabel ?? ""}
          />
          <InputField
            label="Feature rank"
            name="featureRank"
            type="number"
            defaultValue={experience?.featureRank?.toString() ?? ""}
          />
          <InputField
            label="Image path"
            name="imagePath"
            defaultValue={experience?.imagePath ?? ""}
          />
        </div>

        <TextareaField
          label="Summary"
          name="summary"
          defaultValue={experience?.summary}
          required
        />
        <TextareaField
          label="Responsibilities"
          name="responsibilities"
          hint="One item per line."
          defaultValue={joinLines(experience?.responsibilities)}
        />
        <TextareaField
          label="Technologies / skills"
          name="technologies"
          hint="One item per line."
          defaultValue={joinLines(experience?.technologies)}
        />
        <TextareaField
          label="Impact"
          name="impact"
          hint="One item per line."
          defaultValue={joinLines(experience?.impact)}
        />

        <div className="grid gap-4 md:grid-cols-2">
          <label className="flex items-center gap-3 rounded-[24px] border border-line bg-surface p-4 text-sm">
            <input type="checkbox" name="isFeatured" defaultChecked={experience?.isFeatured} />
            Featured on homepage
          </label>
          <label className="flex items-center gap-3 rounded-[24px] border border-line bg-surface p-4 text-sm">
            <input type="checkbox" name="isPublished" defaultChecked={experience?.isPublished} />
            Published
          </label>
        </div>

        <Button type="submit">Save experience</Button>
      </form>

      {experience && deleteAction ? (
        <form action={deleteAction}>
          <input type="hidden" name="id" value={experience.id} />
          <Button type="submit" variant="danger">
            Delete experience
          </Button>
        </form>
      ) : null}
    </div>
  );
}

