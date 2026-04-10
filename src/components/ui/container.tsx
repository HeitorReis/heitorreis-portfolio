import { cn } from "@/lib/utils";

export function Container({
  className,
  children,
}: React.PropsWithChildren<{ className?: string }>) {
  return <div className={cn("page-shell", className)}>{children}</div>;
}

