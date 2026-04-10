import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { PostCategory, ProjectCategory } from "@/types/domain";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function toSentenceCase(value: string) {
  return value.replace(/[-_]/g, " ").replace(/\b\w/g, (match) => match.toUpperCase());
}

const projectCategoryLabels: Record<ProjectCategory, string> = {
  "ai-driven-system": "AI System",
  engineering: "Engineering",
  research: "Research",
  compiler: "Compiler",
  hardware: "Hardware",
  tooling: "Tooling",
};

const postCategoryLabels: Record<PostCategory, string> = {
  "project-update": "Project Update",
  "achievement-news": "Recognition",
  learning: "Learning",
  milestone: "Milestone",
};

export function formatProjectCategory(value: ProjectCategory | string) {
  return projectCategoryLabels[value as ProjectCategory] ?? toSentenceCase(value);
}

export function formatPostCategory(value: PostCategory | string) {
  return postCategoryLabels[value as PostCategory] ?? toSentenceCase(value);
}

export function splitLines(value: string | null | undefined) {
  return (value ?? "")
    .split("\n")
    .map((entry) => entry.trim())
    .filter(Boolean);
}

export function joinLines(values: string[] | null | undefined) {
  return (values ?? []).join("\n");
}

export function ensureSlug(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function formatDateTime(value: string | null | undefined) {
  if (!value) return null;

  try {
    return new Intl.DateTimeFormat("en-US", {
      dateStyle: "medium",
      timeStyle: "short",
    }).format(new Date(value));
  } catch {
    return value;
  }
}

export function pick<T>(items: T[], count: number) {
  return items.slice(0, count);
}
