import { Check, ChevronRight, CircleDot, ShieldAlert } from "lucide-react";

const assurances = [
  "No fake job listings",
  "Accessible routes",
  "Privacy first",
] as const;

const steps = [
  {
    id: "01",
    title: "Learn about us",
    description: "Who Zoiko Telecom is",
    badgeClass: "bg-[#2563eb]",
    active: true,
  },
  {
    id: "02",
    title: "Check openings",
    description: "Verified listings only",
    badgeClass: "bg-[#9333ea]",
    active: false,
  },
  {
    id: "03",
    title: "Read the role",
    description: "Location, terms, criteria",
    badgeClass: "bg-[#be185d]",
    active: false,
  },
  {
    id: "04",
    title: "Apply safely",
    description: "Through an approved channel",
    badgeClass: "bg-[#e11d74]",
    active: false,
  },
] as const;

export default function CareersHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0b0d2b]">
      {/* Right office image panel */}
      <div
        className="absolute inset-y-0 right-0 hidden w-[53%] lg:block"
        style={{ clipPath: "polygon(6.2% 0, 100% 0, 100% 100%, 0 100%)" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/Images/careers/1.png"
          alt="Modern office corridor with glass partitions"
          className="h-full w-full object-cover object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#140d33]/35 via-transparent to-[#1c1330]/20"
        />
      </div>

      {/* Mobile image background */}
      <div className="absolute inset-0 lg:hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/Images/careers/1.png"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-[#0b0d2b]/85" />
      </div>

      {/* Left deep navy-to-magenta diagonal gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 hidden w-[51.5%] lg:block"
        style={{
          clipPath: "polygon(0 0, 100% 0, 89.2% 100%, 0 100%)",
          background:
            "linear-gradient(155deg, #090e38 0%, #101140 52%, #4a125e 100%)",
        }}
      />

      {/* Diagonal pink/magenta divider line aligned to left polygon's right edge */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 hidden h-full w-full lg:block"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
      >
        <line
          x1="515"
          y1="0"
          x2="459.38"
          y2="1000"
          stroke="#e8157f"
          strokeWidth="2.5"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      {/* Dashed circle straddling the diagonal line */}
      <div
        aria-hidden="true"
        className="pointer-events-none z-10 hidden rounded-full border-[1.5px] border-dashed border-[#e84393]/75 lg:absolute lg:left-[43.2%] lg:top-[9.5%] lg:block lg:h-[210px] lg:w-[210px]"
      />

      <div className="relative z-20 mx-auto flex w-full max-w-[1440px] flex-col px-6 py-14 sm:px-10 lg:min-h-[680px] lg:px-[5.5%] lg:py-0">
        {/* Left content block */}
        <div className="flex w-full flex-col justify-center lg:min-h-[680px] lg:w-[44%]">
          <div className="flex items-center gap-3">
            <span className="h-[1.5px] w-7 bg-[#e84393]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#ff66b2]">
              About Zoiko
            </span>
          </div>

          <h1 className="mt-4 text-[42px] font-bold leading-[1.08] tracking-[-0.02em] text-white sm:text-[52px] lg:text-[58px]">
            Careers at <span className="text-[#ff47a3]">Zoiko</span>
          </h1>

          <p className="mt-5 max-w-[460px] text-[15px] leading-[1.6] text-white/80 sm:text-[16px]">
            Learn about working with Zoiko Telecom and explore approved career
            opportunities when they are available.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3.5">
            <a
              href="#"
              className="inline-flex h-[46px] items-center gap-3 rounded-lg bg-gradient-to-r from-[#ec1c82] to-[#c91472] px-5 text-[14px] font-semibold text-white shadow-[0_8px_24px_rgba(232,21,127,0.4)] transition hover:brightness-110"
            >
              Check vacancy status
              <ChevronRight
                className="h-4 w-4 stroke-[2.5]"
                aria-hidden="true"
              />
            </a>
            <a
              href="#"
              className="inline-flex h-[46px] items-center rounded-lg border border-white/35 bg-[#12143d]/55 px-5 text-[14px] font-medium text-white backdrop-blur-sm transition hover:border-white/60 hover:bg-white/10"
            >
              About Zoiko Telecom
            </a>
          </div>

          <ul className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2">
            {assurances.map((item) => (
              <li
                key={item}
                className="flex items-center gap-1.5 text-[11.5px] font-normal text-white/75"
              >
                <Check
                  className="h-3.5 w-3.5 text-[#38bdf8]"
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Top-right frosted Vacancy status card */}
        <div className="relative z-20 mt-10 w-full max-w-[380px] rounded-2xl border border-white/25 bg-white/20 p-5 shadow-[0_16px_36px_rgba(0,0,0,0.25)] backdrop-blur-md lg:absolute lg:right-[3.5%] lg:top-[8.5%] lg:mt-0 lg:w-[270px]">
          <div className="flex items-center gap-1.5">
            <CircleDot className="h-3 w-3 text-[#facc15]" aria-hidden="true" />
            <span className="text-[9.5px] font-bold uppercase tracking-[0.18em] text-[#fde047]">
              Vacancy status
            </span>
          </div>
          <h2 className="mt-2.5 text-[18px] font-bold leading-snug text-white">
            Not confirmed here
          </h2>
          <p className="mt-1.5 text-[11.5px] leading-[1.45] text-white/80">
            We&rsquo;ll only show roles from a verified source.
          </p>
        </div>

        {/* Floating tilted "Never pay a fee to apply" badge */}
        <a
          href="#"
          className="relative z-30 mt-6 inline-flex w-fit -rotate-[5deg] items-center gap-2.5 rounded-xl bg-white/95 px-3.5 py-2.5 text-[12px] font-bold text-[#14112b] shadow-[0_14px_28px_rgba(0,0,0,0.28)] backdrop-blur-sm transition hover:scale-[1.02] lg:absolute lg:left-[55.5%] lg:top-[30.5%] lg:mt-0"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#e8157f] text-white">
            <ShieldAlert className="h-4 w-4" aria-hidden="true" />
          </span>
          <span>Never pay a fee to apply</span>
        </a>

        {/* Bottom-right frosted 4-step panel */}
        <ol className="relative z-20 mt-10 grid w-full grid-cols-1 gap-2 rounded-2xl border border-white/25 bg-white/15 p-2 shadow-[0_20px_40px_rgba(0,0,0,0.25)] backdrop-blur-md sm:grid-cols-2 lg:absolute lg:bottom-[5.5%] lg:left-[47.5%] lg:right-[3.5%] lg:mt-0 lg:w-auto lg:grid-cols-4 lg:gap-0">
          {steps.map((step, index) => (
            <li
              key={step.id}
              className={`relative flex flex-col gap-1.5 rounded-xl px-4 py-3.5 ${
                step.active ? "bg-white/20" : ""
              } ${
                index > 0
                  ? "lg:before:absolute lg:before:left-0 lg:before:top-3 lg:before:h-[calc(100%-24px)] lg:before:w-px lg:before:bg-white/20"
                  : ""
              }`}
            >
              <span
                className={`flex h-[20px] w-[26px] items-center justify-center rounded-[5px] text-[9.5px] font-bold text-white ${step.badgeClass}`}
              >
                {step.id}
              </span>
              <h3 className="mt-0.5 text-[12.5px] font-bold leading-tight text-white">
                {step.title}
              </h3>
              <p className="text-[10px] leading-snug text-white/75">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
