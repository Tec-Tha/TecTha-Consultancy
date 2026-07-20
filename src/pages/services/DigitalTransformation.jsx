import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import ServiceNavbar from "../../components/layout/ServiceNavbar";

const fadeUp = (delay = 0) => ({
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay,
    },
  },
});

const CAPABILITIES = [
  {
    id: 1,
    title: "Business Consulting",
    short:
      "Align business strategy with digital initiatives to accelerate growth, innovation, and operational excellence.",
    image: "/art.jpg",
    tags: ["Strategy", "Transformation", "Consulting"],
    link: "/services/DigitalTransformation/business-consulting",
  },
  {
    id: 2,
    title: "Enterprise Transformation",
    short:
      "Drive organization-wide transformation through modern operating models, digital innovation, and business agility.",
    image: "/art.jpg",
    tags: ["Transformation", "Operations", "Innovation"],
    link: "/services/DigitalTransformation/enterprise-transformation",
  },
  {
    id: 3,
    title: "Enterprise Architecture",
    short:
      "Design scalable enterprise architectures that align technology investments with long-term business objectives.",
    image: "/art.jpg",
    tags: ["Architecture", "Technology", "Governance"],
    link: "/services/DigitalTransformation/enterprise-architecture",
  },
  {
    id: 4,
    title: "Process Excellence",
    short:
      "Optimize business processes through automation, continuous improvement, and operational efficiency initiatives.",
    image: "/art.jpg",
    tags: ["Process", "Optimization", "Automation"],
    link: "/services/DigitalTransformation/process-excellence",
  },
  {
    id: 5,
    title: "Technology Advisory",
    short:
      "Provide strategic technology guidance to maximize business value, reduce risk, and improve IT investments.",
    image: "/art.jpg",
    tags: ["Technology", "Advisory", "Strategy"],
    link: "/services/DigitalTransformation/technology-advisory",
  },
  {
    id: 6,
    title: "Change Management",
    short:
      "Enable successful digital transformation through structured change management, communication, and workforce adoption.",
    image: "/art.jpg",
    tags: ["Change", "Adoption", "Leadership"],
    link: "/services/DigitalTransformation/change-management",
  },
];

const CHALLENGES = [
  {
    title: "Misaligned Business & Technology Goals",
    desc: "Technology initiatives often fail to deliver expected outcomes because they are not aligned with overall business strategy.",
  },
  {
    title: "Slow Digital Transformation",
    desc: "Legacy processes, organizational resistance, and fragmented systems delay digital transformation initiatives.",
  },
  {
    title: "Complex Enterprise Operations",
    desc: "Disconnected processes and siloed departments reduce efficiency and limit organizational agility.",
  },
  {
    title: "Inefficient Technology Investments",
    desc: "Organizations struggle to prioritize technology initiatives that deliver measurable business value and ROI.",
  },
  {
    title: "Managing Organizational Change",
    desc: "Employee resistance and lack of structured change management reduce the success of transformation programs.",
  },
  {
    title: "Governance & Compliance Challenges",
    desc: "Rapid business growth increases the need for effective governance, risk management, and regulatory compliance.",
  },
];

const METHODOLOGY = [
  {
    step: "01",
    title: "Assess & Discover",
    desc: "Evaluate business strategy, technology landscape, and operational processes to identify transformation opportunities.",
    image: "/art.jpg",
  },
  {
    step: "02",
    title: "Define Strategy",
    desc: "Develop transformation roadmaps, governance frameworks, and business strategies aligned with organizational goals.",
    image: "/art.jpg",
  },
  {
    step: "03",
    title: "Transform & Implement",
    desc: "Execute transformation initiatives through process optimization, technology enablement, and organizational alignment.",
    image: "/art.jpg",
  },
  {
    step: "04",
    title: "Enable Adoption",
    desc: "Support successful implementation through stakeholder engagement, change management, and performance monitoring.",
    image: "/art.jpg",
  },
  {
    step: "05",
    title: "Optimize & Sustain",
    desc: "Continuously improve business performance through governance, operational excellence, and ongoing strategic guidance.",
    image: "/art.jpg",
  },
];

