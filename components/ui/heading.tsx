import { cn } from "@/lib/utils";

const SIZE = {
  /** 80/88, -1.6px tracking — the hero headline only. */
  hero: "text-hero",
  /** 24/33.6, +1.2px tracking — card titles. */
  card: "text-card",
} as const;

interface HeadingProps extends React.ComponentPropsWithoutRef<"h2"> {
  as?: "h1" | "h2" | "h3" | "h4";
  size?: keyof typeof SIZE;
}

/** Manrope heading. Cinzel titles use `DisplayTitle` instead. */
export function Heading({
  as: Tag = "h2",
  size = "card",
  className,
  ...props
}: HeadingProps) {
  return (
    <Tag className={cn("font-sans text-ink", SIZE[size], className)} {...props} />
  );
}
