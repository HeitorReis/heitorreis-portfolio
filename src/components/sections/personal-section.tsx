import { PersonalPhotoCard } from "@/components/cards/personal-photo-card";
import { Section } from "@/components/ui/section";
import { SectionViewTracker } from "@/components/analytics/section-view-tracker";
import { personalCards } from "@/lib/constants/site-defaults";

export function PersonalSection() {
  return (
    <Section
      id="personal"
      eyebrow="Personal"
      title="A little context beyond the work."
      intro="Beyond engineering, Heitor values spaces that keep curiosity and discipline active, including music, running, and 3D printing."
      className="relative"
    >
      <SectionViewTracker sectionKey="personal" />
      <div className="grid gap-6 md:grid-cols-3">
        {personalCards.map((card) => (
          <PersonalPhotoCard key={card.title} {...card} />
        ))}
      </div>
    </Section>
  );
}
