import * as React from "react";

import { cn } from "@/lib/utils";

type CardVariant = "amber" | "teal" | "indigo" | "lime" | "slate";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
}

const VARIANT_CLASSES: Record<CardVariant, string> = {
  amber: "bg-gradient-to-br from-amber-400 via-orange-500 to-rose-500 text-white",
  teal: "bg-gradient-to-br from-teal-400 via-cyan-500 to-sky-500 text-white",
  indigo: "bg-gradient-to-br from-indigo-500 via-violet-500 to-pink-500 text-white",
  lime: "bg-gradient-to-br from-lime-400 via-emerald-400 to-teal-500 text-white",
  slate: "bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 text-slate-900",
};

const Card = React.forwardRef<HTMLDivElement, CardProps>(({ className, variant = "amber", children, ...props }, ref) => {
  const variantClass = VARIANT_CLASSES[variant] ?? VARIANT_CLASSES["amber"];

  return (
    <div
      ref={ref}
      className={cn(
        // Shared base styles (shape, shadow, ring, overflow) + interaction
        "relative rounded-lg overflow-hidden transform transition-all duration-300 will-change-transform shadow-xl ring-1 ring-white/10",
        // subtle hover lift/scale (can be overridden by consumer)
        "hover:-translate-y-2 hover:scale-105 hover:shadow-2xl",
        // variant-specific gradient + text color
        variantClass,
        // allow consumer overrides
        className,
      )}
      {...props}
    >
      {/* Decorative overlay to add depth and improve text contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/6 via-transparent to-transparent opacity-100 pointer-events-none"></div>

      {/* Content wrapper keeps actual children above overlays */}
      <div className="relative z-10">{children}</div>
    </div>
  );
});
Card.displayName = "Card";

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        // Space and padding for header; transparent background so gradient shows through
        "flex flex-col space-y-1.5 p-6 bg-transparent",
        className,
      )}
      {...props}
    />
  ),
);
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn(
        // Make titles pop on gradients; color inherits from the card variant
        "text-2xl font-semibold leading-none tracking-tight",
        className,
      )}
      {...props}
    />
  ),
);
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn(
        // Description inherits color from the card; keep sizing/weight
        "text-sm leading-relaxed",
        className,
      )}
      {...props}
    />
  ),
);
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />,
);
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex items-center p-6 pt-0", className)} {...props} />
  ),
);
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
