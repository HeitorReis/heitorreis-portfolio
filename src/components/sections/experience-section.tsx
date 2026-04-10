import Link from "next/link";

import type { Experience } from "@/types/domain";
import { ExperienceCard } from "@/components/cards/experience-card";
import { EmptyState } from "@/components/ui/empty-state";
import { Section } from "@/components/ui/section";
import { SectionViewTracker } from "@/components/analytics/section-view-tracker";
import { selectedWorkEntries } from "@/lib/constants/portfolio-content";

export function ExperienceSection({ experiences }: { experiences: Experience[] }) {
  const experienceOverrides = new Map(
    selectedWorkEntries
      .filter((entry) => entry.kind === "experience")
      .map((entry) => [
        entry.slug,
        {
          title: entry.title,
          organization: entry.eyebrow,
          summary: entry.description,
          technologies: [...entry.tags],
        },
      ]),
  );

  const prioritizedSlugs = selectedWorkEntries
    .filter((entry) => entry.kind === "experience")
    .map((entry) => entry.slug);
  const experiencePriority = new Map(prioritizedSlugs.map((slug, index) => [slug, index]));

  const orderedExperiences = [...experiences].sort((left, right) => {
    const leftPriority = experiencePriority.get(left.slug) ?? Number.MAX_SAFE_INTEGER;
    const rightPriority = experiencePriority.get(right.slug) ?? Number.MAX_SAFE_INTEGER;

    if (leftPriority !== rightPriority) return leftPriority - rightPriority;

    return (left.featureRank ?? 999) - (right.featureRank ?? 999);
  });

  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Experience that shows value in context."
      intro="Experiences that show Heitor's ability to move between technical execution, structured problem-solving, and impact in real organizational contexts."
      actions={
        <Link
          href="/experience"
          className="inline-flex rounded-full border border-line bg-surface px-5 py-3 text-sm font-medium"
        >
          See experience summary
        </Link>
      }
      className="relative"
    >
      <SectionViewTracker sectionKey="experience" />
      {orderedExperiences.length ? (
        <div className="grid gap-6">
          {orderedExperiences.map((experience) => {
            const override = experienceOverrides.get(experience.slug);

            return (
              <ExperienceCard
                key={experience.id}
                title={override?.title ?? experience.title}
                organization={override?.organization ?? experience.organization}
                location={experience.location}
                timeframeLabel={experience.timeframeLabel}
                summary={override?.summary ?? experience.summary}
                responsibilities={experience.responsibilities}
                technologies={override?.technologies ?? experience.technologies}
                impact={experience.impact}
                href={`/experience/${experience.slug}`}
              />
            );
          })}
        </div>
      ) : (
        <EmptyState
          title="No public experience yet"
          body="This section will update when experience records are ready to share."
        />
      )}
    </Section>
  );
}
