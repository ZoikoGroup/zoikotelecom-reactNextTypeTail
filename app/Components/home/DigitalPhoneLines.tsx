import Image from "next/image";
import Link from "next/link";
import { Check, X } from "lucide-react";

const FEATURES = [
  "Keep your existing business number",
  "Caller ID & call forwarding",
  "Ready for the PSTN switch-off",
  "Migration & digital voice adapter: [confirm Black Friday terms]",
] as const;

export default function DigitalPhoneLines() {
  return (
    <section className="w-full overflow-x-hidden bg-white px-4 py-8 text-[#120b16] sm:px-8 sm:py-12 lg:px-10">
      <div className="mx-auto max-w-[1300px]">
        {/* Heading */}
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c4237f] sm:text-sm">
            The Black Friday Offer
          </p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight sm:mt-3 sm:text-4xl">
            Digital Phone Lines{" "}
            <span className="block sm:inline text-[#c4237f]">
              (20% off for 6 months)
            </span>
          </h2>
          <p className="mt-2 text-sm text-[#3c3544] sm:mt-3 sm:text-base">
            Move your business calls to a digital line before the analogue
            network is switched off.
          </p>
        </div>

        {/* Image + offer */}
        <div className="mt-6 grid gap-6 md:mt-8 md:grid-cols-2">
          {/* Image Container */}
          <div className="relative min-h-[260px] w-full overflow-hidden rounded-3xl shadow-xl sm:min-h-[320px] md:min-h-[360px]">
            <Image
              src="/images/black-friday/b3.png"
              alt="Smiling businessman talking on a phone in an open-plan office"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
              priority
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 to-transparent"
            />
            <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-2 sm:inset-x-5 sm:bottom-5 sm:gap-3">
              <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-white sm:text-sm">
                <span
                  aria-hidden="true"
                  className="h-2 w-2 rounded-full bg-[#3ddc84]"
                />
                Line 1 · Connected
              </p>
              <span className="rounded-full border border-[#f0459f] bg-black/50 px-2.5 py-1 text-xs font-bold uppercase tracking-[0.12em] text-white sm:px-3 sm:text-sm">
                Black Friday
              </span>
            </div>
          </div>

          {/* Offer Details Card */}
          <div className="flex flex-col rounded-3xl border-2 border-[#d4145a] bg-[#120b16] p-5 text-white shadow-xl sm:p-6">
            <span className="inline-block self-start rounded-full bg-gradient-to-r from-[#c4237f] to-[#8a2fb3] px-3 py-1 text-xs font-bold uppercase tracking-[0.06em] sm:text-sm">
              Free migration + keep your number
            </span>

            <ul className="mt-4 space-y-2.5">
              {FEATURES.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 text-xs sm:text-sm"
                >
                  <Check
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#f0459f]"
                    aria-hidden="true"
                  />
                  <span className="leading-5 text-white/90">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-5 rounded-xl border border-dashed border-white/25 bg-white/5 p-3.5 sm:p-4">
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#f0459f] sm:text-sm">
                Black Friday Price
              </p>
              <p className="mt-1.5 text-xs leading-5 text-white/90 sm:mt-2 sm:text-sm sm:leading-6">
                <strong className="text-lg font-extrabold text-white sm:text-xl">
                  20% off
                </strong>{" "}
                the monthly charge for months 1–6, then [£XX.XX] per line /
                month standard.
              </p>
            </div>

            <Link
              href="#request"
              className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-3.5 text-center text-sm font-bold text-[#c4237f] transition hover:bg-white/90"
            >
              Request a business quote
            </Link>

            <p className="mt-4 text-xs leading-5 text-white/60 sm:text-sm">
              Minimum term: [XX months]. Installation: [terms]. Prices exclude
              VAT: [to be confirmed].
            </p>
          </div>
        </div>

        {/* Switchover */}
        <div className="mt-6 grid items-center gap-6 rounded-3xl bg-gradient-to-br from-[#120b16] to-[#2a1535] p-5 text-white shadow-xl sm:p-8 md:grid-cols-[0.9fr_1.1fr] md:gap-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#f0459f] sm:text-sm">
              The Digital Switchover
            </p>
            <h3 className="mt-2 text-lg font-bold leading-6 sm:mt-3 sm:text-xl sm:leading-7">
              The UK&apos;s analogue phone network is being switched off.
            </h3>
            <p className="mt-2 text-xs leading-5 text-white/70 sm:mt-3 sm:text-sm">
              Digital phone lines keep your business reachable on the same
              number.
            </p>
          </div>

          <div className="space-y-4 sm:space-y-6">
            {/* Analogue Line Diagram Row */}
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="shrink-0 rounded-lg border border-white/15 bg-white/10 px-2.5 py-2 text-xs font-semibold sm:px-4 sm:py-3 sm:text-sm">
                Analogue line
              </span>
              <span
                aria-hidden="true"
                className="relative flex-1 border-t-2 border-dashed border-[#c9a98a]"
              >
                <X className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 text-[#ff4d6d] sm:h-7 sm:w-7" />
              </span>
              <span className="shrink-0 rounded-lg border border-white/15 bg-white/10 px-2.5 py-2 text-xs font-semibold sm:px-4 sm:py-3 sm:text-sm">
                Your business
              </span>
            </div>

            {/* Digital Line Diagram Row */}
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="shrink-0 rounded-lg bg-gradient-to-r from-[#f0459f] to-[#b45ad8] px-2.5 py-2 text-xs font-semibold sm:px-4 sm:py-3 sm:text-sm">
                Digital line
              </span>
              <span
                aria-hidden="true"
                className="flex-1 border-t-2 border-dashed border-white"
              />
              <span className="shrink-0 rounded-lg bg-white px-2.5 py-2 text-xs font-bold text-[#c4237f] sm:px-4 sm:py-3 sm:text-sm">
                Your business
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
