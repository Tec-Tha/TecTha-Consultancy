import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import TextReveal from '../shared/TextReveal.jsx'
import MagneticButton from '../shared/MagneticButton.jsx'
import Button from '../ui/Button.jsx'
import { drawSvgPath } from '../../animations/gsap'
import { fadeUp } from '../../animations/framer'

/**
 * Hero — the page's thesis. The signature network-topology motif draws in
 * behind the headline: nodes represent the disciplines Vantage Point unifies,
 * the connecting lines represent integration — the core of the pitch.
 */
export default function Hero() {
  const pathRef = useRef(null)

  useEffect(() => {
    const tween = drawSvgPath(pathRef.current, {
      scrollTrigger: { trigger: pathRef.current, start: 'top 95%' },
      delay: 0.4,
    })
    return () => {
      tween?.scrollTrigger?.kill()
      tween?.kill()
    }
  }, [])

  return (
    <section className="relative overflow-hidden pb-24 pt-16 sm:pt-24">
      <div className="container-content relative z-10">
        <p className="eyebrow mb-6">Enterprise systems consultancy</p>

        <h1 className="max-w-4xl font-display text-[clamp(2.75rem,7vw,6.5rem)] font-medium leading-[0.98] text-ivory">
          <TextReveal text="Systems that hold" as="div" />
          <TextReveal text="under enterprise weight." as="div" delay={0.15} />
        </h1>

        <motion.p
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ delay: 0.5 }}
          className="mt-8 max-w-xl text-lg leading-relaxed text-ivory/60"
        >
          We design, build, and integrate the cloud, data, and AI infrastructure that
          large organizations run on — and we stay legible to the engineers who
          maintain it after we leave.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ delay: 0.65 }}
          className="mt-10 flex flex-wrap items-center gap-5"
        >
          <MagneticButton>
            <Button to="/contact" size="lg">Start a project</Button>
          </MagneticButton>
          <Button to="/services" variant="ghost" size="lg">
            See our services →
          </Button>
        </motion.div>
      </div>

      {/* Signature motif: network topology line, drawn in on scroll */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 top-1/3 -z-0 opacity-60">
        <svg viewBox="0 0 1400 500" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
          <path
            ref={pathRef}
            d="M60,420 L340,260 L560,340 L820,140 L1060,220 L1340,80"
            fill="none"
            stroke="#3D5A80"
            strokeWidth="1.5"
          />
          {[
            [60, 420], [340, 260], [560, 340], [820, 140], [1060, 220], [1340, 80],
          ].map(([cx, cy], i) => (
            <circle key={i} cx={cx} cy={cy} r={i % 2 === 0 ? 5 : 3.5} fill={i === 3 ? '#E8A33D' : '#8FA998'} />
          ))}
        </svg>
      </div>
    </section>
  )
}
