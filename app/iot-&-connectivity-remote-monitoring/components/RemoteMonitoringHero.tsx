import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Cloud, Radio, RadioTower } from "lucide-react";

const IMG = "/Images/iot-&-connectivity-remote-monitoring";

const FLOW = [
  { label: "Sensor", icon: Radio, bg: "bg-[#12936F]" },
  { label: "Network", icon: RadioTower, bg: "bg-[#3B6CF6]" },
  { label: "Your platform", icon: Cloud, bg: "bg-[#8E37E8]" },
] as const;

const STATES = [
  { label: "Current reading", className: "bg-[#E3F6EF] text-[#0F7B5F]" },
  { label: "Stale reading", className: "bg-[#FEF3D7] text-[#9A6A00]" },
  { label: "No reading", className: "bg-[#EEF0F6] text-[#4B5375]" },
] as const;

export default function RemoteMonitoringHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F6FBFA]">
      <Image
        src={`${IMG}/hero-bg-contours.webp`}
        alt=""
        fill
        priority
        sizes="100vw"
        className="pointer-events-none object-cover"
      />

      <div className="relative mx-auto grid max-w-[1440px] items-stretch lg:grid-cols-[1fr_1fr]">
        {/* Left */}
        <div className="flex flex-col justify-center px-4 py-12 sm:px-8 lg:py-20 lg:pl-10 lg:pr-6 xl:pl-[40px]">
          <p className="inline-flex w-fit items-center gap-2 rounded-full border border-[#BFE6D8] bg-[#DDF3EB] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.1em] text-[#0F7B5F]">
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[#12936F]" />
            Remote monitoring
          </p>

          <h1 className="mt-5 text-4xl font-extrabold leading-[1.08] tracking-tight text-[#11183C] sm:text-5xl lg:text-[56px]">
            Plan connectivity for{" "}
            <span className="bg-gradient-to-r from-[#E11D9B] via-[#9B3FE4] to-[#5B5BF6] bg-clip-text text-transparent">
              remote equipment monitoring.
            </span>
          </h1>

          <p className="mt-5 max-w-[540px] text-base leading-7 text-[#4B5375] sm:text-lg">
            Work out how readings from pumps, tanks, cold stores and power
            systems could reach your own systems — and what your sensors and
            business need from the connection.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#monitoring-enquiry"
              className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-[#E11D74] to-[#C8166A] px-7 py-3.5 text-sm font-bold text-white shadow-[0_10px_26px_rgba(225,29,116,0.35)] transition-transform hover:scale-[1.01] sm:text-base"
            >
              Discuss monitoring needs
              <ChevronRight className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
            </Link>
            <Link
              href="#use-cases"
              className="inline-flex items-center justify-center rounded-xl border border-[#11183C] bg-white px-7 py-3.5 text-sm font-bold text-[#11183C] transition-colors hover:bg-[#F5F6FB] sm:text-base"
            >
              Explore monitoring use cases
            </Link>
          </div>
        </div>

        {/* Right: photo with illustrative overlays */}
        <div className="relative min-h-[460px] overflow-hidden sm:min-h-[560px] lg:min-h-[627px] lg:rounded-tl-[24px]">
          <Image
            src={`${IMG}/hero-laptop.webp`}
            alt="Person checking a phone beside a laptop showing a technical drawing"
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-[#11183C]/10" />

          {/* Sensor markers */}
          {["left-[45%] top-[22%]", "left-[83%] top-[17%]", "left-[67%] top-[33%]"].map((pos) => (
            <span
              key={pos}
              aria-hidden="true"
              className={`absolute ${pos} flex h-7 w-7 items-center justify-center rounded-full bg-[#12936F]/35`}
            >
              <span className="h-4 w-4 rounded-full border-[3px] border-white bg-[#12936F]" />
            </span>
          ))}

          {/* Illustrative reading card */}
          <div className="absolute left-4 right-4 top-[38%] max-w-[380px] rounded-2xl border border-white/70 bg-white/90 p-4 shadow-[0_20px_50px_rgba(17,24,60,0.2)] backdrop-blur-md sm:left-[6%] sm:right-auto sm:w-[380px]">
            <div className="flex items-start justify-between gap-3">
              <p className="text-sm font-bold text-[#11183C]">Tank level · Site A</p>
              <span className="rounded-md bg-[#EEF0F6] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#6B7194]">
                Illustrative
              </span>
            </div>
            <p className="mt-1 text-xs leading-relaxed text-[#6B7194]">
              How a reading could look in your own system — not a live view
            </p>

            <svg viewBox="0 0 340 70" className="mt-3 h-16 w-full" aria-hidden="true">
              <defs>
                <linearGradient id="heroWaveFill" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#12936F" stopOpacity="0.28" />
                  <stop offset="100%" stopColor="#12936F" stopOpacity="0" />
                </linearGradient>
              </defs>
              <line x1="0" x2="340" y1="8" y2="8" stroke="#C0392B" strokeWidth="1.2" strokeDasharray="4 4" />
              <path
                d="M0 46 C40 46 60 26 105 30 S170 50 210 34 S280 18 340 26 L340 70 L0 70 Z"
                fill="url(#heroWaveFill)"
              />
              <path
                d="M0 46 C40 46 60 26 105 30 S170 50 210 34 S280 18 340 26"
                fill="none"
                stroke="#12936F"
                strokeWidth="2.2"
              />
            </svg>

            <div className="mt-3 grid grid-cols-3 gap-2">
              {STATES.map(({ label, className }) => (
                <span
                  key={label}
                  className={`rounded-lg px-2 py-1.5 text-center text-[11px] font-semibold sm:text-xs ${className}`}
                >
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* Flow pill */}
          <div className="absolute bottom-6 left-4 right-4 flex flex-wrap items-center justify-center gap-2 rounded-2xl bg-white px-3 py-2.5 shadow-xl sm:bottom-[9%] sm:left-auto sm:right-[9%] sm:w-auto">
            {FLOW.map(({ label, icon: Icon, bg }, i) => (
              <React.Fragment key={label}>
                {i > 0 && (
                  <span aria-hidden="true" className="text-xs text-[#8A90A6]">
                    →
                  </span>
                )}
                <span className="inline-flex items-center gap-2 text-xs font-bold text-[#11183C] sm:text-sm">
                  <span className={`flex h-7 w-7 items-center justify-center rounded-lg text-white ${bg}`}>
                    <Icon className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
                  </span>
                  {label}
                </span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
