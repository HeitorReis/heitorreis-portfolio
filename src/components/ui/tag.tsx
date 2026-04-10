import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const tagVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.12em]",
  {
    variants: {
      tone: {
        neutral: "border-line bg-surface text-muted",
        accent: "border-accent/20 bg-accent-soft text-accent",
        success: "border-success/20 bg-success/10 text-success",
        warning: "border-warning/20 bg-warning/10 text-warning",
        danger: "border-danger/20 bg-danger/10 text-danger",
      },
    },
    defaultVariants: {
      tone: "neutral",
    },
  },
);

export function Tag({
  className,
  tone,
  children,
}: React.PropsWithChildren<VariantProps<typeof tagVariants> & { className?: string }>) {
  return <span className={cn(tagVariants({ tone }), className)}>{children}</span>;
}

