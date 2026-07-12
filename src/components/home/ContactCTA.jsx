import { motion } from 'framer-motion'
import MagneticButton from '../shared/MagneticButton.jsx'
import Button from '../ui/Button.jsx'
import TextReveal from '../shared/TextReveal.jsx'
import { fadeUp, viewportOnce } from '../../animations/framer'
import { SITE } from '../../utils/constants'

export default function ContactCTA() {
  return (
    <section className="section-y border-t border-ivory/10 bg-ink-800">
      <div className="container-content flex flex-col items-start gap-8">
        <h2 className="max-w-2xl font-display text-[clamp(2rem,4.5vw,3.5rem)] font-medium leading-[1.05] text-ivory">
          <TextReveal text="Tell us what your system needs to survive." />
        </h2>

        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
          className="max-w-lg text-ivory/60"
        >
          A first call is thirty minutes, unscripted, and free. We'll tell you
          honestly if we're the right team for it.
        </motion.p>

        <MagneticButton>
          <Button to="/contact" size="lg">
            {SITE.email}
          </Button>
        </MagneticButton>
      </div>
    </section>
  )
}
