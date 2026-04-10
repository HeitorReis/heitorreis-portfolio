"use client";

import { useEffect, useRef } from "react";

import type { SectionKey } from "@/types/domain";
import { useTrackEvent } from "@/hooks/use-track-event";

export function useSectionView(sectionKey: SectionKey) {
  const ref = useRef<HTMLDivElement | null>(null);
  const hasTracked = useRef(false);
  const trackEvent = useTrackEvent();

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (hasTracked.current) return;

        for (const entry of entries) {
          if (entry.isIntersecting) {
            hasTracked.current = true;
            trackEvent({
              eventType: "section_view",
              pagePath: window.location.pathname,
              sectionKey,
            });
            observer.disconnect();
            break;
          }
        }
      },
      {
        threshold: 0.4,
      },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [sectionKey, trackEvent]);

  return ref;
}

