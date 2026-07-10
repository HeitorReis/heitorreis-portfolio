"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";

import { MilestoneCard } from "@/components/cards/milestone-card";
import type { Milestone } from "@/types/domain";

const easeOut = [0.16, 1, 0.3, 1] as const;

export function MilestoneTimeline({ milestones }: { milestones: Milestone[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 220,
    damping: 40,
    mass: 0.4,
  });

  return (
    <div ref={containerRef} className="relative">
      <div
        aria-hidden="true"
        className="absolute bottom-6 left-[11px] top-6 w-px bg-line md:left-[13rem]"
      />
      <motion.div
        aria-hidden="true"
        className="absolute bottom-6 left-[11px] top-6 w-px origin-top bg-gradient-to-b from-accent via-accent-2 to-accent-3 md:left-[13rem]"
        style={{ scaleY: shouldReduceMotion ? 1 : progress }}
      />

      <motion.ol
        aria-label="Selected professional milestones"
        className="relative space-y-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: shouldReduceMotion ? 0 : 0.12 },
          },
        }}
      >
        {milestones.map((milestone, index) => (
          <motion.li
            key={milestone.id}
            className="relative grid grid-cols-[24px_minmax(0,1fr)] gap-3 md:grid-cols-[11rem_32px_minmax(0,1fr)] md:gap-4"
            variants={{
              hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: easeOut },
              },
            }}
          >
            <time
              dateTime={milestone.startDate}
              className="hidden pt-7 text-right font-mono text-xs font-semibold uppercase tracking-[0.12em] text-muted md:block"
            >
              {milestone.displayDate}
            </time>

            <div className="relative flex justify-center pt-8" aria-hidden="true">
              <span className="z-10 size-3 rounded-full border-[3px] border-bg bg-accent ring-1 ring-accent/30" />
            </div>

            <MilestoneCard milestone={milestone} position={index + 1} />
          </motion.li>
        ))}
      </motion.ol>
    </div>
  );
}
