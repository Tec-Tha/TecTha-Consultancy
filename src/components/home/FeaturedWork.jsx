import { motion } from 'framer-motion'
import SectionHeader from '../shared/SectionHeader.jsx'
import Badge from '../ui/Badge.jsx'
import { FEATURED_WORK } from '../../utils/constants'
import { fadeUp, staggerContainer, viewportOnce } from '../../animations/framer'

export default function FeaturedWork() {
  return (
    <section id="work" className="section-y border-t border-ivory/10">
      <div className="container-content">
        <SectionHeader eyebrow="Selected work" title="A handful of systems currently in production." />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer(0.1)}
          className="mt-14 divide-y divide-ivory/10 border-y border-ivory/10"
        >
          {FEATURED_WORK.map((item) => (
            <motion.div
              key={item.client}
              variants={fadeUp}
              className="grid gap-4 py-8 sm:grid-cols-[1fr,2fr,auto] sm:items-center"
            >
              <h3 className="font-display text-xl text-ivory">{item.client}</h3>
              <p className="text-sm leading-relaxed text-ivory/55">{item.summary}</p>
              <Badge tone="sage">{item.tag}</Badge>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
