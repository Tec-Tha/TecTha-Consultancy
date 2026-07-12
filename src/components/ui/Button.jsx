import { forwardRef } from 'react'
import { Link } from 'react-router-dom'
import { cx } from '../../utils/helpers'

const VARIANTS = {
  primary: 'bg-signal text-ink hover:bg-signal-soft',
  secondary: 'bg-transparent text-ivory border border-ivory/25 hover:border-ivory/60',
  ghost: 'bg-transparent text-ivory hover:text-signal',
}

const SIZES = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
}

/**
 * Button — renders as <button>, <a>, or router <Link> depending on props.
 */
const Button = forwardRef(function Button(
  { children, variant = 'primary', size = 'md', className, href, to, ...props },
  ref
) {
  const classes = cx(
    'inline-flex items-center justify-center gap-2 rounded-full font-medium',
    'transition-all duration-300 ease-signal',
    VARIANTS[variant],
    SIZES[size],
    className
  )

  if (to) {
    return (
      <Link to={to} className={classes} ref={ref} {...props}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} ref={ref} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} ref={ref} {...props}>
      {children}
    </button>
  )
})

export default Button
