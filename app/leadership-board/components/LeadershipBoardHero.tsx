import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Shield, UsersRound } from "lucide-react";

const content = {
  eyebrow: "ABOUT ZOIKO",
  headingLine1Prefix: "Leadership ",
  headingLine1Accent: "&",
  headingLine2: "Board",
  description:
    "Find information about Zoiko Telecom’s leadership and company governance — starting with the official public register.",
  primary: { label: "View company register", href: "/about/company-register" },
  secondary: { label: "Contact Zoiko", href: "/contact" },
} as const;

const register = {
  eyebrow: "PUBLIC REGISTER",
  title: "Companies House",
  tag: "FILED INFO",
  rows: [
    { label: "Company", value: "Zoiko Telecom Ltd" },
    { label: "Number", value: "15021457" },
    { label: "Officers", value: "On the register" },
  ],
} as const;

const chips = [
  { label: "Board & statutory roles", icon: UsersRound },
  { label: "Governance information", icon: Shield },
] as const;

/* Narrower ~1.4% #0B1433 gaps between vertical photo strips */
const strips = [
  { left: "0%", width: "15.5%" },
  { left: "16.9%", width: "15.5%" },
  { left: "33.8%", width: "15.5%" },
  { left: "50.7%", width: "15.5%" },
  { left: "67.6%", width: "15.5%" },
  { left: "84.5%", width: "15.5%" },
] as const;

