import ServiceNavbar from "../../../components/layout/ServiceNavbar";

const EnterpriseSoftwaree = () => {
  return (
    <div className="min-h-screen bg-[#020617] text-white">
      <ServiceNavbar />
      <section className="pt-40 pb-24 px-6 md:px-10 max-w-[1200px] mx-auto">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#818CF8] mb-4 font-['Montserrat']">
          Enterprise Software
        </p>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Software built to hold up at enterprise scale.
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl">
          Large-scale software engineering with the security, reliability,
          and maintainability enterprise systems demand.
        </p>
      </section>
    </div>
  );
};

export default EnterpriseSoftwaree;