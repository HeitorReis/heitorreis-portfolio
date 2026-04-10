import { contactSubmissionSchema } from "@/lib/validation/contact";
import { getServerSupabaseClient } from "@/lib/supabase/server";
import { consentTextVersion } from "@/lib/constants/privacy";

export async function submitVisitorInterest(input: unknown) {
  const parsed = contactSubmissionSchema.parse(input);
  const supabase = await getServerSupabaseClient();

  if (!supabase) {
    throw new Error("Supabase is not configured.");
  }

  const payload = {
    full_name: parsed.fullName,
    email: parsed.email || null,
    linkedin: parsed.linkedin || null,
    company: parsed.company || null,
    role: parsed.role || null,
    message: parsed.message || null,
    consent_text_version: consentTextVersion,
    consent_given: true,
    submitted_at: new Date().toISOString(),
  };

  const { error } = await (supabase.from("visitor_interest" as never) as any).insert(payload);

  if (error) {
    throw new Error(error.message);
  }

  return {
    ok: true,
  };
}

