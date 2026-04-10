"use client";
/* eslint-disable @next/next/no-img-element */

import { useState } from "react";

import { resolveImagePath } from "@/lib/constants/placeholders";
import { cn } from "@/lib/utils";

interface MediaFrameProps {
  src?: string | null;
  alt?: string;
  className?: string;
  imageClassName?: string;
  aspectClassName?: string;
}

export function MediaFrame({
  src,
  alt,
  className,
  imageClassName,
  aspectClassName = "aspect-[4/3]",
}: MediaFrameProps) {
  const [hasError, setHasError] = useState(false);
  const resolved = resolveImagePath(src);

  if (!resolved || hasError) {
    return (
      <div
        className={cn(
          "relative overflow-hidden rounded-[24px] border border-dashed border-line bg-surface-muted",
          aspectClassName,
          className,
        )}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.12),_transparent_40%)]" />
        <div className="relative flex h-full items-end p-5">
          <span className="text-meta">Image unavailable</span>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[24px] border border-line bg-surface-muted",
        aspectClassName,
        className,
      )}
    >
      <img
        src={resolved}
        alt={alt ?? "Portfolio image"}
        className={cn("h-full w-full object-cover", imageClassName)}
        loading="lazy"
        onError={() => setHasError(true)}
      />
    </div>
  );
}
