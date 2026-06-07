import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { DetailPageTemplate } from "@/components/sections/detail-page-template";
import {
  getPostBySlug,
  getPublicDetailSlugs,
} from "@/lib/repositories/public/content";
import { formatPostCategory } from "@/lib/utils";

export async function generateStaticParams() {
  const slugs = await getPublicDetailSlugs();
  return slugs.posts.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Update",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function UpdateDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <DetailPageTemplate
      eyebrow="Update"
      title={post.title}
      summary={post.excerpt}
      imagePath={post.coverImagePath}
      meta={[formatPostCategory(post.category)]}
      contentEyebrow="Article"
      contentTitle="Reflections and lessons"
      sections={post.content}
    />
  );
}
