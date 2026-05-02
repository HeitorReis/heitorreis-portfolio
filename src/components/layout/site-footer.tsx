import Link from "next/link";

import { Container } from "@/components/ui/container";
import { privacySummary } from "@/lib/constants/privacy";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-[hsl(222_28%_12%)] text-white">
      <Container className="grid gap-8 py-10 md:grid-cols-[2fr_1fr]">
        <div className="space-y-3">
          <p className="text-sm font-semibold">Heitor</p>
          <p className="max-w-2xl text-sm leading-7 text-white/70">
            Computer Engineering student focused on AI, systems, research, and healthtech.
          </p>
          <p className="max-w-2xl text-sm leading-7 text-white/55">{privacySummary}</p>
        </div>

        <div className="space-y-3 text-sm text-white/70">
          <p>Best way to reach me: the contact page.</p>
          <Link href="/contact" className="block hover:text-white">
            Contact
          </Link>
          <Link href="/experience" className="block hover:text-white">
            Experience Summary
          </Link>
          <Link href="/privacy" className="block hover:text-white">
            Privacy
          </Link>
        </div>
      </Container>
    </footer>
  );
}
