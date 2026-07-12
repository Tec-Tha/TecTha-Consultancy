import { forwardRef } from "react";
import { motion } from "framer-motion";

/**
 * Card
 * Core surface atom used across services, industries, featured work,
 * testimonials, and bento layouts. Variants control the surface treatment;
 * hover controls the interaction feedback independently, so any
 * combination is valid (e.g. a glass card with a glow hover).
 *
 * API:
 *   <Card variant="default" hover="lift">...</Card>
 *   <Card variant="glass" hover="glow">...</Card>
 *   <Card variant="gradient">...</Card>
 *   <Card variant="bordered" hover="none">...</Card>
 */
const variantStyles = {
  default:
    "bg-[color:var(--color-bg-card)] border border-[color:var(--color-border)] shadow-[0_2px_12px_-4px_rgba(0,0,0,0.06)]",
  glass:
    "bg-[color:var(--color-surface)] border border-[color:var(--color-border)] backdrop-blur-xl",
  gradient:
    "text-white bg-[linear-gradient(135deg,var(--color-gradient-start),var(--color-gradient-end))] border border-transparent",
  bordered:
    "bg-transparent border border-[color:var(--color-border)]",
};

const hoverStyles = {
  lift: "hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-16px_rgba(0,0,0,0.18)]",
  glow: "hover:shadow-[0_0_0_1px_var(--color-brand-500),0_16px_40px_-12px_rgba(59,130,246,0.35)]",
  none: "",
};

const Card = forwardRef(
  (
    {
      children,
      variant = "default",
      hover = "lift",
      as: Component = motion.div,
      className = "",
      ...props
    },
    ref
  ) => {
    return (
      <Component
        ref={ref}
        className={`relative overflow-hidden rounded-2xl p-6 transition-all duration-300 ease-out will-change-transform ${variantStyles[variant]} ${hoverStyles[hover]} ${className}`}
        {...props}
      >
        {/* Gradient border reveal on hover, only meaningful for non-gradient variants */}
        {hover === "glow" && variant !== "gradient" && (
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              background:
                "linear-gradient(135deg, var(--color-gradient-start), var(--color-gradient-end))",
              WebkitMaskImage:
                "linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
              padding: "1px",
            }}
          />
        )}
        {children}
      </Component>
    );
  }
);

Card.displayName = "Card";

export default Card;