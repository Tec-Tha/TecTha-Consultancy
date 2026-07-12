import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import SectionHeader from '../shared/SectionHeader.jsx'
import Card from '../ui/Card.jsx'
import { SERVICES } from '../../utils/constants'
import { fadeUp, staggerContainer, viewportOnce } from '../../animations/framer'

export default function ServicesGrid() {
  return (
    <section className="section-y border-t border-ivory/10">
      <div className="container-content">
        <SectionHeader
          eyebrow="Capabilities"
          title="Six disciplines, wired together."
          description="Each one stands alone as an engagement — most clients need three or more running in parallel."
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer(0.08)}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SERVICES.map((service) => (
            <motion.div key={service.code} variants={fadeUp}>
              <Link to="/services">
                <Card className="h-full">
                  <span className="font-mono text-xs text-signal">{service.code}</span>
                  <h3 className="mt-4 font-display text-xl text-ivory">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ivory/55">
                    {service.description}
                  </p>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
