import Link from "next/link";

import { Container } from "@/components/ui/container";

export default function SiteNotFound() {
  return (
    <div className="section-padding">
      <Container className="max-w-3xl space-y-5">
        <p className="text-meta">Not found</p>
        <h1 className="text-4xl font-semibold tracking-[-0.04em]">This page is not available.</h1>
        <p className="text-base leading-8 text-muted">
          If you expected something here, the link may be outdated or the content may still be
          unpublished.
        </p>
        <Link
          href="/"
          className="inline-flex rounded-full border border-line bg-surface px-5 py-3 text-sm font-medium"
        >
          Back to home
        </Link>
      </Container>
    </div>
  );
}
