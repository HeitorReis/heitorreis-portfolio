import { getServerSupabaseClient } from "@/lib/supabase/server";
import { getAdminGuardState } from "@/lib/auth/guard";
import {
  mapAchievement,
  mapExperience,
  mapHomepage,
  mapMedia,
  mapPost,
  mapProject,
} from "@/lib/repositories/public/content";
import { defaultHomepageSettings } from "@/lib/constants/site-defaults";
import type {
  Achievement,
  AnalyticsEvent,
  Experience,
  HomepageSettings,
  MediaAsset,
  Post,
  Project,
  VisitorInterest,
} from "@/types/domain";

async function requireAdminSupabase() {
  const guard = await getAdminGuardState();

  if (!guard.configured) {
    return null;
  }

  if (!guard.isAdmin) {
    throw new Error("Unauthorized");
  }

  const supabase = await getServerSupabaseClient();

  if (!supabase) {
    throw new Error("Supabase is not configured.");
  }

  return supabase;
}

export async function getAdminDashboardData() {
  const supabase = await requireAdminSupabase().catch(() => null);

  if (!supabase) {
    return {
      configured: false,
      counts: {
        experiences: 0,
        projects: 0,
        achievements: 0,
        posts: 0,
      },
      recentPosts: [] as Post[],
      visitorInterest: [] as VisitorInterest[],
      analytics: {
        totalVisits: 0,
        totalContactSubmissions: 0,
        mostViewedSections: [] as Array<{ sectionKey: string; count: number }>,
      },
    };
  }

  const [experienceCount, projectCount, achievementCount, postCount, recentPosts, visitorInterest, events] =
    await Promise.all([
      supabase.from("experiences").select("id", { count: "exact", head: true }),
      supabase.from("projects").select("id", { count: "exact", head: true }),
      supabase.from("achievements").select("id", { count: "exact", head: true }),
      supabase.from("posts").select("id", { count: "exact", head: true }),
      supabase.from("posts").select("*").order("updated_at", { ascending: false }).limit(3),
      supabase.from("visitor_interest").select("*").order("submitted_at", { ascending: false }).limit(5),
      supabase.from("analytics_events").select("event_type, section_key").limit(1000),
    ]);

  const sectionCounts = new Map<string, number>();
  let totalVisits = 0;
  let totalContactSubmissions = 0;

  const analyticsRows = (events.data ?? []) as Array<{
    event_type: string;
    section_key: string | null;
  }>;

  for (const event of analyticsRows) {
    if (event.event_type === "page_view") totalVisits += 1;
    if (event.event_type === "contact_submit") totalContactSubmissions += 1;

    if (event.section_key) {
      sectionCounts.set(event.section_key, (sectionCounts.get(event.section_key) ?? 0) + 1);
    }
  }

  return {
    configured: true,
    counts: {
      experiences: experienceCount.count ?? 0,
      projects: projectCount.count ?? 0,
      achievements: achievementCount.count ?? 0,
      posts: postCount.count ?? 0,
    },
    recentPosts: (recentPosts.data ?? []).map(mapPost),
    visitorInterest: (visitorInterest.data ?? []) as VisitorInterest[],
    analytics: {
      totalVisits,
      totalContactSubmissions,
      mostViewedSections: [...sectionCounts.entries()]
        .map(([sectionKey, count]) => ({ sectionKey, count }))
        .sort((left, right) => right.count - left.count)
        .slice(0, 5),
    },
  };
}

export async function listAdminContent() {
  const supabase = await requireAdminSupabase().catch(() => null);

  if (!supabase) {
    return {
      experiences: [] as Experience[],
      projects: [] as Project[],
      achievements: [] as Achievement[],
      posts: [] as Post[],
      homepageSettings: defaultHomepageSettings,
      media: [] as MediaAsset[],
    };
  }

  const [experiences, projects, achievements, posts, homepageSettings, media] = await Promise.all([
    supabase.from("experiences").select("*").order("updated_at", { ascending: false }),
    supabase.from("projects").select("*").order("updated_at", { ascending: false }),
    supabase.from("achievements").select("*").order("sort_order", { ascending: true }),
    supabase.from("posts").select("*").order("updated_at", { ascending: false }),
    supabase.from("homepage_settings").select("*").eq("id", 1).maybeSingle(),
    supabase.from("media").select("*").order("created_at", { ascending: false }),
  ]);

  return {
    experiences: (experiences.data ?? []).map(mapExperience),
    projects: (projects.data ?? []).map(mapProject),
    achievements: (achievements.data ?? []).map(mapAchievement),
    posts: (posts.data ?? []).map(mapPost),
    homepageSettings: homepageSettings.data ? mapHomepage(homepageSettings.data) : defaultHomepageSettings,
    media: (media.data ?? []).map(mapMedia),
  };
}

export async function listVisitorInterestRecords() {
  const supabase = await requireAdminSupabase().catch(() => null);

  if (!supabase) return [] as VisitorInterest[];

  const { data } = await supabase
    .from("visitor_interest")
    .select("*")
    .order("submitted_at", { ascending: false });

  return ((data ?? []) as Array<{
    id: string;
    full_name: string;
    email: string | null;
    linkedin: string | null;
    company: string | null;
    role: string | null;
    message: string | null;
    consent_text_version: string;
    consent_given: boolean;
    submitted_at: string;
    created_at: string;
  }>).map((item) => ({
    id: item.id,
    fullName: item.full_name,
    email: item.email,
    linkedin: item.linkedin,
    company: item.company,
    role: item.role,
    message: item.message,
    consentTextVersion: item.consent_text_version,
    consentGiven: item.consent_given,
    submittedAt: item.submitted_at,
    createdAt: item.created_at,
  }));
}

export async function listAnalyticsEvents() {
  const supabase = await requireAdminSupabase().catch(() => null);

  if (!supabase) return [] as AnalyticsEvent[];

  const { data } = await supabase
    .from("analytics_events")
    .select("*")
    .order("occurred_at", { ascending: false })
    .limit(250);

  return ((data ?? []) as Array<{
    id: string;
    session_id: string;
    event_type: string;
    page_path: string;
    section_key: string | null;
    metadata_json: Record<string, unknown> | null;
    occurred_at: string;
    created_at: string;
  }>).map((item) => ({
    id: item.id,
    sessionId: item.session_id,
    eventType: item.event_type as AnalyticsEvent["eventType"],
    pagePath: item.page_path,
    sectionKey: item.section_key as AnalyticsEvent["sectionKey"],
    metadataJson: (item.metadata_json ?? null) as AnalyticsEvent["metadataJson"],
    occurredAt: item.occurred_at,
    createdAt: item.created_at,
  }));
}

export async function saveHomepageSettings(input: HomepageSettings) {
  const supabase = await requireAdminSupabase();

  if (!supabase) {
    throw new Error("Supabase is not configured.");
  }

  const homepageSettingsTable = supabase.from("homepage_settings" as never) as any;

  const { error } = await homepageSettingsTable.upsert({
    id: 1,
    headline: input.headline,
    subheadline: input.subheadline,
    hero_image_path: input.heroImagePath,
    show_photo_in_hero: input.showPhotoInHero,
  });

  if (error) throw error;
}
