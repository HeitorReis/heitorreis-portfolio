import { SiteShell } from "@/components/layout/site-shell";

export default function SiteLayout({ children }: React.PropsWithChildren) {
  return <SiteShell>{children}</SiteShell>;
}

