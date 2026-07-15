import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ScrollProgress from "./components/layout/ScrollProgress";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Industries from "./pages/Industries";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import EnterpriseSoftware from "./pages/services/EnterpriseSoftware";
import AIIntegration from "./pages/services/AIIntegration";
import CloudInfrastructure from "./pages/services/CloudInfrastructure";
import UIUXDesign from "./pages/services/UIUXDesign";
import BrandDemand from "./pages/services/BrandDemand";
import DigitalAdvisory from "./pages/services/DigitalAdvisory";

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
        <Route path="/industries" element={<Industries />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
