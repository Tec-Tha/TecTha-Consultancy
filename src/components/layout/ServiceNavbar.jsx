import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const SERVICES = [
  { name: "Artificial Intelligence & Data Analytics", link: "/services/EnterpriseSoftware" },
  { name: "Enterprise Solutions", link: "/services/AIIntegration" },
  { name: "Cloud & Infrastructure", link: "/services/CloudInfrastructure" },
  { name: "UI/UX & Product Design", link: "/services/UIUXDesign" },
  { name: "Cybersecurity", link: "/services/BrandDemand" },
  { name: "Digital Transformation", link: "/services/DigitalAdvisory" },
];

// Sub-tabs mapped per parent service link.
const SUB_SECTIONS = {
  "/services/EnterpriseSoftware": [
    { label: "AI Strategy", link: "/services/ArtificialIntelligence&DataAnalytics/ai-strategy" },
    { label: "Enterprise AI", link: "/services/ArtificialIntelligence&DataAnalytics/enterprise-ai" },
    { label: "Generative AI", link: "/services/ArtificialIntelligence&DataAnalytics/generative-ai" },
    { label: "AI Agents", link: "/services/ArtificialIntelligence&DataAnalytics/ai-agents" },
    { label: "Intelligent Automation", link: "/services/ArtificialIntelligence&DataAnalytics/intelligent-automation" },
    { label: "AI Governance", link: "/services/ArtificialIntelligence&DataAnalytics/ai-governance" },
  ],
  "/services/CloudInfrastructure": [
    { label: "Cloud Strategy", link: "/services/CloudService/cloud-strategy" },
    { label: "Cloud Engineering", link: "/services/CloudService/cloud-engineering" },
    { label: "Cloud Migration", link: "/services/CloudService/cloud-migration" },
    { label: "Platform Engineering", link: "/services/CloudService/platform-engineering" },
    { label: "DevOps", link: "/services/CloudService/devops" },
    { label: "Managed Cloud", link: "/services/CloudService/managed-cloud" },
  ],
  "/services/BrandDemand": [
    { label: "Cybersecurity Strategy", link: "/services/CybersecurityService/cybersecurity-strategy" },
    { label: "Identity & Access Management", link: "/services/CybersecurityService/identity-access-management" },
    { label: "Cloud Security", link: "/services/CybersecurityService/cloud-security" },
    { label: "Governance, Risk & Compliance", link: "/services/CybersecurityService/governance-risk-compliance" },
    { label: "Security Operations", link: "/services/CybersecurityService/security-operations" },
    { label: "Managed Security", link: "/services/CybersecurityService/managed-security" },
  ],
  "/services/DigitalAdvisory": [
    { label: "Business Consulting", link: "/services/DigitalTransformation/business-consulting" },
    { label: "Enterprise Transformation", link: "/services/DigitalTransformation/enterprise-transformation" },
    { label: "Enterprise Architecture", link: "/services/DigitalTransformation/enterprise-architecture" },
    { label: "Process Excellence", link: "/services/DigitalTransformation/process-excellence" },
    { label: "Technology Advisory", link: "/services/DigitalTransformation/technology-advisory" },
    { label: "Change Management", link: "/services/DigitalTransformation/change-management" },
  ],
  "/services/AIIntegration": [
    { label: "ERP Solutions", link: "/services/EnterpriseSolution/erp-solutions" },
    { label: "Human Capital Management", link: "/services/EnterpriseSolution/human-capital-management" },
    { label: "Customer Relationship Management", link: "/services/EnterpriseSolution/customer-relationship-management" },
    { label: "Supply Chain Solutions", link: "/services/EnterpriseSolution/supply-chain-solutions" },
    { label: "Finance Solutions", link: "/services/EnterpriseSolution/finance-solutions" },
    { label: "Industry Solutions", link: "/services/EnterpriseSolution/industry-solutions" },
  ],
};

// Reverse lookup: given ANY current path (parent or sub-page), find which
// parent service group it belongs to, so tabs stay correct on sub-pages too.
const findParentService = (pathname) => {
  if (SERVICES.some((s) => s.link === pathname)) return pathname;
  for (const [parentLink, subs] of Object.entries(SUB_SECTIONS)) {
    if (subs.some((sub) => sub.link === pathname)) return parentLink;
  }
  return null;
};

const ServiceNavbar = () => {
  const location = useLocation();

  const parentLink = findParentService(location.pathname);
  const currentService =
    SERVICES.find((s) => s.link === parentLink) || SERVICES[0];
  const subTabs = SUB_SECTIONS[parentLink] || [];

  return (
    <div className="fixed top-20 left-0 w-full h-14 bg-black/90 backdrop-blur-md border-b border-white/10 z-40 shadow-lg text-white">
      <div className="mx-auto flex h-full max-w-[1650px] items-center px-6 md:px-10">
        {/* Left: current service label (plain, no dropdown) */}
        <span className="whitespace-nowrap text-xs md:text-sm font-bold tracking-wide text-white uppercase font-['Montserrat']">
          {currentService.name}
        </span>

        {subTabs.length > 0 && (
          <>
            <ChevronRight size={16} className="mx-4 text-gray-500 shrink-0" />

            <div className="flex items-center h-full overflow-x-auto no-scrollbar scrollbar-hide py-1">
              <div className="flex items-center gap-4 md:gap-8">
                {subTabs.map((sec) => {
                  const isActive = location.pathname === sec.link;
                  return (
                    <Link
                      key={sec.link}
                      to={sec.link}
                      className={`whitespace-nowrap text-[10px] md:text-xs font-semibold uppercase tracking-widest transition-colors duration-200 font-['Montserrat'] relative py-2 ${
                        isActive ? "text-white" : "text-gray-400 hover:text-white"
                      }`}
                    >
                      {sec.label}
                      {isActive && (
                        <motion.span
                          layoutId="service-nav-underline"
                          className="absolute bottom-0 left-0 w-full h-[2px] bg-[#818CF8]"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ServiceNavbar;