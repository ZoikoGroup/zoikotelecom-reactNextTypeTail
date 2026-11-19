import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  Cloud,
  CreditCard,
  FileText,
  Network,
  User,
} from "lucide-react";

const content = {
  eyebrow: "BUSINESS · BROADBAND & FIBRE",
  headingLine1: "Business broadband",
  headingLine2Prefix: "and fibre ",
  headingLine2Gradient: "for the way you work.",
  headingLine3: "",
  description:
    "Find the right approach to connectivity for your sites, teams and essential systems. Discuss broadband, full fibre and specialist requirements with the business team.",
  primary: { label: "Speak to the business team", href: "/business/contact" },
  secondary: {
    label: "Compare connection types",
    href: "/business/connection-types",
  },
  help: {
    label: "Already connected? Get help with your service",
    href: "/support",
  },
  centerLabel: "Your connection",
  panelTitle: "What we’ll confirm for your site",
  panelTag: "PER PREMISES",
} as const;

const floatingCards = [
  {
    label: "Head office",
    icon: FileText,
    position: "left-[-3%] top-[-7%]",
  },
  {
    label: "Cloud & backups",
    icon: Cloud,
    position: "right-[-5%] top-[0%]",
  },
  {
    label: "Card payments",
    icon: CreditCard,
    position: "left-[-6%] top-[78%]",
  },
  {
    label: "Branch site",
    icon: Network,
    position: "right-[-4%] top-[82%]",
  },
] as const;

const confirmItems = [
  { title: "Technology", text: "FTTP, FTTC or other" },
  { title: "Speeds", text: "Download & upload" },
  { title: "Install", text: "Survey if needed" },
] as const;

