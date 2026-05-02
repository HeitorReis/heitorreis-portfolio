import type { Experience, Project } from "@/types/domain";
import { FeaturedWorkCard } from "@/components/cards/featured-work-card";
import { EmptyState } from "@/components/ui/empty-state";
import { Section } from "@/components/ui/section";
import { selectedWorkEntries } from "@/lib/constants/portfolio-content";

interface FeaturedWorkSectionProps {
  experiences: Experience[];
  projects: Project[];
}

export function FeaturedWorkSection({
  experiences,
  projects,
}: FeaturedWorkSectionProps) {
  const experienceBySlug = new Map(experiences.map((experience) => [experience.slug, experience]));
  const projectBySlug = new Map(projects.map((project) => [project.slug, project]));

  const items = selectedWorkEntries.flatMap((entry) => {
    const sourceSlugs = entry.sourceSlugs ?? [entry.slug];
    const imagePath =
      sourceSlugs
        .map(
          (slug) => experienceBySlug.get(slug)?.imagePath ?? projectBySlug.get(slug)?.imagePath,
        )
        .find((value): value is string => Boolean(value)) ?? null;

    const hasMatchingSource = sourceSlugs.some(
      (slug) => experienceBySlug.has(slug) || projectBySlug.has(slug),
    );

    if (!hasMatchingSource) return [];

    return [
      {
        title: entry.title,
        category: entry.eyebrow,
        summary: entry.description,
        href: entry.href,
        imagePath,
        tags: [...entry.tags],
      },
    ];
  });

  return (
    <Section
      id="featured-work"
      eyebrow="Featured work"
      title="Selected Work"
      intro="A curated view of the projects and experiences that best represent Heitor’s range across business systems, AI, software, and low-level engineering."
      className="relative"
    >
      {items.length ? (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {items.map((item) => (
            <FeaturedWorkCard key={item.href} {...item} />
          ))}
        </div>
      ) : (
        <EmptyState
          title="No featured work yet"
          body="Featured projects and experiences will appear here once the public selection is ready."
        />
      )}
    </Section>
  );
}
