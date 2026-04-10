import { Container } from "@/components/ui/container";

export default function SiteLoading() {
  return (
    <div className="section-padding">
      <Container className="space-y-6">
        <div className="h-6 w-32 animate-pulse rounded-full bg-surface-muted" />
        <div className="h-16 max-w-3xl animate-pulse rounded-[24px] bg-surface-muted" />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="h-72 animate-pulse rounded-[28px] border border-line bg-surface-muted"
            />
          ))}
        </div>
      </Container>
    </div>
  );
}

