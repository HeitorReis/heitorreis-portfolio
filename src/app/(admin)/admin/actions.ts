"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { getServerSupabaseClient } from "@/lib/supabase/server";
import { getAdminGuardState, requireAdminGuard } from "@/lib/auth/guard";
import { splitLines, ensureSlug } from "@/lib/utils";
import { experienceSchema } from "@/lib/validation/experience";
import { projectSchema } from "@/lib/validation/project";
import { achievementSchema } from "@/lib/validation/achievement";
import { postSchema } from "@/lib/validation/post";
import { homepageSettingsSchema } from "@/lib/validation/homepage";

function checked(formData: FormData, name: string) {
  return formData.get(name) === "on";
}

function value(formData: FormData, name: string) {
  const entry = formData.get(name);
  return typeof entry === "string" ? entry.trim() : "";
}

async function getActionSupabase() {
  const guard = await requireAdminGuard();

  if (!guard.configured) {
    redirect("/admin/login?error=unconfigured");
  }

  const supabase = await getServerSupabaseClient();

  if (!supabase) {
    redirect("/admin/login?error=unconfigured");
  }

  return supabase;
}

export async function signInAction(formData: FormData) {
  const supabase = await getServerSupabaseClient();

  if (!supabase) {
    redirect("/admin/login?error=unconfigured");
  }

  const email = value(formData, "email");
  const password = value(formData, "password");

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    redirect(`/admin/login?error=${encodeURIComponent(error.message)}`);
  }

  const guard = await getAdminGuardState();

  if (!guard.isAdmin) {
    redirect("/admin/login?error=not-admin");
  }

  redirect("/admin");
}

export async function signOutAction() {
  const supabase = await getServerSupabaseClient();

  if (supabase) {
    await supabase.auth.signOut();
  }

  redirect("/admin/login");
}

export async function saveExperienceAction(formData: FormData) {
  const supabase = await getActionSupabase();
  const id = value(formData, "id");
  const isPublished = checked(formData, "isPublished");

  const parsed = experienceSchema.parse({
    slug: ensureSlug(value(formData, "slug")),
    title: value(formData, "title"),
    organization: value(formData, "organization"),
    category: value(formData, "category"),
    location: value(formData, "location") || null,
    summary: value(formData, "summary"),
    responsibilities: splitLines(value(formData, "responsibilities")),
    technologies: splitLines(value(formData, "technologies")),
    impact: splitLines(value(formData, "impact")),
    timeframeLabel: value(formData, "timeframeLabel") || null,
    isFeatured: checked(formData, "isFeatured"),
    featureRank: value(formData, "featureRank") ? Number(value(formData, "featureRank")) : null,
    isPublished,
    detailContent: [],
    imagePath: value(formData, "imagePath") || null,
  });

  await (supabase.from("experiences" as never) as any).upsert({
    ...(id ? { id } : {}),
    slug: parsed.slug,
    title: parsed.title,
    organization: parsed.organization,
    category: parsed.category,
    location: parsed.location ?? "",
    summary: parsed.summary,
    responsibilities: parsed.responsibilities,
    technologies: parsed.technologies,
    impact: parsed.impact,
    timeframe_label: parsed.timeframeLabel ?? "",
    is_featured: parsed.isFeatured,
    feature_rank: parsed.featureRank,
    is_published: parsed.isPublished,
    published_at: parsed.isPublished ? new Date().toISOString() : null,
    detail_content: [],
    image_path: parsed.imagePath,
  });

  revalidatePath("/");
  revalidatePath("/experience");
  revalidatePath("/admin/experiences");
  redirect("/admin/experiences");
}

export async function deleteExperienceAction(formData: FormData) {
  const supabase = await getActionSupabase();
  await (supabase.from("experiences" as never) as any).delete().eq("id", value(formData, "id"));
  revalidatePath("/");
  revalidatePath("/experience");
  revalidatePath("/admin/experiences");
  redirect("/admin/experiences");
}

export async function saveProjectAction(formData: FormData) {
  const supabase = await getActionSupabase();
  const id = value(formData, "id");
  const isPublished = checked(formData, "isPublished");

  const parsed = projectSchema.parse({
    slug: ensureSlug(value(formData, "slug")),
    title: value(formData, "title"),
    category: value(formData, "category"),
    summary: value(formData, "summary"),
    context: value(formData, "context"),
    problem: value(formData, "problem"),
    solution: value(formData, "solution"),
    technologies: splitLines(value(formData, "technologies")),
    impact: splitLines(value(formData, "impact")),
    learnings: splitLines(value(formData, "learnings")),
    isFeatured: checked(formData, "isFeatured"),
    featureRank: value(formData, "featureRank") ? Number(value(formData, "featureRank")) : null,
    isPublished,
    relatedExperienceId: value(formData, "relatedExperienceId") || null,
    imagePath: value(formData, "imagePath") || null,
  });

  await (supabase.from("projects" as never) as any).upsert({
    ...(id ? { id } : {}),
    slug: parsed.slug,
    title: parsed.title,
    category: parsed.category,
    summary: parsed.summary,
    context: parsed.context,
    problem: parsed.problem,
    solution: parsed.solution,
    technologies: parsed.technologies,
    impact: parsed.impact,
    learnings: parsed.learnings,
    is_featured: parsed.isFeatured,
    feature_rank: parsed.featureRank,
    is_published: parsed.isPublished,
    published_at: parsed.isPublished ? new Date().toISOString() : null,
    related_experience_id: parsed.relatedExperienceId,
    image_path: parsed.imagePath,
  });

  revalidatePath("/");
  revalidatePath("/admin/projects");
  redirect("/admin/projects");
}

