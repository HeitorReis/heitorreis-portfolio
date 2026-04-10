import Link from "next/link";

import { adminNavigation } from "@/lib/constants/navigation";
import { cn } from "@/lib/utils";

interface AdminShellProps {
  title: string;
  description?: string;
  activePath: string;
  actions?: React.ReactNode;
}

export function AdminShell({
  title,
  description,
  activePath,
  actions,
  children,
}: React.PropsWithChildren<AdminShellProps>) {
  return (
    <div className="min-h-screen bg-bg">
      <div className="page-shell grid gap-8 py-8 lg:grid-cols-[240px_minmax(0,1fr)]">
        <aside className="surface-card h-fit rounded-[28px] border border-line/70 p-5">
          <Link href="/admin" className="mb-6 block">
            <p className="text-sm font-semibold">Heitor Admin</p>
            <p className="mt-1 text-sm text-muted">Simple, protected content control.</p>
          </Link>
          <nav className="space-y-1">
            {adminNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "block rounded-2xl px-4 py-3 text-sm",
                  activePath === item.href
                    ? "bg-accent-soft text-accent"
                    : "text-muted hover:bg-surface-muted hover:text-fg",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </aside>

        <div className="space-y-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="space-y-2">
              <p className="text-meta">Admin</p>
              <h1 className="text-3xl font-semibold tracking-[-0.03em]">{title}</h1>
              {description ? <p className="max-w-3xl text-sm leading-7 text-muted">{description}</p> : null}
            </div>
            {actions ? <div>{actions}</div> : null}
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
