import Link from "next/link";
import { ArrowDown, Sparkles, Trophy } from "lucide-react";

import type { HomepageSettings } from "@/types/domain";
import { MediaFrame } from "@/components/ui/media-frame";
import { Container } from "@/components/ui/container";
import { AnimatedHeadline } from "@/components/motion/animated-headline";
import { AuroraBackground } from "@/components/motion/aurora-background";
import { Magnetic } from "@/components/motion/magnetic";
import { Reveal } from "@/components/motion/reveal";

export function HeroSection({ settings }: { settings: HomepageSettings }) {
  return (
    <section className="relative overflow-hidden border-b border-line/60 py-20 md:py-28">
      <AuroraBackground />

      <Container className="relative grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-8">
          <div className="space-y-6">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/80 px-4 py-1.5 text-meta">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-accent" />
                </span>
                Computer Engineering Student
              </span>
            </Reveal>

            <AnimatedHeadline
              text={settings.headline}
              className="text-gradient max-w-4xl text-[clamp(3.2rem,8vw,5.75rem)] font-semibold leading-[0.95] tracking-[-0.05em]"
            />

            <Reveal delay={0.3}>
              <p className="reading-width text-lg leading-8 text-muted">
                {settings.subheadline}
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.42}>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Magnetic>
                <Link
                  href="#featured-work"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-6 text-sm font-medium text-accent-fg shadow-[var(--shadow-sm)] transition hover:shadow-[var(--shadow-glow)]"
                >
                  See Selected Work
                </Link>
              </Magnetic>
              <Magnetic>
                <Link
                  href="/contact"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-line bg-surface px-6 text-sm font-medium text-fg"
                >
                  Contact
                </Link>
              </Magnetic>
            </div>
          </Reveal>

          <Reveal delay={0.5}>
            <p className="max-w-2xl text-sm leading-7 text-muted">
              A multidisciplinary engineering profile, made easy to scan.
            </p>
          </Reveal>
        </div>

        <Reveal
          delay={0.2}
          y={16}
          className="relative mx-auto w-full max-w-md lg:mx-0 lg:justify-self-end"
        >
          <div className="rounded-[32px] bg-gradient-to-br from-accent via-accent-2 to-accent-3 p-[3px] shadow-[var(--shadow-glow)]">
            <div className="rounded-[29px] bg-bg p-1.5">
              <MediaFrame
                src={settings.heroImagePath}
                alt="Portrait of Heitor Reis"
                className="w-full"
                imageClassName="rounded-[24px]"
                aspectClassName="aspect-[4/5]"
              />
            </div>
          </div>

          <div
            className="animate-float surface-card absolute -left-6 top-6 hidden items-center gap-2 rounded-full border border-line/70 px-4 py-2 text-sm font-medium shadow-[var(--shadow-md)] lg:flex"
            style={{ animationDelay: "0.4s" }}
          >
            <Trophy size={16} className="text-accent" aria-hidden="true" />
            Harvard Hackathon Winner
          </div>
          <div
            className="animate-float surface-card absolute -right-6 bottom-10 hidden items-center gap-2 rounded-full border border-line/70 px-4 py-2 text-sm font-medium shadow-[var(--shadow-md)] lg:flex"
            style={{ animationDelay: "1.6s" }}
          >
            <Sparkles size={16} className="text-accent" aria-hidden="true" />
            Huawei Seeds ×2
          </div>
        </Reveal>
      </Container>

      <div className="pointer-events-none absolute inset-x-0 bottom-6 hidden justify-center md:flex">
        <div className="flex flex-col items-center gap-1 text-muted">
          <span className="text-[0.68rem] uppercase tracking-[0.2em]">Scroll</span>
          <ArrowDown size={14} className="animate-bounce" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
