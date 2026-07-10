import { SpotlightCard } from "@/components/motion/spotlight-card";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { Section } from "@/components/ui/section";
import { leadershipEntries } from "@/lib/constants/portfolio-content";

export function LeadershipSection() {
  return (
    <Section
      id="leadership"
      eyebrow="Leadership & Community"
      title="Beyond the resume."
      intro="Volunteer teaching, student leadership, and mentorship that shaped how Heitor communicates, organizes, and works with people outside a technical context."
      className="relative"
    >
      <RevealGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
        {leadershipEntries.map((entry) => (
          <RevealItem key={entry.title}>
            <SpotlightCard contentClassName="gap-2">
              <p className="text-meta">{entry.timeframe}</p>
              <h3 className="text-lg font-semibold tracking-[-0.02em]">{entry.title}</h3>
              <p className="text-sm font-medium text-fg">{entry.organization}</p>
              <p className="text-sm leading-6 text-muted">{entry.summary}</p>
            </SpotlightCard>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
