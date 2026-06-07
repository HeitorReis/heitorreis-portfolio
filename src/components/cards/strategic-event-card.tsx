import type { StrategicEvent } from "@/types/domain";
import { Card } from "@/components/ui/card";
import { Tag } from "@/components/ui/tag";

interface StrategicEventCardProps {
  event: StrategicEvent;
}

export function StrategicEventCard({ event }: StrategicEventCardProps) {
  return (
    <Card className="flex h-full flex-col gap-5">
      <div className="space-y-2">
        <p className="text-meta">{event.organization}</p>
        <h3 className="text-xl font-semibold tracking-[-0.02em]">{event.title}</h3>
        <div className="flex flex-wrap gap-2 text-sm text-muted">
          <span>{event.location}</span>
          <Tag>{event.timeframeLabel}</Tag>
        </div>
        <p className="text-sm leading-7 text-muted">{event.summary}</p>
      </div>

      <div className="grid gap-4">
        <div className="space-y-2">
          <p className="text-meta">Recruiter signal</p>
          <p className="text-sm leading-7 text-muted">{event.recruiterSignal}</p>
        </div>
        {event.impact ? (
          <div className="space-y-2">
            <p className="text-meta">Impact</p>
            <p className="text-sm leading-7 text-muted">{event.impact}</p>
          </div>
        ) : null}
      </div>

      {event.tags.length ? (
        <div className="mt-auto flex flex-wrap gap-2">
          {event.tags.slice(0, 6).map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      ) : null}
    </Card>
  );
}
