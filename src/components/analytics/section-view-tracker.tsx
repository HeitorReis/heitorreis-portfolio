"use client";

import type { SectionKey } from "@/types/domain";
import { useSectionView } from "@/hooks/use-section-view";

export function SectionViewTracker({ sectionKey }: { sectionKey: SectionKey }) {
  const ref = useSectionView(sectionKey);

  return <div ref={ref} className="pointer-events-none absolute inset-x-0 top-0 h-1" aria-hidden />;
}

