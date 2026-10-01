"use client";

import {
  Building2,
  Camera,
  CodeXml,
  Laptop,
  Megaphone,
  PencilRuler,
  type LucideIcon,
} from "lucide-react";

import { motion, useReducedMotion } from "framer-motion";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

import { learningPaths, type LearningPathIcon } from "@/data/categories";

import { fadeUp, staggerContainer } from "@/components/animations/variants";

const iconMap: Record<LearningPathIcon, LucideIcon> = {
  design: PencilRuler,
  development: CodeXml,
  software: Laptop,
  business: Building2,
  marketing: Megaphone,
  photography: Camera,
};

export default function LearningPaths() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-white pb-24 pt-8 sm:pb-28">
      <Container>
        <motion.div
          variants={fadeUp}
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.25,
          }}
        >
          <SectionHeading
            title="Explore Diverse Learning Paths at Bytespace"
            description="At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories."
          />
        </motion.div>

        <motion.div
          className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6"
          variants={staggerContainer}
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
        >
          {learningPaths.map((path) => {
            const Icon = iconMap[path.icon];

            return (
              <motion.div
                key={path.title}
                variants={fadeUp}
                className="flex min-h-[145px] flex-col items-center justify-center rounded-2xl border border-neutral-200 bg-white px-3 text-center"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary-400">
                  <Icon size={23} strokeWidth={2} aria-hidden="true" />
                </div>

                <h3 className="mt-5 font-sans text-base font-medium text-neutral-950">
                  {path.title}
                </h3>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
