import SectionHeader from '../shared/SectionHeader.jsx'
import AnimatedCounter from '../shared/AnimatedCounter.jsx'
import { STATS } from '../../utils/constants'

export default function Statistics() {
  return (
    <section className="section-y border-t border-ivory/10">
      <div className="container-content">
        <SectionHeader eyebrow="By the numbers" title="Two decades of production systems." align="left" />

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="border-t border-ivory/15 pt-6">
              <AnimatedCounter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} decimals={stat.value % 1 !== 0 ? 1 : 0} />
              <p className="mt-3 text-sm leading-snug text-ivory/50">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
