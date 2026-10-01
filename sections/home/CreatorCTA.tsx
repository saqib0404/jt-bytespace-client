"use client";

import Link from "next/link";

import { motion, useReducedMotion } from "framer-motion";

import Container from "@/components/ui/Container";

import ByteSpaceDecorations from "@/components/decorations/ByteSpaceDecorations";

import { fadeUp } from "@/components/animations/variants";

export default function CreatorCTA() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="
        relative
        flex
        min-h-[500px]
        items-center
        overflow-hidden
        bg-primary-600
        py-20
        sm:py-24
        lg:py-16
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
          bg-[size:125px_125px]
        "
      />

      {/* Reusable ByteSpace decorative shapes */}
      <ByteSpaceDecorations variant="creator" />

      <Container>
        <motion.div
          variants={fadeUp}
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.3,
          }}
          className="
            relative
            z-10
            mx-auto
            max-w-[1000px]
            text-center
          "
        >
          <h2
            className="
              mx-auto
              max-w-[850px]
              font-heading
              text-4xl
              font-semibold
              leading-[1.13]
              tracking-[-0.035em]
              text-white
              sm:text-5xl
            "
          >
            Unlock Your Potential as a
            <br className="hidden sm:block" /> Creator with ByteSpace
          </h2>

          <p
            className="
              mx-auto
              mt-8
              max-w-[950px]
              text-base
              leading-7
              text-white/85
            "
          >
            Experience the collaboration of numerous creators and an expanding
            selection of courses. Register now and become a part of a community
            comprising over 10,000 local and international creators. Utilize our
            Course Editor, and showcase your expertise by publishing your finest
            course on the ByteSpace Course Library.
          </p>

          <Link
            href="/signup"
            className="
              mt-10
              inline-flex
              min-h-12
              items-center
              justify-center
              rounded-full
              bg-secondary-400
              px-8
              text-base
              font-medium
              text-neutral-950
              transition
              duration-200

              hover:scale-[1.03]
              hover:shadow-[0_0_28px_rgba(212,251,32,0.4)]

              active:scale-[0.98]

              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-white
              focus-visible:ring-offset-2
              focus-visible:ring-offset-primary-600
            "
          >
            Join as Creator
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
