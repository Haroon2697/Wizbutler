import type * as React from "react"
import { cn } from "@/lib/utils"

type ValueStripProps = {
  items?: string[]
  className?: string
  // Optional CSS color values to override defaults; e.g. "#0b2740" or "oklch(...)"
  bgColor?: string
  accentColor?: string
  "aria-label"?: string
}

const DEFAULT_ITEMS = [
  "Dynamic Optimisation",
  "Increased Revenue Yield",
  "One Database",
  "Zero Integrations",
  "Fully Autonomous",
]

export function KeyFeatures({
  items = DEFAULT_ITEMS,
  className,
  bgColor,
  accentColor,
  "aria-label": ariaLabel = "Key benefits",
}: ValueStripProps) {
  return (
    <section
      aria-label={ariaLabel}
      className={cn("w-full", className)}
      style={
        {
          // Component-scoped CSS variables for theme-friendly overrides
          // WizButler color scheme: purple background, orange accent
          ["--value-strip-bg" as any]: bgColor || "#43217a",
          ["--value-strip-accent" as any]: accentColor || "#fe9e01",
        } as React.CSSProperties
      }
    >
      <div className="w-full overflow-hidden" style={{ backgroundColor: "var(--value-strip-bg)" }}>
        <div className="flex items-center py-6 animate-scroll">
          {/* Duplicate items for seamless loop */}
          {[...items, ...items, ...items].map((label, index) => (
            <div key={`${label}-${index}`} className="flex items-center gap-3 mx-8 whitespace-nowrap" style={{ color: "var(--value-strip-accent)" }}>
              <CheckCircle className="h-7 w-7 flex-none" />
              <span className="text-base font-semibold tracking-wide md:text-lg">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CheckCircle({ className, ...props }: React.SVGProps<SVGSVGElement> & { className?: string }) {
  // Decorative icon; label text conveys meaning
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={cn("shrink-0", className)} {...props}>
      {/* Outer ring */}
      <circle cx="12" cy="12" r="9" fill="none" stroke="var(--value-strip-accent)" strokeWidth={2.25} />
      {/* Check mark */}
      <path
        d="M8 12.5l2.7 2.7L16 10.5"
        fill="none"
        stroke="var(--value-strip-accent)"
        strokeWidth={2.25}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default KeyFeatures
