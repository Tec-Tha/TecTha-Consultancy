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
    title: "ERP Solutions",
    short:
      "Implement modern ERP platforms that streamline operations and improve enterprise-wide efficiency.",
    image: "/ERPSol/4.jpg",
    tags: ["ERP", "Implementation", "Transformation"],
    link: "/services/EnterpriseSolution/erp-solutions",
  },
  {
    id: 2,
    title: "Human Capital Management",
    short:
      "Optimize workforce management with integrated HR, payroll, talent, and employee experience solutions.",
    image: "/ERPSol/5.jpg",
    tags: ["HR", "Talent", "Workforce"],
    link: "/services/EnterpriseSolution/human-capital-management",
  },
  {
    id: 3,
    title: "Customer Relationship Management",
    short:
      "Strengthen customer engagement with intelligent CRM solutions that improve sales, service, and retention.",
    image: "/ERPSol/10.jpg",
    tags: ["CRM", "Sales", "Customer Experience"],
    link: "/services/EnterpriseSolution/customer-relationship-management",
  },
  {
    id: 4,
    title: "Supply Chain Solutions",
    short:
      "Improve supply chain visibility, inventory management, and operational efficiency through connected solutions.",
    image: "/ERPSol/8.jpg",
    tags: ["Supply Chain", "Inventory", "Logistics"],
    link: "/services/EnterpriseSolution/supply-chain-solutions",
  },
  {
    id: 5,
    title: "Finance Solutions",
    short:
      "Modernize financial operations with automated accounting, reporting, compliance, and planning capabilities.",
    image: "/ERPSol/14.jpg",
    tags: ["Finance", "Automation", "Reporting"],
    link: "/services/EnterpriseSolution/finance-solutions",
  },
  {
    id: 6,
    title: "Industry Solutions",
    short:
      "Deliver industry-specific enterprise solutions tailored to unique business processes and regulatory requirements.",
    image: "/ERPSol/12.jpg",
    tags: ["Industry", "Enterprise", "Compliance"],
    link: "/services/EnterpriseSolution/industry-solutions",
  },
];

const CHALLENGES = [
  {
    title: "Disconnected Business Processes",
    desc: "Siloed departments and disconnected applications reduce visibility, efficiency, and collaboration across the organization.",
  },
  {
    title: "Legacy Enterprise Systems",
    desc: "Outdated ERP platforms limit scalability, increase maintenance costs, and slow business innovation.",
  },
  {
    title: "Complex ERP Implementations",
    desc: "Large-scale ERP deployments often face delays due to data migration challenges, customization, and change management.",
  },
  {
    title: "Low User Adoption",
    desc: "Employees struggle to adopt new enterprise systems without intuitive processes, training, and ongoing support.",
  },
  {
    title: "Limited Business Visibility",
    desc: "Fragmented enterprise data prevents leadership from accessing accurate, real-time insights for decision-making.",
  },
  {
    title: "Compliance & Governance Risks",
    desc: "Weak controls and inconsistent processes increase financial, operational, and regulatory compliance risks.",
  },
];

const METHODOLOGY = [
  {
    step: "01",
    title: "Assess",
    desc: "We audit existing data infrastructure, systems, and workflows to identify where AI creates the most defensible business value.",
    image:
"/Ai/1.jpg",
  },
  {
    step: "02",
    title: "Design",
    desc: "We architect the target data model and system design, sequenced against technical constraints and business priorities.",
    image:
"/Ai/2.jpg",
  },
  {
    step: "03",
    title: "Build",
    desc: "Engineering teams develop, train, and integrate solutions using agile delivery, with governance checkpoints in every sprint.",
    image:
"/Ai/ai4.jpeg",
  },
  {
    step: "04",
    title: "Deploy",
    desc: "Solutions move to production with monitoring, rollback plans, and performance benchmarks in place from day one.",
    image:
"/Ai/ai1.jpg",
  },
  {
    step: "05",
    title: "Scale & Govern",
    desc: "We establish ongoing monitoring, retraining cycles, and governance reporting so performance holds as usage grows.",
    image:
"/Ai/5.jpg",
  },
];

