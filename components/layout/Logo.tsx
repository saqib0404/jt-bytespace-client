import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
}

function LogoMark() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className="h-8 w-8 shrink-0">
      <path
        d="M8 3.5C8 2.67157 8.67157 2 9.5 2H14.2C17.7346 2 20.6 4.86538 20.6 8.4C20.6 11.9346 17.7346 14.8 14.2 14.8H12.2V22.5C12.2 24.433 13.767 26 15.7 26H22.5C24.433 26 26 24.433 26 22.5V22.5C26 16.701 21.299 12 15.5 12H12V8.6C12 7.0536 13.2536 5.8 14.8 5.8H18.2"
        fill="#D4FB20"
      />
    </svg>
  );
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
      <LogoMark />

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
