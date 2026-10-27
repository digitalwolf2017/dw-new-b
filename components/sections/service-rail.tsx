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
    image: "/images/app.webp",
  },
  {
    index: "04",
    category: "Mobile Apps",
    title: "iOS & Android",
    description: "Native and cross-platform mobile experiences.",
    icon: Smartphone,
    image: "/images/app.webp",
  },
  {
    index: "05",
    category: "Cloud Infrastructure",
    title: "DevOps & Cloud",
    description: "Scalable cloud solutions and CI/CD pipelines.",
    icon: Cloud,
    image: "/images/web-development.webp",
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
    image: "/images/ppc.webp",
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
    image: "/images/seo.webp",
  },
  {
    index: "04",
    category: "Social Media",
    title: "Social Marketing",
    description: "Engaging social campaigns and community management.",
    icon: Share2,
    image: "/images/video-editing.webp",
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
    const container = containerRef.current;
    if (!scrollContainer || !container) return;

    // Calculate how far to scroll so all cards glide fully across the visible area
    const getScrollAmount = () => {
      const cardTrackWidth = scrollContainer.scrollWidth;
      const visibleWidth = scrollContainer.parentElement?.clientWidth || window.innerWidth;
      return Math.max(0, cardTrackWidth - visibleWidth + 80);
    };

    // Stagger offsets for up and down cards
    const upCards = scrollContainer.querySelectorAll(".service-card-up");
    const downCards = scrollContainer.querySelectorAll(".service-card-down");
    const getYOffset = () => (window.innerWidth < 768 ? 14 : window.innerWidth < 1024 ? 18 : 22);

    // Set initial positions
    gsap.set(upCards, { y: -getYOffset() });
    gsap.set(downCards, { y: getYOffset() });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        invalidateOnRefresh: true,
      }
    });

    // 1. The horizontal scroll translation across the entire timeline
    tl.to(scrollContainer, {
      x: () => -getScrollAmount(),
      ease: "none",
      duration: 1,
    }, 0);

    // 2. Alignment animation: as sliding starts, the up/down cards smoothly converge into the same horizontal line
    tl.fromTo(
      upCards,
      { y: () => -getYOffset() },
      { y: 0, ease: "power2.out", duration: 0.2 },
      0
    );
    tl.fromTo(
      downCards,
      { y: () => getYOffset() },
      { y: 0, ease: "power2.out", duration: 0.2 },
      0
    );

    // 3. Brief pause at end
    tl.to({}, {
      duration: 0.25,
    });

    // Ensure ScrollTrigger accurately measures current page layout
    ScrollTrigger.refresh();
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 400);

    return () => clearTimeout(timer);
  }, { scope: containerRef, dependencies: [activeTab] });

  return (
    <div ref={containerRef} className="relative bg-base" style={{ height: "300vh" }}>
      <section
        id="services"
        data-no-global-reveal
        className="sticky top-0 flex h-screen w-full flex-col justify-center overflow-hidden py-4 sm:py-6 px-[16px]"
      >
        {/* Black background card with rounded corners and side gaps */}
        <div className="relative flex h-full max-h-[92vh] w-full flex-col justify-between overflow-hidden rounded-[12px] border border-white/10 bg-black py-6 sm:py-8 md:py-10">
          
          {/* Header row: exact same SectionHeader and Tabs */}
          <div className="shrink-0 mx-auto mb-4 md:mb-8 flex w-full container flex-col gap-6 px-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12">
            <SectionHeader
              eyebrow="OUR SERVICES"
              title="WHAT WE BUILD"
              accent="BEST"
              body="We create high-impact digital experiences, performance systems and growth-focused solutions designed for modern brands."
            />

            {/* Tabs */}
            <div className="relative flex w-72 shrink-0 rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur-md">
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

          {/* Cards Track */}
          <div className="relative flex-1 w-full flex items-center overflow-hidden">
            <div className="pl-5 sm:pl-8 lg:pl-12 xl:pl-[max(3rem,calc((100vw-1280px)/2))] w-full">
              <div
                ref={scrollContainerRef}
                className="flex gap-6 md:gap-8 w-max pr-5 sm:pr-8 lg:pr-12 xl:pr-[max(3rem,calc((100vw-1280px)/2))]"
              >
                {currentServices.map((service, i) => {
                  const Icon = service.icon;
                  const isOdd = i % 2 === 1;
                  return (
                    <div
                      key={service.index}
                      className={`shrink-0 ${
                        isOdd ? "service-card-down" : "service-card-up"
                      }`}
                    >
                      <Surface
                        interactive
                        className="relative flex h-[370px] md:h-[430px] lg:h-[470px] w-72 md:w-80 lg:w-90 shrink-0 flex-col overflow-hidden rounded-2xl border border-line"
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

        </div>
      </section>
    </div>
  );
}
