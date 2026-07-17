import ServiceNavbar from "../../../components/layout/ServiceNavbar";

const CloudMigration = () => {
  return (
    <div className="min-h-screen bg-[#020617] text-white">
      <ServiceNavbar />
      <section className="pt-40 pb-24 px-6 md:px-10 max-w-[1200px] mx-auto">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#818CF8] mb-4 font-['Montserrat']">
          Cloud Migration
        </p>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Move to the cloud without the downtime horror stories.
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl">
          Lift-and-shift, re-platforming, or full re-architecture — planned
          and executed with zero surprise outages.
        </p>
      </section>
    </div>
  );
};

export default CloudMigration;