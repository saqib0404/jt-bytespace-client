import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
}

export default function Logo({ variant = "light", className }: LogoProps) {
  const isLight = variant === "light";

  return (
    <Link
      href="/"
      aria-label="ByteSpace home"
      className={cn(
        "inline-flex items-center gap-2.5",
        "focus-visible:outline-none",
        "focus-visible:ring-2",
        "focus-visible:ring-secondary-400",
        "focus-visible:ring-offset-4",
        isLight
          ? "focus-visible:ring-offset-primary-600"
          : "focus-visible:ring-offset-white",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="
          relative
          h-8
          w-8
          shrink-0
        "
      >
        <span
          className="
            absolute
            bottom-0
            left-0
            h-[27px]
            w-[12px]
            rounded-bl-full
            rounded-tl-full
            bg-secondary-400
          "
        />

        <span
          className="
            absolute
            bottom-0
            left-[7px]
            h-[16px]
            w-[20px]
            rounded-br-full
            rounded-tr-full
            bg-secondary-400
          "
        />
      </span>

      <span
        className={cn(
          "font-heading text-xl font-semibold tracking-[-0.03em]",
          isLight ? "text-white" : "text-neutral-950",
        )}
      >
        ByteSpace
      </span>
    </Link>
  );
}
