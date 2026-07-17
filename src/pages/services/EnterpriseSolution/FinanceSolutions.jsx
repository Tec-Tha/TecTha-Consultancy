import ServiceNavbar from "../../../components/layout/ServiceNavbar";

const FinanceSolutions = () => {
  return (
    <div className="min-h-screen bg-[#020617] text-white">
      <ServiceNavbar />
      <section className="pt-40 pb-24 px-6 md:px-10 max-w-[1200px] mx-auto">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#818CF8] mb-4 font-['Montserrat']">
          Finance Solutions
        </p>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Close the books faster, with fewer manual reconciliations.
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl">
          Financial planning, accounting, and reporting systems built for
          accuracy at month-end, not just a nice dashboard.
        </p>
      </section>
    </div>
  );
};

export default FinanceSolutions;