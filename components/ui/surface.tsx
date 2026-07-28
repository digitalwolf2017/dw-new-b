import { cn } from "@/lib/utils";

interface SurfaceProps extends React.ComponentPropsWithoutRef<"div"> {
  /**
   * Adds the hover treatment: the hairline picks up the accent, a soft glow
   * blooms behind the card and it lifts 4px. Static panels leave this off.
   */
  interactive?: boolean;
}

/**
 * The card in this design is not glass — it is an opaque #080808 panel behind a
 * 1px #242424 hairline at 4px radius. That flatness is deliberate, so the hover
 * state is the only place any colour enters.
 */
export function Surface({
  interactive = false,
  className,
  ...props
}: SurfaceProps) {
  return (
    <div
      className={cn(
        "bg-surface border-line rounded-card border",
        interactive && [
          "transition-[border-color,box-shadow,transform,background-color]",
          "duration-[var(--duration-card)] ease-(--ease-out-quart)",
          "hover:border-accent-line hover:shadow-accent-glow",
          "hover:bg-surface-raised hover:-translate-y-1",
        ],
        className,
      )}
      {...props}
    />
  );
}
