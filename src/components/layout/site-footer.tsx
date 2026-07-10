import Link from "next/link";
import { ArrowUp } from "lucide-react";

import { Container } from "@/components/ui/container";
import { privacySummary } from "@/lib/constants/privacy";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-line/60 bg-surface-muted/60">
      <Container className="grid gap-8 py-12 md:grid-cols-[2fr_1fr_auto]">
        <div className="space-y-3">
          <p className="text-sm font-semibold text-fg">Heitor Reis</p>
          <p className="max-w-2xl text-sm leading-7 text-muted">
            Computer Engineering student focused on AI, systems, research, and healthtech.
          </p>
          <p className="max-w-2xl text-sm leading-7 text-muted/80">{privacySummary}</p>
        </div>

        <nav aria-label="Footer" className="space-y-3 text-sm text-muted">
          <Link href="/contact" className="block hover:text-fg">
            Contact
          </Link>
          <Link href="/experience" className="block hover:text-fg">
            Experience Summary
          </Link>
          <Link href="/updates" className="block hover:text-fg">
            Updates
          </Link>
          <Link href="/privacy" className="block hover:text-fg">
            Privacy
          </Link>
        </nav>

        <div className="flex items-start justify-start md:justify-end">
          <a
            href="#top"
            className="inline-flex h-11 items-center gap-2 rounded-full border border-line bg-surface px-4 text-sm font-medium text-fg transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-sm)]"
          >
            <ArrowUp size={16} aria-hidden="true" />
            Back to top
          </a>
        </div>
      </Container>
    </footer>
  );
}
