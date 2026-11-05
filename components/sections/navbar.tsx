import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SolidButton } from "@/components/ui/solid-button";

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex h-20 items-center border-b border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 xl:px-12">
        <Link href="/" className="shrink-0 font-display text-lg sm:text-xl xl:text-2xl font-bold tracking-wider xl:tracking-widest text-white">
          DIGITALWOLF
        </Link>

        <nav className="hidden items-center gap-3 sm:gap-4 lg:gap-5 xl:gap-8 md:flex">
          {["Services", "Work", "Process", "About"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="whitespace-nowrap text-[11px] xl:text-xs font-bold tracking-wider xl:tracking-widest uppercase text-white/80 transition-colors hover:text-white"
            >
              {item}
            </Link>
          ))}

          {/* Highlighted Partner Link */}
          <a
            href="https://thenoncoders.com/"
            target="_blank"
            rel="noopener noreferrer"
            data-no-modal
            className="group relative inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full border border-white/25 bg-white/[0.08] px-3 py-1 xl:px-3.5 xl:py-1.5 text-[11px] xl:text-xs font-bold tracking-wider xl:tracking-widest uppercase text-white transition-all duration-300 hover:border-white/60 hover:bg-white/15 hover:shadow-[0_0_16px_rgba(255,255,255,0.2)] active:translate-y-px"
          >
            <span>Our Tech Partner</span>
            <ArrowUpRight className="h-3 w-3 shrink-0 text-white/70 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
          </a>
        </nav>

        <div className="flex shrink-0 items-center">
          <SolidButton size="md" href="#contact" className="h-9 xl:h-[45px] px-5 xl:px-8 text-[11px] xl:text-xs font-bold uppercase tracking-wider xl:tracking-widest">
            Get in touch
          </SolidButton>
        </div>
      </div>
    </header>
  );
}
