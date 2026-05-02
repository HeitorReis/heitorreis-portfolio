import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Card } from "@/components/ui/card";
import { Tag } from "@/components/ui/tag";
import { formatPostCategory } from "@/lib/utils";

interface PostCardProps {
  title: string;
  excerpt: string;
  category: string;
  href: string;
}

export function PostCard({ title, excerpt, category, href }: PostCardProps) {
  return (
    <Card className="flex h-full flex-col gap-4">
      <Tag>{formatPostCategory(category)}</Tag>
      <div className="space-y-3">
        <h3 className="text-xl font-semibold tracking-[-0.02em]">{title}</h3>
        {excerpt ? <p className="text-sm leading-7 text-muted">{excerpt}</p> : null}
      </div>
      <Link
        href={href}
        className="inline-flex items-center gap-2 text-sm font-medium text-accent"
      >
        Read note <ArrowUpRight size={16} />
      </Link>
    </Card>
  );
}
