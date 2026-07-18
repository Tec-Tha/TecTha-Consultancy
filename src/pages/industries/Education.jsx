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
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&q=80",
  },
  {
    title: "Smart Campus",
    image:
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&q=80",
  },
  {
    title: "AI Tutoring",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&q=80",
  },
  {
    title: "Learning Analytics",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&q=80",
  },
  {
    title: "Virtual Classroom",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80",
  },
  {
    title: "Student Experience",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=80",
  },
];

export default function Education() {

  return (

    <>

      {/* HERO */}

      <section className="relative flex h-screen items-center overflow-hidden bg-black">

        <img
          src="https://img.magnific.com/free-photo/book-with-green-board-background_1150-3837.jpg?semt=ais_hybrid&w=740&q=80"
          alt="Education"
          className="absolute inset-0 h-full w-full object-cover scale-105"
        />

        <div className="absolute inset-0 bg-black/65"></div>

        <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/70 to-transparent"></div>

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
            className="max-w-5xl text-[clamp(4rem,7vw,7rem)] font-black leading-[0.95] text-white"
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
            className="mt-8 max-w-2xl text-xl leading-9 text-gray-300"
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

      <section className="bg-[#05070B] py-32">

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
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1800&q=80"
              alt="Digital Education"
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


            <h2 className="mt-6 text-6xl font-black leading-tight text-white">

              Smarter Learning.
              <br />
              Better Outcomes.

            </h2>

            <p className="mt-8 text-lg leading-9 text-gray-400">

              Educational institutions are transforming learning through
              AI-powered platforms, virtual classrooms, personalized
              learning experiences and connected campuses that empower
              students, educators and administrators alike.

            </p>

            {/* FEATURES */}

            <div className="mt-14 space-y-7">

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

                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">

                    ✓

                  </div>

                  <p className="text-lg text-gray-200">

                    {item}

                  </p>

                </div>

              ))}

            </div>

            

          </motion.div>

        </div>

      </section>
            {/* ================= EDUCATION CAPABILITIES ================= */}

      <section className="bg-[#0B0F16] py-32">

        <div className="mx-auto max-w-7xl px-8">

          {/* Header */}

          <div className="mb-16 flex items-center justify-between">

            <div>

             
              <h2 className="max-w-4xl text-6xl font-black leading-tight text-white">

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

                  <div className="relative h-[560px] overflow-hidden">

                    <img
                      src={card.image}
                      alt={card.title}
                      className="h-full w-full object-cover transition-all duration-1000 group-hover:scale-110"
                    />

                    {/* Overlay */}

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />

                    {/* Content */}

                    <div className="absolute bottom-0 left-0 right-0 p-8">

                      <h3 className="text-3xl font-bold text-white">

                        {card.title}

                      </h3>

                      <p className="mt-5 leading-8 text-gray-300">

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

      <section className="bg-[#05070B] py-36">

        <div className="mx-auto grid max-w-7xl items-center gap-24 px-8 lg:grid-cols-2">

          {/* LEFT CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mt-6 text-6xl font-black leading-tight text-white">

              Creating
              <br />
              Connected
              <br />
              Learning.

            </h2>

            <p className="mt-8 text-lg leading-9 text-gray-400">

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
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1800&q=80"
              alt="Future Education"
              className="h-[760px] w-full object-cover transition duration-1000 group-hover:scale-110"
            />

          </motion.div>

        </div>

      </section>
            {/* ================= EDUCATION CTA ================= */}

      <section className="relative overflow-hidden bg-[#020617] py-36">

        {/* Background */}

        <img
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=2200&q=80"
          alt="Education CTA"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Overlay */}

        <div className="absolute inset-0 bg-black/75" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/70 to-[#020617]" />

        {/* Content */}

        <div className="relative z-20 mx-auto max-w-7xl px-8">

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

            <h2 className="mx-auto max-w-5xl text-[clamp(3.5rem,6vw,6rem)] font-black leading-tight text-white">

              Build Future-Ready
              <br />
              Learning
              <br />
              Experiences.

            </h2>

            <p className="mx-auto mt-10 max-w-3xl text-xl leading-9 text-gray-300">

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