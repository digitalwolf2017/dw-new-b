"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";

export function GlobalScrollReveal({ children }: { children: React.ReactNode }) {
  useGSAP(() => {
    // Select all sections and footer that are NOT explicitly opted out
    const sections = gsap.utils.toArray<HTMLElement>("section:not([data-no-global-reveal]), footer");
    
    sections.forEach((section) => {
      // Find typography and structural blocks to stagger
      const animatableElements = section.querySelectorAll(
        "h1, h2, h3, h4, p, img, form, .grid > div, .splide, a.group"
      );

      if (animatableElements.length === 0) return;

      gsap.from(animatableElements, {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 85%", // Reveal when the section top is 85% down the viewport
          toggleActions: "play none none none",
        },
      });
    });
  }, []);

  return <>{children}</>;
}
