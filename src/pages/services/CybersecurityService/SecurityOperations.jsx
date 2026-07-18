import ServiceNavbar from "../../../components/layout/ServiceNavbar";

const SecurityOperations = () => {
  return (
    <div className="min-h-screen bg-[#020617] text-white">
      <ServiceNavbar />
      <section className="pt-40 pb-24 px-6 md:px-10 max-w-[1200px] mx-auto">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#818CF8] mb-4 font-['Montserrat']">
          Security Operations
        </p>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Threats detected and stopped before they spread.
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl">
          SIEM, threat detection, and incident response workflows built for
          real-time visibility across your environment.
        </p>
      </section>
    </div>
  );
};

export default SecurityOperations;