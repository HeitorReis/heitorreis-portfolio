import { getAdminGuardState } from "@/lib/auth/guard";
import { getServerSupabaseClient } from "@/lib/supabase/server";

export async function uploadMediaAsset(formData: FormData) {
  const guard = await getAdminGuardState();

  if (!guard.configured) {
    throw new Error("Supabase is not configured.");
  }

  if (!guard.isAdmin) {
    throw new Error("Unauthorized");
  }

  const supabase = await getServerSupabaseClient();

  if (!supabase) {
    throw new Error("Supabase is not configured.");
  }

  const file = formData.get("file");

  if (!(file instanceof File)) {
    throw new Error("A file is required.");
  }

  const bucketId = (formData.get("bucketId") as string | null) || "portfolio-public";
  const relatedEntityType = (formData.get("relatedEntityType") as string | null) || null;
  const relatedEntityId = (formData.get("relatedEntityId") as string | null) || null;
  const altText = (formData.get("altText") as string | null) || null;
  const fileName = file.name.replace(/\s+/g, "-").toLowerCase();
  const filePath = `uploads/${Date.now()}-${fileName}`;
  const fileBuffer = Buffer.from(await file.arrayBuffer());

  const { error: uploadError } = await supabase.storage
    .from(bucketId)
    .upload(filePath, fileBuffer, {
      contentType: file.type,
      upsert: true,
    });

  if (uploadError) {
    throw new Error(uploadError.message);
  }

  const { error: rowError } = await (supabase.from("media" as never) as any).insert({
    file_name: fileName,
    file_path: filePath,
    alt_text: altText,
    media_type: file.type.startsWith("image/") ? "image" : "document",
    bucket_id: bucketId,
    is_public: bucketId === "portfolio-public",
    related_entity_type: relatedEntityType,
    related_entity_id: relatedEntityId,
  });

  if (rowError) {
    throw new Error(rowError.message);
  }

  const publicUrl =
    bucketId === "portfolio-public"
      ? supabase.storage.from(bucketId).getPublicUrl(filePath).data.publicUrl
      : null;

  return {
    ok: true,
    filePath,
    bucketId,
    publicUrl,
  };
}
