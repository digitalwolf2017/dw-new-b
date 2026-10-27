import { Hero } from "@/components/sections/hero";
import { Partners } from "@/components/sections/partners";
import { AboutNew } from "@/components/sections/about-new";
import { Stats } from "@/components/sections/stats";
import { ServiceRail } from "@/components/sections/service-rail";
import { TechMarquee } from "@/components/sections/tech-marquee";
import { CaseStudiesMarquee } from "@/components/sections/case-studies-marquee";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { ClientMarquee } from "@/components/sections/client-marquee";
import { CaseStudies } from "@/components/sections/case-studies";
import { AgencyProcess } from "@/components/sections/agency-process";
import { Martech } from "@/components/sections/martech";
// import GrowthShowcase from "@/components/sections/GrowthShowcase";
import { SocialLinks } from "@/components/sections/social-links";
import { Contact } from "@/components/sections/contact";

import { GlobalScrollReveal } from "@/components/ui/global-scroll-reveal";

export default function Home() {
  return (
    <main className="overflow-x-clip">
      <GlobalScrollReveal>
        <Hero />
        <AboutNew />
        <Stats />
        <ServiceRail />
        <TechMarquee />
        <WhyChooseUs />
        <CaseStudiesMarquee />

        <ClientMarquee />
        {/* Original Case Studies preserved below */}
        {/* <CaseStudies /> */}
        <AgencyProcess />
        <Martech />
        {/* WinWinGrowth and AiWorkflow preserved as components */}
        {/* <GrowthShowcase /> */}
        <SocialLinks />
        <Contact />
      </GlobalScrollReveal>
    </main>
  );
}
