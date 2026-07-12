import { LOGOS } from '../../utils/constants'

/**
 * Infinite marquee of client wordmarks. Duplicated list + CSS animation
 * for a seamless loop; pauses on hover.
 */
export default function LogoSlider() {
  const items = [...LOGOS, ...LOGOS]

  return (
    <div className="group relative overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink to-transparent" />
      <div className="flex w-max animate-[marquee_32s_linear_infinite] gap-16 group-hover:[animation-play-state:paused]">
        {items.map((logo, i) => (
          <span
            key={`${logo}-${i}`}
            className="whitespace-nowrap font-display text-xl text-ivory/30"
          >
            {logo}
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}
