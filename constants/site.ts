/** Single source of truth for brand strings, URLs and SEO defaults. */
export const SITE = {
  name: "Digital Wolf",
  shortName: "DW",
  /** Used verbatim in the nav wordmark and the footer bottom bar. */
  wordmark: "DIGITAL WOLF",
  tagline: "We build digital growth systems",
  description:
    "A precision-engineered approach to creative strategy and performance marketing. We scale brands through high-fidelity design and algorithmic intelligence.",
  url: "https://digitalwolf.com",
  locale: "en_US",
  founded: 2018,
} as const;

export const SOCIAL = [
  { label: "Facebook", href: "https://facebook.com/digitalwolf", icon: "facebook" },
  { label: "LinkedIn", href: "https://linkedin.com/company/digitalwolf", icon: "linkedin" },
  { label: "Instagram", href: "https://instagram.com/digitalwolf", icon: "instagram" },
] as const;
