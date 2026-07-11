import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";

import { SpotlightCard } from "@/components/motion/spotlight-card";
import { MediaFrame } from "@/components/ui/media-frame";
import { Tag } from "@/components/ui/tag";
import { cn } from "@/lib/utils";

interface FeaturedWorkCardProps {
  title: string;
  category: string;
  summary: string;
  href: string;
  imagePath: string | null;
  tags?: string[];
  impact?: string[];
  featured?: boolean;
}

export function FeaturedWorkCard({
  title,
  category,
  summary,
  href,
  imagePath,
  tags = [],
  impact = [],
  featured = false,
}: FeaturedWorkCardProps) {
  return (
    <SpotlightCard>
      <MediaFrame
        src={imagePath}
        alt={title}
        aspectClassName={featured ? "aspect-[16/9] lg:aspect-auto lg:h-80" : "aspect-[4/3]"}
        imageClassName="transition duration-500 ease-out group-hover:scale-105"
      />
      <div className="flex flex-1 flex-col gap-3">
        <div className="space-y-2">
          <div className="flex items-center justify-between gap-2">
            <p className="text-meta">{category}</p>
            {featured ? <Tag tone="accent">Featured</Tag> : null}
          </div>
          <h3
            className={cn(
              "font-semibold tracking-[-0.03em]",
              featured ? "text-[1.75rem] md:text-3xl" : "text-2xl",
            )}
          >
            {title}
          </h3>
          <p
            className={cn(
              "text-sm leading-7 text-muted",
              featured ? "line-clamp-4" : "line-clamp-2",
            )}
          >
            {summary}
          </p>
        </div>
        {tags.length ? (
          <div className="flex flex-wrap gap-2">
            {tags.slice(0, featured ? 5 : 3).map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        ) : null}
        {featured && impact.length ? (
          <ul className="space-y-2 border-t border-line/70 pt-3 text-sm leading-6 text-muted">
            {impact.slice(0, 2).map((item) => (
              <li key={item} className="flex gap-2">
                <Sparkles
                  size={14}
                  className="mt-1 shrink-0 text-accent"
                  aria-hidden="true"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        ) : null}
        <Link
          href={href}
          className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-accent"
        >
          View details
          <ArrowUpRight
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </Link>
      </div>
    </SpotlightCard>
  );
}
