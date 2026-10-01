"use client";

import Image from "next/image";

import { CheckCircle2 } from "lucide-react";

import { motion, useReducedMotion } from "framer-motion";

import Container from "@/components/ui/Container";

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
        bg-[radial-gradient(circle_at_20%_10%,rgba(212,251,32,0.28),transparent_25%),radial-gradient(circle_at_0%_55%,rgba(40,114,255,0.16),transparent_32%),radial-gradient(circle_at_100%_90%,rgba(40,114,255,0.16),transparent_30%),#ffffff]
        py-24
        sm:py-28
        lg:py-32
      "
    >
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          <motion.div
            variants={fadeUp}
            initial={reduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.25,
            }}
          >
            <h2 className="max-w-[540px] font-heading text-4xl font-semibold leading-[1.15] text-neutral-950 sm:text-5xl">
              Your Path to Professional Growth Starts Here!
            </h2>

            <p className="mt-8 max-w-[560px] text-base leading-7 text-neutral-600">
              Explore our curated selection of courses tailored to enhance your
              capabilities and accelerate your career journey. Whether you are
              looking to sharpen specific skills, gain industry expertise, or
              embark on a new career path entirely, we have the resources you
              need.
            </p>

            <motion.div
              className="mt-10 flex flex-wrap gap-10 sm:gap-14"
              variants={staggerContainer}
              initial={reduceMotion ? false : "hidden"}
              whileInView="visible"
              viewport={{
                once: true,
              }}
            >
              {stats.map((stat) => (
                <motion.div key={stat.label} variants={fadeUp}>
                  <strong className="block font-heading text-3xl font-medium text-primary-600">
                    {stat.value}
                  </strong>

                  <span className="mt-1 block text-base text-neutral-600">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            variants={scaleIn}
            initial={reduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            className="relative mx-auto min-h-[520px] w-full max-w-[560px]"
          >
            <div className="absolute left-4 top-0 w-[66%] overflow-hidden rounded-3xl border border-neutral-200 bg-white p-3 shadow-soft sm:left-0">
              <Image
                src="/images/course-figma.jpg"
                alt="Learn Figma from Basic course"
                width={420}
                height={240}
                className="h-auto w-full rounded-2xl object-cover"
              />

              <div className="px-2 pb-3 pt-4">
                <h3 className="font-heading text-lg font-semibold text-neutral-950">
                  Learn Figma from Basic
                </h3>

                <p className="mt-1 text-xs text-primary-600">
                  by purepearl studio
                </p>

                <p className="mt-4 font-semibold text-primary-600">
                  $25
                  <span className="ml-1 text-xs font-normal text-neutral-500">
                    /lifetime
                  </span>
                </p>
              </div>
            </div>

            <Image
              src="/images/hero-person.png"
              alt="ByteSpace student using a laptop"
              width={500}
              height={520}
              className="absolute bottom-0 left-1/2 z-10 h-auto w-[78%] -translate-x-1/2 object-contain"
            />

            <div className="absolute right-0 top-[38%] z-20 w-[210px] rounded-2xl bg-white p-5 shadow-soft sm:w-[235px]">
              <p className="text-sm text-neutral-700">Learning Progress</p>

              <p className="mt-2 font-heading text-4xl font-semibold text-neutral-950">
                55%
              </p>

              <div className="mt-4 h-2 overflow-hidden rounded-full bg-neutral-50">
                <div className="h-full w-[55%] rounded-full bg-secondary-400" />
              </div>
            </div>
          </motion.div>
        </div>

        <div
          id="creators"
          className="mt-24 grid items-center gap-16 lg:mt-36 lg:grid-cols-2 lg:gap-24"
        >
          <motion.div
            variants={scaleIn}
            initial={reduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            className="relative order-2 mx-auto min-h-[550px] w-full max-w-[540px] lg:order-1"
          >
            <div className="absolute left-0 top-16 z-20 rounded-xl bg-primary-600 px-5 py-4 text-white shadow-soft">
              <p className="text-xs">Total Revenue</p>

              <p className="text-[10px] text-white/80">July 1-28</p>

              <p className="mt-2 font-heading text-xl font-semibold">$120.29</p>

              <div className="mt-3 h-1.5 w-24 rounded-full bg-secondary-400" />
            </div>

            <div className="absolute left-0 top-44 z-20 rounded-xl bg-primary-600 px-5 py-4 text-white shadow-soft">
              <p className="text-xs">Year to Date</p>

              <p className="text-[10px] text-white/80">2023</p>

              <p className="mt-2 font-heading text-xl font-semibold">
                $1,200.38
              </p>

              <span className="mt-3 inline-block rounded-full bg-secondary-400 px-2 py-1 text-[10px] text-neutral-950">
                +12$
              </span>
            </div>

            <Image
              src="/images/creator-person.png"
              alt="ByteSpace creator holding a tablet"
              width={500}
              height={600}
              className="absolute bottom-0 left-1/2 h-auto w-[74%] -translate-x-1/2 object-contain"
            />

            <div className="absolute bottom-10 right-0 z-20 min-w-[205px] rounded-2xl bg-white p-5 shadow-soft">
              <p className="font-medium text-neutral-950">Happy Students</p>

              <p className="mt-1 text-sm text-neutral-600">
                4.5 (240)
                <span className="ml-1 text-secondary-500">★</span>
              </p>

              <span className="mt-3 inline-flex rounded-full bg-secondary-400 px-3 py-1 text-sm font-medium text-neutral-950">
                2K+
              </span>
            </div>
          </motion.div>

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
            <h2 className="max-w-[520px] font-heading text-4xl font-semibold leading-[1.15] text-neutral-950 sm:text-5xl">
              Create &amp; Manage Courses Easily.
            </h2>

            <p className="mt-8 max-w-[560px] text-base leading-7 text-neutral-600">
              <strong className="font-semibold text-neutral-950">
                ByteSpace
              </strong>{" "}
              supports individuals or entities in the creation, publication, and
              administration of educational courses.
            </p>

            <div className="mt-8 space-y-4">
              {creatorBenefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <CheckCircle2
                    className="shrink-0 text-primary-600"
                    size={21}
                    fill="currentColor"
                    strokeWidth={3}
                    aria-hidden="true"
                  />

                  <span className="text-base text-neutral-950">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
