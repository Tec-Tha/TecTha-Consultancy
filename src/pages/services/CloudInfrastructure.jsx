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
    title: "Cloud Strategy",
    short:
      "Develop cloud adoption strategies and transformation roadmaps aligned with business goals and long-term scalability.",
    image: "/cloud/29.avif",
    tags: ["Strategy", "Roadmap", "Consulting"],
    link: "/services/CloudService/cloud-strategy",
  },
  {
    id: 2,
    title: "Cloud Engineering",
    short:
      "Design, build, and modernize cloud-native infrastructure with secure, resilient, and high-performing architectures.",
    image: "/cloud/30.avif",
    tags: ["Architecture", "Migration", "Engineering"],
    link: "/services/CloudService/cloud-engineering",
  },
  {
    id: 3,
    title: "Cloud Migration",
    short:
      "Seamlessly migrate applications, workloads, and data to the cloud with minimal disruption and maximum reliability.",
    image: "/cloud/31.avif",
    tags: ["AWS", "Azure", "GCP"],
    link: "/services/CloudService/cloud-migration",
  },
  {
    id: 4,
    title: "Platform Engineering",
    short:
      "Accelerate software delivery through automated platforms, infrastructure as code, and developer self-service.",
    image: "/cloud/30.avif",
    tags: ["CI/CD", "IaC", "Automation"],
    link: "/services/CloudService/platform-engineering",
  },
  {
    id: 5,
    title: "DevOps",
    short:
      "Improve release speed and operational reliability with automated pipelines, continuous integration, and monitoring.",
    image: "/cloud/28.avif",
    tags: ["CI/CD", "DevSecOps", "Monitoring"],
    link: "/services/CloudService/devops",
  },
  {
    id: 6,
    title: "Managed Cloud",
    short:
      "Optimize cloud operations with proactive monitoring, cost management, security, and 24/7 managed support.",
    image: "/cloud/33.avif",
    tags: ["Security", "Cost Optimization", "Support"],
    link: "/services/CloudService/managed-cloud",
  },
];


const CHALLENGES = [
  {
    title: "Limited Scalability",
    desc: "Legacy infrastructure and rigid architectures struggle to support business growth, increasing operational complexity and reducing agility.",
  },
  {
    title: "Uncontrolled Cloud Costs",
    desc: "Poor resource visibility and inefficient provisioning lead to rising cloud expenses without effective governance or optimization.",
  },
  {
    title: "Complex Cloud Migrations",
    desc: "Application dependencies, legacy systems, and compliance requirements often delay migration projects and increase business risk.",
  },
  {
    title: "Slow Software Delivery",
    desc: "Manual deployment processes and fragmented workflows reduce release speed while increasing the likelihood of production failures.",
  },
  {
    title: "Security & Compliance Risks",
    desc: "Inconsistent security controls across hybrid and multi-cloud environments create vulnerabilities and compliance challenges.",
  },
  {
    title: "Operational Silos",
    desc: "Disconnected teams and inconsistent infrastructure management result in reduced visibility, governance, and operational efficiency.",
  },
];

const METHODOLOGY = [
  {
    step: "01",
    title: "Assess & Discover",
    desc: "Evaluate existing infrastructure, applications, and business objectives to define a secure and scalable cloud transformation strategy.",
    image: "/cloud/31.avif",
  },
  {
    step: "02",
    title: "Design Architecture",
    desc: "Create resilient cloud architectures with security, scalability, and performance aligned to organizational requirements.",
    image: "/cloud/35.avif",
  },
  {
    step: "03",
    title: "Migrate & Modernize",
    desc: "Execute structured migration plans using proven methodologies that minimize downtime and reduce operational risk.",
    image: "/cloud/36.avif",
  },
  {
    step: "04",
    title: "Automate & Deploy",
    desc: "Implement CI/CD pipelines, Infrastructure as Code, and automated monitoring to accelerate software delivery.",
    image: "/cloud/37.avif",
  },
  {
    step: "05",
    title: "Optimize & Manage",
    desc: "Continuously improve cloud performance through cost optimization, governance, security monitoring, and operational support.",
    image: "/cloud/38.avif",
  },
];

