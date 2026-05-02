import { Section } from "@/components/ui/section";
import { privacySummary } from "@/lib/constants/privacy";

export const metadata = {
  title: "Privacy",
};

export default function PrivacyPage() {
  return (
    <Section eyebrow="Privacy" title="Privacy, kept straightforward." intro={privacySummary}>
      <div className="grid gap-6">
        <div className="surface-card rounded-[28px] border border-line/70 p-6 md:p-8">
          <h2 className="text-xl font-semibold tracking-[-0.02em]">Contact</h2>
          <p className="mt-4 text-sm leading-7 text-muted">
            The site does not collect contact submissions. Outreach is handled through external
            social media profiles.
          </p>
        </div>
        <div className="surface-card rounded-[28px] border border-line/70 p-6 md:p-8">
          <h2 className="text-xl font-semibold tracking-[-0.02em]">Analytics</h2>
          <p className="mt-4 text-sm leading-7 text-muted">
            There is no event collection in this codebase. The site does not use session replay or
            invasive behavioral tracking.
          </p>
        </div>
        <div className="surface-card rounded-[28px] border border-line/70 p-6 md:p-8">
          <h2 className="text-xl font-semibold tracking-[-0.02em]">External platforms</h2>
          <p className="mt-4 text-sm leading-7 text-muted">
            Links to LinkedIn and GitHub open those services directly. Their own privacy terms
            apply once you leave this site.
          </p>
        </div>
      </div>
    </Section>
  );
}
