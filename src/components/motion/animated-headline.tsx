"use client";

import { motion, useReducedMotion } from "motion/react";

export function AnimatedHeadline({
  text,
  className,
  as: Tag = "h1",
}: {
  text: string;
  className?: string;
  as?: "h1" | "h2";
}) {
  const shouldReduceMotion = useReducedMotion();
  const words = text.split(" ");
  const MotionTag = motion[Tag];

  return (
    <MotionTag
      className={className}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: shouldReduceMotion ? 0 : 0.1,
            delayChildren: 0.15,
          },
        },
      }}
    >
      {words.flatMap((word, index) => {
        const wordSpan = (
          <span key={`word-${index}`} className="inline-block overflow-hidden">
            <motion.span
              className="inline-block"
              variants={{
                hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 32 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
                },
              }}
            >
              {word}
            </motion.span>
          </span>
        );

        return index < words.length - 1 ? [wordSpan, " "] : [wordSpan];
      })}
    </MotionTag>
  );
}
