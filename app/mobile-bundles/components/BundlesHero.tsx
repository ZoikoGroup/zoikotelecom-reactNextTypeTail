import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Plus, Smartphone } from "lucide-react";

const HEADLINE = [
  [{ text: "Bring your broadband", accent: false }],
  [
    { text: "and mobile ", accent: false },
    { text: "choices", accent: true },
  ],
  [{ text: "together.", accent: true }],
] as const;

const ACTIONS = [
  { label: "Ask about a bundle", href: "/contact", primary: true },
  { label: "Explore broadband plans", href: "/bt-broadband", primary: false },
] as const;

export default function BundlesHero() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#14102f] via-[#2a1670] to-[#6a2aa8] text-white">
      {/* Subtle wave lines */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-30 [background-image:repeating-linear-gradient(115deg,transparent_0_9px,rgba(255,255,255,0.08)_9px_10px)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_85%_20%,rgba(230,0,126,0.22),transparent_55%)]"
      />

      <div className="relative mx-auto grid max-w-[1300px] items-center gap-12 px-6 py-12 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:px-10 lg:py-14">
        {/* Left */}
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-[0.06em]">
            <span
              aria-hidden="true"
              className="h-2 w-2 rounded-full bg-[#ff3d9a]"
            />
            Broadband &amp; Mobile Bundles
          </p>

          <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-[52px]">
            {HEADLINE.map((line, i) => (
              <span key={i} className="block">
                {line.map((part) => (
                  <span
                    key={part.text}
                    className={part.accent ? "text-[#ff3d9a]" : ""}
                  >
                    {part.text}
                  </span>
                ))}
              </span>
            ))}
          </h1>

          <p className="mt-5 max-w-[460px] text-base leading-7 text-white/80">
            Explore home broadband and mobile options side by side, understand
            the key terms, and ask us about combinations that may suit your
            household.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            {ACTIONS.map((action) => (
              <Link
                key={action.label}
                href={action.href}
                className={
                  action.primary
                    ? "inline-flex items-center rounded-lg bg-gradient-to-r from-[#e6007e] to-[#c4237f] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#e6007e]/30"
                    : "inline-flex items-center rounded-lg border border-white/60 bg-white/5 px-6 py-3 text-sm font-semibold text-white"
                }
              >
                {action.label}
              </Link>
            ))}
          </div>

          <Link
            href="/ee-mobile-plans"
            className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-white/90 underline underline-offset-4"
          >
            Or view mobile plans
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        {/* Right collage */}
        <div className="relative mx-auto h-[380px] w-full max-w-[520px] sm:h-[420px] lg:max-w-none">
          <div className="absolute left-[4%] top-[2%] h-[78%] w-[48%] -rotate-[6deg] overflow-hidden rounded-2xl border-4 border-white shadow-2xl">
            <Image
              src="/Images/mobile/1.png"
              alt="Mobile phone mast against a blue sky"
              fill
              priority
              sizes="(min-width: 1024px) 24vw, 45vw"
              className="object-cover"
            />
          </div>

          <div className="absolute right-[2%] top-[8%] h-[82%] w-[44%] rotate-[4deg] overflow-hidden rounded-2xl border-4 border-white shadow-2xl">
            <Image
              src="/Images/mobile/2.png"
              alt="Smiling woman in a red top"
              fill
              sizes="(min-width: 1024px) 22vw, 42vw"
              className="object-cover"
            />
            <div className="absolute inset-x-3 bottom-3 flex items-center gap-3 rounded-xl bg-white p-3 text-[#1b1740] shadow-lg">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#fde8f3] text-[#e6007e]">
                <Smartphone className="h-4 w-4" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-sm font-bold">Mobile</span>
                <span className="block text-sm text-[#5b6578]">
                  For life on the go
                </span>
              </span>
            </div>
          </div>

          <span className="absolute left-[44%] top-[40%] z-10 flex h-14 w-14 items-center justify-center rounded-full border-4 border-white/70 bg-gradient-to-br from-[#e6007e] to-[#8a2fd6] shadow-xl">
            <Plus className="h-6 w-6" aria-hidden="true" />
          </span>

          <span className="absolute bottom-0 left-[28%] rounded-full border border-white/20 bg-[#1b1740]/90 px-4 py-1.5 text-sm font-medium">
            Two services · one conversation
          </span>
        </div>
      </div>
    </section>
  );
}
