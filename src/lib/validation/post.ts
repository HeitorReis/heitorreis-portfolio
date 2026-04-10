import { z } from "zod";

export const postSchema = z.object({
  slug: z.string().trim().min(1).max(120),
  title: z.string().trim().min(1).max(160),
  excerpt: z.string().trim().min(1).max(320),
  content: z.string().trim().min(1).max(4000),
  category: z.enum(["project-update", "achievement-news", "learning", "milestone"]),
  relatedSection: z
    .enum([
      "hero",
      "featured-work",
      "experience",
      "projects",
      "achievements",
      "how-i-think",
      "personal",
      "updates",
      "contact",
    ])
    .nullable()
    .optional(),
  relatedProjectSlug: z.string().trim().max(120).nullable().optional(),
  isPublished: z.boolean().default(false),
  publishedAt: z.string().trim().nullable().optional(),
  coverImagePath: z.string().trim().max(240).nullable().optional(),
});

