import ServiceNavbar from "../../../components/layout/ServiceNavbar";

const GovernanceRiskCompliance = () => {
  return (
    <div className="min-h-screen bg-[#020617] text-white">
      <ServiceNavbar />
      <section className="pt-40 pb-24 px-6 md:px-10 max-w-[1200px] mx-auto">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#818CF8] mb-4 font-['Montserrat']">
          Governance, Risk & Compliance
        </p>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Pass the audit without the last-minute scramble.
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl">
          SOC 2, ISO 27001, HIPAA, and GDPR readiness built into your
          operations — not bolted on before an audit.
        </p>
      </section>
    </div>
  );
};

export default GovernanceRiskCompliance;