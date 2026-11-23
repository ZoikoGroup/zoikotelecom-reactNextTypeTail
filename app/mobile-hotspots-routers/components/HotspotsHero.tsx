import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CardSim, ChevronRight, RadioTower, Router, Wifi } from "lucide-react";

const IMG = "/Images/mobile-hotspots-routers";

export default function HotspotsHero() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#FFF1EC] via-[#FCEAF4] to-[#EEE8FB]">
      <div className="relative mx-auto grid max-w-[1440px] items-center gap-12 px-4 py-14 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-6 lg:py-20 xl:px-[112px]">
        {/* Left */}
        <div>
          <p className="inline-flex w-fit items-center gap-2 rounded-full border border-[#F3C3D8] bg-white/80 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-[#B0135F] shadow-[0_6px_20px_rgba(155,63,228,0.18)]">
            <Router className="h-3.5 w-3.5" strokeWidth={2} aria-hidden="true" />
            Mobile hotspots &amp; routers
          </p>

          <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight text-[#11183C] sm:text-5xl lg:text-[60px]">
            Mobile hotspots and routers,{" "}
            <span className="bg-gradient-to-r from-[#E11D74] to-[#7C3AED] bg-clip-text text-transparent">
              explained.
            </span>
          </h1>

          <p className="mt-5 max-w-[520px] text-base leading-7 text-[#4B5375] sm:text-lg">
            Compare portable mobile internet with routers for home, site or existing broadband. Device and service
            compatibility depend on the exact model and plan.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#hotspot-enquiry"
              className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-[#E11D74] to-[#C8166A] px-7 py-3.5 text-sm font-bold text-white shadow-[0_10px_26px_rgba(225,29,116,0.35)] transition-transform hover:scale-[1.01] sm:text-base"
            >
              Ask about hotspots &amp; routers
              <ChevronRight className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
            </Link>
            <Link
              href="/ee-mobile-plans"
              className="inline-flex items-center justify-center rounded-xl border border-[#E6E9F2] bg-white px-7 py-3.5 text-sm font-bold text-[#11183C] shadow-[0_8px_22px_rgba(17,24,60,0.08)] transition-colors hover:bg-[#F5F6FB] sm:text-base"
            >
              Explore mobile plans
            </Link>
          </div>
        </div>

        {/* Right: stacked device-type cards (images are pre-rotated with transparent corners) */}
        <div className="relative mx-auto h-[380px] w-full max-w-[680px] sm:h-[500px]">
          <div className="absolute left-0 top-[10%] h-[80%] w-[46%] drop-shadow-[0_24px_40px_rgba(76,29,149,0.28)]">
            <Image
              src={`${IMG}/hero-travel.webp`}
              alt="Map, notebook, camera and bag laid out for a trip"
              fill
              priority
              sizes="(min-width: 1024px) 300px, 45vw"
              className="object-contain"
            />
          </div>

          <div className="absolute left-[25%] top-[2%] h-[82%] w-[44%] drop-shadow-[0_24px_40px_rgba(76,29,149,0.28)]">
            <Image
              src={`${IMG}/hero-shared-office.webp`}
              alt="People working at laptops in a shared office space"
              fill
              priority
              sizes="(min-width: 1024px) 300px, 45vw"
              className="object-contain"
            />
            <span className="absolute bottom-[12%] left-[8%] inline-flex items-center gap-1.5 text-xs font-bold text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)] sm:text-sm">
              <Router className="h-4 w-4" aria-hidden="true" />
              4G / 5G router
            </span>
          </div>

          <div className="absolute right-0 top-[8%] h-[86%] w-[50%] drop-shadow-[0_24px_40px_rgba(76,29,149,0.3)]">
            <Image
              src={`${IMG}/hero-wifi-corridor.webp`}
              alt="Bright office corridor with glass-walled rooms"
              fill
              priority
              sizes="(min-width: 1024px) 340px, 50vw"
              className="object-contain"
            />
            <span className="absolute bottom-[16%] left-[12%] inline-flex rotate-[8deg] items-center gap-1.5 text-xs font-bold text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)] sm:text-sm">
              <Wifi className="h-4 w-4" aria-hidden="true" />
              Wi-Fi router
            </span>
          </div>

          <HeroChip
            icon={CardSim}
            iconBg="bg-[#3B82F6]"
            title="Needs an active plan"
            text="For SIM-based devices"
            className="right-0 top-0 sm:right-[2%]"
          />
          <HeroChip
            icon={RadioTower}
            iconBg="bg-[#E11D74]"
            title="5G ≠ Wi-Fi 6"
            text="Mobile network vs local Wi-Fi"
            className="bottom-[2%] left-[4%] sm:bottom-[6%] sm:left-[10%]"
          />
        </div>
      </div>
    </section>
  );
}

function HeroChip({
  icon: Icon,
  iconBg,
  title,
  text,
  className,
}: {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  iconBg: string;
  title: string;
  text: string;
  className: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`absolute z-10 flex items-center gap-2.5 rounded-xl bg-white py-2 pl-2 pr-4 shadow-[0_12px_30px_rgba(17,24,60,0.18)] ${className}`}
    >
      <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-white ${iconBg}`}>
        <Icon className="h-4 w-4" strokeWidth={2} />
      </span>
      <span>
        <span className="block text-xs font-bold text-[#11183C] sm:text-sm">{title}</span>
        <span className="block text-[11px] text-[#6B7194]">{text}</span>
      </span>
    </div>
  );
}
