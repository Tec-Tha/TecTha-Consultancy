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
    title: "Digital Learning",
    image:
      "/industry/10.jpg",
  },
  {
    title: "Smart Campus",
    image:
      "/industry/11.jpg",
  },
  {
    title: "AI Tutoring",
    image:
      "/industry/12.jpg",
  },
  {
    title: "Learning Analytics",
    image:
      "/industry/13.jpg",
  },
  {
    title: "Virtual Classroom",
    image:
      "/industry/14.jpg",
  },

];

export default function Education() {

  return (

    <>

      {/* HERO */}

      <section className="relative flex min-h-screen items-center overflow-hidden bg-black">

        <img
          src="/industry/15.jpg"
          alt="Education"
          className="absolute inset-0 h-full w-full object-cover scale-105"
        />

        <div className="absolute inset-0 bg-black/65"></div>

        <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/70 to-transparent"></div>

        <div className="relative z-20 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

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
            className="max-w-5xl text-5xl font-light leading-[0.95] text-white sm:text-6xl lg:text-7xl"
          >
            Empowering
            <br />
            Education 
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.3}
            className="mt-6 max-w-2xl text-base leading-8 text-gray-300 sm:mt-8 sm:text-lg sm:leading-9 lg:text-xl lg:leading-9"
          >
            Enable connected campuses, intelligent learning platforms,
            AI-powered education and immersive student experiences
            designed for the future of learning.
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
          animate={{ y:[0,12,0] }}
          transition={{
            repeat:Infinity,
            duration:2
          }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white"
        >

          <ChevronDown size={42} />

        </motion.div>

      </section>
            {/* ================= DIGITAL EDUCATION ================= */}

      <section className="overflow-x-hidden bg-[#F8FAFC] py-20 sm:py-24 lg:py-32">

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
              src="/industry/16.jpg"
              alt="Digital Education"
              className="h-[320px] w-full object-cover transition duration-1000 group-hover:scale-110 sm:h-[480px] lg:h-[720px]"
            />

          </motion.div>

          {/* RIGHT CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >


            <h2 className="mt-6 text-4xl font-light leading-tight text-[#0F172A] sm:text-5xl lg:text-6xl">

              Smarter Learning.
              <br />
              Better Outcomes.

            </h2>

            <p className="mt-6 text-base leading-8 text-gray-600 sm:mt-8 sm:text-lg sm:leading-9">

              Educational institutions are transforming learning through
              AI-powered platforms, virtual classrooms, personalized
              learning experiences and connected campuses that empower
              students, educators and administrators alike.

            </p>

            {/* FEATURES */}

            <div className="mt-8 space-y-5 sm:mt-14 sm:space-y-7">

              {[
                "AI-Powered Learning Platforms",
                "Virtual & Hybrid Classrooms",
                "Student Information Systems",
                "Learning Analytics & Insights",
                "Smart Campus Infrastructure",
                "Digital Assessment & Certification",
              ].map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-5"
                >

                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-base font-light text-white sm:h-11 sm:w-11 sm:text-lg">

                    ✓

                  </div>

                  <p className="text-base text-gray-700 sm:text-lg">

                    {item}

                  </p>

                </div>

              ))}

            </div>

            

          </motion.div>

        </div>

      </section>
            {/* ================= EDUCATION CAPABILITIES ================= */}

      <section className="overflow-x-hidden bg-[#0B0F16] py-20 sm:py-24 lg:py-32">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Header */}

          <div className="mb-10 flex flex-col items-start gap-4 sm:mb-16 sm:flex-row sm:items-center sm:justify-between">

            <div>

             
              <h2 className="max-w-4xl text-4xl font-light leading-tight text-white sm:text-5xl lg:text-6xl">

                Building Intelligent
                <br />
                Learning Ecosystems

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
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.35 }}
                  className="group cursor-pointer overflow-hidden bg-[#111827]"
                >

                  <div className="relative h-[320px] overflow-hidden sm:h-[460px] lg:h-[560px]">

                    <img
                      src={card.image}
                      alt={card.title}
                      className="h-full w-full object-cover transition-all duration-1000 group-hover:scale-110"
                    />

                    {/* Overlay */}

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />

                    {/* Content */}

                    <div className="absolute bottom-0 left-0 right-0 p-8">

                      <h3 className="text-2xl font-light text-white sm:text-3xl">

                        {card.title}

                      </h3>

                      <p className="mt-3 text-sm leading-7 text-gray-300 sm:mt-5 sm:text-base sm:leading-8">

                        Empower educational institutions with connected
                        learning, AI-driven insights, digital collaboration
                        and future-ready campus experiences.

                      </p>

                </div>

                  </div>

                </motion.div>

              </SwiperSlide>

            ))}

          </Swiper>

        </div>

      </section>
            {/* ================= FUTURE OF EDUCATION ================= */}

      <section className="overflow-x-hidden bg-[#F8FAFC] py-20 sm:py-28 lg:py-36">

        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:gap-14 sm:px-6 lg:grid-cols-2 lg:gap-24 lg:px-8">

          {/* LEFT CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
           <h2 className="mt-6 text-4xl font-light leading-tight text-[#0F172A] sm:text-5xl lg:text-6xl">

              Creating
              <br />
              Connected
              <br />
              Learning.

            </h2>

           <p className="mt-6 text-base leading-8 text-gray-600 sm:mt-8 sm:text-lg sm:leading-9">

              Modern education requires intelligent digital ecosystems that
              connect students, educators and institutions through AI,
              analytics, cloud platforms and immersive learning experiences.
              We help educational organizations build future-ready campuses
              that inspire innovation and lifelong learning.

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
              src="/industry/17.jpg"
              alt="Future Education"
              className="h-[320px] w-full object-cover transition duration-1000 group-hover:scale-110 sm:h-[480px] lg:h-[760px]"
            />

          </motion.div>

        </div>

      </section>
            {/* ================= EDUCATION CTA ================= */}

      <section className="relative overflow-hidden bg-[#020617] py-20 sm:py-28 lg:py-36">

        {/* Background */}

        <img
          src="/industry/17.jpg"
          alt="Education CTA"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Overlay */}

        <div className="absolute inset-0 bg-black/75" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/70 to-[#020617]" />

        {/* Content */}

        <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >

            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.45em] text-blue-400">

              EMPOWERING THE NEXT GENERATION

            </p>

            <h2 className="mx-auto max-w-5xl text-4xl font-light leading-tight text-white sm:text-5xl lg:text-7xl">

              Build Future-Ready
              <br />
              Learning
              <br />
              Experiences.

            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-gray-300 sm:mt-10 sm:text-lg sm:leading-9 lg:text-xl lg:leading-9">

              Empower schools, universities and educational institutions
              with intelligent digital platforms, AI-driven learning,
              connected campuses and immersive education experiences
              designed for tomorrow's learners.

            </p>

         </motion.div>

        </div>

      </section>

      {/* ================= CONTACT ================= */}

      <ContactCTA />

    </>
  );
}