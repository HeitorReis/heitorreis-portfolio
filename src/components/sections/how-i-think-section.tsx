import { Layers, Target, Users } from "lucide-react";

import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { SpotlightCard } from "@/components/motion/spotlight-card";
import { Section } from "@/components/ui/section";

const principles = [
  {
    icon: Layers,
    label: "Systems thinking",
    description:
      "I move between hardware, software, and product layers instead of staying in just one.",
  },
  {
    icon: Users,
    label: "Built for real use",
    description: "Depth only matters if the person using it can actually act on it.",
  },
  {
    icon: Target,
    label: "Evidence over assumptions",
    description: "I check what I build against real outcomes, not just a working demo.",
  },
];

export function HowIThinkSection() {
  return (
    <Section
      id="how-i-think"
      eyebrow="How I think"
      title="Technical depth matters more when it stays useful."
      intro="I'm drawn to problems that sit between technical depth and real-world use, across software, systems, AI, and digital health."
      className="relative"
    >
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <Reveal>
          <p className="reading-width text-xl leading-9 text-fg md:text-2xl md:leading-[1.6]">
            What I try to bring isn&apos;t just technical range, but the ability to connect the
            different layers of a problem clearly &mdash; from low-level systems to the applied
            tools shaped by real users and real decisions.
          </p>
        </Reveal>

        <RevealGroup className="grid gap-4" stagger={0.08}>
          {principles.map((principle) => {
            const Icon = principle.icon;

            return (
              <RevealItem key={principle.label}>
                <SpotlightCard contentClassName="flex-row items-start gap-4" className="p-5">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent">
                    <Icon size={18} aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-fg">
                      {principle.label}
                    </span>
                    <span className="mt-1 block text-sm leading-6 text-muted">
                      {principle.description}
                    </span>
                  </span>
                </SpotlightCard>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </Section>
  );
}
