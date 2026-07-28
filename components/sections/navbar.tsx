import Link from "next/link";
import { Search } from "lucide-react";
import { SolidButton } from "@/components/ui/solid-button";

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex h-16.75 items-center border-b border-line bg-nav backdrop-blur-[6px]">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link href="/" className="font-display text-xl font-bold tracking-widest text-ink">
          DIGITALWOLF
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {["Services", "Work", "Process", "About"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-eyebrow text-ink-secondary transition-colors hover:text-white"
            >
              {item.toUpperCase()}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <button
            type="button"
            className="text-ink-secondary transition-colors hover:text-white"
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
