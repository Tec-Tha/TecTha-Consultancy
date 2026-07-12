import { useAnimatedCounter } from '../../hooks/useAnimatedCounter'
import { formatNumber } from '../../utils/helpers'

export default function AnimatedCounter({ value, prefix = '', suffix = '', decimals = 0 }) {
  const [ref, display] = useAnimatedCounter(value, { decimals })

  return (
    <span ref={ref} className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-medium text-ivory">
      {prefix}
      {decimals > 0 ? display.toFixed(decimals) : formatNumber(display)}
      {suffix}
    </span>
  )
}
