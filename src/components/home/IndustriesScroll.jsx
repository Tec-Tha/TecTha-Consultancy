import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const FEATURES = [
  {
    id: 1,
    number: "01",
    title: "Enterprise AI",
    description:
      "Harness the power of artificial intelligence to automate processes, improve decision-making, and unlock new business opportunities.",
    image: "/images/whyus/ai.jpg",
  },
  {
    id: 2,
    number: "02",
    title: "Cloud Engineering",
    description:
      "Build secure, scalable cloud infrastructure that accelerates innovation while reducing operational complexity.",
    image: "/images/whyus/cloud.jpg",
  },
  {
    id: 3,
    number: "03",
    title: "Software Development",
    description:
      "Design and deliver modern digital products with exceptional performance, scalability, and user experience.",
    image: "/images/whyus/software.jpg",
  },
  {
    id: 4,
    number: "04",
    title: "Cyber Security",
    description:
      "Protect your business with intelligent security solutions, continuous monitoring, and proactive threat management.",
    image: "/images/whyus/security.jpg",
  },
  {
    id: 5,
    number: "05",
    title: "Data & Analytics",
    description:
      "Transform enterprise data into actionable insights that drive smarter decisions and measurable growth.",
    image: "/images/whyus/data.jpg",
  },
];

export default function WhyUs() {

const [active,setActive]=useState(0);

return(

<section className="bg-white py-32">

  <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-24 px-8 lg:grid-cols-2">

    {/* LEFT */}

    <div className="lg:sticky lg:top-28 h-fit">

      <div className="mb-8 flex items-center gap-4">

        <div className="h-[2px] w-16 bg-blue-600" />

        <span
          className="
          font-['Montserrat']
          text-sm
          font-bold
          uppercase
          tracking-[6px]
          text-blue-600
          "
        >
          WHY TEC THA
        </span>

      </div>

      <h2
        className="
        font-['Montserrat']
        text-6xl
        font-bold
        leading-[1.05]
        tracking-tight
        text-black
        "
      >
        Technology Built
        <br />
        Around Your
        <br />
        Business
      </h2>

      <p
        className="
        mt-8
        max-w-xl
        text-xl
        leading-9
        text-gray-600
        "
      >
        We combine artificial intelligence,
        cloud engineering and digital innovation
        to help enterprises modernize,
        scale and stay ahead of change.
      </p>

    </div>



    {/* RIGHT */}

    <div className="space-y-8">

      {FEATURES.map((item,index)=>(

        <div
          key={item.id}
          onMouseEnter={()=>setActive(index)}
          className="
          group
          cursor-pointer
          border-b
          border-gray-200
          pb-8
          "
        >

        <div className="flex items-start justify-between gap-10">

  {/* Left Content */}

  <div className="flex gap-8">

    <span
      className={`
      mt-2
      font-['Montserrat']
      text-xl
      font-bold
      transition-all
      duration-300

      ${
        active===index

        ? "text-blue-600"

        : "text-gray-400"

      }
      `}
    >
      {item.number}
    </span>

    <div>

      <h3
        className={`
        font-['Montserrat']
        text-4xl
        font-semibold
        transition-all
        duration-300

        ${
          active===index

          ? "text-black"

          : "text-gray-500"

        }
        `}
      >
        {item.title}
      </h3>

      <AnimatePresence mode="wait">

        {active===index && (

          <motion.p

            key={item.id}

            initial={{
              opacity:0,
              y:20
            }}

            animate={{
              opacity:1,
              y:0
            }}

            exit={{
              opacity:0,
              y:20
            }}

            transition={{
              duration:.35
            }}

            className="
            mt-5
            max-w-lg
            text-lg
            leading-8
            text-gray-600
            "
          >

            {item.description}

          </motion.p>

        )}

      </AnimatePresence>

    </div>

  </div>



  {/* Right Image */}

  <AnimatePresence mode="wait">

    {active===index && (

      <motion.img

        key={item.image}

        src={item.image}

        alt={item.title}

        initial={{
          opacity:0,
          scale:1.08
        }}

        animate={{
          opacity:1,
          scale:1
        }}

        exit={{
          opacity:0,
          scale:1.08
        }}

        transition={{
          duration:.45
        }}

        className="
        h-[260px]
        w-[360px]
        rounded-[24px]
        object-cover
        shadow-xl
        "
      />

    )}

  </AnimatePresence>

</div>

        </div>

      ))}

    </div>

  </div>

</section>

)

}