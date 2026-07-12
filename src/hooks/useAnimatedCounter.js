import { useEffect, useRef, useState } from 'react'
import { gsap } from '../animations/gsap'

/**
 * Animates a numeric value from 0 to `target` when the ref enters view.
 * Returns [ref, displayValue].
 */
export function useAnimatedCounter(target, { duration = 1.8, decimals = 0 } = {}) {
  const ref = useRef(null)
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!ref.current) return
    const counter = { val: 0 }
    const tween = gsap.to(counter, {
      val: target,
      duration,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
      onUpdate: () => setValue(Number(counter.val.toFixed(decimals))),
    })
    return () => {
      tween.scrollTrigger?.kill()
      tween.kill()
    }
  }, [target, duration, decimals])

  return [ref, value]
}
