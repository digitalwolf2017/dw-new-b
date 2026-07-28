"use client";

import { useState, useRef } from "react";
import { SectionHeader } from "./section-header";
import { Surface } from "@/components/ui/surface";
import { Heading } from "@/components/ui/heading";
import { GreyscaleImage } from "@/components/ui/greyscale-image";
import { ArrowRight, Bot, Cpu, PencilRuler, Search, PenTool, LineChart, Smartphone, Cloud, Database, Share2, FileText, BarChart } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

// Data
const DEVELOPMENT_SERVICES = [
  {
    index: "01",
    category: "Smart Systems",
    title: "AI Automation",
    description: "Optimizing operational workflows with intelligent systems.",
    icon: Bot,
    image: "/images/ui-ux.webp",
  },
  {
    index: "02",
    category: "Experience Design",
    title: "UI/UX Design",
    description: "Creating intuitive interfaces that convert.",
    icon: PenTool,
    image: "/images/ui-ux.webp",
  },
  {
    index: "03",
    category: "Architecture",
    title: "Web Apps",
    description: "Building scalable platforms for the future.",
    icon: Cpu,
    image: "https://picsum.photos/seed/service5/375/600",
  },
  {
    index: "04",
    category: "Mobile Apps",
    title: "iOS & Android",
    description: "Native and cross-platform mobile experiences.",
    icon: Smartphone,
    image: "https://picsum.photos/seed/service7/375/600",
  },
  {
    index: "05",
    category: "Cloud Infrastructure",
    title: "DevOps & Cloud",
    description: "Scalable cloud solutions and CI/CD pipelines.",
    icon: Cloud,
    image: "https://picsum.photos/seed/service8/375/600",
  },
  {
    index: "06",
    category: "API Integration",
    title: "Backend Systems",
    description: "Robust APIs and microservices architecture.",
    icon: Database,
    image: "https://picsum.photos/seed/service9/375/600",
  }
];

const MARKETING_SERVICES = [
  {
    index: "01",
    category: "Paid Growth",
    title: "Performance",
    description: "ROI-obsessed marketing campaigns at scale.",
    icon: LineChart,
    image: "https://picsum.photos/seed/service1/375/600",
  },
  {
    index: "02",
    category: "Creative",
    title: "Brand Strategy",
    description: "High-impact brand positioning and identity.",
    icon: PencilRuler,
    image: "https://picsum.photos/seed/service2/375/600",
  },
  {
    index: "03",
    category: "Organic",
    title: "SEO",
    description: "Dominating search engines with content.",
    icon: Search,
    image: "https://picsum.photos/seed/service6/375/600",
  },
  {
    index: "04",
    category: "Social Media",
    title: "Social Marketing",
    description: "Engaging social campaigns and community management.",
    icon: Share2,
    image: "https://picsum.photos/seed/service10/375/600",
  },
  {
    index: "05",
    category: "Content",
    title: "Content Marketing",
    description: "High-quality content that drives engagement.",
    icon: FileText,
    image: "https://picsum.photos/seed/service11/375/600",
  },
  {
    index: "06",
    category: "Analytics",
    title: "Data & Insights",
    description: "Actionable data analytics and conversion tracking.",
    icon: BarChart,
    image: "https://picsum.photos/seed/service12/375/600",
  }
];

