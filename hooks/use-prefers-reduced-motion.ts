"use client";

import { useSyncExternalStore } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

function subscribe(callback: () => void) {
  const list = window.matchMedia(QUERY);
  list.addEventListener("change", callback);
  return () => list.removeEventListener("change", callback);
}

const getSnapshot = () => window.matchMedia(QUERY).matches;

/**
 * Tracks the user's reduced-motion preference and re-renders when it changes.
 *
 * Returns `true` on the server so the first client paint matches the safest
 * branch; animations opt in once hydration confirms motion is welcome.
 */
export function usePrefersReducedMotion(): boolean {
  return useSyncExternalStore(subscribe, getSnapshot, () => true);
}
