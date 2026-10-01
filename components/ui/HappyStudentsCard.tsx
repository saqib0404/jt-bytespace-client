import Image from "next/image";

import { cn } from "@/lib/utils";

const studentAvatars = [
  "/images/testimonial-james.png",
  "/images/testimonial-sarah.png",
  "/images/testimonial-alex.png",
  "/images/testimonial-james.png",
  "/images/testimonial-sarah.png",
];

interface HappyStudentsCardProps {
  variant?: "lime" | "white";
  className?: string;
}

export default function HappyStudentsCard({
  variant = "lime",
  className,
}: HappyStudentsCardProps) {
  const lime = variant === "lime";

  return (
    <div
      className={cn(
        "rounded-[22px] p-5 shadow-[0_18px_35px_rgba(0,0,0,0.14)]",
        lime
          ? "bg-secondary-400 text-neutral-950"
          : "bg-white text-neutral-950",
        className,
      )}
    >
      <p className="text-[18px] font-medium leading-none">Happy Students</p>

      <p className="mt-2 text-[13px]">
        <strong className="font-medium">4.5</strong>{" "}
        <span className="text-neutral-600">(240)</span>
        <span className="ml-1 text-primary-600">★</span>
      </p>

      <div className="mt-4 flex items-center">
        <div className="flex items-center">
          {studentAvatars.map((avatar, index) => (
            <div key={`${avatar}-${index}`} className="-ml-2 first:ml-0">
              <Image
                src={avatar}
                alt=""
                width={38}
                height={38}
                className="
                  h-[38px]
                  w-[38px]
                  rounded-full
                  border-2
                  border-white
                  object-cover
                "
              />
            </div>
          ))}
        </div>

        <span
          className="
            -ml-2
            inline-flex
            h-[46px]
            min-w-[46px]
            items-center
            justify-center
            rounded-full
            bg-neutral-950
            px-2
            text-[13px]
            font-medium
            text-white
          "
        >
          2K+
        </span>
      </div>
    </div>
  );
}
