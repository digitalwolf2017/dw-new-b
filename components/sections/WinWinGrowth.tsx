"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { gsap, useGSAP } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { DisplayTitle, TitleAccent } from "@/components/ui/display-title";

const COPY =
  "Modern businesses need smarter systems, not more tools. We automate workflows that save time, simplify operations, and drive growth.";

/* Diagram geometry (viewBox 1600×700, centre hub at 800,350) */
const HUB = { x: 800, y: 350, r: 74 };

type NodeSpec = {
  x: number;
  y: number;
  icon: "burst" | "spark" | "swirl" | "gear" | "chart" | "chip";
};

/* Six distinct marks, each tied to the copy: energy, automation,
   AI models, growth, smart magic, intelligent systems. */
const NODES: NodeSpec[] = [
  { x: 300, y: 150, icon: "burst" },
  { x: 300, y: 350, icon: "gear" },
  { x: 300, y: 550, icon: "swirl" },
  { x: 1300, y: 150, icon: "chart" },
  { x: 1300, y: 350, icon: "spark" },
  { x: 1300, y: 550, icon: "chip" },
];

/* Curved wires from each node to the hub edge. */
const WIRES = [
  "M300 150 C560 150 640 350 726 350",
  "M300 350 C450 350 600 350 726 350",
  "M300 550 C560 550 640 350 726 350",
  "M1300 150 C1040 150 960 350 874 350",
  "M1300 350 C1150 350 1000 350 874 350",
  "M1300 550 C1040 550 960 350 874 350",
];

/* Fixed precision so SVG coordinates serialise identically on server and client. */
const round = (value: number) => Number(value.toFixed(3));

function NodeIcon({
  icon,
  animate,
}: {
  icon: NodeSpec["icon"];
  animate: boolean;
}) {
  // Icons stay quietly alive: bursts/swirls turn slowly, sparks breathe.
  const spin = animate
    ? {
        animate: { rotate: 360 },
        transition: { duration: 36, ease: "linear" as const, repeat: Infinity },
      }
    : {};
  const origin = {
    transformBox: "fill-box",
    transformOrigin: "center",
  } as const;

  const strokeColor = "rgba(255,255,255,0.7)";

  if (icon === "burst") {
    return (
      <motion.g
        stroke={strokeColor}
        strokeWidth="3"
        strokeLinecap="round"
        style={origin}
        {...spin}
      >
        {Array.from({ length: 10 }).map((_, i) => {
          const a = (i / 10) * Math.PI * 2;
          return (
            <line
              key={i}
              x1={round(Math.cos(a) * 5)}
              y1={round(Math.sin(a) * 5)}
              x2={round(Math.cos(a) * 14)}
              y2={round(Math.sin(a) * 14)}
            />
          );
        })}
      </motion.g>
    );
  }
  if (icon === "spark") {
    return (
      <motion.path
        d="M0 -15 C2 -4 4 -2 15 0 C4 2 2 4 0 15 C-2 4 -4 2 -15 0 C-4 -2 -2 -4 0 -15 Z"
        fill={strokeColor}
        style={origin}
        {...(animate
          ? {
              animate: { scale: [1, 1.18, 1] },
              transition: {
                duration: 3.4,
                ease: "easeInOut" as const,
                repeat: Infinity,
              },
            }
          : {})}
      />
    );
  }
  if (icon === "swirl") {
    return (
      <motion.g
        stroke={strokeColor}
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
        style={origin}
        {...spin}
      >
        {Array.from({ length: 6 }).map((_, i) => (
          <path
            key={i}
            d="M1 -1 C7 -4 11 -9 9 -15"
            transform={`rotate(${i * 60})`}
          />
        ))}
      </motion.g>
    );
  }
  if (icon === "gear") {
    return (
      <motion.g
        stroke={strokeColor}
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
        style={origin}
        {...spin}
      >
        <circle r="5.5" />
        {Array.from({ length: 8 }).map((_, i) => {
          const a = (i / 8) * Math.PI * 2;
          return (
            <line
              key={i}
              x1={round(Math.cos(a) * 9)}
              y1={round(Math.sin(a) * 9)}
              x2={round(Math.cos(a) * 13.5)}
              y2={round(Math.sin(a) * 13.5)}
            />
          );
        })}
      </motion.g>
    );
  }
  if (icon === "chart") {
    return (
      <g
        stroke={strokeColor}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      >
        <path d="M-13 9 L-4 0 L2 5 L13 -7" />
        <path d="M6 -7 H13 V0" />
      </g>
    );
  }
  return (
    <g
      stroke={strokeColor}
      strokeWidth="2.5"
      strokeLinecap="round"
      fill="none"
    >
      <rect x="-8" y="-8" width="16" height="16" rx="2.5" />
      <rect x="-3" y="-3" width="6" height="6" rx="1" fill={strokeColor} />
      {[-5, 0, 5].map((o) => (
        <g key={o}>
          <line x1={o} y1="-8" x2={o} y2="-13" />
          <line x1={o} y1="8" x2={o} y2="13" />
          <line x1="-8" y1={o} x2="-13" y2={o} />
          <line x1="8" y1={o} x2="13" y2={o} />
        </g>
      ))}
    </g>
  );
}

