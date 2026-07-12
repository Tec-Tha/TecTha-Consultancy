import { AnimatePresence, motion } from 'framer-motion'

/**
 * Full-screen loader shown briefly on first mount — orchestrated entrance
 * consistent with the site's "signal" easing.
 */
export default function LoadingScreen({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
        >
          <motion.div
            className="flex items-center gap-3 font-mono text-sm uppercase tracking-widest2 text-ivory/60"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.span
              className="h-2 w-2 rounded-full bg-signal"
              animate={{ scale: [1, 1.6, 1] }}
              transition={{ duration: 1.1, repeat: Infinity, ease: 'easeInOut' }}
            />
            Vantage Point
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