export function ServiceRail() {
  const [activeTab, setActiveTab] = useState<"Development" | "Marketing">("Development");
  const currentServices = activeTab === "Development" ? DEVELOPMENT_SERVICES : MARKETING_SERVICES;

  const containerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer || !containerRef.current) return;

    // Calculate how far to scroll
    const getScrollAmount = () => {
      // The amount to move left is the total width of the container minus the viewport width,
      // plus the left offset (padding) of the container so the right edge perfectly aligns.
      return scrollContainer.scrollWidth - window.innerWidth + scrollContainer.offsetLeft;
    };

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        invalidateOnRefresh: true,
      }
    });

    // 1. The horizontal scroll translation
    tl.to(scrollContainer, {
      x: () => -getScrollAmount(),
      ease: "none",
      duration: 1, // Use ratio 1 for scroll
    })
    // 2. The false scroll (pause)
    .to({}, { 
      duration: 0.3 // Use ratio 0.3 for the pause at the end
    });
  }, { dependencies: [activeTab] });

  return (
    <div ref={containerRef} className="relative bg-background" style={{ height: "300vh" }}>
      <section id="services" className="sticky top-0 flex h-screen flex-col overflow-hidden py-12 md:py-24">
        <div className="shrink-0 mx-auto mb-8 md:mb-16 flex w-full container flex-col gap-8 px-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12">
        <SectionHeader
          eyebrow="OUR SERVICES"
          title="WHAT WE BUILD"
          accent="BEST"
          body="We create high-impact digital experiences, performance systems and growth-focused solutions designed for modern brands."
        />
        
        {/* Tabs */}
        <div className="relative flex w-72 rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur-md">
          {/* Sliding Background Pill */}
          <div
            className={`absolute bottom-1 top-1 w-[calc(50%-4px)] rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-transform duration-300 ease-out ${
              activeTab === "Development" ? "translate-x-0" : "translate-x-full"
            }`}
          />

          <button
            onClick={() => setActiveTab("Development")}
            className={`relative z-10 flex-1 rounded-full py-2 text-center text-sm font-medium transition-colors duration-300 ${
              activeTab === "Development" ? "text-black" : "text-white/70 hover:text-white"
            }`}
          >
            Development
          </button>
          <button
            onClick={() => setActiveTab("Marketing")}
            className={`relative z-10 flex-1 rounded-full py-2 text-center text-sm font-medium transition-colors duration-300 ${
              activeTab === "Marketing" ? "text-black" : "text-white/70 hover:text-white"
            }`}
          >
            Marketing
          </button>
        </div>
      </div>

        <div className="relative flex-1 w-full flex items-center overflow-hidden">
          <div className="pl-5 sm:pl-8 lg:pl-12 xl:pl-[max(3rem,calc((100vw-1280px)/2))] w-full">
            <div 
              ref={scrollContainerRef}
              className="flex gap-6 md:gap-8 w-max pr-5 sm:pr-8 lg:pr-12 xl:pr-[max(3rem,calc((100vw-1280px)/2))]"
            >
              {currentServices.map((service, i) => {
                const Icon = service.icon;
                return (
                  <div key={service.index} className="shrink-0">
                    <Surface
                      interactive
                      className={`relative flex h-100 md:h-125 lg:h-150 w-72 md:w-80 lg:w-93.75 shrink-0 flex-col overflow-hidden rounded-2xl border border-line ${
                        i % 2 === 1 ? "mt-8 lg:mt-16" : ""
                      }`}
                    >
                    <GreyscaleImage
                      src={service.image}
                      alt={service.title}
                      width={375}
                      height={600}
                      wrapperClassName="absolute inset-0 h-full w-full"
                      className="h-full w-full object-cover opacity-20"
                      unoptimized
                    />
                    {/* Gradient Overlay for text readability */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent" />
                    
                    {/* Top Badge */}
                    <div className="absolute left-6 right-6 top-6 flex items-center justify-between text-white/80">
                      <span className="text-[10px] font-bold tracking-widest uppercase">
                        {service.index} | {service.category}
                      </span>
                      <Icon className="h-5 w-5" />
                    </div>

                    {/* Bottom Content */}
                    <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-4 text-white">
                      <Heading as="h3" className="font-display text-3xl leading-tight">
                        {service.title}
                      </Heading>
                      <p className="text-sm text-white/70">
                        {service.description}
                      </p>
                      <ArrowRight className="h-5 w-5 mt-2" />
                    </div>
                  </Surface>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}
