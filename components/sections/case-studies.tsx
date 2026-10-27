"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { cn } from "@/lib/utils";

const CASE_STUDIES = [
  {
    title: "George Telegraph Training Institute",
    desc: "A trusted vocational training institute offering industry-focused courses for job-ready careers.",
    metrics: [
      { value: "4,233", label: "LEADS GENERATED" },
      { value: "342", label: "CONVERSIONS" },
      { value: "10.47X", label: "ROAS" },
    ],
  },
  {
    title: "George Telegraph Training Institute",
    desc: "A trusted vocational training institute offering industry-focused courses for job-ready careers.",
    metrics: [
      { value: "4,233", label: "LEADS GENERATED" },
      { value: "342", label: "CONVERSIONS" },
      { value: "10.47X", label: "ROAS" },
    ],
  },
  {
    title: "George Telegraph Training Institute",
    desc: "A trusted vocational training institute offering industry-focused courses for job-ready careers.",
    metrics: [
      { value: "4,233", label: "LEADS GENERATED" },
      { value: "342", label: "CONVERSIONS" },
      { value: "10.47X", label: "ROAS" },
    ],
  },
  {
    title: "George Telegraph Training Institute",
    desc: "A trusted vocational training institute offering industry-focused courses for job-ready careers.",
    metrics: [
      { value: "4,233", label: "LEADS GENERATED" },
      { value: "342", label: "CONVERSIONS" },
      { value: "10.47X", label: "ROAS" },
    ],
  },
  {
    title: "George Telegraph Training Institute",
    desc: "A trusted vocational training institute offering industry-focused courses for job-ready careers.",
    metrics: [
      { value: "4,233", label: "LEADS GENERATED" },
      { value: "342", label: "CONVERSIONS" },
      { value: "10.47X", label: "ROAS" },
    ],
  },
];

export function CaseStudies() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      // Animate text on the left
      tl.fromTo(
        ".cs-text-reveal",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
        }
      );

      // Animate cards on the right
      tl.fromTo(
        ".cs-card",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
        },
        "-=0.6"
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className=" bg-base relative overflow-hidden"
      data-no-global-reveal
    >
      <div className="container mx-auto px-5 sm:px-8 lg:px-12 flex flex-col lg:flex-row gap-2 lg:gap-4">

        {/* Column 1: Title Block (Sticky) + Bottom Card */}
        <div className="w-full lg:w-4/12 flex flex-col justify-between z-10 relative h-auto">
          <div className="lg:sticky lg:top-32 pr-4 mb-16 lg:mb-32">
            <h2 className="cs-text-reveal text-4xl md:text-5xl font-display font-bold uppercase text-ink leading-[1.1] mb-8 tracking-wide">
              OUR CASE<br />STUDIES
            </h2>
            <div className="cs-text-reveal w-12 h-px bg-ink/30 mb-8"></div>
            <p className="cs-text-reveal text-ink-secondary text-sm leading-relaxed mb-10 max-w-sm">
              Our capabilities span the full digital spectrum, from creative
              direction to technical automation. We don&apos;t just build, we architect
              for conversion.
            </p>
            <div className="cs-text-reveal">
              <button className="bg-ink text-base px-6 py-3.5 text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-ink/80 transition-colors">
                VIEW ALL SERVICES
              </button>
            </div>
          </div>
          <div className="mt-auto">
            <Card data={CASE_STUDIES[4]} />
          </div>
        </div>

        <div className="w-full lg:w-4/12 flex flex-col gap-6 relative z-10 lg:mt-32">
          <Card data={CASE_STUDIES[0]} className="lg:h-95" />
          <Card data={CASE_STUDIES[1]} className="flex-1" />
        </div>

        {/* Column 3: Right (Starts higher) */}
        <div className="w-full lg:w-4/12 flex flex-col gap-6 relative z-10">
          <Card data={CASE_STUDIES[2]} className="lg:h-105" />
          <Card data={CASE_STUDIES[3]} className="flex-1" />
        </div>
      </div>
    </section>
  );
}

interface CaseStudy {
  title: string;
  desc: string;
  metrics: { value: string; label: string }[];
}

function Card({ data, className }: { data: CaseStudy; className?: string }) {
  return (
    <div
      className={cn(
        "cs-card p-8 md:p-10 rounded-2xl bg-linear-to-b from-[#2A2A2A] to-[#111111] border border-white/5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] transition-transform duration-500 hover:-translate-y-2 flex flex-col justify-between",
        className
      )}
    >
      <div>
        <h3 className="text-xl md:text-2xl font-bold text-white mb-6 pr-4 leading-snug font-sans">
          {data.title}
        </h3>
        <p className="text-white/60 text-sm leading-relaxed mb-12 font-sans">
          {data.desc}
        </p>
      </div>

      <div className="flex justify-between items-end">
        {data.metrics.map((m, i: number) => (
          <div key={i} className="flex flex-col gap-1.5">
            <span className="text-lg md:text-2xl font-light text-white font-sans">
              {m.value}
            </span>
            <span className="text-[7px] md:text-[8px] tracking-[0.15em] text-white/40 uppercase font-bold font-sans">
              {m.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
