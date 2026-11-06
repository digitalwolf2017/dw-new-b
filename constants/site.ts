/** Single source of truth for brand strings, URLs and SEO defaults. */
export const SITE = {
  name: "Digital Wolf",
  shortName: "DW",
  /** Used verbatim in the nav wordmark and the footer bottom bar. */
  wordmark: "DIGITAL WOLF",
  tagline: "A Decade of Building Digital Ecosystems for Business Growth",
  description:
    "Your Strategic Growth Partner | Powered by Marketing | Technology | AI & Innovation",
  url: "https://digitalwolf.com",
  locale: "en_US",
  founded: 2018,
} as const;

export const SOCIAL = [
  { label: "Facebook", href: "https://facebook.com/digitalwolf", icon: "facebook" },
  { label: "LinkedIn", href: "https://linkedin.com/company/digitalwolf", icon: "linkedin" },
  { label: "Instagram", href: "https://instagram.com/digitalwolf", icon: "instagram" },
] as const;
