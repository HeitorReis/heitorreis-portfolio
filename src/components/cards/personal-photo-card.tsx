import { SpotlightCard } from "@/components/motion/spotlight-card";
import { MediaFrame } from "@/components/ui/media-frame";

export function PersonalPhotoCard({
  title,
  summary,
  imagePath,
}: {
  title: string;
  summary: string;
  imagePath: string;
}) {
  return (
    <SpotlightCard contentClassName="gap-4">
      <MediaFrame
        src={imagePath}
        alt={title}
        aspectClassName="aspect-[5/4]"
        imageClassName="transition duration-500 ease-out group-hover:scale-105"
      />
      <div className="space-y-2">
        <h3 className="text-lg font-semibold tracking-[-0.02em]">{title}</h3>
        {summary ? <p className="text-sm leading-7 text-muted">{summary}</p> : null}
      </div>
    </SpotlightCard>
  );
}
