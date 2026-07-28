import { Body } from "@/components/ui/body";
import { DisplayTitle, TitleAccent } from "@/components/ui/display-title";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SolidButton } from "@/components/ui/solid-button";
import { Surface } from "@/components/ui/surface";
import { TrendingUp, Sparkles, Layers, Bot } from "lucide-react";

const FEATURES = [
  { title: "Performance Marketing", desc: "Data-driven campaigns optimized for ROI and scalable growth.", icon: TrendingUp },
  { title: "Creative Strategy", desc: "High-impact brand positioning that captures market attention.", icon: Sparkles },
  { title: "UI & UX Design", desc: "Precision-crafted interfaces built for seamless user journeys.", icon: Layers },
  { title: "AI Automation", desc: "Intelligent systems that reduce friction and manual overhead.", icon: Bot },
];

export function WhyChooseUs() {
  return (
    <section className="mx-auto flex w-full container flex-col gap-16 px-5 py-24 sm:px-8 lg:flex-row lg:justify-between lg:gap-24 lg:px-12">
      <div className="flex max-w-120 flex-col gap-8 lg:sticky lg:top-32 lg:h-fit">
        <div className="flex flex-col gap-6">
          <Eyebrow>OUR SERVICES</Eyebrow>
          <DisplayTitle className="text-4xl sm:text-5xl leading-tight">
            WHY<br />CHOOSE US<TitleAccent>?</TitleAccent>
          </DisplayTitle>
          <div className="h-px w-20 bg-white/30" />
          <Body size="lg" className="text-ink-secondary">
            Our capabilities span the full digital spectrum, from creative direction
            to technical automation. We don&rsquo;t just build, we architect for
            conversion.
          </Body>
        </div>
        <div>
          <SolidButton href="#services" className="px-8 text-xs font-bold uppercase tracking-widest">
            VIEW ALL SERVICES
          </SolidButton>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-6 lg:w-140">
        {/* Left Column */}
        <div className="flex flex-1 flex-col gap-6">
          {FEATURES.filter((_, i) => i % 2 === 0).map((feature, i) => (
            <Surface
              key={`left-${i}`}
              interactive
              className="flex flex-col p-8 min-h-62.5"
            >
              <feature.icon className="h-6 w-6 text-white" />
              <div className="mt-auto space-y-3">
                <h3 className="font-sans text-lg font-medium tracking-wide text-white">{feature.title}</h3>
                <p className="font-sans text-sm leading-relaxed text-ink-secondary/80">{feature.desc}</p>
              </div>
            </Surface>
          ))}
        </div>

        {/* Right Column (Staggered Down) */}
        <div className="flex flex-1 flex-col gap-6 sm:mt-16">
          {FEATURES.filter((_, i) => i % 2 === 1).map((feature, i) => (
            <Surface
              key={`right-${i}`}
              interactive
              className="flex flex-col p-8 min-h-62.5"
            >
              <feature.icon className="h-6 w-6 text-white" />
              <div className="mt-auto space-y-3">
                <h3 className="font-sans text-lg font-medium tracking-wide text-white">{feature.title}</h3>
                <p className="font-sans text-sm leading-relaxed text-ink-secondary/80">{feature.desc}</p>
              </div>
            </Surface>
          ))}
        </div>
      </div>
    </section>
  );
}
