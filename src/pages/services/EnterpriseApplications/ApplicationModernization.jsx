import ServiceNavbar from "../../../components/layout/ServiceNavbar";

const ApplicationModernization = () => {
  return (
    <div className="min-h-screen bg-[#020617] text-white">
      <ServiceNavbar />
      <section className="pt-40 pb-24 px-6 md:px-10 max-w-[1200px] mx-auto">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#818CF8] mb-4 font-['Montserrat']">
          Application Modernization
        </p>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Legacy systems, rebuilt without the risk of a rewrite.
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl">
          Incremental modernization of legacy applications — new
          architecture without a big-bang rebuild.
        </p>
      </section>
    </div>
  );
};

export default ApplicationModernization;