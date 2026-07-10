import { ArrowUpRight } from "lucide-react";

import { AuroraBackground } from "@/components/motion/aurora-background";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { SpotlightCard } from "@/components/motion/spotlight-card";
import { MediaFrame } from "@/components/ui/media-frame";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Tag } from "@/components/ui/tag";

interface DetailSectionBlock {
  heading: string;
  body?: string;
  paragraphs?: string[];
  list?: string[];
}

interface DetailPageTemplateProps {
  eyebrow: string;
  title: string;
  summary: string;
  imagePath?: string | null;
  meta?: string[];
  contentEyebrow?: string;
  contentTitle?: string;
  sections: DetailSectionBlock[];
  primaryLink?: { href: string; label: string } | null;
}

export function DetailPageTemplate({
  eyebrow,
  title,
  summary,
  imagePath,
  meta = [],
  contentEyebrow = "Details",
  contentTitle = "Context and notes",
  sections,
  primaryLink,
}: DetailPageTemplateProps) {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line/60 py-16 md:py-24">
        <AuroraBackground className="opacity-70" />
        <Container
          className={
            imagePath
              ? "relative grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center"
              : "relative grid gap-10"
          }
        >
          <Reveal>
            <div className="space-y-5">
              <p className="text-meta">{eyebrow}</p>
              <h1 className="max-w-4xl text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
                {title}
              </h1>
              <p className="reading-width text-lg leading-8 text-muted">{summary}</p>
              {meta.length || primaryLink ? (
                <div className="flex flex-wrap items-center gap-3">
                  {meta.map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                  {primaryLink ? (
                    <a
                      href={primaryLink.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex min-h-9 items-center gap-1.5 rounded-full border border-line bg-surface px-4 py-1.5 text-sm font-medium text-fg transition hover:-translate-y-0.5 hover:border-accent/40 hover:text-accent"
                    >
                      {primaryLink.label}
                      <ArrowUpRight size={14} aria-hidden="true" />
                    </a>
                  ) : null}
                </div>
              ) : null}
            </div>
          </Reveal>
          {imagePath ? (
            <Reveal delay={0.15}>
              <MediaFrame
                src={imagePath}
                alt={title}
                className="w-full"
                aspectClassName="aspect-[4/3]"
              />
            </Reveal>
          ) : null}
        </Container>
      </section>

      <Section eyebrow={contentEyebrow} title={contentTitle}>
        <RevealGroup className="grid gap-6" stagger={0.1}>
          {sections.map((section) => (
            <RevealItem key={section.heading}>
              <SpotlightCard className="md:p-8" contentClassName="gap-0">
                <h2 className="text-2xl font-semibold tracking-[-0.03em]">{section.heading}</h2>
                {section.body ? (
                  <p className="mt-4 max-w-4xl text-sm leading-7 text-muted">{section.body}</p>
                ) : null}
                {section.paragraphs?.length ? (
                  <div className="mt-4 max-w-4xl space-y-4 text-base leading-8 text-muted">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                ) : null}
                {section.list?.length ? (
                  <ul className="mt-5 grid gap-3 text-sm leading-7 text-muted md:grid-cols-2">
                    {section.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </SpotlightCard>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>
    </>
  );
}
