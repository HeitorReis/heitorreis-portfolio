"use client";

import type { PointerEvent, ReactNode } from "react";
import { useRef } from "react";

import { cn } from "@/lib/utils";

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  accent?: boolean;
}

export function SpotlightCard({
  children,
  className,
  contentClassName,
  accent = false,
}: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el || event.pointerType === "touch") return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--spotlight-x", `${event.clientX - rect.left}px`);
    el.style.setProperty("--spotlight-y", `${event.clientY - rect.top}px`);
  }

  return (
    <div
      ref={ref}
      onPointerMove={handlePointerMove}
      className={cn(
        "spotlight-card surface-card group relative h-full overflow-hidden rounded-[28px] border border-line/70 p-5 transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1 hover:border-accent/60 hover:shadow-[var(--shadow-glow)] md:p-7",
        className,
      )}
    >
      <span className="spotlight-card-glow" aria-hidden="true" />
      {accent ? (
        <span
          aria-hidden="true"
          className="absolute inset-x-0 top-0 z-10 h-1 bg-gradient-to-r from-accent to-accent/20"
        />
      ) : null}
      <div className={cn("relative z-10 flex h-full flex-col gap-5", contentClassName)}>
        {children}
      </div>
    </div>
  );
}
