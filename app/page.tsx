import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/sections/home/Hero";
import Courses from "@/sections/home/Courses";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <Courses />
      </main>

      <Footer />
    </>
  );
}
