import { useState } from 'react'
import TextReveal from '../components/shared/TextReveal.jsx'
import Input from '../components/ui/Input.jsx'
import Button from '../components/ui/Button.jsx'
import { SITE } from '../utils/constants'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="section-y">
      <div className="container-content grid gap-16 lg:grid-cols-[1fr,1.1fr]">
        <div>
          <p className="eyebrow mb-6">Contact</p>
          <h1 className="font-display text-[clamp(2.25rem,4.5vw,3.75rem)] font-medium leading-[1.05] text-ivory">
            <TextReveal text="Tell us what your system needs to survive." />
          </h1>
          <div className="mt-10 space-y-4 font-mono text-sm text-ivory/60">
            <p>{SITE.email}</p>
            <p>{SITE.phone}</p>
            <p>{SITE.address}</p>
          </div>
        </div>

        <div>
          {submitted ? (
            <div className="rounded-2xl border border-signal/30 bg-signal/5 p-8">
              <h3 className="font-display text-xl text-ivory">Message sent.</h3>
              <p className="mt-3 text-ivory/60">
                We reply to every inquiry within one business day.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <Input id="name" label="Name" placeholder="Jordan Ellis" required />
                <Input id="company" label="Company" placeholder="Acme Corp" required />
              </div>
              <Input id="email" type="email" label="Email" placeholder="you@company.com" required />
              <Input
                id="message"
                as="textarea"
                label="What are you building?"
                placeholder="A few sentences on the system and where it's stuck."
                required
              />
              <Button type="submit" size="lg" className="w-full sm:w-auto">
                Send message
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
