import { PageViewTracker } from "@/components/analytics/page-view-tracker";
import { DetailPageTemplate } from "@/components/sections/detail-page-template";
import { getExperienceSummaryData } from "@/lib/repositories/public/content";

export const metadata = {
  title: "Experience Summary",
};

export default async function ExperienceSummaryPage() {
  const { experiences, projects, achievements } = await getExperienceSummaryData();

  return (
    <>
      <PageViewTracker />
      <DetailPageTemplate
        eyebrow="Experience summary"
        title="Experience, projects, and recognition in one place."
        summary="This page gives the quickest full scan of Heitor's range. Open individual detail pages wherever more depth is useful."
        sections={[
          {
            heading: "Experience",
            body:
              experiences.length > 0
                ? "Industry and research environments that show how Heitor works when the setting, rigor, or constraints change."
                : "No public experience entries are available yet.",
            list: experiences.map((entry) => entry.title),
          },
          {
            heading: "Projects",
            body:
              projects.length > 0
                ? "Technical work across AI, compilers, processor design, digital health, and software systems."
                : "No public project entries are available yet.",
            list: projects.map((entry) => entry.title),
          },
          {
            heading: "Recognition",
            body:
              achievements.length > 0
                ? "Selected recognition that adds external signal without taking over the page."
                : "No public recognition entries are available yet.",
            list: achievements.map((entry) => entry.title),
          },
        ]}
      />
    </>
  );
}
