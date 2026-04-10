import Link from "next/link";

import type { Post } from "@/types/domain";
import { PostCard } from "@/components/cards/post-card";
import { EmptyState } from "@/components/ui/empty-state";
import { Section } from "@/components/ui/section";
import { SectionViewTracker } from "@/components/analytics/section-view-tracker";

export function UpdatesSection({ posts }: { posts: Post[] }) {
  return (
    <Section
      id="updates"
      eyebrow="Updates"
      title="Short notes on recognition and progress."
      intro="A few updates that add context to recent work, recognition, and the ideas behind it."
      actions={
        <Link
          href="/updates"
          className="inline-flex rounded-full border border-line bg-surface px-5 py-3 text-sm font-medium"
        >
          See all updates
        </Link>
      }
      className="relative"
    >
      <SectionViewTracker sectionKey="updates" />
      {posts.length ? (
        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <PostCard
              key={post.id}
              title={post.title}
              excerpt={post.excerpt}
              category={post.category}
              href={`/updates/${post.slug}`}
            />
          ))}
        </div>
      ) : (
        <EmptyState
          title="No public updates yet"
          body="This space is reserved for short public notes when there is something worth sharing."
        />
      )}
    </Section>
  );
}
