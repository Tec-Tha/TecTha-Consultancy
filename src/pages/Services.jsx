import SectionHeader from '../components/shared/SectionHeader.jsx'
import Card from '../components/ui/Card.jsx'
import TextReveal from '../components/shared/TextReveal.jsx'
import FeaturedWork from '../components/home/FeaturedWork.jsx'
import ContactCTA from '../components/home/ContactCTA.jsx'
import { SERVICES } from '../utils/constants'

export default function Services() {
  return (
    <>
      <section className="section-y">
        <div className="container-content">
          <p className="eyebrow mb-6">Services</p>
          <h1 className="max-w-3xl font-display text-[clamp(2.25rem,5vw,4.5rem)] font-medium leading-[1.05] text-ivory">
            <TextReveal text="Six disciplines. One accountable team." />
          </h1>
        </div>
      </section>

      <section className="section-y border-t border-ivory/10">
        <div className="container-content">
          <SectionHeader eyebrow="Capabilities" title="Choose one, or run several in parallel." />
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {SERVICES.map((service) => (
              <Card key={service.code}>
                <span className="font-mono text-xs text-signal">{service.code}</span>
                <h3 className="mt-4 font-display text-2xl text-ivory">{service.title}</h3>
                <p className="mt-4 text-ivory/60">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <FeaturedWork />
      <ContactCTA />
    </>
  )
}
