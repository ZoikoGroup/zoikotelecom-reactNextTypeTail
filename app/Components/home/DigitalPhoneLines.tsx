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
    <section className="w-full overflow-x-hidden bg-white px-6 py-12 text-[#120b16] sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1300px]">
        {/* Heading */}
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#c4237f]">
            The Black Friday Offer
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Digital Phone Lines{" "}
            <span className="text-[#c4237f]">(20% off for 6 months)</span>
          </h2>
          <p className="mt-3 text-base text-[#3c3544]">
            Move your business calls to a digital line before the analogue
            network is switched off.
          </p>
        </div>

        {/* Image + offer */}
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="relative min-h-[320px] overflow-hidden rounded-3xl shadow-xl md:min-h-[360px]">
            <Image
              src="/images/home/3.png"
              alt="Smiling businessman talking on a phone in an open-plan office"
              fill
              sizes="(min-width: 768px) 440px, 90vw"
              className="object-cover"
              priority
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 to-transparent"
            />
            <div className="absolute inset-x-5 bottom-5 flex items-center justify-between gap-3">
              <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.12em] text-white">
                <span
                  aria-hidden="true"
                  className="h-2 w-2 rounded-full bg-[#3ddc84]"
                />
                Line 1 · Connected
              </p>
              <span className="rounded-full border border-[#f0459f] bg-black/50 px-3 py-1 text-sm font-bold uppercase tracking-[0.12em] text-white">
                Black Friday
              </span>
            </div>
          </div>

          <div className="flex flex-col rounded-3xl border-2 border-[#d4145a] bg-[#120b16] p-6 text-white shadow-xl">
            <span className="inline-block self-start rounded-full bg-gradient-to-r from-[#c4237f] to-[#8a2fb3] px-3 py-1 text-sm font-bold uppercase tracking-[0.06em]">
              Free migration + keep your number
            </span>

            <ul className="mt-4 space-y-2.5">
              {FEATURES.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm">
                  <Check
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#f0459f]"
                    aria-hidden="true"
                  />
                  <span className="leading-5 text-white/90">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-5 rounded-xl border border-dashed border-white/25 bg-white/5 p-4">
              <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#f0459f]">
                Black Friday Price
              </p>
              <p className="mt-2 text-sm leading-6 text-white/90">
                <strong className="text-xl font-extrabold text-white">
                  20% off
                </strong>{" "}
                the monthly charge for months 1–6, then [£XX.XX] per line /
                month standard.
              </p>
            </div>

            <Link
              href="#request"
              className="mt-5 inline-flex items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[#c4237f]"
            >
              Request a business quote
            </Link>

            <p className="mt-4 text-sm leading-5 text-white/60">
              Minimum term: [XX months]. Installation: [terms]. Prices exclude
              VAT: [to be confirmed].
            </p>
          </div>
        </div>

        {/* Switchover */}
        <div className="mt-6 grid items-center gap-8 rounded-3xl bg-gradient-to-br from-[#120b16] to-[#2a1535] p-6 text-white shadow-xl md:grid-cols-[0.9fr_1.1fr] md:p-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#f0459f]">
              The Digital Switchover
            </p>
            <h3 className="mt-3 text-xl font-bold leading-7">
              The UK&apos;s analogue phone network is being switched off.
            </h3>
            <p className="mt-3 text-sm leading-5 text-white/70">
              Digital phone lines keep your business reachable on the same
              number.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="shrink-0 rounded-lg border border-white/15 bg-white/10 px-4 py-3 text-sm font-semibold">
                Analogue line
              </span>
              <span
                aria-hidden="true"
                className="relative flex-1 border-t-2 border-dashed border-[#c9a98a]"
              >
                <X className="absolute left-1/2 top-1/2 h-7 w-7 -translate-x-1/2 -translate-y-1/2 text-[#ff4d6d]" />
              </span>
              <span className="shrink-0 rounded-lg border border-white/15 bg-white/10 px-4 py-3 text-sm font-semibold">
                Your business
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="shrink-0 rounded-lg bg-gradient-to-r from-[#f0459f] to-[#b45ad8] px-4 py-3 text-sm font-semibold">
                Digital line
              </span>
              <span
                aria-hidden="true"
                className="flex-1 border-t-2 border-dashed border-white"
              />
              <span className="shrink-0 rounded-lg bg-white px-4 py-3 text-sm font-bold text-[#c4237f]">
                Your business
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
