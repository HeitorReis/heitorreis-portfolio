"use client";

import { useCallback } from "react";

import type { AnalyticsEventInput } from "@/types/api";

const SESSION_STORAGE_KEY = "heitor-portfolio-session-id";

function getSessionId() {
  const existing = window.localStorage.getItem(SESSION_STORAGE_KEY);

  if (existing) return existing;

  const created = crypto.randomUUID();
  window.localStorage.setItem(SESSION_STORAGE_KEY, created);
  return created;
}

export function useTrackEvent() {
  return useCallback(async (input: Omit<AnalyticsEventInput, "sessionId">) => {
    if (typeof window === "undefined") return;

    try {
      await fetch("/api/analytics", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sessionId: getSessionId(),
          ...input,
        }),
      });
    } catch {
      // Analytics should never block the primary interaction path.
    }
  }, []);
}

