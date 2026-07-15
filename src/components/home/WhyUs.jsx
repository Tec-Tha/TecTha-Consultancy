
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const THINKING = [
  {
    id: 1,
    title: "Technology should never be the destination.",
    highlight: "It should be the advantage.",
    description:
      "Technology creates its greatest value when it empowers people, accelerates business, and delivers meaningful outcomes.",
    image: "/images/thinking/01.jpg",
  },

  {
    id: 2,
    title: "Every solution begins",
    highlight: "with understanding.",
    description:
      "We invest time in understanding your business before designing the technology that supports it.",
    image: "/images/thinking/02.jpg",
  },

  {
    id: 3,
    title: "Innovation without execution",
    highlight: "has no value.",
    description:
      "Ideas become meaningful only when transformed into reliable digital experiences that people trust.",
    image: "/images/thinking/03.jpg",
  },

  {
    id: 4,
    title: "Long-term partnerships",
    highlight: "create lasting success.",
    description:
      "Our work doesn't end at launch. We continue helping businesses evolve and grow.",
    image: "/images/thinking/04.jpg",
  },
];

export default function HowWeThink() {

const sectionRef = useRef(null);

const [active,setActive] = useState(0);

return(

<section
  ref={sectionRef}
  className="
  relative
  h-[500vh]
  bg-white
  "
>

  {/* Sticky Container */}

  <div
    className="
    sticky
    top-0
    flex
    h-screen
    items-center
    overflow-hidden
    "
  >

    <div
      className="
      mx-auto
      grid
      w-full
      max-w-[1700px]
      grid-cols-2
      items-center
      gap-24
      px-12
      "
    >

      {/* LEFT */}

      <div>

        <div className="mb-8 flex items-center gap-5">

          <div className="h-[2px] w-16 bg-blue-600"/>

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

            HOW WE THINK

          </span>

        </div>

        <h2
          className="
          font-['Montserrat']
          text-[70px]
          font-bold
          leading-[0.95]
          tracking-tight
          text-black
          "
        >

          Building Better

          <br/>

          Digital Futures.

        </h2>

        <p
          className="
          mt-8
          max-w-xl
          text-xl
          leading-9
          text-gray-500
          "
        >

          Every scroll reveals another
          principle that defines how we
          build, innovate and create
          meaningful technology.

        </p>

      </div>



      {/* RIGHT */}

      <div>

        {/* NEXT */}

      </div>

    </div>

  </div>

</section>

)

}