import { forwardRef } from 'react'
import { cx } from '../../utils/helpers'

const Input = forwardRef(function Input(
  { label, id, as = 'input', className, ...props },
  ref
) {
  const Tag = as
  return (
    <label htmlFor={id} className="block">
      {label && (
        <span className="mb-2 block font-mono text-xs uppercase tracking-widest2 text-ivory/50">
          {label}
        </span>
      )}
      <Tag
        id={id}
        ref={ref}
        className={cx(
          'w-full rounded-lg border border-ivory/15 bg-ink-700/50 px-4 py-3',
          'text-ivory placeholder:text-ivory/30',
          'transition-colors duration-300 focus:border-signal focus:outline-none',
          as === 'textarea' && 'min-h-[140px] resize-y',
          className
        )}
        {...props}
      />
    </label>
  )
})

export default Input
