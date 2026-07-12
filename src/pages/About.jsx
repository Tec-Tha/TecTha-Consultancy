import SectionHeader from '../components/shared/SectionHeader.jsx'
import TextReveal from '../components/shared/TextReveal.jsx'
import Statistics from '../components/home/Statistics.jsx'
import ContactCTA from '../components/home/ContactCTA.jsx'

const TIMELINE = [
  { year: '2008', event: 'Founded as a three-person infrastructure practice in San Francisco.' },
  { year: '2014', event: 'First core-banking migration, Meridian Bank — still a client today.' },
  { year: '2019', event: 'Opened the applied AI practice ahead of most consultancies.' },
  { year: '2026', event: '240+ systems shipped across six industries.' },
]

export default function About() {
  return (
    <>
      <section className="section-y">
        <div className="container-content">
          <p className="eyebrow mb-6">About Vantage Point</p>
          <h1 className="max-w-3xl font-display text-[clamp(2.25rem,5vw,4.5rem)] font-medium leading-[1.05] text-ivory">
            <TextReveal text="We build the parts of the enterprise nobody sees, until they fail." />
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-ivory/60">
            Founded in 2008, Vantage Point has grown from a three-person infrastructure
            practice into a full-discipline systems consultancy — without losing the
            habit of shipping things ourselves.
          </p>
        </div>
      </section>

      <section className="section-y border-t border-ivory/10">
        <div className="container-content">
          <SectionHeader eyebrow="Timeline" title="Eighteen years, condensed." />
          <div className="mt-14 divide-y divide-ivory/10 border-y border-ivory/10">
            {TIMELINE.map((item) => (
              <div key={item.year} className="grid gap-4 py-7 sm:grid-cols-[120px,1fr]">
                <span className="font-mono text-signal">{item.year}</span>
                <p className="text-ivory/60">{item.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Statistics />
      <ContactCTA />
    </>
  )
}