export async function deleteProjectAction(formData: FormData) {
  const supabase = await getActionSupabase();
  await (supabase.from("projects" as never) as any).delete().eq("id", value(formData, "id"));
  revalidatePath("/");
  revalidatePath("/admin/projects");
  redirect("/admin/projects");
}

export async function saveAchievementAction(formData: FormData) {
  const supabase = await getActionSupabase();
  const id = value(formData, "id");
  const isPublished = checked(formData, "isPublished");

  const parsed = achievementSchema.parse({
    title: value(formData, "title"),
    organization: value(formData, "organization"),
    summary: value(formData, "summary"),
    impact: value(formData, "impact") || null,
    timeframeLabel: value(formData, "timeframeLabel") || null,
    imagePath: value(formData, "imagePath") || null,
    isFeatured: checked(formData, "isFeatured"),
    isPublished,
    sortOrder: Number(value(formData, "sortOrder") || 100),
  });

  await (supabase.from("achievements" as never) as any).upsert({
    ...(id ? { id } : {}),
    title: parsed.title,
    organization: parsed.organization,
    summary: parsed.summary,
    impact: parsed.impact ?? "",
    timeframe_label: parsed.timeframeLabel ?? "",
    image_path: parsed.imagePath,
    is_featured: parsed.isFeatured,
    sort_order: parsed.sortOrder,
    is_published: parsed.isPublished,
    published_at: parsed.isPublished ? new Date().toISOString() : null,
  });

  revalidatePath("/");
  revalidatePath("/admin/achievements");
  redirect("/admin/achievements");
}

export async function deleteAchievementAction(formData: FormData) {
  const supabase = await getActionSupabase();
  await (supabase.from("achievements" as never) as any).delete().eq("id", value(formData, "id"));
  revalidatePath("/");
  revalidatePath("/admin/achievements");
  redirect("/admin/achievements");
}

export async function savePostAction(formData: FormData) {
  const supabase = await getActionSupabase();
  const id = value(formData, "id");
  const isPublished = checked(formData, "isPublished");

  const parsed = postSchema.parse({
    slug: ensureSlug(value(formData, "slug")),
    title: value(formData, "title"),
    excerpt: value(formData, "excerpt"),
    content: value(formData, "content"),
    category: value(formData, "category"),
    relatedSection: value(formData, "relatedSection") || null,
    relatedProjectSlug: value(formData, "relatedProjectSlug") || null,
    isPublished,
    coverImagePath: value(formData, "coverImagePath") || null,
  });

  await (supabase.from("posts" as never) as any).upsert({
    ...(id ? { id } : {}),
    slug: parsed.slug,
    title: parsed.title,
    excerpt: parsed.excerpt,
    content: parsed.content,
    category: parsed.category,
    related_section: parsed.relatedSection ?? "updates",
    related_project_slug: parsed.relatedProjectSlug,
    is_published: parsed.isPublished,
    published_at: parsed.isPublished ? new Date().toISOString() : null,
    cover_image_path: parsed.coverImagePath,
  });

  revalidatePath("/");
  revalidatePath("/updates");
  revalidatePath("/admin/posts");
  redirect("/admin/posts");
}

export async function deletePostAction(formData: FormData) {
  const supabase = await getActionSupabase();
  await (supabase.from("posts" as never) as any).delete().eq("id", value(formData, "id"));
  revalidatePath("/");
  revalidatePath("/updates");
  revalidatePath("/admin/posts");
  redirect("/admin/posts");
}

export async function saveHomepageSettingsAction(formData: FormData) {
  const supabase = await getActionSupabase();
  const parsed = homepageSettingsSchema.parse({
    headline: value(formData, "headline"),
    subheadline: value(formData, "subheadline"),
    heroImagePath: value(formData, "heroImagePath") || null,
    showPhotoInHero: checked(formData, "showPhotoInHero"),
  });

  await (supabase.from("homepage_settings" as never) as any).upsert({
    id: 1,
    headline: parsed.headline,
    subheadline: parsed.subheadline,
    hero_image_path: parsed.heroImagePath,
    show_photo_in_hero: parsed.showPhotoInHero,
  });

  revalidatePath("/");
  revalidatePath("/admin/homepage");
  redirect("/admin/homepage");
}

