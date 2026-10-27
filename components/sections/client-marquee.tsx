"use client";

import { DisplayTitle } from "@/components/ui/display-title";
import { Body } from "@/components/ui/body";
import { cn } from "@/lib/utils";

const CLIENTS = [
  "George Telegraph",
  "Puma",
  "Tata Motors",
  "KFC",
  "Dominos",
  "Reliance",
  "HDFC Bank",
  "ICICI Bank",
];

const CLIENTS_2 = [
  "Tech Mahindra",
  "Flipkart",
  "Myntra",
  "Nike",
  "Adidas",
  "Reebok",
  "L'Oreal",
  "Unilever",
];

export function ClientMarquee() {
  return (
    <section className="overflow-hidden py-24 relative bg-base">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.02)_0%,transparent_70%)]"></div>
      
      <div className="flex w-full flex-col items-center gap-16 lg:gap-24">
        
        {/* Top: Text */}
        <div className="flex w-full flex-col items-center text-center gap-4 px-5 sm:px-8 lg:px-12 relative z-10">
          <DisplayTitle className="text-4xl sm:text-5xl leading-tight">
            Trusted By<br />INDUSTRY LEADERS
          </DisplayTitle>
          <Body className="max-w-md text-ink-secondary">
            Partnering with ambitious brands to drive meaningful growth.
          </Body>
        </div>

        {/* Bottom: Marquee */}
        <div className="flex w-full flex-col gap-8 overflow-hidden relative z-10">
          {/* Edge fade gradients */}
          <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-base to-transparent z-20 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-linear-to-l from-base to-transparent z-20 pointer-events-none"></div>

          {/* Row 1 - Left to Right */}
          <div className="relative flex w-full overflow-hidden">
            <div className="flex animate-marquee gap-10 sm:gap-14 whitespace-nowrap will-change-transform">
              {[...CLIENTS, ...CLIENTS].map((client, i) => (
                <div key={`row1-${i}`} className="flex shrink-0 items-center justify-center px-3 sm:px-4">
                  <span className="text-xl sm:text-2xl md:text-3xl lg:text-[2.25rem] font-display font-bold uppercase tracking-wider text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>
                    {client}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 - Right to Left */}
          <div className="relative flex w-full overflow-hidden">
            <div className="flex animate-marquee-reverse gap-10 sm:gap-14 whitespace-nowrap will-change-transform">
              {[...CLIENTS_2, ...CLIENTS_2].map((client, i) => (
                <div key={`row2-${i}`} className="flex shrink-0 items-center justify-center px-3 sm:px-4">
                  <span className="text-xl sm:text-2xl md:text-3xl lg:text-[2.25rem] font-display font-bold uppercase tracking-wider text-white/40 transition-colors duration-500 hover:text-white">
                    {client}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
