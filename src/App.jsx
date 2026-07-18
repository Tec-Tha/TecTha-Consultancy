import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ScrollProgress from "./components/layout/ScrollProgress";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import EnterpriseSoftware from "./pages/services/EnterpriseSoftware";
import AIIntegration from "./pages/services/AIIntegration";
import CloudInfrastructure from "./pages/services/CloudInfrastructure";
import UIUXDesign from "./pages/services/UIUXDesign";
import BrandDemand from "./pages/services/BrandDemand";
import DigitalAdvisory from "./pages/services/DigitalAdvisory";
import HRTechnology from "./pages/services/HRTechnology";
import BusinessDigitalTransformation from "./pages/services/BusinessDigitalTransformation";
import AIStrategy from "./pages/services/ArtificialIntelligence&DataAnalytics/AIStrategy";
import EnterpriseAI from "./pages/services/ArtificialIntelligence&DataAnalytics/EnterpriseAI";
import GenerativeAI from "./pages/services/ArtificialIntelligence&DataAnalytics/GenerativeAI";
import AIAgents from "./pages/services/ArtificialIntelligence&DataAnalytics/AIAgents";
import IntelligentAutomation from "./pages/services/ArtificialIntelligence&DataAnalytics/IntelligentAutomation";
import AIGovernance from "./pages/services/ArtificialIntelligence&DataAnalytics/AIGovernance";
import CloudStrategy from "./pages/services/CloudService/CloudStrategy";
import CloudEngineering from "./pages/services/CloudService/CloudEngineering";
import CloudMigration from "./pages/services/CloudService/CloudMigration";
import PlatformEngineering from "./pages/services/CloudService/PlatformEngineering";
import DevOps from "./pages/services/CloudService/DevOps";
import ManagedCloud from "./pages/services/CloudService/ManagedCloud";
import CybersecurityStrategy from "./pages/services/CybersecurityService/CybersecurityStrategy";
import IdentityAccessManagement from "./pages/services/CybersecurityService/IdentityAccessManagement";
import CloudSecurity from "./pages/services/CybersecurityService/CloudSecurity";
import GovernanceRiskCompliance from "./pages/services/CybersecurityService/GovernanceRiskCompliance";
import SecurityOperations from "./pages/services/CybersecurityService/SecurityOperations";
import ManagedSecurity from "./pages/services/CybersecurityService/ManagedSecurity";
import BusinessConsulting from "./pages/services/DigitalTransformation/BusinessConsulting";
import EnterpriseTransformation from "./pages/services/DigitalTransformation/EnterpriseTransformation";
import EnterpriseArchitecture from "./pages/services/DigitalTransformation/EnterpriseArchitecture";
import ProcessExcellence from "./pages/services/DigitalTransformation/ProcessExcellence";
import TechnologyAdvisory from "./pages/services/DigitalTransformation/TechnologyAdvisory";
import ChangeManagement from "./pages/services/DigitalTransformation/ChangeManagement";
import ERPSolutions from "./pages/services/EnterpriseSolution/ERPSolutions";
import HumanCapitalManagement from "./pages/services/EnterpriseSolution/HumanCapitalManagement";
import CustomerRelationshipManagement from "./pages/services/EnterpriseSolution/CustomerRelationshipManagement";
import SupplyChainSolutions from "./pages/services/EnterpriseSolution/SupplyChainSolutions";
import FinanceSolutions from "./pages/services/EnterpriseSolution/FinanceSolutions";
import IndustrySolutions from "./pages/services/EnterpriseSolution/IndustrySolutions";
<<<<<<< HEAD
import ManagedApplications from "./pages/services/ManagedServices/ManagedApplications";
import ManagedCloudd from "./pages/services/ManagedServices/ManagedCloudd";
import ManagedAI from "./pages/services/ManagedServices/ManagedAI";
import ManagedInfrastructure from "./pages/services/ManagedServices/ManagedInfrastructure";
import TechnologyOperations from "./pages/services/ManagedServices/TechnologyOperations";
import EnterpriseSupport from "./pages/services/ManagedServices/EnterpriseSupport";
import EnterpriseApplications from "./pages/services/EnterpriseApplications";
import DataAI from "./pages/services/DataAI";
import EnterpriseSoftwaree from "./pages/services/EnterpriseApplications/EnterpriseSoftwaree";
import CustomApplications from "./pages/services/EnterpriseApplications/CustomApplications";
import BusinessApplications from "./pages/services/EnterpriseApplications/BusinessApplications";
import SystemsIntegration from "./pages/services/EnterpriseApplications/SystemsIntegration";
import SaaSPlatforms from "./pages/services/EnterpriseApplications/SaaSPlatforms";
import ApplicationModernization from "./pages/services/EnterpriseApplications/ApplicationModernization";
import DataEngineering from "./pages/services/DataAI/DataEngineering";
import BusinessIntelligence from "./pages/services/DataAI/BusinessIntelligence";
import AIAnalytics from "./pages/services/DataAI/AIAnalytics";
import ExecutiveIntelligence from "./pages/services/DataAI/ExecutiveIntelligence";
import PredictiveAnalytics from "./pages/services/DataAI/PredictiveAnalytics";
import DataGovernance from "./pages/services/DataAI/DataGovernance";
=======
import Healthcare from "./pages/industries/Healthcare";
import Banking from "./pages/industries/Banking";
import Manufacturing from "./pages/industries/Manufacturing";
import Retail from "./pages/industries/Retail";
import Education from "./pages/industries/Education";
import Government from "./pages/industries/Government";
import ProfessionalServices from "./pages/industries/ProfessionalServices";

