import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone, Tag } from "lucide-react";

const HEADLINE = [
  [{ text: "Business", accent: false }],
  [{ text: "connections", accent: false }],
  [
    { text: "that ", accent: false },
    { text: "mean", accent: true },
  ],
  [{ text: "business.", accent: true }],
] as const;

const CHIPS = [
  "Setup waived only if approved",
  "Minimum term: 12 month",
  "Installation: Free",
] as const;

const ACTIONS = [
  {
    label: "Request a business quote",
    href: "#request",
    primary: true,
  },
  {
    label: "See all Black Friday deals",
    href: "#deals",
    primary: false,
  },
] as const;

const QUOTE_ROWS = [
  { label: "Digital phone lines × [n]", value: "[£XX.XX]/line", accent: false },
  { label: "Black Friday saving", value: "20% · months 1–6", accent: true },
  { label: "Setup", value: "free installation", accent: false },
] as const;

const MARQUEE_ITEMS = [
  "BLACK FRIDAY",
  "27–30 NOVEMBER 2026",
  "DIGITAL PHONE LINES FOR UK BUSINESSES",
  "BT BROADBAND",
  "EE eSIM PLANS",
  "REQUEST A BUSINESS QUOTE",
] as const;

function MarqueeGroup({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul
      aria-hidden={hidden || undefined}
      className="flex shrink-0 items-center"
    >
      {MARQUEE_ITEMS.map((item) => (
        <li
          key={item}
          className="flex items-center gap-3 whitespace-nowrap pr-5 text-xs font-semibold uppercase tracking-[0.2em] text-white sm:gap-5 sm:text-sm"
        >
          <span>{item}</span>
          <span aria-hidden="true" className="h-2 w-2 rotate-45 bg-[#e0359b]" />
        </li>
      ))}
    </ul>
  );
}

