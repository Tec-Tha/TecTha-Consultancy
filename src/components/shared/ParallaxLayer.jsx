import { useEffect, useRef } from 'react'
import { parallaxLayer } from '../../animations/gsap'
import { cx } from '../../utils/helpers'

export default function ParallaxLayer({ children, distance = 80, className }) {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return
    const tween = parallaxLayer(ref.current, distance)
    return () => {
      tween.scrollTrigger?.kill()
      tween.kill()
    }
  }, [distance])

  return (
    <div ref={ref} className={cx('will-change-transform', className)}>
      {children}
    </div>
  )
}
