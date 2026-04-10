import type { MetadataRoute } from "next";

import { env } from "@/lib/env";
import { getPublicDetailSlugs } from "@/lib/repositories/public/content";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  if (!env.siteIndexingEnabled) {
    return [];
  }

  const slugs = await getPublicDetailSlugs();
  const routes = ["/", "/experience", "/updates", "/contact", "/privacy"];
  const baseUrl = env.publicSiteUrl || "http://localhost:3000";

  return [
    ...routes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
    })),
    ...slugs.experiences.map((slug) => ({
      url: `${baseUrl}/experience/${slug}`,
      lastModified: new Date(),
    })),
    ...slugs.projects.map((slug) => ({
      url: `${baseUrl}/projects/${slug}`,
      lastModified: new Date(),
    })),
    ...slugs.posts.map((slug) => ({
      url: `${baseUrl}/updates/${slug}`,
      lastModified: new Date(),
    })),
  ];
}
