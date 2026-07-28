import { Hero } from "@/components/sections/hero";
import { Partners } from "@/components/sections/partners";
import { About } from "@/components/sections/about";
import { Stats } from "@/components/sections/stats";
import { ServiceRail } from "@/components/sections/service-rail";
import { TechMarquee } from "@/components/sections/tech-marquee";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { AgencyProcess } from "@/components/sections/agency-process";
import { Martech } from "@/components/sections/martech";
import GrowthShowcase from "@/components/sections/GrowthShowcase";
import { Contact } from "@/components/sections/contact";

import { GlobalScrollReveal } from "@/components/ui/global-scroll-reveal";

export default function Home() {
  return (
    <main className="overflow-x-clip">
      <GlobalScrollReveal>
        <Hero />
        <Partners />
        <About />
        <Stats />
        <ServiceRail />
        <TechMarquee />
        <WhyChooseUs />
        <AgencyProcess />
        <Martech />
        <GrowthShowcase />
        <Contact />
      </GlobalScrollReveal>
    </main>
  );
}
