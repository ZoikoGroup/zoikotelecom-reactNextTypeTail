import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, CornerUpRight, Shield } from "lucide-react";

const NUMBER_CHIPS = [
  {
    id: "geographic",
    number: "01 / 02",
    label: "Local area numbers",
    position: "left-4 top-6 sm:left-6 lg:-left-10 lg:top-16",
  },
  {
    id: "nationwide",
    number: "03",
    label: "Nationwide, standard rate",
    position: "left-4 top-[40%] sm:left-6 lg:-left-16 lg:top-[44%]",
  },
  {
    id: "freephone",
    number: "0800",
    label: "Free to call from the UK",
    position: "bottom-6 left-4 sm:left-6 lg:-left-4 lg:bottom-14",
  },
] as const;

export default function VirtualNumbersHero() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div className="mx-auto grid max-w-[1440px] items-stretch lg:grid-cols-[1.1fr_1fr]">
        {/* Left: copy */}
        <div className="px-4 py-14 sm:px-8 lg:py-20 lg:pl-[max(2rem,calc((100vw-1300px)/2))] lg:pr-12">
          <p className="inline-flex items-center gap-2 rounded-full border border-[#F7C6DD] bg-[#FDF1F7] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.08em] text-[#E11D74]">
            <span
              aria-hidden="true"
              className="h-2 w-2 rounded-full bg-[#E11D74]"
            />
            Virtual Numbers
          </p>

          <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] tracking-tight text-[#11183C] sm:text-5xl lg:text-[52px]">
            A business number that connects callers to{" "}
            <span className="text-[#E11D74]">the right place.</span>
          </h1>

          <p className="mt-5 max-w-[520px] text-base leading-7 text-[#4B5375]">
            Learn about UK number types, how calls can be routed, what callers
            pay, and what to consider before you choose.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#discuss-number-options"
              className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-[#E11D74] to-[#D6156C] px-7 py-3.5 text-sm font-bold text-white shadow-[0_8px_22px_rgba(225,29,116,0.35)] transition-transform hover:scale-[1.01]"
            >
              Discuss number options
              <ChevronRight className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
            </Link>
            <Link
              href="/landlines-business-voice"
              className="inline-flex items-center justify-center rounded-xl border border-[#11183C] bg-white px-7 py-3.5 text-sm font-bold text-[#11183C] transition-colors hover:bg-[#F5F6FB]"
            >
              Explore business voice
            </Link>
          </div>

          <div className="mt-4 flex max-w-[560px] items-start gap-3 rounded-xl border border-[#E4E1F5] bg-white p-4 shadow-[0_8px_24px_rgba(17,24,60,0.08)]">
            <Shield
              className="mt-0.5 h-5 w-5 shrink-0 text-[#7B3FE4]"
              strokeWidth={2}
              aria-hidden="true"
            />
            <p className="text-sm leading-relaxed text-[#4B5375]">
              <strong className="font-bold text-[#11183C]">
                Options, pricing and availability are confirmed by our team.
              </strong>{" "}
              Numbers aren&apos;t issued instantly from this page.
            </p>
          </div>
        </div>

        {/* Right: image with number chips */}
        <div className="relative min-h-[460px] bg-[#0B0A1F] sm:min-h-[560px]">
          <Image
            src="/Images/landlines-virtual-numbers/hero-tablet-chart.webp"
            alt="Hands over a tablet showing a rising business chart"
            fill
            priority
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />

          {NUMBER_CHIPS.map((chip) => (
            <div
              key={chip.id}
              className={`absolute z-10 rounded-xl bg-white px-4 py-3 shadow-[0_12px_30px_rgba(17,24,60,0.25)] ${chip.position}`}
            >
              <p className="bg-gradient-to-r from-[#E11D74] to-[#8E37E8] bg-clip-text text-xl font-extrabold text-transparent">
                {chip.number}
              </p>
              <p className="mt-0.5 text-xs font-semibold text-[#11183C]">
                {chip.label}
              </p>
            </div>
          ))}

          <div className="absolute bottom-6 right-4 z-10 inline-flex items-center gap-2 rounded-xl bg-[#11183C]/95 px-4 py-2.5 text-xs font-semibold text-white shadow-lg sm:right-8 sm:text-sm">
            <CornerUpRight
              className="h-4 w-4 text-[#F472B6]"
              strokeWidth={2.25}
              aria-hidden="true"
            />
            One number → the right team
          </div>
        </div>
      </div>
    </section>
  );
}
