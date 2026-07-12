import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import SectionHeader from '../shared/SectionHeader.jsx'
import { INDUSTRIES } from '../../utils/constants'

/**
 * Horizontal-feeling industries showcase: cards translate slightly against
 * vertical scroll progress through the section for a layered, kinetic read.
 */
export default function IndustriesScroll() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const x = useTransform(scrollYProgress, [0, 1], ['2%', '-6%'])

  return (
    <section ref={ref} className="section-y overflow-hidden border-t border-ivory/10">
      <div className="container-content">
        <SectionHeader eyebrow="Industries" title="Built for regulated, high-stakes environments." />
      </div>

      <motion.div style={{ x }} className="container-content mt-14 flex gap-5 overflow-x-auto pb-4 lg:overflow-visible">
        {INDUSTRIES.map((industry) => (
          <div
            key={industry.title}
            className="min-w-[260px] flex-1 rounded-2xl border border-ivory/10 bg-ink-700/40 p-7"
          >
            <h3 className="font-display text-lg text-ivory">{industry.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-ivory/55">{industry.description}</p>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
