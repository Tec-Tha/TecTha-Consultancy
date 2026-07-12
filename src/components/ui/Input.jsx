import { forwardRef, useId } from "react";

/**
 * Input
 * Form field atom for Contact and Careers apply flows. Renders <input> by
 * default, or <textarea> when `as="textarea"`. Label sits above the field
 * (not floating) to keep long placeholder-less forms scannable.
 *
 * API:
 *   <Input label="Full name" name="name" placeholder="Jane Cooper" required />
 *   <Input as="textarea" label="Message" name="message" rows={5} />
 *   <Input label="Email" name="email" type="email" error="Enter a valid email" />
 */
const Input = forwardRef(
  (
    {
      label,
      name,
      type = "text",
      as = "input",
      error,
      hint,
      required = false,
      className = "",
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const id = name || generatedId;
    const Field = as === "textarea" ? "textarea" : "input";

    const fieldStyles = `w-full rounded-xl border bg-[color:var(--color-bg-card)] px-4 py-3 text-base text-[color:var(--color-text-primary)] placeholder:text-[color:var(--color-text-muted)] outline-none transition-colors duration-200 focus:ring-2 focus:ring-offset-0 ${
      error
        ? "border-red-400 focus:border-red-400 focus:ring-red-400/30"
        : "border-[color:var(--color-border)] focus:border-[color:var(--color-brand-500)] focus:ring-[color:var(--color-brand-500)]/25"
    }`;

    return (
      <div className={`flex flex-col gap-1.5 ${className}`}>
        {label && (
          <label
            htmlFor={id}
            className="text-sm font-medium text-[color:var(--color-text-secondary)]"
          >
            {label}
            {required && <span className="ml-1 text-[color:var(--color-brand-500)]">*</span>}
          </label>
        )}

        <Field
          ref={ref}
          id={id}
          name={name}
          type={as === "input" ? type : undefined}
          required={required}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : hint ? `${id}-hint` : undefined}
          className={fieldStyles}
          {...props}
        />

        {error ? (
          <span id={`${id}-error`} className="text-xs font-medium text-red-500">
            {error}
          </span>
        ) : hint ? (
          <span id={`${id}-hint`} className="text-xs text-[color:var(--color-text-muted)]">
            {hint}
          </span>
        ) : null}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;