"use client";

import Image from "next/image";
import Link from "next/link";

interface MarqueeItem {
  src: string;
  alt: string;
}

const COL_1: MarqueeItem[] = [
  {
    src: "/images/case-studies/campus-architecture.jpg",
    alt: "Institute campus gateway and architecture",
  },
  {
    src: "/images/case-studies/vocational-institute.jpg",
    alt: "Technical training vocational institute",
  },
  {
    src: "/images/case-studies/creative-studio.jpg",
    alt: "Interactive digital user experience studio",
  },
];

const COL_2: MarqueeItem[] = [
  {
    src: "/images/case-studies/campus-playground.jpg",
    alt: "School playground and recreation area",
  },
  {
    src: "/images/case-studies/student-app.jpg",
    alt: "Student holding mobile learning application",
  },
  {
    src: "/images/case-studies/education-classroom.jpg",
    alt: "Digital laboratory and multimedia workstation",
  },
];

const COL_3: MarqueeItem[] = [
  {
    src: "/images/case-studies/heritage-discussion.jpg",
    alt: "Traditional heritage business discussion",
  },
  {
    src: "/images/case-studies/media-event.jpg",
    alt: "Global entertainment media press event",
  },
  {
    src: "/images/case-studies/campus-architecture.jpg",
    alt: "Contemporary research institute facade",
  },
];

function VerticalMarqueeColumn({
  items,
  reverse = false,
  duration = "30s",
}: {
  items: MarqueeItem[];
  reverse?: boolean;
  duration?: string;
}) {
  // Duplicate items array so it loops seamlessly
  const loopedItems = [...items, ...items];

  return (
    <div className="group relative flex h-full flex-1 flex-col overflow-hidden">
      <div
        className={`flex flex-col gap-3 sm:gap-3.5 will-change-transform group-hover:[animation-play-state:paused] ${
          reverse ? "animate-marquee-y-reverse" : "animate-marquee-y"
        }`}
        style={{ animationDuration: duration }}
      >
        {loopedItems.map((item, index) => (
          <div
            key={index}
            className="relative aspect-[3/4] w-full shrink-0 overflow-hidden rounded-lg sm:rounded-xl border border-white/10 bg-surface shadow-sm"
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(max-width: 640px) 30vw, (max-width: 1024px) 20vw, 170px"
              className="object-cover transition-transform duration-500 ease-out hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export function CaseStudiesMarquee() {
  return (
    <section
      id="work"
      data-no-global-reveal
      className="relative w-full overflow-hidden bg-base py-4 sm:py-6 px-[16px]"
    >
      {/* The Rounded Container Card: exact black bg and side margins matching Hero and Service Rail */}
      <div className="relative w-full overflow-hidden rounded-[28px] sm:rounded-[36px] lg:rounded-[44px] xl:rounded-[48px] border border-white/10 bg-black px-6 py-9 sm:px-10 sm:py-12 lg:px-14 lg:py-14 xl:px-18 xl:py-16 shadow-lg shadow-black/40">
          
          {/* Subtle ambient glow */}
          <div
            className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white/[0.02] blur-3xl"
            aria-hidden="true"
          />

          <div className="mx-auto flex w-full max-w-5xl xl:max-w-6xl flex-col items-start lg:flex-row lg:items-center lg:justify-center gap-10 lg:gap-14 xl:gap-20">
            {/* Left Column: Heading, Divider, Description, CTA */}
            <div className="flex w-full flex-col items-start lg:max-w-md xl:max-w-lg shrink-0">
              <h2 className="font-display text-4xl font-bold uppercase tracking-wide text-white sm:text-5xl lg:text-[44px] xl:text-[50px] leading-[1.08]">
                OUR CASE
                <br />
                STUDIES
              </h2>

              {/* Accent Divider Line */}
              <div
                className="my-5 h-[2px] w-12 bg-white/70 sm:my-6 sm:w-14"
                aria-hidden="true"
              />

              {/* Body Text: site theme color (#c4c7c5 text-ink-secondary) */}
              <p
                style={{ color: "#c4c7c5" }}
                className="font-sans text-sm leading-relaxed text-ink-secondary sm:text-base sm:leading-relaxed max-w-sm sm:max-w-md font-normal"
              >
                Real Challenges. Strategic Solutions. Measurable Growth. Explore
                how we turn business objectives into meaningful outcomes through
                technology, innovation, and performance.
              </p>

              {/* View All Services Button */}
              <div className="mt-7 sm:mt-8">
                <Link
                  href="#services"
                  className="inline-flex items-center justify-center rounded-none bg-white px-8 py-3.5 font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-black shadow-sm transition-all duration-300 hover:bg-neutral-200 active:translate-y-px sm:text-xs"
                >
                  VIEW ALL SERVICES
                </Link>
              </div>
            </div>

            {/* Right Column: Compact 3 Vertical Marquee Sliders in marked position */}
            <div className="relative h-[400px] sm:h-[430px] lg:h-[450px] xl:h-[480px] w-full max-w-[400px] sm:max-w-[440px] lg:max-w-[470px] xl:max-w-[500px] shrink-0 overflow-hidden">
              
              {/* Fade Overlays (Top and Bottom) */}
              <div
                className="pointer-events-none absolute inset-x-0 top-0 z-20 h-16 bg-gradient-to-b from-black via-black/80 to-transparent sm:h-20"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-16 bg-gradient-to-t from-black via-black/80 to-transparent sm:h-20"
                aria-hidden="true"
              />

              {/* 3 Columns Track */}
              <div className="flex h-full w-full gap-3 sm:gap-3.5">
                {/* Column 1 - Moving Up */}
                <VerticalMarqueeColumn items={COL_1} duration="28s" />

                {/* Column 2 - Moving Down */}
                <VerticalMarqueeColumn items={COL_2} reverse duration="24s" />

                {/* Column 3 - Moving Up */}
                <VerticalMarqueeColumn items={COL_3} duration="30s" />
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}
