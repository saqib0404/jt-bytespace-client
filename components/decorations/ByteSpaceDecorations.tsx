import DecorativeShape from "./DecorativeShape";

interface ByteSpaceDecorationsProps {
  variant: "creator" | "hero" | "auth" | "404";
}

export default function ByteSpaceDecorations({
  variant,
}: ByteSpaceDecorationsProps) {
  if (variant === "creator") {
    return (
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          z-0
          overflow-hidden
        "
      >
        {/* Top-left lime abstract shape */}
        <DecorativeShape
          type="burst"
          tone="lime"
          className="
            absolute
            -left-14
            -top-16
            h-[190px]
            w-[190px]
            rotate-[14deg]
            drop-shadow-[0_14px_16px_rgba(150,200,0,0.12)]
            sm:h-[220px]
            sm:w-[220px]
          "
        />

        {/* Upper-left white squiggle */}
        <DecorativeShape
          type="squiggle"
          tone="white"
          className="
            absolute
            left-[13%]
            top-[4%]
            hidden
            h-[115px]
            w-[115px]
            rotate-[8deg]
            drop-shadow-[0_12px_14px_rgba(0,20,100,0.16)]
            lg:block
          "
        />

        {/* Left white triangle */}
        <DecorativeShape
          type="triangle"
          tone="white"
          className="
            absolute
            -left-10
            top-[48%]
            hidden
            h-[150px]
            w-[150px]
            rotate-[-10deg]
            drop-shadow-[0_15px_20px_rgba(0,20,100,0.18)]
            md:block
          "
        />

        {/* Bottom-left lime ring */}
        <DecorativeShape
          type="ring"
          tone="lime"
          className="
            absolute
            -bottom-[105px]
            left-[4%]
            hidden
            h-[230px]
            w-[230px]
            rotate-[-10deg]
            drop-shadow-[0_15px_20px_rgba(130,180,0,0.14)]
            lg:block
          "
        />

        {/* Upper-right lime triangle */}
        <DecorativeShape
          type="triangle"
          tone="lime"
          className="
            absolute
            right-[14%]
            top-[2%]
            hidden
            h-[145px]
            w-[145px]
            rotate-[8deg]
            drop-shadow-[0_14px_18px_rgba(130,180,0,0.12)]
            lg:block
          "
        />

        {/* Large white tile on right */}
        <DecorativeShape
          type="tile"
          tone="white"
          className="
            absolute
            -right-[68px]
            top-[2%]
            hidden
            h-[310px]
            w-[270px]
            rotate-[-17deg]
            drop-shadow-[0_18px_24px_rgba(0,20,100,0.2)]
            xl:block
          "
        />

        {/* Bottom-right lime squiggle */}
        <DecorativeShape
          type="squiggle"
          tone="lime"
          className="
            absolute
            -bottom-[50px]
            right-[3%]
            hidden
            h-[185px]
            w-[185px]
            rotate-[12deg]
            drop-shadow-[0_14px_18px_rgba(130,180,0,0.14)]
            md:block
          "
        />
      </div>
    );
  }

  if (variant === "hero") {
    return (
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {/* Left lime burst */}
        <DecorativeShape
          type="burst"
          tone="lime"
          className="
            absolute
            -left-12
            top-[28%]
            h-[250px]
            w-[250px]
            rotate-[10deg]
            drop-shadow-[0_12px_20px_rgba(140,190,0,0.12)]
            lg:h-[270px]
            lg:w-[270px]
          "
        />

        {/* Lower-left white ring */}
        <DecorativeShape
          type="ring"
          tone="white"
          className="
            absolute
            -bottom-[10px]
            left-[3%]
            h-[220px]
            w-[220px]
            rotate-[-12deg]
            drop-shadow-[0_10px_16px_rgba(0,20,100,0.16)]
            lg:h-[245px]
            lg:w-[245px]
          "
        />

        {/* Left-center white squiggle */}
        <DecorativeShape
          type="squiggle"
          tone="white"
          className="
            absolute
            left-[15%]
            top-[48%]
            h-[110px]
            w-[110px]
            rotate-[8deg]
            drop-shadow-[0_12px_14px_rgba(0,20,100,0.16)]
            lg:h-[120px]
            lg:w-[120px]
          "
        />

        {/* Right-center white triangle */}
        <DecorativeShape
          type="triangle"
          tone="white"
          className="
            absolute
            right-[10%]
            top-[46%]
            h-[140px]
            w-[140px]
            rotate-[9deg]
            drop-shadow-[0_14px_20px_rgba(0,20,100,0.16)]
            lg:h-[155px]
            lg:w-[155px]
          "
        />

        {/* Top-right lime tile */}
        <DecorativeShape
          type="tile"
          tone="lime"
          className="
            absolute
            -right-[35px]
            top-[22%]
            h-[210px]
            w-[180px]
            rotate-[18deg]
            drop-shadow-[0_14px_18px_rgba(140,190,0,0.14)]
            lg:h-[240px]
            lg:w-[210px]
          "
        />

        {/* Bottom-right white squiggle */}
        <DecorativeShape
          type="squiggle"
          tone="white"
          className="
            absolute
            right-[4%]
            bottom-[6%]
            h-[170px]
            w-[170px]
            rotate-[14deg]
            drop-shadow-[0_12px_14px_rgba(0,20,100,0.16)]
            lg:h-[185px]
            lg:w-[185px]
          "
        />
      </div>
    );
  }

  if (variant === "auth") {
    return (
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          z-0
          overflow-hidden
        "
      >
        {/* Lime ring overlapping cards */}
        <DecorativeShape
          type="ring"
          tone="lime"
          className="
            absolute
            left-[7%]
            top-[29%]
            h-[125px]
            w-[125px]
            rotate-[-10deg]
            drop-shadow-[0_16px_20px_rgba(140,190,0,0.18)]
          "
        />

        {/* Bottom-left lime triangle */}
        <DecorativeShape
          type="triangle"
          tone="lime"
          className="
            absolute
            bottom-[11%]
            left-[5%]
            h-[145px]
            w-[145px]
            rotate-[-12deg]
            drop-shadow-[0_16px_20px_rgba(140,190,0,0.17)]
          "
        />

        {/* White squiggle between card / student box */}
        <DecorativeShape
          type="squiggle"
          tone="white"
          className="
            absolute
            bottom-[17%]
            left-[38%]
            h-[135px]
            w-[135px]
            rotate-[14deg]
            drop-shadow-[0_16px_22px_rgba(0,20,100,0.18)]
          "
        />
      </div>
    );
  }

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <DecorativeShape
        type="burst"
        tone="lime"
        className="
          absolute
          -left-16
          -top-14
          h-[170px]
          w-[170px]
        "
      />

      <DecorativeShape
        type="triangle"
        tone="white"
        className="
          absolute
          -right-8
          top-[23%]
          h-[160px]
          w-[160px]
        "
      />
    </div>
  );
}
