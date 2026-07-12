import { Link } from 'react-router-dom'
import { FOOTER_LINKS, SITE } from '../../utils/constants'

export default function Footer() {
  return (
    <footer className="border-t border-ivory/10 bg-ink-800">
      <div className="container-content section-y">
        <div className="grid gap-12 lg:grid-cols-[1.4fr,1fr,1fr,1fr]">
          <div>
            <Link to="/" className="flex items-center gap-2 font-display text-xl text-ivory">
              <span className="h-2 w-2 rounded-full bg-signal" />
              {SITE.name}
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ivory/50">
              {SITE.tagline}
            </p>
          </div>

          {FOOTER_LINKS.map((group) => (
            <div key={group.heading}>
              <p className="font-mono text-xs uppercase tracking-widest2 text-ivory/40">
                {group.heading}
              </p>
              <ul className="mt-5 space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-sm text-ivory/70 transition-colors duration-300 hover:text-signal"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-ivory/10 pt-8 text-xs text-ivory/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {SITE.legalName}. All rights reserved.</p>
          <p className="font-mono">{SITE.address}</p>
        </div>
      </div>
    </footer>
  )
}
