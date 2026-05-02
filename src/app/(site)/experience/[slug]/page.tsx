import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { DetailPageTemplate } from "@/components/sections/detail-page-template";
import { getExperienceBySlug, getPublicDetailSlugs } from "@/lib/repositories/public/content";

export async function generateStaticParams() {
  const slugs = await getPublicDetailSlugs();
  return slugs.experiences.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const experience = await getExperienceBySlug(slug);

  if (!experience) {
    return {
      title: "Experience",
    };
  }

  return {
    title: experience.title,
    description: experience.summary,
  };
}

export default async function ExperienceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const experience = await getExperienceBySlug(slug);

  if (!experience) {
    notFound();
  }

  const sections =
    experience.detailContent.length > 0
      ? experience.detailContent.map((section) => ({
          heading: section.heading,
          body: section.body,
          list: section.bullets,
        }))
      : [
          {
            heading: "Overview",
            body: experience.summary,
          },
          ...(experience.responsibilities.length
            ? [
                {
                  heading: "Responsibilities",
                  body: "Selected responsibilities from this experience.",
                  list: experience.responsibilities,
                },
              ]
            : []),
          ...(experience.technologies.length
            ? [
                {
                  heading: "Focus",
                  body: "Areas connected to this experience.",
                  list: experience.technologies,
                },
              ]
            : []),
          ...(experience.impact.length
            ? [
                {
                  heading: "Why it matters",
                  body: "Why this experience belongs in the portfolio.",
                  list: experience.impact,
                },
              ]
            : []),
        ];

  return (
    <DetailPageTemplate
        eyebrow={experience.organization}
        title={experience.title}
        summary={experience.summary}
        imagePath={experience.imagePath}
        meta={[experience.timeframeLabel].filter((value): value is string => Boolean(value))}
        sections={sections}
    />
  );
}
