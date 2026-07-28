import { Body } from "@/components/ui/body";
import { DisplayTitle } from "@/components/ui/display-title";
import { FacebookIcon, LinkedinIcon, InstagramIcon } from "@/components/ui/icons";

export function Contact() {
  return (
    <section id="contact" className="mx-auto w-full max-w-7xl px-5 py-32 sm:px-8 lg:px-12">
      <div className="flex flex-col overflow-hidden rounded-card border border-line lg:flex-row">
        
        {/* Left Side: Form */}
        <div className="relative flex w-full flex-col bg-surface p-12 lg:w-1/2 lg:p-16 border-b lg:border-b-0 lg:border-r border-line overflow-hidden">
          {/* Ambient white glow behind form */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent pointer-events-none" />
          
          <form className="relative z-10 flex h-full flex-col justify-between gap-12">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-3">
                <label htmlFor="name" className="text-eyebrow text-ink-muted">YOUR NAME</label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-ink-muted px-4 py-3 text-base placeholder:text-base/60 transition-colors focus:bg-ink focus:outline-none"
                  placeholder="Alexander Wolf"
                />
              </div>

              <div className="flex flex-col gap-3">
                <label htmlFor="email" className="text-eyebrow text-ink-muted">YOUR EMAIL</label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-ink-muted px-4 py-3 text-base placeholder:text-base/60 transition-colors focus:bg-ink focus:outline-none"
                  placeholder="alex@digitalwolf.com"
                />
              </div>

              <div className="flex flex-col gap-3">
                <label htmlFor="company" className="text-eyebrow text-ink-muted">YOUR COMPANY</label>
                <input
                  type="text"
                  id="company"
                  className="w-full bg-ink-muted px-4 py-3 text-base placeholder:text-base/60 transition-colors focus:bg-ink focus:outline-none"
                  placeholder="alex@digitalwolf.com"
                />
              </div>

              <div className="flex flex-col gap-3">
                <label htmlFor="thoughts" className="text-eyebrow text-ink-muted">SHARE YOUR THOUGHTS</label>
                <textarea
                  id="thoughts"
                  rows={4}
                  className="w-full border border-line bg-transparent p-4 text-ink placeholder:text-ink-muted transition-colors focus:border-ink focus:outline-none resize-none"
                  placeholder="How can we help you create?"
                />
              </div>
            </div>

            <button 
              type="submit" 
              className="w-full bg-ink text-base font-bold uppercase tracking-wider py-4 transition-colors hover:bg-ink-secondary"
            >
              SHARE YOUR FEEDBACK
            </button>
          </form>
        </div>

        {/* Right Side: Info & Typography */}
        <div className="relative flex w-full flex-col items-center justify-center bg-base p-12 lg:w-1/2 lg:p-16">
          {/* Subtle background ellipse */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
            <svg viewBox="0 0 400 400" className="w-full max-w-100 h-auto">
              <ellipse cx="200" cy="200" rx="140" ry="180" fill="none" stroke="currentColor" strokeWidth="1" className="text-line" />
            </svg>
          </div>

          <div className="relative z-10 flex flex-col w-full max-w-sm">
            {/* Typographic Lockup */}
            <div className="flex flex-col mb-8">
              <DisplayTitle as="h2" className="text-5xl sm:text-6xl lg:text-7xl">
                CONTACT
              </DisplayTitle>
              <div className="flex items-center gap-4 mt-2">
                <div className="h-px w-16 bg-ink" />
                <DisplayTitle as="h3" className="text-4xl sm:text-5xl lg:text-6xl">
                  US
                </DisplayTitle>
              </div>
            </div>

            <Body className="text-ink-secondary leading-relaxed mb-12">
              Digital architecture meets creative production. We build experiences that resonate in the silent spaces of the modern web. Let&rsquo;s talk about the next evolution.
            </Body>

            <div className="flex items-center gap-4">
              <a href="#" aria-label="Facebook" className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink transition-colors hover:bg-white/5 hover:text-ink">
                <FacebookIcon className="h-4 w-4" />
              </a>
              <a href="#" aria-label="LinkedIn" className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink transition-colors hover:bg-white/5 hover:text-ink">
                <LinkedinIcon className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink transition-colors hover:bg-white/5 hover:text-ink">
                <InstagramIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
