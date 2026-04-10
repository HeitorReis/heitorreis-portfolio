import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { Tag } from "@/components/ui/tag";
import {
  academicPathEntries,
  technicalTrainingEntries,
} from "@/lib/constants/portfolio-content";

export function EducationSection() {
  return (
    <Section
      id="education"
      eyebrow="Education"
      title="Education & Technical Development"
      intro="A combination of academic foundation and hands-on technical training across engineering, AI, cloud, data, business tools, and emerging technologies."
      className="relative"
    >
      <div className="space-y-8">
        <div className="space-y-4">
          <div className="space-y-2">
            <p className="text-meta">Academic Path</p>
            <p className="text-sm leading-7 text-muted">
              Formal academic training that grounds Heitor’s multidisciplinary engineering path.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {academicPathEntries.map((entry) => (
              <Card key={entry.title} className="flex h-full flex-col gap-5">
                <div className="space-y-3">
                  <p className="text-meta">{entry.institution}</p>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-semibold tracking-[-0.03em]">{entry.title}</h3>
                    <Tag>{entry.meta}</Tag>
                  </div>
                  <p className="text-sm leading-7 text-muted">{entry.description}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {entry.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <p className="text-meta">Courses & Technical Training</p>
            <p className="text-sm leading-7 text-muted">
              Targeted programs that extend Heitor’s academic base into AI, cloud, telecom,
              automation, analytics, and applied software development.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {technicalTrainingEntries.map((entry) => (
              <Card key={`${entry.provider}-${entry.title}`} className="flex h-full flex-col gap-3">
                <div className="space-y-2">
                  <p className="text-meta">{entry.provider}</p>
                  <h3 className="text-xl font-semibold tracking-[-0.02em]">{entry.title}</h3>
                </div>
                <p className="text-sm leading-7 text-muted">{entry.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
