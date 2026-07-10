import type { CSSProperties, ReactNode } from "react";

import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: ReactNode;
  className?: string;
  durationSeconds?: number;
  reverse?: boolean;
}

export function Marquee({
  children,
  className,
  durationSeconds = 30,
  reverse = false,
}: MarqueeProps) {
  return (
    <div
      className={cn("marquee", className)}
      style={{ "--marquee-duration": `${durationSeconds}s` } as CSSProperties}
    >
      <div className={cn("marquee-track", reverse && "marquee-track-reverse")}>
        <div className="marquee-group">{children}</div>
        <div className="marquee-group" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
