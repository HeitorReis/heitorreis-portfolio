import { Quote } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/ui/section";

export function HowIThinkSection() {
  return (
    <Section
      id="how-i-think"
      eyebrow="How I think"
      title="Technical depth matters more when it stays useful."
      intro="Heitor is especially interested in problems that sit between technical depth and real-world use, whether in software, systems, AI, or digital health."
      className="relative"
    >
      <Reveal>
        <div className="surface-card reading-width relative overflow-hidden rounded-[32px] border border-line/70 p-8 pl-10 text-base leading-8 text-muted md:pl-12">
          <div
            aria-hidden="true"
            className="absolute inset-y-6 left-0 w-1 rounded-full bg-gradient-to-b from-accent via-accent-2 to-accent-3"
          />
          <Quote
            aria-hidden="true"
            size={36}
            className="mb-3 text-accent/30"
          />
          What stands out in his profile is not only technical range, but the ability to connect
          different layers of a problem clearly, from low-level systems to applied tools shaped by
          real users and real decisions.
        </div>
      </Reveal>
    </Section>
  );
}
