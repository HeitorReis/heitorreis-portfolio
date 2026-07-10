"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useMotionValueEvent, useScroll } from "motion/react";

import { siteNavigation } from "@/lib/constants/navigation";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Container } from "@/components/ui/container";
import { MobileNav } from "@/components/layout/mobile-nav";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [elevated, setElevated] = useState(false);
  const { scrollY, scrollYProgress } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setElevated(latest > 12);
  });

  const primaryLinks = siteNavigation.filter((item) => item.href !== "/contact");

  return (
    <header
      className={cn(
        "sticky top-0 z-30 border-b border-line/60 bg-bg/75 backdrop-blur-xl transition-shadow duration-300",
        elevated && "site-header-scrolled",
      )}
    >
      <Container className="flex min-h-18 items-center justify-between gap-4 py-4">
        <Link href="/" className="flex flex-col">
          <span className="text-sm font-semibold tracking-[-0.02em]">Heitor Reis</span>
          <span className="text-[0.72rem] uppercase tracking-[0.14em] text-muted">
            Computer Engineering Student
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {primaryLinks.map((item) => {
            const isActive =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm transition-colors",
                  isActive ? "text-fg" : "text-muted hover:text-fg",
                )}
              >
                {isActive ? (
                  <motion.span
                    layoutId="nav-active-pill"
                    className="absolute inset-0 rounded-full bg-surface shadow-[var(--shadow-xs)]"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                ) : null}
                <span className="relative">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />
          <Link
            href="/contact"
            className="hidden rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-fg transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-sm)] sm:inline-flex"
          >
            Contact
          </Link>
          <MobileNav />
        </div>
      </Container>

      <motion.div
        aria-hidden="true"
        className="h-[2px] origin-left bg-gradient-to-r from-accent via-accent-2 to-accent-3"
        style={{ scaleX: scrollYProgress }}
      />
    </header>
  );
}
