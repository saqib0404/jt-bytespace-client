import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/sections/home/Hero";
import LogoStrip from "@/sections/home/LogoStrip";
import Courses from "@/sections/home/Courses";
import LearningPaths from "@/sections/home/LearningPaths";
import GrowthSection from "@/sections/home/GrowthSection";
import CreatorCTA from "@/sections/home/CreatorCTA";
import Testimonials from "@/sections/home/Testimonials";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <LogoStrip />

        <Courses />

        <LearningPaths />

        <GrowthSection />

        <CreatorCTA />

        <Testimonials />
      </main>

      <Footer />
    </>
  );
}
