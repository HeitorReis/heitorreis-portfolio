import { cn } from "@/lib/utils";

export function AuroraBackground({ className }: { className?: string }) {
  return (
    <div className={cn("aurora-layer", className)} aria-hidden="true">
      <div
        className="aurora-blob left-[4%] top-[-14%] h-[420px] w-[420px] bg-accent"
        style={{ animation: "aurora-drift-a 22s ease-in-out infinite" }}
      />
      <div
        className="aurora-blob right-[0%] top-[6%] h-[380px] w-[380px] bg-accent-2"
        style={{ animation: "aurora-drift-b 26s ease-in-out infinite" }}
      />
      <div
        className="aurora-blob bottom-[-18%] left-[28%] h-[360px] w-[360px] bg-accent-3"
        style={{ animation: "aurora-drift-c 24s ease-in-out infinite" }}
      />
    </div>
  );
}
