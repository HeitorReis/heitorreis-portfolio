"use client";

import { useSyncExternalStore } from "react";
import { MoonStar, SunMedium } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

function subscribe() {
  return () => {};
}

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(subscribe, () => true, () => false);

  const isDarkTheme = mounted && resolvedTheme === "dark";

  return (
    <Button
      type="button"
      variant="secondary"
      size="icon"
      aria-label="Toggle theme"
      disabled={!mounted}
      suppressHydrationWarning
      onClick={() => setTheme(isDarkTheme ? "light" : "dark")}
    >
      {mounted ? (
        isDarkTheme ? (
          <SunMedium size={16} />
        ) : (
          <MoonStar size={16} />
        )
      ) : (
        <span aria-hidden="true" className="h-4 w-4 rounded-full border border-current/60" />
      )}
    </Button>
  );
}
