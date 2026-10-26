"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Body } from "@/components/ui/body";
import { gsap, useGSAP } from "@/lib/gsap";

interface AboutNewProps {
  id?: string;
  topImageSrc?: string;
  bottomImageSrc?: string;
}

export function AboutNew({
  id = "about",
  topImageSrc = "/images/about-workspace.jpg",
  bottomImageSrc = "/images/about-workspace.jpg",
}: AboutNewProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      // Left image card slides smoothly from left
      tl.from(".about-img-left", {
        x: -50,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
      }, 0);

      // Right image card slides smoothly from right
      tl.from(".about-img-right", {
        x: 50,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
      }, 0);

      // Center content elements fade and slide up sequentially
      tl.from(".about-anim-item", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
      }, 0.1);
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id={id}
      data-no-global-reveal
      className="relative w-full overflow-hidden py-16 sm:py-20 lg:py-24 xl:py-28"
    >
      {/* Background subtle radial glow */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.025),transparent_70%)]"
        aria-hidden="true"
      />

      {/* Full width container spanning edge to edge */}
      <div className="relative flex w-full flex-col items-center justify-center lg:min-h-[660px] xl:min-h-[720px] 2xl:min-h-[780px]">
        {/* Top-Left Image: Plain on outer left side, rounded on inner right side */}
        <div className="about-img-left w-[88%] max-w-[420px] self-start mb-8 sm:w-[380px] md:w-[420px] lg:mb-0 lg:w-[420px] xl:w-[500px] 2xl:w-[560px] lg:absolute lg:left-0 lg:top-10 xl:top-12 2xl:top-16">
          <div className="group relative aspect-[16/11] w-full overflow-hidden rounded-l-none rounded-r-[28px] sm:rounded-r-[36px] lg:rounded-r-[44px] border-y border-r border-white/10 bg-neutral-900 shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition-all duration-500 hover:border-white/30">
            <Image
              src={topImageSrc}
              alt="Digital Marketing Workspace & Analytics"
              fill
              sizes="(max-width: 640px) 88vw, (max-width: 1024px) 420px, (max-width: 1440px) 500px, 560px"
              className="object-cover w-full h-full grayscale contrast-[1.08] brightness-[0.98] transition-transform duration-700 ease-out group-hover:scale-105"
              priority
            />
          </div>
        </div>

        {/* Center Content: Headline, Divider, Body, CTA */}
        <div className="z-10 flex w-full max-w-xl flex-col items-center px-6 text-center lg:max-w-2xl xl:max-w-3xl">
          {/* Main Display Headline */}
          <h2 className="about-anim-item font-display text-3xl font-bold uppercase tracking-[0.03em] text-white sm:text-4xl md:text-5xl lg:text-[44px] xl:text-[52px] 2xl:text-[58px] leading-[1.12]">
            Powering The Next
            <br />
            Phase Of Digital
            <br />
            Growth.
          </h2>

          {/* —— ABOUT US —— */}
          <div className="about-anim-item my-5 flex items-center justify-center gap-3.5 sm:my-6 sm:gap-4">
            <span className="h-px w-8 bg-white/40 sm:w-12" aria-hidden="true" />
            <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.25em] text-ink-muted sm:text-xs">
              ABOUT US
            </span>
            <span className="h-px w-8 bg-white/40 sm:w-12" aria-hidden="true" />
          </div>

          {/* Descriptive Body Paragraph */}
          <div className="about-anim-item">
            <Body
              size="lg"
              className="text-ink-secondary max-w-md sm:max-w-lg md:max-w-xl text-center leading-relaxed"
            >
              Digital Wolf Unites Strategy, Technology, Creativity And AI To Build
              Experiences That Strengthen Brands, Engage Audiences And Drive
              Measurable Growth.
            </Body>
          </div>

          {/* Pill CTA Button matching reference image */}
          <div className="about-anim-item mt-8 sm:mt-9">
            <Link
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-xs sm:text-sm font-semibold tracking-normal text-black shadow-lg transition-all duration-300 hover:scale-105 hover:bg-neutral-100 hover:shadow-[0_0_24px_rgba(255,255,255,0.35)] active:scale-95"
            >
              <span>Know More</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Bottom-Right Image: Plain on outer right side, rounded on inner left side */}
        <div className="about-img-right w-[88%] max-w-[420px] self-end mt-8 sm:w-[380px] md:w-[420px] lg:mt-0 lg:w-[420px] xl:w-[500px] 2xl:w-[560px] lg:absolute lg:right-0 lg:bottom-10 xl:bottom-12 2xl:bottom-16">
          <div className="group relative aspect-[16/11] w-full overflow-hidden rounded-r-none rounded-l-[28px] sm:rounded-l-[36px] lg:rounded-l-[44px] border-y border-l border-white/10 bg-neutral-900 shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition-all duration-500 hover:border-white/30">
            <Image
              src={bottomImageSrc}
              alt="Digital Growth Planning and Execution"
              fill
              sizes="(max-width: 640px) 88vw, (max-width: 1024px) 420px, (max-width: 1440px) 500px, 560px"
              className="object-cover w-full h-full grayscale contrast-[1.08] brightness-[0.98] transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
