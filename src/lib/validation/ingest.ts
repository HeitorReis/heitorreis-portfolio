import { z } from "zod";

export const ingestPostSchema = z.object({
  title: z.string().trim().min(1).max(160),
  slug: z.string().trim().max(120).optional(),
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
    .optional(),
  relatedProjectSlug: z.string().trim().max(120).optional(),
  isPublished: z.boolean().optional(),
  coverImagePath: z.string().trim().max(240).optional(),
});

export const ingestAchievementSchema = z.object({
  title: z.string().trim().min(1).max(160),
  organization: z.string().trim().min(1).max(160),
  summary: z.string().trim().max(320).optional(),
  impact: z.string().trim().max(320).optional(),
  timeframeLabel: z.string().trim().max(120).optional(),
  imagePath: z.string().trim().max(240).optional(),
  isFeatured: z.boolean().optional(),
  sortOrder: z.number().int().min(1).max(100).optional(),
  isPublished: z.boolean().optional(),
});

export const ingestProjectUpdateSchema = z.object({
  projectSlug: z.string().trim().min(1).max(120),
  title: z.string().trim().min(1).max(160),
  excerpt: z.string().trim().min(1).max(320),
  content: z.string().trim().min(1).max(4000),
  isPublished: z.boolean().optional(),
  coverImagePath: z.string().trim().max(240).optional(),
});

