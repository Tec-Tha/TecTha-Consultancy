import { useEffect, useRef } from 'react'
import { scrollReveal } from '../animations/gsap'

/**
 * Attaches a scroll-triggered fade/rise reveal to the returned ref.
 * Usage: const ref = useScrollReveal(); <div ref={ref}>...</div>
 */
export function useScrollReveal(vars = {}, deps = []) {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return
    const tween = scrollReveal(ref.current, vars)
    return () => {
      tween.scrollTrigger?.kill()
      tween.kill()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  return ref
}
