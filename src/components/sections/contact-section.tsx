import type { ComponentProps } from "react";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { AuroraBackground } from "@/components/motion/aurora-background";
import { Magnetic } from "@/components/motion/magnetic";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { SpotlightCard } from "@/components/motion/spotlight-card";
import { Section } from "@/components/ui/section";

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

function GitHubIcon(props: ComponentProps<"svg">) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.5v-1.91c-2.78.62-3.37-1.21-3.37-1.21-.45-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.86.09-.67.35-1.12.63-1.38-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.96c.85 0 1.7.12 2.5.34 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9v2.81c0 .28.18.6.69.5A10.12 10.12 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

export function ContactSection() {
  const socialItems = [
    {
      label: "LinkedIn",
      value: "linkedin.com/in/heitor-gbr",
      href: "https://www.linkedin.com/in/heitor-gbr",
      icon: LinkedInIcon,
    },
    {
      label: "GitHub",
      value: "github.com/HeitorReis",
      href: "https://github.com/HeitorReis",
      icon: GitHubIcon,
    },
  ] as const;

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Find me on social media."
      intro="This site no longer collects contact submissions. Reach out through the social profiles below."
      className="relative overflow-hidden"
    >
      <AuroraBackground className="opacity-60" />
      <RevealGroup className="relative grid gap-4 md:grid-cols-2" stagger={0.1}>
        {socialItems.map((item) => {
          const Icon = item.icon;

          return (
            <RevealItem key={item.label}>
              <Magnetic strength={0.12} className="block h-full">
                <SpotlightCard
                  className="bg-surface-muted"
                  contentClassName="grid min-w-0 grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4"
                >
                  <Link
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="col-span-3 grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4"
                  >
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm font-medium text-fg">{item.label}</span>
                      <span className="mt-1 block break-words text-sm leading-6 text-muted">
                        {item.value}
                      </span>
                    </span>
                    <ArrowUpRight
                      size={18}
                      className="shrink-0 text-muted transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                      aria-hidden="true"
                    />
                  </Link>
                </SpotlightCard>
              </Magnetic>
            </RevealItem>
          );
        })}
      </RevealGroup>
    </Section>
  );
}
