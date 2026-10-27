"use client";

import { useEffect, useRef, useState } from "react";
import { Heading } from "@/components/ui/heading";
import { CheckCircle2, MousePointerClick, ShieldCheck, Users } from "lucide-react";

const STATS = [
  { label: "PROJECTS", value: "300+", icon: CheckCircle2 },
  { label: "CAMPAIGNS", value: "8.9k", icon: MousePointerClick },
  { label: "LEADS", value: "3000+", icon: Users },
  { label: "BRANDS", value: "23", icon: ShieldCheck },
];

function AnimatedCounter({ value }: { value: string }) {
  const [count, setCount] = useState(0);
  const nodeRef = useRef<HTMLSpanElement>(null);

  const numericValue = parseFloat(value.replace(/[^0-9.]/g, ""));
  const suffix = value.replace(/[0-9.]/g, "");
  const hasDecimals = value.includes(".");

  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;

    let startTime: number | null = null;
    let animationFrame: number;
    const duration = 2000;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          observer.disconnect();

          const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            
            // easeOutExpo
            const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            
            setCount(numericValue * easeProgress);

            if (progress < 1) {
              animationFrame = requestAnimationFrame(animate);
            } else {
              setCount(numericValue);
            }
          };

          animationFrame = requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [numericValue]);

  const displayValue = hasDecimals 
    ? count.toFixed(1) 
    : Math.floor(count).toString();

  return (
    <span ref={nodeRef}>
      {displayValue}{suffix}
    </span>
  );
}

export function Stats({ id = "stats" }: { id?: string }) {
  return (
    <section
      id={id}
      className="relative w-full overflow-hidden bg-base py-4 sm:py-6 px-[16px]"
    >
      {/* Floating Rounded Card matching site black bg card style */}
      <div className="relative mx-auto w-full overflow-hidden rounded-[12px] border border-white/10 bg-black px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
        {/* Subtle ambient radial glow */}
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.025)_0%,transparent_70%)]"
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto grid w-full max-w-5xl grid-cols-2 gap-8 sm:gap-10 md:grid-cols-4 md:gap-8">
          {STATS.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={i} className="flex flex-col items-center gap-3.5 sm:gap-4 text-center">
                <Icon className="h-6 w-6 text-white" strokeWidth={1.5} />
                <div className="flex flex-col gap-1.5 sm:gap-2">
                  <Heading as="h3" className="font-display text-4xl text-white sm:text-5xl font-bold">
                    <AnimatedCounter value={stat.value} />
                  </Heading>
                  <span className="text-[10px] sm:text-xs font-bold tracking-widest text-ink-muted uppercase">
                    {stat.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
