import { cn } from "@/lib/utils";

interface DisplayTitleProps extends React.ComponentPropsWithoutRef<"h2"> {
  as?: "h1" | "h2" | "h3";
}

/**
 * Cinzel Bold display heading — "WHY CHOOSE US?", "Our Technologies",
 * "Contact Us", the footer CTA.
 *
 * The tag is decoupled from the styling so document outline order stays correct
 * regardless of where the title appears.
 */
export function DisplayTitle({
  as: Tag = "h2",
  className,
  ...props
}: DisplayTitleProps) {
  return (
    <Tag
      className={cn("text-display font-display font-bold text-ink", className)}
      {...props}
    />
  );
}

/**
 * The de-emphasised fragment inside a display title — the "?" in
 * "WHY CHOOSE US?", the word "BEST" in "WHAT WE BUILD BEST".
 */
export function TitleAccent({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"span">) {
  return <span className={cn("text-ink-muted", className)} {...props} />;
}
