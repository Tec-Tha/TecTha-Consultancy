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
      duration: 0.8,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const focusCards = [
  {
    title: "AI Diagnostics",
    image:
      "/industry/44.jpg",
    desc: "AI-assisted diagnosis for faster and more accurate clinical decisions.",
  },
  {
    title: "Smart Hospitals",
    image:
      "/industry/45.jpg",
    desc: "Digitally connected hospitals powered by intelligent systems.",
  },
  {
    title: "Remote Monitoring",
    image:
      "/industry/46.jpg",
    desc: "Continuous patient monitoring through IoT healthcare devices.",
  },
  {
    title: "Healthcare Analytics",
    image:
      "/industry/47.jpg",
    desc: "Real-time insights for better patient outcomes and planning.",
  },
  {
    title: "Electronic Records",
    image:
      "/industry/48.jpg",
    desc: "Secure and scalable electronic medical record platforms.",
  },
  {
    title: "Precision Medicine",
    image:
      "/industry/49.jpg",
    desc: "Personalized treatment powered by AI and genomic intelligence.",
  },
];

export default function Healthcare() {
  return (
    <>

      {/* ================= HERO ================= */}

      <section className="relative flex h-screen items-center overflow-hidden bg-black">

        {/* Background */}

        <img
          src="/industry/50.jpg"
          alt="Healthcare"
          className="absolute inset-0 h-full w-full object-cover scale-105"
        />

        {/* Overlay */}

        <div className="absolute inset-0 bg-black/65" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/65 to-transparent" />

        <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_20%_40%,rgba(37,99,235,.20),transparent_45%)]" />

        {/* Content */}

        <div className="relative z-20 mx-auto w-full max-w-7xl px-8">

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="mb-5 text-sm font-semibold uppercase tracking-[0.45em] text-blue-400"
          >
           
          </motion.p>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.15}
            className="max-w-4xl text-[clamp(4rem,7vw,7rem)] font-light leading-[0.95] text-white"
          >
         Advancing<br />Healthcare
            
            
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.3}
            className="mt-8 max-w-2xl text-xl leading-9 text-gray-300"
          >
            We help healthcare providers, hospitals and life sciences
            organizations deliver intelligent patient experiences,
            connected care and AI-powered clinical innovation.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.45}
            className="mt-12 flex gap-5"
          >

          </motion.div>

        </div>

        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white"
        >
          <ChevronDown size={42} />
        </motion.div>

      </section>
            {/* ================= DIGITAL HEALTHCARE ================= */}

      <section className="bg-white py-32">

        <div className="mx-auto grid max-w-7xl items-center gap-24 px-8 lg:grid-cols-2">

          {/* LEFT IMAGE */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group overflow-hidden"
          >

            <img
              src="/industry/51.jpg"
              alt="Digital Healthcare"
              className="h-[720px] w-full object-cover transition duration-1000 group-hover:scale-110"
            />

          </motion.div>

          {/* RIGHT CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            <span className="text-sm font-semibold uppercase tracking-[0.45em] text-blue-400">

              DIGITAL HEALTHCARE

            </span>

           <h2 className="mt-6 text-6xl font-light leading-tight text-[#0F172A]"> 

              Intelligent Care
              <br />
              For Every Patient.

            </h2>

          <p className="mt-8 text-lg leading-9 text-gray-400">

              Healthcare organizations are embracing AI, cloud platforms,
              connected medical devices and predictive analytics to
              improve patient outcomes, optimize hospital operations
              and deliver personalized healthcare experiences.

            </p>

            {/* FEATURES */}

            <div className="mt-14 space-y-7">

              {[
                "AI Assisted Clinical Diagnosis",
                "Smart Hospital Management",
                "Remote Patient Monitoring",
                "Electronic Health Records",
                "Predictive Healthcare Analytics",
                "Medical IoT Integration",
              ].map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-5"
                >

                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-lg font-light text-white">

                    ✓

                  </div>

                  <p className="text-lg text-gray-700">

                    {item}

                  </p>

                </div>

              ))}

            </div>

            

          </motion.div>

        </div>

      </section>
            {/* ================= IN FOCUS ================= */}

      <section className="bg-[#0B0F16] py-32">

        <div className="mx-auto max-w-7xl px-8">

          {/* Header */}

          <div className="mb-16 flex items-center justify-between">

            <div>

              
              

              <h2 className="text-6xl font-light leading-tight text-white">

                Healthcare Capabilities

              </h2>

            </div>

          </div>

          {/* Slider */}

          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={30}
            slidesPerView={3.2}
            speed={900}
            breakpoints={{
              0: {
                slidesPerView: 1.15,
              },
              768: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3.2,
              },
            }}
          >

            {focusCards.map((card) => (

              <SwiperSlide key={card.title}>

                <motion.div
                  whileHover={{
                    y: -12,
                  }}
                  transition={{
                    duration: .35,
                  }}
                  className="group cursor-pointer overflow-hidden bg-[#111827]"
                >

                  <div className="relative h-[560px] overflow-hidden">

                    <img
                      src={card.image}
                      alt={card.title}
                      className="h-full w-full object-cover transition-all duration-1000 group-hover:scale-110"
                    />

                    {/* Overlay */}

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                    {/* Content */}

                    <div className="absolute bottom-0 left-0 right-0 p-8">

                      <h3 className="text-3xl font-light text-white">

                        {card.title}

                      </h3>

                      <p className="mt-5 leading-8 text-gray-300">

                        Intelligent healthcare solutions that improve patient
                        outcomes, operational efficiency and connected care.

                      </p>
</div>

                  </div>

                </motion.div>

              </SwiperSlide>

            ))}

          </Swiper>

        </div>

      </section>
            {/* ================= CONNECTED HEALTHCARE ================= */}

      <section className="bg-white py-36">

        <div className="mx-auto grid max-w-7xl items-center gap-24 px-8 lg:grid-cols-2">

          {/* LEFT CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            <span className="text-sm font-semibold uppercase tracking-[0.45em] text-blue-400">

              CONNECTED HEALTHCARE

            </span>

            <h2 className="mt-6 text-6xl font-light leading-tight text-[#0F172A]">

              Building The
              <br />
              Future Of
              <br />
              Patient Care.

            </h2>

            <p className="mt-8 text-lg leading-9 text-gray-600">

              Modern healthcare demands connected systems, secure data
              exchange, AI-powered clinical support and digital experiences
              that improve every patient interaction. We help hospitals and
              healthcare providers accelerate innovation while maintaining
              compliance, security and operational excellence.

            </p>


          </motion.div>

          {/* RIGHT IMAGE */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group overflow-hidden"
          >

            <img
              src="/industry/52.jpg"
              alt="Healthcare Technology"
              className="h-[760px] w-full object-cover transition duration-1000 group-hover:scale-110"
            />

          </motion.div>

        </div>

      </section>
            {/* ================= HEALTHCARE CTA ================= */}

      <section className="relative overflow-hidden bg-[#020617] py-36">

        {/* Background Image */}

        <img
          src="/industry/53.jpg"
          alt="Healthcare"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Overlay */}

        <div className="absolute inset-0 bg-black/75" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/70 to-[#020617]" />

        <div className="relative z-20 mx-auto max-w-7xl px-8">

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >

            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.45em] text-blue-400">

              SHAPING THE FUTURE OF HEALTHCARE

            </p>

            <h2 className="mx-auto max-w-5xl text-[clamp(3.5rem,6vw,6rem)] font-light leading-tight text-white">

              Deliver Better Care.
              <br />
              Empower Every Patient.

            </h2>

            <p className="mx-auto mt-10 max-w-3xl text-xl leading-9 text-gray-300">

              From intelligent hospitals to connected patient experiences,
              Tec Tha enables healthcare organizations to innovate with AI,
              cloud platforms and secure digital ecosystems.

            </p>

          </motion.div>

        </div>

      </section>

      {/* ================= CONTACT ================= */}

      <ContactCTA />

    </>
  );
}