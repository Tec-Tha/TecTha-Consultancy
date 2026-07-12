import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { NAV_LINKS, SITE } from '../../utils/constants'
import { cx } from '../../utils/helpers'
import Button from '../ui/Button.jsx'
import ThemeToggle from '../shared/ThemeToggle.jsx'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cx(
        'fixed inset-x-0 top-0 z-[80] transition-all duration-500 ease-signal',
        scrolled ? 'bg-ink/90 backdrop-blur-md border-b border-ivory/10' : 'bg-transparent'
      )}
    >
      <div className="container-content flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-display text-lg tracking-tight text-ivory">
          <span className="h-2 w-2 rounded-full bg-signal" />
          {SITE.name}
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                cx(
                  'font-mono text-xs uppercase tracking-widest2 transition-colors duration-300',
                  isActive ? 'text-signal' : 'text-ivory/60 hover:text-ivory'
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <ThemeToggle />
          <Button to="/contact" size="sm">Start a project</Button>
        </div>

        <button
          className="flex flex-col gap-1.5 lg:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span className={cx('h-px w-6 bg-ivory transition-transform', open && 'translate-y-[3.5px] rotate-45')} />
          <span className={cx('h-px w-6 bg-ivory transition-transform', open && '-translate-y-[3.5px] -rotate-45')} />
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="border-t border-ivory/10 bg-ink lg:hidden"
        >
          <nav className="container-content flex flex-col gap-6 py-8">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setOpen(false)}
                className="font-display text-2xl text-ivory"
              >
                {link.label}
              </NavLink>
            ))}
            <Button to="/contact" onClick={() => setOpen(false)} className="w-full">
              Start a project
            </Button>
          </nav>
        </motion.div>
      )}
    </header>
  )
}
