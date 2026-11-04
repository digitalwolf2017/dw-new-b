import { Body } from "@/components/ui/body";
import { Eyebrow } from "@/components/ui/eyebrow";
import ScrollRevealH2 from "@/components/ui/ScrollRevealH2";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  accent?: string;
  body: React.ReactNode;
}

export function SectionHeader({ eyebrow, title, accent, body }: SectionHeaderProps) {
  return (
    <div className="flex max-w-160 flex-col gap-6">
      <Eyebrow>{eyebrow}</Eyebrow>
      <ScrollRevealH2
        as="h2"
        text={`${title} ${accent || ""}`.trim()}
        highlightWords={accent ? [accent] : []}
        highlightClass="text-ink-muted"
        className="font-display font-bold text-4xl uppercase tracking-wide text-white sm:text-5xl"
      />
      <Body className="text-ink-secondary">
        {body}
      </Body>
    </div>
  );
}
