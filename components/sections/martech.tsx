import { cn } from "@/lib/utils";

const MARTECH_DATA = [
  { letter: "M", label: "AUTOMATION", pos: "top", h: "h-20 sm:h-28 lg:h-40", left: "80%" },
  { letter: "A", label: "MARKETING", pos: "bottom", h: "h-16 sm:h-20 lg:h-28", left: "25%" },
  { letter: "R", label: "RESEARCH", pos: "bottom", h: "h-24 sm:h-32 lg:h-44", left: "75%" },
  { letter: "T", label: "TECHNOLOGY", pos: "top", h: "h-16 sm:h-20 lg:h-28", left: "50%" },
  { letter: "E", label: "ENGAGEMENT", pos: "bottom", h: "h-32 sm:h-48 lg:h-64", left: "50%" },
  { letter: "C", label: "CONVERSION", pos: "top", h: "h-32 sm:h-48 lg:h-64", left: "50%" },
  { letter: "H", label: "HOLISTIC-GROWTH", pos: "bottom", h: "h-20 sm:h-28 lg:h-40", left: "75%" },
];

export function Martech() {
  return (
    <section className="relative overflow-hidden py-32 md:py-48 flex items-center justify-center min-h-[70vh] bg-base">
      <div className="container mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex w-full justify-center items-center gap-1 sm:gap-2">
          {MARTECH_DATA.map((item, i) => (
            <div key={i} className="relative inline-flex">
              {/* The Letter */}
              <span className="font-display text-[3.5rem] sm:text-7xl md:text-8xl lg:text-[11rem] font-bold uppercase leading-none bg-linear-to-b from-accent via-[#888888] to-[#111111] bg-clip-text text-transparent drop-shadow-2xl selection:bg-transparent">
                {item.letter}
              </span>

              {/* The Line and Dot */}
              <div
                className={cn(
                  "absolute w-0.5 -translate-x-1/2",
                  item.h,
                  item.pos === "top" ? "bg-linear-to-t from-transparent to-white/40" : "bg-linear-to-b from-transparent to-white/40"
                )}
                style={{
                  left: item.left,
                  ...(item.pos === "top" ? { bottom: "75%" } : { top: "75%" }),
                }}
              >
                {/* Dot */}
                <div
                  className={cn(
                    "absolute w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full -translate-x-1/2 bg-white/90 shadow-[0_0_10px_rgba(255,255,255,0.6)]",
                    item.pos === "top" ? "top-0 -translate-y-1/2" : "bottom-0 translate-y-1/2"
                  )}
                  style={{ left: "50%" }}
                />

                {/* Label */}
                <span
                  className={cn(
                    "absolute whitespace-nowrap text-[8px] sm:text-[10px] md:text-xs font-semibold tracking-[0.2em] text-white/70 uppercase -translate-x-1/2",
                    item.pos === "top" ? "bottom-full mb-3 sm:mb-5" : "top-full mt-3 sm:mt-5"
                  )}
                  style={{ left: "50%" }}
                >
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
