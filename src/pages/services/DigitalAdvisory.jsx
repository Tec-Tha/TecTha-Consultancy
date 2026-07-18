import PageWrapper from "../../components/layout/PageWrapper";
import ServiceDetailLayout from "../../components/services/ServiceDetailLayout";
import {
  Rocket,
  Lightbulb,
  Cloud,
  ShieldCheck,
  Workflow,
  Compass,
  ClipboardList,
  GitBranch,
  Target,
  Award,
  TrendingUp,
  Headphones,
  Stethoscope,
  Landmark,
  ShoppingCart,
  Factory,
  Truck,
  GraduationCap,
} from "lucide-react";

const data = {
  hero: {
    eyebrow: "Digital Advisory",
    image: "/Digital Advisory.webp",
    title: "The strategy layer before you commit to a build",
    subtitle:
      "Independent technology and transformation consulting for leadership teams making decisions that are expensive to get wrong.",
    description:
      "We help you decide what to build, buy, or retire — with a roadmap grounded in your actual constraints, not a generic maturity framework.",
  },
  overview: {
    heading: "Advisory before architecture",
    intro:
      "The biggest technology mistakes aren't coding mistakes — they're strategy mistakes made before a single line of code gets written. That's the gap advisory closes.",
    whyNeeded:
      "Leadership teams are often choosing between competing technology investments with incomplete information. An independent advisory engagement brings structure, evidence, and outside perspective to that decision.",
    businessValue:
      "Clients typically avoid one or more costly false starts per year — a platform migration, vendor contract, or security gap identified before it turned into a six-figure mistake.",
    useCases: [
      "Evaluating build-vs-buy decisions before a major platform investment",
      "Assessing cybersecurity posture ahead of a compliance deadline or audit",
      "Creating a multi-year technology roadmap tied to business objectives",
      "Auditing and optimizing business processes before automating them",
    ],
  },
  features: [
    { icon: Rocket, title: "Digital Transformation", description: "Structured roadmaps for modernizing legacy systems and processes." },
    { icon: Lightbulb, title: "Technology Consulting", description: "Independent guidance on platform, vendor, and architecture decisions." },
    { icon: Cloud, title: "Cloud Consulting", description: "Cloud readiness assessments and migration strategy before commitment." },
    { icon: ShieldCheck, title: "Cybersecurity Strategy", description: "Risk assessments and security roadmaps aligned to compliance needs." },
    { icon: Workflow, title: "Business Process Optimization", description: "Mapping and streamlining processes before automating them." },
    { icon: Compass, title: "Innovation Roadmap", description: "A prioritized, realistic plan for where technology investment goes next." },
  ],
  techStack: [
    { icon: ClipboardList, name: "TOGAF" },
    { icon: GitBranch, name: "Agile / Scrum" },
    { icon: ShieldCheck, name: "NIST / ISO 27001" },
    { icon: Target, name: "Six Sigma" },
    { icon: Compass, name: "ITIL" },
    { icon: Cloud, name: "Cloud Well-Architected Frameworks" },
  ],
  industries: [
    { icon: Stethoscope, name: "Healthcare", description: "Technology roadmaps aligned to HIPAA and evolving care-delivery models." },
    { icon: Landmark, name: "Finance", description: "Risk and compliance-driven advisory for regulated financial institutions." },
    { icon: ShoppingCart, name: "Retail", description: "Omnichannel technology strategy across digital and physical operations." },
    { icon: Factory, name: "Manufacturing", description: "Advisory on Industry 4.0 adoption and legacy system modernization." },
    { icon: Truck, name: "Logistics", description: "Technology strategy for real-time visibility across complex supply chains." },
    { icon: GraduationCap, name: "Education", description: "Digital transformation roadmaps for institutions modernizing at scale." },
  ],
  process: [
    { step: "01", title: "Discovery", description: "We assess current technology, processes, and strategic priorities." },
    { step: "02", title: "Planning", description: "Findings are synthesized into a prioritized set of recommendations." },
    { step: "03", title: "Design", description: "A detailed roadmap with timelines, costs, and risk tradeoffs is built." },
    { step: "04", title: "Development", description: "We support your team in executing against the roadmap where needed." },
    { step: "05", title: "Testing", description: "Pilot initiatives are validated before full-scale investment." },
    { step: "06", title: "Deployment", description: "Recommendations are rolled out with clear ownership and milestones." },
    { step: "07", title: "Support", description: "Periodic advisory check-ins as the roadmap plays out." },
  ],
  whyChooseUs: [
    { icon: Award, title: "Expertise", description: "Advisors who've guided transformation programs across multiple industries." },
    { icon: TrendingUp, title: "Scalability", description: "Roadmaps built to hold up as your organization grows and changes." },
    { icon: ShieldCheck, title: "Security", description: "Risk and compliance built into every recommendation, not addressed later." },
    { icon: Headphones, title: "Support", description: "Ongoing advisory access as decisions and priorities shift." },
  ],
  faqs: [
    { q: "Are you vendor-neutral?", a: "Yes. We have no reseller agreements or platform partnerships that would bias a recommendation — advice is based on your constraints, not a vendor incentive." },
    { q: "Do you also implement the recommendations, or just advise?", a: "Both are available. Many clients start with advisory and bring us back to implement, but you're never obligated to." },
    { q: "How long does a typical advisory engagement take?", a: "Assessments typically run 3-6 weeks; full roadmap engagements with stakeholder workshops can run 8-12 weeks." },
    { q: "What size organization do you typically work with?", a: "Primarily mid-market and enterprise organizations making technology investment decisions with real budget and risk at stake." },
    { q: "Can you help us prepare for a compliance audit?", a: "Yes — we regularly conduct readiness assessments ahead of SOC 2, HIPAA, or ISO 27001 audits and build remediation roadmaps." },
  ],
};

const DigitalAdvisory = () => (
  <PageWrapper
    title="Digital Advisory"
    description="Strategic consulting for scalable digital transformation."
    showServiceNavbar={true}
  >
    <ServiceDetailLayout data={data} currentServiceId="strategy" />
  </PageWrapper>
);

export default DigitalAdvisory;