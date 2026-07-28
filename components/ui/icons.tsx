type IconProps = { className?: string };

function Svg({
  className,
  children,
}: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      {children}
    </svg>
  );
}

export function BulbIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M9 18h6M10 21h4" />
      <path d="M12 3a6 6 0 0 0-3.5 10.9c.6.5.9 1.2 1 2.1h5c.1-.9.4-1.6 1-2.1A6 6 0 0 0 12 3Z" />
    </Svg>
  );
}

export function GaugeIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M20 15a8 8 0 1 0-16 0" />
      <path d="m12 15 3.5-3.5" />
      <circle cx="12" cy="15" r="1" />
    </Svg>
  );
}

export function ChipIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <rect x="7" y="7" width="10" height="10" rx="1.5" />
      <path d="M9 4v3M15 4v3M9 17v3M15 17v3M4 9h3M4 15h3M17 9h3M17 15h3" />
    </Svg>
  );
}

export function LayersIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="m12 3-9 5 9 5 9-5-9-5Z" />
      <path d="m3 13 9 5 9-5" />
    </Svg>
  );
}

export function SearchIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <circle cx="11" cy="11" r="6" />
      <path d="m20 20-3.2-3.2" />
    </Svg>
  );
}

export function SupportIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 4v5M12 15v5M4 12h5M15 12h5" />
    </Svg>
  );
}

export function CodeIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="m8 7-5 5 5 5M16 7l5 5-5 5M13 4l-2 16" />
    </Svg>
  );
}

export function AtomIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <circle cx="12" cy="12" r="1" />
      <ellipse cx="12" cy="12" rx="9" ry="3.6" />
      <ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(120 12 12)" />
    </Svg>
  );
}

export function BoltIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
    </Svg>
  );
}

export function DatabaseIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <ellipse cx="12" cy="5" rx="7" ry="2.5" />
      <path d="M5 5v14c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V5" />
      <path d="M5 12c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5" />
    </Svg>
  );
}

export function PenIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M17 3l4 4L7 21H3v-4L17 3Z" />
      <path d="m14 6 4 4" />
    </Svg>
  );
}

export function DiamondIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M6 3h12l4 6-10 12L2 9l4-6Z" />
      <path d="M2 9h20" />
    </Svg>
  );
}

export function SparklesIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="m12 3 1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3Z" />
      <path d="m19 15 .9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15Z" />
    </Svg>
  );
}

export function TerminalIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <rect x="3" y="5" width="18" height="14" rx="1.5" />
      <path d="m7 9 3 3-3 3M13 15h4" />
    </Svg>
  );
}

export function WrenchIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </Svg>
  );
}

export function MegaphoneIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M3 9v6h3l6 4V5L6 9H3Z" />
      <path d="M14 8a4 4 0 0 1 0 8" />
      <path d="M17 5a8 8 0 0 1 0 14" />
    </Svg>
  );
}

export function UsersIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <circle cx="8.5" cy="8" r="3" />
      <circle cx="16.5" cy="9.5" r="2.4" />
      <path d="M3 20c0-3 2.5-5.2 5.5-5.2S14 17 14 20" />
      <path d="M14.8 15.3c2.2.3 3.9 2.1 4.2 4.7" />
    </Svg>
  );
}

export function TargetIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="0.8" fill="currentColor" />
    </Svg>
  );
}

export function DeviceIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <rect x="7" y="2" width="10" height="20" rx="2.2" />
      <path d="M11 18h2" />
    </Svg>
  );
}

export function FeatherIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M20 4c-6 0-12 3-14 9-1 3 0 5 2 5 6-1 10-6 12-14Z" />
      <path d="M14 10 4 20" />
    </Svg>
  );
}

export function ChatIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M4 5h16v11H9l-4 4V5Z" />
      <path d="M8 10h8M8 13h5" />
    </Svg>
  );
}

/* ------------------------------------------------ */
/*  Partner brand marks (monochrome, currentColor)  */
/* ------------------------------------------------ */

function BrandSvg({
  className,
  children,
}: IconProps & { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      {children}
    </svg>
  );
}

export function GoogleIcon({ className }: IconProps) {
  return (
    <BrandSvg className={className}>
      <path d="M21.35 11.1H12v3.2h5.35c-.5 2.6-2.7 4.1-5.35 4.1a5.9 5.9 0 1 1 0-11.8c1.5 0 2.85.55 3.9 1.45l2.4-2.4A9.9 9.9 0 0 0 12 2.1a9.9 9.9 0 1 0 0 19.8c5.7 0 9.5-4 9.5-9.65 0-.65-.05-1.1-.15-1.65Z" />
    </BrandSvg>
  );
}

export function ShopifyIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M6.3 7.5h11.4l1.2 12.4a1 1 0 0 1-1 1.1H6.1a1 1 0 0 1-1-1.1L6.3 7.5Z" />
      <path d="M9 7.5a3 3 0 0 1 6 0" />
    </Svg>
  );
}

export function MicrosoftIcon({ className }: IconProps) {
  return (
    <BrandSvg className={className}>
      <path d="M3 3h8.5v8.5H3zM12.5 3H21v8.5h-8.5zM3 12.5h8.5V21H3zM12.5 12.5H21V21h-8.5z" />
    </BrandSvg>
  );
}

export function SemrushIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M7.5 12.5h2.2l1.5-2.8 1.8 5 1.5-2.8h2" />
    </Svg>
  );
}

export function MetaIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      aria-hidden
      className={className}
    >
      <path d="M12 12c-1.6-2.9-3.2-4.4-5-4.4C4.6 7.6 3 9.6 3 12s1.6 4.4 4 4.4c1.8 0 3.4-1.5 5-4.4 1.6-2.9 3.2-4.4 5-4.4 2.4 0 4 2 4 4.4s-1.6 4.4-4 4.4c-1.8 0-3.4-1.5-5-4.4Z" />
    </svg>
  );
}

export function FacebookIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </Svg>
  );
}

export function LinkedinIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </Svg>
  );
}

export function InstagramIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </Svg>
  );
}