const INDUSTRIES = [
  {
    title: "Manufacturing",
    image: "/ERPSol/13.jpg",
    desc: "Optimize production planning, inventory management, and end-to-end manufacturing operations.",
  },
  {
    title: "Retail & E-Commerce",
    image: "/ERPSol/11.jpg",
    desc: "Unify inventory, sales, customer engagement, and supply chain operations across all channels.",
  },
  {
    title: "Financial Services",
    image: "/ERPSol/7.jpg",
    desc: "Improve financial management, regulatory reporting, and enterprise governance with integrated solutions.",
  },
  {
    title: "Healthcare",
    image: "/ERPSol/1.jpg",
    desc: "Enhance healthcare operations with secure resource planning, procurement, and compliance management.",
  },
  {
    title: "Logistics & Supply Chain",
    image: "/ERPSol/6.jpg",
    desc: "Streamline warehouse management, transportation, and supply chain operations through connected enterprise systems.",
  },
  {
    title: "Government & Public Sector",
    image: "/ERPSol/2.jpg",
    desc: "Modernize public sector operations with secure, transparent, and citizen-focused enterprise solutions.",
  },
];

const FAQS = [
  {
    q: "Why choose Tec Tha for Enterprise Solutions?",
    a: "Tec Tha delivers end-to-end enterprise solutions that integrate business processes, modernize operations, and improve efficiency through scalable ERP, CRM, HCM, and industry-specific platforms.",
  },
  {
    q: "How long does an enterprise solution implementation typically take?",
    a: "Implementation timelines depend on project scope and business complexity. Individual modules can be delivered within weeks, while enterprise-wide transformations are implemented in phased stages over several months.",
  },
  {
    q: "Can you integrate with our existing business systems?",
    a: "Yes. We seamlessly integrate enterprise solutions with existing ERP systems, databases, third-party applications, and legacy platforms to maximize your technology investments.",
  },
  {
    q: "How do you ensure data security and compliance?",
    a: "We implement role-based access controls, governance frameworks, audit trails, and security best practices aligned with industry standards and regulatory requirements.",
  },
  {
    q: "Do you provide post-implementation support?",
    a: "Yes. We offer ongoing maintenance, performance optimization, user support, system upgrades, and managed services to ensure long-term business success.",
  },
];
const ERPSolutions = () => {
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
    backgroundImage: "url('/ERPSol/9.jpg')",
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
            Enterprise Resource Planning
          </motion.p> <hr className="border-white/40 my-6" />
          <motion.h1 variants={fadeUp} initial="hidden" animate="visible" custom={0.08} className="text-7xl md:text-6xl lg:text-7xl font text-white leading-[1.05]">
            ERP Systems Built for Enterprise.
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

      <h2 className="text-6xl font text-black leading-tight mb-8">
        ERP should mirror your operations —
        <br />
        not force your operations to change.
      </h2>

      <p className="text-gray-600 text-lg leading-9 mb-6 font-['montserrat']">
        Most ERP programs begin with a platform decision and work backward
        toward the business process. We reverse that order. Every engagement
        starts with how your organization actually runs finance, procurement,
        and operations, then works forward to the module design and
        integrations that support it.
      </p>

      <p className="text-gray-600 text-lg leading-9">
        Systems configured around a vendor's default template tend to
        outlive their usefulness. Systems configured around your operating
        model continue to evolve as your business grows.
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
  src="/ERPSol/15.jpg"
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
  src="/ERPSol/10.jpg"
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
        Most enterprises don't have a process problem.
        <br />
        They have a visibility problem.
      </h2>

      <p className="text-gray-600 text-lg leading-9 mb-6">
        Finance, procurement, inventory, and HR each generate their own
        version of the truth, yet decision-makers often reconcile numbers
        manually because systems don't talk to each other in real time.
      </p>

      <p className="text-gray-600 text-lg leading-9">
        Tec Tha treats ERP as enterprise infrastructure. We build unified
        data models, governance frameworks, and integrated workflows that
        organizations can confidently rely on for mission-critical decisions.
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
        starting an ERP transformation initiative.
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
        ERP Advisory
      </p>

      <h2 className="max-w-4xl text-5xl font-light leading-tight text-white md:text-6xl">
        Ready to turn fragmented operations
        <br />
        into one connected system?
      </h2>

      <p className="mt-8 max-w-3xl text-lg leading-9 text-white/70">
        Speak with our ERP advisory team to identify where implementation,
        integration, and governance can create measurable operational
        advantage across your organization.
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
            Explore how ERP Strategy, Implementation, and Integration fit into a single connected roadmap for your organization.
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

export default ERPSolutions;