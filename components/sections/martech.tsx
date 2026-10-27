"use client";

import { useRef } from "react";
import { cn } from "@/lib/utils";
import { gsap, useGSAP } from "@/lib/gsap";

const MARTECH_DATA = [
  { letter: "M", label: "AUTOMATION", pos: "top", h: "h-14 sm:h-18 lg:h-22", left: "80%" },
  { letter: "A", label: "MARKETING", pos: "bottom", h: "h-12 sm:h-16 lg:h-20", left: "25%" },
  { letter: "R", label: "RESEARCH", pos: "bottom", h: "h-16 sm:h-22 lg:h-28", left: "75%" },
  { letter: "T", label: "TECHNOLOGY", pos: "top", h: "h-10 sm:h-12 lg:h-16", left: "50%" },
  { letter: "E", label: "ENGAGEMENT", pos: "bottom", h: "h-20 sm:h-28 lg:h-34", left: "50%" },
  { letter: "C", label: "CONVERSION", pos: "top", h: "h-18 sm:h-24 lg:h-28", left: "50%" },
  { letter: "H", label: "HOLISTIC-GROWTH", pos: "bottom", h: "h-14 sm:h-18 lg:h-24", left: "75%" },
];

export function Martech() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // Create a timeline triggered when the section enters viewport
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%", // Triggers when top of section hits 80% of viewport
          toggleActions: "play none none reverse",
        },
      });

      // 1. Reveal letters from bottom up
      tl.from(".martech-letter", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
      });

      // 2. Grow the lines from the letters outwards
      tl.from(".martech-line", {
        scaleY: 0,
        transformOrigin: (i, target) => 
          target.dataset.pos === "top" ? "bottom center" : "top center",
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
      }, "-=0.6");

      // 3. Pop in the dots
      tl.from(".martech-dot", {
        scale: 0,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "back.out(2)",
      }, "-=0.6");

      // 4. Fade in the labels
      tl.from(".martech-label", {
        y: (i, target) => target.dataset.pos === "top" ? 10 : -10, // pull towards center
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
      }, "-=0.6");
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      data-no-global-reveal
      className="relative w-full overflow-hidden bg-base py-4 sm:py-6 px-[16px]"
    >
      {/* Floating Rounded Card matching reference image */}
      <div className="relative flex min-h-[500px] sm:min-h-[580px] lg:min-h-[640px] w-full items-center justify-center overflow-hidden rounded-[12px] border border-white/10 bg-black px-4 py-28 sm:py-36 lg:py-44">
          <div className="flex w-full justify-center items-center gap-1 sm:gap-2">
            {MARTECH_DATA.map((item, i) => (
              <div key={i} className="relative inline-flex">
                {/* The Letter */}
                <span className="martech-letter inline-block font-display text-[3.5rem] sm:text-7xl md:text-8xl lg:text-[11rem] font-bold uppercase leading-none bg-linear-to-b from-accent via-[#595959] to-[#0000] bg-clip-text text-transparent drop-shadow-2xl selection:bg-transparent">
                  {item.letter}
                </span>

                {/* The Line and Dot */}
                <div
                  data-pos={item.pos}
                  className={cn(
                    "martech-line absolute w-0.5 -translate-x-1/2",
                    item.h,
                    item.pos === "top" ? "bg-linear-to-t from-transparent to-white/40" : "bg-linear-to-b from-transparent to-white/40"
                  )}
                  style={{
                    left: item.left,
                    ...(item.pos === "top" ? { bottom: "75%" } : { top: "75%" }),
                  }}
                >
                  {/* Dot */}
                  <div
                    className={cn(
                      "martech-dot absolute w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full -translate-x-1/2 bg-white/90 shadow-[0_0_10px_rgba(255,255,255,0.6)]",
                      item.pos === "top" ? "top-0 -translate-y-1/2" : "bottom-0 translate-y-1/2"
                    )}
                    style={{ left: "50%" }}
                  />

                  {/* Label */}
                  <span
                    data-pos={item.pos}
                    className={cn(
                      "martech-label absolute whitespace-nowrap text-[10px] md:text-lg font-semibold tracking-[0.2em] text-white/70 uppercase -translate-x-1/2",
                      item.pos === "top" ? "bottom-full mb-3 sm:mb-5" : "top-full mt-3 sm:mt-5"
                    )}
                    style={{ left: "50%" }}
                  >
                    {item.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
    </section>
  );
}
