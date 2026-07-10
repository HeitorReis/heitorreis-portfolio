import { PersonalPhotoCard } from "@/components/cards/personal-photo-card";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { Section } from "@/components/ui/section";
import { personalCards } from "@/lib/constants/site-defaults";
import { cn } from "@/lib/utils";

export function PersonalSection() {
  return (
    <Section
      id="personal"
      eyebrow="Personal"
      title="A little context beyond the work."
      intro="Beyond engineering, Heitor values spaces that keep curiosity and discipline active, including music, running, and 3D printing."
      className="relative"
    >
      <RevealGroup className="grid gap-6 md:grid-cols-3" stagger={0.08}>
        {personalCards.map((card, index) => (
          <RevealItem key={card.title}>
            <div
              className={cn(
                "h-full transition-transform duration-300 md:hover:rotate-0",
                index % 2 === 0 ? "md:-rotate-1" : "md:rotate-1",
              )}
            >
              <PersonalPhotoCard {...card} />
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
