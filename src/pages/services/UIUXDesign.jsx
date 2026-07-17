import PageWrapper from "../../components/layout/PageWrapper";
import ServiceDetailLayout from "../../components/services/ServiceDetailLayout";
import {
  Search,
  LayoutGrid,
  Palette,
  Component,
  PenTool,
  Eye,
  Layers,
  MousePointer2,
  Grid3x3,
  Shapes,
  Pen,
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
    eyebrow: "UI/UX & Product Design",
    image: "/UI UX.webp",
    title: "Interfaces people actually enjoy using",
    subtitle:
      "Research-driven design systems and product interfaces built for clarity first, and polish second — because polish without clarity just looks nice.",
    description:
      "We take products from confusing to intuitive through structured research, iterative prototyping, and design systems your team can maintain long after we're gone.",
  },
  overview: {
    heading: "Design that reduces friction, not just adds shine",
    intro:
      "Good design is rarely about adding more visual flourish — it's about removing the moments where a user has to stop and think about how something works.",
    whyNeeded:
      "Confusing interfaces cost support tickets, abandoned signups, and lost trust. Businesses that invest in usability convert more, churn less, and spend less time explaining their own product.",
    businessValue:
      "Clients typically see meaningful lifts in conversion and task completion rates after a redesign grounded in real user research rather than internal opinion.",
    useCases: [
      "Redesigning a core product flow that's causing drop-off or support tickets",
      "Building a design system so new features ship consistently, faster",
      "Running usability testing before a major release, not after complaints",
      "Designing a new product from research through high-fidelity prototype",
    ],
  },
  features: [
    { icon: Search, title: "User Research", description: "Interviews, surveys, and behavioral data before any pixel gets pushed." },
    { icon: LayoutGrid, title: "Wireframes", description: "Low-fidelity structure to validate flow before visual design begins." },
    { icon: Palette, title: "UI Design", description: "High-fidelity interfaces grounded in a clear visual language." },
    { icon: Component, title: "Design Systems", description: "Reusable components and tokens that keep products consistent at scale." },
    { icon: PenTool, title: "Prototyping", description: "Interactive prototypes for stakeholder review and usability testing." },
    { icon: Eye, title: "Usability Testing", description: "Real users testing real flows before launch, not after." },
  ],
  techStack: [
    { icon: Pen, name: "Figma" },
    { icon: Layers, name: "Framer" },
    { icon: MousePointer2, name: "Maze (Usability Testing)" },
    { icon: Grid3x3, name: "Storybook" },
    { icon: Shapes, name: "Adobe Creative Suite" },
    { icon: Boxes, name: "Design Tokens (Style Dictionary)" },
  ],
  industries: [
    { icon: Stethoscope, name: "Healthcare", description: "Patient-facing portals designed for accessibility and low cognitive load." },
    { icon: Landmark, name: "Finance", description: "Dashboards and workflows that make complex data easy to act on." },
    { icon: ShoppingCart, name: "Retail", description: "Storefront and checkout experiences optimized for conversion." },
    { icon: Factory, name: "Manufacturing", description: "Operational dashboards designed for control-room and floor use." },
    { icon: Truck, name: "Logistics", description: "Dispatcher and driver-facing tools built for speed under pressure." },
    { icon: GraduationCap, name: "Education", description: "Learning platforms designed around how students actually engage." },
  ],
  process: [
    { step: "01", title: "Discovery", description: "We interview stakeholders and users to understand real pain points." },
    { step: "02", title: "Planning", description: "Scope, user flows, and success metrics for the redesign are agreed on." },
    { step: "03", title: "Design", description: "Wireframes progress to high-fidelity UI grounded in research findings." },
    { step: "04", title: "Development", description: "We work alongside engineering to keep implementation true to design." },
    { step: "05", title: "Testing", description: "Usability testing with real users validates flows before launch." },
    { step: "06", title: "Deployment", description: "Design QA on production to catch any implementation drift." },
    { step: "07", title: "Support", description: "Design system maintenance and support as new features ship." },
  ],
  whyChooseUs: [
    { icon: Award, title: "Expertise", description: "Designers who've shipped products across regulated and consumer industries." },
    { icon: TrendingUp, title: "Scalability", description: "Design systems built to support dozens of features without drift." },
    { icon: ShieldCheck, title: "Security", description: "Accessibility and compliance considered as design requirements, not add-ons." },
    { icon: Headphones, title: "Support", description: "Ongoing design partnership as your product roadmap evolves." },
  ],
  faqs: [
    { q: "Do you redesign existing products or only build new ones?", a: "Both. Most of our engagements are redesigns of existing products where specific flows are causing friction or drop-off." },
    { q: "How do you validate design decisions?", a: "Through structured usability testing and, where available, product analytics — not internal opinion or aesthetic preference alone." },
    { q: "Will we get a design system, or just screens?", a: "For most engagements, yes — a documented design system with reusable components so future features stay consistent without redesigning from scratch." },
    { q: "Do you work with our existing engineering team?", a: "Yes, we typically collaborate directly with your engineers through implementation to make sure design intent survives into production." },
    { q: "How long does a typical redesign take?", a: "A focused flow redesign usually takes 4-8 weeks; a full product design system can run 3-4 months depending on scope." },
  ],
};

const UIUXDesign = () => (
  <PageWrapper
    title="UI/UX & Product Design"
    description="Human-centered product experiences for web and mobile."
    showServiceNavbar={true}
  >
    <ServiceDetailLayout data={data} currentServiceId="security" />
  </PageWrapper>
);

export default UIUXDesign;