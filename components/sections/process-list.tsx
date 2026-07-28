import { Body } from "@/components/ui/body";
import { Divider } from "@/components/ui/divider";
import { Eyebrow } from "@/components/ui/eyebrow";
import { DisplayTitle } from "@/components/ui/display-title";
import { Heading } from "@/components/ui/heading";

const STEPS = [
  { num: "01", title: "Discovery & Strategy", desc: "We analyze your market, competitors, and audience to define a bulletproof growth roadmap." },
  { num: "02", title: "Design & Architecture", desc: "Our team crafts high-fidelity interfaces and robust technical foundations." },
  { num: "03", title: "Development & Integration", desc: "We build and connect systems that automate workflows and drive conversion." },
  { num: "04", title: "Launch & Optimization", desc: "Continuous testing and refinement to maximize ROI and scale performance." },
];

export function ProcessList() {
  return (
    <section id="process" className="relative mx-auto w-full max-w-7xl px-5 py-32 sm:px-8 lg:px-12">
      <div className="mb-24 text-center">
        <Eyebrow className="mb-6 block">HOW WE WORK</Eyebrow>
        <DisplayTitle>Our Agency Process</DisplayTitle>
      </div>

      <div className="mx-auto flex max-w-5xl flex-col gap-24">
        {STEPS.map((step, i) => (
          <div key={i} className="flex flex-col gap-8 md:flex-row md:items-start md:gap-16">
            <div className="font-display text-[120px] font-bold leading-none text-line">
              {step.num}
            </div>
            <div className="mt-4 flex flex-1 flex-col gap-4">
              <Heading as="h3" size="card">{step.title}</Heading>
              <Divider size="sm" />
              <Body className="max-w-120 text-ink-secondary">{step.desc}</Body>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
