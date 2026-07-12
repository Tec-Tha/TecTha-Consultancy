import { forwardRef } from "react";
import { ArrowRight } from "lucide-react";
import MagneticButton from "../shared/MagneticButton";

/**
 * Button
 * Core CTA atom. Renders as <button> or, when `href` is passed, as <a>.
 * When `magnetic` is true, wraps itself in MagneticButton for the
 * cursor-attraction hover effect instead of rendering plain.
 *
 * API:
 *   <Button variant="primary" size="md">Get in touch</Button>
 *   <Button variant="outline" size="lg" magnetic>Explore services</Button>
 *   <Button variant="ghost" href="/careers" icon={false}>View roles</Button>
 */
const sizeStyles = {
  sm: "px-4 py-2 text-sm gap-1.5",
  md: "px-6 py-3 text-base gap-2",
  lg: "px-8 py-4 text-lg gap-2.5",
};

const variantStyles = {
  primary:
    "text-white bg-[linear-gradient(135deg,var(--color-gradient-start),var(--color-gradient-end))] shadow-[0_8px_24px_-8px_rgba(37,99,235,0.5)] hover:shadow-[0_12px_32px_-8px_rgba(37,99,235,0.65)] hover:brightness-110",
  ghost:
    "text-[color:var(--color-text-primary)] bg-transparent hover:bg-[color:var(--color-bg-secondary)]",
  outline:
    "text-[color:var(--color-text-primary)] bg-transparent border border-[color:var(--color-border)] hover:border-[color:var(--color-brand-500)] hover:text-[color:var(--color-brand-600)]",
};

const Button = forwardRef(
  (
    {
      children,
      variant = "primary",
      size = "md",
      magnetic = false,
      icon = true,
      href,
      className = "",
      ...props
    },
    ref
  ) => {
    const Tag = href ? "a" : "button";

    const classes = `relative inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-brand-500)] focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

    const content = (
      <>
        {children}
        {icon && (
          <ArrowRight
            size={size === "lg" ? 18 : 16}
            className="transition-transform duration-300 group-hover:translate-x-0.5"
          />
        )}
      </>
    );

    if (magnetic) {
      return (
        <MagneticButton as={Tag} href={href} className={`group ${classes}`} ref={ref} {...props}>
          {content}
        </MagneticButton>
      );
    }

    return (
      <Tag ref={ref} href={href} className={`group ${classes}`} {...props}>
        {content}
      </Tag>
    );
  }
);

Button.displayName = "Button";

export default Button;