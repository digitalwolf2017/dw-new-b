import { cn } from "@/lib/utils";

/**
 * The four rule widths that actually occur in the design. Figma's values are
 * fractional (70.648, 101.43) because the layers were hand-placed; they round
 * to these without any visible shift.
 */
const WIDTH = {
  sm: "w-10", //  40px — under the hero headline
  md: "w-[71px]", //  70.648px — section intros
  lg: "w-24", //  96px — process steps
  xl: "w-[101px]", // 101.43px — the contact split rule (1px tall)
} as const;

interface DividerProps extends React.ComponentPropsWithoutRef<"span"> {
  size?: keyof typeof WIDTH;
  /** The contact rule is 1px; everything else in the design is 2px. */
  thin?: boolean;
}

export function Divider({
  size = "sm",
  thin = false,
  className,
  ...props
}: DividerProps) {
  return (
    <span
      aria-hidden
      className={cn(
        "bg-ink-muted block",
        thin ? "h-px" : "h-0.5",
        WIDTH[size],
        className,
      )}
      {...props}
    />
  );
}
