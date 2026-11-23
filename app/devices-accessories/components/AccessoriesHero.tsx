import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Headphones, Plug, Smartphone, Zap } from "lucide-react";

const IMG = "/Images/devices-accessories";

const CHECKS = ["Exact make and model", "Generation or year", "Camera and buttons"] as const;

export default function AccessoriesHero() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#FFF1EC] via-[#FCEAF4] to-[#EEE8FB]">
      {/* Decorative outline icons and lines */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <Headphones className="absolute left-[3%] top-[6%] h-9 w-9 text-[#E9A9C6]" strokeWidth={1.5} />
        <Zap className="absolute left-[40%] top-[10%] h-10 w-10 text-[#F0B3CC]" strokeWidth={1.5} />
        <Smartphone className="absolute bottom-[8%] left-[45%] h-12 w-12 text-[#EDB9CF]" strokeWidth={1.5} />
        <Plug className="absolute bottom-[12%] right-[4%] hidden h-9 w-9 text-[#C9B5EE] lg:block" strokeWidth={1.5} />
        <span className="absolute left-[30%] top-[52%] hidden h-7 w-7 rounded-full border-2 border-[#EDB9CF] lg:block" />
        <span className="absolute right-[8%] top-[18%] h-2.5 w-2.5 rounded-full bg-[#A78BFA]" />
        <span className="absolute bottom-[20%] left-[50%] h-2.5 w-2.5 rounded-full bg-[#93A5F5]" />
        <svg viewBox="0 0 1440 674" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
          <path
            d="M0 560 C120 470 260 520 360 560 S560 600 660 480"
            fill="none"
            stroke="#F2A7C8"
            strokeWidth="2"
            strokeDasharray="10 10"
          />
          <path d="M580 674 C760 600 980 640 1160 610 S1360 560 1440 580" fill="none" stroke="#C9B5EE" strokeWidth="2" />
        </svg>
      </div>

      <div className="relative mx-auto grid max-w-[1440px] items-center gap-10 px-4 py-14 sm:px-8 lg:grid-cols-[1fr_1fr] lg:gap-6 lg:py-20 xl:px-[112px]">
        {/* Left */}
        <div>
          <p className="inline-flex w-fit items-center gap-2 rounded-full border border-[#F3C3D8] bg-white/70 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-[#B0135F]">
            <Smartphone className="h-3.5 w-3.5" strokeWidth={2} aria-hidden="true" />
            Accessories
          </p>

          <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight text-[#11183C] sm:text-5xl lg:text-[64px]">
            Accessories that{" "}
            <span className="bg-gradient-to-r from-[#E11D74] via-[#F97362] to-[#9B3FE4] bg-clip-text text-transparent">
              work with your device.
            </span>
          </h1>

          <p className="mt-5 max-w-[540px] text-base leading-7 text-[#4B5375] sm:text-lg">
            Compare what matters before you ask about availability — fit for
            cases, safety and compatibility for chargers, and connections for
            audio.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#accessory-enquiry"
              className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-[#E11D74] to-[#C8166A] px-7 py-3.5 text-sm font-bold text-white shadow-[0_10px_26px_rgba(225,29,116,0.35)] transition-transform hover:scale-[1.01] sm:text-base"
            >
              Ask about accessories
              <ChevronRight className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
            </Link>
            <Link
              href="#faqs"
              className="inline-flex items-center justify-center rounded-xl border-2 border-[#11183C] bg-white px-9 py-3.5 text-sm font-bold text-[#11183C] transition-colors hover:bg-[#F5F6FB] sm:text-base"
            >
              Read FAQs
            </Link>
          </div>
        </div>

        {/* Right: collage */}
        <div className="relative mx-auto h-[440px] w-full max-w-[640px] sm:h-[560px]">
          {/* Phone case oval */}
          <div className="absolute left-[2%] top-[10%] h-[66%] w-[38%] overflow-hidden rounded-full shadow-[0_20px_50px_rgba(17,24,60,0.15)] ring-4 ring-[#F7C9DC]/70">
            <Image
              src={`${IMG}/hero-phone-case.webp`}
              alt="Hand holding a phone in a textured protective case"
              fill
              priority
              sizes="(min-width: 1024px) 240px, 40vw"
              className="object-cover"
            />
          </div>

          {/* Headphones circle */}
          <div className="absolute right-0 top-0 aspect-square w-[58%] overflow-hidden rounded-full bg-[#FBD338] shadow-[0_20px_50px_rgba(17,24,60,0.12)]">
            <Image
              src={`${IMG}/hero-headphones.webp`}
              alt="Over-ear headphones on a bright yellow background"
              fill
              priority
              sizes="(min-width: 1024px) 360px, 60vw"
              className="object-cover"
            />
          </div>

          {/* Charger */}
          <div className="absolute bottom-[4%] right-[6%] h-[34%] w-[48%] overflow-hidden rounded-[24px] shadow-[0_20px_50px_rgba(17,24,60,0.18)]">
            <Image
              src={`${IMG}/hero-charger.webp`}
              alt="Wall charger plug on a dark surface"
              fill
              sizes="(min-width: 1024px) 300px, 50vw"
              className="object-cover"
            />
          </div>

          {/* Compatibility card */}
          <div className="absolute left-[34%] top-[36%] w-[200px] rounded-2xl bg-[#11183C] p-4 text-white shadow-[0_20px_50px_rgba(17,24,60,0.35)] sm:w-[200px]">
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#F472B6]">Compatibility</p>
            <p className="mt-1 text-base font-bold">Needs confirmation</p>
            <ul className="mt-2">
              {CHECKS.map((check) => (
                <li key={check} className="border-t border-dashed border-white/20 py-1.5 text-[11px] text-[#D1D5EB]">
                  {check}
                </li>
              ))}
            </ul>
          </div>

          {/* Pills */}
          <HeroPill label="Cases" className="left-[-2%] top-[3%] sm:left-[-4%]" iconBg="bg-[#7C3AED]" icon={Smartphone} />
          <HeroPill label="Audio" className="right-[-2%] top-[56%]" iconBg="bg-[#E11D74]" icon={Headphones} />
          <HeroPill label="Chargers" className="bottom-[6%] left-[22%]" iconBg="bg-[#F97362]" icon={Zap} />
        </div>
      </div>
    </section>
  );
}

function HeroPill({
  label,
  className,
  iconBg,
  icon: Icon,
}: {
  label: string;
  className: string;
  iconBg: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
}) {
  return (
    <span
      aria-hidden="true"
      className={`absolute inline-flex items-center gap-2 rounded-full bg-white py-1.5 pl-1.5 pr-4 text-sm font-bold text-[#11183C] shadow-[0_10px_26px_rgba(17,24,60,0.14)] ${className}`}
    >
      <span className={`flex h-7 w-7 items-center justify-center rounded-full text-white ${iconBg}`}>
        <Icon className="h-3.5 w-3.5" strokeWidth={2} />
      </span>
      {label}
    </span>
  );
}
