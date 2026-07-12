import SectionHeader from '../components/shared/SectionHeader.jsx'
import TextReveal from '../components/shared/TextReveal.jsx'
import IndustriesScroll from '../components/home/IndustriesScroll.jsx'
import Testimonials from '../components/home/Testimonials.jsx'
import ContactCTA from '../components/home/ContactCTA.jsx'
import { INDUSTRIES } from '../utils/constants'

export default function Industries() {
  return (
    <>
      <section className="section-y">
        <div className="container-content">
          <p className="eyebrow mb-6">Industries</p>
          <h1 className="max-w-3xl font-display text-[clamp(2.25rem,5vw,4.5rem)] font-medium leading-[1.05] text-ivory">
            <TextReveal text="Regulated environments are the norm here, not the exception." />
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-ivory/60">
            We've spent the most time where the constraints are tightest: finance,
            healthcare, and public infrastructure. That discipline carries over into
            every engagement, regardless of sector.
          </p>
        </div>
      </section>

      <IndustriesScroll />

      <section className="section-y border-t border-ivory/10">
        <div className="container-content">
          <SectionHeader eyebrow="Detail" title="What changes by sector, and what doesn't." />
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES.map((ind) => (
              <div key={ind.title} className="border-t border-ivory/15 pt-6">
                <h3 className="font-display text-lg text-ivory">{ind.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ivory/55">{ind.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <ContactCTA />
    </>
  )
}
