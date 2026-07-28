import { cn } from "@/lib/utils";

type EyebrowProps = React.ComponentPropsWithoutRef<"p">;

/**
 * The small tracked-out label above every section title
 * ("STRATEGIC GROWTH", "OUR SERVICES", "ESTABLISHED 2018").
 *
 * Figma renders these already-uppercased; `uppercase` here means callers can
 * pass natural-case strings without the two drifting apart.
 */
export function Eyebrow({ className, ...props }: EyebrowProps) {
  return (
    <p
      className={cn("text-eyebrow text-ink-muted font-sans uppercase", className)}
      {...props}
    />
  );
}
