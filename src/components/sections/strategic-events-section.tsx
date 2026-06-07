import type { StrategicEvent } from "@/types/domain";
import { StrategicEventCard } from "@/components/cards/strategic-event-card";
import { EmptyState } from "@/components/ui/empty-state";
import { Section } from "@/components/ui/section";
import { Stat } from "@/components/ui/stat";

const highlightMetrics = [
  { value: "60+", label: "national teams in winning hackathon" },
  { value: "1,500+", label: "participants mobilized across hackathon hubs" },
  { value: "5,571", label: "municipalities analyzed in AI research" },
  { value: "85k+", label: "professionals in the Hospitalar ecosystem" },
];

export function StrategicEventsSection({ events }: { events: StrategicEvent[] }) {
  return (
    <Section
      id="strategic-events"
      eyebrow="Strategic Events & Recognition"
      title="External validation and high-visibility execution."
      intro="Selected events, showcases, competitions, and strategic programs that highlight Heitor's external validation, leadership, innovation exposure, and ability to connect technology with real organizational impact."
      className="relative"
    >
      {events.length ? (
        <div className="grid gap-6">
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {highlightMetrics.map((metric) => (
              <Stat key={metric.label} value={metric.value} label={metric.label} />
            ))}
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {events.map((event) => (
              <StrategicEventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      ) : (
        <EmptyState
          title="No strategic events yet"
          body="Selected events and recognition will appear here when they are ready to share."
        />
      )}
    </Section>
  );
}
