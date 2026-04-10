import type { ComponentProps } from "react";

import { Mail, Phone } from "lucide-react";

import { TrackableLink } from "@/components/analytics/trackable-link";
import { Card } from "@/components/ui/card";
import { ContactForm } from "@/components/forms/contact-form";
import { Section } from "@/components/ui/section";
import { SectionViewTracker } from "@/components/analytics/section-view-tracker";
import { cn } from "@/lib/utils";

function LinkedInIcon(props: ComponentProps<"svg">) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" />
      <path d="M2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function ContactSection() {
  const contactItems = [
    {
      label: "LinkedIn",
      value: "https://www.linkedin.com/in/heitor-gbr",
      href: "https://www.linkedin.com/in/heitor-gbr",
      icon: LinkedInIcon,
      external: true,
    },
    {
      label: "Email",
      value: "tobiel.reis@gmail.com",
      href: "mailto:tobiel.reis@gmail.com",
      icon: Mail,
      external: false,
    },
    {
      label: "Mobile",
      value: "+55 (11) 91845-3735",
      href: "tel:+5511918453735",
      icon: Phone,
      external: false,
    },
  ] as const;

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Contact"
      intro="Feel free to get in touch for opportunities, collaborations, or conversations. You can connect through LinkedIn, send an email manually, or reach out by phone if that’s easier for you."
      className="relative"
    >
      <SectionViewTracker sectionKey="contact" />
      <div className="grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
        <Card className="min-w-0 space-y-6 overflow-hidden rounded-[32px] bg-surface-muted">
          <p className="text-sm leading-7 text-muted">
            The form remains available for a short note, but you can also use the direct contact
            options below if that is more practical.
          </p>
          <div className="space-y-3">
            {contactItems.map((item) => {
              const Icon = item.icon;
              const isLinkedIn = item.label === "LinkedIn";

              return (
                <TrackableLink
                  key={item.label}
                  href={item.href}
                  eventType="cta_click"
                  sectionKey="contact"
                  metadataJson={{ label: item.label, value: item.value }}
                  className={cn(
                    "grid min-w-0 grid-cols-[auto_minmax(0,1fr)] items-start gap-x-3 rounded-[24px] border border-line/70 bg-surface transition-colors hover:border-accent/30",
                    isLinkedIn ? "p-3.5" : "p-4",
                  )}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noreferrer" : undefined}
                >
                  <Icon
                    size={isLinkedIn ? 16 : 18}
                    className={cn("mt-1 shrink-0 text-accent", isLinkedIn && "mt-0.5")}
                  />
                  <div className={cn("min-w-0 overflow-hidden", isLinkedIn ? "space-y-0.5" : "space-y-1")}>
                    <p className="text-meta">{item.label}</p>
                    <p
                      className={cn(
                        "max-w-full text-muted",
                        isLinkedIn ? "break-words text-[0.82rem] leading-5" : "text-sm leading-6",
                      )}
                    >
                      {item.value}
                    </p>
                  </div>
                </TrackableLink>
              );
            })}
          </div>
          <p className="text-sm leading-7 text-muted">
            Only the information you choose to share through the form is stored, along with
            consent and a timestamp.
          </p>
        </Card>
        <div className="surface-card min-w-0 rounded-[32px] border border-line/70 p-6 md:p-8">
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}
