import { Button } from "@/components/ui/button";
import { InputField } from "@/components/ui/input-field";
import { TextareaField } from "@/components/ui/textarea-field";
import { joinLines } from "@/lib/utils";
import type { Project } from "@/types/domain";

export function ProjectEditor({
  project,
  action,
  deleteAction,
}: {
  project?: Project | null;
  action: (formData: FormData) => Promise<void>;
  deleteAction?: (formData: FormData) => Promise<void>;
}) {
  return (
    <div className="space-y-6">
      <form action={action} className="space-y-6">
        <input type="hidden" name="id" defaultValue={project?.id} />
        <div className="grid gap-5 md:grid-cols-2">
          <InputField label="Title" name="title" defaultValue={project?.title} required />
          <InputField label="Slug" name="slug" defaultValue={project?.slug} required />
          <InputField label="Category" name="category" defaultValue={project?.category} required />
          <InputField
            label="Feature rank"
            name="featureRank"
            type="number"
            defaultValue={project?.featureRank?.toString() ?? ""}
          />
          <InputField
            label="Related experience ID"
            name="relatedExperienceId"
            defaultValue={project?.relatedExperienceId ?? ""}
          />
          <InputField
            label="Image path"
            name="imagePath"
            defaultValue={project?.imagePath ?? ""}
          />
        </div>

        <TextareaField label="Summary" name="summary" defaultValue={project?.summary} required />
        <TextareaField label="Context" name="context" defaultValue={project?.context} required />
        <TextareaField label="Problem" name="problem" defaultValue={project?.problem} required />
        <TextareaField label="Solution" name="solution" defaultValue={project?.solution} required />
        <TextareaField
          label="Technologies"
          name="technologies"
          hint="One item per line."
          defaultValue={joinLines(project?.technologies)}
        />
        <TextareaField
          label="Impact"
          name="impact"
          hint="One item per line."
          defaultValue={joinLines(project?.impact)}
        />
        <TextareaField
          label="Learnings"
          name="learnings"
          hint="One item per line."
          defaultValue={joinLines(project?.learnings)}
        />

        <div className="grid gap-4 md:grid-cols-2">
          <label className="flex items-center gap-3 rounded-[24px] border border-line bg-surface p-4 text-sm">
            <input type="checkbox" name="isFeatured" defaultChecked={project?.isFeatured} />
            Featured on homepage
          </label>
          <label className="flex items-center gap-3 rounded-[24px] border border-line bg-surface p-4 text-sm">
            <input type="checkbox" name="isPublished" defaultChecked={project?.isPublished} />
            Published
          </label>
        </div>

        <Button type="submit">Save project</Button>
      </form>

      {project && deleteAction ? (
        <form action={deleteAction}>
          <input type="hidden" name="id" value={project.id} />
          <Button type="submit" variant="danger">
            Delete project
          </Button>
        </form>
      ) : null}
    </div>
  );
}

