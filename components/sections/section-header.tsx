import { Body } from "@/components/ui/body";
import { Heading } from "@/components/ui/heading";
import { Eyebrow } from "@/components/ui/eyebrow";

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
      <Heading as="h2" className="font-display font-bold text-4xl uppercase tracking-wide text-white sm:text-5xl">
        {title} {accent && <span className="text-ink-muted">{accent}</span>}
      </Heading>
      <Body className="text-ink-secondary">
        {body}
      </Body>
    </div>
  );
}
