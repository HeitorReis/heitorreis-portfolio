import { Container } from "@/components/ui/container";
import { AnimatedCounter } from "@/components/motion/animated-counter";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { impactStatEntries } from "@/lib/constants/portfolio-content";

export function ImpactStatsSection() {
  return (
    <section className="border-b border-line/60 bg-surface-muted/60 py-12 md:py-16">
      <Container>
        <RevealGroup
          className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-5"
          stagger={0.08}
        >
          {impactStatEntries.map((stat, index) => (
            <RevealItem
              key={stat.label}
              className={
                index === 0
                  ? "flex flex-col items-start gap-2 text-left"
                  : "flex flex-col items-start gap-2 border-line/70 pl-0 text-left md:border-l md:pl-6"
              }
            >
              <AnimatedCounter
                value={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
                className="text-gradient text-4xl font-semibold tracking-[-0.03em] md:text-[2.75rem]"
              />
              <p className="max-w-[16rem] text-sm leading-6 text-muted">{stat.label}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
