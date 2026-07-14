import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import PageWrapper from "../components/layout/PageWrapper";
import SectionHeader from "../components/shared/SectionHeader";
import ContactCTA from "../components/home/ContactCTA";
import { summary } from "framer-motion/client";

/**
 * Services — Grid overview · Deep-dive · Process
 * The overview grid is a quick jump menu (scrolls to the matching
 * deep-dive via anchor); the process section is the one place on this
 * page where numbered steps are justified, since it's a real sequence.
 */

const SERVICES = [
  {
    id: "cloud",
    image: "/enterprise-software.jpg",
    title: "Enterprise Software",

    summary:
      "We build enterprise-grade software platforms that streamline operations, modernize legacy systems, and enable organizations to scale securely. From custom ERP and CRM platforms to internal business applications, our solutions are designed for performance, flexibility, and long-term maintainability.",

    deliverTitle: "What We Deliver",

    deliverItems: [
      "Custom ERP Development",
      "CRM Platforms",
      "Inventory Management",
      "Business Automation",
      "Enterprise APIs",
      "SaaS Platforms",
    ],

    benefitsTitle: "Business Benefits",

    benefitItems: [
      "Reduce manual operations",
      "Improve operational visibility",
      "Scale with business growth",
      "Secure enterprise architecture",
    ],
  },
  {
    id: "data",
    image: "/AI Integration & Agentics.jpg",
    title: "AI Integration & Agentics",
    summary:
      "We help organizations integrate artificial intelligence into existing business processes using secure, production-ready AI solutions.From intelligent assistants to workflow automation, we build AI systems that improve productivity while keeping enterprise data protected.",

    deliverTitle: "What We Deliver",

    deliverItems: [
      "AI Assistants",
      "Agentic Workflow Automation",
      "Document Intelligence",
      "Predictive Analytics",
      "Custom LLM Solutions",
      "Knowledge Base Search",
    ],

    benefitsTitle: "Business Benefits",

    benefitItems: [
      " Faster decision making",
      "Reduced manual work",
      "Improved customer support",
      "Smarter business insights",
    ],
    
  },
  {
    id: "ai",
    image: "/Cloud & Infrastructure.jpeg",
    title: "Cloud & Infrastructure",
    summary:
      "Modern cloud infrastructure designed for scalability, resilience,and security. We help businesses migrate, optimize, and manage their cloud environments with automated deployment pipelines and enterprise-grade monitoring.",

    deliverTitle: "What We Deliver",

    deliverItems: [
      "AWS & GCP Architecture",
      "Infrastructure as Code",
      "CI/CD Pipelines",
      "Kubernetes & Docker",
      "Cloud Migration",
      "Monitoring & Backup",
    ],

    benefitsTitle: "Business Benefits",

    benefitItems: [
      "Lower infrastructure costs",
      "Faster deployments",
      "High availability",
      "Better disaster recovery",
    ],
  },
  {
    id: "security",
    image: "/UI UX.webp",
    title: "UI/UX & Product Design",
    summary:
      "Great products begin with exceptional user experiences.Our design team creates intuitive interfaces that combine usability,performance, and accessibility to deliver engaging digital products.",

    deliverTitle: "What We Deliver",

    deliverItems: [
      "UX Research",
      "Wireframing",
      "UI Design Systems",
      "Web Applications",
      "Mobile Experiences",
      "Design Prototyping",
    ],

    benefitsTitle: "Business Benefits",

    benefitItems: [
      "Higher user engagement",
      "Better conversion rates",
      "Consistent brand experience",
      "Improved customer satisfaction",
    ],
  },
  {
    id: "platform",
    image: "/Brand & Demand Strategy.webp",
    title: "Brand & Demand Strategy",
    summary:
      "We help businesses strengthen their market presence through strategic branding and measurable demand generation initiatives.Our approach combines creative storytelling with data-driven marketing.",

    deliverTitle: "What We Deliver",

    deliverItems: [
      "Brand Positioning",
      "Demand Generation",
      "Lead Funnels",
      "Content Strategy",
      "Account-Based Marketing",
      "Campaign Analytics",
    ],

    benefitsTitle: "Business Benefits",

    benefitItems: [
      "Stronger brand recognition",
      "More qualified leads",
      "Higher conversion rates",
      "Sustainable business growth",
    ],
  },
  {
    id: "strategy",
    image: "/Digital Advisory.webp",
    title: "Digital Advisory",
    summary:
      "Technology decisions have long-term business impact.Our advisory services help organizations evaluate systems,identify opportunities, and build practical digital transformation roadmaps aligned with business objectives.",

    deliverTitle: "What We Deliver",

    deliverItems: [
    "Technology Audits",
     "Architecture Reviews",
     "Cloud Cost Optimization",
     "Digital Roadmaps",
     "Security Assessment",
     "Technology Consulting",
    ],

    benefitsTitle: "Business Benefits",

    benefitItems: [
      "Reduced operational risk",
      "Better technology investments",
      "Improved system performance",
      "Long-term scalability",
    ],
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Business Discovery & Consultation",
    description:
      "Every successful digital transformation begins with understanding the business. Our consultants work closely with your stakeholders to identify operational challenges, business objectives, technical limitations, and growth opportunities before recommending any technology solution.",

    deliverables: [
      "Business Requirement Analysis",
      "Stakeholder Discovery Workshops",
      "Current System Assessment",
      "Risk & Opportunity Analysis",
      "Technology Readiness Evaluation",
    ],
  },

  {
    step: "02",
    title: "Solution Architecture & Planning",
    description:
      "Based on our findings, we design a scalable technology roadmap tailored to your business. We define the system architecture, select the right technologies, establish project milestones, and prepare a detailed implementation strategy focused on long-term success.",

    deliverables: [
      "Enterprise Solution Architecture",
      "Technology Stack Selection",
      "Implementation Roadmap",
      "Project Timeline & Milestones",
      "Security & Compliance Planning",
    ],
  },

  {
    step: "03",
    title: "Development & Quality Engineering",
    description:
      "Our engineering teams build secure, scalable, and maintainable software using agile methodologies. Every development cycle includes continuous integration, automated testing, code reviews, and regular client demonstrations to ensure transparency throughout the project.",

    deliverables: [
      "Agile Sprint Development",
      "Continuous Integration & Deployment",
      "Quality Assurance Testing",
      "Performance Optimization",
      "Security Validation",
    ],
  },

  {
    step: "04",
    title: "Deployment, Support & Continuous Growth",
    description:
      "After successful deployment, our engagement continues through proactive monitoring, technical support, knowledge transfer, and continuous optimization. We ensure your technology evolves alongside your business needs.",

    deliverables: [
      "Production Deployment",
      "User Training & Documentation",
      "Performance Monitoring",
      "Ongoing Technical Support",
      "Continuous Product Enhancement",
    ],
  },
];
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
  }),
};

