import { Marquee } from "@/components/motion/marquee";
import { skillMarqueeEntries } from "@/lib/constants/portfolio-content";

export function SkillsMarqueeSection() {
  return (
    <section className="border-b border-line/60 py-10">
      <Marquee durationSeconds={34}>
        {skillMarqueeEntries.map((skill) => (
          <span
            key={skill}
            className="flex items-center gap-8 whitespace-nowrap text-2xl font-semibold tracking-[-0.02em] text-muted/60 transition-colors hover:text-fg md:text-3xl"
          >
            {skill}
            <span className="text-accent/50" aria-hidden="true">
              /
            </span>
          </span>
        ))}
      </Marquee>
    </section>
  );
}
