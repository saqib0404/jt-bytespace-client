import { cn } from "@/lib/utils";

export type DecorativeShapeType =
  | "squiggle"
  | "ring"
  | "triangle"
  | "tile"
  | "burst";

interface DecorativeShapeProps {
  type: DecorativeShapeType;
  tone?: "lime" | "white";
  className?: string;
}

export default function DecorativeShape({
  type,
  tone = "lime",
  className,
}: DecorativeShapeProps) {
  const color = tone === "lime" ? "#D4FB20" : "#F5F5F6";

  if (type === "squiggle") {
    return (
      <svg
        viewBox="0 0 110 110"
        aria-hidden="true"
        className={cn("pointer-events-none select-none", className)}
      >
        <path
          d="
            M18 24
            C44 5 69 11 49 29
            C26 49 30 55 62 43
            C91 32 92 48 66 60
            C37 74 40 82 78 72
          "
          fill="none"
          stroke={color}
          strokeWidth="18"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="
            M22 20
            C45 8 62 12 49 25
          "
          fill="none"
          stroke="#ffffff"
          strokeOpacity={tone === "lime" ? 0.18 : 0.42}
          strokeWidth="5"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (type === "ring") {
    return (
      <svg
        viewBox="0 0 120 120"
        aria-hidden="true"
        className={cn("pointer-events-none select-none", className)}
      >
        <circle
          cx="60"
          cy="60"
          r="39"
          fill="none"
          stroke={color}
          strokeWidth="22"
        />

        <path
          d="M31 36 A39 39 0 0 1 78 23"
          fill="none"
          stroke="#ffffff"
          strokeOpacity={tone === "lime" ? 0.2 : 0.4}
          strokeWidth="5"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (type === "triangle") {
    return (
      <svg
        viewBox="0 0 120 120"
        aria-hidden="true"
        className={cn("pointer-events-none select-none", className)}
      >
        <path
          d="M61 10 L108 96 Q110 104 100 103 L16 92 Q7 90 14 81 L53 13 Q56 7 61 10Z"
          fill={color}
        />

        <path
          d="M61 10 L108 96 L73 76 Z"
          fill="#ffffff"
          fillOpacity={tone === "lime" ? 0.14 : 0.35}
        />

        <path
          d="M14 81 L73 76 L16 92 Q7 90 14 81Z"
          fill="#BFD3FF"
          fillOpacity={tone === "white" ? 0.45 : 0.08}
        />
      </svg>
    );
  }

  if (type === "tile") {
    return (
      <svg
        viewBox="0 0 130 150"
        aria-hidden="true"
        className={cn("pointer-events-none select-none", className)}
      >
        <rect x="11" y="9" width="108" height="132" rx="30" fill={color} />

        <path
          d="
            M11 87
            H119
            V111
            Q119 141 89 141
            H41
            Q11 141 11 111
            Z
          "
          fill="#DCE6FF"
          fillOpacity={tone === "white" ? 0.55 : 0.1}
        />

        <path
          d="M20 25 Q42 7 70 13"
          fill="none"
          stroke="#ffffff"
          strokeOpacity="0.38"
          strokeWidth="5"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 150 150"
      aria-hidden="true"
      className={cn("pointer-events-none select-none", className)}
    >
      <g transform="translate(8 12) rotate(-15 70 70)">
        <rect x="2" y="15" width="105" height="28" rx="14" fill={color} />

        <rect x="11" y="54" width="116" height="28" rx="14" fill={color} />

        <rect x="-4" y="94" width="100" height="28" rx="14" fill={color} />

        <path
          d="M15 19 H77"
          stroke="#ffffff"
          strokeOpacity={tone === "lime" ? 0.16 : 0.35}
          strokeWidth="5"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}
