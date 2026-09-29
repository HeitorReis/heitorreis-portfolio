import { Layers, Target, Users } from "lucide-react";

import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { SpotlightCard } from "@/components/motion/spotlight-card";
import { Section } from "@/components/ui/section";

const principles = [
  {
    icon: Layers,
    label: "Systems thinking",
    description:
      "I can trace a problem across product, data, software, and hardware constraints.",
  },
  {
    icon: Users,
    label: "Useful by default",
    description: "A solution is not done until the person using it can act faster or better.",
  },
  {
    icon: Target,
    label: "Evidence over polish",
    description: "I prefer measurable improvement over demos that only look complete.",
  },
];

export function HowIThinkSection() {
  return (
    <Section
      id="how-i-think"
      eyebrow="How I think"
      title="The operating system behind the candidate."
      intro="The Heitor product is not one stack. It is a way of learning a context, identifying leverage, and shipping the smallest useful system that changes the result."
      className="relative"
    >
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <Reveal>
          <p className="reading-width text-xl leading-9 text-fg md:text-2xl md:leading-[1.6]">
            What I bring is technical range with judgment: the ability to understand the layer
            that matters, explain the tradeoff, and turn the work into something a team can use,
            measure, and maintain.
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
