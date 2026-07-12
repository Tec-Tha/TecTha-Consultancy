import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { prefersReducedMotion } from '../utils/helpers'

/**
 * Magnetic hover effect: element eases toward the cursor within its bounds,
 * then snaps back on mouse leave. Used by MagneticButton.
 */
export function useMagneticEffect(strength = 0.35) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el || prefersReducedMotion()) return

    const handleMove = (e) => {
      const rect = el.getBoundingClientRect()
      const relX = e.clientX - (rect.left + rect.width / 2)
      const relY = e.clientY - (rect.top + rect.height / 2)
      gsap.to(el, {
        x: relX * strength,
        y: relY * strength,
        duration: 0.5,
        ease: 'power3.out',
      })
    }

    const handleLeave = () => {
      gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.4)' })
    }

    el.addEventListener('mousemove', handleMove)
    el.addEventListener('mouseleave', handleLeave)
    return () => {
      el.removeEventListener('mousemove', handleMove)
      el.removeEventListener('mouseleave', handleLeave)
    }
  }, [strength])

  return ref
}
