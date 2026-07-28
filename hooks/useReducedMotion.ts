"use client";

import { useMediaQuery } from "@/hooks/useMediaQuery";

/** True when the user prefers reduced motion. Every animation must check this. */
export function useReducedMotion(): boolean {
  return useMediaQuery("(prefers-reduced-motion: reduce)");
}
