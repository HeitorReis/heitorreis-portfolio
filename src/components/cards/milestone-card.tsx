import { ArrowUpRight } from "lucide-react";

import { SpotlightCard } from "@/components/motion/spotlight-card";
import { Tag } from "@/components/ui/tag";
import { cn } from "@/lib/utils";
import type { Milestone } from "@/types/domain";

interface MilestoneCardProps {
  milestone: Milestone;
  position: number;
}

export function MilestoneCard({ milestone, position }: MilestoneCardProps) {
  return (
    <SpotlightCard
      accent={milestone.featured}
      className={cn(
        milestone.featured && "border-accent/30 bg-accent-soft/45 shadow-md",
      )}
    >
      <article aria-labelledby={`${milestone.id}-title`} className="space-y-6">
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <Tag tone={milestone.featured ? "accent" : "neutral"}>
              {milestone.category}
            </Tag>
            <time
              dateTime={milestone.startDate}
              className="font-mono text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-muted md:hidden"
            >
              {milestone.displayDate}
            </time>
            <span
              className="ml-auto font-mono text-[0.68rem] text-muted/70"
              aria-hidden="true"
            >
              {String(position).padStart(2, "0")}
            </span>
          </div>

          <div className="space-y-2">
            <h3
              id={`${milestone.id}-title`}
              className="text-2xl font-semibold tracking-[-0.03em] md:text-[1.75rem]"
            >
              {milestone.title}
            </h3>
            <p className="text-sm font-medium text-fg">
              {milestone.organization}
              {milestone.location ? (
                <span className="font-normal text-muted">
                  {" "}
                  · {milestone.location}
                </span>
              ) : null}
            </p>
          </div>

          <p className="max-w-3xl text-sm leading-7 text-muted">
            {milestone.description}
          </p>
        </div>

        <div className="grid gap-5 border-t border-line/70 pt-5 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          <div className="space-y-2">
            <p className="text-meta">My contribution</p>
            <p className="text-sm leading-6 text-muted">
              {milestone.contribution}
            </p>
          </div>

          <div className="space-y-3">
            <p className="text-meta">Evidence</p>
            <dl className="grid gap-2 sm:grid-cols-2">
              {milestone.evidence.map((item) => (
                <div
                  key={`${item.label}-${item.context}`}
                  className="rounded-2xl border border-line/70 bg-surface/70 px-4 py-3"
                >
                  <dt className="text-sm font-semibold text-fg">
                    {item.label}
                  </dt>
                  <dd className="mt-1 text-xs leading-5 text-muted">
                    {item.context}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {milestone.referenceUrl ? (
          <a
            href={milestone.referenceUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center gap-2 rounded-full text-sm font-medium text-accent"
            aria-label={`${milestone.referenceLabel ?? "View public reference"} for ${milestone.title} (opens in a new tab)`}
          >
            {milestone.referenceLabel ?? "View public reference"}
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        ) : null}
      </article>
    </SpotlightCard>
  );
}
