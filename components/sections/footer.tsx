import { Body } from "@/components/ui/body";
import { DisplayTitle } from "@/components/ui/display-title";
import { Eyebrow } from "@/components/ui/eyebrow";
import { FacebookIcon, LinkedinIcon, InstagramIcon } from "@/components/ui/icons";

export function Footer() {
  return (
    <footer className="relative flex flex-col items-center justify-end overflow-hidden pt-20 sm:pt-24 lg:pt-28 pb-8 bg-base">
      {/* Decorative Illuminated Dome Arc SVG with Gradient Fill */}
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
              <stop offset="0%" stop-color="#2a2a2d" stop-opacity="0.95" />
              <stop offset="35%" stop-color="#202023" stop-opacity="0.75" />
              <stop offset="70%" stop-color="#18181a" stop-opacity="0.4" />
              <stop offset="100%" stop-color="#141416" stop-opacity="0" />
            </linearGradient>
            <radialGradient id="footerDomeGlow" cx="50%" cy="12%" r="65%" fx="50%" fy="8%">
              <stop offset="0%" stop-color="rgba(255,255,255,0.15)" />
              <stop offset="40%" stop-color="rgba(255,255,255,0.04)" />
              <stop offset="85%" stop-color="rgba(0,0,0,0)" />
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

          {/* Thin Arch Stroke */}
          <path
            d="M-300 850 C 260 -160, 1660 -160, 2220 850"
            stroke="rgba(255, 255, 255, 0.22)"
            strokeWidth="1.2"
          />
        </svg>

        {/* Ambient Top Glow */}
        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08)_0%,transparent_70%)] blur-3xl pointer-events-none" />
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
