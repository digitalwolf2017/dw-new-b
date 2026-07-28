"use client";

import { type ComponentType, type RefObject, useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { MegaphoneIcon, PenIcon } from "@/components/ui/icons";
import { AI_WORKFLOW_STEPS, type AiWorkflowIcon } from "@/lib/data/ai-workflow";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { DisplayTitle, TitleAccent } from "@/components/ui/display-title";

const ICONS: Record<AiWorkflowIcon, ComponentType<{ className?: string }>> = {
  megaphone: MegaphoneIcon,
  pen: PenIcon,
};

const NODE_COLORS = [
  "var(--color-ink)",
  "var(--color-ink-secondary)",
  "var(--color-ink-muted)",
  "var(--color-ink-secondary)",
  "var(--color-ink)"
];
const NODE_LABELS = ["Trigger", "Analysis", "Processing", "Integration", "Action"];

// Exact pixel positions for fixed width canvas
const POSITIONS = [
  { left: 100, top: 150 },
  { left: 550, top: 400 },
  { left: 1000, top: 150 },
  { left: 1450, top: 400 },
  { left: 1900, top: 150 },
];

type AiWorkflowProps = {
  trackRef?: RefObject<HTMLDivElement | null>;
  wrapperRef?: RefObject<HTMLDivElement | null>;
};

export default function AiWorkflow({ trackRef, wrapperRef }: AiWorkflowProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useGSAP(
    () => {
      if (reduced) return;

      // Animate the data pulses along the wires continuously
      gsap.utils.toArray<HTMLElement>(".n8n-pulse").forEach((pulse, index) => {
        const wire = document.querySelectorAll(".n8n-wire")[index];
        if (wire) {
          gsap.to(pulse, {
            motionPath: {
              path: wire as SVGPathElement,
              align: wire as SVGPathElement,
              alignOrigin: [0.5, 0.5],
            },
            duration: 2.2,
            repeat: -1,
            ease: "none",
            delay: index * 0.45,
          });
        }
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      id="ai-workflow"
      ref={containerRef}
      className="relative flex h-screen min-h-150 w-full flex-col overflow-hidden bg-base py-16"
    >
      {/* n8n-style Dotted Canvas Background */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.08] pointer-events-none" 
        style={{ 
          backgroundImage: "radial-gradient(circle at center, #ffffff 1.5px, transparent 1.5px)", 
          backgroundSize: "28px 28px" 
        }} 
      />

      {/* Header Area */}
      <div className="relative z-10 w-full px-8 md:px-16 lg:px-24 shrink-0 mt-8 lg:mt-4 pointer-events-none">
        <DisplayTitle className="text-ink text-4xl sm:text-5xl">
          AI <TitleAccent>Automation</TitleAccent> Workflow
        </DisplayTitle>
        <p className="mt-4 text-ink-muted text-body-lg max-w-2xl pointer-events-auto">
          We string together powerful logic, custom data processing, and seamless integrations to build visual automation engines that scale your business.
        </p>
      </div>

      {/* Workflow Canvas Area - Horizontally Scrollable on Mobile, Scrubbed on Desktop */}
      <div 
        ref={wrapperRef}
        className="relative flex-1 w-full mt-4 lg:mt-0 z-10 overflow-x-auto lg:overflow-visible overflow-y-hidden"
      >
        <div ref={trackRef} className="relative h-full w-[2400px]">
          
          {/* SVG Wires Layer - 2400x700 pixel coordinate system */}
          <svg 
            className="absolute inset-0 w-full h-175 pointer-events-none z-0"
            viewBox="0 0 2400 700"
            style={{ width: "2400px", height: "700px" }}
          >
            {/* Wire 1 -> 2 */}
            <path className="n8n-wire" d="M 380 294 C 465 294, 465 544, 550 544" fill="none" stroke="var(--color-line)" strokeWidth="3" />
            <circle className="n8n-pulse" r="5" fill="var(--color-ink-secondary)" style={{ filter: "drop-shadow(0 0 10px var(--color-ink-secondary))" }} />
            
            {/* Wire 2 -> 3 */}
            <path className="n8n-wire" d="M 830 544 C 915 544, 915 294, 1000 294" fill="none" stroke="var(--color-line)" strokeWidth="3" />
            <circle className="n8n-pulse" r="5" fill="var(--color-ink-muted)" style={{ filter: "drop-shadow(0 0 10px var(--color-ink-muted))" }} />
            
            {/* Wire 3 -> 4 */}
            <path className="n8n-wire" d="M 1280 294 C 1365 294, 1365 544, 1450 544" fill="none" stroke="var(--color-line)" strokeWidth="3" />
            <circle className="n8n-pulse" r="5" fill="var(--color-ink-secondary)" style={{ filter: "drop-shadow(0 0 10px var(--color-ink-secondary))" }} />
            
            {/* Wire 4 -> 5 */}
            <path className="n8n-wire" d="M 1730 544 C 1815 544, 1815 294, 1900 294" fill="none" stroke="var(--color-line)" strokeWidth="3" />
            <circle className="n8n-pulse" r="5" fill="var(--color-ink)" style={{ filter: "drop-shadow(0 0 10px var(--color-ink))" }} />
          </svg>

          {/* Nodes placed using absolute pixels */}
          {AI_WORKFLOW_STEPS.map((step, idx) => (
            <WorkflowNode 
              key={step.number}
              step={step} 
              color={NODE_COLORS[idx]} 
              label={NODE_LABELS[idx]} 
              className="absolute"
              style={{ left: `${POSITIONS[idx].left}px`, top: `${POSITIONS[idx].top}px` }}
              hasInput={idx > 0}
              hasOutput={idx < AI_WORKFLOW_STEPS.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkflowNode({ 
  step, 
  color, 
  label, 
  className, 
  style,
  hasInput = true, 
  hasOutput = true 
}: { 
  step: typeof AI_WORKFLOW_STEPS[number]; 
  color: string;
  label: string;
  className?: string;
  style?: React.CSSProperties;
  hasInput?: boolean;
  hasOutput?: boolean;
}) {
  const Icon = ICONS[step.icon];

  return (
    <div 
      className={`n8n-node w-70 h-72 rounded-xl border border-line bg-surface shadow-2xl backdrop-blur-md z-10 overflow-hidden flex flex-col ${className}`}
      style={{ ...style, boxShadow: "0 16px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)" }}
    >
      {/* Top Color Bar Tag */}
      <div 
        className="w-full h-1.5 shrink-0"
        style={{ backgroundColor: color }}
      />
      
      <div className="p-4 lg:p-5 flex-1 flex flex-col">
        {/* Node Header */}
        <div className="flex items-center gap-3 mb-3">
          <div 
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded bg-black/40 border border-line"
            style={{ color: color }}
          >
            <Icon className="h-4 w-4" />
          </div>
          <div>
            <span className="text-eyebrow uppercase opacity-80" style={{ color: color }}>
              {label}
            </span>
            <h4 className="font-sans text-body font-bold text-ink leading-tight mt-1">
              {step.title.replace("\n", " ")}
            </h4>
          </div>
        </div>

        {/* Node Body */}
        <p className="text-body text-ink-secondary leading-relaxed">
          {step.description}
        </p>
      </div>

      {/* Input Port */}
      {hasInput && (
        <div className="absolute top-1/2 -left-2.25 -translate-y-1/2 w-4.5 h-4.5 bg-surface border-2 border-line rounded-full flex items-center justify-center z-20">
          <div className="w-1.5 h-1.5 rounded-full bg-ink-muted" />
        </div>
      )}

      {/* Output Port */}
      {hasOutput && (
        <div className="absolute top-1/2 -right-2.25 -translate-y-1/2 w-4.5 h-4.5 bg-surface border-2 border-line rounded-full flex items-center justify-center z-20">
          <div className="w-1.5 h-1.5 rounded-full bg-ink-muted" />
        </div>
      )}
    </div>
  );
}