const INDUSTRIES = [
  {
    title: "Financial Services",
    image: "/cloud/40.avif",
    desc: "Secure and highly available cloud platforms for banking, insurance, and financial operations.",
  },
  {
    title: "Manufacturing",
    image: "/cloud/39.avif",
    desc: "Cloud-enabled production systems supporting smart factories, IoT, and operational efficiency.",
  },
  {
    title: "Healthcare",
    image: "/cloud/32.avif",
    desc: "Compliant cloud environments that protect patient data while enabling connected healthcare services.",
  },
  {
    title: "Retail & E-Commerce",
    image: "/cloud/17.avif",
    desc: "Scalable cloud infrastructure designed to deliver seamless customer experiences during peak demand.",
  },
  {
    title: "Logistics & Supply Chain",
    image: "/cloud/34.avif",
    desc: "Reliable cloud solutions for real-time fleet management, warehouse operations, and supply chain visibility.",
  },
  {
    title: "Government & Public Sector",
    image: "/cloud/33.avif",
    desc: "Secure, compliant, and resilient digital infrastructure supporting modern public services and citizen engagement.",
  },
];

const FAQS = [
  {
    q: "Why choose Tec Tha for cloud infrastructure services?",
    a: "Tec Tha delivers vendor-neutral cloud solutions tailored to your business objectives. We combine cloud strategy, engineering, security, and governance to build scalable, resilient, and cost-efficient cloud environments.",
  },
  {
    q: "How long does a cloud migration typically take?",
    a: "Migration timelines depend on workload complexity and business requirements. Smaller projects can be completed within a few weeks, while enterprise-scale transformations are delivered in phased stages over several months.",
  },
  {
    q: "Can you integrate with our existing infrastructure?",
    a: "Yes. We integrate seamlessly with existing on-premises systems, legacy applications, and hybrid cloud environments while minimizing disruption to business operations.",
  },
  {
    q: "How do you ensure cloud security and compliance?",
    a: "Security is embedded throughout the cloud lifecycle with identity management, encryption, continuous monitoring, compliance controls, and governance aligned to industry standards.",
  },
  {
    q: "Do you provide ongoing cloud management and support?",
    a: "Yes. Our managed cloud services include proactive monitoring, performance optimization, cost management, security operations, and continuous support to ensure long-term reliability.",
  },
];

