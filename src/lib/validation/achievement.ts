import { z } from "zod";

export const achievementSchema = z.object({
  title: z.string().trim().min(1).max(160),
  organization: z.string().trim().min(1).max(160),
  summary: z.string().trim().min(1).max(320),
  impact: z.string().trim().max(320).nullable().optional(),
  timeframeLabel: z.string().trim().max(120).nullable().optional(),
  imagePath: z.string().trim().max(240).nullable().optional(),
  isFeatured: z.boolean().default(true),
  isPublished: z.boolean().default(true),
  sortOrder: z.number().int().min(1).max(100),
});

