import ServiceNavbar from "../../../components/layout/ServiceNavbar";

const CustomApplications = () => {
  return (
    <div className="min-h-screen bg-[#020617] text-white">
      <ServiceNavbar />
      <section className="pt-40 pb-24 px-6 md:px-10 max-w-[1200px] mx-auto">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#818CF8] mb-4 font-['Montserrat']">
          Custom Applications
        </p>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Built for your exact problem, not a generic use case.
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl">
          Custom software development when off-the-shelf tools don't fit
          how your business actually works.
        </p>
      </section>
    </div>
  );
};

export default CustomApplications;