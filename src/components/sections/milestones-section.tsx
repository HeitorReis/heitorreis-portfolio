import { MilestoneCard } from "@/components/cards/milestone-card";
import { EmptyState } from "@/components/ui/empty-state";
import { Section } from "@/components/ui/section";
import type { Milestone } from "@/types/domain";

export function MilestonesSection({ milestones }: { milestones: Milestone[] }) {
  return (
    <Section
      id="milestones"
      eyebrow="Selected Milestones"
      title="Work that was tested, recognized, and applied in real settings."
      intro="A curated timeline of awards, national selections, research presentations, large-scale coordination, and strategic initiatives that show how Heitor turns technical work into visible outcomes."
      className="relative scroll-mt-24"
    >
      {milestones.length ? (
        <ol
          className="relative space-y-6 before:absolute before:bottom-6 before:left-[11px] before:top-6 before:w-px before:bg-line md:before:left-[13rem]"
          aria-label="Selected professional milestones"
        >
          {milestones.map((milestone, index) => (
            <li
              key={milestone.id}
              className="relative grid grid-cols-[24px_minmax(0,1fr)] gap-3 md:grid-cols-[11rem_32px_minmax(0,1fr)] md:gap-4"
            >
              <time
                dateTime={milestone.startDate}
                className="hidden pt-7 text-right font-mono text-xs font-semibold uppercase tracking-[0.12em] text-muted md:block"
              >
                {milestone.displayDate}
              </time>

              <div
                className="relative flex justify-center pt-8"
                aria-hidden="true"
              >
                <span className="z-10 size-3 rounded-full border-[3px] border-bg bg-accent ring-1 ring-accent/30" />
              </div>

              <MilestoneCard milestone={milestone} position={index + 1} />
            </li>
          ))}
        </ol>
      ) : (
        <EmptyState
          title="No public milestones yet"
          body="This section will update when milestone records are ready to share."
        />
      )}
    </Section>
  );
}