>>>>>>> d96711cc3738735f63dc83a9b4b82586c90d228d
function App() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/EnterpriseSoftware" element={<EnterpriseSoftware />} />
        <Route path="/services/AIIntegration" element={<AIIntegration />} />
        <Route path="/services/CloudInfrastructure" element={<CloudInfrastructure />} />
        <Route path="/services/UIUXDesign" element={<UIUXDesign />} />
        <Route path="/services/BrandDemand" element={<BrandDemand />} />
        <Route path="/services/DigitalAdvisory" element={<DigitalAdvisory />} />
        <Route path="/services/hr-technology" element={<HRTechnology />} />
        <Route path="/services/business-digital-transformation" element={<BusinessDigitalTransformation />} />
        <Route path="/services/ArtificialIntelligence&DataAnalytics/ai-strategy" element={<AIStrategy />} />
        <Route path="/services/ArtificialIntelligence&DataAnalytics/enterprise-ai" element={<EnterpriseAI />} />
        <Route path="/services/ArtificialIntelligence&DataAnalytics/generative-ai" element={<GenerativeAI />} />
        <Route path="/services/ArtificialIntelligence&DataAnalytics/ai-agents" element={<AIAgents />} />
        <Route path="/services/ArtificialIntelligence&DataAnalytics/intelligent-automation" element={<IntelligentAutomation />} />
        <Route path="/services/ArtificialIntelligence&DataAnalytics/ai-governance" element={<AIGovernance />} />
        <Route path="/services/CloudService/cloud-strategy" element={<CloudStrategy />} />
        <Route path="/services/CloudService/cloud-engineering" element={<CloudEngineering />} />
        <Route path="/services/CloudService/cloud-migration" element={<CloudMigration />} />
        <Route path="/services/CloudService/platform-engineering" element={<PlatformEngineering />} />
        <Route path="/services/CloudService/devops" element={<DevOps />} />
        <Route path="/services/CloudService/managed-cloud" element={<ManagedCloud />} />
        <Route path="/services/CybersecurityService/cybersecurity-strategy" element={<CybersecurityStrategy />} />
        <Route path="/services/CybersecurityService/identity-access-management" element={<IdentityAccessManagement />} />
        <Route path="/services/CybersecurityService/cloud-security" element={<CloudSecurity />} />
        <Route path="/services/CybersecurityService/governance-risk-compliance" element={<GovernanceRiskCompliance />} />
        <Route path="/services/CybersecurityService/security-operations" element={<SecurityOperations />} />
        <Route path="/services/CybersecurityService/managed-security" element={<ManagedSecurity />} />
        <Route path="/services/DigitalTransformation/business-consulting" element={<BusinessConsulting />} />
        <Route path="/services/DigitalTransformation/enterprise-transformation" element={<EnterpriseTransformation />} />
        <Route path="/services/DigitalTransformation/enterprise-architecture" element={<EnterpriseArchitecture />} />
        <Route path="/services/DigitalTransformation/process-excellence" element={<ProcessExcellence />} />
        <Route path="/services/DigitalTransformation/technology-advisory" element={<TechnologyAdvisory />} />
        <Route path="/services/DigitalTransformation/change-management" element={<ChangeManagement />} />
        <Route path="/services/EnterpriseSolution/erp-solutions" element={<ERPSolutions />} />
        <Route path="/services/EnterpriseSolution/human-capital-management" element={<HumanCapitalManagement />} />
        <Route path="/services/EnterpriseSolution/customer-relationship-management" element={<CustomerRelationshipManagement />} />
        <Route path="/services/EnterpriseSolution/supply-chain-solutions" element={<SupplyChainSolutions />} />
        <Route path="/services/EnterpriseSolution/finance-solutions" element={<FinanceSolutions />} />
        <Route path="/services/EnterpriseSolution/industry-solutions" element={<IndustrySolutions />} />
        <Route path="/industries/logistics" element={<Logistics />}/>
        <Route path="/industries/healthcare" element={<Healthcare />}/>
        <Route path="/industries/banking" element={<Banking />}/>
        <Route path="/industries/manufacturing" element={<Manufacturing />}/>
        <Route path="/industries/:industry" element={<Retail />} />
        <Route path="/industries/education" element={<Education />} />
        <Route path="/industries/government" element={<Government />} />
        <Route path="/industries/professional-services" element={<ProfessionalServices />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;