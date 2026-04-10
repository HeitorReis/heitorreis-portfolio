"use client";

import type { ComponentProps } from "react";

import Link from "next/link";

import { cn } from "@/lib/utils";
import type { AnalyticsEventType, JsonValue, SectionKey } from "@/types/domain";
import { useTrackEvent } from "@/hooks/use-track-event";

interface TrackableLinkProps extends ComponentProps<typeof Link> {
  eventType: AnalyticsEventType;
  sectionKey?: SectionKey;
  metadataJson?: JsonValue;
}

export function TrackableLink({
  children,
  className,
  eventType,
  sectionKey,
  metadataJson,
  href,
  onClick,
  ...props
}: TrackableLinkProps) {
  const trackEvent = useTrackEvent();

  return (
    <Link
      href={href}
      className={cn(className)}
      onClick={(event) => {
        onClick?.(event);

        if (event.defaultPrevented) {
          return;
        }

        trackEvent({
          eventType,
          pagePath: typeof window !== "undefined" ? window.location.pathname : "/",
          sectionKey,
          metadataJson,
        });
      }}
      {...props}
    >
      {children}
    </Link>
  );
}
