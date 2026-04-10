import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition hover:-translate-y-0.5 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-accent px-5 py-3 text-accent-fg shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)]",
        secondary:
          "border border-line bg-surface px-5 py-3 text-fg hover:bg-surface-muted",
        ghost: "px-4 py-3 text-fg hover:bg-accent-soft",
        quiet: "px-4 py-3 text-muted hover:bg-surface-muted hover:text-fg",
        link: "rounded-none px-0 py-0 text-accent hover:text-fg hover:translate-y-0",
        danger: "bg-danger px-5 py-3 text-white hover:shadow-[var(--shadow-md)]",
      },
      size: {
        sm: "h-10 px-4 text-sm",
        md: "h-11 px-5 text-sm",
        lg: "h-12 px-6 text-base",
        icon: "h-10 w-10 rounded-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
}

export function Button({
  className,
  variant,
  size,
  leadingIcon,
  trailingIcon,
  children,
  ...props
}: ButtonProps) {
  return (
    <button className={cn(buttonVariants({ variant, size }), className)} {...props}>
      {leadingIcon}
      {children}
      {trailingIcon}
    </button>
  );
}

