import PageWrapper from "../../components/layout/PageWrapper";
import ServiceDetailLayout from "../../components/services/ServiceDetailLayout";
import {
  Sparkles,
  Megaphone,
  Search,
  Target,
  BarChart3,
  TrendingUp,
  LineChart,
  Mail,
  Users2,
  Award,
  ShieldCheck,
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
    eyebrow: "Brand & Demand Strategy",
    image: "/Brand & Demand Strategy.webp",
    title: "Marketing that's measured in pipeline, not impressions",
    subtitle:
      "Brand positioning and demand generation built around one question: does this bring in and convert the right customers.",
    description:
      "We combine brand strategy with performance marketing so your business is recognizable and generating qualified leads on a predictable cadence.",
  },
  overview: {
    heading: "Brand and demand, working together",
    intro:
      "A strong brand without a demand engine gets admired. A demand engine without a strong brand gets ignored by the buyers who matter most. We build both, deliberately connected.",
    whyNeeded:
      "Businesses that treat brand and lead generation as separate workstreams end up with inconsistent messaging and campaigns that don't compound. Aligning them turns marketing spend into a system, not a series of one-off pushes.",
    businessValue:
      "Clients typically see lower cost-per-qualified-lead and shorter sales cycles once messaging, targeting, and channels are aligned around a single positioning strategy.",
    useCases: [
      "Repositioning a brand ahead of a new market or product launch",
      "Building a multi-channel demand generation engine from scratch",
      "Improving organic search visibility for high-intent buyer terms",
      "Standing up marketing analytics that tie spend to closed revenue",
    ],
  },
  features: [
    { icon: Sparkles, title: "Brand Identity", description: "Positioning, messaging, and visual identity built around your buyers." },
    { icon: Megaphone, title: "Digital Marketing", description: "Paid and organic campaigns across the channels your buyers actually use." },
    { icon: Search, title: "SEO", description: "Technical and content SEO built for the terms your buyers search." },
    { icon: Target, title: "Lead Generation", description: "Demand campaigns designed around qualified pipeline, not raw traffic." },
    { icon: BarChart3, title: "Analytics", description: "Attribution and reporting that connects spend to closed revenue." },
    { icon: TrendingUp, title: "Growth Strategy", description: "A prioritized roadmap for where to invest marketing budget next." },
  ],
  techStack: [
    { icon: Megaphone, name: "Google Ads / Meta Ads" },
    { icon: Users2, name: "HubSpot" },
    { icon: LineChart, name: "GA4" },
    { icon: Search, name: "SEMrush / Ahrefs" },
    { icon: Mail, name: "Marketing Automation" },
    { icon: BarChart3, name: "Looker Studio" },
  ],
  industries: [
    { icon: Stethoscope, name: "Healthcare", description: "Patient acquisition campaigns built within advertising compliance rules." },
    { icon: Landmark, name: "Finance", description: "Trust-driven positioning and lead generation for regulated financial products." },
    { icon: ShoppingCart, name: "Retail", description: "Full-funnel campaigns from brand awareness to checkout conversion." },
    { icon: Factory, name: "Manufacturing", description: "B2B demand generation for long, multi-stakeholder sales cycles." },
    { icon: Truck, name: "Logistics", description: "Positioning and lead gen for capacity-driven, relationship-based sales." },
    { icon: GraduationCap, name: "Education", description: "Enrollment marketing campaigns tied to admissions cycles." },
  ],
  process: [
    { step: "01", title: "Discovery", description: "We audit current brand positioning, channels, and funnel performance." },
    { step: "02", title: "Planning", description: "Messaging pillars, target segments, and channel mix get defined." },
    { step: "03", title: "Design", description: "Creative, landing pages, and campaign assets are built around the strategy." },
    { step: "04", title: "Development", description: "Campaigns and automation are built and connected to your CRM." },
    { step: "05", title: "Testing", description: "A/B testing on messaging, creative, and targeting before scaling spend." },
    { step: "06", title: "Deployment", description: "Full campaign launch across the agreed channel mix." },
    { step: "07", title: "Support", description: "Ongoing optimization based on live performance data." },
  ],
  whyChooseUs: [
    { icon: Award, title: "Expertise", description: "Strategists who've run demand engines across B2B and B2C." },
    { icon: TrendingUp, title: "Scalability", description: "Campaign systems built to scale spend without losing efficiency." },
    { icon: ShieldCheck, title: "Security", description: "Data handling and ad compliance managed to your industry's standards." },
    { icon: Headphones, title: "Support", description: "Monthly reporting and a direct line to your marketing team." },
  ],
  faqs: [
    { q: "How do you measure success beyond impressions and clicks?", a: "Through pipeline and revenue attribution — we tie campaign performance back to qualified leads and closed deals wherever CRM data allows." },
    { q: "Do you handle both brand strategy and paid campaigns?", a: "Yes, we typically run both together so messaging stays consistent from brand awareness through to conversion." },
    { q: "How long before we see results?", a: "Paid channels typically show signal within 4-6 weeks; SEO and brand-driven organic growth build over 3-6 months." },
    { q: "Do you work with our existing marketing team, or replace them?", a: "We work alongside your team, typically handling strategy and execution for the channels you don't have in-house capacity for." },
    { q: "Can you work within a regulated industry's advertising rules?", a: "Yes — we've run compliant campaigns in healthcare and finance, where messaging and targeting have specific regulatory constraints." },
  ],
};

const BrandDemand = () => (
  <PageWrapper
    title="Brand & Demand Strategy"
    description="Data-driven marketing strategies that generate measurable growth."
    showServiceNavbar={true}
  >
    <ServiceDetailLayout data={data} currentServiceId="platform" />
  </PageWrapper>
);

export default BrandDemand;