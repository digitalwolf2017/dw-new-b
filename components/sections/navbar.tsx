import Link from "next/link";
import { Search } from "lucide-react";
import { SolidButton } from "@/components/ui/solid-button";

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex h-20 items-center border-b border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link href="/" className="font-display text-xl md:text-2xl font-bold tracking-widest text-white">
          DIGITALWOLF
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {["Services", "Work", "Process", "About"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-xs font-bold tracking-widest uppercase text-white/80 transition-colors hover:text-white"
            >
              {item}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <button
            type="button"
            className="text-white/80 transition-colors hover:text-white"
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </button>
          <SolidButton size="md" href="#contact">
            Get in touch
          </SolidButton>
        </div>
      </div>
    </header>
  );
}
