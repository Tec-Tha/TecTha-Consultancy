import { useMagneticEffect } from '../../hooks/useMagneticEffect'
import { cx } from '../../utils/helpers'

/**
 * Wraps children in a magnetic hover container — pointer-events pass through
 * to the child (typically a Button), so this is a positioning wrapper only.
 */
export default function MagneticButton({ children, className, strength = 0.35 }) {
  const ref = useMagneticEffect(strength)

  return (
    <div ref={ref} className={cx('inline-block will-change-transform', className)}>
      {children}
    </div>
  )
}
