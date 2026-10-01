import type { ReactNode } from "react";

import Logo from "@/components/layout/Logo";
import CourseCard from "@/components/ui/CourseCard";
import HappyStudentsCard from "@/components/ui/HappyStudentsCard";
import ByteSpaceDecorations from "@/components/decorations/ByteSpaceDecorations";

import { courses } from "@/data/courses";

interface AuthLayoutProps {
  eyebrow: string;
  description: string;
  children: ReactNode;
}

export default function AuthLayout({
  eyebrow,
  description,
  children,
}: AuthLayoutProps) {
  const backCourse = courses[1];
  const frontCourse = courses[2];

  return (
    <main className="relative min-h-screen overflow-hidden bg-primary-600">
      {/* Grid */}
      <div
        aria-hidden="true"
        className="
          absolute
          inset-0
          z-0
          bg-[linear-gradient(rgba(255,255,255,0.13)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.13)_1px,transparent_1px)]
          bg-[size:122px_122px]
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          grid
          min-h-screen
          w-full
          max-w-[1536px]
          lg:grid-cols-[1fr_1.02fr]
        "
      >
        {/* LEFT */}
        <section
          className="
            relative
            hidden
            min-h-screen
            overflow-hidden
            px-12
            pb-10
            pt-8
            text-white
            lg:block
            xl:px-20
          "
        >
          <ByteSpaceDecorations variant="auth" />

          <div className="relative z-20">
            <Logo variant="light" />

            <div className="mt-14 max-w-[560px]">
              <h1
                className="
                  font-heading
                  text-[22px]
                  font-semibold
                  tracking-[-0.03em]
                  text-white
                "
              >
                {eyebrow}
              </h1>

              <p
                className="
                  mt-5
                  max-w-[560px]
                  text-[20px]
                  leading-[1.7]
                  text-white/90
                "
              >
                {description}
              </p>
            </div>
          </div>

          {/* Stacked card visual */}
          <div
            className="
              absolute
              bottom-[8%]
              left-[6%]
              right-[5%]
              top-[27%]
              z-10
            "
          >
            {/* Rear card */}
            <CourseCard
              course={backCourse}
              variant="auth"
              className="
                absolute
                bottom-[10%]
                left-[3%]
                z-10
                w-[430px]
                rotate-[-1.5deg]
                shadow-[0_22px_45px_rgba(0,0,0,0.13)]
                xl:w-[455px]
              "
            />

            {/* Front card */}
            <CourseCard
              course={frontCourse}
              variant="auth"
              className="
                absolute
                left-[25%]
                top-0
                z-20
                w-[455px]
                shadow-[0_24px_50px_rgba(0,0,0,0.16)]
                xl:w-[485px]
              "
            />

            {/* Lime student card */}
            <HappyStudentsCard
              className="
                absolute
                bottom-[2%]
                right-[1%]
                z-40
                w-[335px]
              "
            />
          </div>
        </section>

        {/* RIGHT */}
        <section
          className="
            relative
            z-20
            flex
            min-h-screen
            items-center
            justify-center
            px-5
            py-10
            sm:px-10
            lg:px-8
          "
        >
          <div
            className="
              w-full
              max-w-[650px]
              rounded-[32px]
              bg-white
              px-7
              py-10
              shadow-[0_30px_80px_rgba(0,0,0,0.14)]
              sm:px-12
              sm:py-14
              lg:min-h-[760px]
              lg:px-16
              lg:py-16
            "
          >
            {children}
          </div>
        </section>
      </div>
    </main>
  );
}
