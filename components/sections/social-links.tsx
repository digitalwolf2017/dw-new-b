import { ArrowUpRight } from "lucide-react";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import Link from "next/link";

const SOCIALS = [
  {
    platform: "Facebook",
    // Note: The mockup showed a Facebook icon with Twitter text. I am using Facebook for consistency.
    title: "Follow Us On Facebook",
    handle: "digital wolf",
    icon: FaFacebookF,
    href: "#",
  },
  {
    platform: "LinkedIn",
    title: "Join Us On Linked In",
    handle: "digital wolf",
    icon: FaLinkedinIn,
    href: "#",
  },
  {
    platform: "Instagram",
    title: "Follow On Instagram",
    handle: "@artistic_insta_official",
    icon: FaInstagram,
    href: "#",
  },
];

export function SocialLinks() {
  return (
    <section data-no-global-reveal className="mx-auto w-full container px-5 py-24 sm:px-8 lg:px-12">
      {/*
        We add pl-6 so the absolutely positioned left circles don't
        clip outside the screen on mobile devices.
      */}
      <div className="flex flex-col flex-wrap items-center justify-center gap-y-12 gap-x-8 lg:flex-row xl:gap-x-12 pl-6 sm:pl-0">
        {SOCIALS.map((social) => (
          <Link
            key={social.platform}
            href={social.href}
            className="group relative flex w-full max-w-95 items-center justify-between rounded-[3rem] border border-white/5 bg-[#050505] py-5 pr-5 pl-16 transition-all duration-500 hover:border-white/10 hover:bg-white/2"
          >
            {/* Big Icon Circle */}
            <div className="absolute -left-4 -top-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#E5E5E5] transition-transform duration-500 group-hover:scale-105">
              <social.icon className="h-8 w-8 text-black fill-black" />
            </div>

            {/* Text Block */}
            <div className="flex flex-col ml-6">
              <h4 className="font-sans font-semibold text-white tracking-wide">
                {social.title}
              </h4>
              <p className="font-sans text-xs text-white/50 mt-1">
                {social.handle}
              </p>
            </div>

            {/* Arrow Button */}
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 text-white transition-all duration-500 group-hover:bg-white group-hover:text-black">
              <ArrowUpRight className="h-5 w-5" strokeWidth={1.5} />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
