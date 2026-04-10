import { cn } from "@/lib/utils";

import { Container } from "@/components/ui/container";

interface SectionProps {
  id?: string;
  eyebrow?: string;
  title?: string;
  intro?: string;
  actions?: React.ReactNode;
  className?: string;
  contentClassName?: string;
}

export function Section({
  id,
  eyebrow,
  title,
  intro,
  actions,
  className,
  contentClassName,
  children,
}: React.PropsWithChildren<SectionProps>) {
  return (
    <section id={id} className={cn("section-padding", className)}>
      <Container>
        {(eyebrow || title || intro || actions) && (
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl space-y-3">
              {eyebrow ? <p className="text-meta">{eyebrow}</p> : null}
              {title ? <h2 className="text-3xl font-semibold tracking-[-0.03em]">{title}</h2> : null}
              {intro ? <p className="reading-width text-base leading-7 text-muted">{intro}</p> : null}
            </div>
            {actions ? <div className="shrink-0">{actions}</div> : null}
          </div>
        )}
        <div className={cn(contentClassName)}>{children}</div>
      </Container>
    </section>
  );
}

