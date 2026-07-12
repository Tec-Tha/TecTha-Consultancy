import { motion } from "framer-motion";

/**
 * Badge
 * Small pill label for tags, status indicators, and eyebrow markers on
 * cards (e.g. "New", "Case Study", "Open Role", industry verticals).
 *
 * API:
 *   <Badge>Case Study</Badge>
 *   <Badge variant="brand">Featured</Badge>
 *   <Badge variant="outline" dot>Open</Badge>
 *   <Badge variant="gold" icon={<Sparkles size={12} />}>New</Badge>
 */
const variantStyles = {
  default:
    "bg-[color:var(--color-bg-secondary)] text-[color:var(--color-text-secondary)] border border-[color:var(--color-border)]",
  brand:
    "bg-[color:var(--color-brand-50)] text-[color:var(--color-brand-600)] border border-transparent dark:bg-[color:var(--color-brand-600)]/15 dark:text-[color:var(--color-brand-400)]",
  gold:
    "bg-[color:var(--color-gold)]/12 text-[color:var(--color-gold)] border border-[color:var(--color-gold)]/25",
  outline:
    "bg-transparent text-[color:var(--color-text-secondary)] border border-[color:var(--color-border)]",
  glass:
    "bg-[color:var(--color-surface)] text-[color:var(--color-text-primary)] border border-[color:var(--color-border)] backdrop-blur-md",
};

const dotStyles = {
  default: "bg-[color:var(--color-text-muted)]",
  brand: "bg-[color:var(--color-brand-500)]",
  gold: "bg-[color:var(--color-gold)]",
  outline: "bg-[color:var(--color-text-muted)]",
  glass: "bg-[color:var(--color-brand-500)]",
};

const Badge = ({
  children,
  variant = "default",
  dot = false,
  icon,
  animated = false,
  className = "",
}) => {
  const Wrapper = animated ? motion.span : "span";
  const motionProps = animated
    ? {
        initial: { opacity: 0, y: 6 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.4, ease: "easeOut" },
      }
    : {};

  return (
    <Wrapper
      {...motionProps}
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium tracking-wide ${variantStyles[variant]} ${className}`}
    >
      {dot && (
        <span className={`h-1.5 w-1.5 rounded-full ${dotStyles[variant]}`} />
      )}
      {icon && <span className="inline-flex shrink-0">{icon}</span>}
      {children}
    </Wrapper>
  );
};

export default Badge;