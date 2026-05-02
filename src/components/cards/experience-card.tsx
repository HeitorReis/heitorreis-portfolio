import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Card } from "@/components/ui/card";
import { Tag } from "@/components/ui/tag";

interface ExperienceCardProps {
  title: string;
  organization: string;
  location?: string | null;
  timeframeLabel?: string | null;
  summary: string;
  responsibilities: string[];
  technologies: string[];
  impact: string[];
  href: string;
}

export function ExperienceCard({
  title,
  organization,
  location,
  timeframeLabel,
  summary,
  responsibilities,
  technologies,
  impact,
  href,
}: ExperienceCardProps) {
  const sections = [
    { label: "Contribution", items: responsibilities },
    { label: "Focus", items: technologies },
    { label: "Why it matters", items: impact },
  ].filter((section) => section.items.length > 0);

  return (
    <Card className="flex h-full flex-col gap-6">
      <div className="space-y-2">
        <p className="text-meta">{organization}</p>
        <h3 className="text-2xl font-semibold tracking-[-0.03em]">{title}</h3>
        <div className="flex flex-wrap gap-2 text-sm text-muted">
          {location ? <span>{location}</span> : null}
          {timeframeLabel ? <Tag>{timeframeLabel}</Tag> : null}
        </div>
        <p className="text-sm leading-7 text-muted">{summary}</p>
      </div>

      {sections.length ? (
        <div className="grid gap-4 md:grid-cols-3">
          {sections.map((section) => (
            <div key={section.label} className="space-y-2">
              <p className="text-meta">{section.label}</p>
              <ul className="space-y-2 text-sm leading-6 text-muted">
                {section.items.slice(0, 3).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : null}

      <Link
        href={href}
        className="inline-flex items-center gap-2 text-sm font-medium text-accent"
      >
        View details <ArrowUpRight size={16} />
      </Link>
    </Card>
  );
}
