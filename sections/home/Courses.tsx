import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import CourseCard from "@/components/ui/CourseCard";
import Categories from "@/sections/home/Categories";
import { courses } from "@/data/courses";

export default function Courses() {
  return (
    <section id="courses" className="bg-white py-20 sm:py-24 lg:py-28">
      <Container>
        <SectionHeading
          title="Discover Your Passion, Build Your Skills"
          description="At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life."
        />

        <Categories />

        <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <CourseCard key={course.title} course={course} />
          ))}
        </div>
      </Container>
    </section>
  );
}
