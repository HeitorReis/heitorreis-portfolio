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
      <div className="surface-card reading-width rounded-[32px] border border-line/70 p-8 text-base leading-8 text-muted">
        What stands out in his profile is not only technical range, but the ability to connect
        different layers of a problem clearly, from low-level systems to applied tools shaped by
        real users and real decisions.
      </div>
    </Section>
  );
}
