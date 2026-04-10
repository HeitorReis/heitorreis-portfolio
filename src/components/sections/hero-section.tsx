import type { HomepageSettings } from "@/types/domain";
import { MediaFrame } from "@/components/ui/media-frame";
import { Container } from "@/components/ui/container";
import { TrackableLink } from "@/components/analytics/trackable-link";
import { SectionViewTracker } from "@/components/analytics/section-view-tracker";

export function HeroSection({ settings }: { settings: HomepageSettings }) {
  return (
    <section className="relative overflow-hidden border-b border-line/60 py-16 md:py-24">
      <SectionViewTracker sectionKey="hero" />
      <Container className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-8">
          <div className="space-y-5">
            <p className="text-meta">Computer Engineering Student</p>
            <h1 className="max-w-4xl text-[clamp(3rem,7vw,5.25rem)] font-semibold leading-[0.95] tracking-[-0.05em]">
              {settings.headline}
            </h1>
            <p className="reading-width text-lg leading-8 text-muted">{settings.subheadline}</p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <TrackableLink
              href="#featured-work"
              eventType="cta_click"
              sectionKey="hero"
              metadataJson={{ label: "See Selected Work" }}
              className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-6 text-sm font-medium text-accent-fg shadow-[var(--shadow-sm)]"
            >
              See Selected Work
            </TrackableLink>
            <TrackableLink
              href="/contact"
              eventType="cta_click"
              sectionKey="hero"
              metadataJson={{ label: "Contact" }}
              className="inline-flex h-12 items-center justify-center rounded-full border border-line bg-surface px-6 text-sm font-medium text-fg"
            >
              Contact
            </TrackableLink>
          </div>

          <p className="max-w-2xl text-sm leading-7 text-muted">
            A multidisciplinary engineering profile, made easy to scan.
          </p>
        </div>

        <div className="lg:justify-self-end">
          <MediaFrame
            src={settings.heroImagePath}
            alt="Portrait of Heitor"
            className="mx-auto w-full max-w-md"
            aspectClassName="aspect-[4/5]"
          />
        </div>
      </Container>
    </section>
  );
}
