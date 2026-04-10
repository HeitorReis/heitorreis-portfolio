export const placeholderImagePaths = {
  hero: "hero-heitor-profile.jpg",
  featuredEmma: "featured-emma-cover.jpg",
  featuredEmbraer: "featured-embraer-cover.jpg",
  featuredCompiler: "featured-compiler-cover.jpg",
  featuredProcessor: "featured-processor-cover.jpg",
  featuredResearch: "featured-research-cover.jpg",
  personalRunning: "personal-running.jpg",
  personalMusic: "personal-music.jpg",
  personal3dPrinting: "personal-3d-printing.jpg",
} as const;

export const publicPlaceholderBasePath = "/images/placeholders";

export function resolveImagePath(path: string | null | undefined) {
  if (!path) return null;
  if (path.startsWith("http://") || path.startsWith("https://") || path.startsWith("/")) {
    return path;
  }
  if (path.startsWith("placeholders/")) {
    return `${publicPlaceholderBasePath}/${path.replace(/^placeholders\//, "")}`;
  }

  return `${publicPlaceholderBasePath}/${path}`;
}
