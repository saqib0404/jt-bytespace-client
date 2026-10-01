import Link from "next/link";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";

export default function NotFound() {
  return (
    <>
      <Navbar />

      <main>
        <section
          className="
            relative
            flex
            min-h-[810px]
            items-center
            overflow-hidden
            bg-primary-600
            pb-20
            pt-28
          "
        >
          <div
            aria-hidden="true"
            className="
              absolute
              inset-0
              bg-[linear-gradient(rgba(255,255,255,0.13)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.13)_1px,transparent_1px)]
              bg-[size:120px_120px]
            "
          />

          <Container>
            <div className="relative z-10 mx-auto flex max-w-[1050px] flex-col items-center text-center">
              <div
                aria-hidden="true"
                className="
                  select-none
                  bg-gradient-to-b
                  from-secondary-400
                  via-secondary-400
                  to-primary-300/20
                  bg-clip-text
                  font-heading
                  text-[clamp(10rem,31vw,28rem)]
                  font-semibold
                  leading-[0.72]
                  tracking-[-0.08em]
                  text-transparent
                "
              >
                404
              </div>

              <h1
                className="
                  relative
                  z-10
                  -mt-5
                  max-w-[850px]
                  font-heading
                  text-4xl
                  font-semibold
                  leading-[1.1]
                  tracking-[-0.04em]
                  text-white
                  sm:-mt-12
                  sm:text-5xl
                  lg:-mt-20
                  lg:text-6xl
                "
              >
                The page you are looking
                <br className="hidden sm:block" /> for doesn&apos;t exist
              </h1>

              <p className="mt-9 max-w-[620px] text-base text-white/75">
                Try to use a correct url or go back to homepage to start again
              </p>

              <Link
                href="/"
                className="
                  mt-8
                  inline-flex
                  min-h-12
                  items-center
                  justify-center
                  rounded-full
                  bg-secondary-400
                  px-8
                  text-sm
                  font-medium
                  text-neutral-950
                  transition-transform
                  hover:scale-[1.03]
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-white
                  focus-visible:ring-offset-2
                  focus-visible:ring-offset-primary-600
                "
              >
                Back to Home
              </Link>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
