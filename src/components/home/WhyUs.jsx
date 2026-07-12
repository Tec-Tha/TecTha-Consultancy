import SectionHeader from '../shared/SectionHeader.jsx'
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, viewportOnce } from '../../animations/framer'

const REASONS = [
  {
    title: 'Senior engineers only',
    body: 'No bench of juniors learning on your infrastructure. Every engagement is staffed by people who have shipped this exact category of system before.',
  },
  {
    title: 'Fixed accountability',
    body: 'One team owns the outcome end to end — architecture, build, and the operational handoff. No blame-shifting between vendors.',
  },
  {
    title: 'Documentation as deliverable',
    body: 'Runbooks and decision records ship alongside the system, not as an afterthought six months post-launch.',
  },
]

export default function WhyUs() {
  return (
    <section className="section-y border-t border-ivory/10 bg-ink-800">
      <div className="container-content">
        <SectionHeader eyebrow="Why Vantage Point" title="Reliability isn't a feature. It's the whole job." />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer(0.1)}
          className="mt-14 grid gap-10 lg:grid-cols-3 lg:gap-8"
        >
          {REASONS.map((reason, i) => (
            <motion.div key={reason.title} variants={fadeUp} className="border-t border-ivory/15 pt-6">
              <span className="font-mono text-xs text-ivory/40">0{i + 1}</span>
              <h3 className="mt-3 font-display text-xl text-ivory">{reason.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ivory/55">{reason.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
