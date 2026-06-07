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
}: DetailPageTemplateProps) {
  return (
    <>
      <section className="border-b border-line/60 py-16 md:py-24">
        <Container
          className={
            imagePath
              ? "grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center"
              : "grid gap-10"
          }
        >
          <div className="space-y-5">
            <p className="text-meta">{eyebrow}</p>
            <h1 className="max-w-4xl text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
              {title}
            </h1>
            <p className="reading-width text-lg leading-8 text-muted">{summary}</p>
            {meta.length ? (
              <div className="flex flex-wrap gap-2">
                {meta.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </div>
            ) : null}
          </div>
          {imagePath ? (
            <MediaFrame
              src={imagePath}
              alt={title}
              className="w-full"
              aspectClassName="aspect-[4/3]"
            />
          ) : null}
        </Container>
      </section>

      <Section eyebrow={contentEyebrow} title={contentTitle}>
        <div className="grid gap-6">
          {sections.map((section) => (
            <div
              key={section.heading}
              className="surface-card rounded-[28px] border border-line/70 p-6 md:p-8"
            >
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
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
