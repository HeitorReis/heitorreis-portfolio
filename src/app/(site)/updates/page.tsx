import { PostCard } from "@/components/cards/post-card";
import { EmptyState } from "@/components/ui/empty-state";
import { Section } from "@/components/ui/section";
import { getPublishedPosts } from "@/lib/repositories/public/content";

export const metadata = {
  title: "Updates",
};

export default async function UpdatesPage() {
  const posts = await getPublishedPosts();

  return (
    <Section
      eyebrow="Updates"
      title="Notes on technology, products, and professional growth."
      titleAs="h1"
      intro="A collection of practical reflections on software, artificial intelligence, digital products, CRM, and the experiences shaping how I approach technology and business."
      titleClassName="text-[clamp(2rem,4vw,2.5rem)]"
      introClassName="text-[1.0625rem] leading-8"
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
          body="This page will fill up when there is something short and useful to share."
        />
      )}
    </Section>
  );
}
