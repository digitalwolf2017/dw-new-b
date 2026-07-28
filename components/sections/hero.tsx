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

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);

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
    <section 
      ref={containerRef}
      className="relative flex w-full min-h-[90vh] flex-col items-center justify-center overflow-hidden pb-24 pt-32 lg:pt-40"
    >
      <HeroMesh />
      
      {/* 
        pointer-events-none allows mouse movements to pass through to the 3D canvas.
        We add pointer-events-auto to the text elements so they remain selectable.
      */}
      <div className="relative z-10 mx-auto flex w-full container max-w-4xl flex-col items-center gap-8 px-5 sm:px-8 lg:px-12 text-center pointer-events-none">
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
    </section>
  );
}
