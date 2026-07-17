import ServiceNavbar from "../../../components/layout/ServiceNavbar";

const ManagedCloud = () => {
  return (
    <div className="min-h-screen bg-[#020617] text-white">
      <ServiceNavbar />
      <section className="pt-40 pb-24 px-6 md:px-10 max-w-[1200px] mx-auto">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#818CF8] mb-4 font-['Montserrat']">
          Managed Cloud
        </p>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          24/7 cloud operations, off your plate.
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl">
          Monitoring, patching, cost optimization, and incident response —
          fully managed so your team can focus on product.
        </p>
      </section>
    </div>
  );
};

export default ManagedCloud;