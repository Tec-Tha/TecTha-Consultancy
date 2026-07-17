import ServiceNavbar from "../../../components/layout/ServiceNavbar";

const EnterpriseArchitecture = () => {
  return (
    <div className="min-h-screen bg-[#020617] text-white">
      <ServiceNavbar />
      <section className="pt-40 pb-24 px-6 md:px-10 max-w-[1200px] mx-auto">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#818CF8] mb-4 font-['Montserrat']">
          Enterprise Architecture
        </p>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          A system landscape that doesn't fight itself.
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl">
          Application, data, and integration architecture designed for
          scale — so new systems don't become new bottlenecks.
        </p>
      </section>
    </div>
  );
};

export default EnterpriseArchitecture;