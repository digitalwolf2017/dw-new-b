"use client";

import { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import WinWinGrowth from "@/components/sections/WinWinGrowth";
import AiWorkflow from "@/components/sections/AiWorkflow";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

export default function GrowthShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const aiTrackRef = useRef<HTMLDivElement>(null);
  const aiWrapperRef = useRef<HTMLDivElement>(null);
  const aiContainerRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(
        "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
        () => {
          const aiContainer = aiContainerRef.current;
          const aiTrack = aiTrackRef.current;
          if (!aiContainer || !aiTrack) return;

          const slideDistance = () => window.innerWidth;
          const aiTrackDist = () => Math.max(0, aiTrack.scrollWidth - window.innerWidth);

          const tl = gsap.timeline();
          // Initially pause
          tl.to({}, { duration: 0.2 });
          // Slide AiWorkflow in from the right (100vw) to cover WinWinGrowth (0)
          tl.fromTo(
            aiContainer,
            { x: slideDistance() },
            { x: 0, ease: "none", duration: 1 }
          );
          // Then scrub through the AiWorkflow's 2400px internal track
          tl.to(aiTrack, {
            x: () => -aiTrackDist(),
            ease: "none",
            duration: 2
          });

          ScrollTrigger.create({
            trigger: sectionRef.current,
            start: "top top",
            end: () => `+=${slideDistance() * 1.5 + aiTrackDist()}`,
            pin: true,
            animation: tl,
            scrub: 1,
            invalidateOnRefresh: true,
          });
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="work"
      data-no-global-reveal
      className={cn("relative w-full overflow-hidden bg-base", !reduced && "lg:h-screen")}
    >
      {/* WinWinGrowth stays completely still (sticky underneath) */}
      <div className={cn("w-full", !reduced && "lg:h-full lg:absolute lg:inset-0 z-0")}>
        <WinWinGrowth />
      </div>

      {/* AiWorkflow is initially shifted 100vw to the right, then slides in over it */}
      <div 
        ref={aiContainerRef} 
        className={cn("w-full z-10", !reduced && "lg:h-full lg:absolute lg:inset-0 lg:translate-x-[100vw] shadow-[-20px_0_50px_rgba(0,0,0,0.5)]")}
      >
        <AiWorkflow trackRef={aiTrackRef} wrapperRef={aiWrapperRef} />
      </div>
    </section>
  );
}
