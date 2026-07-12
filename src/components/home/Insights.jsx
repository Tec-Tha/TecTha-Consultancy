import { motion } from 'framer-motion'
import SectionHeader from '../shared/SectionHeader.jsx'
import { INSIGHTS } from '../../utils/constants'
import { fadeUp, staggerContainer, viewportOnce } from '../../animations/framer'

export default function Insights() {
  return (
    <section id="insights" className="section-y border-t border-ivory/10">
      <div className="container-content">
        <SectionHeader eyebrow="Insights" title="Field notes from active engagements." />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer(0.1)}
          className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {INSIGHTS.map((post) => (
            <motion.article key={post.title} variants={fadeUp} className="group cursor-pointer">
              <p className="font-mono text-xs text-ivory/40">{post.date}</p>
              <h3 className="mt-3 font-display text-lg text-ivory transition-colors duration-300 group-hover:text-signal">
                {post.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ivory/55">{post.excerpt}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
