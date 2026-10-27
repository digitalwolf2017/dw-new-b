import { Body } from "@/components/ui/body";
import { DisplayTitle } from "@/components/ui/display-title";

function ProcessStep({ number, title, desc }: { number: string, title: string, desc: string }) {
  return (
    <div className="flex items-start gap-6 sm:gap-8 max-w-105">
      <div className="font-serif text-5xl sm:text-6xl text-ink-secondary/30 leading-none -mt-1">
        {number}
      </div>
      <div className="flex flex-col gap-3 flex-1">
        <h3 className="font-sans text-sm font-bold uppercase tracking-[0.15em] text-white">{title}</h3>
        <p className="font-sans text-sm leading-relaxed text-ink-secondary/90">{desc}</p>
        <div className="h-px w-full bg-white/10 mt-3" />
      </div>
    </div>
  );
}

export function AgencyProcess() {
  return (
    <section className="mx-auto flex w-full container flex-col lg:flex-row gap-16 lg:gap-8 px-5 py-24 sm:px-8 lg:px-12 relative">
      
      {/* Left Column: Sticky Title */}
      <div className="w-full lg:w-5/12 shrink-0">
        <div className="flex flex-col gap-6 lg:sticky lg:top-32">
          <DisplayTitle className="text-4xl sm:text-5xl uppercase leading-tight">
            OUR<br />AGENCY<br />PROCESS
          </DisplayTitle>
          <div className="h-px w-16 bg-white/30 my-2" />
          <Body className="text-ink-secondary/90 max-w-sm text-sm leading-relaxed">
            Our capabilities span the full digital spectrum, from creative direction
            to technical automation. We don&rsquo;t just build, we architect for
            conversion.
          </Body>
        </div>
      </div>

      {/* Right Column: Zig-Zag Points */}
      <div className="w-full lg:w-7/12 flex flex-col gap-16 lg:gap-24 pt-8 lg:pt-0">
        
        <div className="flex w-full lg:justify-end">
          <ProcessStep 
            number="01" 
            title="Discovery" 
            desc="We dismantle your current tech stack and marketing data to find the leaks and the untapped leverage points that will drive exponential return." 
          />
        </div>

        <div className="flex w-full lg:justify-start">
          <ProcessStep 
            number="02" 
            title="Strategy" 
            desc="We architect a bespoke growth map that aligns high-end creative storytelling with technical automation for a unified brand experience." 
          />
        </div>

        <div className="flex w-full lg:justify-end">
          <ProcessStep 
            number="03" 
            title="Execution" 
            desc="Deployment of custom AI engines and elite creative assets. We don't just 'launch'; we initialize a self-optimizing performance system." 
          />
        </div>

        <div className="flex w-full lg:justify-start">
          <ProcessStep 
            number="04" 
            title="Scaling" 
            desc="Using predictive modeling to scale winning patterns while the AI automates operational maintenance, freeing you to lead." 
          />
        </div>

        <div className="flex w-full lg:justify-end">
          <ProcessStep 
            number="05" 
            title="Optimization" 
            desc="Continuous algorithmic calibration and conversion rate intelligence to maximize client lifetime value and lower acquisition costs." 
          />
        </div>

        <div className="flex w-full lg:justify-start">
          <ProcessStep 
            number="06" 
            title="Evolution" 
            desc="Ongoing architectural updates and AI capability upgrades, ensuring your systems continuously evolve and outpace industry standards." 
          />
        </div>

      </div>
    </section>
  );
}
