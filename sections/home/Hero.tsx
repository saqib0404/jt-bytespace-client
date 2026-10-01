"use client";

import Image from "next/image";
import { Search } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import Container from "@/components/ui/Container";
import ByteSpaceDecorations from "@/components/decorations/ByteSpaceDecorations";
import { fadeUp, scaleIn } from "@/components/animations/variants";

function FloatingPill({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="
        inline-flex
        items-center
        rounded-full
        bg-neutral-50/90
        px-4
        py-2
        text-sm
        text-neutral-600
        backdrop-blur-sm
      "
    >
      {children}
    </span>
  );
}

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-primary-600
        pt-6
      "
    >
      {/* Grid */}
      <div
        aria-hidden="true"
        className="
          absolute
          inset-0
          z-0
          bg-[linear-gradient(rgba(255,255,255,0.13)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.13)_1px,transparent_1px)]
          bg-[size:112px_112px]
        "
      />

      {/* Reusable floating decorative shapes */}
      <ByteSpaceDecorations variant="hero" />

      <Container className="relative z-10">
        <div className="flex min-h-[920px] flex-col pt-20">
          <motion.div
            variants={fadeUp}
            initial={reduceMotion ? false : "hidden"}
            animate="visible"
            className="mx-auto max-w-[980px] text-center"
          >
            <h1
              className="
                mx-auto
                max-w-[980px]
                font-heading
                text-7xl
                font-semibold
                leading-[1.03]
                tracking-[-0.05em]
                text-white
              "
            >
              Get Access to Hundreds
              <br />
              Courses Available
            </h1>

            <p
              className="
                mx-auto
                mt-10
                max-w-[880px]
                text-lg
                leading-8
                text-white/85
              "
            >
              Unlock your creativity, gain valuable knowledge, and grow your
              business with our wide range of courses.
            </p>

            <div
              className="
                mx-auto
                mt-12
                flex
                max-w-[640px]
                items-center
                rounded-full
                bg-white/95
                p-2
                shadow-[0_14px_30px_rgba(0,0,0,0.08)]
              "
            >
              <div className="flex min-w-0 flex-1 items-center gap-3 px-5">
                <Search
                  size={20}
                  className="text-neutral-400"
                  aria-hidden="true"
                />

                <input
                  type="search"
                  aria-label="Search courses"
                  placeholder="Course, topic, creator"
                  className="
                    min-w-0
                    flex-1
                    bg-transparent
                    py-3
                    text-base
                    text-neutral-950
                    outline-none
                    placeholder:text-neutral-400
                  "
                />
              </div>

              <button
                type="button"
                className="
                  inline-flex
                  h-14
                  items-center
                  justify-center
                  rounded-full
                  bg-secondary-400
                  px-8
                  text-lg
                  font-medium
                  text-neutral-950
                  transition
                  hover:scale-[1.02]
                "
              >
                Search
              </button>
            </div>
          </motion.div>

          {/* Visual stage */}
          <div className="relative mt-12 flex-1">
            {/* Large lime semi-circle behind person */}
            <div
              aria-hidden="true"
              className="
                absolute
                bottom-0
                left-1/2
                z-0
                h-[430px]
                w-[860px]
                -translate-x-1/2
                rounded-t-full
                bg-secondary-400
                lg:h-[470px]
                lg:w-[980px]
              "
            />

            {/* Left floating card */}
            <motion.div
              variants={scaleIn}
              initial={reduceMotion ? false : "hidden"}
              animate="visible"
              className="
                absolute
                left-[22%]
                top-[20%]
                z-20
                hidden
                w-[220px]
                rounded-[22px]
                bg-white
                px-5
                py-4
                shadow-[0_16px_30px_rgba(0,0,0,0.12)]
                xl:block
              "
            >
              <p className="text-[15px] font-medium text-neutral-950">
                UI/UX Design
              </p>

              <p className="mt-1 text-sm text-neutral-400">
                200 Courses · 1000+ Students
              </p>
            </motion.div>

            {/* Right floating progress card */}
            <motion.div
              variants={scaleIn}
              initial={reduceMotion ? false : "hidden"}
              animate="visible"
              className="
                absolute
                right-[24%]
                top-[22%]
                z-20
                hidden
                w-[250px]
                rounded-[22px]
                bg-white
                px-5
                py-5
                shadow-[0_16px_30px_rgba(0,0,0,0.12)]
                xl:block
              "
            >
              <p className="text-[15px] text-neutral-700">Learning Progress</p>

              <p className="mt-3 font-heading text-[58px] font-semibold leading-none text-neutral-950">
                55%
              </p>

              <div className="mt-5 h-2 rounded-full bg-neutral-100">
                <div className="h-full w-[55%] rounded-full bg-secondary-400" />
              </div>
            </motion.div>

            {/* Bottom-left floating social card */}
            <motion.div
              variants={scaleIn}
              initial={reduceMotion ? false : "hidden"}
              animate="visible"
              className="
                absolute
                left-[16%]
                top-[56%]
                z-20
                hidden
                w-[240px]
                rounded-[22px]
                bg-white
                px-5
                py-4
                shadow-[0_16px_30px_rgba(0,0,0,0.12)]
                xl:block
              "
            >
              <p className="text-[15px] font-medium text-neutral-950">
                Happy Students
              </p>

              <p className="mt-1 text-sm text-neutral-600">
                4.5 (240)
                <span className="ml-1 text-secondary-500">★</span>
              </p>

              <div className="mt-3 flex items-center">
                <div className="flex items-center">
                  {[
                    "/images/testimonial-james.png",
                    "/images/testimonial-sarah.png",
                    "/images/testimonial-alex.png",
                    "/images/testimonial-james.png",
                    "/images/testimonial-sarah.png",
                  ].map((avatar, index) => (
                    <div
                      key={`${avatar}-${index}`}
                      className="-ml-2 first:ml-0"
                    >
                      <Image
                        src={avatar}
                        alt=""
                        width={32}
                        height={32}
                        className="h-8 w-8 rounded-full border-2 border-white object-cover"
                      />
                    </div>
                  ))}
                </div>

                <span
                  className="
                    -ml-2
                    inline-flex
                    h-10
                    min-w-10
                    items-center
                    justify-center
                    rounded-full
                    bg-secondary-400
                    px-3
                    text-sm
                    font-medium
                    text-neutral-950
                  "
                >
                  2K+
                </span>
              </div>
            </motion.div>

            {/* Person touches bottom */}
            <motion.div
              variants={scaleIn}
              initial={reduceMotion ? false : "hidden"}
              animate="visible"
              className="
                absolute
                bottom-0
                left-1/2
                z-10
                w-[360px]
                -translate-x-1/2
                md:w-[430px]
                lg:w-[500px]
              "
            >
              <Image
                src="/images/hero-person.png"
                alt="ByteSpace student holding a laptop"
                width={560}
                height={760}
                className="h-auto w-full object-contain"
                priority
              />
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
