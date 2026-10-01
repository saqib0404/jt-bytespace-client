"use client";

import Link from "next/link";

import { motion, useReducedMotion } from "framer-motion";

import Container from "@/components/ui/Container";

import { fadeUp } from "@/components/animations/variants";

export default function CreatorCTA() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-primary-600 py-20 sm:py-24">
      <div
        className="
          absolute
          inset-0
          bg-[linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)]
          bg-[size:110px_110px]
        "
        aria-hidden="true"
      />

      <Container>
        <motion.div
          variants={fadeUp}
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.3,
          }}
          className="relative z-10 mx-auto max-w-4xl text-center"
        >
          <h2 className="font-heading text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Unlock Your Potential as a
            <br className="hidden sm:block" /> Creator with ByteSpace
          </h2>

          <p className="mx-auto mt-7 max-w-4xl text-base leading-7 text-white/85">
            Experience the collaboration of numerous creators and an expanding
            selection of courses. Register now and become a part of a community
            comprising over 10,000 local and international creators. Utilize our
            Course Editor, and showcase your expertise by publishing your finest
            course on the ByteSpace Course Library.
          </p>

          <Link
            href="/signup"
            className="
              mt-9
              inline-flex
              items-center
              justify-center
              rounded-full
              bg-secondary-400
              px-8
              py-3.5
              font-medium
              text-neutral-950
              transition-transform
              duration-200
              hover:scale-[1.03]
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
