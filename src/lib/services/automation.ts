import { env, hasServiceRole } from "@/lib/env";
import { getAdminGuardState } from "@/lib/auth/guard";
import { getServerSupabaseClient, getServiceRoleSupabaseClient } from "@/lib/supabase/server";
import {
  ingestAchievementSchema,
  ingestPostSchema,
  ingestProjectUpdateSchema,
} from "@/lib/validation/ingest";
import { ensureSlug } from "@/lib/utils";

async function getAutomationClient(request: Request) {
  const authorization = request.headers.get("authorization");

  if (env.ingestApiToken && authorization === `Bearer ${env.ingestApiToken}` && hasServiceRole()) {
    return getServiceRoleSupabaseClient();
  }

  const guard = await getAdminGuardState();

  if (guard.isAdmin) {
    return getServerSupabaseClient();
  }

  return null;
}

export async function ingestPost(request: Request, input: unknown) {
  const supabase = await getAutomationClient(request);

  if (!supabase) {
    throw new Error("Unauthorized");
  }

  const parsed = ingestPostSchema.parse(input);
  const slug = ensureSlug(parsed.slug ?? parsed.title);
  const publishedAt = parsed.isPublished ? new Date().toISOString() : null;

  const { data, error } = await (supabase.from("posts" as never) as any)
    .upsert({
      slug,
      title: parsed.title,
      excerpt: parsed.excerpt,
      content: parsed.content,
      category: parsed.category,
      related_section: parsed.relatedSection ?? "updates",
      related_project_slug: parsed.relatedProjectSlug ?? null,
      is_published: parsed.isPublished ?? false,
      published_at: publishedAt,
      cover_image_path: parsed.coverImagePath ?? null,
    })
    .select("slug")
    .maybeSingle();

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function ingestAchievement(request: Request, input: unknown) {
  const supabase = await getAutomationClient(request);

  if (!supabase) {
    throw new Error("Unauthorized");
  }

  const parsed = ingestAchievementSchema.parse(input);
  const publishedAt = parsed.isPublished ? new Date().toISOString() : null;

  const { error } = await (supabase.from("achievements" as never) as any).insert({
    title: parsed.title,
    organization: parsed.organization,
    summary: parsed.summary ?? "",
    impact: parsed.impact ?? "",
    timeframe_label: parsed.timeframeLabel ?? "",
    image_path: parsed.imagePath ?? null,
    is_featured: parsed.isFeatured ?? false,
    sort_order: parsed.sortOrder ?? 100,
    is_published: parsed.isPublished ?? false,
    published_at: publishedAt,
  });

  if (error) {
    throw new Error(error.message);
  }

  return {
    ok: true,
  };
}

export async function ingestProjectUpdate(request: Request, input: unknown) {
  const supabase = await getAutomationClient(request);

  if (!supabase) {
    throw new Error("Unauthorized");
  }

  const parsed = ingestProjectUpdateSchema.parse(input);
  const slug = ensureSlug(parsed.title);
  const publishedAt = parsed.isPublished ? new Date().toISOString() : null;

  const { error } = await (supabase.from("posts" as never) as any).insert({
    slug,
    title: parsed.title,
    excerpt: parsed.excerpt,
    content: parsed.content,
    category: "project-update",
    related_section: "updates",
    related_project_slug: parsed.projectSlug,
    is_published: parsed.isPublished ?? false,
    published_at: publishedAt,
    cover_image_path: parsed.coverImagePath ?? null,
  });

  if (error) {
    throw new Error(error.message);
  }

  return {
    ok: true,
  };
}

