import { cn } from "@/lib/utils";

const SIZE = {
  /** 16/25.6 — cards, section intros. */
  md: "text-body",
  /** 18/32.4 — the hero paragraph and other lead copy. */
  lg: "text-body-lg",
} as const;

interface BodyProps extends React.ComponentPropsWithoutRef<"p"> {
  size?: keyof typeof SIZE;
}

export function Body({ size = "md", className, ...props }: BodyProps) {
  return (
    <p
      className={cn("text-ink-secondary font-sans", SIZE[size], className)}
      {...props}
    />
  );
}
