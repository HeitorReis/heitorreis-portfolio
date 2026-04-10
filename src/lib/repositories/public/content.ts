import { cache } from "react";

import { getPublicServerSupabaseClient } from "@/lib/supabase/server";
import { defaultHomepageSettings } from "@/lib/constants/site-defaults";
import type {
  Achievement,
  DetailSection,
  Experience,
  HomepagePayload,
  HomepageSettings,
  Post,
  Project,
} from "@/types/domain";
import type { Database } from "@/types/database";

type ExperienceRow = Database["public"]["Tables"]["experiences"]["Row"];
type ProjectRow = Database["public"]["Tables"]["projects"]["Row"];
type AchievementRow = Database["public"]["Tables"]["achievements"]["Row"];
type PostRow = Database["public"]["Tables"]["posts"]["Row"];
type HomepageRow = Database["public"]["Tables"]["homepage_settings"]["Row"];

function stringArray(value: unknown) {
  if (!Array.isArray(value)) return [];
  return value.filter((entry): entry is string => typeof entry === "string" && entry.length > 0);
}

function detailArray(value: unknown): DetailSection[] {
  if (!Array.isArray(value)) return [];

  const result: DetailSection[] = [];

  for (const entry of value) {
    if (typeof entry !== "object" || entry === null) continue;
    const record = entry as Record<string, unknown>;

    if (typeof record.key !== "string" || typeof record.heading !== "string") continue;

    result.push({
      key: record.key as DetailSection["key"],
      heading: record.heading,
      body: typeof record.body === "string" ? record.body : "",
      bullets: stringArray(record.bullets),
    });
  }

  return result;
}

export function mapExperience(row: ExperienceRow): Experience {
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    organization: row.organization,
    category: row.category as Experience["category"],
    location: row.location || null,
    summary: row.summary,
    responsibilities: stringArray(row.responsibilities),
    technologies: stringArray(row.technologies),
    impact: stringArray(row.impact),
    timeframeLabel: row.timeframe_label || null,
    startDate: row.start_date,
    endDate: row.end_date,
    isFeatured: row.is_featured,
    featureRank: row.feature_rank,
    isPublished: row.is_published,
    publishedAt: row.published_at,
    detailContent: detailArray(row.detail_content),
    imagePath: row.image_path,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}

export function mapProject(row: ProjectRow): Project {
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    category: row.category as Project["category"],
    summary: row.summary,
    context: row.context,
    problem: row.problem,
    solution: row.solution,
    technologies: stringArray(row.technologies),
    impact: stringArray(row.impact),
    learnings: stringArray(row.learnings),
    isFeatured: row.is_featured,
    featureRank: row.feature_rank,
    isPublished: row.is_published,
    publishedAt: row.published_at,
    relatedExperienceId: row.related_experience_id,
    imagePath: row.image_path,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}

