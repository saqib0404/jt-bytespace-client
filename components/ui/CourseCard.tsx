import Image from "next/image";
import Card from "./Card";

interface CourseCardProps {
  course: {
    title: string;
    creator: string;
    image: string;
    lessons: string;
    duration: string;
    comments: string;
    rating: string;
    level: string;
    price: string;
  };
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <Card>
      <Image
        src={course.image}
        alt={course.title}
        width={400}
        height={220}
        className="
w-full
object-cover
"
      />

      <div
        className="
p-5
"
      >
        <h3
          className="
font-heading
text-xl
font-semibold
"
        >
          {course.title}
        </h3>

        <p
          className="
mt-2
text-sm
text-neutral-500
"
        >
          by {course.creator}
        </p>

        <div
          className="
mt-4
flex
justify-between
text-sm
"
        >
          <span>{course.level}</span>

          <span>{course.rating} ★</span>
        </div>

        <p
          className="
mt-4
font-semibold
text-primary-600
"
        >
          {course.price}

          <span className="text-neutral-500">/lifetime</span>
        </p>
      </div>
    </Card>
  );
}
