"use client";

import { useEffect, useLayoutEffect } from "react";

/**
 * `useLayoutEffect` in the browser, `useEffect` on the server.
 *
 * GSAP setup must run before paint to avoid a flash of un-animated content, but
 * `useLayoutEffect` warns during SSR. This swaps to the harmless variant there.
 */
export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;