export default function BlackFridayHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#120b16] text-white">
      <style>{`
        @keyframes bf-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .bf-marquee-track {
          animation: bf-marquee 30s linear infinite;
        }
        .bf-marquee:hover .bf-marquee-track,
        .bf-marquee:focus-within .bf-marquee-track {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .bf-marquee-track { animation-duration: 120s; }
        }
      `}</style>

      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_85%_60%,rgba(142,36,140,0.75),transparent_55%),radial-gradient(ellipse_at_10%_0%,rgba(40,20,48,0.9),transparent_60%)]"
      />

      {/* Watermark */}
      <p
        aria-hidden="true"
        className="pointer-events-none absolute bottom-12 left-0 right-0 select-none whitespace-nowrap text-center text-[64px] font-extrabold uppercase leading-none tracking-tight text-transparent opacity-20 sm:bottom-6 sm:text-[120px] sm:opacity-30 lg:text-[200px]"
        style={{ WebkitTextStroke: "1px rgba(255,255,255,0.25)" }}
      >
        Black Friday
      </p>

      <div className="relative mx-auto max-w-[1340px] px-4 pb-12 pt-8 sm:px-8 sm:pb-16 sm:pt-12 lg:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-8">
          {/* Left column */}
          <div className="flex flex-col items-start">
            <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#c4237f] to-[#8a2fb3] px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.1em] sm:px-4 sm:text-sm">
              <Tag className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden="true" />
              Black Friday Sale 2026
            </span>

            <h1 className="mt-4 text-4xl font-extrabold uppercase leading-[1.05] tracking-tight sm:mt-6 sm:text-6xl sm:leading-[1.02] lg:text-[60px]">
              {HEADLINE.map((line, i) => (
                <span key={i} className="block">
                  {line.map((part) => (
                    <span
                      key={part.text}
                      className={
                        part.accent
                          ? "bg-gradient-to-r from-[#f0459f] to-[#b45ad8] bg-clip-text text-transparent"
                          : ""
                      }
                    >
                      {part.text}
                    </span>
                  ))}
                </span>
              ))}
            </h1>

            <p className="mt-4 max-w-[480px] text-sm leading-6 text-white/80 sm:mt-6 sm:text-base sm:leading-7">
              Black Friday offers on eligible digital phone line packages, plus
              BT broadband and EE eSIM plans for your team.
            </p>

            <div className="mt-6 w-full max-w-[520px] rounded-2xl border border-[#8a4a9a]/70 bg-white/5 p-4 backdrop-blur sm:p-5">
              <div className="flex items-center gap-3 sm:gap-5">
                <div className="shrink-0 text-center sm:text-left">
                  <p className="bg-gradient-to-r from-[#f0459f] to-[#b45ad8] bg-clip-text text-4xl font-extrabold leading-none text-transparent sm:text-5xl">
                    20%
                  </p>
                  <p className="mt-1 text-xs font-bold uppercase tracking-[0.2em] text-[#f0459f] sm:text-sm">
                    Off
                  </p>
                </div>
                <span
                  aria-hidden="true"
                  className="h-12 w-px bg-white/20 sm:h-14"
                />
                <p className="text-xs leading-5 text-white/85 sm:text-sm sm:leading-6">
                  the monthly charge on selected business{" "}
                  <strong className="font-bold text-white">
                    digital phone line
                  </strong>{" "}
                  packages for the{" "}
                  <strong className="font-bold text-white">
                    first six months
                  </strong>{" "}
                  of an eligible new service agreement.
                </p>
              </div>
              <ul className="mt-4 flex flex-wrap gap-1.5 border-t border-white/10 pt-4 sm:gap-2">
                {CHIPS.map((chip) => (
                  <li
                    key={chip}
                    className="rounded-full border border-white/20 bg-white/5 px-2.5 py-1 text-xs text-white/80 sm:px-3 sm:text-sm"
                  >
                    {chip}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 flex w-full flex-col sm:w-auto sm:flex-row sm:items-center gap-3">
              {ACTIONS.map((action) => (
                <Link
                  key={action.label}
                  href={action.href}
                  className={
                    action.primary
                      ? "inline-flex w-full justify-center items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[#c4237f] transition hover:bg-white/90 sm:w-auto"
                      : "inline-flex w-full justify-center items-center gap-2 rounded-full border border-white/40 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/10 sm:w-auto"
                  }
                >
                  {action.label}
                  {action.primary && (
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  )}
                </Link>
              ))}
            </div>

            <p className="mt-6 max-w-[560px] text-xs leading-5 text-white/60 sm:text-sm">
              Eligible UK businesses and new service agreements only. Offer
              subject to approval. Standard monthly charge applies after six
              months. Prices exclude VAT.
            </p>
          </div>

          {/* Right column */}
          <div className="relative mx-auto mt-4 w-full max-w-[520px] pb-16 pt-8 sm:mt-0 sm:pb-12 sm:pt-10 lg:max-w-none">
            <div className="rounded-3xl  p-0.5">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl sm:aspect-[4/5] lg:aspect-[8/7]">
                <Image
                  src="/Images/sale/hero.png"
                  alt="Smiling businessman in a suit holding a phone"
                  fill
                  sizes="(min-width: 1024px) 45vw, (min-width: 640px) 80vw, 100vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Sale tag */}
            <div className="absolute left-0 top-0 z-10 flex flex-col items-center sm:-left-2">
              <span
                aria-hidden="true"
                className="h-4 w-px bg-[#f9c80e] sm:h-6"
              />
              <div className="rounded-xl bg-[#f9c80e] px-3.5 py-2 text-center text-[#120b16] shadow-xl sm:px-5 sm:py-3">
                <p className="text-sm font-extrabold uppercase leading-4 sm:text-lg sm:leading-5">
                  Black
                  <br />
                  Friday
                </p>
                <p className="mt-1 rounded bg-[#d4145a] px-1.5 py-0.5 text-xs font-bold uppercase text-white sm:px-2 sm:text-sm">
                  Sale
                </p>
              </div>
            </div>

            {/* Date card */}
            <div className="absolute right-0 top-2 z-10 flex items-center gap-2.5 rounded-2xl bg-white px-3 py-2 text-[#120b16] shadow-xl sm:gap-3 sm:px-4 sm:py-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#120b16] text-white sm:h-9 sm:w-9">
                <Tag className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden="true" />
              </span>
              <div>
                <p className="text-xs text-[#5d5566] sm:text-sm sm:leading-4">
                  Black Friday
                </p>
                <p className="text-sm font-extrabold text-[#c4237f] sm:text-base sm:leading-5">
                  27 – 30 Nov
                </p>
              </div>
            </div>

            {/* Digital lines pill */}
            <div className="absolute right-0 top-[45%] z-10 flex items-center gap-2.5 rounded-2xl bg-white px-3 py-2 text-[#120b16] shadow-xl sm:right-[-12px] sm:top-[40%] sm:gap-3 sm:px-4 sm:py-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#fde4f1] text-[#c4237f] sm:h-9 sm:w-9">
                <Phone
                  className="h-3.5 w-3.5 sm:h-4 sm:w-4"
                  aria-hidden="true"
                />
              </span>
              <div>
                <p className="text-xs text-[#5d5566] sm:text-sm sm:leading-4">
                  Digital lines
                </p>
                <p className="text-sm font-extrabold text-[#c4237f] sm:text-base sm:leading-5">
                  20% off · 6 months
                </p>
              </div>
            </div>

            {/* Quote card */}
            <div className="absolute -bottom-4 left-0 z-10 w-[85%] max-w-[280px] overflow-hidden rounded-xl bg-white text-[#120b16] shadow-2xl sm:bottom-0 sm:left-[-16px] sm:w-[78%] sm:max-w-[300px]">
              <div className="flex items-center justify-between bg-gradient-to-r from-[#c4237f] to-[#8a2fb3] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.08em] text-white sm:px-4 sm:py-2 sm:text-sm">
                <span>Business quote</span>
                <span>Black Friday</span>
              </div>
              <dl className="space-y-1 px-3 py-2.5 sm:space-y-1.5 sm:px-4 sm:py-3">
                {QUOTE_ROWS.map((row) => (
                  <div
                    key={row.label}
                    className="flex items-center justify-between gap-2 text-xs sm:gap-3 sm:text-sm"
                  >
                    <dt className="truncate text-[#5d5566]">{row.label}</dt>
                    <dd
                      className={
                        row.accent
                          ? "shrink-0 font-bold text-[#c4237f]"
                          : "shrink-0 font-semibold"
                      }
                    >
                      {row.value}
                    </dd>
                  </div>
                ))}
                <div className="flex items-center justify-between gap-2 border-t border-[#ece8ee] pt-1.5 text-xs sm:gap-3 sm:pt-2 sm:text-sm">
                  <dt className="font-bold">Minimum term</dt>
                  <dd className="font-bold">12 months</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee ticker */}
      <div className="bf-marquee relative w-full overflow-hidden border-t border-white/10 bg-black py-2.5 sm:py-3">
        <div className="bf-marquee-track flex w-max">
          <MarqueeGroup />
          <MarqueeGroup hidden />
        </div>
      </div>
    </section>
  );
}
