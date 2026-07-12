import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { TESTIMONIALS } from '../../utils/constants'

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const testimonial = TESTIMONIALS[index]

  return (
    <section className="section-y border-t border-ivory/10">
      <div className="container-content max-w-3xl">
        <p className="eyebrow mb-10">Client perspective</p>

        <div className="relative min-h-[220px]">
          <AnimatePresence mode="wait">
            <motion.figure
              key={index}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <blockquote className="font-display text-2xl leading-snug text-ivory sm:text-3xl">
                “{testimonial.quote}”
              </blockquote>
              <figcaption className="mt-6 font-mono text-sm text-ivory/50">
                {testimonial.name} — {testimonial.role}
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex gap-2">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Show testimonial ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? 'w-8 bg-signal' : 'w-3 bg-ivory/20'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
