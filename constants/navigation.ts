import type { NavLink } from "@/types";

/** Order and labels are taken verbatim from Figma node 13230:34169. */
export const NAV_LINKS: readonly NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About Us", href: "#about" },
  { label: "Contact Us", href: "#contact" },
] as const;
