import SectionHeader from '../shared/SectionHeader.jsx'
import Divider from '../ui/Divider.jsx'

export default function Overview() {
  return (
    <section className="section-y border-t border-ivory/10">
      <div className="container-content grid gap-12 lg:grid-cols-[0.9fr,1.1fr] lg:gap-20">
        <SectionHeader
          eyebrow="What we do"
          title="One team, from architecture to adoption."
        />
        <div className="space-y-6 text-lg leading-relaxed text-ivory/60">
          <p>
            Most vendors hand off a system and disappear before anyone learns to
            operate it. We stay through rollout, train the teams who inherit the
            work, and document decisions so the next engineer isn't reverse-engineering
            our choices two years from now.
          </p>
          <Divider />
          <p>
            Eighteen years in, our practice spans cloud platforms, data
            infrastructure, applied AI, and the compliance work that enterprise
            deployments actually require — under one accountable team, not a
            handoff between subcontractors.
          </p>
        </div>
      </div>
    </section>
  )
}
