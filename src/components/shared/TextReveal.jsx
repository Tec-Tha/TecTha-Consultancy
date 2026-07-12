import { motion } from 'framer-motion'
import { viewportOnce } from '../../animations/framer'

/**
 * Splits text into words and reveals them with a staggered rise —
 * used for hero and section headlines.
 */
export default function TextReveal({ text, as: Tag = 'span', className, delay = 0 }) {
  const words = text.split(' ')

  return (
    <Tag className={className}>
      <motion.span
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={{ show: { transition: { staggerChildren: 0.045, delayChildren: delay } } }}
        className="inline"
      >
        {words.map((word, i) => (
          <span key={i} className="inline-block overflow-hidden pb-[0.15em] align-bottom">
            <motion.span
              className="inline-block"
              variants={{
                hidden: { y: '110%' },
                show: { y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
              }}
            >
              {word}
              {i < words.length - 1 ? '\u00A0' : ''}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  )
}
