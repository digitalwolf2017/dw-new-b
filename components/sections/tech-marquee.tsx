import { DisplayTitle } from "@/components/ui/display-title";
import { Body } from "@/components/ui/body";
import { SiFigma, SiFlutter, SiFirebase, SiSupabase, SiJavascript, SiTailwindcss, SiVercel } from "react-icons/si";
import { FaHtml5, FaCss3Alt, FaAws, FaReact, FaNodeJs, FaGitAlt, FaAngular, FaBootstrap, FaPhp, FaAndroid } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";

const TECH_ROW_1 = [
  TbBrandCpp, FaHtml5, FaCss3Alt, FaAws, SiFigma, SiFlutter, SiJavascript, SiFirebase, SiVercel
];

const TECH_ROW_2 = [
  FaGitAlt, FaAngular, FaBootstrap, FaPhp, FaAndroid, FaReact, FaNodeJs, SiTailwindcss, SiSupabase
];

export function TechMarquee() {
  return (
    <section className="overflow-hidden py-24">
      <div className="mx-auto flex w-full container flex-col items-center gap-16 px-5 sm:px-8 lg:flex-row lg:items-center lg:gap-12 lg:px-12">
        
        {/* Left Side: Text */}
        <div className="flex w-full shrink-0 flex-col gap-4 lg:w-1/3">
          <DisplayTitle className="text-left text-4xl sm:text-5xl leading-tight">
            Our<br />TECHNOLOGIES
          </DisplayTitle>
          <Body className="max-w-xs text-ink-secondary">
            Tools we trust to build, scale, and ship fast.
          </Body>
        </div>

        {/* Right Side: Marquee */}
        <div className="flex w-full flex-col gap-8 overflow-hidden lg:w-2/3">
          {/* Row 1 - Left to Right */}
          <div className="relative flex w-full overflow-hidden">
            <div className="flex animate-marquee gap-16 whitespace-nowrap will-change-transform">
              {[...TECH_ROW_1, ...TECH_ROW_1].map((Icon, i) => (
                <div key={i} className="flex shrink-0 items-center justify-center">
                  <Icon className="h-12 w-12 text-[#808080] opacity-50 transition-opacity hover:opacity-100" />
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 - Right to Left */}
          <div className="relative flex w-full overflow-hidden">
            <div className="flex animate-marquee-reverse gap-16 whitespace-nowrap will-change-transform">
              {[...TECH_ROW_2, ...TECH_ROW_2].map((Icon, i) => (
                <div key={i} className="flex shrink-0 items-center justify-center">
                  <Icon className="h-12 w-12 text-[#808080] opacity-50 transition-opacity hover:opacity-100" />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
