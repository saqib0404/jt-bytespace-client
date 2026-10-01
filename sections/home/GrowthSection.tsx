"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import {
  motion,
  useReducedMotion,
} from "framer-motion";

import Container from "@/components/ui/Container";
import HappyStudentsCard from "@/components/ui/HappyStudentsCard";
import DecorativeShape from "@/components/decorations/DecorativeShape";

import {
  fadeUp,
  scaleIn,
  staggerContainer,
} from "@/components/animations/variants";

const stats = [
  {
    value: "12K",
    label: "Students",
  },
  {
    value: "70+",
    label: "Courses",
  },
  {
    value: "16",
    label: "Creators",
  },
];

const creatorBenefits = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

export default function GrowthSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="
        relative
        overflow-hidden
        py-24
        sm:py-28
        lg:py-32
      "
      style={{
        backgroundColor: "#f7fafc",

        backgroundImage: `
          radial-gradient(
            circle at 20% 4%,
            rgba(218, 248, 120, 0.46) 0%,
            rgba(218, 248, 120, 0.20) 23%,
            rgba(218, 248, 120, 0) 47%
          ),

          radial-gradient(
            circle at 98% 5%,
            rgba(213, 225, 255, 0.50) 0%,
            rgba(213, 225, 255, 0.24) 27%,
            rgba(213, 225, 255, 0) 50%
          ),

          radial-gradient(
            circle at -7% 59%,
            rgba(204, 220, 255, 0.58) 0%,
            rgba(204, 220, 255, 0.26) 28%,
            rgba(204, 220, 255, 0) 50%
          ),

          radial-gradient(
            circle at 8% 91%,
            rgba(218, 248, 120, 0.42) 0%,
            rgba(218, 248, 120, 0.18) 24%,
            rgba(218, 248, 120, 0) 47%
          ),

          radial-gradient(
            circle at 100% 91%,
            rgba(207, 221, 255, 0.54) 0%,
            rgba(207, 221, 255, 0.22) 29%,
            rgba(255, 255, 255, 0) 52%
          )
        `,

        backgroundRepeat: "no-repeat",
      }}
    >
      <Container>
        {/* =====================================================
            TOP ROW
            PROFESSIONAL GROWTH
        ====================================================== */}

        <div
          className="
            grid
            items-center
            gap-16
            lg:grid-cols-2
            lg:gap-20
          "
        >
          {/* TEXT */}
          <motion.div
            variants={fadeUp}
            initial={reduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.25,
            }}
          >
            <h2
              className="
                max-w-[540px]
                font-heading
                text-4xl
                font-semibold
                leading-[1.15]
                tracking-[-0.04em]
                text-neutral-950
                sm:text-5xl
              "
            >
              Your Path to Professional
              <br />
              Growth Starts Here!
            </h2>

            <p
              className="
                mt-8
                max-w-[550px]
                text-base
                leading-7
                text-neutral-600
              "
            >
              Explore our curated selection of courses tailored to enhance
              your capabilities and accelerate your career journey.
              Whether you are looking to sharpen specific skills, gain
              industry expertise, or embark on a new career path entirely,
              we have the resources you need.
            </p>

            <motion.div
              variants={staggerContainer}
              initial={reduceMotion ? false : "hidden"}
              whileInView="visible"
              viewport={{
                once: true,
              }}
              className="
                mt-10
                flex
                flex-wrap
                gap-12
                sm:gap-16
              "
            >
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={fadeUp}
                >
                  <strong
                    className="
                      block
                      font-heading
                      text-3xl
                      font-medium
                      text-primary-600
                    "
                  >
                    {stat.value}
                  </strong>

                  <span
                    className="
                      mt-1
                      block
                      text-base
                      text-neutral-600
                    "
                  >
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* BOY VISUAL */}
          <motion.div
            variants={scaleIn}
            initial={reduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            className="
              relative
              mx-auto
              min-h-[520px]
              w-full
              max-w-[570px]
            "
          >
            {/* Course card behind boy */}
            <div
              className="
                absolute
                left-0
                top-0
                z-10
                w-[68%]
                overflow-hidden
                rounded-[26px]
                border
                border-neutral-200
                bg-white
                p-3
                shadow-[0_18px_42px_rgba(0,0,0,0.09)]
              "
            >
              <div className="relative overflow-hidden rounded-[20px]">
                <Image
                  src="/images/course-figma.jpg"
                  alt="Learn Figma from Basic"
                  width={430}
                  height={250}
                  className="
                    aspect-[1.65/1]
                    w-full
                    object-cover
                  "
                />

                <div
                  className="
                    absolute
                    bottom-3
                    left-3
                    right-3
                    flex
                    gap-2
                  "
                >
                  <span
                    className="
                      rounded-full
                      bg-white/80
                      px-3
                      py-1.5
                      text-[10px]
                      text-neutral-600
                      backdrop-blur-md
                    "
                  >
                    17 Lessons
                  </span>

                  <span
                    className="
                      rounded-full
                      bg-white/80
                      px-3
                      py-1.5
                      text-[10px]
                      text-neutral-600
                      backdrop-blur-md
                    "
                  >
                    2 hours 16 mins
                  </span>
                </div>
              </div>

              <div className="px-1 pb-3 pt-4">
                <h3
                  className="
                    font-heading
                    text-lg
                    font-semibold
                    text-neutral-950
                  "
                >
                  Learn Figma from Basic
                </h3>

                <p
                  className="
                    mt-1
                    text-xs
                    text-primary-600
                  "
                >
                  by purepearl studio
                </p>

                <p
                  className="
                    mt-4
                    text-xl
                    font-semibold
                    text-primary-600
                  "
                >
                  $25
                  <span
                    className="
                      ml-1
                      text-[10px]
                      font-normal
                      text-neutral-500
                    "
                  >
                    /lifetime
                  </span>
                </p>
              </div>
            </div>

            {/* Boy */}
            <Image
              src="/images/hero-person.png"
              alt="ByteSpace student using a laptop"
              width={520}
              height={620}
              className="
                absolute
                bottom-0
                left-[53%]
                z-20
                h-auto
                w-[78%]
                -translate-x-1/2
                object-contain
              "
            />

            {/* Learning progress */}
            <div
              className="
                absolute
                right-0
                top-[38%]
                z-30
                w-[225px]
                rounded-[20px]
                bg-white
                p-5
                shadow-[0_18px_38px_rgba(0,0,0,0.10)]
              "
            >
              <p className="text-sm text-neutral-700">
                Learning Progress
              </p>

              <p
                className="
                  mt-2
                  font-heading
                  text-5xl
                  font-semibold
                  leading-none
                  text-neutral-950
                "
              >
                55%
              </p>

              <div
                className="
                  mt-5
                  h-2
                  overflow-hidden
                  rounded-full
                  bg-neutral-100
                "
              >
                <div
                  className="
                    h-full
                    w-[55%]
                    rounded-full
                    bg-secondary-400
                  "
                />
              </div>
            </div>

            {/* Lime floating squiggle */}
            <DecorativeShape
              type="squiggle"
              tone="lime"
              className="
                absolute
                right-[-8%]
                top-[15%]
                z-40
                h-[135px]
                w-[135px]
                rotate-[12deg]
                drop-shadow-[0_13px_18px_rgba(135,180,0,0.15)]
              "
            />
          </motion.div>
        </div>

        {/* =====================================================
            BOTTOM ROW
            CREATOR MANAGEMENT
        ====================================================== */}

        <div
          id="creators"
          className="
            mt-24
            grid
            items-center
            gap-16
            lg:mt-36
            lg:grid-cols-2
            lg:gap-24
          "
        >
          {/* GIRL VISUAL */}
          <motion.div
            variants={scaleIn}
            initial={reduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            className="
              relative
              order-2
              mx-auto
              min-h-[590px]
              w-full
              max-w-[550px]
              lg:order-1
            "
          >
            {/* Revenue card BEHIND girl's head */}
            <div
              className="
                absolute
                left-[2%]
                top-[16%]
                z-10
                w-[155px]
                rounded-[18px]
                bg-primary-600
                px-5
                py-4
                text-white
                shadow-[0_18px_38px_rgba(4,69,255,0.20)]
              "
            >
              <p className="text-[11px]">
                Total Revenue
              </p>

              <p className="mt-0.5 text-[9px] text-white/75">
                July 1-28
              </p>

              <p
                className="
                  mt-3
                  font-heading
                  text-xl
                  font-semibold
                "
              >
                $120.29
              </p>

              <div
                className="
                  mt-4
                  h-1.5
                  w-24
                  rounded-full
                  bg-secondary-400
                "
              />
            </div>

            {/* Year to date card */}
            <div
              className="
                absolute
                left-[2%]
                top-[38%]
                z-10
                w-[155px]
                rounded-[18px]
                bg-primary-600
                px-5
                py-4
                text-white
                shadow-[0_18px_38px_rgba(4,69,255,0.18)]
              "
            >
              <p className="text-[11px]">
                Year to Date
              </p>

              <p className="mt-0.5 text-[9px] text-white/75">
                2023
              </p>

              <p
                className="
                  mt-3
                  font-heading
                  text-xl
                  font-semibold
                "
              >
                $1,200.38
              </p>

              <span
                className="
                  mt-4
                  inline-flex
                  rounded-full
                  bg-secondary-400
                  px-2
                  py-1
                  text-[9px]
                  text-neutral-950
                "
              >
                +12$
              </span>
            </div>

            {/* Girl sits IN FRONT of revenue card */}
            <Image
              src="/images/creator-person.png"
              alt="ByteSpace creator holding a tablet"
              width={500}
              height={650}
              className="
                absolute
                bottom-0
                left-[49%]
                z-20
                h-auto
                w-[72%]
                -translate-x-1/2
                object-contain
              "
            />

            {/* Lime squiggle beside girl */}
            <DecorativeShape
              type="squiggle"
              tone="lime"
              className="
                absolute
                right-[8%]
                top-[31%]
                z-30
                h-[125px]
                w-[125px]
                rotate-[10deg]
                drop-shadow-[0_14px_20px_rgba(140,190,0,0.16)]
              "
            />

            {/* Happy students foreground */}
            <HappyStudentsCard
              variant="white"
              className="
                absolute
                bottom-[8%]
                right-[-2%]
                z-40
                w-[240px]
                shadow-[0_20px_45px_rgba(0,0,0,0.12)]
              "
            />
          </motion.div>

          {/* TEXT */}
          <motion.div
            variants={fadeUp}
            initial={reduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.25,
            }}
            className="order-1 lg:order-2"
          >
            <h2
              className="
                max-w-[520px]
                font-heading
                text-4xl
                font-semibold
                leading-[1.15]
                tracking-[-0.04em]
                text-neutral-950
                sm:text-5xl
              "
            >
              Create &amp; Manage
              <br />
              Courses Easily.
            </h2>

            <p
              className="
                mt-8
                max-w-[560px]
                text-base
                leading-7
                text-neutral-600
              "
            >
              <strong className="font-semibold text-neutral-950">
                ByteSpace
              </strong>{" "}
              supports individuals or entities in the creation,
              publication, and administration of educational courses.
            </p>

            <div className="mt-8 space-y-4">
              {creatorBenefits.map((benefit) => (
                <div
                  key={benefit}
                  className="
                    flex
                    items-center
                    gap-3
                  "
                >
                  <CheckCircle2
                    className="
                      shrink-0
                      text-primary-600
                    "
                    size={21}
                    fill="currentColor"
                    strokeWidth={3}
                    aria-hidden="true"
                  />

                  <span className="text-base text-neutral-950">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}