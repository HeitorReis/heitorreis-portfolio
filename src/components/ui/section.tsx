import { cn } from "@/lib/utils";

import { Container } from "@/components/ui/container";

interface SectionProps {
  id?: string;
  eyebrow?: string;
  title?: string;
  intro?: string;
  titleAs?: "h1" | "h2";
  actions?: React.ReactNode;
  className?: string;
  contentClassName?: string;
  titleClassName?: string;
  introClassName?: string;
}

export function Section({
  id,
  eyebrow,
  title,
  intro,
  titleAs = "h2",
  actions,
  className,
  contentClassName,
  titleClassName,
  introClassName,
  children,
}: React.PropsWithChildren<SectionProps>) {
  const Title = titleAs;

  return (
    <section id={id} className={cn("section-padding", className)}>
      <Container>
        {(eyebrow || title || intro || actions) && (
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl space-y-3">
              {eyebrow ? <p className="text-meta">{eyebrow}</p> : null}
              {title ? (
                <Title
                  className={cn(
                    "text-3xl font-semibold tracking-[-0.03em]",
                    titleClassName,
                  )}
                >
                  {title}
                </Title>
              ) : null}
              {intro ? (
                <p
                  className={cn(
                    "reading-width text-base leading-7 text-muted",
                    introClassName,
                  )}
                >
                  {intro}
                </p>
              ) : null}
            </div>
            {actions ? <div className="shrink-0">{actions}</div> : null}
          </div>
        )}
        <div className={cn(contentClassName)}>{children}</div>
      </Container>
    </section>
  );
}
