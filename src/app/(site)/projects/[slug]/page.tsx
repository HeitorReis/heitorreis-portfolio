import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PageViewTracker } from "@/components/analytics/page-view-tracker";
import { DetailPageTemplate } from "@/components/sections/detail-page-template";
import { getProjectBySlug, getPublicDetailSlugs } from "@/lib/repositories/public/content";
import { formatProjectCategory } from "@/lib/utils";

export async function generateStaticParams() {
  const slugs = await getPublicDetailSlugs();
  return slugs.projects.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project",
    };
  }

  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const sections = [
    {
      heading: "Context",
      body: project.context,
    },
    {
      heading: "Problem or objective",
      body: project.problem,
    },
    {
      heading: "What Heitor did",
      body: project.solution,
    },
    ...(project.technologies.length
      ? [
          {
            heading: "Areas and methods",
            body: "Selected areas and methods connected to this work.",
            list: project.technologies,
          },
        ]
      : []),
    ...(project.impact.length
      ? [
          {
            heading: "Why it matters",
            body: "What makes this work worth showing early in the portfolio.",
            list: project.impact,
          },
        ]
      : []),
    ...(project.learnings.length
      ? [
          {
            heading: "Key learning",
            body: "Selected takeaways from the work.",
            list: project.learnings,
          },
        ]
      : []),
  ];

  return (
    <>
      <PageViewTracker />
      <DetailPageTemplate
        eyebrow="Project"
        title={project.title}
        summary={project.summary}
        imagePath={project.imagePath}
        meta={[formatProjectCategory(project.category)]}
        sections={sections}
      />
    </>
  );
}
