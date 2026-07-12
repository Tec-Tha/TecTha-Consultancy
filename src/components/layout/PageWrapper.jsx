import { motion } from 'framer-motion'
import { pageTransition } from '../../animations/framer'

export default function PageWrapper({ children }) {
  return (
    <motion.main
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
      className="min-h-screen pt-20"
    >
      {children}
    </motion.main>
  )
}
