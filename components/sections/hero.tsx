"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { HeroMesh } from "@/components/ui/hero-mesh";
import ScrollRevealH2 from "@/components/ui/ScrollRevealH2";
import { Body } from "@/components/ui/body";
import { Divider } from "@/components/ui/divider";
import { Eyebrow } from "@/components/ui/eyebrow";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Animate the other elements sequentially
    gsap.from(".hero-anim-element", {
      y: 30,
      opacity: 0,
      duration: 1.2,
      stagger: 0.15,
      ease: "power3.out",
      delay: 0.2,
    });
  }, { scope: containerRef });

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-base pt-24 sm:pt-26 lg:pt-28 pb-4 sm:pb-6 px-[16px]"
    >
      <section
        id="hero"
        data-no-global-reveal
        className="relative flex min-h-[calc(100vh-7.5rem)] w-full flex-col items-center justify-center overflow-hidden rounded-none border border-white/10 bg-black pt-12 sm:pt-16 lg:pt-20 pb-8 sm:pb-10"
      >
        <HeroMesh />

        {/*
          pointer-events-none allows mouse movements to pass through to the 3D canvas.
          We add pointer-events-auto to the text elements so they remain selectable.
        */}
        <div className="relative z-10 mx-auto flex w-full container max-w-7xl flex-col items-center gap-6 sm:gap-8 px-5 sm:px-8 lg:px-12 text-center pointer-events-none my-auto">
          <div className="hero-anim-element pointer-events-auto">
            <Eyebrow>Strategic Growth</Eyebrow>
          </div>

          <ScrollRevealH2
            as="h1"
            lines={["A DECADE OF BUILDING DIGITAL ECOSYSTEMS FOR BUSINESS GROWTH"]}
            highlightWords={["SYSTEMS"]}
            highlightClass="text-ink-muted"
            viewportMargin="0px"
            className="text-[clamp(1.65rem,1.25rem+2.4vw,4.25rem)] font-display uppercase font-bold tracking-wide text-ink text-center pointer-events-auto leading-[1.15]"
          />

          <div className="hero-anim-element pointer-events-auto">
            <Divider size="sm" />
          </div>

          <div className="hero-anim-element pointer-events-auto">
            <Body size="lg" className="max-w-3xl text-center">
              Your Strategic Growth Partner  |  Powered by Marketing  |  Technology |  AI & Innovation
            </Body>
          </div>
        </div>
      </section>
    </div>
  );
}
