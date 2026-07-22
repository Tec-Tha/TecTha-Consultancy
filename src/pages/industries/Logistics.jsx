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
    title:"Warehouse Automation",
    image:"/industry/21.jpg"
  },
  {
    title:"Fleet Intelligence",
    image:"/industry/22.jpg"
  },
  {
    title:"AI Route Planning",
    image:"/industry/23.jpg"
  },
  {
    title:"Supply Chain Visibility",
    image:"/industry/24.jpg"
  },
  {
    title:"Inventory Intelligence",
    image:"/industry/25.jpg"
  },
  {
    title:"Smart Distribution",
    image:"/industry/26.jpg"
  }
];

export default function Logistics(){

return(

<>

<section className="relative flex h-screen items-center overflow-hidden bg-black">

<img
src="/industry/21.jpg"
className="absolute inset-0 h-full w-full object-cover scale-105"
alt=""
/>

<div className="absolute inset-0 bg-black/70"/>

<div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/70 to-transparent"/>

<div className="relative z-20 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

<motion.p
variants={fadeUp}
initial="hidden"
animate="visible"
custom={0}
className="mb-5 uppercase tracking-[0.2em] sm:tracking-[0.3em] lg:tracking-[0.45em] text-blue-400"
>


</motion.p>

<motion.h1
variants={fadeUp}
initial="hidden"
animate="visible"
custom={0.15}
className="max-w-7xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-[1.05] lg:leading-[0.95] text-white"
>

Intelligent
<br/>
Supply Chain
<br/>
Transformation.

</motion.h1>

<motion.p
variants={fadeUp}
initial="hidden"
animate="visible"
custom={0.3}
className="mt-6 lg:mt-8 max-w-2xl text-base sm:text-lg lg:text-xl leading-7 sm:leading-8 lg:leading-9 text-gray-300"
>

Transform logistics operations through AI,
warehouse automation, connected fleets,
predictive analytics and real-time supply chain visibility.

</motion.p>

<motion.div
variants={fadeUp}
initial="hidden"
animate="visible"
custom={0.45}
className="mt-10 lg:mt-12 flex gap-5"
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

<ChevronDown size={42}/>

</motion.div>

</section>
      {/* ================= SMART LOGISTICS ================= */}

      <section className="bg-[#F8FAFC] py-16 md:py-24 lg:py-32">

        <div className="mx-auto grid max-w-7xl items-center gap-10 md:gap-16 lg:gap-24 px-4 sm:px-6 lg:px-8 lg:grid-cols-2">

          {/* LEFT IMAGE */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group overflow-hidden"
          >

            <img
              src="/industry/27.jpg"
              alt="Smart Logistics"
              className="h-[280px] sm:h-[420px] md:h-[560px] lg:h-[720px] w-full object-cover transition duration-1000 group-hover:scale-110"
            />

          </motion.div>

          {/* RIGHT CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >


            <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-[#0F172A]">

              Faster Delivery.
              <br />
              Smarter
              <br />
              Operations.

            </h2>

            <p className="mt-6 lg:mt-8 text-base sm:text-lg lg:text-lg leading-7 lg:leading-9 text-gray-600">

              Modern logistics organizations rely on connected supply chains,
              intelligent automation and AI-powered visibility to optimize
              warehouse operations, transportation networks and last-mile
              delivery while reducing operational costs.

            </p>

            {/* FEATURES */}

            <div className="mt-10 lg:mt-14 space-y-5 lg:space-y-7">

              {[
                "AI Route Optimization",
                "Warehouse Automation",
                "Fleet Intelligence",
                "Real-Time Shipment Tracking",
                "Inventory Optimization",
                "Predictive Supply Chain Analytics",
              ].map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-4 sm:gap-5"
                >

                  <div className="flex h-9 w-9 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-full bg-blue-600 text-base sm:text-lg font-light text-white">

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
            {/* ================= LOGISTICS CAPABILITIES ================= */}

      <section className="bg-[#0B0F16] py-16 md:py-24 lg:py-32">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Header */}

          <div className="mb-10 lg:mb-16 flex items-center justify-between">

            <div>


              <h2 className="max-w-4xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-white">

                Powering Intelligent
                <br />
                Supply Chains

              </h2>

            </div>

          </div>

          {/* Slider */}

          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={20}
            slidesPerView={3.2}
            speed={900}
            breakpoints={{
              0: {
                slidesPerView: 1.15,
                spaceBetween: 16,
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
                  className="group cursor-pointer overflow-hidden bg-[#111827]"
                >

                  <div className="relative h-[320px] sm:h-[420px] md:h-[480px] lg:h-[560px] overflow-hidden">

                    <img
                      src={card.image}
                      alt={card.title}
                      className="h-full w-full object-cover transition-all duration-1000 group-hover:scale-110"
                    />

                    {/* Overlay */}

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />

                    {/* Content */}

                    <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 lg:p-8">

                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-light text-white">

                        {card.title}

                      </h3>

                      <p className="mt-3 sm:mt-4 lg:mt-5 text-sm sm:text-base leading-6 lg:leading-8 text-gray-300">

                        Build resilient logistics ecosystems with intelligent
                        automation, AI-powered planning, connected warehouses
                        and real-time operational visibility.

                      </p>
                    </div>

                  </div>

                </motion.div>

              </SwiperSlide>

            ))}

          </Swiper>

        </div>

      </section>
            {/* ================= FUTURE OF LOGISTICS ================= */}

      <section className="bg-[#F8FAFC] py-16 md:py-24 lg:py-36">

        <div className="mx-auto grid max-w-7xl items-center gap-10 md:gap-16 lg:gap-24 px-4 sm:px-6 lg:px-8 lg:grid-cols-2">

          {/* LEFT CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            <h2 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight text-[#0F172A]">

              Delivering
              <br />
              Smarter Supply
              <br />
              Chains.

            </h2>

            <p className="mt-6 lg:mt-8 text-base sm:text-lg lg:text-lg leading-7 lg:leading-9 text-gray-600">

              Logistics leaders are embracing AI, automation and connected
              ecosystems to improve visibility, reduce costs and deliver
              faster customer experiences. Tec Tha helps organizations
              modernize supply chain operations with scalable digital
              platforms built for global commerce.

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
              src="/industry/26.jpg"
              alt="Future Logistics"
              className="h-[300px] sm:h-[440px] md:h-[600px] lg:h-[760px] w-full object-cover transition duration-1000 group-hover:scale-110"
            />

          </motion.div>

        </div>

      </section>
            {/* ================= LOGISTICS CTA ================= */}

      <section className="relative overflow-hidden bg-[#020617] py-16 md:py-24 lg:py-36">

        {/* Background */}

        <img
          src="/industry/28.jpg"
          alt="Logistics CTA"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Dark Overlay */}

        <div className="absolute inset-0 bg-black/80" />

        {/* Gradient */}

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


            <h2 className="mx-auto max-w-5xl text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-light leading-tight text-white">

              Build Intelligent
              <br />
              Logistics Networks
              <br />
              At Scale.

            </h2>

            <p className="mx-auto mt-8 lg:mt-10 max-w-3xl text-base sm:text-lg lg:text-xl leading-7 sm:leading-8 lg:leading-9 text-gray-300">

              Modernize your logistics ecosystem with AI-powered
              warehouse automation, real-time fleet visibility,
              predictive supply chain intelligence and cloud-native
              logistics platforms built for global operations.

            </p>

            

          </motion.div>

        </div>

      </section>

      {/* ================= CONTACT CTA ================= */}

      <ContactCTA />

    </>
  );
}