import type { Achievement } from "@/types/domain";
import { AchievementCard } from "@/components/cards/achievement-card";
import { EmptyState } from "@/components/ui/empty-state";
import { Section } from "@/components/ui/section";

export function AchievementsSection({ achievements }: { achievements: Achievement[] }) {
  return (
    <Section
      id="achievements"
      eyebrow="Recognition"
      title="Recognition that reinforces the profile."
      intro="Selected recognition that adds external signal to the work without taking attention away from it."
      className="relative"
    >
      {achievements.length ? (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {achievements.map((achievement) => (
            <AchievementCard
              key={achievement.id}
              title={achievement.title}
              organization={achievement.organization}
              timeframeLabel={achievement.timeframeLabel}
              summary={achievement.summary}
            />
          ))}
        </div>
      ) : (
        <EmptyState
          title="No public recognition yet"
          body="This section will update when achievement records are ready to share."
        />
      )}
    </Section>
  );
}
