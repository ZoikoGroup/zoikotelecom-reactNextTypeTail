import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BarChart3, ChevronRight, Clock, Layers, Sun } from "lucide-react";

const IMG = "/Images/iot-&-connectivity-data-plans";

// Specimen inputs — same defaults as the estimate tool further down the page.
const INPUTS = [
  { label: "Devices", value: "500", icon: Layers, offset: "sm:ml-[18%]" },
  { label: "Messages / day", value: "96", icon: Clock, offset: "sm:ml-0" },
  { label: "Bytes / message", value: "400", icon: BarChart3, offset: "sm:ml-[18%]" },
  { label: "Firmware / month", value: "5 MB", icon: Sun, offset: "sm:ml-[6%]" },
] as const;

const BARS = [20, 30, 25, 40, 35, 55, 50, 65, 60, 80];

export default function DataPlansHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#FDF6FA]">
      <Image
        src={`${IMG}/hero-bg.webp`}
        alt=""
        fill
        priority
        sizes="100vw"
        className="pointer-events-none object-cover opacity-70"
      />

      {/* Earth image — diagonal edge on large screens */}
      <div className="absolute inset-y-0 right-0 hidden w-[58%] [clip-path:polygon(22%_0,100%_0,100%_100%,0_100%)] lg:block">
        <Image
          src={`${IMG}/hero-earth-network.webp`}
          alt="Earth at night with glowing city lights and network connections"
          fill
          priority
          sizes="58vw"
          className="object-cover"
        />
      </div>

      <div className="relative mx-auto grid max-w-[1300px] items-center gap-10 px-4 py-12 sm:px-8 lg:min-h-[560px] lg:grid-cols-[1fr_1fr] lg:px-10 lg:py-16">
        {/* Left */}
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-[#F7C6DD] bg-[#FCE7F1] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.1em] text-[#C2185B]">
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[#E11D74] ring-2 ring-[#E11D74]/25" />
            IoT data plans
          </p>

          <h1 className="mt-5 text-4xl font-extrabold leading-[1.08] tracking-tight text-[#11183C] sm:text-5xl lg:text-[56px]">
            Plan device data{" "}
            <span className="bg-gradient-to-r from-[#E11D74] via-[#9B3FE4] to-[#5B5BF6] bg-clip-text text-transparent">
              with commercial clarity.
            </span>
          </h1>

          <p className="mt-5 max-w-[540px] text-base leading-7 text-[#4B5375] sm:text-lg">
            Understand the device counts, usage patterns, deployment locations and
            commercial terms that shape an IoT connectivity conversation — before you
            ask for a proposal.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#iot-data-enquiry"
              className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-[#E11D74] to-[#C8166A] px-7 py-3.5 text-sm font-bold text-white shadow-[0_10px_26px_rgba(225,29,116,0.35)] transition-transform hover:scale-[1.01] sm:text-base"
            >
              Discuss IoT data needs
              <ChevronRight className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
            </Link>
            <Link
              href="#allowances"
              className="inline-flex items-center justify-center rounded-xl border border-[#11183C] bg-white px-7 py-3.5 text-sm font-bold text-[#11183C] transition-colors hover:bg-[#F5F6FB] sm:text-base"
            >
              Understand data allowances
            </Link>
          </div>
        </div>

        {/* Right: specimen estimate */}
        <div className="relative overflow-hidden rounded-3xl px-4 py-8 sm:px-8 lg:overflow-visible lg:rounded-none lg:px-0 lg:py-0 lg:pl-[22%]">
          {/* Mobile/tablet background (the diagonal image is lg-only) */}
          <div className="absolute inset-0 lg:hidden">
            <Image
              src={`${IMG}/hero-earth-network.webp`}
              alt=""
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>

          <span
            aria-hidden="true"
            className="pointer-events-none absolute -right-6 -top-8 select-none text-[160px] font-extrabold leading-none text-transparent [-webkit-text-stroke:3px_rgba(255,255,255,0.75)] lg:-right-16 lg:-top-20 lg:text-[220px]"
          >
            GB
          </span>

          <div className="relative">
            <ul className="space-y-3">
              {INPUTS.map(({ label, value, icon: Icon, offset }) => (
                <li
                  key={label}
                  className={`flex w-full max-w-[230px] items-center gap-3 rounded-2xl bg-white/90 px-3 py-2.5 shadow-lg backdrop-blur ${offset}`}
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#E11D74] to-[#8E37E8] text-white">
                    <Icon className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-[11px] font-semibold text-[#4B5375]">{label}</span>
                    <span className="block text-base font-extrabold text-[#11183C]">{value}</span>
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap items-center gap-4 rounded-2xl border border-white/10 bg-[#141A4A]/90 px-5 py-4 text-white shadow-2xl backdrop-blur sm:max-w-[420px]">
              <div>
                <p className="text-[11px] font-semibold text-[#C9CDE3]">
                  Estimated monthly data · specimen
                </p>
                <p className="mt-1 text-2xl font-extrabold">≈ 3.1 GB</p>
              </div>
              <div aria-hidden="true" className="flex h-9 items-end gap-1">
                {BARS.map((h, i) => (
                  <span
                    key={i}
                    className="w-1.5 rounded-sm bg-gradient-to-t from-[#8E37E8] to-[#E11D74]"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
              <span className="rounded-md bg-white/15 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-[#E4E6F3]">
                Not a tariff or bill
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
