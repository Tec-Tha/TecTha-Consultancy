import SectionHeader from '../components/shared/SectionHeader.jsx'
import TextReveal from '../components/shared/TextReveal.jsx'
import Card from '../components/ui/Card.jsx'
import Badge from '../components/ui/Badge.jsx'
import ContactCTA from '../components/home/ContactCTA.jsx'

const OPENINGS = [
  { title: 'Senior Platform Engineer', location: 'San Francisco / Remote', team: 'Cloud & Platform' },
  { title: 'Data Systems Architect', location: 'Remote (US)', team: 'Data & Analytics' },
  { title: 'Applied AI Engineer', location: 'San Francisco', team: 'Applied AI' },
  { title: 'Security Engineer', location: 'Remote (US)', team: 'Security & Compliance' },
]

const VALUES = [
  { title: 'Ship, then teach', body: 'We measure success by whether the client team can run the system without us.' },
  { title: 'Write it down', body: 'If a decision isn\u2019t documented, it didn\u2019t happen. This applies to us as much as clients.' },
  { title: 'Say the hard thing early', body: 'Bad news gets better with time only in fiction. We surface risk the week we see it.' },
]

export default function Careers() {
  return (
    <>
      <section className="section-y">
        <div className="container-content">
          <p className="eyebrow mb-6">Careers</p>
          <h1 className="max-w-3xl font-display text-[clamp(2.25rem,5vw,4.5rem)] font-medium leading-[1.05] text-ivory">
            <TextReveal text="Work that stays in production after you move on." />
          </h1>
        </div>
      </section>

      <section className="section-y border-t border-ivory/10">
        <div className="container-content">
          <SectionHeader eyebrow="How we work" title="Three things that don't change by team." />
          <div className="mt-14 grid gap-8 sm:grid-cols-3">
            {VALUES.map((v) => (
              <div key={v.title} className="border-t border-ivory/15 pt-6">
                <h3 className="font-display text-lg text-ivory">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ivory/55">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y border-t border-ivory/10">
        <div className="container-content">
          <SectionHeader eyebrow="Open roles" title="Current openings." />
          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {OPENINGS.map((role) => (
              <Card key={role.title}>
                <Badge>{role.team}</Badge>
                <h3 className="mt-4 font-display text-xl text-ivory">{role.title}</h3>
                <p className="mt-2 text-sm text-ivory/50">{role.location}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
