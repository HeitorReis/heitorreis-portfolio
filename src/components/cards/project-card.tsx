import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { SpotlightCard } from "@/components/motion/spotlight-card";
import { Tag } from "@/components/ui/tag";
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
    <SpotlightCard>
      <div className="space-y-3">
        {badge || category ? (
          <div className="flex flex-wrap items-center gap-2">
            {badge ? <Tag tone={badgeTone}>{badge}</Tag> : null}
            {category ? <p className="text-meta">{formatProjectCategory(category)}</p> : null}
          </div>
        ) : null}
        <h3 className="text-xl font-semibold tracking-[-0.02em]">{title}</h3>
        <p className="line-clamp-3 text-sm leading-7 text-muted">{summary}</p>
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
              {impact.slice(0, 1).map((item) => (
                <li key={item} className="line-clamp-2">
                  {item}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      ) : null}

      <Link
        href={href}
        className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-accent"
      >
        {ctaLabel} <ArrowUpRight size={16} />
      </Link>
    </SpotlightCard>
  );
}
