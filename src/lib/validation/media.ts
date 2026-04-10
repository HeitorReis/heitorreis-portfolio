import { z } from "zod";

export const mediaSchema = z.object({
  fileName: z.string().trim().min(1).max(240),
  filePath: z.string().trim().min(1).max(400),
  altText: z.string().trim().max(240).nullable().optional(),
  mediaType: z.enum(["image", "video", "document"]),
  relatedEntityType: z
    .enum(["experience", "project", "achievement", "post", "homepage", "personal"])
    .nullable()
    .optional(),
  relatedEntityId: z.string().uuid().nullable().optional(),
});

