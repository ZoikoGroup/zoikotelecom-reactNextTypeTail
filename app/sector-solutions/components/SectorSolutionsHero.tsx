import {
  Briefcase,
  ChevronRight,
  CreditCard,
  Heart,
  HardHat,
  House,
  Truck,
  ArrowDown,
} from "lucide-react";

const sectors = [
  {
    id: 1,
    number: "01",
    title: "Professional Services",
    src: "/Images/sector/1.png",
    alt: "Modern professional office interior",
    Icon: Briefcase,
    iconClass: "bg-[#3b6cf0]",
    topOffsetClass: "lg:mt-[88px]",
  },
  {
    id: 2,
    number: "02",
    title: "Retail & Hospitality",
    src: "/Images/sector/2.png",
    alt: "Retail store interior with shelving",
    Icon: CreditCard,
    iconClass: "bg-[#e8157f]",
    topOffsetClass: "lg:mt-[44px]",
  },
  {
    id: 3,
    number: "03",
    title: "Healthcare",
    src: "/Images/sector/3.png",
    alt: "Person holding a phone with medical cables behind",
    Icon: Heart,
    iconClass: "bg-[#16a34a]",
    topOffsetClass: "lg:mt-0",
  },
  {
    id: 4,
    number: "04",
    title: "Trades & Construction",
    src: "/Images/sector/4.png",
    alt: "Construction workers on site",
    Icon: HardHat,
    iconClass: "bg-[#f97316]",
    topOffsetClass: "lg:mt-0",
  },
  {
    id: 5,
    number: "05",
    title: "Logistics",
    src: "/Images/sector/5.png",
    alt: "Warehouse with stacked pallets",
    Icon: Truck,
    iconClass: "bg-[#7c3aed]",
    topOffsetClass: "lg:mt-[44px]",
  },
  {
    id: 6,
    number: "06",
    title: "Remote-First Organisations",
    src: "/Images/sector/6.png",
    alt: "Remote team on a video call",
    Icon: House,
    iconClass: "bg-[#a21caf]",
    topOffsetClass: "lg:mt-[88px]",
  },
] as const;

export default function SectorSolutionsHero() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#fdf1f4] via-[#fbf3fa] to-[#f6f2fd]">
      {/* Background texture */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/Images/cloud/1.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-70"
      />

      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col items-center px-6 pt-12 pb-0 sm:px-10 lg:px-[4%] lg:pt-10 lg:pb-0">
        {/* Eyebrow */}
        <div className="flex items-center gap-3">
          <span className="h-px w-[22px] bg-[#e8157f]" />
          <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#e8157f]">
            Zoiko for Business
          </span>
        </div>

        {/* Title */}
        <h1 className="mt-3 text-center text-[44px] font-extrabold leading-[1.1] tracking-tight text-[#0f1646] sm:text-[56px] lg:text-[64px]">
          Sector{" "}
          <span className="font-extrabold italic text-[#e8157f]">
            Solutions
          </span>
        </h1>

        {/* Description */}
        <p className="mt-4 max-w-[360px] text-center text-[14px] leading-[1.6] text-[#2a2f55] sm:max-w-[440px] lg:max-w-[480px] lg:text-[15px]">
          Explore the communication needs of six types of organisation, and the
          service categories worth discussing — without guarantees or
          one-size-fits-all bundles.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#"
            className="inline-flex h-[40px] items-center justify-center gap-3 whitespace-nowrap rounded-[8px] bg-gradient-to-r from-[#ec1380] to-[#c4177a] px-5 text-[12px] font-semibold text-white shadow-[0_10px_24px_rgba(232,21,127,0.32)] transition hover:brightness-110"
          >
            Discuss your requirements
            <ChevronRight className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          </a>
          <a
            href="#"
            className="inline-flex h-[40px] items-center justify-center whitespace-nowrap rounded-[8px] border border-[#0f1646] bg-white px-5 text-[12px] font-semibold text-[#0f1646] transition hover:bg-[#f0f2ff]"
          >
            Not sure where you fit?
          </a>
        </div>

        {/* Sector cards — staggered from top, all anchored flush to the bottom */}
        <ul className="mt-10 grid w-full max-w-[1060px] grid-cols-2 items-stretch gap-4 sm:grid-cols-3 lg:mt-8 lg:flex lg:items-stretch lg:justify-center lg:gap-[12px]">
          {sectors.map(
            ({
              id,
              number,
              title,
              src,
              alt,
              Icon,
              iconClass,
              topOffsetClass,
            }) => (
              <li
                key={id}
                className={`flex w-full flex-col lg:w-[154px] lg:shrink-0 ${topOffsetClass}`}
              >
                <a
                  href="#"
                  className="group relative flex min-h-[300px] flex-1 flex-col justify-between overflow-hidden rounded-t-[76px] shadow-[0_18px_36px_rgba(15,22,70,0.22)] sm:min-h-[340px] lg:min-h-[360px]"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={src}
                    alt={alt}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0f1646]/15 to-[#0f1246]/95"
                  />

                  {/* Number */}
                  <span className="relative z-10 px-5 pt-5 text-[9px] font-semibold tracking-wider text-white/85">
                    {number}
                  </span>

                  {/* Bottom content */}
                  <div className="relative z-10 flex flex-col items-start gap-2 px-4 pb-5 pt-16">
                    <span
                      className={`flex h-[26px] w-[26px] items-center justify-center rounded-md text-white shadow-sm ${iconClass}`}
                    >
                      <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                    <h2 className="text-[12px] font-bold leading-snug text-white">
                      {title}
                    </h2>
                    <span className="inline-flex items-center gap-1 text-[8px] font-medium text-white/80">
                      Explore needs
                      <ArrowDown className="h-2.5 w-2.5" aria-hidden="true" />
                    </span>
                  </div>
                </a>
              </li>
            ),
          )}
        </ul>
      </div>
    </section>
  );
}
