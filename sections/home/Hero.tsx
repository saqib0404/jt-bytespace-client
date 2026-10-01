import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section
      className="
relative
overflow-hidden
bg-primary-600
pt-32
pb-20
"
    >
      <div
        className="
absolute
inset-0
opacity-20
bg-[linear-gradient(#ffffff_1px,transparent_1px),linear-gradient(90deg,#ffffff_1px,transparent_1px)]
bg-[size:80px_80px]
"
      />

      <Container>
        <div
          className="
relative
z-10
text-center
"
        >
          <h1
            className="
    mx-auto
    max-w-5xl
    font-heading
    text-[clamp(2.5rem,7vw,4.75rem)]
    font-bold
    leading-[1.08]
    tracking-[-0.04em]
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
mt-8
max-w-2xl
text-white/80
text-lg
"
          >
            Unlock your creativity, gain valuable knowledge, and grow your
            business with our wide range of courses.
          </p>

          <div
            className="
    mx-auto
    mt-10
    flex
    max-w-xl
    flex-col
    gap-2
    rounded-3xl
    bg-white
    p-2
    sm:flex-row
    sm:rounded-full
  "
          >
            <input
              type="search"
              aria-label="Search courses"
              placeholder="Course, topic, creator"
              className="
    min-h-12
    min-w-0
    flex-1
    rounded-full
    px-5
    text-neutral-950
    outline-none
    placeholder:text-neutral-400
  "
            />

            <Button variant="secondary">Search</Button>
          </div>

          <div
            className="
relative
mx-auto
mt-16
max-w-xl
"
          >
            <Image
              src="/images/hero-person.png"
              alt="Student learning"
              width={600}
              height={600}
              className="
mx-auto
"
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
