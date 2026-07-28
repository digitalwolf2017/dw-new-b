import Link from "next/link";

import { cn } from "@/lib/utils";

const SIZE = {
  /** 196.81 × 44.91 with 32px side padding — "VIEW ALL SERVICES". */
  md: "h-[45px] px-8 text-eyebrow",
  /** Full-width 64px with wider tracking — the contact submit. */
  lg: "h-16 w-full text-body tracking-[0.2em]",
} as const;

const BASE =
  "inline-flex items-center justify-center font-sans font-bold uppercase " +
  "bg-transparent border border-white/30 text-white cursor-pointer " +
  "transition-all " +
  "duration-[var(--duration-fast)] ease-(--ease-out-quart) " +
  "hover:bg-white hover:text-black hover:shadow-accent-glow active:translate-y-px " +
  "disabled:pointer-events-none disabled:opacity-50";

type ButtonProps = { href?: undefined } & React.ComponentPropsWithoutRef<"button">;
type AnchorProps = { href: string } & Omit<
  React.ComponentPropsWithoutRef<typeof Link>,
  "href"
>;

type SolidButtonProps = (ButtonProps | AnchorProps) & {
  size?: keyof typeof SIZE;
};

/**
 * The one solid, light-filled control in the design. Renders an anchor when
 * given `href` so navigation stays a real link for keyboard and screen readers.
 */
export function SolidButton({ size = "md", className, ...props }: SolidButtonProps) {
  const classes = cn(BASE, SIZE[size], className);

  if (props.href !== undefined) {
    const { href, ...rest } = props as AnchorProps;
    return <Link href={href} className={classes} {...rest} />;
  }

  const { type = "button", ...rest } = props as ButtonProps;
  return <button type={type} className={classes} {...rest} />;
}
