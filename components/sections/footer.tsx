import { Body } from "@/components/ui/body";
import { DisplayTitle } from "@/components/ui/display-title";
import { Eyebrow } from "@/components/ui/eyebrow";
import { FacebookIcon, LinkedinIcon, InstagramIcon } from "@/components/ui/icons";

export function Footer() {
  return (
    <footer className="relative flex flex-col items-center justify-end overflow-hidden pt-32 pb-8 bg-base">
      {/* Decorative Arc SVG */}
      <div className="absolute top-0 left-1/2 w-full max-w-[1920px] -translate-x-1/2 px-8">
        <svg
          viewBox="0 0 1920 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full text-white/5"
          preserveAspectRatio="none"
        >
          <path
            d="M0 600C480 200 1440 200 1920 600"
            stroke="currentColor"
            strokeWidth="1"
          />
        </svg>
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center px-5 pt-24 text-center sm:px-8 lg:px-12">
        
        {/* Main Content */}
        <div className="flex flex-col items-center">
          <Eyebrow className="text-white/40 mb-6 tracking-[0.2em]">LET&rsquo;S CONNECT</Eyebrow>
          <DisplayTitle className="text-5xl md:text-6xl lg:text-7xl leading-tight text-white">
            Let&rsquo;s Build Something<br />Amazing Together
          </DisplayTitle>
          
          <div className="h-px w-24 bg-white/20 my-8" />
          
          <Body className="text-white/60 max-w-lg">
            Partner with Digital Wolf to transform your digital presence into a high-performance engine for growth and innovation.
          </Body>
        </div>

        {/* Bottom Bar */}
        <div className="mt-32 flex w-full flex-col items-center justify-between gap-8 border-t border-white/10 pt-8 md:flex-row md:gap-0">
          
          {/* Logo */}
          <div className="w-1/3 flex justify-start">
            <span className="font-display font-black text-3xl tracking-tighter text-white">DW</span>
          </div>
          
          {/* Social Icons */}
          <div className="w-1/3 flex justify-center gap-4">
            <a href="#" aria-label="Facebook" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:scale-110 hover:bg-white hover:text-black">
              <FacebookIcon className="h-4 w-4" />
            </a>
            <a href="#" aria-label="LinkedIn" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:scale-110 hover:bg-white hover:text-black">
              <LinkedinIcon className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:scale-110 hover:bg-white hover:text-black">
              <InstagramIcon className="h-4 w-4" />
            </a>
          </div>

          {/* Copyright */}
          <div className="w-1/3 flex justify-end">
            <span className="text-[10px] uppercase tracking-widest text-white/40">
              &copy; {new Date().getFullYear()} Digital Wolf. All rights reserved.
            </span>
          </div>

        </div>
      </div>
    </footer>
  );
}
