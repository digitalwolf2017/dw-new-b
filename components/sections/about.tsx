import { Body } from "@/components/ui/body";
import { Eyebrow } from "@/components/ui/eyebrow";
import { GreyscaleImage } from "@/components/ui/greyscale-image";
import { Heading } from "@/components/ui/heading";
import { Code, TerminalSquare } from "lucide-react";

export function About() {
  return (
    <section id="about" className="mx-auto container grid w-full grid-cols-1 gap-16 px-5 py-24 sm:px-8 lg:grid-cols-10 lg:items-start lg:gap-16 lg:px-12 xl:gap-24">
      <GreyscaleImage
        src="/images/about.webp"
        alt="About us digital workspace"
        width={650}
        height={511}
        halo
        wrapperClassName="w-full lg:col-span-4 lg:mt-16"
        className="aspect-650/511 w-full object-cover"
        unoptimized
      />

      <div className="flex flex-col gap-12 lg:col-span-6">
        <div className="flex flex-col gap-6">
          <Eyebrow>ESTABLISHED 2018</Eyebrow>
          <Heading as="h2" className="font-display font-bold text-4xl uppercase tracking-wide text-white sm:text-5xl">
            ABOUT US
          </Heading>
          <div className="flex flex-col gap-4">
            <Body size="lg" className="text-ink-secondary">
              Digital Wolf helps businesses navigate the evolving digital landscape
              through strategy, technology, and innovation. Our multidisciplinary team 
              combines creative vision with analytical rigor to architect custom digital 
              experiences that resonate with audiences.
            </Body>
            <Body size="lg" className="text-ink-secondary">
              We believe that true growth requires both aesthetic excellence and deep 
              technical capability. We integrate SEO, Branding, Performance Marketing, AI, 
              and Technical solutions to create measurable business growth.
            </Body>
          </div>
        </div>
        
        <div className="flex flex-col gap-8 sm:flex-row">
          <div className="flex flex-col gap-4">
            <Code className="h-6 w-6 text-white" strokeWidth={1.5} />
            <Heading as="h3" className="text-lg text-white leading-[1.1] font-semibold">One Connected<br/>Ecosystem</Heading>
            <Body  className="text-md text-ink-secondary leading-tight">
              We integrate SEO, Branding, Performance Marketing, AI, and Technical solutions to create measurable business growth.
            </Body>
          </div>
          <div className="flex flex-col gap-4">
            <TerminalSquare className="h-6 w-6 text-white" strokeWidth={1.5} />
            <Heading as="h3" className="text-lg text-white leading-[1.1] font-semibold">Built on<br/>Partnership</Heading>
            <Body className="text-md text-ink-secondary leading-tight">
              Working as an extension of your team, we deliver sustainable growth through collaboration, transparency, and continuous optimisation.
            </Body>
          </div>
        </div>
      </div>
    </section>
  );
}
