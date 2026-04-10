import { PageViewTracker } from "@/components/analytics/page-view-tracker";
import { Section } from "@/components/ui/section";
import { privacySummary } from "@/lib/constants/privacy";

export const metadata = {
  title: "Privacy",
};

export default function PrivacyPage() {
  return (
    <>
      <PageViewTracker />
      <Section eyebrow="Privacy" title="Privacy, kept straightforward." intro={privacySummary}>
        <div className="grid gap-6">
          <div className="surface-card rounded-[28px] border border-line/70 p-6 md:p-8">
            <h2 className="text-xl font-semibold tracking-[-0.02em]">What this site stores</h2>
            <p className="mt-4 text-sm leading-7 text-muted">
              The contact form stores only the fields shown on the page, along with a submission
              timestamp and the consent version used at the time of submission.
            </p>
          </div>
          <div className="surface-card rounded-[28px] border border-line/70 p-6 md:p-8">
            <h2 className="text-xl font-semibold tracking-[-0.02em]">What this site measures</h2>
            <p className="mt-4 text-sm leading-7 text-muted">
              The site records limited event data such as page views, section views, featured work
              clicks, and contact submissions. It does not use session replay or invasive
              behavioral tracking.
            </p>
          </div>
          <div className="surface-card rounded-[28px] border border-line/70 p-6 md:p-8">
            <h2 className="text-xl font-semibold tracking-[-0.02em]">Why it is collected</h2>
            <p className="mt-4 text-sm leading-7 text-muted">
              The purpose of this data is limited to responding to outreach and understanding what
              parts of the portfolio are most useful.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
