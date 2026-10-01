import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

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
  return (
    <main className="relative min-h-screen overflow-hidden bg-primary-600">
      <div
        aria-hidden="true"
        className="
          absolute inset-0
          bg-[linear-gradient(rgba(255,255,255,0.13)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.13)_1px,transparent_1px)]
          bg-[size:120px_120px]
        "
      />

      <div className="relative z-10 mx-auto grid min-h-screen w-full max-w-[1440px] lg:grid-cols-[1fr_1.08fr]">
        <section className="relative hidden min-h-screen px-12 py-10 text-white lg:block xl:px-20">
          <Link
            href="/"
            aria-label="Go to ByteSpace home"
            className="inline-flex h-10 w-10 items-center justify-center rounded-bl-2xl rounded-tr-2xl bg-secondary-400 font-heading text-xl font-bold text-primary-600"
          >
            b
          </Link>

          <div className="mt-14 max-w-[500px]">
            <h1 className="font-heading text-2xl font-semibold">{eyebrow}</h1>

            <p className="mt-5 max-w-[470px] text-lg leading-8 text-white/90">
              {description}
            </p>
          </div>

          <div className="relative mt-16 h-[570px] max-w-[560px]">
            <div className="absolute left-8 top-24 w-[68%] rotate-[-1deg] rounded-3xl bg-white p-4 shadow-2xl">
              <Image
                src="/images/course-assets.jpg"
                alt="Build Digital Asset course"
                width={420}
                height={250}
                className="aspect-[16/9] w-full rounded-2xl object-cover"
              />

              <h2 className="mt-5 font-heading text-xl font-semibold text-neutral-950">
                Build Digital Asset
              </h2>

              <p className="mt-2 text-sm text-primary-600">
                by purepearl studio
              </p>

              <div className="mt-5 flex items-center justify-between text-sm text-neutral-600">
                <span>Beginner</span>
                <span>26+</span>
              </div>

              <p className="mt-4 text-xl font-semibold text-primary-600">
                $25
                <span className="text-xs font-normal text-neutral-500">
                  /lifetime
                </span>
              </p>
            </div>

            <div className="absolute right-0 top-0 z-10 w-[69%] rounded-3xl bg-white p-4 shadow-2xl">
              <Image
                src="/images/course-bigdata.jpg"
                alt="The Power of Big Data course"
                width={420}
                height={250}
                className="aspect-[16/9] w-full rounded-2xl object-cover"
              />

              <div className="mt-5 flex items-start justify-between gap-4">
                <h2 className="font-heading text-xl font-semibold text-neutral-950">
                  The Power of Big Data
                </h2>

                <span className="shrink-0 text-neutral-700">
                  4.5 <span className="text-secondary-500">★</span>
                </span>
              </div>

              <p className="mt-1 text-sm text-primary-600">
                by purepearl studio
              </p>

              <div className="mt-5 flex items-center justify-between text-sm text-neutral-600">
                <span>Beginner</span>
                <span>26+</span>
              </div>

              <p className="mt-4 text-xl font-semibold text-primary-600">
                $25
                <span className="text-xs font-normal text-neutral-500">
                  /lifetime
                </span>
              </p>
            </div>

            <div className="absolute bottom-10 right-0 z-20 w-[265px] rounded-2xl bg-secondary-400 p-5 text-neutral-950 shadow-xl">
              <p className="font-medium">Happy Students</p>

              <p className="mt-1 text-sm">
                4.5 (240) <span className="text-primary-600">★</span>
              </p>

              <span className="mt-4 inline-flex rounded-full bg-neutral-950 px-3 py-1 text-xs text-white">
                2K+
              </span>
            </div>
          </div>
        </section>

        <section className="flex min-h-screen items-center justify-center px-5 py-10 sm:px-10 lg:px-8">
          <div className="w-full max-w-[640px] rounded-[32px] bg-white px-7 py-10 shadow-2xl sm:px-12 sm:py-14 lg:min-h-[760px] lg:px-16 lg:py-16">
            {children}
          </div>
        </section>
      </div>
    </main>
  );
}
