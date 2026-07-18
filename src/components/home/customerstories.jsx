import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";

const STORIES = [
  {
    id: 1,
    category: "Financial Services",
    title: "Accelerating Digital Banking",
    description:
      "Helping financial institutions modernize customer experiences through secure, cloud-native platforms and intelligent automation.",
    image: "/customer2.jpg",
  
  },
  {
    id: 2,
    category: "Healthcare",
    title: "Transforming Healthcare Experiences",
    description:
      "Connecting patients, clinicians, and healthcare systems through integrated digital platforms powered by data and AI.",
    image: "/customer1.jpg",
   
  },
  {
    id: 3,
    category: "Manufacturing",
    title: "Modernizing Manufacturing Operations",
    description:
      "Creating connected factories with real-time production visibility, predictive maintenance, and intelligent automation.",
    image: "/customer3.jpg",
  
  },
  {
    id: 4,
    category: "Retail",
    title: "Reimagining Retail Commerce",
    description:
      "Delivering personalized omnichannel experiences with unified commerce platforms and advanced customer insights.",
    image: "/customer5.jpg",
  
  },
  {
    id: 5,
    category: "Energy & Utilities",
    title: "Building Intelligent Energy Networks",
    description:
      "Driving operational resilience with connected infrastructure, predictive analytics, and sustainable energy management.",
    image: "/customer6.jpg",
    
  },
  {
    id: 6,
    category: "Public Sector",
    title: "Digitizing Public Services",
    description:
      "Designing secure, accessible citizen service platforms that improve efficiency and deliver better public experiences.",
    image: "/customer4.jpg",
   
  },
];

const CustomerStories = () => {
  return (
    <section className="bg-white pt-20 pb-24">
      <div className="mx-auto max-w-[1600px] px-8">

        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            font-['Montserrat']
            text-3xl
            font-medium
            tracking-tight
            text-black
            mb-10
            max-w-5xl
            lg:text-4xl
          "
        >
          Customer Stories
        </motion.h2>

        {/* Navigation */}
        <div className="mb-16 flex justify-end gap-4">
          <button
            className="
              stories-prev
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-full
              border
              border-gray-300
              text-black
              transition-all
              duration-300
              hover:bg-black
              hover:text-white
            "
            aria-label="Previous slide"
          >
            <ArrowLeft size={20} />
          </button>

          <button
            className="
              stories-next
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-full
              border
              border-gray-300
              text-black
              transition-all
              duration-300
              hover:bg-black
              hover:text-white
            "
            aria-label="Next slide"
          >
            <ArrowRight size={20} />
          </button>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: ".stories-prev",
            nextEl: ".stories-next",
          }}
          spaceBetween={30}
          speed={1000}
          slidesPerView={1.1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
          }}
          className="customerSwiper"
        >
          {STORIES.map((story, index) => (
            <SwiperSlide key={story.id}>
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                }}
              >
                <Link
                  to={story.link}
                  className="
                    group
                    relative
                    block
                    h-[600px]
                    overflow-hidden 
                    rounded-[5px]
                  "
                >
                  {/* Image */}
                  <img
                    src={story.image}
                    alt={story.title}
                    className="
                      absolute
                      inset-0
                      h-full
                      w-full
                      object-cover
                      scale-[1.12]
                      brightness-[45%]
                      transition-all
                      duration-[1500ms]
                      ease-out
                      group-hover:scale-100
                      group-hover:brightness-100
                    "
                  />

                  {/* Gradient Overlay */}
                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black
                      via-black/45
                      to-transparent
                      transition-all
                      duration-700
                      group-hover:from-black/70
                      group-hover:via-black/20
                    "
                  />

                  {/* Bottom Content */}
                  <div
                    className="
                      absolute
                      bottom-0
                      left-0
                      right-0
                      z-20
                      p-10
                    "
                  >
                    <div
                      className="
                        translate-y-10
                        transition-all
                        duration-700
                        group-hover:translate-y-0
                      "
                    >
                      <h3
                        className="
                          font-['Montserrat']
                          text-[38px]
                          font-normal
                          leading-tight
                          tracking-tight
                          text-white
                        "
                      >
                        {story.title}
                      </h3>

                      <p
                        className="
                          mt-6
                          text-lg
                          leading-8
                          text-white/80
                          opacity-0
                          translate-y-8
                          transition-all
                          duration-700
                          group-hover:translate-y-0
                          group-hover:opacity-100
                        "
                      >
                        {story.description}
                      </p>

                    
                    </div>
                  </div>
                </Link>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

export default CustomerStories;