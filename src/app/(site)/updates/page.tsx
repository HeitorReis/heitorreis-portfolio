import { PageViewTracker } from "@/components/analytics/page-view-tracker";
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
    <>
      <PageViewTracker />
      <Section
        eyebrow="Updates"
        title="Short notes on recognition and progress."
        intro="A small public feed for milestones, recognition, and other updates worth keeping visible."
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
    </>
  );
}
