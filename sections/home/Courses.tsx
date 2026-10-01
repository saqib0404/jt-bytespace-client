import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import CourseCard from "@/components/ui/CourseCard";
import { courses } from "@/data/courses";

export default function Courses() {
  return (
    <section
      className="
py-24
bg-white
"
    >
      <Container>
        <SectionHeading
          title="Discover Your Passion, Build Your Skills"
          description="Explore a variety of courses across different fields, from technology to arts."
        />

        <div
          className="
mt-12
grid
gap-6

md:grid-cols-2
lg:grid-cols-3
"
        >
          {courses.map((course) => (
            <CourseCard key={course.title} course={course} />
          ))}
        </div>
      </Container>
    </section>
  );
}
