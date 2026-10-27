"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";

export function Stats({ id = "stats" }: { id?: string }) {
  const sectionRef = useRef<HTMLElement>(null);
  const countRef1 = useRef<HTMLSpanElement>(null);
  const countRef2 = useRef<HTMLSpanElement>(null);
  const countRef3 = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "center 40%",
          scrub: 1.2,
          invalidateOnRefresh: true,
        },
      });

      // 3 stats slide in from left one after another directly controlled by scroll
      tl.fromTo(
        ".stat-item-1",
        { x: -90, opacity: 0 },
        { x: 0, opacity: 1, ease: "none", duration: 0.45 },
        0.05
      );

      tl.fromTo(
        ".stat-item-2",
        { x: -90, opacity: 0 },
        { x: 0, opacity: 1, ease: "none", duration: 0.45 },
        0.25
      );

      tl.fromTo(
        ".stat-item-3",
        { x: -90, opacity: 0 },
        { x: 0, opacity: 1, ease: "none", duration: 0.45 },
        0.45
      );

      // Right content reveals smoothly to full brightness
      gsap.from(".stat-right-content", {
        y: 24,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // Numbers count-up animation when scrolling in
      const counter = { n1: 0, n2: 0, n3: 0 };
      gsap.fromTo(
        counter,
        { n1: 0, n2: 0, n3: 0 },
        {
          n1: 9,
          n2: 120,
          n3: 40,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
            toggleActions: "restart none none none",
          },
          onStart: () => {
            if (countRef1.current) countRef1.current.textContent = "0+";
            if (countRef2.current) countRef2.current.textContent = "0+";
            if (countRef3.current) countRef3.current.textContent = "₹0Cr+";
          },
          onUpdate: () => {
            if (countRef1.current) {
              countRef1.current.textContent = `${Math.floor(counter.n1)}+`;
            }
            if (countRef2.current) {
              countRef2.current.textContent = `${Math.floor(counter.n2)}+`;
            }
            if (countRef3.current) {
              countRef3.current.textContent = `₹${Math.floor(counter.n3)}Cr+`;
            }
          },
          onComplete: () => {
            if (countRef1.current) countRef1.current.textContent = "9+";
            if (countRef2.current) countRef2.current.textContent = "120+";
            if (countRef3.current) countRef3.current.textContent = "₹40Cr+";
          },
        }
      );

      // Minimal luminous glow passing through the arch curve from the left side ONLY ONE TIME when user scrolls in
      gsap.fromTo(
        [".stat-arch-glow", ".stat-arch-glow-halo"],
        { strokeDashoffset: 140 },
        {
          strokeDashoffset: -800,
          duration: 2.5,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
            once: true,
          },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id={id}
      data-no-global-reveal
      className="relative w-full overflow-hidden bg-base py-8 sm:py-12 lg:py-16 px-[16px]"
    >
      {/* Floating Rounded Card matching site card styling with increased top/bottom padding */}
      <div className="relative mx-auto w-full overflow-hidden rounded-[12px] border border-white/10 bg-black px-6 py-16 sm:px-10 sm:py-20 lg:px-14 lg:py-24 xl:px-18 xl:py-28">
        {/* Subtle ambient radial glow */}
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.035),transparent_70%)]"
          aria-hidden="true"
        />

        {/* 2-Column Grid matching reference layout exactly */}
        <div className="relative z-10 mx-auto grid w-full max-w-6xl xl:max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-14 xl:gap-20 px-2 sm:px-6">
          {/* Left Column: 3 Staggered Stats with Background Vector Art */}
          <div className="relative w-full min-h-[380px] sm:min-h-[420px] lg:min-h-[440px] flex flex-col justify-between shrink-0">
            {/* Decorative background vector curves, arch line & icons */}
            <svg
              className="pointer-events-none absolute inset-0 h-full w-full opacity-60 select-none"
              viewBox="0 0 540 440"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid meet"
              aria-hidden="true"
            >
              <defs>
                {/* Glow filter for the traveling core */}
                <filter id="statBeamGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                </filter>
                {/* Wide soft bloom filter for halo */}
                <filter id="statBeamWideGlow" x="-40%" y="-40%" width="180%" height="180%">
                  <feGaussianBlur stdDeviation="8" result="blur" />
                </filter>
              </defs>

              {/* Secondary faint background curve */}
              <path
                d="M 20 390 C 110 370, 150 250, 230 180 C 310 110, 410 150, 520 260"
                stroke="rgba(255,255,255,0.08)"
                strokeWidth="1"
              />

              {/* 1. Base Thin Arch Line from the left side */}
              <path
                d="M -10 370 C 90 350, 130 160, 230 150 C 330 140, 380 230, 530 250"
                stroke="rgba(255, 255, 255, 0.22)"
                strokeWidth="1.2"
                fill="none"
              />

              {/* 2. Soft Animated Halo Glow passing through arch */}
              <path
                className="stat-arch-glow-halo"
                d="M -10 370 C 90 350, 130 160, 230 150 C 330 140, 380 230, 530 250"
                stroke="rgba(255, 255, 255, 0.5)"
                strokeWidth="7"
                strokeLinecap="round"
                pathLength="800"
                strokeDasharray="140 800"
                strokeDashoffset="140"
                filter="url(#statBeamWideGlow)"
                fill="none"
              />

              {/* 3. Luminous Animated Core Glow passing through arch */}
              <path
                className="stat-arch-glow"
                d="M -10 370 C 90 350, 130 160, 230 150 C 330 140, 380 230, 530 250"
                stroke="#ffffff"
                strokeWidth="2.2"
                strokeLinecap="round"
                pathLength="800"
                strokeDasharray="140 800"
                strokeDashoffset="140"
                filter="url(#statBeamGlow)"
                fill="none"
              />

              {/* Megaphone / Bullhorn Icon near upper curve */}
              <g transform="translate(225, 120) scale(0.85)" stroke="rgba(255,255,255,0.22)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
                <path d="M11 5L6 9H2v6h4l5 4V5z" />
                <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
              </g>

              {/* 3-Bar Chart Icon near middle-left */}
              <g transform="translate(80, 290) scale(0.9)" stroke="rgba(255,255,255,0.22)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
                <path d="M3 21h18" />
                <path d="M7 21v-5" />
                <path d="M12 21v-10" />
                <path d="M17 21v-14" />
              </g>

              {/* Target / Bullseye Icon near bottom-left */}
              <g transform="translate(90, 360) scale(0.9)" stroke="rgba(255,255,255,0.22)" strokeWidth="1.5" fill="none">
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="6" />
                <circle cx="12" cy="12" r="2" />
              </g>

              {/* Accent Dots */}
              <circle cx="60" cy="310" r="2" fill="rgba(255,255,255,0.3)" />
              <circle cx="260" cy="150" r="2.5" fill="rgba(255,255,255,0.35)" />
              <circle cx="430" cy="210" r="2" fill="rgba(255,255,255,0.25)" />
            </svg>

            {/* Stat 1: 9+ YEARS OF EXPERIENCE */}
            <div className="stat-item-1 relative z-10 flex flex-col items-start lg:absolute lg:top-0 lg:left-0">
              <div className="font-sans text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-none">
                <span ref={countRef1}>9+</span>
              </div>
              <div className="mt-2.5 flex items-stretch border-l-2 border-white/50 pl-2.5">
                <span className="font-sans text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-ink-muted leading-[1.3]">
                  YEARS OF<br />EXPERIENCE
                </span>
              </div>
            </div>

            {/* Stat 2: 120+ BRANDS ACROSS DIVERSE INDUSTRIES */}
            <div className="stat-item-2 relative z-10 flex flex-col items-start lg:absolute lg:top-[33%] lg:left-[30%] my-6 lg:my-0">
              <div className="font-sans text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-none">
                <span ref={countRef2}>120+</span>
              </div>
              <div className="mt-2.5 flex items-stretch border-l-2 border-white/50 pl-2.5">
                <span className="font-sans text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-ink-muted leading-[1.3]">
                  BRANDS<br />ACROSS DIVERSE<br />INDUSTRIES
                </span>
              </div>
            </div>

            {/* Stat 3: ₹40Cr+ AD SPEND MANAGED - stair-stepped matching reference */}
            <div className="stat-item-3 relative z-10 flex flex-col items-start lg:absolute lg:bottom-0 lg:left-[50%]">
              <div className="font-sans text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-none whitespace-nowrap">
                <span ref={countRef3}>₹40Cr+</span>
              </div>
              <div className="mt-2.5 flex items-stretch border-l-2 border-white/50 pl-2.5">
                <span className="font-sans text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-ink-muted leading-[1.3]">
                  AD SPEND<br />MANAGED
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Headline, Description, Pill CTA */}
          <div className="stat-right-content relative z-10 flex w-full flex-col items-start">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] font-bold uppercase tracking-[0.02em] text-white leading-[1.12]">
              WE HELP BRANDS<br />
              GROW FASTER,<br />
              SMARTER
            </h2>

            <div className="mt-5 flex flex-col gap-3.5 text-sm sm:text-base leading-relaxed font-normal">
              <p className="text-ink-secondary" style={{ color: "var(--color-ink-secondary, #c4c7c5)" }}>
                We create data–driven digital marketing strategies that bring the right audience to your brand, increase engagement and drive measurable business growth.
              </p>
              <p className="text-ink-secondary" style={{ color: "var(--color-ink-secondary, #c4c7c5)" }}>
                From strategy to execution, we work as your growth partner at every step.
              </p>
            </div>

            <div className="mt-7 sm:mt-9">
              <Link
                href="#contact"
                className="group inline-flex items-center gap-3 rounded-full border border-white/30 bg-transparent px-7 py-3 sm:px-8 sm:py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-black active:scale-95"
              >
                <span>BOOK A FREE STRATEGY CALL</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
