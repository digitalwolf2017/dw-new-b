"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";

import { Body } from "@/components/ui/body";
import { Divider } from "@/components/ui/divider";
import { Eyebrow } from "@/components/ui/eyebrow";
import { GreyscaleImage } from "@/components/ui/greyscale-image";
import { Heading } from "@/components/ui/heading";

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
      className="mx-auto flex w-full container flex-col items-center justify-between gap-12 px-5 pb-24 pt-48 sm:px-8 lg:flex-row lg:gap-24 lg:px-12"
    >
      <div className="flex max-w-225 flex-col gap-8">
        <div className="hero-anim-element">
          <Eyebrow>Strategic Growth</Eyebrow>
        </div>
        
        <Heading as="h1" size="hero" className="uppercase hero-heading">
          <span className="block text-ink">We build digital growth</span>
          <span className="block text-ink-muted">systems</span>
        </Heading>
        
        <div className="hero-anim-element">
          <Divider size="sm" />
        </div>
        
        <div className="hero-anim-element">
          <Body size="lg" className="max-w-120">
            A precision-engineered approach to creative strategy and performance
            marketing. We scale brands through high-fidelity design and algorithmic
            intelligence.
          </Body>
        </div>
      </div>

      <div className="hero-anim-element w-full lg:w-auto">
        <GreyscaleImage
          src="/images/hero.webp"
          alt="Dashboard showing digital growth systems"
          width={738}
          height={600}
          halo
          wrapperClassName="w-full max-w-[738px] shrink-0 lg:w-[738px]"
          className="aspect-738/600 w-full object-cover"
          unoptimized // Using unoptimized for external picsum images to avoid next/image issues
        />
      </div>
    </section>
  );
}
