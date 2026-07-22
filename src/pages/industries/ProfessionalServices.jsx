import { motion } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import ContactCTA from "../../components/home/ContactCTA";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: .8,
      delay,
      ease: [0.22,1,0.36,1],
    },
  }),
};

const focusCards = [
  {
    title:"Business Strategy",
    image:"/industry/54.jpg"
  },
  {
    title:"Digital Consulting",
    image:"/industry/55.jpg"
  },
  {
    title:"Enterprise Advisory",
    image:"/industry/56.jpg"
  },
  {
    title:"Workforce Transformation",
    image:"/industry/57.jpg"
  },
  {
    title:"Business Intelligence",
    image:"/industry/58.jpg"
  },
  {
    title:"Operational Excellence",
    image:"/industry/59.jpg"
  }
];

export default function ProfessionalServices(){

return(

<>

{/* HERO */}

<section className="relative flex min-h-screen items-center overflow-hidden bg-black">

<img
src="/industry/60.jpg"
alt="Professional Services"
className="absolute inset-0 h-full w-full object-cover scale-105"
/>

<div className="absolute inset-0 bg-black/70"/>

<div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/70 to-transparent"/>

<div className="relative z-20 mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">

<motion.p
variants={fadeUp}
initial="hidden"
animate="visible"
custom={0}
className="mb-3 sm:mb-5 text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] sm:tracking-[0.45em] text-blue-400"
>



</motion.p>

<motion.h1
variants={fadeUp}
initial="hidden"
animate="visible"
custom={0.15}
className="max-w-full sm:max-w-xl lg:max-w-5xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-[1.05] sm:leading-[1] lg:leading-[0.95] text-white"
>

Driving
<br/>
Business
<br/>
Transformation.

</motion.h1>

<motion.p
variants={fadeUp}
initial="hidden"
animate="visible"
custom={0.3}
className="mt-5 sm:mt-6 lg:mt-8 max-w-full sm:max-w-xl lg:max-w-2xl text-base sm:text-lg lg:text-xl leading-7 sm:leading-8 lg:leading-9 text-gray-300"
>

Accelerate enterprise growth through digital consulting,
AI-powered insights, operational excellence and
future-ready business transformation strategies.

</motion.p>

<motion.div
variants={fadeUp}
initial="hidden"
animate="visible"
custom={0.45}
className="mt-8 sm:mt-10 lg:mt-12 flex flex-wrap gap-3 sm:gap-4 lg:gap-5"
>

</motion.div>

</div>

<motion.div
animate={{y:[0,12,0]}}
transition={{
repeat:Infinity,
duration:2
}}
className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 text-white"
>

<ChevronDown className="h-8 w-8 sm:h-9 sm:w-9 lg:h-[42px] lg:w-[42px]" />

</motion.div>

</section>
      {/* ================= ENTERPRISE CONSULTING ================= */}

      <section className="bg-[#F8FAFC] py-16 sm:py-20 lg:py-32">

        <div className="mx-auto grid w-full max-w-7xl items-center gap-10 sm:gap-14 lg:gap-24 px-5 sm:px-6 lg:px-8 grid-cols-1 lg:grid-cols-2">

          {/* LEFT IMAGE */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group w-full overflow-hidden"
          >

            <img
              src="/industry/54.jpg"
              alt="Enterprise Consulting"
              className="h-[280px] sm:h-[380px] md:h-[460px] lg:h-[720px] w-full object-cover transition duration-1000 group-hover:scale-110"
            />

          </motion.div>

          {/* RIGHT CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

           
            <h2 className="mt-4 sm:mt-5 lg:mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-[#0F172A]">

              Strategy That
              <br />
              Drives Sustainable
              <br />
              Growth.

            </h2>

            <p className="mt-5 sm:mt-6 lg:mt-8 text-base sm:text-lg leading-7 sm:leading-8 lg:leading-9 text-gray-600">

              Organizations today need more than technology—they need
              strategic partners who understand business transformation.
              We combine digital consulting, AI-driven insights,
              operational excellence and enterprise modernization to
              help businesses grow with confidence.

            </p>

            {/* FEATURES */}

            <div className="mt-8 sm:mt-10 lg:mt-14 space-y-4 sm:space-y-5 lg:space-y-7">

              {[
                "Business Strategy & Advisory",
                "Digital Transformation Consulting",
                "Enterprise Architecture",
                "AI & Data Advisory",
                "Operational Excellence",
                "Workforce Transformation",
              ].map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-3 sm:gap-4 lg:gap-5"
                >

                  <div className="flex h-9 w-9 sm:h-10 sm:w-10 lg:h-11 lg:w-11 shrink-0 items-center justify-center rounded-full bg-blue-600 text-base sm:text-lg font-light text-white">

                    ✓

                  </div>

                  <p className="text-base sm:text-lg text-gray-700">

                    {item}

                  </p>

                </div>

              ))}

            </div>

            

          </motion.div>

        </div>

      </section>
            {/* ================= PROFESSIONAL CAPABILITIES ================= */}

      <section className="bg-[#0B0F16] py-16 sm:py-20 lg:py-32">

        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

          {/* Header */}

          <div className="mb-10 sm:mb-12 lg:mb-16 flex flex-wrap items-center justify-between gap-4">

            <div>

              

              <h2 className="max-w-full lg:max-w-4xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-tight text-white">

                Helping Enterprises
                <br />
                Lead With Confidence

              </h2>

            </div>

          </div>

          {/* Slider */}

          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={20}
            slidesPerView={1.15}
            speed={900}
            breakpoints={{
              0: {
                slidesPerView: 1.15,
                spaceBetween: 16,
              },
              480: {
                slidesPerView: 1.4,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1200: {
                slidesPerView: 3.2,
                spaceBetween: 30,
              },
            }}
          >

            {focusCards.map((card) => (

              <SwiperSlide key={card.title}>

                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.35 }}
                  className="group w-full cursor-pointer overflow-hidden bg-[#111827]"
                >

                  <div className="relative h-[380px] sm:h-[440px] md:h-[500px] lg:h-[560px] overflow-hidden">

                    <img
                      src={card.image}
                      alt={card.title}
                      className="h-full w-full object-cover transition-all duration-1000 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />

                    <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 lg:p-8">

                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-light text-white">

                        {card.title}

                      </h3>

                      <p className="mt-3 sm:mt-4 lg:mt-5 text-sm sm:text-base leading-6 sm:leading-7 lg:leading-8 text-gray-300">

                        Delivering strategic consulting, enterprise
                        modernization and digital transformation that
                        enables organizations to innovate faster and
                        achieve measurable business outcomes.

                      </p>
                    </div>

                  </div>

                </motion.div>

              </SwiperSlide>

            ))}

          </Swiper>

        </div>

      </section>
            {/* ================= BUSINESS TRANSFORMATION ================= */}

      <section className="bg-[#F8FAFC] py-16 sm:py-24 lg:py-36">

        <div className="mx-auto grid w-full max-w-7xl items-center gap-10 sm:gap-14 lg:gap-24 px-5 sm:px-6 lg:px-8 grid-cols-1 lg:grid-cols-2">

          {/* LEFT CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >

            <h2 className="mt-4 sm:mt-5 lg:mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-[#0F172A]">

              Turning
              <br />
              Vision Into
              <br />
              Business Value.

            </h2>

            <p className="mt-5 sm:mt-6 lg:mt-8 text-base sm:text-lg leading-7 sm:leading-8 lg:leading-9 text-gray-600">

              We partner with organizations to solve complex business
              challenges through strategic consulting, digital innovation
              and enterprise transformation. From executive strategy to
              technology implementation, we help businesses become more
              agile, resilient and future-ready.

            </p>
</motion.div>

          {/* RIGHT IMAGE */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group order-1 w-full overflow-hidden lg:order-2"
          >

            <img
              src="/industry/55.jpg"
              alt="Business Transformation"
              className="h-[280px] sm:h-[400px] md:h-[480px] lg:h-[760px] w-full object-cover transition duration-1000 group-hover:scale-110"
            />

          </motion.div>

        </div>

      </section>
            {/* ================= PROFESSIONAL SERVICES CTA ================= */}

      <section className="relative overflow-hidden bg-[#020617] py-20 sm:py-28 lg:py-36">

        {/* Background */}

        <img
          src="/industry/54.jpg"
          alt="Professional Services"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Overlay */}

        <div className="absolute inset-0 bg-black/80" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/70 to-[#020617]" />

        {/* Content */}

        <div className="relative z-20 mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >

            <h2 className="mx-auto max-w-full sm:max-w-2xl lg:max-w-5xl text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-light leading-tight text-white">

              Build Smarter
              <br />
              Businesses For
              <br />
              Tomorrow.

            </h2>

            <p className="mx-auto mt-6 sm:mt-8 lg:mt-10 max-w-full sm:max-w-xl lg:max-w-3xl text-base sm:text-lg lg:text-xl leading-7 sm:leading-8 lg:leading-9 text-gray-300">

              Tec Tha partners with organizations to unlock innovation,
              modernize operations and create long-term value through
              digital transformation, enterprise consulting and
              AI-powered business solutions.

            </p>
 </motion.div>

        </div>

      </section>

      {/* ================= CONTACT ================= */}

      <ContactCTA />

    </>
  );
}