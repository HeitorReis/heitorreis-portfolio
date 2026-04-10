import { cn } from "@/lib/utils";

export function Card({
  className,
  children,
}: React.PropsWithChildren<{ className?: string }>) {
  return (
    <div
      className={cn(
        "surface-card rounded-[28px] border border-line/70 p-5 md:p-7",
        className,
      )}
    >
      {children}
    </div>
  );
}

