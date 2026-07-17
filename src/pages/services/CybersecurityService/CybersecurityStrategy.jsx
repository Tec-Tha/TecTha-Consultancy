import ServiceNavbar from "../../../components/layout/ServiceNavbar";

const CybersecurityStrategy = () => {
  return (
    <div className="min-h-screen bg-[#020617] text-white">
      <ServiceNavbar />
      <section className="pt-40 pb-24 px-6 md:px-10 max-w-[1200px] mx-auto">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#818CF8] mb-4 font-['Montserrat']">
          Cybersecurity Strategy
        </p>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          A security roadmap that matches your real risk.
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl">
          Threat modeling, maturity assessments, and a prioritized roadmap
          — built around what's actually likely to hurt you, not a
          checklist.
        </p>
      </section>
    </div>
  );
};

export default CybersecurityStrategy;