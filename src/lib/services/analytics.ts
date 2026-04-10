import { analyticsEventSchema } from "@/lib/validation/analytics";
import { getServerSupabaseClient } from "@/lib/supabase/server";

export async function recordAnalyticsEvent(input: unknown) {
  const parsed = analyticsEventSchema.parse(input);
  const supabase = await getServerSupabaseClient();

  if (!supabase) {
    return {
      ok: true,
      skipped: true,
    };
  }

  const payload = {
    session_id: parsed.sessionId,
    event_type: parsed.eventType,
    page_path: parsed.pagePath,
    section_key: parsed.sectionKey ?? null,
    metadata_json: parsed.metadataJson ?? {},
    occurred_at: new Date().toISOString(),
  };

  const { error } = await (supabase.from("analytics_events" as never) as any).insert(payload);

  if (error) {
    throw new Error(error.message);
  }

  return {
    ok: true,
    skipped: false,
  };
}
