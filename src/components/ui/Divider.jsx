/**
 * Divider
 * Structural rule for separating sections, list items, or inline content.
 * Plain by default; use variant="gradient" sparingly as a signature accent
 * (e.g. beneath a SectionHeader), not as a default for every rule on the page.
 *
 * API:
 *   <Divider />
 *   <Divider orientation="vertical" className="h-6" />
 *   <Divider variant="gradient" />
 *   <Divider label="OR" />
 */
const Divider = ({
  orientation = "horizontal",
  variant = "solid",
  label,
  className = "",
}) => {
  const base =
    orientation === "vertical" ? "w-px h-full" : "h-px w-full";

  const variantStyles = {
    solid: "bg-[color:var(--color-border)]",
    gradient:
      orientation === "vertical"
        ? "bg-[linear-gradient(180deg,transparent,var(--color-brand-500),transparent)]"
        : "bg-[linear-gradient(90deg,transparent,var(--color-brand-500),transparent)]",
  };

  if (label && orientation === "horizontal") {
    return (
      <div className={`flex items-center gap-3 ${className}`} role="separator">
        <span className={`h-px flex-1 ${variantStyles.solid}`} />
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--color-text-muted)]">
          {label}
        </span>
        <span className={`h-px flex-1 ${variantStyles.solid}`} />
      </div>
    );
  }

  return (
    <div
      role="separator"
      aria-orientation={orientation}
      className={`${base} ${variantStyles[variant]} ${className}`}
    />
  );
};

export default Divider;