export function mapAchievement(row: AchievementRow): Achievement {
  return {
    id: row.id,
    title: row.title,
    organization: row.organization,
    summary: row.summary,
    impact: row.impact || null,
    timeframeLabel: row.timeframe_label || null,
    imagePath: row.image_path,
    isFeatured: row.is_featured,
    isPublished: row.is_published,
    publishedAt: row.published_at,
    sortOrder: row.sort_order,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}

export function mapPost(row: PostRow): Post {
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    excerpt: row.excerpt,
    content: row.content,
    category: row.category as Post["category"],
    relatedSection: row.related_section ? (row.related_section as Post["relatedSection"]) : null,
    relatedProjectSlug: row.related_project_slug || null,
    publishedAt: row.published_at,
    isPublished: row.is_published,
    coverImagePath: row.cover_image_path,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}

export function mapHomepage(row: HomepageRow): HomepageSettings {
  return {
    id: row.id,
    headline: row.headline,
    subheadline: row.subheadline,
    heroImagePath: row.hero_image_path,
    showPhotoInHero: row.show_photo_in_hero,
    updatedAt: row.updated_at,
  };
}

export function mapMedia(row: Database["public"]["Tables"]["media"]["Row"]) {
  return {
    id: row.id,
    fileName: row.file_name,
    filePath: row.file_path,
    altText: row.alt_text,
    mediaType: row.media_type as "image" | "video" | "document",
    bucketId: row.bucket_id,
    isPublic: row.is_public,
    relatedEntityType: row.related_entity_type as
      | "experience"
      | "project"
      | "achievement"
      | "post"
      | "homepage"
      | "personal"
      | null,
    relatedEntityId: row.related_entity_id,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}

function sortByFeatureRank<T extends { featureRank: number | null }>(items: T[]) {
  return [...items].sort((left, right) => (left.featureRank ?? 999) - (right.featureRank ?? 999));
}

function sortByNewest<T extends { publishedAt: string | null; createdAt: string }>(items: T[]) {
  return [...items].sort((left, right) =>
    (right.publishedAt ?? right.createdAt).localeCompare(left.publishedAt ?? left.createdAt),
  );
}

export const getHomepagePayload = cache(async (): Promise<HomepagePayload> => {
  const supabase = getPublicServerSupabaseClient();

  if (!supabase) {
    return {
      settings: defaultHomepageSettings,
      featuredExperiences: [],
      featuredProjects: [],
      achievements: [],
      latestPosts: [],
    };
  }

  const [settingsResult, experiencesResult, projectsResult, achievementsResult, postsResult] =
    await Promise.all([
      supabase.from("homepage_settings").select("*").eq("id", 1).maybeSingle(),
      supabase
        .from("experiences")
        .select("*")
        .eq("is_published", true)
        .eq("is_featured", true)
        .order("feature_rank", { ascending: true }),
      supabase
        .from("projects")
        .select("*")
        .eq("is_published", true)
        .eq("is_featured", true)
        .order("feature_rank", { ascending: true }),
      supabase
        .from("achievements")
        .select("*")
        .eq("is_published", true)
        .order("sort_order", { ascending: true }),
      supabase
        .from("posts")
        .select("*")
        .eq("is_published", true)
        .order("published_at", { ascending: false })
        .limit(3),
    ]);

  return {
    settings: settingsResult.data ? mapHomepage(settingsResult.data) : defaultHomepageSettings,
    featuredExperiences: (experiencesResult.data ?? []).map(mapExperience),
    featuredProjects: (projectsResult.data ?? []).map(mapProject),
    achievements: (achievementsResult.data ?? []).map(mapAchievement),
    latestPosts: (postsResult.data ?? []).map(mapPost),
  };
});

export const getExperienceSummaryData = cache(async () => {
  const supabase = getPublicServerSupabaseClient();

  if (!supabase) {
    return {
      experiences: [],
      projects: [],
      achievements: [],
    };
  }

  const [experiencesResult, projectsResult, achievementsResult] = await Promise.all([
    supabase.from("experiences").select("*").eq("is_published", true).order("feature_rank", {
      ascending: true,
      nullsFirst: false,
    }),
    supabase.from("projects").select("*").eq("is_published", true).order("feature_rank", {
      ascending: true,
      nullsFirst: false,
    }),
    supabase.from("achievements").select("*").eq("is_published", true).order("sort_order", {
      ascending: true,
    }),
  ]);

  return {
    experiences: (experiencesResult.data ?? []).map(mapExperience),
    projects: (projectsResult.data ?? []).map(mapProject),
    achievements: (achievementsResult.data ?? []).map(mapAchievement),
  };
});

export const getExperienceBySlug = cache(async (slug: string) => {
  const supabase = getPublicServerSupabaseClient();

  if (!supabase) return null;

  const { data } = await supabase
    .from("experiences")
    .select("*")
    .eq("slug", slug)
    .eq("is_published", true)
    .maybeSingle();

  return data ? mapExperience(data) : null;
});

export const getProjectBySlug = cache(async (slug: string) => {
  const supabase = getPublicServerSupabaseClient();

  if (!supabase) return null;

  const { data } = await supabase
    .from("projects")
    .select("*")
    .eq("slug", slug)
    .eq("is_published", true)
    .maybeSingle();

  return data ? mapProject(data) : null;
});

export const getPublishedPosts = cache(async () => {
  const supabase = getPublicServerSupabaseClient();

  if (!supabase) return [];

  const { data } = await supabase
    .from("posts")
    .select("*")
    .eq("is_published", true)
    .order("published_at", { ascending: false });

  return (data ?? []).map(mapPost);
});

export const getPostBySlug = cache(async (slug: string) => {
  const supabase = getPublicServerSupabaseClient();

  if (!supabase) return null;

  const { data } = await supabase
    .from("posts")
    .select("*")
    .eq("slug", slug)
    .eq("is_published", true)
    .maybeSingle();

  return data ? mapPost(data) : null;
});

export const getPublicDetailSlugs = cache(async () => {
  const supabase = getPublicServerSupabaseClient();

  if (!supabase) {
    return {
      experiences: [],
      projects: [],
      posts: [],
    };
  }

  const [experiencesResult, projectsResult, postsResult] = await Promise.all([
    supabase.from("experiences").select("slug").eq("is_published", true),
    supabase.from("projects").select("slug").eq("is_published", true),
    supabase.from("posts").select("slug").eq("is_published", true),
  ]);

  return {
    experiences: ((experiencesResult.data ?? []) as Array<{ slug: string }>).map((entry) => entry.slug),
    projects: ((projectsResult.data ?? []) as Array<{ slug: string }>).map((entry) => entry.slug),
    posts: ((postsResult.data ?? []) as Array<{ slug: string }>).map((entry) => entry.slug),
  };
});
