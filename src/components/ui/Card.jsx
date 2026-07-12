import { cx } from '../../utils/helpers'

export default function Card({ children, className, hoverable = true }) {
  return (
    <div
      className={cx(
        'rounded-2xl border border-ivory/10 bg-ink-700/60 p-6 sm:p-8',
        hoverable && 'transition-all duration-500 ease-signal hover:border-signal/30 hover:bg-ink-700',
        className
      )}
    >
      {children}
    </div>
  )
}
