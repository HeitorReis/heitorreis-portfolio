import { Button } from "@/components/ui/button";
import { InputField } from "@/components/ui/input-field";
import { TextareaField } from "@/components/ui/textarea-field";
import type { Post } from "@/types/domain";

export function PostEditor({
  post,
  action,
  deleteAction,
}: {
  post?: Post | null;
  action: (formData: FormData) => Promise<void>;
  deleteAction?: (formData: FormData) => Promise<void>;
}) {
  return (
    <div className="space-y-6">
      <form action={action} className="space-y-6">
        <input type="hidden" name="id" defaultValue={post?.id} />
        <div className="grid gap-5 md:grid-cols-2">
          <InputField label="Title" name="title" defaultValue={post?.title} required />
          <InputField label="Slug" name="slug" defaultValue={post?.slug} required />
          <InputField label="Category" name="category" defaultValue={post?.category} required />
          <InputField
            label="Related section"
            name="relatedSection"
            defaultValue={post?.relatedSection ?? "updates"}
          />
          <InputField
            label="Related project slug"
            name="relatedProjectSlug"
            defaultValue={post?.relatedProjectSlug ?? ""}
          />
          <InputField
            label="Cover image path"
            name="coverImagePath"
            defaultValue={post?.coverImagePath ?? ""}
          />
        </div>

        <TextareaField label="Excerpt" name="excerpt" defaultValue={post?.excerpt} required />
        <TextareaField label="Content" name="content" defaultValue={post?.content} required />

        <label className="flex items-center gap-3 rounded-[24px] border border-line bg-surface p-4 text-sm">
          <input type="checkbox" name="isPublished" defaultChecked={post?.isPublished} />
          Published
        </label>

        <Button type="submit">Save post</Button>
      </form>

      {post && deleteAction ? (
        <form action={deleteAction}>
          <input type="hidden" name="id" value={post.id} />
          <Button type="submit" variant="danger">
            Delete post
          </Button>
        </form>
      ) : null}
    </div>
  );
}

