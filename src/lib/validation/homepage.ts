import { z } from "zod";

export const homepageSettingsSchema = z.object({
  headline: z.string().trim().min(1).max(220),
  subheadline: z.string().trim().min(1).max(320),
  heroImagePath: z.string().trim().max(240).nullable().optional(),
  showPhotoInHero: z.boolean().default(true),
});