export default function WinWinGrowth() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  useGSAP(
    (_, contextSafe) => {
      if (!contextSafe) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }

      // Gentle depth: the diagram drifts slower than the page.
      gsap.fromTo(
        ".wwg-diagram",
        { y: 60 },
        {
          y: -60,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        ".wwg-copy",
        { autoAlpha: 0, y: 28 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: ".wwg-copy", start: "top 90%" },
        }
      );
    },
    { scope: sectionRef }
  );

  const appear = (delay: number) =>
    reduced
      ? {}
      : {
          initial: { scale: 0, opacity: 0 },
          whileInView: { scale: 1, opacity: 1 },
          viewport: { once: false, amount: 0.4 },
          transition: {
            duration: 0.6,
            delay,
            ease: [0.34, 1.56, 0.64, 1] as const,
          },
        };

  return (
    <section
      id="growth"
      ref={sectionRef}
      className="relative z-10 flex min-h-screen w-full flex-col justify-center items-center overflow-hidden py-16 md:py-24"
    >
      {/* Subtle background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 h-[75%] w-[65%] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03),transparent_65%)]"
      />

      <div className="relative container mx-auto px-4 flex flex-col items-center">
        {/* Clean, standard heading instead of the sticker */}
        <DisplayTitle className="wwg-title text-center mb-8 lg:mb-12 text-4xl sm:text-5xl opacity-100">
          Win-Win <TitleAccent>Growth.</TitleAccent>
        </DisplayTitle>

        {/* Hub-and-spoke AI diagram */}
        <svg
          viewBox="0 0 1600 700"
          fill="none"
          aria-hidden
          className="wwg-diagram mx-auto mt-6 w-full px-2 md:mt-8 md:px-4"
        >
          {/* Wires draw themselves toward the hub */}
          {WIRES.map((d, i) => (
            <motion.path
              key={d}
              d={d}
              stroke="url(#wwg-wire)"
              strokeWidth="1"
              {...(reduced
                ? {}
                : {
                    initial: { pathLength: 0, opacity: 0 },
                    whileInView: { pathLength: 1, opacity: 1 },
                    viewport: { once: false, amount: 0.4 },
                    transition: {
                      duration: 1.1,
                      delay: 0.25 + (i % 3) * 0.18,
                      ease: "easeOut",
                    },
                  })}
            />
          ))}

          {/* Energy pulses streaming along the wires into the hub */}
          {!reduced &&
            WIRES.map((d, i) => (
              <g key={`pulse-${d}`} opacity="0.8">
                <circle r="7" fill="rgba(255,255,255,0.15)" />
                <circle r="4" fill="rgba(255,255,255,0.4)" />
                <circle r="2" fill="#ffffff" />
                <animateMotion
                  dur={`${2.8 + (i % 3) * 0.5}s`}
                  begin={`${1.6 + i * 0.45}s`}
                  repeatCount="indefinite"
                  path={d}
                />
              </g>
            ))}

          {/* Satellite nodes */}
          {NODES.map(({ x, y, icon }, i) => (
            <motion.g
              key={`${x}-${y}`}
              style={{ transformBox: "fill-box", transformOrigin: "center" }}
              {...appear(0.15 + (i % 3) * 0.18)}
              whileHover={reduced ? undefined : { scale: 1.12 }}
            >
              <circle
                cx={x}
                cy={y}
                r="38"
                fill="var(--color-surface)"
                stroke="rgba(255,255,255,0.15)"
                strokeWidth="1.5"
                className="transition-[stroke] duration-500 hover:stroke-white/40"
              />
              <g transform={`translate(${x} ${y})`}>
                <NodeIcon icon={icon} animate={!reduced} />
              </g>
            </motion.g>
          ))}

          {/* Central AI hub */}
          <motion.g
            style={{ transformBox: "fill-box", transformOrigin: "center" }}
            {...appear(0)}
          >
            {/* Broadcast ripples radiating from the hub */}
            {!reduced &&
              [0, 1.6].map((delay) => (
                <motion.circle
                  key={delay}
                  cx={HUB.x}
                  cy={HUB.y}
                  r={HUB.r + 2}
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth="1.5"
                  style={{ transformBox: "fill-box", transformOrigin: "center" }}
                  initial={{ scale: 1, opacity: 0 }}
                  animate={{ scale: 1.7, opacity: [0, 0.4, 0] }}
                  transition={{
                    duration: 3.2,
                    delay,
                    ease: "easeOut",
                    repeat: Infinity,
                  }}
                />
              ))}
            <motion.circle
              cx={HUB.x}
              cy={HUB.y}
              r={HUB.r}
              fill="var(--color-surface)"
              stroke="rgba(255,255,255,0.3)"
              strokeWidth="2"
              style={{
                transformBox: "fill-box",
                transformOrigin: "center",
                filter: "drop-shadow(0 0 20px rgba(255,255,255,0.1))",
              }}
              {...(reduced
                ? {}
                : {
                    animate: { scale: [1, 1.02, 1] },
                    transition: {
                      duration: 4,
                      ease: "easeInOut" as const,
                      repeat: Infinity,
                    },
                  })}
            />
            {/* Slowly-rotating dashed halo */}
            <motion.circle
              cx={HUB.x}
              cy={HUB.y}
              r={HUB.r + 13}
              stroke="rgba(255,255,255,0.3)"
              strokeWidth="1.5"
              strokeDasharray="3 12"
              strokeLinecap="round"
              style={{ transformBox: "fill-box", transformOrigin: "center" }}
              {...(reduced
                ? {}
                : {
                    animate: { rotate: 360 },
                    transition: {
                      duration: 24,
                      ease: "linear",
                      repeat: Infinity,
                    },
                  })}
            />
            <text
              x={HUB.x}
              y={HUB.y}
              textAnchor="middle"
              dominantBaseline="central"
              fill="var(--color-ink)"
              fontSize="52"
              fontWeight="800"
              style={{ fontFamily: "var(--font-display)" }}
            >
              AI
            </text>
          </motion.g>

          <defs>
            {/* userSpaceOnUse: bounding-box gradients vanish on the
                perfectly-horizontal middle wires (zero-height bbox). */}
            <linearGradient
              id="wwg-wire"
              gradientUnits="userSpaceOnUse"
              x1="300"
              y1="0"
              x2="1300"
              y2="0"
            >
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>

        <p className="wwg-copy mx-auto mt-6 max-w-2xl text-center leading-relaxed text-ink-secondary text-body-lg lg:mt-6">
          {COPY}
        </p>
      </div>
    </section>
  );
}
