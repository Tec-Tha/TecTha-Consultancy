import { motion } from 'framer-motion'
import ParallaxLayer from '../shared/ParallaxLayer.jsx'
import SectionHeader from '../shared/SectionHeader.jsx'
import { fadeUp, viewportOnce } from '../../animations/framer'

export default function Innovation() {
  return (
    <section className="section-y relative overflow-hidden border-t border-ivory/10 bg-ink-800">
      <ParallaxLayer distance={60} className="pointer-events-none absolute -right-24 top-0 opacity-20">
        <svg width="520" height="520" viewBox="0 0 520 520" fill="none">
          <circle cx="260" cy="260" r="180" stroke="#E8A33D" strokeWidth="1" />
          <circle cx="260" cy="260" r="120" stroke="#3D5A80" strokeWidth="1" />
          <circle cx="260" cy="260" r="60" stroke="#8FA998" strokeWidth="1" />
        </svg>
      </ParallaxLayer>

      <div className="container-content relative z-10 grid gap-10 lg:grid-cols-2 lg:items-center">
        <SectionHeader
          eyebrow="R&D"
          title="We keep an internal practice ahead of client work."
          description="A standing team evaluates emerging infrastructure — new model architectures, edge platforms, data tooling — before we recommend it to a client production system."
        />
        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
          className="space-y-5 font-mono text-sm text-ivory/60"
        >
          <li className="border-l border-signal/40 pl-5">Quarterly technical briefings shared with active clients.</li>
          <li className="border-l border-slateblue/60 pl-5">Open evaluation criteria for new platform adoption.</li>
          <li className="border-l border-sage/60 pl-5">No unpaid pilots run on client production data.</li>
        </motion.ul>
      </div>
    </section>
  )
}
