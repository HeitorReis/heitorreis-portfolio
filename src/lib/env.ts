const publicSiteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "";
const siteIndexingEnabled = process.env.NEXT_PUBLIC_ENABLE_INDEXING === "true";

export const env = {
  publicSiteUrl,
  siteIndexingEnabled,
};
