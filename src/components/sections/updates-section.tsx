import Link from "next/link";

import type { Post } from "@/types/domain";
import { PostCard } from "@/components/cards/post-card";
import { EmptyState } from "@/components/ui/empty-state";
import { Section } from "@/components/ui/section";

export function UpdatesSection({ posts }: { posts: Post[] }) {
  return (
    <Section
      id="updates"
      eyebrow="Updates"
      title="Notes on technology, products, and professional growth."
      intro="A collection of practical reflections on software, artificial intelligence, digital products, CRM, and the experiences shaping how I approach technology and business."
      titleClassName="text-[clamp(2rem,4vw,2.5rem)]"
      introClassName="text-[1.0625rem] leading-8"
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
      {posts.length ? (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
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