export default function BusinessBroadbandHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0d104b] bg-[radial-gradient(ellipse_at_top_left,#37134f_0%,transparent_42%),radial-gradient(ellipse_at_bottom_right,#202b88_0%,transparent_55%),linear-gradient(120deg,#0d104b,#101747_55%,#171b68)]">
      {/* Background network decoration */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-30"
        viewBox="0 0 1440 700"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <g stroke="#8b93ff" strokeWidth="0.6" fill="none">
          <circle cx="1130" cy="330" r="360" />
          <circle cx="1130" cy="330" r="470" />
          <circle cx="1130" cy="330" r="560" />
          <path d="M0 520 L180 430 L330 560 L520 470" />
          <path d="M60 80 L220 140 L300 60" />
          <path d="M1200 650 L1320 560 L1440 620" />
          <path d="M850 0 L930 100 L1100 20 L1220 120" />
        </g>

        <g fill="#8b93ff">
          <circle cx="180" cy="430" r="2" />
          <circle cx="330" cy="560" r="2" />
          <circle cx="220" cy="140" r="2" />
          <circle cx="1320" cy="560" r="2" />
          <circle cx="1100" cy="20" r="2" />
        </g>
      </svg>

      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col gap-14 px-5 py-10 sm:flex-row sm:items-center sm:gap-5 sm:px-[4.5%] sm:py-8 lg:gap-8 lg:px-[5%] lg:py-12">
        {/* LEFT CONTENT */}
        <div className="w-full sm:w-[49%] lg:w-[51%]">
          {/* Eyebrow */}
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.08em] text-white sm:text-[9px] lg:text-[11px]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#7185ff] shadow-[0_0_8px_#7185ff]" />
            {content.eyebrow}
          </span>

          {/* Heading */}
          <h1 className="mt-3 max-w-[580px] text-[38px] font-extrabold leading-[0.96] tracking-[-0.045em] text-white sm:mt-3 sm:text-[clamp(30px,4.8vw,42px)] lg:text-[clamp(38px,3.8vw,54px)]">
            {content.headingLine1}
            <br />

            {content.headingLine2Prefix}
            <span className="bg-gradient-to-r from-[#c58bff] via-[#e48cf0] to-[#ff6fb5] bg-clip-text text-transparent">
              {content.headingLine2Gradient}
            </span>

            <br />

            <span className="bg-gradient-to-r from-[#83a6ff] to-[#bd8bff] bg-clip-text text-transparent">
              {content.headingLine3}
            </span>
          </h1>

          {/* Description */}
          <p className="mt-3.5 max-w-[410px] text-[14px] font-normal leading-[1.55] text-white/80 sm:mt-3 sm:max-w-[330px] sm:text-[11px] sm:leading-[1.55] lg:max-w-[440px] lg:text-[14px]">
            {content.description}
          </p>

          {/* CTA Buttons */}
          <div className="mt-5 flex flex-wrap items-center gap-2.5 sm:mt-4 sm:gap-2">
            <Link
              href={content.primary.href}
              className="inline-flex h-[38px] items-center justify-center gap-2 rounded-[6px] bg-gradient-to-r from-[#ed0780] to-[#d91b83] px-4.5 text-[12px] font-bold text-white shadow-[0_5px_18px_rgba(232,21,127,0.3)] transition-all hover:brightness-110 sm:h-[30px] sm:gap-1.5 sm:px-3.5 sm:text-[10px] lg:h-[38px] lg:px-5 lg:text-[13px]"
            >
              {content.primary.label}
              <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>

            <Link
              href={content.secondary.href}
              className="inline-flex h-[38px] items-center justify-center rounded-[6px] border border-white/60 px-4.5 text-[12px] font-semibold text-white transition hover:bg-white/10 sm:h-[30px] sm:px-3.5 sm:text-[10px] lg:h-[38px] lg:px-5 lg:text-[13px]"
            >
              {content.secondary.label}
            </Link>
          </div>

          {/* Support Link */}
          <Link
            href={content.help.href}
            className="mt-3.5 inline-flex items-center gap-1.5 border-b border-[#e8157f] pb-0.5 text-[12px] font-medium text-white/90 transition hover:text-white sm:mt-3 sm:text-[10px] lg:mt-3.5 lg:text-[12px]"
          >
            <User className="h-3.5 w-3.5" aria-hidden="true" />
            {content.help.label}
            <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </div>

        {/* RIGHT VISUAL */}
        <div className="relative mx-auto w-full max-w-[520px] sm:mx-0 sm:w-[49%] sm:max-w-none lg:w-[46%]">
          {/* Image and floating elements */}
          <div className="relative mx-auto w-[92%] sm:w-[94%]">
            {/* Office Image */}
            <div className="relative aspect-[1.62/1] w-full overflow-hidden rounded-[13px] border border-white/20 shadow-[0_15px_40px_rgba(0,0,0,0.3)]">
              <Image
                src="/Images/brod/1.png"
                alt="Modern office with a plant and meeting table"
                fill
                priority
                sizes="(min-width: 1024px) 44vw, (min-width: 640px) 45vw, 90vw"
                className="object-cover"
              />
            </div>

            {/* Floating Label Cards */}
            {floatingCards.map(({ label, icon: Icon, position }) => (
              <div
                key={label}
                className={`absolute ${position} z-20 flex items-center gap-1.5 whitespace-nowrap rounded-[7px] bg-white px-2.5 py-1.5 text-[11px] font-semibold text-[#171943] shadow-[0_4px_15px_rgba(0,0,0,0.2)] sm:gap-1 sm:px-2 sm:py-1 sm:text-[9px] lg:gap-1.5 lg:px-2.5 lg:py-1.5 lg:text-[11px]`}
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-[4px] bg-[#eceeff] text-[#5863e9] sm:h-4 sm:w-4 lg:h-5 lg:w-5">
                  <Icon
                    className="h-3.5 w-3.5 sm:h-3 sm:w-3 lg:h-3.5 lg:w-3.5"
                    aria-hidden="true"
                  />
                </span>
                {label}
              </div>
            ))}

            {/* Dashed Connection Lines */}
            <svg
              className="pointer-events-none absolute inset-0 z-[5] h-full w-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <g
                stroke="#ff7ac8"
                strokeWidth="0.45"
                strokeDasharray="1.5 1.5"
                fill="none"
              >
                <path d="M92 8 L62 48" />
                <path d="M92 82 L62 56" />
              </g>
            </svg>

            {/* Central Connection Badge */}
            <div className="absolute left-1/2 top-[48%] z-10 flex h-[62px] w-[62px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-white/20 bg-gradient-to-br from-[#7650ff] to-[#d52ad5] text-center text-white shadow-[0_0_0_7px_rgba(200,120,255,0.18),0_8px_25px_rgba(0,0,0,0.35)] sm:h-[52px] sm:w-[52px] lg:h-[68px] lg:w-[68px]">
              <Network
                className="mb-1 h-3.5 w-3.5 sm:h-3 sm:w-3 lg:h-4 lg:w-4"
                aria-hidden="true"
              />
              <span className="max-w-[55px] px-1 text-[9px] font-semibold leading-[1.15] sm:text-[8px] lg:text-[10px]">
                {content.centerLabel}
              </span>
            </div>
          </div>

          {/* Confirmation Panel */}
          <div className="relative z-10 ml-auto mt-5 w-[72%] rounded-[10px] border border-white/15 bg-[#28366f]/70 p-3 shadow-[0_8px_25px_rgba(0,0,0,0.2)] backdrop-blur-md sm:mt-3 sm:mr-[1%] sm:w-[58%] sm:p-2 lg:mt-5 lg:w-[62%] lg:p-3">
            <div className="flex items-center justify-between gap-1">
              <p className="text-[11px] font-bold text-white sm:text-[9px] lg:text-[12px]">
                {content.panelTitle}
              </p>

              <span className="whitespace-nowrap rounded-[3px] bg-white/15 px-1.5 py-0.5 text-[8px] font-bold tracking-wide text-white sm:text-[7px] lg:text-[9px]">
                {content.panelTag}
              </span>
            </div>

            <div className="mt-2 grid grid-cols-3 gap-1.5">
              {confirmItems.map((item) => (
                <div
                  key={item.title}
                  className="min-w-0 rounded-[5px] bg-white/10 px-2 py-1.5 text-white sm:px-1.5 sm:py-1 lg:px-2 lg:py-1.5"
                >
                  <p className="text-[10px] font-bold sm:text-[8px] lg:text-[10px]">
                    {item.title}
                  </p>

                  <p className="mt-0.5 text-[9px] leading-[1.3] text-white/75 sm:text-[7px] lg:text-[9px]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
