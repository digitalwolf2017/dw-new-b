import { FacebookIcon, LinkedinIcon, InstagramIcon } from "@/components/ui/icons";

export function Contact() {
  return (
    <section
      id="contact"
      data-no-global-reveal
      className="relative w-full overflow-hidden bg-base py-12 sm:py-16 lg:py-24 px-[16px]"
    >
      <div className="mx-auto w-full max-w-[1400px]">
        {/* The Card Container matching the reference image */}
        <div className="flex flex-col overflow-hidden border border-white/[0.08] bg-[#0c0c0e] lg:flex-row shadow-2xl shadow-black/50">
          
          {/* Left Side: Form */}
          <div className="relative flex w-full flex-col p-8 sm:p-12 lg:w-1/2 lg:p-16 border-b lg:border-b-0 lg:border-r border-white/[0.08]">
            <form className="flex h-full flex-col justify-between gap-8">
              <div className="flex flex-col gap-6">
                
                {/* YOUR NAME */}
                <div className="flex flex-col gap-2.5">
                  <label htmlFor="name" className="text-xs font-semibold tracking-wider text-white/70 uppercase">
                    YOUR NAME
                  </label>
                  <input
                    type="text"
                    id="name"
                    defaultValue="Alexander Wolf"
                    className="w-full bg-[#8c8c8c] px-4 py-3 text-sm font-medium text-black placeholder:text-black/60 focus:bg-[#999999] focus:outline-none"
                    placeholder="Alexander Wolf"
                  />
                </div>

                {/* YOUR EMAIL */}
                <div className="flex flex-col gap-2.5">
                  <label htmlFor="email" className="text-xs font-semibold tracking-wider text-white/70 uppercase">
                    YOUR EMAIL
                  </label>
                  <input
                    type="email"
                    id="email"
                    defaultValue="alex@digitalwolf.com"
                    className="w-full bg-[#8c8c8c] px-4 py-3 text-sm font-medium text-black placeholder:text-black/60 focus:bg-[#999999] focus:outline-none"
                    placeholder="alex@digitalwolf.com"
                  />
                </div>

                {/* YOUR EMAIL (2nd field) */}
                <div className="flex flex-col gap-2.5">
                  <label htmlFor="email2" className="text-xs font-semibold tracking-wider text-white/70 uppercase">
                    YOUR EMAIL
                  </label>
                  <input
                    type="text"
                    id="email2"
                    defaultValue="alex@digitalwolf.com"
                    className="w-full bg-[#8c8c8c] px-4 py-3 text-sm font-medium text-black placeholder:text-black/60 focus:bg-[#999999] focus:outline-none"
                    placeholder="alex@digitalwolf.com"
                  />
                </div>

                {/* SHARE YOUR THOUGHTS */}
                <div className="flex flex-col gap-2.5">
                  <label htmlFor="thoughts" className="text-xs font-semibold tracking-wider text-white/70 uppercase">
                    SHARE YOUR THOUGHTS
                  </label>
                  <textarea
                    id="thoughts"
                    rows={4}
                    className="w-full border border-white/20 bg-transparent p-4 text-sm text-white placeholder:text-white/40 focus:border-white focus:outline-none resize-none"
                    placeholder="How can we help you create?"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="w-full bg-white text-black text-xs sm:text-sm font-bold uppercase tracking-[0.2em] py-4 transition-all duration-300 hover:bg-neutral-200 active:translate-y-px shadow-sm"
              >
                SHARE YOUR FEEDBACK
              </button>
            </form>
          </div>

          {/* Right Side: Typography & Socials */}
          <div className="relative flex w-full flex-col justify-center p-8 sm:p-12 lg:w-1/2 lg:p-16">
            {/* Subtle background abstract oval loop */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-30">
              <svg viewBox="0 0 400 400" className="w-full max-w-[340px] h-auto">
                <ellipse cx="200" cy="200" rx="140" ry="110" fill="none" stroke="currentColor" strokeWidth="1" className="text-white/30" transform="rotate(-15 200 200)" />
              </svg>
            </div>

            <div className="relative z-10 flex flex-col w-full max-w-md mx-auto">
              {/* Heading */}
              <div className="flex flex-col mb-8">
                <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-wider text-white leading-none">
                  CONTACT
                </h2>
                <div className="flex items-center gap-4 mt-3">
                  <div className="h-[2px] w-12 sm:w-16 bg-white/80" />
                  <span className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-wider text-white leading-none">
                    US
                  </span>
                </div>
              </div>

              {/* Description */}
              <p style={{ color: "#c4c7c5" }} className="font-sans text-sm sm:text-base leading-relaxed text-ink-secondary mb-10">
                Digital architecture meets creative production. We build experiences that resonate in the silent spaces of the modern web. Let&rsquo;s talk about the next evolution.
              </p>

              {/* Social Outline Icons */}
              <div className="flex items-center gap-3.5">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/80 transition-all duration-300 hover:border-white hover:text-white hover:bg-white/5"
                >
                  <FacebookIcon className="h-4 w-4" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/80 transition-all duration-300 hover:border-white hover:text-white hover:bg-white/5"
                >
                  <LinkedinIcon className="h-4 w-4" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/80 transition-all duration-300 hover:border-white hover:text-white hover:bg-white/5"
                >
                  <InstagramIcon className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
