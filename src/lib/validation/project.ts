import { z } from "zod";

export const projectSchema = z.object({
  slug: z.string().trim().min(1).max(120),
  title: z.string().trim().min(1).max(160),
  category: z.enum([
    "ai-driven-system",
    "engineering",
    "research",
    "compiler",
    "hardware",
    "tooling",
  ]),
  summary: z.string().trim().min(1).max(400),
  context: z.string().trim().min(1).max(2000),
  problem: z.string().trim().min(1).max(2000),
  solution: z.string().trim().min(1).max(2000),
  technologies: z.array(z.string().trim().min(1).max(120)),
  impact: z.array(z.string().trim().min(1).max(280)),
  learnings: z.array(z.string().trim().min(1).max(280)),
  isFeatured: z.boolean().default(false),
  featureRank: z.number().int().min(1).max(12).nullable().optional(),
  isPublished: z.boolean().default(true),
  relatedExperienceId: z.string().uuid().nullable().optional(),
  imagePath: z.string().trim().max(240).nullable().optional(),
});

