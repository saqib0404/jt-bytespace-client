const logos = [1, 2, 3, 4, 5] as const;

type LogoVariant = (typeof logos)[number];

function WaveLogo() {
  return (
    <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-neutral-400">
      <span className="absolute left-[-5px] top-[10px] h-[9px] w-[58px] rotate-[9deg] rounded-[50%] border-t-[4px] border-white" />
      <span className="absolute left-[-5px] top-[18px] h-[9px] w-[58px] rotate-[9deg] rounded-[50%] border-t-[4px] border-white" />
      <span className="absolute left-[-5px] top-[26px] h-[9px] w-[58px] rotate-[9deg] rounded-[50%] border-t-[4px] border-white" />
    </div>
  );
}

function SunLogo() {
  return (
    <div className="relative h-12 w-12 shrink-0">
      {Array.from({ length: 12 }).map((_, index) => (
        <span
          key={index}
          className="
            absolute
            left-1/2
            top-1/2
            h-[18px]
            w-[5px]
            origin-[50%_100%]
            -translate-x-1/2
            -translate-y-full
            rounded-full
            bg-neutral-400
          "
          style={{
            transform: `translate(-50%, -100%) rotate(${index * 30}deg)`,
          }}
        />
      ))}

      <span
        className="
          absolute
          left-1/2
          top-1/2
          h-[17px]
          w-[17px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-white
        "
      />
    </div>
  );
}

function LightningLogo() {
  return (
    <div
      className="
        relative
        flex
        h-12
        w-12
        shrink-0
        items-center
        justify-center
        rounded-full
        bg-neutral-400
      "
    >
      <span
        className="
          h-[27px]
          w-[17px]
          bg-white
          [clip-path:polygon(58%_0,100%_0,68%_38%,100%_38%,25%_100%,39%_54%,0_54%)]
        "
      />
    </div>
  );
}

function CloverLogo() {
  return (
    <div
      className="
        relative
        h-12
        w-12
        shrink-0
        rounded-full
        bg-neutral-400
      "
    >
      <span className="absolute left-[18px] top-[7px] h-[11px] w-[11px] rounded-full bg-white" />

      <span className="absolute left-[8px] top-[18px] h-[11px] w-[11px] rounded-full bg-white" />

      <span className="absolute right-[8px] top-[18px] h-[11px] w-[11px] rounded-full bg-white" />

      <span className="absolute bottom-[7px] left-[18px] h-[11px] w-[11px] rounded-full bg-white" />

      <span className="absolute left-1/2 top-1/2 h-[8px] w-[8px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
    </div>
  );
}

function RingsLogo() {
  return (
    <div className="relative h-12 w-12 shrink-0 rounded-full">
      {Array.from({ length: 9 }).map((_, index) => {
        const inset = index * 2;

        return (
          <span
            key={index}
            className="absolute rounded-full border border-neutral-400"
            style={{
              inset: `${inset}px`,
            }}
          />
        );
      })}
    </div>
  );
}

function LogoShape({ variant }: { variant: LogoVariant }) {
  if (variant === 1) {
    return <WaveLogo />;
  }

  if (variant === 2) {
    return <SunLogo />;
  }

  if (variant === 3) {
    return <LightningLogo />;
  }

  if (variant === 4) {
    return <CloverLogo />;
  }

  return <RingsLogo />;
}

export default function LogoStrip() {
  return (
    <section className="w-full bg-neutral-50">
      <div
        className="
          mx-auto
          flex
          min-h-[180px]
          max-w-[1280px]
          items-center
          justify-between
          gap-8
          px-6
          sm:px-8
          lg:px-10
        "
      >
        {logos.map((variant) => (
          <div
            key={variant}
            className="
              flex
              items-center
              justify-center
              gap-3
              whitespace-nowrap
            "
          >
            <LogoShape variant={variant} />

            <span
              className="
                text-[20px]
                font-semibold
                tracking-[-0.04em]
                text-neutral-400
                lg:text-[22px]
              "
            >
              Logoipsum
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
