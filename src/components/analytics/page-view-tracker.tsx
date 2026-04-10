"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

import { useTrackEvent } from "@/hooks/use-track-event";

export function PageViewTracker() {
  const pathname = usePathname();
  const trackEvent = useTrackEvent();

  useEffect(() => {
    trackEvent({
      eventType: "page_view",
      pagePath: pathname,
    });
  }, [pathname, trackEvent]);

  return null;
}

