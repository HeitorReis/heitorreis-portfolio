import { z } from "zod";

const eventTypes = [
  "page_view",
  "section_view",
  "featured_click",
  "cta_click",
  "post_click",
  "contact_submit",
] as const;

const sectionKeys = [
  "hero",
  "featured-work",
  "experience",
  "projects",
  "achievements",
  "how-i-think",
  "personal",
  "updates",
  "contact",
] as const;

export const analyticsEventSchema = z.object({
  sessionId: z.string().trim().min(8).max(120),
  eventType: z.enum(eventTypes),
  pagePath: z.string().trim().min(1).max(240),
  sectionKey: z.enum(sectionKeys).optional(),
  metadataJson: z.record(z.string(), z.unknown()).optional(),
});
