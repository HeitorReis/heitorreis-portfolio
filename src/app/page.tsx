import { PageViewTracker } from "@/components/analytics/page-view-tracker";
import { SiteShell } from "@/components/layout/site-shell";
import { AchievementsSection } from "@/components/sections/achievements-section";
import { ContactSection } from "@/components/sections/contact-section";
import { EducationSection } from "@/components/sections/education-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { FeaturedWorkSection } from "@/components/sections/featured-work-section";
import { HeroSection } from "@/components/sections/hero-section";
import { HowIThinkSection } from "@/components/sections/how-i-think-section";
import { PersonalSection } from "@/components/sections/personal-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { UpdatesSection } from "@/components/sections/updates-section";
import { getHomepagePayload } from "@/lib/repositories/public/content";

export default async function Home() {
  const payload = await getHomepagePayload();

  return (
    <SiteShell>
      <PageViewTracker />
      <HeroSection settings={payload.settings} />
      <FeaturedWorkSection
        experiences={payload.featuredExperiences}
        projects={payload.featuredProjects}
      />
      <ExperienceSection experiences={payload.featuredExperiences} />
      <ProjectsSection />
      <EducationSection />
      <AchievementsSection achievements={payload.achievements} />
      <HowIThinkSection />
      <PersonalSection />
      <UpdatesSection posts={payload.latestPosts} />
      <ContactSection />
    </SiteShell>
  );
}
