import { ChevronRight, FileText, ScrollText } from "lucide-react";

const navPills = ["Identity", "Filings", "Explained", "Contact"] as const;

const entityRows = [
  { label: "Company number", value: "15021457", valueClass: "text-[#1b1233]" },
  {
    label: "Company type",
    value: "Private limited",
    valueClass: "text-[#1b1233]",
  },
  {
    label: "Incorporated",
    value: "23 July 2023",
    valueClass: "text-[#1b1233]",
  },
  {
    label: "Status",
    value: "Check the live register",
    valueClass: "text-[#3b5bdb]",
  },
] as const;

const ringText = "PUBLIC RECORD · COMPANIES HOUSE · ";

export default function InvestorsHero() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#c71f7c] via-[#a8207f] to-[#7a1f86]">
      {/* Network pattern */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-30"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 900 412"
        fill="none"
      >
        <g stroke="rgba(255,255,255,0.35)" strokeWidth="0.6">
          <path d="M40 60 L120 20 L210 70 L300 30" />
          <path d="M120 20 L150 110 L210 70" />
          <path d="M20 300 L110 340 L190 300 L260 360" />
          <path d="M110 340 L120 400" />
          <path d="M300 30 L400 90 L440 40" />
          <path d="M400 90 L420 180" />
          <path d="M190 300 L230 240 L300 280" />
          <path d="M840 300 L880 370" />
        </g>
        <g fill="rgba(255,255,255,0.55)">
          <circle cx="40" cy="60" r="2" />
          <circle cx="120" cy="20" r="2" />
          <circle cx="210" cy="70" r="2" />
          <circle cx="300" cy="30" r="2" />
          <circle cx="150" cy="110" r="2" />
          <circle cx="20" cy="300" r="2" />
          <circle cx="110" cy="340" r="2" />
          <circle cx="190" cy="300" r="2" />
          <circle cx="260" cy="360" r="2" />
          <circle cx="400" cy="90" r="2" />
          <circle cx="440" cy="40" r="2" />
          <circle cx="420" cy="180" r="2" />
          <circle cx="230" cy="240" r="2" />
          <circle cx="300" cy="280" r="2" />
        </g>
      </svg>

      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col gap-12 px-6 py-14 sm:px-10 lg:min-h-[640px] lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:px-[6%] lg:py-0 xl:px-[7%]">
        {/* Left content */}
        <div className="flex w-full flex-col justify-center lg:w-[46%] lg:pt-4">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-white/70" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/80">
              About Zoiko
            </span>
          </div>

          <h1 className="mt-4 text-[56px] font-extrabold leading-[1.05] tracking-tight text-white sm:text-[68px] lg:text-[72px]">
            Investors
          </h1>

          <p className="mt-6 max-w-[520px] text-[17px] leading-[1.55] text-white/90 lg:text-[19px]">
            Find corporate information and public filing sources for Zoiko
            Telecom Ltd.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#"
              className="inline-flex h-[52px] items-center gap-4 rounded-xl bg-gradient-to-r from-[#e8157f] to-[#d01275] px-6 text-[15px] font-semibold text-white shadow-[0_10px_24px_rgba(120,10,70,0.35)] transition hover:brightness-110"
            >
              View company Companies House
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#"
              className="inline-flex h-[52px] items-center rounded-xl border border-white bg-white px-8 text-[15px] font-semibold text-[#1b1233] shadow-[0_10px_24px_rgba(40,10,80,0.3)] transition hover:bg-white/90"
            >
              View filing history
            </a>
          </div>
        </div>

        {/* Right visual */}
        <div className="relative mx-auto h-[460px] w-full max-w-[560px] sm:h-[520px] lg:mx-0 lg:h-[580px] lg:w-[52%] lg:max-w-[700px]">
          {/* Dark offset backing */}
          <div
            aria-hidden="true"
            className="absolute inset-0 translate-x-[14px] translate-y-[14px] rounded-[36px] bg-[#1c1658] lg:translate-x-[20px] lg:translate-y-[18px]"
          />

          {/* Image */}
          <div className="absolute inset-0 overflow-hidden rounded-[36px] shadow-[0_24px_48px_rgba(20,10,80,0.35)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/Images/investors/1.png"
              alt="Corporate office towers"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Nav pills */}
          <ul className="absolute -top-[18px] left-[4%] z-20 flex flex-wrap items-center gap-2 lg:left-[5%]">
            {navPills.map((pill) => (
              <li key={pill}>
                <a
                  href="#"
                  className="inline-flex h-[32px] items-center rounded-lg bg-white px-4 text-[12px] font-bold text-[#1b1233] shadow-[0_6px_14px_rgba(20,10,80,0.25)] transition hover:bg-[#f4eefc]"
                >
                  {pill}
                </a>
              </li>
            ))}
          </ul>

          {/* Circular badge */}
          <a
            href="#"
            className="absolute -right-[18px] -top-[42px] z-30 flex h-[96px] w-[96px] items-center justify-center rounded-full bg-white shadow-[0_12px_28px_rgba(20,10,80,0.3)] lg:-right-[22px] lg:h-[104px] lg:w-[104px]"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 100 100"
              className="absolute inset-0 h-full w-full"
            >
              <defs>
                <path
                  id="investors-ring"
                  d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0"
                />
              </defs>
              <text
                fontSize="8.5"
                fontWeight="700"
                letterSpacing="1.6"
                fill="#1b1233"
              >
                <textPath href="#investors-ring">{ringText}</textPath>
              </text>
            </svg>
            <span className="relative flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#e8157f] text-white">
              <FileText className="h-5 w-5" aria-hidden="true" />
            </span>
          </a>

          {/* Registered entity card */}
          <div className="absolute -left-[16px] bottom-[34px] z-20 w-[260px] rounded-2xl bg-white p-5 shadow-[0_20px_44px_rgba(20,10,80,0.35)] sm:-left-[36px] sm:w-[290px] lg:-left-[48px] lg:bottom-[44px] lg:w-[300px]">
            <span className="block text-[9px] font-semibold uppercase tracking-[0.2em] text-[#6b6b80]">
              Registered entity
            </span>
            <h2 className="mt-3 text-[20px] font-extrabold leading-tight text-[#1b1233]">
              Zoiko Telecom Ltd
            </h2>
            <dl className="mt-4">
              {entityRows.map((row, index) => (
                <div
                  key={row.label}
                  className={`flex items-center justify-between py-[9px] text-[11px] ${
                    index < entityRows.length - 1
                      ? "border-b border-[#ececf3]"
                      : ""
                  }`}
                >
                  <dt className="text-[#6b6b80]">{row.label}</dt>
                  <dd className={`font-bold ${row.valueClass}`}>{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Source chip */}
          <a
            href="#"
            className="absolute bottom-[26px] right-[20px] z-20 inline-flex h-[34px] items-center gap-2 rounded-full border border-white/25 bg-[#2a2a48]/80 px-4 text-[11px] font-medium text-white backdrop-blur-sm transition hover:bg-[#2a2a48]"
          >
            <ScrollText className="h-3.5 w-3.5" aria-hidden="true" />
            Source: Companies House
          </a>
        </div>
      </div>
    </section>
  );
}
