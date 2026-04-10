import { Card } from "@/components/ui/card";

interface AchievementCardProps {
  title: string;
  organization: string;
  timeframeLabel?: string | null;
  summary: string;
}

export function AchievementCard({
  title,
  organization,
  timeframeLabel,
  summary,
}: AchievementCardProps) {
  return (
    <Card className="flex h-full flex-col gap-3">
      <p className="text-meta">{organization}</p>
      <h3 className="text-xl font-semibold tracking-[-0.02em]">{title}</h3>
      {timeframeLabel ? <p className="text-sm text-muted">{timeframeLabel}</p> : null}
      <p className="text-sm leading-7 text-muted">{summary}</p>
    </Card>
  );
}

