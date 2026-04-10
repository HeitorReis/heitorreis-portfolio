import { PageViewTracker } from "@/components/analytics/page-view-tracker";
import { ContactSection } from "@/components/sections/contact-section";

export const metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <>
      <PageViewTracker />
      <ContactSection />
    </>
  );
}

