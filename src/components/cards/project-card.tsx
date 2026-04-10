import { ArrowUpRight } from "lucide-react";

import { Card } from "@/components/ui/card";
import { Tag } from "@/components/ui/tag";
import { TrackableLink } from "@/components/analytics/trackable-link";
import { formatProjectCategory } from "@/lib/utils";

type ProjectCardBadgeTone = "neutral" | "accent" | "success" | "warning" | "danger";

interface ProjectCardProps {
  title: string;
  category?: string;
  summary: string;
  technologies: string[];
  impact?: string[];
  href: string;
  badge?: string;
  badgeTone?: ProjectCardBadgeTone;
  ctaLabel?: string;
}

export function ProjectCard({
  title,
  category,
  summary,
  technologies,
  impact = [],
  href,
  badge,
  badgeTone = "accent",
  ctaLabel = "View details",
}: ProjectCardProps) {
  return (
    <Card className="flex h-full flex-col gap-5">
      <div className="space-y-3">
        {badge || category ? (
          <div className="flex flex-wrap items-center gap-2">
            {badge ? <Tag tone={badgeTone}>{badge}</Tag> : null}
            {category ? <p className="text-meta">{formatProjectCategory(category)}</p> : null}
          </div>
        ) : null}
        <h3 className="text-xl font-semibold tracking-[-0.02em]">{title}</h3>
        <p className="text-sm leading-7 text-muted">{summary}</p>
      </div>

      {Boolean(technologies.length || impact.length) ? (
        <div className="space-y-3">
          {technologies.length ? (
            <div className="flex flex-wrap gap-2">
              {technologies.slice(0, 3).map((entry) => (
                <Tag key={entry}>{entry}</Tag>
              ))}
            </div>
          ) : null}
          {impact.length ? (
            <ul className="space-y-2 text-sm leading-6 text-muted">
              {impact.slice(0, 2).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : null}
        </div>
      ) : null}

      <TrackableLink
        href={href}
        eventType="cta_click"
        sectionKey="projects"
        metadataJson={{ title }}
        className="inline-flex items-center gap-2 text-sm font-medium text-accent"
      >
        {ctaLabel} <ArrowUpRight size={16} />
      </TrackableLink>
    </Card>
  );
}
