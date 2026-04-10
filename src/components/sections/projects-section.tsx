import { ProjectCard } from "@/components/cards/project-card";
import { Section } from "@/components/ui/section";
import { SectionViewTracker } from "@/components/analytics/section-view-tracker";

const githubProjects = [
  {
    id: "cminus_compiler",
    title: "C-minus Compiler",
    summary:
      "A full compiler pipeline project that reflects Heitor’s ability to connect parsing, semantic analysis, code generation, and machine-level execution in one working system.",
    technologies: ["Compiler Design", "Flex/Bison + Python", "IR to Machine Code"],
    href: "https://github.com/HeitorReis/cminus_compiler",
    badge: "Featured",
    badgeTone: "accent" as const,
  },
  {
    id: "TimeLapse",
    title: "TimeLapse Creator",
    summary:
      "A practical Python tool that turns folders of images into cleaner timelapse videos, with stabilization, frame filtering, and configurable output controls.",
    technologies: ["Python Tooling", "OpenCV Stabilization", "CLI Workflow"],
    href: "https://github.com/HeitorReis/TimeLapse",
    badge: "Practical Tool",
    badgeTone: "success" as const,
  },
  {
    id: "PCD",
    title: "K-Means Performance Analysis",
    summary:
      "A parallel computing project focused on comparing sequential, OpenMP, and CUDA implementations of one-dimensional K-Means.",
    technologies: ["OpenMP", "CUDA", "Performance Analysis"],
    href: "https://github.com/HeitorReis/PCD",
  },
  {
    id: "disaster_AI",
    title: "Association Rules for MUNIC Data",
    summary:
      "An applied AI repository centered on pattern recognition in MUNIC (IBGE) data, aligned with Heitor’s research and data-mining interests.",
    technologies: ["Applied AI", "Pattern Mining", "Public Data"],
    href: "https://github.com/HeitorReis/disaster_AI",
  },
];

export function ProjectsSection() {
  return (
    <Section id="projects" className="relative">
      <SectionViewTracker sectionKey="projects" />
      <div className="mb-10 max-w-3xl space-y-3">
        <h2 className="text-3xl font-semibold tracking-[-0.03em]">GitHub Projects</h2>
        <p className="reading-width text-lg leading-8 text-muted">
          A selected set of public repositories that reflect Heitor’s practical work
          across systems, automation, performance, and applied AI.
        </p>
        <p className="reading-width text-base leading-7 text-muted">
          This selection focuses on repositories that best represent Heitor’s
          practical work in systems, tooling, performance, and applied AI.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {githubProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            summary={project.summary}
            technologies={project.technologies}
            href={project.href}
            badge={project.badge}
            badgeTone={project.badgeTone}
            ctaLabel="View repository"
          />
        ))}
      </div>
    </Section>
  );
}
