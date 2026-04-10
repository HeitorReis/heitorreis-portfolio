import Link from "next/link";

import { siteNavigation } from "@/lib/constants/navigation";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Container } from "@/components/ui/container";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-line/60 bg-bg/80 backdrop-blur-xl">
      <Container className="flex min-h-18 items-center justify-between gap-4 py-4">
        <Link href="/" className="flex flex-col">
          <span className="text-sm font-semibold tracking-[-0.02em]">Heitor</span>
          <span className="text-[0.72rem] uppercase tracking-[0.14em] text-muted">
            Hybrid Engineer
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {siteNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm text-muted hover:bg-surface hover:text-fg"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/contact"
            className="rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-fg"
          >
            Contact
          </Link>
        </div>
      </Container>
    </header>
  );
}
