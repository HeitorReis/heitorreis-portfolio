import type { Metadata } from "next";
import { IBM_Plex_Mono, Instrument_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { env } from "@/lib/env";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const siteDescription =
  "Portfolio of Heitor Reis, a Computer Engineering student working across AI, systems, research, and healthtech.";

export const metadata: Metadata = {
  metadataBase: new URL(env.publicSiteUrl || "http://localhost:3000"),
  title: {
    default: "Heitor Reis | Computer Engineering Student",
    template: "%s | Heitor Reis",
  },
  description: siteDescription,
  openGraph: {
    type: "website",
    siteName: "Heitor Reis",
    title: "Heitor Reis | Computer Engineering Student",
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: "Heitor Reis | Computer Engineering Student",
    description: siteDescription,
  },
  robots: env.siteIndexingEnabled
    ? {
        index: true,
        follow: true,
      }
    : {
        index: false,
        follow: false,
        nocache: true,
      },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${instrumentSans.variable} ${ibmPlexMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-bg text-fg">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex min-h-full flex-col">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
