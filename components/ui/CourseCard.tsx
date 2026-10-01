import Image from "next/image";
import { BarChart3, Star } from "lucide-react";

import { cn } from "@/lib/utils";
import type { Course } from "@/data/courses";

interface CourseCardProps {
  course: Course;
  variant?: "default" | "auth";
  className?: string;
}

function MetaPill({
  label,
  compact = false,
}: {
  label: string;
  compact?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-white/75 font-medium text-neutral-700 backdrop-blur-md",
        compact ? "px-3 py-1.5 text-[11px]" : "px-4 py-2 text-[14px]",
      )}
    >
      {label}
    </span>
  );
}

export default function CourseCard({
  course,
  variant = "default",
  className,
}: CourseCardProps) {
  const compact = variant === "auth";

  return (
    <article
      className={cn(
        "border border-neutral-200 bg-white shadow-none",
        compact ? "rounded-[24px] p-4" : "rounded-[32px] p-5",
        className,
      )}
    >
      <div
        className={cn(
          "relative overflow-hidden",
          compact ? "rounded-[18px]" : "rounded-[28px]",
        )}
      >
        <div className="relative aspect-[1.63/1] w-full">
          <Image
            src={course.image}
            alt={course.title}
            fill
            sizes={
              compact
                ? "460px"
                : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            }
            className="object-cover"
          />
        </div>

        <div
          className={cn(
            "absolute flex items-center",
            compact ? "inset-x-4 bottom-3 gap-2" : "inset-x-6 bottom-5 gap-3",
          )}
        >
          <MetaPill label={course.lessons} compact={compact} />

          <MetaPill label={course.duration} compact={compact} />

          <MetaPill label={course.comments} compact={compact} />
        </div>
      </div>

      <div className={cn(compact ? "px-1 pb-1 pt-5" : "px-1 pb-2 pt-7")}>
        <div className="flex items-start justify-between gap-4">
          <h3
            className={cn(
              "max-w-[78%] font-heading font-semibold tracking-[-0.03em] text-neutral-950",
              compact
                ? "text-[20px] leading-[1.15]"
                : "text-[27px] leading-[1.16]",
            )}
          >
            {course.title}
          </h3>

          <div className="mt-1 flex shrink-0 items-center gap-1">
            <span
              className={cn(
                "font-sans font-medium leading-none text-neutral-700",
                compact ? "text-[19px]" : "text-[27px]",
              )}
            >
              {course.rating}
            </span>

            <Star
              className={cn(
                "text-neutral-300",
                compact ? "h-[20px] w-[20px]" : "h-[26px] w-[26px]",
              )}
              fill="currentColor"
              strokeWidth={0}
              aria-hidden="true"
            />
          </div>
        </div>

        <p
          className={cn(
            "text-neutral-600",
            compact ? "mt-2 text-[13px]" : "mt-2 text-[16px] leading-6",
          )}
        >
          by <span className="text-primary-600">{course.creator}</span>
        </p>

        <div
          className={cn(
            "flex items-center justify-between gap-4",
            compact ? "mt-5" : "mt-8",
          )}
        >
          <div
            className={cn(
              "inline-flex items-center rounded-full bg-neutral-50 font-medium text-neutral-700",
              compact
                ? "gap-2 px-4 py-2 text-[13px]"
                : "gap-2.5 px-5 py-3 text-[16px]",
            )}
          >
            <BarChart3
              size={compact ? 16 : 18}
              strokeWidth={2.1}
              aria-hidden="true"
            />

            <span>{course.level}</span>
          </div>

          <div className="flex items-center">
            <div className="flex items-center">
              {course.avatars.map((avatar, index) => (
                <div key={`${avatar}-${index}`} className="-ml-2 first:ml-0">
                  <Image
                    src={avatar}
                    alt=""
                    width={compact ? 32 : 42}
                    height={compact ? 32 : 42}
                    className={cn(
                      "rounded-full border-2 border-white object-cover",
                      compact ? "h-8 w-8" : "h-[42px] w-[42px]",
                    )}
                  />
                </div>
              ))}
            </div>

            <span
              className={cn(
                "-ml-2 inline-flex items-center justify-center rounded-full bg-secondary-400 font-medium text-neutral-950",
                compact
                  ? "h-8 min-w-8 px-2 text-[12px]"
                  : "h-[42px] min-w-[42px] px-3 text-[15px]",
              )}
            >
              {course.studentsCount}
            </span>
          </div>
        </div>

        <div className={cn("flex items-end gap-1", compact ? "mt-5" : "mt-8")}>
          <span
            className={cn(
              "font-heading font-semibold leading-none text-primary-600",
              compact ? "text-[24px]" : "text-[28px]",
            )}
          >
            {course.price}
          </span>

          <span
            className={cn(
              "font-normal text-neutral-500",
              compact ? "pb-[2px] text-[11px]" : "pb-[3px] text-[14px]",
            )}
          >
            /lifetime
          </span>
        </div>
      </div>
    </article>
  );
}