const INDUSTRIES = [
  {
    title: "Financial Services",
    image: "/art.jpg",
    desc: "Support digital transformation, governance, and operational excellence across financial institutions.",
  },
  {
    title: "Manufacturing",
    image: "/art.jpg",
    desc: "Modernize manufacturing operations with smart processes, digital technologies, and enterprise transformation.",
  },
  {
    title: "Healthcare",
    image: "/art.jpg",
    desc: "Improve healthcare delivery through digital transformation, compliance, and process optimization.",
  },
  {
    title: "Retail & E-Commerce",
    image: "/art.jpg",
    desc: "Enhance customer experiences with digital business strategies and operational transformation.",
  },
  {
    title: "Logistics & Supply Chain",
    image: "/art.jpg",
    desc: "Optimize logistics operations through digital innovation, automation, and process excellence.",
  },
  {
    title: "Government & Public Sector",
    image: "/art.jpg",
    desc: "Enable citizen-centric digital services through strategic transformation and governance frameworks.",
  },
];

const FAQS = [
  {
    q: "Why choose Tec Tha for Digital Transformation services?",
    a: "Tec Tha combines business consulting, technology expertise, and transformation experience to help organizations modernize operations, improve efficiency, and achieve measurable business outcomes.",
  },
  {
    q: "How long does a digital transformation project typically take?",
    a: "Project timelines vary based on business complexity. Focused consulting engagements may take a few weeks, while enterprise-wide transformation programs are delivered in phased stages over several months.",
  },
  {
    q: "Can you work with our existing systems and business processes?",
    a: "Yes. We enhance and modernize existing business processes and technology investments while minimizing operational disruption and maximizing long-term value.",
  },
  {
    q: "How do you ensure successful organizational change?",
    a: "We use structured change management frameworks, stakeholder engagement, communication strategies, and training programs to ensure successful transformation adoption.",
  },
  {
    q: "Do you provide ongoing advisory and transformation support?",
    a: "Yes. We provide continuous advisory services, governance reviews, performance monitoring, and strategic guidance to support long-term business growth and innovation.",
  },
];

