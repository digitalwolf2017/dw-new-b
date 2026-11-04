"use client";

import { useId } from "react";

export function BorderGlow() {
  const id = useId().replace(/:/g, "");
  const filterSm = `glow-sm-${id}`;
  const filterLg = `glow-lg-${id}`;

  return (
    <svg
      className="pointer-events-none absolute -inset-[1px] h-[calc(100%+2px)] w-[calc(100%+2px)] overflow-visible z-20"
      viewBox="0 0 1000 1000"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <filter id={filterSm} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="8" />
        </filter>
        <filter id={filterLg} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="22" />
        </filter>
      </defs>

      {/*
        Path starts at bottom-left corner (0, 1000), runs:
        - UP the left border: (0, 1000) -> (0, 0)
        - ACROSS the top border: (0, 0) -> (1000, 0)
        - DOWN the right border: (1000, 0) -> (1000, 1000)
        - ACROSS the bottom border: (1000, 1000) -> (0, 1000)
      */}
      {/* 1. Diffuse atmospheric halo */}
      <path
        d="M 0,1000 L 0,0 L 1000,0 L 1000,1000 Z"
        pathLength="1000"
        strokeWidth="16"
        strokeDasharray="120 880"
        strokeLinecap="round"
        stroke="rgba(255, 255, 255, 0.45)"
        filter={`url(#${filterLg})`}
        className="fill-none opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:[animation:borderGlowRun_2.6s_linear_infinite]"
      />

      {/* 2. Concentrated neon blur glow */}
      <path
        d="M 0,1000 L 0,0 L 1000,0 L 1000,1000 Z"
        pathLength="1000"
        strokeWidth="6"
        strokeDasharray="85 915"
        strokeLinecap="round"
        stroke="rgba(255, 255, 255, 0.85)"
        filter={`url(#${filterSm})`}
        className="fill-none opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:[animation:borderGlowRun_2.6s_linear_infinite]"
      />

      {/* 3. Ultra-crisp bright white core */}
      <path
        d="M 0,1000 L 0,0 L 1000,0 L 1000,1000 Z"
        pathLength="1000"
        strokeWidth="1.5"
        strokeDasharray="60 940"
        strokeLinecap="round"
        stroke="#ffffff"
        className="fill-none opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:[animation:borderGlowRun_2.6s_linear_infinite]"
      />
    </svg>
  );
}

