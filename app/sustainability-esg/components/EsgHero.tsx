import { ArrowDown, ChevronRight, Check, FileText, Leaf } from "lucide-react";

const pillars = [
  {
    id: 1,
    letter: "E",
    label: "Pillar 1",
    title: "Environment",
    description: "Energy, waste, recycling",
    src: "/Images/esg/4.png",
    alt: "Wind turbines at sunset",
    badgeClass: "bg-[#7d2296]",
    wrapperClass: "lg:mt-[60px] lg:w-[248px] xl:w-[266px]",
    heightClass: "h-[325px] lg:h-[355px]",
  },
  {
    id: 2,
    letter: "S",
    label: "Pillar 2",
    title: "Social",
    description: "Inclusion, ethics, community",
    src: "/Images/esg/5.png",
    alt: "Friends standing together facing a mountain view",
    badgeClass: "bg-[#3b82f6]",
    wrapperClass: "lg:mt-0 lg:w-[270px] xl:w-[288px]",
    heightClass: "h-[370px] lg:h-[415px]",
  },
  {
    id: 3,
    letter: "G",
    label: "Pillar 3",
    title: "Governance",
    description: "Transparency, risk, decisions",
    src: "/Images/esg/1.png",
    alt: "Person signing a document",
    badgeClass: "bg-[#7b2cbf]",
    wrapperClass: "lg:mt-[60px] lg:w-[248px] xl:w-[266px]",
    heightClass: "h-[325px] lg:h-[355px]",
  },
] as const;

