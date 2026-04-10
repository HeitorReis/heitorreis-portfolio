import { z } from "zod";

export const contactSubmissionSchema = z
  .object({
    fullName: z.string().trim().min(2).max(120),
    email: z.string().trim().email().max(160).optional().or(z.literal("")),
    linkedin: z.string().trim().url().max(240).optional().or(z.literal("")),
    company: z.string().trim().max(160).optional().or(z.literal("")),
    role: z.string().trim().max(160).optional().or(z.literal("")),
    message: z.string().trim().max(2000).optional().or(z.literal("")),
    consentGiven: z.boolean().refine((value) => value, {
      message: "Please confirm consent to submit the form.",
    }),
  })
  .refine(
    (value) => Boolean(value.email || value.linkedin),
    "Please share either an email address or a LinkedIn profile.",
  );
