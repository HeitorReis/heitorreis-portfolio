import { z } from "zod";

export const detailSectionSchema = z.object({
  key: z.enum([
    "context",
    "problem",
    "what-i-did",
    "technologies",
    "impact",
    "learning",
  ]),
  heading: z.string().trim().min(1).max(120),
  body: z.string().trim().min(1).max(4000),
  bullets: z.array(z.string().trim().min(1).max(280)).optional().default([]),
});

export const experienceSchema = z.object({
  slug: z.string().trim().min(1).max(120),
  title: z.string().trim().min(1).max(160),
  organization: z.string().trim().min(1).max(160),
  category: z.enum(["professional", "research", "innovation", "education", "leadership"]),
  location: z.string().trim().max(160).nullable().optional(),
  summary: z.string().trim().min(1).max(400),
  responsibilities: z.array(z.string().trim().min(1).max(280)),
  technologies: z.array(z.string().trim().min(1).max(120)),
  impact: z.array(z.string().trim().min(1).max(280)),
  timeframeLabel: z.string().trim().max(120).nullable().optional(),
  startDate: z.string().trim().nullable().optional(),
  endDate: z.string().trim().nullable().optional(),
  isFeatured: z.boolean().default(false),
  featureRank: z.number().int().min(1).max(12).nullable().optional(),
  isPublished: z.boolean().default(true),
  detailContent: z.array(detailSectionSchema).default([]),
  imagePath: z.string().trim().max(240).nullable().optional(),
});

