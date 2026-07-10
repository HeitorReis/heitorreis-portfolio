import { SiteShell } from "@/components/layout/site-shell";
import { ContactSection } from "@/components/sections/contact-section";
import { EducationSection } from "@/components/sections/education-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { FeaturedWorkSection } from "@/components/sections/featured-work-section";
import { HeroSection } from "@/components/sections/hero-section";
import { HowIThinkSection } from "@/components/sections/how-i-think-section";
import { ImpactStatsSection } from "@/components/sections/impact-stats-section";
import { LeadershipSection } from "@/components/sections/leadership-section";
import { MilestonesSection } from "@/components/sections/milestones-section";
import { PersonalSection } from "@/components/sections/personal-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SkillsMarqueeSection } from "@/components/sections/skills-marquee-section";
import { UpdatesSection } from "@/components/sections/updates-section";
import { getHomepagePayload } from "@/lib/repositories/public/content";

export default async function Home() {
  const payload = await getHomepagePayload();

  return (
    <SiteShell>
      <HeroSection settings={payload.settings} />
      <ImpactStatsSection />
      <FeaturedWorkSection
        experiences={payload.featuredExperiences}
        projects={payload.featuredProjects}
      />
      <SkillsMarqueeSection />
      <ExperienceSection experiences={payload.featuredExperiences} />
      <MilestonesSection milestones={payload.milestones} />
      <ProjectsSection />
      <EducationSection />
      <LeadershipSection />
      <HowIThinkSection />
      <PersonalSection />
      <UpdatesSection posts={payload.latestPosts} />
      <ContactSection />
    </SiteShell>
  );
}
