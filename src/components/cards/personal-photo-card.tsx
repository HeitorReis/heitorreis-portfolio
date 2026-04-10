import { Card } from "@/components/ui/card";
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
    <Card className="flex h-full flex-col gap-4">
      <MediaFrame src={imagePath} alt={title} aspectClassName="aspect-[5/4]" />
      <div className="space-y-2">
        <h3 className="text-lg font-semibold tracking-[-0.02em]">{title}</h3>
        {summary ? <p className="text-sm leading-7 text-muted">{summary}</p> : null}
      </div>
    </Card>
  );
}
