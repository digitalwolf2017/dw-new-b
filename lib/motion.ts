/**
 * Motion tokens shared by every GSAP timeline.
 *
 * These mirror the easing curves in `app/globals.css` so a CSS transition and
 * a GSAP tween on the same element stay in sync. Nothing in `animations/` should
 * hard-code a duration or a cubic-bezier.
 */

export const EASE = {
  /** Default for reveals — long tail, decisive start. */
  out: "expo.out",
  /** Slightly softer; used for staggered card entrances. */
  outQuart: "power3.out",
  /** Symmetric, for pinned scrub sections. */
  inOut: "power4.inOut",
  /** Magnetic buttons and cursor follow. */
  follow: "power2.out",
} as const;

export const DURATION = {
  fast: 0.2,
  base: 0.6,
  /** Card hover — the brief specifies 0.4–0.6s. */
  card: 0.5,
  slow: 1.2,
  /** Hero headline lines and other cinematic reveals. */
  reveal: 1.4,
} as const;

export const STAGGER = {
  tight: 0.04,
  lines: 0.08,
  cards: 0.12,
} as const;

/** Distance a fade-up travels, in px. */
export const OFFSET = {
  sm: 24,
  md: 48,
  lg: 80,
} as const;

/**
 * Shared ScrollTrigger defaults. `once: true` for entrance reveals keeps the
 * page cheap on the way back up; scrubbed sections opt out explicitly.
 */
export const SCROLL_DEFAULTS = {
  start: "top 80%",
  once: true,
} as const;
