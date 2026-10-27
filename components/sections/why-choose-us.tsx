"use client";

import { useRef } from "react";
import { Body } from "@/components/ui/body";
import { DisplayTitle, TitleAccent } from "@/components/ui/display-title";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SolidButton } from "@/components/ui/solid-button";
import { Surface } from "@/components/ui/surface";
import { TrendingUp, Sparkles, Layers, Bot } from "lucide-react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";

const FEATURES = [
  { title: "Performance Marketing", desc: "Data-driven campaigns optimized for ROI and scalable growth.", icon: TrendingUp },
  { title: "Creative Strategy", desc: "High-impact brand positioning that captures market attention.", icon: Sparkles },
  { title: "UI & UX Design", desc: "Precision-crafted interfaces built for seamless user journeys.", icon: Layers },
  { title: "AI Automation", desc: "Intelligent systems that reduce friction and manual overhead.", icon: Bot },
];

export function WhyChooseUs({ id = "why-choose-us" }: { id?: string }) {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "center 35%",
          scrub: 1.2,
          invalidateOnRefresh: true,
        },
      });

      // Left column text gently fades and lifts in sync with scroll
      tl.fromTo(
        ".why-text-col",
        { y: 35, opacity: 0.15 },
        { y: 0, opacity: 1, ease: "none", duration: 0.35 },
        0
      );

      // The 4 boxes slide up 1 after another directly controlled by mouse scroll
      const cardSelectors = [".why-card-1", ".why-card-2", ".why-card-3", ".why-card-4"];
      cardSelectors.forEach((selector, idx) => {
        tl.fromTo(
          selector,
          { y: 90, opacity: 0 },
          { y: 0, opacity: 1, ease: "none", duration: 0.4 },
          0.1 + idx * 0.18
        );
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id={id}
      data-no-global-reveal
      className="mx-auto flex w-full container flex-col gap-16 px-5 py-24 sm:px-8 lg:flex-row lg:justify-between lg:gap-24 lg:px-12"
    >
      <div className="why-text-col flex max-w-120 flex-col gap-8 lg:sticky lg:top-32 lg:h-fit">
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
          {/* Box 1: Performance Marketing */}
          <div className="why-card-1">
            <Surface
              interactive
              className="flex flex-col p-8 min-h-62.5 rounded-[12px]"
            >
              <TrendingUp className="h-6 w-6 text-white" />
              <div className="mt-auto space-y-3">
                <h3 className="font-sans text-lg font-medium tracking-wide text-white">{FEATURES[0].title}</h3>
                <p className="font-sans text-sm leading-relaxed text-ink-secondary/80">{FEATURES[0].desc}</p>
              </div>
            </Surface>
          </div>

          {/* Box 3: UI & UX Design */}
          <div className="why-card-3">
            <Surface
              interactive
              className="flex flex-col p-8 min-h-62.5 rounded-[12px]"
            >
              <Layers className="h-6 w-6 text-white" />
              <div className="mt-auto space-y-3">
                <h3 className="font-sans text-lg font-medium tracking-wide text-white">{FEATURES[2].title}</h3>
                <p className="font-sans text-sm leading-relaxed text-ink-secondary/80">{FEATURES[2].desc}</p>
              </div>
            </Surface>
          </div>
        </div>

        {/* Right Column (Staggered Down) */}
        <div className="flex flex-1 flex-col gap-6 sm:mt-16">
          {/* Box 2: Creative Strategy */}
          <div className="why-card-2">
            <Surface
              interactive
              className="flex flex-col p-8 min-h-62.5 rounded-[12px]"
            >
              <Sparkles className="h-6 w-6 text-white" />
              <div className="mt-auto space-y-3">
                <h3 className="font-sans text-lg font-medium tracking-wide text-white">{FEATURES[1].title}</h3>
                <p className="font-sans text-sm leading-relaxed text-ink-secondary/80">{FEATURES[1].desc}</p>
              </div>
            </Surface>
          </div>

          {/* Box 4: AI Automation */}
          <div className="why-card-4">
            <Surface
              interactive
              className="flex flex-col p-8 min-h-62.5 rounded-[12px]"
            >
              <Bot className="h-6 w-6 text-white" />
              <div className="mt-auto space-y-3">
                <h3 className="font-sans text-lg font-medium tracking-wide text-white">{FEATURES[3].title}</h3>
                <p className="font-sans text-sm leading-relaxed text-ink-secondary/80">{FEATURES[3].desc}</p>
              </div>
            </Surface>
          </div>
        </div>
      </div>
    </section>
  );
}
