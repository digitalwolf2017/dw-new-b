"use client";

import { useRef } from "react";
import { Body } from "@/components/ui/body";
import { DisplayTitle } from "@/components/ui/display-title";
import { Eyebrow } from "@/components/ui/eyebrow";
import { FacebookIcon, LinkedinIcon, InstagramIcon } from "@/components/ui/icons";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

// Cubic bezier point on the arch curve
// P0 = (-300, 850), P1 = (260, -160), P2 = (1660, -160), P3 = (2220, 850)
function getArchPoint(t: number) {
  const u = 1 - t;
  const tt = t * t;
  const uu = u * u;
  const uuu = uu * u;
  const ttt = tt * t;

  const x = uuu * -300 + 3 * uu * t * 260 + 3 * u * tt * 1660 + ttt * 2220;
  const y = uuu * 850 + 3 * uu * t * -160 + 3 * u * tt * -160 + ttt * 850;
  return { x, y };
}

export function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const gradRef = useRef<SVGLinearGradientElement>(null);
  const orbRef = useRef<SVGGElement>(null);
  const ambientGlowRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const footer = footerRef.current;
      const grad = gradRef.current;
      const orb = orbRef.current;
      const ambientGlow = ambientGlowRef.current;
      if (!footer || !grad || !orb) return;

      const beamWidth = 650;
      const progressObj = { t: 0 };

      const updateGlow = (t: number) => {
        const { x, y } = getArchPoint(t);
        const x1 = x - beamWidth / 2;
        const x2 = x + beamWidth / 2;

        grad.setAttribute("x1", x1.toString());
        grad.setAttribute("x2", x2.toString());

        orb.setAttribute("transform", `translate(${x}, ${y})`);

        // Smoothly fade in orb as it enters arch, peak at center apex, fade out at edges
        const edgeFactor = Math.sin(t * Math.PI);
        const opacity = Math.max(0, Math.min(1, edgeFactor * 1.5));
        orb.setAttribute("opacity", opacity.toFixed(2));

        if (ambientGlow) {
          const ambientX = (t - 0.5) * 400;
          ambientGlow.style.transform = `translate(calc(-50% + ${ambientX}px), 0)`;
        }
      };

      // Set initial position at start of curve
      updateGlow(0);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: footer,
          start: "top 85%",
          end: "bottom bottom",
          scrub: 1.2,
          invalidateOnRefresh: true,
        },
      });

      tl.to(progressObj, {
        t: 1,
        ease: "none",
        onUpdate: () => {
          updateGlow(progressObj.t);
        },
      });

      ScrollTrigger.refresh();
      const timer = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 400);

      return () => clearTimeout(timer);
    },
    { scope: footerRef }
  );

  return (
    <footer
      ref={footerRef}
      className="relative flex flex-col items-center justify-end overflow-hidden pt-20 sm:pt-24 lg:pt-28 pb-8 bg-base"
    >
      {/* Decorative Illuminated Dome Arc SVG with Gradient Fill & Animated Glow Stroke */}
      <div className="pointer-events-none absolute inset-0 w-full h-full overflow-hidden">
        <svg
          viewBox="0 0 1920 850"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="footerDomeGrad" x1="50%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="#2a2a2d" stopOpacity="0.95" />
              <stop offset="35%" stopColor="#202023" stopOpacity="0.75" />
              <stop offset="70%" stopColor="#18181a" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#141416" stopOpacity="0" />
            </linearGradient>
            <radialGradient id="footerDomeGlow" cx="50%" cy="12%" r="65%" fx="50%" fy="8%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.15)" />
              <stop offset="40%" stopColor="rgba(255,255,255,0.04)" />
              <stop offset="85%" stopColor="rgba(0,0,0,0)" />
            </radialGradient>

            {/* Dynamic Traveling Arch Beam Gradient */}
            <linearGradient
              ref={gradRef}
              id="archBeamGrad"
              gradientUnits="userSpaceOnUse"
              x1="-800"
              y1="0"
              x2="-150"
              y2="0"
            >
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
              <stop offset="25%" stopColor="#ffffff" stopOpacity="0.2" />
              <stop offset="45%" stopColor="#ffffff" stopOpacity="0.85" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="55%" stopColor="#ffffff" stopOpacity="0.85" />
              <stop offset="75%" stopColor="#ffffff" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>

            {/* Blur filters for luminous glow bloom */}
            <filter id="archGlowBlur" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="5" result="blur" />
            </filter>
            <filter id="archWideGlowBlur" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="15" result="blur" />
            </filter>

            {/* Radial glow for traveling orb flare */}
            <radialGradient id="archOrbGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="25%" stopColor="#ffffff" stopOpacity="0.8" />
              <stop offset="55%" stopColor="#ffffff" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Dome Fill with Gradient */}
          <path
            d="M-300 850 C 260 -160, 1660 -160, 2220 850 L 2220 850 L -300 850 Z"
            fill="url(#footerDomeGrad)"
          />
          <path
            d="M-300 850 C 260 -160, 1660 -160, 2220 850 L 2220 850 L -300 850 Z"
            fill="url(#footerDomeGlow)"
          />

          {/* Base Thin Arch Stroke */}
          <path
            d="M-300 850 C 260 -160, 1660 -160, 2220 850"
            stroke="rgba(255, 255, 255, 0.22)"
            strokeWidth="1.2"
            fill="none"
          />

          {/* Glowing Animated Gradient Arch Line - Wide Bloom */}
          <path
            d="M-300 850 C 260 -160, 1660 -160, 2220 850"
            stroke="url(#archBeamGrad)"
            strokeWidth="18"
            strokeLinecap="round"
            filter="url(#archWideGlowBlur)"
            opacity="0.45"
            fill="none"
          />

          {/* Glowing Animated Gradient Arch Line - Medium Halo */}
          <path
            d="M-300 850 C 260 -160, 1660 -160, 2220 850"
            stroke="url(#archBeamGrad)"
            strokeWidth="6"
            strokeLinecap="round"
            filter="url(#archGlowBlur)"
            opacity="0.8"
            fill="none"
          />

          {/* Glowing Animated Gradient Arch Line - Intense Radiant Core */}
          <path
            d="M-300 850 C 260 -160, 1660 -160, 2220 850"
            stroke="url(#archBeamGrad)"
            strokeWidth="2.4"
            strokeLinecap="round"
            fill="none"
          />

          {/* Traveling Radiant Light Flare / Star Spark on the Arch Curve */}
          <g ref={orbRef} transform="translate(-300, 850)" opacity="0">
            <circle r="45" fill="url(#archOrbGlow)" />
            <circle r="6" fill="#ffffff" filter="url(#archGlowBlur)" />
            <circle r="2.5" fill="#ffffff" />
          </g>
        </svg>

        {/* Dynamic Ambient Top Glow following beam */}
        <div
          ref={ambientGlowRef}
          className="absolute top-12 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)] blur-3xl pointer-events-none transition-transform duration-100 ease-out"
        />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center px-5 pt-28 sm:pt-36 lg:pt-40 text-center sm:px-8 lg:px-12">
        
        {/* Main Content */}
        <div className="flex flex-col items-center">
          <Eyebrow className="text-white/60 mb-5 tracking-[0.25em] text-xs font-semibold">
            LET&rsquo;S CONNECT
          </Eyebrow>
          <DisplayTitle className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-wider text-white leading-tight">
            LET&rsquo;S BUILD SOMETHING<br />AMAZING TOGETHER
          </DisplayTitle>
          
          <div className="h-[2px] w-24 bg-white/20 my-5 sm:my-6" />
          
          <Body style={{ color: "#c4c7c5" }} className="text-sm sm:text-base leading-relaxed text-ink-secondary max-w-xl">
            Partner with Digital Wolf to transform your digital presence into a high-performance engine for growth and innovation.
          </Body>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 sm:mt-10 flex w-full flex-col items-center justify-between gap-8 border-t border-white/10 pt-8 md:flex-row md:gap-0">
          
          {/* Logo */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-start">
            <span className="font-display font-black text-3xl tracking-tighter text-white">DW</span>
          </div>
          
          {/* Social Icons (Solid White Circles with Black Icons) */}
          <div className="w-full md:w-1/3 flex justify-center gap-3.5">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black shadow-sm transition-all duration-300 hover:scale-105 hover:bg-neutral-200"
            >
              <FacebookIcon className="h-4 w-4 fill-black text-black" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black shadow-sm transition-all duration-300 hover:scale-105 hover:bg-neutral-200"
            >
              <LinkedinIcon className="h-4 w-4 fill-black text-black" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black shadow-sm transition-all duration-300 hover:scale-105 hover:bg-neutral-200"
            >
              <InstagramIcon className="h-4 w-4 fill-black text-black" />
            </a>
          </div>

          {/* Copyright */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-end">
            <span className="text-[11px] uppercase tracking-widest text-white/50">
              &copy; {new Date().getFullYear()} Digital Wolf. All rights reserved.
            </span>
          </div>

        </div>
      </div>
    </footer>
  );
}
