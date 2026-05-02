import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Card } from "@/components/ui/card";
import { MediaFrame } from "@/components/ui/media-frame";
import { Tag } from "@/components/ui/tag";

interface FeaturedWorkCardProps {
  title: string;
  category: string;
  summary: string;
  href: string;
  imagePath: string | null;
  tags?: string[];
}

export function FeaturedWorkCard({
  title,
  category,
  summary,
  href,
  imagePath,
  tags = [],
}: FeaturedWorkCardProps) {
  return (
    <Card className="group flex h-full flex-col gap-5">
      <MediaFrame src={imagePath} alt={title} />
      <div className="space-y-4">
        <div className="space-y-2">
          <p className="text-meta">{category}</p>
          <h3 className="text-2xl font-semibold tracking-[-0.03em]">{title}</h3>
          <p className="text-sm leading-7 text-muted">{summary}</p>
        </div>
        {tags.length ? (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        ) : null}
        <Link
          href={href}
          className="inline-flex items-center gap-2 text-sm font-medium text-accent"
        >
          View details <ArrowUpRight size={16} />
        </Link>
      </div>
    </Card>
  );
}
