import { cn } from "@/lib/utils";
import { DisplayTitle } from "@/components/ui/display-title";

const COPY = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu.";

const JOURNEY_STEPS = [
  { num: "01", title: "Define", copy: COPY },
  { num: "02", title: "Design", copy: COPY },
  { num: "03", title: "Build", copy: COPY },
  { num: "04", title: "Launch", copy: COPY },
];

function GlassCard({ step, className }: { step: { num: string; title: string; copy: string }; className?: string }) {
  return (
    <div className={cn("relative flex w-full flex-col gap-6 rounded-4xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-md transition-all hover:border-white/20 hover:bg-white/10", className)}>
      {/* Pin Hole */}
      <div className="absolute -top-3 left-1/2 h-6 w-6 -translate-x-1/2 rounded-full border-[3px] border-[#222] bg-black shadow-[inset_0_2px_4px_rgba(0,0,0,0.8)]" />
      
      <div className="flex flex-col gap-1">
        <span className="text-sm font-semibold text-white/50">{step.num}</span>
        <span className="font-display text-3xl font-bold tracking-wide text-white uppercase">{step.title}</span>
      </div>
      <div className="rounded-2xl border border-white/5 bg-black/40 p-5">
        <p className="text-sm leading-relaxed text-white/70">{step.copy}</p>
      </div>
    </div>
  );
}

export function JourneyPath() {
  return (
    <section className="relative overflow-hidden py-32">
      {/* Mobile Layout */}
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-12 px-5 sm:px-8 md:hidden">
        <div className="mb-4 flex flex-col gap-6">
          <div className="inline-flex items-center self-start rounded-full border border-white/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white/70">
            How we work
          </div>
          <DisplayTitle className="text-4xl sm:text-5xl leading-tight text-white">
            Let us show you how we drive your brand to new heights
          </DisplayTitle>
          <p className="text-lg text-white/60">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum.
          </p>
        </div>

        {JOURNEY_STEPS.map((step, i) => (
          <GlassCard key={i} step={step} />
        ))}
        
        <div className="mt-8 text-center">
          <span className="font-display text-2xl font-bold text-white/80 uppercase">Ready to be delivered!</span>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="relative mx-auto hidden h-[1100px] w-full container md:block">
        {/* The SVG Dotted Path */}
        <svg
          viewBox="0 0 1000 1100"
          preserveAspectRatio="none"
          className="pointer-events-none absolute inset-0 h-full w-full"
        >
          <path
            d="M 350 150 Q 550 100 700 200 C 750 300, 200 300, 250 450 C 300 600, 800 550, 750 700 C 700 850, 200 800, 250 950 Q 400 1050 600 1050"
            fill="none"
            stroke="#444"
            strokeWidth="2"
            strokeDasharray="8 8"
          />
        </svg>

        {/* Text Block */}
        <div className="absolute left-[5%] top-[5%] w-full max-w-md">
          <div className="mb-6 inline-flex items-center rounded-full border border-white/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white/70 backdrop-blur-sm">
            How we work
          </div>
          <DisplayTitle className="text-4xl sm:text-5xl leading-tight text-white">
            Let us show you how we drive your brand to new heights
          </DisplayTitle>
          <p className="mt-6 max-w-sm text-lg text-white/60">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum.
          </p>
        </div>

        {/* Cards scattered along the path */}
        <div className="absolute left-[70%] top-[18%] w-80 -translate-x-1/2 origin-top rotate-[-4deg]">
          <GlassCard step={JOURNEY_STEPS[0]} />
        </div>
        <div className="absolute left-[25%] top-[41%] w-80 -translate-x-1/2 origin-top rotate-[-4deg]">
          <GlassCard step={JOURNEY_STEPS[1]} />
        </div>
        <div className="absolute left-[75%] top-[63%] w-80 -translate-x-1/2 origin-top rotate-[-4deg]">
          <GlassCard step={JOURNEY_STEPS[2]} />
        </div>
        <div className="absolute left-[25%] top-[86%] w-80 -translate-x-1/2 origin-top rotate-[-4deg]">
          <GlassCard step={JOURNEY_STEPS[3]} />
        </div>

        {/* End Text */}
        <div className="absolute left-[60%] top-[95%] -translate-x-1/2 rotate-[4deg]">
          <span className="font-display text-2xl font-bold text-white/80 uppercase">Ready to be delivered!</span>
        </div>
      </div>
    </section>
  );
}
