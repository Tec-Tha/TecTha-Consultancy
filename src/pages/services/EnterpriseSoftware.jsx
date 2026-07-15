import PageWrapper from "../../components/layout/PageWrapper";
import ServiceDetailLayout from "../../components/services/ServiceDetailLayout";
import {
  Layers,
  Users,
  Workflow,
  Plug,
  Rocket,
  BarChart3,
  Database,
  Server,
  Code2,
  GitBranch,
  Boxes,
  Terminal,
  Stethoscope,
  Landmark,
  ShoppingCart,
  Factory,
  Truck,
  GraduationCap,
  Award,
  TrendingUp,
  ShieldCheck,
  Headphones,
} from "lucide-react";

const data = {
  hero: {
    eyebrow: "Enterprise Software",
    image: "/enterprise-software.jpg",
    title: "Software built around how your business actually runs",
    subtitle:
      "Custom ERP, CRM, and workflow platforms engineered for scale, security, and the specific way your teams work.",
    description:
      "We replace brittle spreadsheets and off-the-shelf software that almost fits with systems designed around your real processes — from order management to compliance reporting.",
  },
  overview: {
    heading: "Enterprise software, built to fit",
    intro:
      "Off-the-shelf platforms force your business to adapt to their workflow. We build the reverse: systems shaped around your operations, data, and compliance requirements.",
    whyNeeded:
      "As organizations grow, generic tools stop scaling — duplicate data entry, disconnected systems, and manual reconciliation start costing real time and money. Purpose-built software removes that friction at the source.",
    businessValue:
      "Clients typically consolidate three to six disconnected tools into a single platform, cutting manual admin work and giving leadership one accurate view of the business instead of five conflicting ones.",
    useCases: [
      "Unifying finance, inventory, and order data into one ERP core",
      "Custom CRM tuned to a specific sales motion and deal structure",
      "Automating approval chains that used to run through email",
      "Connecting legacy systems via API instead of replacing them outright",
    ],
  },
  features: [
    { icon: Layers, title: "ERP", description: "Centralized finance, inventory, and operations on one platform." },
    { icon: Users, title: "CRM", description: "Pipeline, account, and customer data modeled around your sales process." },
    { icon: Workflow, title: "Workflow Automation", description: "Approval chains and handoffs that used to live in email, now automatic." },
    { icon: Plug, title: "API Integration", description: "Clean integration with the legacy and third-party systems you already run." },
    { icon: Rocket, title: "SaaS Platforms", description: "Multi-tenant products built to onboard customers, not just employees." },
    { icon: BarChart3, title: "Business Intelligence", description: "Dashboards and reporting drawn straight from operational data." },
  ],
  techStack: [
    { icon: Code2, name: "Node.js / TypeScript" },
    { icon: Database, name: "PostgreSQL" },
    { icon: Server, name: "AWS / Azure" },
    { icon: GitBranch, name: "GraphQL" },
    { icon: Boxes, name: "Docker" },
    { icon: Terminal, name: "CI/CD Pipelines" },
  ],
  industries: [
    { icon: Stethoscope, name: "Healthcare", description: "Patient records, scheduling, and billing systems built for HIPAA compliance." },
    { icon: Landmark, name: "Finance", description: "Core banking, reconciliation, and reporting platforms with audit trails." },
    { icon: ShoppingCart, name: "Retail", description: "Inventory, POS, and order management unified across channels." },
    { icon: Factory, name: "Manufacturing", description: "Production planning and shop-floor systems tied to real-time inventory." },
    { icon: Truck, name: "Logistics", description: "Fleet, warehouse, and dispatch software built for high transaction volume." },
    { icon: GraduationCap, name: "Education", description: "Student information systems and administrative platforms at scale." },
  ],
  process: [
    { step: "01", title: "Discovery", description: "We map current workflows, systems, and bottlenecks with your stakeholders." },
    { step: "02", title: "Planning", description: "Scope, architecture, and a phased delivery roadmap get defined and signed off." },
    { step: "03", title: "Design", description: "Data models and interface flows are designed around how your teams actually work." },
    { step: "04", title: "Development", description: "Agile sprints build the platform in reviewable, demoable increments." },
    { step: "05", title: "Testing", description: "Functional, load, and security testing before anything reaches production." },
    { step: "06", title: "Deployment", description: "Phased rollout with data migration and staff onboarding support." },
    { step: "07", title: "Support", description: "Monitoring, fixes, and ongoing enhancements after go-live." },
  ],
  whyChooseUs: [
    { icon: Award, title: "Expertise", description: "Two decades of combined experience shipping enterprise-grade systems." },
    { icon: TrendingUp, title: "Scalability", description: "Architecture that holds up from first users to millions of transactions." },
    { icon: ShieldCheck, title: "Security", description: "Role-based access, encryption, and audit logging built in from day one." },
    { icon: Headphones, title: "Support", description: "A dedicated team on call well past launch day." },
  ],
  faqs: [
    { q: "How long does a typical enterprise software build take?", a: "Most engagements run 3-9 months depending on scope, with working software delivered in phases every two to four weeks rather than one single release at the end." },
    { q: "Can you integrate with our existing ERP or legacy systems?", a: "Yes. We regularly build alongside SAP, Oracle, and homegrown legacy platforms via API layers rather than forcing a full replacement." },
    { q: "Do you migrate our existing data?", a: "Data migration and validation is part of every build — we treat data integrity as a launch blocker, not an afterthought." },
    { q: "Who owns the code and infrastructure after launch?", a: "You do. There's no vendor lock-in — source code, infrastructure, and documentation are handed over in full." },
    { q: "What happens after the system goes live?", a: "We offer ongoing support plans covering monitoring, bug fixes, and incremental feature work, billed separately from the initial build." },
  ],
};

const EnterpriseSoftware = () => (
  <PageWrapper
    title="Enterprise Software"
    description="Custom enterprise applications built for scale and security."
  >
    <ServiceDetailLayout data={data} currentServiceId="cloud" />
  </PageWrapper>
);

export default EnterpriseSoftware;