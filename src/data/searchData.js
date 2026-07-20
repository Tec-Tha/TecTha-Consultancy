/**
 * searchData.js
 * ---------------------------------------------------------------------------
 * Central, uncategorized search index for Tec Tha's global site search.
 * Each entry represents one searchable "thing" — a service, an industry,
 * a company page, whatever. There is no category grouping shown to the
 * user; keywords are what make each entry discoverable under related
 * terms (e.g. "ai" surfaces both "Artificial Intelligence" and
 * "Machine Learning" style entries even though "ai" doesn't literally
 * appear in every title).
 *
 * Shape (all fields required except keywords, which defaults to []):
 *   {
 *     title: string,
 *     description: string,
 *     route: string,
 *     keywords: string[]
 *   }
 *
 * To add new searchable content, just push a new object here — nothing
 * else in the app needs to change.
 * ---------------------------------------------------------------------------
 */

export const SEARCH_DATA = [
  // ================= SERVICES =================

  {
    title: "Artificial Intelligence & Data Analytics",
    description: "Enterprise AI, machine learning and advanced analytics solutions.",
    route: "/services/ArtificialIntelligence",
    keywords: ["ai","artificial intelligence","machine learning","ml","analytics","genai","llm"]
  },

  {
    title: "Data & AI",
    description: "Transform enterprise data into actionable intelligence.",
    route: "/services/DataAI",
    keywords: ["data","ai","business intelligence","analytics","engineering"]
  },

  {
    title: "AI Strategy",
    description: "Enterprise AI strategy and consulting.",
    route: "/services/ArtificialIntelligence&DataAnalytics/ai-strategy",
    keywords: ["ai strategy","consulting","roadmap","genai"]
  },

  {
    title: "Enterprise AI",
    description: "Enterprise AI implementation.",
    route: "/services/ArtificialIntelligence&DataAnalytics/enterprise-ai",
    keywords: ["enterprise ai","machine learning","automation"]
  },

  {
    title: "Generative AI",
    description: "LLMs and Generative AI solutions.",
    route: "/services/ArtificialIntelligence&DataAnalytics/generative-ai",
    keywords: ["genai","chatgpt","llm","gpt"]
  },

  {
    title: "AI Agents",
    description: "Autonomous AI Agents.",
    route: "/services/ArtificialIntelligence&DataAnalytics/ai-agents",
    keywords: ["agents","ai agents","automation"]
  },

  {
    title: "Intelligent Automation",
    description: "Automation powered by AI.",
    route: "/services/ArtificialIntelligence&DataAnalytics/intelligent-automation",
    keywords: ["automation","rpa","workflow"]
  },

  {
    title: "AI Governance",
    description: "Responsible AI governance.",
    route: "/services/ArtificialIntelligence&DataAnalytics/ai-governance",
    keywords: ["governance","responsible ai"]
  },

  {
    title: "Cloud Infrastructure",
    description: "Cloud migration and infrastructure.",
    route: "/services/CloudInfrastructure",
    keywords: ["cloud","aws","azure","gcp","server"]
  },

  {
    title: "Cloud Strategy",
    description: "Cloud transformation roadmap.",
    route: "/services/CloudService/cloud-strategy",
    keywords: ["cloud strategy","aws","azure"]
  },

  {
    title: "Cloud Engineering",
    description: "Modern cloud engineering.",
    route: "/services/CloudService/cloud-engineering",
    keywords: ["engineering","cloud engineering"]
  },

  {
    title: "Cloud Migration",
    description: "Migration to cloud.",
    route: "/services/CloudService/cloud-migration",
    keywords: ["migration","cloud migration"]
  },

  {
    title: "Platform Engineering",
    description: "Platform engineering solutions.",
    route: "/services/CloudService/platform-engineering",
    keywords: ["platform","devops"]
  },

  {
    title: "DevOps",
    description: "CI/CD and DevOps.",
    route: "/services/CloudService/devops",
    keywords: ["devops","docker","kubernetes","ci/cd"]
  },

  {
    title: "Managed Cloud",
    description: "Managed cloud operations.",
    route: "/services/CloudService/managed-cloud",
    keywords: ["managed cloud","operations"]
  },

  {
    title: "Cybersecurity",
    description: "Enterprise cybersecurity.",
    route: "/services/CyberSecurity",
    keywords: ["security","cyber","zero trust"]
  },

  {
    title: "Cybersecurity Strategy",
    description: "Cyber strategy.",
    route: "/services/CybersecurityService/cybersecurity-strategy",
    keywords: ["security strategy","cyber"]
  },

  {
    title: "Identity & Access Management",
    description: "IAM solutions.",
    route: "/services/CybersecurityService/identity-access-management",
    keywords: ["iam","identity","access"]
  },

  {
    title: "Cloud Security",
    description: "Secure cloud environments.",
    route: "/services/CybersecurityService/cloud-security",
    keywords: ["cloud security"]
  },

  {
    title: "Security Operations",
    description: "SOC services.",
    route: "/services/CybersecurityService/security-operations",
    keywords: ["soc","security operations"]
  },

  {
    title: "Managed Security",
    description: "Managed SOC.",
    route: "/services/CybersecurityService/managed-security",
    keywords: ["managed security"]
  },

  {
    title: "Digital Transformation",
    description: "Digital modernization.",
    route: "/services/DigitalTransformation",
    keywords: ["digital","transformation"]
  },

  {
    title: "Enterprise Applications",
    description: "Enterprise applications.",
    route: "/services/EnterpriseApplications",
    keywords: ["erp","crm","application"]
  },

  {
    title: "ERP Solutions",
    description: "ERP implementation.",
    route: "/services/EnterpriseSolution/erp-solutions",
    keywords: ["erp","sap","oracle"]
  },

  {
    title: "Managed Services",
    description: "24x7 managed IT.",
    route: "/services/ManagedServices",
    keywords: ["managed","support","operations"]
  },

  // ================= INDUSTRIES =================

  {
    title: "Banking",
    description: "Digital Banking Solutions.",
    route: "/industries/banking",
    keywords: ["bank","fintech","finance","payments"]
  },

  {
    title: "Healthcare",
    description: "Healthcare transformation.",
    route: "/industries/healthcare",
    keywords: ["hospital","medical","health"]
  },

  {
    title: "Manufacturing",
    description: "Industry 4.0.",
    route: "/industries/manufacturing",
    keywords: ["factory","iot","industry 4.0"]
  },

  {
    title: "Retail",
    description: "Retail technology.",
    route: "/industries/retail",
    keywords: ["retail","commerce","shopping"]
  },

  {
    title: "Education",
    description: "Education technology.",
    route: "/industries/education",
    keywords: ["education","college","school"]
  },

  {
    title: "Government",
    description: "Government digital services.",
    route: "/industries/government",
    keywords: ["government","public sector"]
  },

  {
    title: "Logistics",
    description: "Supply chain technology.",
    route: "/industries/logistics",
    keywords: ["logistics","transport","fleet"]
  },

  {
    title: "Professional Services",
    description: "Consulting solutions.",
    route: "/industries/professional-services",
    keywords: ["consulting","professional"]
  },

  // ================= COMPANY =================

  {
    title: "About Tec Tha",
    description: "Learn about Tec Tha.",
    route: "/about",
    keywords: ["about","company","mission","vision"]
  },

  {
    title: "Insights",
    description: "Technology insights.",
    route: "/insights",
    keywords: ["blog","research","articles"]
  },

  {
    title: "Careers",
    description: "Join Tec Tha.",
    route: "/careers",
    keywords: ["jobs","career","hiring"]
  },

  {
    title: "Contact",
    description: "Contact Tec Tha.",
    route: "/contact",
    keywords: ["contact","support","sales"]
  }
];
/**
 * A curated subset shown when the search field is empty, in place of the
 * full index or a "no results" state. Order here is the display order.
 */
export const POPULAR_SEARCHES = [
  "Artificial Intelligence & Data Analytics",
  "Cloud Services",
  "Cybersecurity Services",
  "Banking",
  "Healthcare",
  "Careers",
  "Contact Us",
];

/**
 * Case-insensitive match against title, description, and keywords.
 * Exported standalone so it's independently testable and reusable
 * outside the component (e.g. a future command palette).
 */
export function matchesQuery(item, query) {
  const q = query.trim().toLowerCase();
  if (!q) return true;
  if (item.title.toLowerCase().includes(q)) return true;
  if (item.description.toLowerCase().includes(q)) return true;
  if (item.keywords?.some((keyword) => keyword.toLowerCase().includes(q))) return true;
  return false;
}

/**
 * Resolves the "Popular Searches" list against SEARCH_DATA, preserving
 * the curated order and silently skipping any title that doesn't
 * (or no longer) exists in SEARCH_DATA.
 */
export function getPopularSearchItems() {
  return POPULAR_SEARCHES.map((title) => SEARCH_DATA.find((item) => item.title === title)).filter(Boolean);
}