export default function EsgHero() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#4b0757] via-[#5d0c6b] to-[#3a0444] font-sans text-white">
      {/* Flowing contour wave background */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 700"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-35"
      >
        <g fill="none" stroke="rgba(255,255,255,0.22)" strokeWidth="1">
          {Array.from({ length: 18 }).map((_, idx) => {
            const offset = idx * 22;
            return (
              <path
                key={idx}
                d={`M -60 ${240 + offset} C 240 ${110 + offset * 0.85}, 460 ${430 + offset * 0.65}, 760 ${320 + offset * 0.75} C 1050 ${215 + offset * 0.8}, 1260 ${390 + offset * 0.6}, 1500 ${260 + offset * 0.7}`}
              />
            );
          })}
        </g>
      </svg>

      {/* Ambient color glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-0 h-full w-[45%] bg-gradient-to-l from-[#9622a8]/35 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-0 h-full w-[35%] bg-gradient-to-r from-[#360440]/55 to-transparent"
      />

      {/* Decorative outline leaves */}
      <Leaf
        aria-hidden="true"
        className="pointer-events-none absolute left-[13.5%] top-[18%] hidden h-7 w-7 -rotate-12 text-white/30 lg:block"
        strokeWidth={1.15}
      />
      <Leaf
        aria-hidden="true"
        className="pointer-events-none absolute right-[16.5%] top-[14%] hidden h-5 w-5 rotate-12 text-white/30 lg:block"
        strokeWidth={1.15}
      />
      <Leaf
        aria-hidden="true"
        className="pointer-events-none absolute left-[69%] top-[44%] hidden h-4 w-4 rotate-45 text-white/25 lg:block"
        strokeWidth={1.15}
      />

      {/* Subtle concentric rings near bottom */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-[280px] left-1/2 hidden h-[680px] w-[680px] -translate-x-1/2 rounded-full border border-white/10 lg:block"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-[360px] left-1/2 hidden h-[860px] w-[860px] -translate-x-1/2 rounded-full border border-white/10 lg:block"
      />

      {/* Main content container */}
      <div className="relative mx-auto flex w-full max-w-[1120px] flex-col items-center px-6 pt-8 text-center lg:pt-10">
        {/* Eyebrow */}
        <div className="flex items-center gap-2.5">
          <span className="h-px w-6 bg-white/55" />
          <span className="text-[10px] font-medium uppercase tracking-[0.24em] text-white/65">
            About Zoiko
          </span>
        </div>

        {/* Title */}
        <h1 className="mt-3 text-[40px] font-extrabold leading-[1.08] tracking-tight text-white sm:text-[54px] lg:text-[58px]">
          Sustainability{" "}
          <span className="font-extrabold italic text-[#82ebb8]">(ESG)</span>
        </h1>

        {/* Description */}
        <p className="mt-3.5 max-w-[420px] text-[13px] leading-[1.6] text-white/85 sm:text-[14px]">
          Explore Zoiko Telecom&rsquo;s stated approach to environmental, social
          and governance matters.
        </p>

        {/* CTA Buttons */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#esg-policy"
            className="inline-flex h-[38px] items-center gap-1.5 rounded-[7px] bg-gradient-to-r from-[#e21c85] via-[#d6177e] to-[#b9126e] px-5 text-[12px] font-semibold text-white shadow-[0_8px_20px_rgba(226,28,133,0.4)] transition hover:brightness-110"
          >
            Read our ESG policy
            <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
          <a
            href="#pillars"
            className="inline-flex h-[38px] items-center rounded-[7px] border border-white/80 bg-white px-5 text-[12px] font-semibold text-[#180e2e] shadow-[0_8px_20px_rgba(0,0,0,0.22)] transition hover:bg-white/95"
          >
            Explore the three pillars
          </a>
        </div>

        {/* Staggered Pillar Arches */}
        <div
          id="pillars"
          className="relative mt-10 flex w-full max-w-[830px] flex-col items-center gap-6 pb-10 lg:mt-8 lg:flex-row lg:items-end lg:justify-center lg:gap-4 lg:pb-0"
        >
          {/* Floating badge - left */}
          <div className="relative z-30 flex w-full max-w-[220px] -rotate-[5deg] items-center gap-2.5 rounded-[10px] border border-white/25 bg-[#2a0f35]/70 px-3 py-2.5 text-left shadow-[0_14px_28px_rgba(0,0,0,0.35)] backdrop-blur-md lg:absolute lg:bottom-[108px] lg:-left-[56px] xl:-left-[68px] lg:w-[196px]">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[7px] bg-[#b768db] text-white shadow-inner">
              <FileText className="h-3.5 w-3.5" aria-hidden="true" />
            </span>
            <span className="flex flex-col">
              <span className="text-[10.5px] font-bold leading-tight text-white">
                Published ESG policy
              </span>
              <span className="mt-0.5 text-[9px] leading-tight text-white/75">
                Stated approval 4 May 2024
              </span>
            </span>
          </div>

          {/* Floating badge - right */}
          <div className="relative z-30 flex w-full max-w-[220px] rotate-[5deg] items-center gap-2.5 rounded-[10px] border border-white/25 bg-[#2a0f35]/70 px-3 py-2.5 text-left shadow-[0_14px_28px_rgba(0,0,0,0.35)] backdrop-blur-md lg:absolute lg:bottom-[118px] lg:-right-[56px] xl:-right-[68px] lg:w-[196px]">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[7px] bg-[#b768db] text-white shadow-inner">
              <Check className="h-3.5 w-3.5" aria-hidden="true" />
            </span>
            <span className="flex flex-col">
              <span className="text-[10.5px] font-bold leading-tight text-white">
                Objectives, not claims
              </span>
              <span className="mt-0.5 text-[9px] leading-tight text-white/75">
                No performance figures shown
              </span>
            </span>
          </div>

          {/* Pillar Cards */}
          {pillars.map((pillar) => (
            <div
              key={pillar.id}
              className={`relative w-full max-w-[250px] ${pillar.wrapperClass}`}
            >
              <div
                className={`relative w-full overflow-hidden rounded-t-[999px] border-x border-t border-white/15 shadow-[0_24px_48px_rgba(0,0,0,0.4)] ${pillar.heightClass}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={pillar.src}
                  alt={pillar.alt}
                  className="absolute inset-0 h-full w-full object-cover"
                />

                {/* Top & bottom gradient scrims for contrast and bottom edge blend */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-b from-[#4a0956]/45 via-[#2c0d36]/15 to-[#161a1d]/95"
                />

                {/* Letter badge */}
                <div className="absolute left-1/2 top-[20px] z-10 -translate-x-1/2">
                  <span className="flex h-[54px] w-[54px] items-center justify-center rounded-full bg-white/20 p-[5px] shadow-[0_8px_18px_rgba(0,0,0,0.35)] backdrop-blur-md">
                    <span
                      className={`flex h-full w-full items-center justify-center rounded-full text-[19px] font-bold text-white ${pillar.badgeClass}`}
                    >
                      {pillar.letter}
                    </span>
                  </span>
                </div>

                {/* Bottom card copy */}
                <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col items-center px-4 pb-5 text-center">
                  <span className="text-[8.5px] font-semibold uppercase tracking-[0.2em] text-[#e2b2f0]">
                    {pillar.label}
                  </span>
                  <h2 className="mt-1 text-[21px] font-bold leading-tight text-white">
                    {pillar.title}
                  </h2>
                  <p className="mt-1 text-[10.5px] leading-snug text-white/85">
                    {pillar.description}
                  </p>
                  <a
                    href={`#pillar-${pillar.id}`}
                    className="mt-3 inline-flex h-[24px] items-center gap-1.5 rounded-full border border-white/50 bg-[#1a0924]/50 px-3.5 text-[10px] font-medium text-white backdrop-blur-xs transition hover:bg-white/20"
                  >
                    Jump to section
                    <ArrowDown className="h-2.5 w-2.5" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
