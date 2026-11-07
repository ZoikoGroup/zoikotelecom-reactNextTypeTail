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
          className="flex items-center gap-5 whitespace-nowrap pr-5 text-sm font-semibold uppercase tracking-[0.2em] text-white"
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
        className="pointer-events-none absolute bottom-6 left-0 right-0 select-none whitespace-nowrap text-center text-[120px] font-extrabold uppercase leading-none tracking-tight text-transparent opacity-30 lg:text-[200px]"
        style={{ WebkitTextStroke: "1px rgba(255,255,255,0.25)" }}
      >
        Black Friday
      </p>

      <div className="relative mx-auto max-w-[1340px] px-6 pb-16 pt-12 sm:px-8 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-8">
          {/* Left column */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#c4237f] to-[#8a2fb3] px-4 py-1.5 text-sm font-bold uppercase tracking-[0.1em]">
              <Tag className="h-4 w-4" aria-hidden="true" />
              Black Friday Sale 2026
            </span>

            <h1 className="mt-6 text-5xl font-extrabold uppercase leading-[1.02] tracking-tight sm:text-6xl lg:text-[60px]">
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

            <p className="mt-6 max-w-[480px] text-base leading-7 text-white/80">
              Black Friday offers on eligible digital phone line packages, plus
              BT broadband and EE eSIM plans for your team.
            </p>

            <div className="mt-6 max-w-[520px] rounded-2xl border border-[#8a4a9a]/70 bg-white/5 p-5 backdrop-blur">
              <div className="flex items-center gap-5">
                <div className="shrink-0">
                  <p className="bg-gradient-to-r from-[#f0459f] to-[#b45ad8] bg-clip-text text-5xl font-extrabold leading-none text-transparent">
                    20%
                  </p>
                  <p className="mt-1 text-sm font-bold uppercase tracking-[0.2em] text-[#f0459f]">
                    Off
                  </p>
                </div>
                <span aria-hidden="true" className="h-14 w-px bg-white/20" />
                <p className="text-sm leading-6 text-white/85">
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
              <ul className="mt-4 flex flex-wrap gap-2 border-t border-white/10 pt-4">
                {CHIPS.map((chip) => (
                  <li
                    key={chip}
                    className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-sm text-white/80"
                  >
                    {chip}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              {ACTIONS.map((action) => (
                <Link
                  key={action.label}
                  href={action.href}
                  className={
                    action.primary
                      ? "inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[#c4237f]"
                      : "inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3.5 text-sm font-bold text-white"
                  }
                >
                  {action.label}
                  {action.primary && (
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  )}
                </Link>
              ))}
            </div>

            <p className="mt-6 max-w-[560px] text-sm leading-5 text-white/60">
              Eligible UK businesses and new service agreements only. Offer
              subject to approval. Standard monthly charge applies after six
              months. Prices exclude VAT
            </p>
          </div>

          {/* Right column */}
          <div className="relative mx-auto w-full max-w-[520px] pb-12 pt-10 lg:max-w-none">
            <div className="rounded-3xl to-[#8a2fb3] p-0.5">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl sm:aspect-[8/7]">
                <Image
                  src="/images/home/2.png"
                  alt="Smiling businessman in a suit holding a phone"
                  fill
                  sizes="(min-width: 1024px) 45vw, 90vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Sale tag */}
            <div className="absolute left-2 top-0 z-10 flex flex-col items-center sm:left-0">
              <span aria-hidden="true" className="h-6 w-px bg-[#f9c80e]" />
              <div className="rounded-xl bg-[#f9c80e] px-5 py-3 text-center text-[#120b16] shadow-xl">
                <p className="text-lg font-extrabold uppercase leading-5">
                  Black
                  <br />
                  Friday
                </p>
                <p className="mt-1 rounded bg-[#d4145a] px-2 py-0.5 text-sm font-bold uppercase text-white">
                  Sale
                </p>
              </div>
            </div>

            {/* Date card */}
            <div className="absolute right-0 top-2 z-10 flex items-center gap-3 rounded-2xl bg-white px-4 py-2.5 text-[#120b16] shadow-xl">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#120b16] text-white">
                <Tag className="h-4 w-4" aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm leading-4 text-[#5d5566]">Black Friday</p>
                <p className="text-base font-extrabold leading-5 text-[#c4237f]">
                  27 – 30 Nov
                </p>
              </div>
            </div>

            {/* Digital lines pill */}
            <div className="absolute right-0 top-[40%] z-10 flex items-center gap-3 rounded-2xl bg-white px-4 py-2.5 text-[#120b16] shadow-xl sm:right-[-12px]">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#fde4f1] text-[#c4237f]">
                <Phone className="h-4 w-4" aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm leading-4 text-[#5d5566]">
                  Digital lines
                </p>
                <p className="text-base font-extrabold leading-5 text-[#c4237f]">
                  20% off · 6 months
                </p>
              </div>
            </div>

            {/* Quote card */}
            <div className="absolute bottom-0 left-0 z-10 w-[78%] max-w-[300px] overflow-hidden rounded-xl bg-white text-[#120b16] shadow-2xl sm:left-[-16px]">
              <div className="flex items-center justify-between bg-gradient-to-r from-[#c4237f] to-[#8a2fb3] px-4 py-2 text-sm font-bold uppercase tracking-[0.08em] text-white">
                <span>Business quote</span>
                <span>Black Friday</span>
              </div>
              <dl className="space-y-1.5 px-4 py-3">
                {QUOTE_ROWS.map((row) => (
                  <div
                    key={row.label}
                    className="flex items-center justify-between gap-3 text-sm"
                  >
                    <dt className="text-[#5d5566]">{row.label}</dt>
                    <dd
                      className={
                        row.accent
                          ? "font-bold text-[#c4237f]"
                          : "font-semibold"
                      }
                    >
                      {row.value}
                    </dd>
                  </div>
                ))}
                <div className="flex items-center justify-between gap-3 border-t border-[#ece8ee] pt-2 text-sm">
                  <dt className="font-bold">Minimum term</dt>
                  <dd className="font-bold">12 months</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee ticker */}
      <div className="bf-marquee relative w-full overflow-hidden border-t border-white/10 bg-black py-3">
        <div className="bf-marquee-track flex w-max">
          <MarqueeGroup />
          <MarqueeGroup hidden />
        </div>
      </div>
    </section>
  );
}
