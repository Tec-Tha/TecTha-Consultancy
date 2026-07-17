import PageWrapper from "../../components/layout/PageWrapper";
import ServiceDetailLayout from "../../components/services/ServiceDetailLayout";
import {
  Cloud,
  Server,
  Boxes,
  GitBranch,
  Workflow,
  Network,
  Database,
  Terminal,
  Container,
  CloudCog,
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
    eyebrow: "Cloud & Infrastructure",
    image: "/cloud & Infrastructure.jpg",
    title: "Infrastructure that scales without waking anyone up at 3am",
    subtitle:
      "Cloud architecture, container orchestration, and deployment pipelines engineered for reliability, not just a checkbox on an audit.",
    description:
      "We design and operate the infrastructure layer — so releases ship faster, outages get rarer, and your team stops firefighting.",
  },
  overview: {
    heading: "Infrastructure as a foundation, not an afterthought",
    intro:
      "Most infrastructure problems aren't visible until they're expensive — a slow deploy pipeline, an outage during peak traffic, a security gap found the hard way.",
    whyNeeded:
      "As systems grow, manually managed servers and ad-hoc deployment scripts become a liability. Reliable, automated infrastructure is what lets engineering teams ship without fear.",
    businessValue:
      "Clients typically cut deployment time from hours to minutes, reduce infrastructure cost through right-sizing, and gain the ability to scale for traffic spikes without manual intervention.",
    useCases: [
      "Migrating on-premise systems to AWS, Azure, or GCP with minimal downtime",
      "Containerizing legacy applications for consistent, portable deployments",
      "Building CI/CD pipelines that ship to production multiple times a day",
      "Designing multi-region architecture for uptime and disaster recovery",
    ],
  },
  features: [
    { icon: Cloud, title: "AWS", description: "Architecture and cost optimization across EC2, RDS, Lambda, and more." },
    { icon: CloudCog, title: "Azure", description: "Enterprise-grade deployments for organizations standardized on Microsoft." },
    { icon: Server, title: "Google Cloud", description: "GKE, BigQuery, and Cloud Run architectures for data-heavy workloads." },
    { icon: Container, title: "Kubernetes", description: "Orchestration for services that need to scale independently and reliably." },
    { icon: Boxes, title: "Docker", description: "Consistent, portable environments from local development to production." },
    { icon: GitBranch, title: "CI/CD", description: "Automated pipelines that test, build, and deploy on every commit." },
  ],
  techStack: [
    { icon: Cloud, name: "AWS / Azure / GCP" },
    { icon: Container, name: "Kubernetes" },
    { icon: Boxes, name: "Docker" },
    { icon: Workflow, name: "Terraform" },
    { icon: Network, name: "Istio / Service Mesh" },
    { icon: Terminal, name: "GitHub Actions" },
  ],
  industries: [
    { icon: Stethoscope, name: "Healthcare", description: "HIPAA-compliant infrastructure with strict data residency controls." },
    { icon: Landmark, name: "Finance", description: "High-availability architecture built for regulatory audit requirements." },
    { icon: ShoppingCart, name: "Retail", description: "Elastic infrastructure that handles seasonal traffic spikes without over-provisioning." },
    { icon: Factory, name: "Manufacturing", description: "Edge and cloud hybrid architecture for plant-floor connectivity." },
    { icon: Truck, name: "Logistics", description: "Real-time data pipelines supporting live fleet and route tracking." },
    { icon: GraduationCap, name: "Education", description: "Reliable infrastructure for platforms serving thousands of concurrent students." },
  ],
  process: [
    { step: "01", title: "Discovery", description: "We assess current infrastructure, bottlenecks, and cost inefficiencies." },
    { step: "02", title: "Planning", description: "Target architecture, cloud provider, and migration strategy get defined." },
    { step: "03", title: "Design", description: "Network topology, scaling rules, and security boundaries are mapped out." },
    { step: "04", title: "Development", description: "Infrastructure-as-code is built and versioned like any other codebase." },
    { step: "05", title: "Testing", description: "Load testing and failover drills before anything touches production traffic." },
    { step: "06", title: "Deployment", description: "Phased cutover with rollback plans at every stage." },
    { step: "07", title: "Support", description: "24/7 monitoring, alerting, and incident response after go-live." },
  ],
  whyChooseUs: [
    { icon: Award, title: "Expertise", description: "Certified architects across AWS, Azure, and Google Cloud." },
    { icon: TrendingUp, title: "Scalability", description: "Systems designed to absorb 10x traffic without a redesign." },
    { icon: ShieldCheck, title: "Security", description: "Least-privilege access, encrypted data paths, and continuous compliance checks." },
    { icon: Headphones, title: "Support", description: "On-call monitoring and incident response, not just a handoff document." },
  ],
  faqs: [
    { q: "Which cloud provider do you recommend?", a: "It depends on your existing stack, compliance needs, and team familiarity — we assess this during discovery rather than defaulting to one provider." },
    { q: "Can you migrate us without downtime?", a: "In most cases, yes, through phased migration and traffic shifting. Some legacy systems require a brief maintenance window, which we plan around your lowest-traffic hours." },
    { q: "Do you manage infrastructure after launch, or just build it?", a: "Both — we offer ongoing managed infrastructure plans including monitoring, patching, and cost optimization." },
    { q: "How do you keep cloud costs under control?", a: "Through right-sizing, autoscaling policies, and regular cost audits — infrastructure spend is tracked as closely as uptime." },
    { q: "What's your approach to security and compliance?", a: "We build access controls, encryption, and audit logging in from the start, and align architecture to frameworks like SOC 2 or HIPAA where relevant." },
  ],
};

const CloudInfrastructure = () => (
  <PageWrapper
    title="Cloud & Infrastructure"
    description="Modern cloud infrastructure with secure deployment pipelines."
    showServiceNavbar={true}
  >
    <ServiceDetailLayout data={data} currentServiceId="ai" />
  </PageWrapper>
);

export default CloudInfrastructure;