const Services = () => {
  return (
    <PageWrapper
      title="Services"
      description="Cloud, data, AI, security, platform engineering, and digital strategy consulting."
    >
      {/* Intro */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <motion.span
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={0}
            className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-brand-600)] dark:text-[color:var(--color-brand-400)]"
          >
            Services
          </motion.span>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={0.08}
            className="mt-5 text-[clamp(2.25rem,4.5vw,3.75rem)] font-bold leading-[1.05] tracking-tight text-[color:var(--color-text-primary)]"
          >
            Bespoke Enterprise Services
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={0.16}
            className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-[color:var(--color-text-secondary)]"
          >
           We design, develop, deploy, and verify complex technical systems for global operations.
          </motion.p>
        </div>
      </section>

      {/* Overview grid — jumps to the matching deep-dive below */}
      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, i) => {
              return (
                <motion.a
                  key={service.id}
                  href={`#${service.id}`}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  custom={(i % 3) * 0.08}
                  className="group relative flex flex-col overflow-hidden rounded-[28px] border border-[color:var(--color-border)] bg-[color:var(--color-bg-card)] shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-all duration-500 ease-out hover:-translate-y-2 hover:border-[color:var(--color-brand-500)]/40 hover:shadow-[0_32px_64px_-24px_rgba(37,99,235,0.28)]"
                >
                  {/* Landscape image area — ~68% of card height */}
                  <div className="relative aspect-[16/9] w-full overflow-hidden">
                       <img
                           src={service.image}
                           alt={service.title}
                          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                        />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent"></div>
                </div>

                  {/* Text content — remaining ~32% of card height */}
                  <div className="flex flex-1 flex-col justify-between p-8">
                    <div>
                      <h3 className="text-xl font-semibold leading-snug text-[color:var(--color-text-primary)]">
                        {service.title}
                      </h3>
                      <p className="mt-3 text-[15px] leading-relaxed text-[color:var(--color-text-secondary)]">
                        {service.summary}
                      </p>
                    </div>

                    <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--color-text-primary)]">
                      Learn more
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </span>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Deep-dive sections */}
      <section className="bg-[color:var(--color-bg-secondary)] py-20 md:py-28">
        <div className="mx-auto max-w-5xl space-y-6 px-6">
          {SERVICES.map((service, i) => {
            return (
              <motion.article
                key={service.id}
                id={service.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                custom={0}
                className="scroll-mt-28 rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-bg-card)] p-8 md:p-10"
              >
                <div className="flex flex-col gap-8 md:flex-row md:items-start">
                  <div className="h-24 w-40 shrink-0 overflow-hidden rounded-2xl">
                     <img
                         src={service.image}
                         alt={service.title}
                       className="h-full w-full object-cover"/>
                 </div>
                  <div>
                    <h2 className="text-2xl font-semibold text-[color:var(--color-text-primary)]">
                      {service.title}
                    </h2>
                    <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-[color:var(--color-text-secondary)]">
                      {service.summary}
                    </p>
                    <p className="mt-4 text-lg font-semibold">
  {service.deliverTitle}
</p>

<ul className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
  {service.deliverItems?.map((item) => (
    <li
      key={item}
      className="flex items-start gap-2.5 text-sm"
    >
      <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
      {item}
    </li>
  ))}
</ul>

<p className="mt-8 text-lg font-semibold">
  {service.benefitsTitle}
</p>

<ul className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
  {service.benefitItems?.map((item) => (
    <li
      key={item}
      className="flex items-start gap-2.5 text-sm"
    >
      <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
      {item}
    </li>
  ))}
</ul>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* Process — numbered steps are justified here: it's a real sequence */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeader overline="Our Delivery Methodology" title="A Proven Process for Delivering Enterprise Technology Solutions"
           subtitle="From initial consultation to long-term support, our structured engagement model ensures every project is delivered with transparency, technical excellence, and measurable business value."
           align="left"
           />

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-4">
            {PROCESS.map((phase, i) => (
              <motion.div
                key={phase.step}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                custom={i * 0.1}
                className="relative rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-bg-card)] p-7"
              >
                <span className="text-3xl font-bold tracking-tight text-[color:var(--color-brand-500)]/40">
                  {phase.step}
                </span>
                <h3 className="mt-5 text-lg font-semibold text-[color:var(--color-text-primary)]">
                  {phase.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-[color:var(--color-text-secondary)]">
                  {phase.description}
                </p>
                <div className="mt-6">
  <h4 className="text-sm font-semibold uppercase tracking-wider text-[color:var(--color-brand-600)]">
    Deliverables
  </h4>

  <ul className="mt-4 space-y-3">
    {phase.deliverables.map((item) => (
      <li
        key={item}
        className="flex items-center gap-3 text-sm text-[color:var(--color-text-secondary)]"
      >
        <Check className="h-4 w-4 shrink-0 text-[color:var(--color-brand-600)]" />
        {item}
      </li>
    ))}
  </ul>
</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </PageWrapper>
  );
};

export default Services;