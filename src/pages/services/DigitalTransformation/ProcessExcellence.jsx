import ServiceNavbar from "../../../components/layout/ServiceNavbar";

const ProcessExcellence = () => {
  return (
    <div className="min-h-screen bg-[#020617] text-white">
      <ServiceNavbar />
      <section className="pt-40 pb-24 px-6 md:px-10 max-w-[1200px] mx-auto">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#818CF8] mb-4 font-['Montserrat']">
          Process Excellence
        </p>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Find the bottleneck before you automate around it.
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl">
          Process mining, workflow redesign, and operational efficiency
          work that targets root cause, not symptoms.
        </p>
      </section>
    </div>
  );
};

export default ProcessExcellence;