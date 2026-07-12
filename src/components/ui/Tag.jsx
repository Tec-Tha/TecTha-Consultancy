import { X } from "lucide-react";

/**
 * Tag
 * Interactive chip for filters and categories (Insights topics, Industries
 * filters, Careers department filters). Distinct from Badge: Badge is a
 * static status label on a card; Tag is something you click, select, or
 * remove.
 *
 * API:
 *   <Tag>Fintech</Tag>
 *   <Tag selected onClick={() => setFilter('fintech')}>Fintech</Tag>
 *   <Tag onRemove={() => removeFilter('fintech')}>Fintech</Tag>
 */
const Tag = ({
  children,
  selected = false,
  onClick,
  onRemove,
  className = "",
}) => {
  const interactive = typeof onClick === "function";
  const Component = interactive ? "button" : "span";

  return (
    <Component
      type={interactive ? "button" : undefined}
      onClick={onClick}
      aria-pressed={interactive ? selected : undefined}
      className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors duration-200 ${
        selected
          ? "border-transparent bg-[color:var(--color-brand-600)] text-white"
          : "border-[color:var(--color-border)] bg-[color:var(--color-bg-card)] text-[color:var(--color-text-secondary)]"
      } ${
        interactive && !selected
          ? "hover:border-[color:var(--color-brand-500)] hover:text-[color:var(--color-brand-600)]"
          : ""
      } ${className}`}
    >
      {children}
      {onRemove && (
        <span
          role="button"
          tabIndex={0}
          aria-label={`Remove ${typeof children === "string" ? children : "tag"}`}
          onClick={(e) => {
            e.stopPropagation();
            onRemove();
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.stopPropagation();
              onRemove();
            }
          }}
          className="ml-0.5 inline-flex rounded-full p-0.5 hover:bg-black/10 dark:hover:bg-white/10"
        >
          <X size={12} />
        </span>
      )}
    </Component>
  );
};

export default Tag;