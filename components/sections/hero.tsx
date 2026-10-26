"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";

import { HeroMesh } from "@/components/ui/hero-mesh";
import { Heading } from "@/components/ui/heading";
import { Body } from "@/components/ui/body";
import { Divider } from "@/components/ui/divider";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Partners } from "@/components/sections/partners";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Split the heading text into words and wrap them in lines
    const heading = new SplitType(".hero-heading", { types: "lines,words" });

    // Add overflow hidden to the lines so the words can slide up from out of bounds
    gsap.set(heading.lines, { overflow: "hidden" });

    // Animate the heading words
    gsap.from(heading.words, {
      opacity: 0,
      y: "100%",
      duration: 1,
      stagger: 0.15,
      ease: "power4.out",
    });

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
        className="relative flex min-h-[calc(100vh-7.5rem)] w-full flex-col items-center justify-between overflow-hidden rounded-[28px] sm:rounded-[36px] lg:rounded-[44px] xl:rounded-[48px] border border-white/10 bg-black pt-12 sm:pt-16 lg:pt-20 pb-8 sm:pb-10 shadow-lg shadow-black/40"
      >
        <HeroMesh />

        {/*
          pointer-events-none allows mouse movements to pass through to the 3D canvas.
          We add pointer-events-auto to the text elements so they remain selectable.
        */}
        <div className="relative z-10 mx-auto flex w-full container max-w-4xl flex-col items-center gap-6 sm:gap-8 px-5 sm:px-8 lg:px-12 text-center pointer-events-none my-auto">
          <div className="hero-anim-element pointer-events-auto">
            <Eyebrow>Strategic Growth</Eyebrow>
          </div>

          <Heading as="h1" size="hero" className="uppercase hero-heading pointer-events-auto">
            <span className="block text-ink">We build digital growth</span>
            <span className="block text-ink-muted">systems</span>
          </Heading>

          <div className="hero-anim-element pointer-events-auto">
            <Divider size="sm" />
          </div>

          <div className="hero-anim-element pointer-events-auto">
            <Body size="lg" className="max-w-2xl text-center">
              A precision-engineered approach to creative strategy and performance
              marketing. We scale brands through high-fidelity design and algorithmic
              intelligence.
            </Body>
          </div>
        </div>

        {/* Partner Badges at bottom of Hero card */}
        <div className="hero-anim-element relative z-10 w-full mt-8 sm:mt-12 pointer-events-auto">
          <Partners />
        </div>
      </section>
    </div>
  );
}
