import { motion } from 'framer-motion'
import { fadeUp, viewportOnce } from '../../animations/framer'
import { cx } from '../../utils/helpers'

/**
 * Consistent section intro: eyebrow label, headline, optional supporting copy.
 */
export default function SectionHeader({ eyebrow, title, description, align = 'left', className }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      variants={fadeUp}
      className={cx(
        'max-w-2xl',
        align === 'center' && 'mx-auto text-center',
        className
      )}
    >
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      <h2 className="text-[clamp(1.75rem,3.4vw,3rem)] font-medium leading-[1.1] text-ivory">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-relaxed text-ivory/60 sm:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  )
}
