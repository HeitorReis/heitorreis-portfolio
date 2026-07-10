import { MilestoneTimeline } from "@/components/sections/milestone-timeline";
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
        <MilestoneTimeline milestones={milestones} />
      ) : (
        <EmptyState
          title="No public milestones yet"
          body="This section will update when milestone records are ready to share."
        />
      )}
    </Section>
  );
}
