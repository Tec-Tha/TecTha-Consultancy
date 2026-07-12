import { cx } from '../../utils/helpers'

export default function Badge({ children, className, tone = 'signal' }) {
  const tones = {
    signal: 'text-signal border-signal/30 bg-signal/10',
    sage: 'text-sage border-sage/30 bg-sage/10',
    ivory: 'text-ivory border-ivory/20 bg-ivory/5',
  }

  return (
    <span
      className={cx(
        'inline-flex items-center rounded-full border px-3 py-1 font-mono text-[0.7rem] uppercase tracking-wider',
        tones[tone],
        className
      )}
    >
      {children}
    </span>
  )
}
