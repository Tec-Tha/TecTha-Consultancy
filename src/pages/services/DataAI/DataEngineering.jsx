import ServiceNavbar from "../../../components/layout/ServiceNavbar";

const DataEngineering = () => {
  return (
    <div className="min-h-screen bg-[#020617] text-white">
      <ServiceNavbar />
      <section className="pt-40 pb-24 px-6 md:px-10 max-w-[1200px] mx-auto">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#818CF8] mb-4 font-['Montserrat']">
          Data Engineering
        </p>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Pipelines that deliver clean data, on schedule, every time.
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl">
          ETL/ELT pipelines and data warehousing built for reliability at
          the volume your business actually generates.
        </p>
      </section>
    </div>
  );
};

export default DataEngineering;