import ServiceNavbar from "../../../components/layout/ServiceNavbar";

const ExecutiveIntelligence = () => {
  return (
    <div className="min-h-screen bg-[#020617] text-white">
      <ServiceNavbar />
      <section className="pt-40 pb-24 px-6 md:px-10 max-w-[1200px] mx-auto">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#818CF8] mb-4 font-['Montserrat']">
          Executive Intelligence
        </p>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          The one dashboard leadership actually opens.
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl">
          Executive-level reporting that distills company-wide data into
          the handful of numbers leadership needs to act on.
        </p>
      </section>
    </div>
  );
};

export default ExecutiveIntelligence;