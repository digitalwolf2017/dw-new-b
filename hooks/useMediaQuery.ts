"use client";

import { useSyncExternalStore } from "react";

/**
 * Reactive media query. SSR-safe: returns `false` on the server so markup
 * stays deterministic, then syncs on hydration.
 */
export function useMediaQuery(query: string): boolean {
  return useSyncExternalStore(
    (onChange) => {
      const mql = window.matchMedia(query);
      mql.addEventListener("change", onChange);
      return () => mql.removeEventListener("change", onChange);
    },
    () => window.matchMedia(query).matches,
    () => false
  );
}