const DigitalAdvisory = () => {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="min-h-screen bg-white text-black font-['Montserrat']">
      <ServiceNavbar />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-start px-6 md:px-10 overflow-hidden">
        <>
  {/* Background Image */}
  <motion.div
  className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat bg-fixed"
  style={{
    backgroundImage: "url('/art.jpg')",
  }}
  initial={{ scale: 1.2 }}
  animate={{ scale: 1 }}
  transition={{
    duration: 2,
    ease: [0.22, 1, 0.36, 1], // Premium smooth easing
  }}
/>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/10" />

  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/80" />
</>
        <div className="relative max-w-[1200px] mx-auto">
          <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={0} className="-mt-20 text-xl font uppercase tracking-[0.3em] mb-6 font-['Montserrat'] text-white">
            Digital Transformation 
          </motion.p> <hr className="border-white/40 my-6" />
          <motion.h1 variants={fadeUp} initial="hidden" animate="visible" custom={0.08} className="text-7xl md:text-6xl lg:text-7xl font text-white leading-[1.05]">
            Independent Advisory Built for Enterprise.
          </motion.h1>
          <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={0.16} className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed mb-10">
            {/* incase add description use this block */}
          </motion.p>
        </div>
      </section>

      
      {/* Enterprise Vision */}
<section className="py-28 px-6 md:px-10 bg-white relative overflow-hidden">
  <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-blue-100 blur-[120px] opacity-40"></div>

  <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-20 items-center">

    {/* Left Content */}
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <p className="text-sm uppercase tracking-[0.3em] text-blue-600 mb-6 font-semibold">
        Enterprise Vision
      </p>

      <h2 className="text-5xl font text-black leading-tight mb-8">
        Advice should be grounded in engineering —
        <br />
        not a slide deck.
      </h2>

      <p className="text-gray-600 text-lg leading-9 mb-6 font-['montserrat']">
        Most advisory engagements end at a recommendation and leave
        execution to someone else. We reverse that order. Every
        recommendation we make is shaped by teams who actually build and
        operate enterprise systems, so the advice holds up in production,
        not just in a boardroom.
      </p>

      <p className="text-gray-600 text-lg leading-9">
        Strategy detached from delivery tends to sit on a shelf. Strategy
        grounded in engineering reality continues to guide decisions as
        the business evolves.
      </p>
    </motion.div>

    {/* Right Image */}
    <motion.div
      initial={{ opacity: 0, x: 80, scale: 1.08 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="relative"
    >
      {/* Replace this div with <img> later */}
      <img
  src="/art.jpg"
  alt="Enterprise Vision"
  className="h-[650px] w-full rounded-[32px] object-cover"
/>

    
    </motion.div>

  </div>
</section>



{/* Business Reality */}
<section className="py-28 px-6 md:px-10 bg-[#F8FAFC] relative overflow-hidden">

  <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-cyan-100 blur-[120px] opacity-40"></div>

  <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-20 items-center">

    {/* Left Image */}
    <motion.div
      initial={{ opacity: 0, x: -80, scale: 1.08 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="relative"
    >
      <img
  src="/art.jpg"
  alt="Enterprise Vision"
  className="h-[650px] w-full rounded-[32px] object-cover"
/>

    </motion.div>

    {/* Right Content */}
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <p className="text-sm uppercase tracking-[0.3em] text-blue-600 mb-6 font">
        Business Reality
      </p>

      <h2 className="text-5xl font text-black leading-tight mb-8">
        Most enterprises don't lack advice.
        <br />
        They lack advice they can trust.
      </h2>

      <p className="text-gray-600 text-lg leading-9 mb-6">
        Leadership teams receive no shortage of vendor pitches and
        consulting decks, yet major technology decisions still get made on
        incomplete information because no one in the room is independent.
      </p>

      <p className="text-gray-600 text-lg leading-9">
        Tec Tha treats digital advisory as enterprise infrastructure. We
        give leadership independent, engineering-grounded guidance that
        organizations can confidently rely on for high-stakes decisions.
      </p>

    </motion.div>

  </div>
</section>

  
{/* Executive Challenges */}
<section className="py-32 px-6 md:px-10 bg-black">
  <div className="max-w-[1400px] mx-auto">

    {/* Heading */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mb-20"
    >
      <p className="text-sm uppercase tracking-[0.35em] text-blue-500 font-semibold mb-4">
        Executive Challenges
      </p>

      <h2 className="text-5xl md:text-6xl text-white font-light leading-tight max-w-6xl">
        The problems we're most often
        <br />
        brought in to solve.
      </h2>
    </motion.div>

    {/* Cards */}
    <div className="space-y-6">

      {CHALLENGES.map((item, index) => (

        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: index * 0.08,
          }}
          whileHover={{
            x: 10,
          }}
          className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl transition-all duration-500 hover:border-blue-500/40 hover:bg-white/[0.06]"
        >

          <div className="grid md:grid-cols-[120px_1fr_60px] items-center px-10 py-10 gap-8">

            {/* Number */}
            <div className="text-5xl font-bold text-white/15 group-hover:text-blue-400 transition-all duration-500">
              0{index + 1}
            </div>

            {/* Content */}
            <div>

              <h3 className="text-3xl text-white font-medium mb-3">
                {item.title}
              </h3>

              <p className="text-gray-400 text-lg leading-8 max-w-4xl">
                {item.desc}
              </p>

            </div>

          </div>

          {/* Bottom Line */}
          <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 transition-all duration-500 group-hover:w-full"></div>

        </motion.div>

      ))}

    </div>

  </div>
</section>

     <section className="bg-white py-24">

  <div className="mx-auto max-w-7xl px-6">

    <p className="uppercase tracking-[0.35em] text-blue-500 text-sm font-semibold mb-5">
      Enterprise Capabilities
    </p>

    <h2 className="text-5xl text-black font-light mb-16">
      Six disciplines, one connected practice.
    </h2>

    <div className="group/cards flex gap-7 overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">

      {CAPABILITIES.map((service, i) => (

        <motion.div
          key={service.id}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={i * 0.08}
          className="min-w-[330px] flex-shrink-0 snap-start lg:min-w-[32%]"
        >

          <Link
            to={service.link}
            className="group relative block h-[650px] overflow-hidden transition-all duration-700 hover:scale-105"
          >

            <img
              src={service.image}
              alt={service.title}
              className="absolute inset-0 h-full w-full object-cover brightness-50 group-hover:brightness-100 group-hover:scale-110 transition duration-700"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40"/>

            <div className="absolute bottom-0 p-8 text-white">

              <h3 className="text-4xl mb-4">
                {service.title}
              </h3>

              <p className="text-white/80">
                {service.short}
              </p>

              <div className="flex flex-wrap gap-2 mt-6">

                {service.tags.map(tag=>(
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full border border-white/20 bg-white/10 text-xs"
                  >
                    {tag}
                  </span>
                ))}

              </div>

              <div className="mt-8 flex items-center gap-2 font-semibold">
                Explore Service
                <ArrowRight className="h-5 w-5"/>
              </div>

            </div>

          </Link>

        </motion.div>

      ))}

    </div>

  </div>

</section>


      {/* Industry Solutions */}
      <section className="bg-white py-28">

  <div className="max-w-7xl mx-auto px-6">

    <p className="uppercase tracking-[0.35em] text-blue-600 text-sm font-semibold mb-5">
      Industry Solutions
    </p>

    <h2 className="text-5xl font-light text-slate-900 max-w-3xl mb-20">
      Context matters. We build for your industry's constraints.
    </h2>

    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-20">

      {INDUSTRIES.map((industry, index) => (

        <motion.div
          key={industry.title}
          variants={fadeUp(index * 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="group"
        >

          {/* Image */}
          <div className="overflow-hidden">

            <img
              src={industry.image}
              alt={industry.title}
              className="h-[260px] w-full object-cover transition duration-700 group-hover:scale-110"
            />

          </div>

          {/* Content */}

          <h3 className="mt-8 text-4xl font-light text-slate-900">
            {industry.title}
          </h3>

          <p className="mt-5 text-lg leading-9 text-slate-600">
            {industry.desc}
          </p>

        </motion.div>

      ))}

    </div>

  </div>

</section>

      {/* Delivery Framework */}
      <section className="bg-black py-32">

  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}

    <p className="uppercase tracking-[0.35em] text-blue-500 text-sm font-semibold mb-5">
      Delivery Framework
    </p>

    <h2 className="text-5xl font-light text-white max-w-3xl mb-24">
      A structured path from assessment to scale.
    </h2>

    <div className="space-y-32">

      {METHODOLOGY.map((item, index) => (

        <motion.div
          key={item.step}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: index * 0.1 }}
          className="border-b border-white/10 pb-24"
        >

          {/* Image */}

          <div className="overflow-hidden">

            <img
              src={item.image}
              alt={item.title}
              className="h-[520px] w-full object-cover transition duration-700 hover:scale-105"
            />

          </div>

          {/* Content */}

          <div className="mt-12">

            <span className="text-[90px] font-bold text-white/10">
              {item.step}
            </span>

            <h3 className="mt-3 text-5xl font-light text-white">
              {item.title}
            </h3>

            <p className="mt-8 max-w-3xl text-lg leading-9 text-white/70">
              {item.desc}
            </p>

          </div>

        </motion.div>

      ))}

    </div>

  </div>

</section>

      {/* FAQs */}
      <section className="bg-white py-32">

  <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[420px_1fr] gap-24">

    {/* LEFT */}

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="lg:sticky lg:top-28 h-fit"
    >
      <p className="uppercase tracking-[0.35em] text-blue-600 text-sm font-semibold mb-5">
        Frequently Asked Questions
      </p>

      <h2 className="text-5xl font-light leading-tight text-slate-900">
        Common questions
        <br />
        from enterprise
        <br />
        leaders.
      </h2>

      <p className="mt-8 text-lg leading-8 text-slate-500">
        Everything enterprise teams usually ask before
        starting a digital advisory engagement.
      </p>

    </motion.div>

    {/* RIGHT */}

    <motion.div
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >

      {FAQS.map((faq, index) => (

        <div
          key={faq.q}
          className="border-b border-slate-200 py-8"
        >

          <button
            onClick={() =>
              setOpenFaq(openFaq === index ? null : index)
            }
            className="w-full flex justify-between items-start gap-10 text-left group"
          >

            <div className="flex gap-8">

              <span className="text-blue-600 font-semibold text-lg w-8">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="text-2xl font-light leading-snug text-slate-900 group-hover:text-blue-600 transition">
                {faq.q}
              </h3>

            </div>

            <div
              className={`transition duration-300 ${
                openFaq === index
                  ? "rotate-180"
                  : ""
              }`}
            >
              <ChevronDown size={24} />
            </div>

          </button>

          <motion.div
            initial={false}
            animate={{
              height: openFaq === index ? "auto" : 0,
              opacity: openFaq === index ? 1 : 0,
            }}
            transition={{
              duration: 0.35,
            }}
            className="overflow-hidden"
          >

            <div className="pl-16 pr-8 pt-6">

              <p className="text-slate-600 leading-9 text-lg max-w-3xl">
                {faq.a}
              </p>

            </div>

          </motion.div>

        </div>

      ))}

    </motion.div>

  </div>

</section>

      {/* Enterprise CTA */}
      <section className="relative overflow-hidden bg-black py-32">

  {/* Background Glow */}
  <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2  bg-blue-600/10 blur-[180px]" />

  <div className="relative mx-auto max-w-6xl px-6">

    <div className=" border border-white/10 bg-gradient-to-br from-white/[0.03] to-white/[0.01] p-14 md:p-20 backdrop-blur-xl">

      <p className="mb-5 uppercase tracking-[0.35em] text-sm font-semibold text-blue-500">
        Digital Advisory Practice
      </p>

      <h2 className="max-w-4xl text-5xl font-light leading-tight text-white md:text-6xl">
        Ready for advice grounded
        <br />
        in engineering reality?
      </h2>

      <p className="mt-8 max-w-3xl text-lg leading-9 text-white/70">
        Speak with our advisory practice to identify where strategy, vendor
        evaluation, and governance can create measurable business value
        across your organization.
      </p>

      <div className="mt-12 flex flex-wrap gap-6">

        <Link
          to="/contact"
          className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-base font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-slate-100"
        >
          Schedule a Consultation
          <ArrowRight className="h-5 w-5" />
        </Link>

        <Link
          to="/services"
          className="inline-flex items-center gap-3 rounded-full border border-white/20 px-8 py-4 text-base font-medium text-white transition-all duration-300 hover:border-blue-500 hover:bg-white/5"
        >
          Explore Services
        </Link>

      </div>

    </div>

  </div>

</section>

      {/* Footer CTA */}
      <section className="py-16 px-6 md:px-10 border-t border-white/10 bg-white/[0.02]">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <p className="text-gray-400 text-base max-w-md">
            Explore how Technology Strategy, Operating Model Design, and Vendor Selection fit into a single connected roadmap for your organization.
          </p>
          <Link to="/services" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/5 transition-colors shrink-0">
            View all services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default DigitalAdvisory;