const CloudInfrastructure = () => {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="min-h-screen w-full bg-white text-black font-['Montserrat'] overflow-x-hidden">
      <ServiceNavbar />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-start px-4 sm:px-6 md:px-10 overflow-hidden">
        <>
  {/* Background Image */}
  <motion.div
  className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat bg-fixed"
  style={{
    backgroundImage: "url('/cloud/26.avif')",
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
        <div className="relative w-full max-w-[1200px] mx-auto">
          <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={0} className="-mt-10 sm:-mt-14 lg:-mt-20 text-base sm:text-lg lg:text-xl font uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-4 sm:mb-6 font-['Montserrat'] text-white">
            Cloud Infrastructure
          </motion.p> <hr className="border-white/40 my-4 sm:my-6" />
          <motion.h1 variants={fadeUp} initial="hidden" animate="visible" custom={0.08} className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font text-white leading-[1.15] sm:leading-[1.1] lg:leading-[1.05]">
            Infrastructure Built for the Enterprise Cloud.
          </motion.h1>
          <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={0.16} className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed mb-6 sm:mb-10">
            {/* incase add description use this block */}
          </motion.p>
        </div>
      </section>

      
      {/* Enterprise Vision */}
<section className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 md:px-10 bg-white relative overflow-hidden">
  <div className="absolute top-0 right-0 h-64 w-64 sm:h-96 sm:w-96 rounded-full bg-blue-100 blur-[80px] sm:blur-[120px] opacity-40"></div>

  <div className="w-full max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-20 items-center">

    {/* Left Content */}
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <p className="text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] text-blue-600 mb-4 sm:mb-6 font-semibold">
        Infrastructure Vision
      </p>

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font text-black leading-tight mb-6 sm:mb-8">
        Infrastructure should adapt to the business —
        <br className="hidden sm:block" />
        not the other way around.
      </h2>

      <p className="text-gray-600 text-base sm:text-lg leading-7 sm:leading-9 mb-4 sm:mb-6 font-['montserrat']">
        Most cloud programs begin with a platform decision and work backward
        toward the business problem. We reverse that order. Every engagement
        starts with how your workloads actually need to run, then works
        forward to the architecture and automation that support them.
      </p>

      <p className="text-gray-600 text-base sm:text-lg leading-7 sm:leading-9">
        Environments built around a single vendor's roadmap tend to outlive
        their usefulness. Environments built around your operating model
        continue to evolve as your business grows.
      </p>
    </motion.div>

    {/* Right Image */}
    <motion.div
      initial={{ opacity: 0, x: 80, scale: 1.08 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="relative w-full"
    >
      {/* Replace this div with <img> later */}
      <img
  src="/cloud/27.avif"
  alt="Infrastructure Vision"
  className="h-[260px] sm:h-[380px] md:h-[500px] lg:h-[650px] w-full rounded-2xl sm:rounded-[32px] object-cover"
/>

    </motion.div>

  </div>
</section>



{/* Business Reality */}
<section className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 md:px-10 bg-[#F8FAFC] relative overflow-hidden">

  <div className="absolute bottom-0 left-0 h-64 w-64 sm:h-96 sm:w-96 rounded-full bg-cyan-100 blur-[80px] sm:blur-[120px] opacity-40"></div>

  <div className="w-full max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-20 items-center">

    {/* Left Image */}
    <motion.div
      initial={{ opacity: 0, x: -80, scale: 1.08 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="relative w-full order-2 lg:order-1"
    >
      <img
  src="/cloud/28.avif"
  alt="Infrastructure Reality"
  className="h-[260px] sm:h-[380px] md:h-[500px] lg:h-[650px] w-full rounded-2xl sm:rounded-[32px] object-cover"
/>

  
    </motion.div>

    {/* Right Content */}
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="order-1 lg:order-2"
    >
      <p className="text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] text-blue-600 mb-4 sm:mb-6 font">
        Business Reality
      </p>

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font text-black leading-tight mb-6 sm:mb-8">
        Most enterprises don't have a capacity problem.
        <br className="hidden sm:block" />
        They have a reliability problem.
      </h2>

      <p className="text-gray-600 text-base sm:text-lg leading-7 sm:leading-9 mb-4 sm:mb-6">
        Enterprises today run more workloads than at any point in history,
        yet outages, cost overruns, and slow releases persist because
        infrastructure is inconsistent, undocumented, or fragmented across
        disconnected environments.
      </p>

      <p className="text-gray-600 text-base sm:text-lg leading-7 sm:leading-9">
        Tec Tha treats cloud infrastructure as enterprise-critical.
        We build resilient architectures, automated pipelines, and governed
        environments that organizations can confidently rely on for
        mission-critical operations.
      </p>

    </motion.div>

  </div>
</section>

  
{/* Executive Challenges */}
<section className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 md:px-10 bg-black">
  <div className="w-full max-w-[1400px] mx-auto">

    {/* Heading */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mb-10 sm:mb-14 lg:mb-20"
    >
      <p className="text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.35em] text-blue-500 font-semibold mb-3 sm:mb-4">
        Executive Challenges
      </p>

      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-light leading-tight max-w-6xl">
        The problems we're most often
        <br className="hidden sm:block" />
        brought in to solve.
      </h2>
    </motion.div>

    {/* Cards */}
    <div className="space-y-4 sm:space-y-5 lg:space-y-6">

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
          className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl transition-all duration-500 hover:border-blue-500/40 hover:bg-white/[0.06]"
        >

          <div className="grid grid-cols-[48px_1fr] sm:grid-cols-[70px_1fr] md:grid-cols-[120px_1fr_60px] items-start sm:items-center px-5 sm:px-7 md:px-10 py-6 sm:py-8 md:py-10 gap-4 sm:gap-6 md:gap-8">

            {/* Number */}
            <div className="text-2xl sm:text-3xl md:text-5xl font-bold text-white/15 group-hover:text-blue-400 transition-all duration-500">
              0{index + 1}
            </div>

            {/* Content */}
            <div>

              <h3 className="text-xl sm:text-2xl md:text-3xl text-white font-medium mb-2 sm:mb-3">
                {item.title}
              </h3>

              <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-6 sm:leading-7 md:leading-8 max-w-4xl">
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

     <section className="bg-white py-16 sm:py-20 lg:py-24">

  <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">

    <p className="uppercase tracking-[0.2em] sm:tracking-[0.35em] text-blue-500 text-xs sm:text-sm font-semibold mb-3 sm:mb-5">
      Infrastructure Capabilities
    </p>

    <h2 className="text-3xl sm:text-4xl lg:text-5xl text-black font-light mb-8 sm:mb-12 lg:mb-16">
      Six disciplines, one connected practice.
    </h2>

    <div className="group/cards flex gap-4 sm:gap-5 lg:gap-7 overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">

      {CAPABILITIES.map((service, i) => (

        <motion.div
          key={service.id}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={i * 0.08}
          className="min-w-[78vw] sm:min-w-[330px] flex-shrink-0 snap-start lg:min-w-[32%]"
        >

          <Link
            to={service.link}
            className="group relative block h-[420px] sm:h-[500px] md:h-[580px] lg:h-[650px] overflow-hidden transition-all duration-700 hover:scale-105"
          >

            <img
              src={service.image}
              alt={service.title}
              className="absolute inset-0 h-full w-full object-cover brightness-50 group-hover:brightness-100 group-hover:scale-110 transition duration-700"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40"/>

            <div className="absolute bottom-0 p-5 sm:p-6 lg:p-8 text-white">

              <h3 className="text-2xl sm:text-3xl lg:text-4xl mb-2 sm:mb-3 lg:mb-4">
                {service.title}
              </h3>

              <p className="text-white/80 text-sm sm:text-base">
                {service.short}
              </p>

              <div className="flex flex-wrap gap-2 mt-4 sm:mt-5 lg:mt-6">

                {service.tags.map(tag=>(
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full border border-white/20 bg-white/10 text-xs"
                  >
                    {tag}
                  </span>
                ))}

              </div>

              <div className="mt-6 sm:mt-7 lg:mt-8 flex items-center gap-2 text-sm sm:text-base font-semibold">
                Explore Service
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5"/>
              </div>

            </div>

          </Link>

        </motion.div>

      ))}

    </div>

  </div>

</section>


      {/* Industry Solutions */}
      <section className="bg-white py-16 sm:py-20 lg:py-28">

  <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">

    <p className="uppercase tracking-[0.2em] sm:tracking-[0.35em] text-blue-600 text-xs sm:text-sm font-semibold mb-3 sm:mb-5">
      Industry Solutions
    </p>

    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-slate-900 max-w-3xl mb-10 sm:mb-14 lg:mb-20">
      Context matters. We build for your industry's constraints.
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-6 sm:gap-x-10 gap-y-10 sm:gap-y-14 lg:gap-y-20">

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
          <div className="overflow-hidden rounded-lg sm:rounded-none">

            <img
              src={industry.image}
              alt={industry.title}
              className="h-[180px] sm:h-[220px] lg:h-[260px] w-full object-cover transition duration-700 group-hover:scale-110"
            />

          </div>

          {/* Content */}

          <h3 className="mt-5 sm:mt-6 lg:mt-8 text-2xl sm:text-3xl lg:text-4xl font-light text-slate-900">
            {industry.title}
          </h3>

          <p className="mt-3 sm:mt-4 lg:mt-5 text-base sm:text-lg leading-7 sm:leading-9 text-slate-600">
            {industry.desc}
          </p>

        </motion.div>

      ))}

    </div>

  </div>

</section>

      {/* Delivery Framework */}
      <section className="bg-black py-20 sm:py-24 lg:py-32">

  <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">

    {/* Heading */}

    <p className="uppercase tracking-[0.2em] sm:tracking-[0.35em] text-blue-500 text-xs sm:text-sm font-semibold mb-3 sm:mb-5">
      Delivery Framework
    </p>

    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white max-w-3xl mb-12 sm:mb-16 lg:mb-24">
      A structured path from assessment to scale.
    </h2>

    <div className="space-y-16 sm:space-y-24 lg:space-y-32">

      {METHODOLOGY.map((item, index) => (

        <motion.div
          key={item.step}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: index * 0.1 }}
          className="border-b border-white/10 pb-12 sm:pb-16 lg:pb-24"
        >

          {/* Image */}

          <div className="overflow-hidden rounded-lg sm:rounded-none">

            <img
              src={item.image}
              alt={item.title}
              className="h-[220px] sm:h-[340px] md:h-[420px] lg:h-[520px] w-full object-cover transition duration-700 hover:scale-105"
            />

          </div>

          {/* Content */}

          <div className="mt-6 sm:mt-9 lg:mt-12">

            <span className="text-[44px] sm:text-[64px] lg:text-[90px] font-bold text-white/10">
              {item.step}
            </span>

            <h3 className="mt-2 sm:mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white">
              {item.title}
            </h3>

            <p className="mt-4 sm:mt-6 lg:mt-8 max-w-3xl text-base sm:text-lg leading-7 sm:leading-9 text-white/70">
              {item.desc}
            </p>

          </div>

        </motion.div>

      ))}

    </div>

  </div>

</section>

      {/* FAQs */}
      <section className="bg-white py-20 sm:py-24 lg:py-32">

  <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-10 sm:gap-14 lg:gap-24">

    {/* LEFT */}

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="lg:sticky lg:top-28 h-fit"
    >
      <p className="uppercase tracking-[0.2em] sm:tracking-[0.35em] text-blue-600 text-xs sm:text-sm font-semibold mb-3 sm:mb-5">
        Frequently Asked Questions
      </p>

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light leading-tight text-slate-900">
        Common questions
        <br className="hidden sm:block" />
        from enterprise
        <br className="hidden sm:block" />
        leaders.
      </h2>

      <p className="mt-5 sm:mt-6 lg:mt-8 text-base sm:text-lg leading-7 sm:leading-8 text-slate-500">
        Everything enterprise teams usually ask before
        starting a cloud infrastructure initiative.
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
          className="border-b border-slate-200 py-5 sm:py-6 lg:py-8"
        >

          <button
            onClick={() =>
              setOpenFaq(openFaq === index ? null : index)
            }
            className="w-full flex justify-between items-start gap-4 sm:gap-6 lg:gap-10 text-left group"
          >

            <div className="flex gap-4 sm:gap-6 lg:gap-8">

              <span className="text-blue-600 font-semibold text-base sm:text-lg w-6 sm:w-8 shrink-0">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="text-lg sm:text-xl lg:text-2xl font-light leading-snug text-slate-900 group-hover:text-blue-600 transition">
                {faq.q}
              </h3>

            </div>

            <div
              className={`shrink-0 transition duration-300 ${
                openFaq === index
                  ? "rotate-180"
                  : ""
              }`}
            >
              <ChevronDown className="h-5 w-5 sm:h-6 sm:w-6" />
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

            <div className="pl-10 sm:pl-14 lg:pl-16 pr-2 sm:pr-6 lg:pr-8 pt-4 sm:pt-6">

              <p className="text-slate-600 leading-7 sm:leading-8 lg:leading-9 text-base sm:text-lg max-w-3xl">
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
      <section className="relative overflow-hidden bg-black py-20 sm:py-24 lg:py-32">

  {/* Background Glow */}
  <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] lg:h-[500px] lg:w-[500px] -translate-x-1/2 -translate-y-1/2  bg-blue-600/10 blur-[100px] sm:blur-[140px] lg:blur-[180px]" />

  <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6">

    <div className="border border-white/10 bg-gradient-to-br from-white/[0.03] to-white/[0.01] p-6 sm:p-10 md:p-14 lg:p-20 backdrop-blur-xl">

      <p className="mb-3 sm:mb-4 lg:mb-5 uppercase tracking-[0.2em] sm:tracking-[0.35em] text-xs sm:text-sm font-semibold text-blue-500">
        Cloud Infrastructure Advisory
      </p>

      <h2 className="max-w-4xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-white">
        Ready to turn infrastructure
        <br className="hidden sm:block" />
        into a competitive advantage?
      </h2>

      <p className="mt-5 sm:mt-6 lg:mt-8 max-w-3xl text-base sm:text-lg leading-7 sm:leading-9 text-white/70">
        Speak with our cloud advisory team to identify where migration,
        automation, and modern architecture can create measurable business
        value across your organization.
      </p>

      <div className="mt-8 sm:mt-10 lg:mt-12 flex flex-wrap gap-4 sm:gap-6">

        <Link
          to="/contact"
          className="inline-flex items-center gap-2 sm:gap-3 rounded-full bg-white px-6 sm:px-7 lg:px-8 py-3 sm:py-3.5 lg:py-4 text-sm sm:text-base font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-slate-100"
        >
          Schedule a Consultation
          <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
        </Link>

        <Link
          to="/services"
          className="inline-flex items-center gap-2 sm:gap-3 rounded-full border border-white/20 px-6 sm:px-7 lg:px-8 py-3 sm:py-3.5 lg:py-4 text-sm sm:text-base font-medium text-white transition-all duration-300 hover:border-blue-500 hover:bg-white/5"
        >
          Explore Services
        </Link>

      </div>

    </div>

  </div>

</section>

      {/* Footer CTA */}
      <section className="py-10 sm:py-12 lg:py-16 px-4 sm:px-6 md:px-10 border-t border-white/10 bg-white/[0.02]">
        <div className="w-full max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 text-center md:text-left">
          <p className="text-gray-400 text-sm sm:text-base max-w-md">
            Explore how Cloud Migration, Multi-Cloud Architecture, and DevOps Automation fit into a single connected roadmap for your organization.
          </p>
          <Link to="/services" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 sm:px-6 py-2.5 sm:py-3 text-sm font-semibold text-white hover:bg-white/5 transition-colors shrink-0">
            View all services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CloudInfrastructure;