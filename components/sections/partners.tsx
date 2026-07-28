import { Surface } from "@/components/ui/surface";

export function Partners() {
  return (
    <section className="max-w-6xl mx-auto flex w-full flex-col items-center px-5 sm:px-8 lg:px-12">
      <Surface className="flex w-full flex-wrap items-center justify-center gap-10 rounded-[12px] border border-line bg-surface/30 py-10 px-8 sm:justify-between lg:px-16">
        {/* Google Partner */}
        <div className="flex items-center gap-3 text-ink-muted transition-colors hover:text-ink">
          <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
          </svg>
          <div className="flex flex-col">
            <span className="text-[11px] font-bold leading-tight">Google</span>
            <span className="text-[10px] leading-tight">Partner</span>
          </div>
        </div>

        {/* Shopify partners */}
        <div className="flex items-center gap-2 text-ink-muted transition-colors hover:text-ink">
          <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
            <path d="M17 5.5A5 5 0 0 0 12 1a5 5 0 0 0-5 4.5H4L2.5 21c-.2 2 1.5 3 3.5 3h12c2 0 3.7-1 3.5-3L20 5.5h-3zM12 3a3 3 0 0 1 2.8 2.5H9.2A3 3 0 0 1 12 3z" />
          </svg>
          <span className="text-sm font-bold tracking-tight">Shopify <span className="font-normal">partners</span></span>
        </div>

        {/* Microsoft Silver Partner */}
        <div className="flex items-center gap-2 text-ink-muted transition-colors hover:text-ink">
          <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path d="M11.4 24H0V12.6h11.4V24zM24 24H12.6V12.6H24V24zM11.4 11.4H0V0h11.4v11.4zm12.6 0H12.6V0H24v11.4z" />
          </svg>
          <div className="flex flex-col">
            <span className="text-[12px] font-bold leading-tight tracking-tight">Microsoft</span>
            <span className="text-[10px] leading-tight">Silver Partner</span>
          </div>
        </div>

        {/* SEMrush Agency Partners */}
        <div className="flex items-center gap-2 text-ink-muted transition-colors hover:text-ink">
          <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path d="M12 0L1.5 6v12L12 24l10.5-6V6L12 0zm0 18.5a6.5 6.5 0 1 1 0-13 6.5 6.5 0 0 1 0 13z" />
          </svg>
          <div className="flex flex-col">
            <span className="text-[12px] font-bold leading-tight tracking-tight">SEMrush</span>
            <span className="text-[10px] leading-tight">Agency Partners</span>
          </div>
        </div>

        {/* Meta Business Partner */}
        <div className="flex items-center gap-2 text-ink-muted transition-colors hover:text-ink">
          <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 8a4 4 0 1 0 0 8h8a4 4 0 1 0 0-8H8z" />
            <path d="M12 12l4-4" />
            <path d="M12 12l-4-4" />
          </svg>
          <div className="flex flex-col">
            <span className="text-[12px] font-bold leading-tight tracking-tight">Meta</span>
            <span className="text-[10px] leading-tight">Business Partner</span>
          </div>
        </div>
      </Surface>
    </section>
  );
}
