import { Button } from "@/components/ui/button";
import { InputField } from "@/components/ui/input-field";
import { TextareaField } from "@/components/ui/textarea-field";
import type { Achievement } from "@/types/domain";

export function AchievementEditor({
  achievement,
  action,
  deleteAction,
}: {
  achievement?: Achievement | null;
  action: (formData: FormData) => Promise<void>;
  deleteAction?: (formData: FormData) => Promise<void>;
}) {
  return (
    <div className="space-y-6">
      <form action={action} className="space-y-6">
        <input type="hidden" name="id" defaultValue={achievement?.id} />
        <div className="grid gap-5 md:grid-cols-2">
          <InputField label="Title" name="title" defaultValue={achievement?.title} required />
          <InputField
            label="Organization"
            name="organization"
            defaultValue={achievement?.organization}
            required
          />
          <InputField
            label="Timeframe label"
            name="timeframeLabel"
            defaultValue={achievement?.timeframeLabel ?? ""}
          />
          <InputField
            label="Sort order"
            name="sortOrder"
            type="number"
            defaultValue={achievement?.sortOrder.toString() ?? "100"}
            required
          />
          <InputField
            label="Image path"
            name="imagePath"
            defaultValue={achievement?.imagePath ?? ""}
          />
        </div>
        <TextareaField
          label="Summary"
          name="summary"
          defaultValue={achievement?.summary}
          required
        />
        <TextareaField label="Impact" name="impact" defaultValue={achievement?.impact ?? ""} />

        <div className="grid gap-4 md:grid-cols-2">
          <label className="flex items-center gap-3 rounded-[24px] border border-line bg-surface p-4 text-sm">
            <input type="checkbox" name="isFeatured" defaultChecked={achievement?.isFeatured} />
            Featured
          </label>
          <label className="flex items-center gap-3 rounded-[24px] border border-line bg-surface p-4 text-sm">
            <input type="checkbox" name="isPublished" defaultChecked={achievement?.isPublished} />
            Published
          </label>
        </div>

        <Button type="submit">Save achievement</Button>
      </form>

      {achievement && deleteAction ? (
        <form action={deleteAction}>
          <input type="hidden" name="id" value={achievement.id} />
          <Button type="submit" variant="danger">
            Delete achievement
          </Button>
        </form>
      ) : null}
    </div>
  );
}