export default function LeadershipBoardHero() {
  return (
    <section className="lb1 relative flex w-full flex-col items-start overflow-x-clip bg-[#0B1433] p-0 [isolation:isolate] lg:min-h-[680px]">
      <div className="relative mx-auto flex w-full flex-1 flex-col items-stretch self-stretch lg:min-h-[680px] lg:flex-row">
        {/* Left gradient panel */}
        <div className="relative z-10 flex w-full items-center bg-[#0B1433] bg-[radial-gradient(ellipse_110%_95%_at_12%_18%,#1b368a_0%,#10205a_42%,#0B1433_78%),linear-gradient(155deg,#122569_0%,#0c163d_55%,#3b104c_100%)] px-6 py-16 sm:px-10 lg:w-[48%] lg:py-0 lg:pl-[88px] lg:pr-8">
          <div className="w-full max-w-[520px]">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-white/45" aria-hidden="true" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/75">
                {content.eyebrow}
              </span>
            </div>

            <h1 className="mt-4 text-5xl font-extrabold leading-[1.06] tracking-[-0.025em] text-white sm:text-6xl lg:text-[62px]">
              {content.headingLine1Prefix}
              <span className="text-[#8fb2ff]">
                {content.headingLine1Accent}
              </span>
              <br />
              <span className="italic text-[#8fb2ff]">
                {content.headingLine2}
              </span>
            </h1>

            <p className="mt-5 max-w-[460px] text-[15px] leading-[1.65] text-white/80 sm:text-base">
              {content.description}
            </p>

            <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
              <Link
                href={content.primary.href}
                className="inline-flex h-11 items-center justify-center gap-2.5 rounded-lg bg-gradient-to-r from-[#e6157a] via-[#d91487] to-[#be109e] px-6 text-sm font-semibold text-white shadow-[0_10px_28px_rgba(230,21,122,0.45)] transition hover:brightness-110"
              >
                {content.primary.label}
                <ChevronRight
                  className="h-4 w-4 stroke-[2.25]"
                  aria-hidden="true"
                />
              </Link>
              <Link
                href={content.secondary.href}
                className="inline-flex h-11 items-center justify-center rounded-lg bg-white px-6 text-sm font-semibold text-[#0B1433] shadow-sm transition hover:bg-[#eef2fb]"
              >
                {content.secondary.label}
              </Link>
            </div>
          </div>
        </div>

        {/* Right broken image + floating register card & chips */}
        <div className="relative min-h-[440px] w-full bg-[#0B1433] lg:min-h-[680px] lg:w-[52%]">
          {/* Mobile: single full image */}
          <div className="absolute inset-0 lg:hidden">
            <Image
              src="/Images/board/1.jpg"
              alt="Leadership team meeting around a table"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-[#0B1433]/55" />
          </div>

          {/* Desktop: broken vertical strips with narrower #0B1433 gaps */}
          <div className="absolute inset-0 hidden lg:block">
            {strips.map((strip, index) => (
              <div
                key={strip.left}
                className="absolute inset-y-0 overflow-hidden bg-[#0B1433]"
                style={{ left: strip.left, width: strip.width }}
              >
                <div
                  className="absolute inset-y-0"
                  style={{
                    width: "645%",
                    left: `-${(parseFloat(strip.left) / parseFloat(strip.width)) * 100}%`,
                  }}
                >
                  <Image
                    src="/Images/board/1.jpg"
                    alt={
                      index === 0
                        ? "Leadership team meeting around a table"
                        : ""
                    }
                    aria-hidden={index !== 0}
                    fill
                    priority={index === 0}
                    sizes="52vw"
                    className="object-cover object-center"
                  />
                </div>
                <div className="absolute inset-0 bg-[#0B1433]/35" />
              </div>
            ))}
            {/* Subtle edge blend from left gradient panel */}
            <div
              className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#0B1433]/85 to-transparent"
              aria-hidden="true"
            />
          </div>

          {/* Register card */}
          <div className="absolute right-5 top-7 z-20 w-[calc(100%-2.5rem)] max-w-[330px] sm:right-8 lg:right-[36px] lg:top-[64px] lg:w-[300px]">
            <div className="relative -rotate-[1.5deg] overflow-visible rounded-[4px] bg-[#fbf8f1] shadow-[0_24px_54px_rgba(4,8,24,0.65)]">
              <div
                className="h-[5px] w-full rounded-t-[4px]"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(90deg,#2f55d4 0 14px,#c2255c 14px 28px)",
                }}
                aria-hidden="true"
              />
              <div className="px-5 pb-5 pt-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#5b6b82]">
                  {register.eyebrow}
                </p>
                <p className="mt-1 text-[21px] font-bold leading-snug tracking-[-0.015em] text-[#0f1c3f]">
                  {register.title}
                </p>

                <dl className="mt-3 divide-y divide-[#e6e1d5] border-t border-[#e6e1d5]">
                  {register.rows.map((row) => (
                    <div
                      key={row.label}
                      className="flex items-center justify-between gap-3 py-2 text-[12px]"
                    >
                      <dt className="text-[#64748b]">{row.label}</dt>
                      <dd className="font-bold text-[#0f1c3f]">{row.value}</dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-2.5 space-y-1.5" aria-hidden="true">
                  <div className="h-[5px] w-full rounded-full bg-[#e6e1d5]" />
                  <div className="h-[5px] w-[72%] rounded-full bg-[#e6e1d5]" />
                </div>
              </div>

              <span className="absolute -bottom-5 -right-4 flex h-[62px] w-[62px] rotate-[8deg] items-center justify-center rounded-full bg-[#3b82f6] px-1.5 text-center text-[10px] font-extrabold uppercase leading-[1.15] tracking-wide text-white shadow-[0_10px_22px_rgba(37,99,235,0.5)]">
                {register.tag}
              </span>
            </div>
          </div>

          {/* Chips */}
          <div className="absolute bottom-6 right-5 z-20 flex flex-col items-end gap-2.5 sm:right-8 lg:bottom-[36px] lg:right-[36px]">
            {chips.map(({ label, icon: Icon }) => (
              <div
                key={label}
                className="flex items-center gap-2.5 rounded-lg border border-white/15 bg-[#1a2556]/80 px-3.5 py-2 text-xs font-medium text-white shadow-lg backdrop-blur-md"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#3b5bdb]/70 text-white">
                  <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
