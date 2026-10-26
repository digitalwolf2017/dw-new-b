import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Body } from "@/components/ui/body";

interface AboutNewProps {
  id?: string;
  topImageSrc?: string;
  bottomImageSrc?: string;
}

export function AboutNew({
  id = "about",
  topImageSrc = "/images/about-workspace.jpg",
  bottomImageSrc = "/images/about-workspace.jpg",
}: AboutNewProps) {
  return (
    <section
      id={id}
      className="relative w-full overflow-hidden py-16 sm:py-20 lg:py-24 xl:py-28"
    >
      {/* Background subtle radial glow */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.025),transparent_70%)]"
        aria-hidden="true"
      />

      {/* Full width container spanning edge to edge */}
      <div className="relative flex w-full flex-col items-center justify-center lg:min-h-[640px] xl:min-h-[700px] 2xl:min-h-[760px]">
        {/* Top-Left Image: Plain on outer left side, rounded on inner right side */}
        <div className="w-[88%] max-w-[380px] self-start mb-8 sm:w-[360px] lg:mb-0 lg:w-[360px] xl:w-[420px] 2xl:w-[480px] lg:absolute lg:left-0 lg:top-4 xl:top-6">
          <div className="group relative h-[250px] sm:h-[280px] lg:h-[290px] xl:h-[340px] 2xl:h-[390px] w-full overflow-hidden rounded-l-none rounded-r-[28px] sm:rounded-r-[36px] lg:rounded-r-[44px] border-y border-r border-white/10 bg-surface shadow-[0_20px_50px_rgba(0,0,0,0.85)] transition-all duration-500 hover:border-white/30">
            <Image
              src={topImageSrc}
              alt="Digital Marketing Workspace & Analytics"
              fill
              sizes="(max-width: 1024px) 88vw, (max-width: 1536px) 440px, 500px"
              className="object-cover w-full h-full grayscale contrast-[1.08] brightness-[0.98] transition-transform duration-700 ease-out group-hover:scale-105"
              priority
            />
            <div className="pointer-events-none absolute inset-0 rounded-l-none rounded-r-[inherit] ring-1 ring-inset ring-white/10" />
          </div>
        </div>

        {/* Center Content: Headline, Divider, Body, CTA */}
        <div className="z-10 flex w-full max-w-sm sm:max-w-md lg:max-w-md xl:max-w-lg flex-col items-center px-4 text-center">
          {/* Main Display Headline */}
          <h2 className="font-display text-3xl font-bold uppercase tracking-[0.03em] text-white sm:text-4xl lg:text-[38px] xl:text-[44px] 2xl:text-[50px] leading-[1.14]">
            Powering The Next
            <br />
            Phase Of Digital
            <br />
            Growth.
          </h2>

          {/* —— ABOUT US —— */}
          <div className="my-5 flex items-center justify-center gap-3.5 sm:my-6 sm:gap-4">
            <span className="h-px w-8 bg-white/40 sm:w-12" aria-hidden="true" />
            <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.25em] text-ink-muted sm:text-xs">
              ABOUT US
            </span>
            <span className="h-px w-8 bg-white/40 sm:w-12" aria-hidden="true" />
          </div>

          {/* Descriptive Body Paragraph using standard site text-ink-secondary */}
          <Body
            size="lg"
            className="text-ink-secondary max-w-sm sm:max-w-md lg:max-w-md text-center leading-relaxed text-sm sm:text-base"
          >
            Digital Wolf Unites Strategy, Technology, Creativity And AI To Build
            Experiences That Strengthen Brands, Engage Audiences And Drive
            Measurable Growth.
          </Body>

          {/* Pill CTA Button */}
          <div className="mt-8 sm:mt-9">
            <Link
              href="#contact"
              className="group inline-flex items-center gap-2.5 rounded-full bg-white px-8 py-3.5 text-xs font-semibold tracking-wide text-black shadow-lg transition-all duration-300 hover:scale-105 hover:bg-neutral-100 hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] active:scale-95 sm:text-sm"
            >
              <span>Know More</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Bottom-Right Image: Plain on outer right side, rounded on inner left side */}
        <div className="w-[88%] max-w-[380px] self-end mt-8 sm:w-[360px] lg:mt-0 lg:w-[360px] xl:w-[420px] 2xl:w-[480px] lg:absolute lg:right-0 lg:bottom-4 xl:bottom-6">
          <div className="group relative h-[250px] sm:h-[280px] lg:h-[290px] xl:h-[340px] 2xl:h-[390px] w-full overflow-hidden rounded-r-none rounded-l-[28px] sm:rounded-l-[36px] lg:rounded-l-[44px] border-y border-l border-white/10 bg-surface shadow-[0_20px_50px_rgba(0,0,0,0.85)] transition-all duration-500 hover:border-white/30">
            <Image
              src={bottomImageSrc}
              alt="Digital Growth Planning and Execution"
              fill
              sizes="(max-width: 1024px) 88vw, (max-width: 1536px) 440px, 500px"
              className="object-cover w-full h-full grayscale contrast-[1.08] brightness-[0.98] transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="pointer-events-none absolute inset-0 rounded-r-none rounded-l-[inherit] ring-1 ring-inset ring-white/10" />
          </div>
        </div>
      </div>
    </section>
  );
}
