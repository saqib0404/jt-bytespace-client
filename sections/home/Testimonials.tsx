"use client";

import Image from "next/image";

import { motion, useReducedMotion } from "framer-motion";

import Container from "@/components/ui/Container";

import { fadeUp, staggerContainer } from "@/components/animations/variants";

import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="relative overflow-hidden py-24 sm:py-28"
      style={{
        backgroundColor: "#f7fafc",
        backgroundImage: `
      radial-gradient(
        circle at 48% 18%,
        rgba(227, 251, 127, 0.9) 2%,
        rgba(218, 248, 120, 0.18) 22%,
        rgba(218, 248, 120, 0) 50%
      ),
      radial-gradient(
        circle at 100% 28%,
        rgba(210, 245, 110, 0.28) 0%,
        rgba(210, 245, 110, 0) 45%
      ),
      radial-gradient(
        circle at -4% 96%,
        rgba(197, 209, 244, 0.9) 10%,
        rgba(215, 230, 255, 0.25) 30%,
        rgba(255, 255, 255, 0) 60%
      )
    `,
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container>
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start lg:gap-20">
          <motion.h2
            variants={fadeUp}
            initial={reduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.3,
            }}
            className="max-w-[540px] font-heading text-4xl font-semibold leading-[1.15] text-neutral-950 sm:text-5xl"
          >
            Discover What Our
            <br />
            Community Is Saying
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial={reduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.3,
            }}
            className="max-w-[590px] text-base leading-7 text-neutral-600"
          >
            At ByteSpace, our vibrant community of learners and creators is at
            the heart of what we do. Hear directly from those who have
            experienced the transformative journey of learning and creating on
            our platform. Explore testimonials that reflect the diverse
            perspectives of enthusiastic learners and accomplished creators.
          </motion.p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          className="mt-16 grid gap-7 md:grid-cols-2 lg:grid-cols-3"
        >
          {testimonials.map((testimonial) => (
            <motion.article
              key={testimonial.name}
              variants={fadeUp}
              className="rounded-3xl bg-white p-7 sm:p-8"
            >
              <Image
                src={testimonial.avatar}
                alt={`${testimonial.name} profile`}
                width={68}
                height={68}
                className="h-[68px] w-[68px] rounded-full object-cover"
              />

              <h3 className="mt-6 font-heading text-xl font-semibold text-neutral-950">
                {testimonial.name}
              </h3>

              <p className="mt-1 text-base text-primary-600">
                {testimonial.role}
              </p>

              <blockquote className="mt-7 text-base leading-7 text-neutral-600">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
