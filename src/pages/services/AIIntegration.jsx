import PageWrapper from "../../components/layout/PageWrapper";
import ServiceDetailLayout from "../../components/services/ServiceDetailLayout";
import {
  Bot,
  Sparkles,
  MessageSquare,
  FileSearch,
  Zap,
  LineChart,
  Cpu,
  GitBranch,
  Code2,
  Database,
  Server,
  Boxes,
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
    eyebrow: "AI Integration & Agentics",
    image: "/AI Integration & Agentics.jpg",
    title: "Put AI to work inside your actual business processes",
    subtitle:
      "LLM-powered agents and automation that read documents, answer customers, and act on your data — not just a chatbot bolted onto your website.",
    description:
      "We design and ship AI systems that plug into your existing tools, respect your data boundaries, and are measured against real operational outcomes.",
  },
  overview: {
    heading: "AI that touches real workflows",
    intro:
      "Most companies have tried a chatbot demo. Few have AI wired into the systems where decisions and work actually happen. That gap is where we operate.",
    whyNeeded:
      "Manual document review, repetitive support tickets, and disconnected data slow teams down in ways that compound. Well-scoped AI agents remove that overhead without removing human oversight where it matters.",
    businessValue:
      "Clients typically see meaningful reductions in manual processing time on the specific workflow we automate, freeing skilled staff for judgment calls instead of repetitive input work.",
    useCases: [
      "AI agents that triage and respond to support tickets end-to-end",
      "Document intelligence pulling structured data out of contracts and invoices",
      "Internal copilots grounded in your own knowledge base, not the open internet",
      "Predictive models flagging churn risk or demand shifts before they hit",
    ],
  },
  features: [
    { icon: Bot, title: "AI Agents", description: "Autonomous agents that complete multi-step tasks, not just answer questions." },
    { icon: Sparkles, title: "LLM Integration", description: "Foundation models wired into your systems with the right guardrails." },
    { icon: MessageSquare, title: "Chatbots", description: "Customer- and employee-facing assistants grounded in your own data." },
    { icon: FileSearch, title: "Document Intelligence", description: "Extraction and classification across contracts, forms, and PDFs." },
    { icon: Zap, title: "AI Automation", description: "End-to-end workflow automation triggered by AI-driven decisions." },
    { icon: LineChart, title: "Predictive Analytics", description: "Forecasting models built on your historical operational data." },
  ],
  techStack: [
    { icon: Cpu, name: "Claude / OpenAI APIs" },
    { icon: GitBranch, name: "LangChain" },
    { icon: Code2, name: "Python" },
    { icon: Database, name: "Vector Databases" },
    { icon: Server, name: "AWS / GCP" },
    { icon: Boxes, name: "Docker" },
  ],
  industries: [
    { icon: Stethoscope, name: "Healthcare", description: "Clinical documentation support and intake automation with compliance built in." },
    { icon: Landmark, name: "Finance", description: "Fraud signal detection and automated document review for underwriting." },
    { icon: ShoppingCart, name: "Retail", description: "Demand forecasting and AI-assisted customer service at scale." },
    { icon: Factory, name: "Manufacturing", description: "Predictive maintenance models trained on sensor and machine data." },
    { icon: Truck, name: "Logistics", description: "Route and inventory optimization driven by live operational signals." },
    { icon: GraduationCap, name: "Education", description: "Automated grading support and personalized learning assistants." },
  ],
  process: [
    { step: "01", title: "Discovery", description: "We identify the specific workflow worth automating and its success metric." },
    { step: "02", title: "Planning", description: "Model selection, data sources, and guardrails get scoped before any code." },
    { step: "03", title: "Design", description: "Agent behavior, escalation paths, and human-in-the-loop points are defined." },
    { step: "04", title: "Development", description: "Iterative builds with evaluation sets, not just a single demo prompt." },
    { step: "05", title: "Testing", description: "Accuracy, safety, and edge-case testing against real historical data." },
    { step: "06", title: "Deployment", description: "Gradual rollout with monitoring on live traffic before full cutover." },
    { step: "07", title: "Support", description: "Ongoing evaluation as usage patterns and models evolve." },
  ],
  whyChooseUs: [
    { icon: Award, title: "Expertise", description: "Hands-on experience shipping production LLM systems, not just prototypes." },
    { icon: TrendingUp, title: "Scalability", description: "Architectures built to handle growing usage without ballooning cost." },
    { icon: ShieldCheck, title: "Security", description: "Data handling and model access designed around your compliance needs." },
    { icon: Headphones, title: "Support", description: "Ongoing tuning as your data and business questions change." },
  ],
  faqs: [
    { q: "Will the AI have access to our sensitive data?", a: "Only the data you explicitly connect, scoped by role. We design access boundaries before any integration goes live." },
    { q: "How do you prevent the AI from making mistakes?", a: "Through evaluation sets built from your real data, human-in-the-loop checkpoints on high-stakes actions, and ongoing monitoring after launch." },
    { q: "Do we need our own data science team?", a: "No. We handle model selection, integration, and evaluation; your team focuses on defining what success looks like for the workflow." },
    { q: "Can this work with our existing software?", a: "Yes — most of our AI integrations sit on top of tools you already use rather than replacing them." },
    { q: "What if the underlying AI models change?", a: "We build with model-agnostic architecture where practical, so upgrading or switching providers doesn't mean rebuilding from scratch." },
  ],
};

const AIIntegration = () => (
  <PageWrapper
    title="AI Integration & Agentics"
    description="Enterprise AI solutions that automate complex business workflows."
  >
    <ServiceDetailLayout data={data} currentServiceId="data" />
  </PageWrapper>
);

export default AIIntegration;