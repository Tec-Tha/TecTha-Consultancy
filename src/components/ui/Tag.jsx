import { cx } from '../../utils/helpers'

export default function Tag({ children, className }) {
  return (
    <span
      className={cx(
        'font-mono text-[0.7rem] uppercase tracking-widest2 text-ivory/50',
        className
      )}
    >
      {children}
    </span>
  )
}
