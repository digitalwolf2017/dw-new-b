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

export function Stats() {
  return (
    <section className="relative mx-auto w-full max-w-5xl px-5 py-24 sm:px-8 lg:px-12">
      {/* Top Gradient Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent" />
      {/* Bottom Gradient Border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent" />
      
      <div className="flex flex-wrap items-center justify-center gap-16 md:justify-between md:gap-8">
        {STATS.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div key={i} className="flex flex-col items-center gap-4 text-center">
              <Icon className="h-6 w-6 text-white" strokeWidth={1.5} />
              <div className="flex flex-col gap-2">
                <Heading as="h3" className="font-display text-4xl text-white sm:text-5xl font-bold">
                  <AnimatedCounter value={stat.value} />
                </Heading>
                <span className="text-[10px] font-bold tracking-widest text-ink-muted uppercase">
                  {stat.label}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
