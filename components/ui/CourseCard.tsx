import Image from "next/image";
import Card from "./Card";
import type { Course } from "@/data/courses";

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <Card className="group">
      <div className="relative aspect-[16/9] w-full overflow-hidden">
        <Image
          src={course.image}
          alt={course.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </div>

      <div className="p-5">
        <h3 className="font-heading text-xl font-semibold text-neutral-950">
          {course.title}
        </h3>

        <p className="mt-2 text-sm text-neutral-500">
          by <span className="text-primary-600">{course.creator}</span>
        </p>

        <div className="mt-4 flex items-center justify-between text-sm text-neutral-700">
          <span>{course.level}</span>

          <span>{course.rating} ★</span>
        </div>

        <p className="mt-4 font-semibold text-primary-600">
          {course.price}
          <span className="ml-0.5 text-sm font-normal text-neutral-500">
            /lifetime
          </span>
        </p>
      </div>
    </Card>
  );
}
