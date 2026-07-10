"use client";

import { useState } from "react";
import Image from "next/image";
import { Sparkles } from "lucide-react";

import { resolveImagePath } from "@/lib/constants/placeholders";
import { cn } from "@/lib/utils";

interface MediaFrameProps {
  src?: string | null;
  alt?: string;
  className?: string;
  imageClassName?: string;
  aspectClassName?: string;
  sizes?: string;
}

export function MediaFrame({
  src,
  alt,
  className,
  imageClassName,
  aspectClassName = "aspect-[4/3]",
  sizes = "(min-width: 1024px) 40vw, 100vw",
}: MediaFrameProps) {
  const [hasError, setHasError] = useState(false);
  const resolved = resolveImagePath(src);

  if (!resolved || hasError) {
    return (
      <div
        className={cn(
          "relative flex items-center justify-center overflow-hidden rounded-[24px] border border-line/70 bg-surface-muted",
          aspectClassName,
          className,
        )}
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-br from-accent/15 via-accent-2/10 to-accent-3/15"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 text-accent/40 opacity-20 [background-image:radial-gradient(currentColor_1px,transparent_1px)] [background-size:18px_18px]"
        />
        <Sparkles aria-hidden="true" className="relative h-9 w-9 text-accent/50" />
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
      <Image
        src={resolved}
        alt={alt ?? "Portfolio image"}
        fill
        sizes={sizes}
        className={cn("object-cover", imageClassName)}
        onError={() => setHasError(true)}
      />
    </div>
  );
}
