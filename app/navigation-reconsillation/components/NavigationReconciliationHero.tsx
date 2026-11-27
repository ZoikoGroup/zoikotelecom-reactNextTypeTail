import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Layers } from "lucide-react";

const heroContent = {
  eyebrow: "CONTROL DOCUMENT · 08",
  headingLine1: "Navigation ",
  headingLine2: "reconciliation",
  description:
    "Freeze the approved designs. Reconcile the v5-style submenu sequence with the v6 navigation and verified-destination register — before any link is published.",
  metaChips: ["Benchmark-Refined v1.0", "17 November 2026"] as const,
  approvalBanner: "Prepared for approval — not approved or locked",
  primaryCta: {
    label: "Discrepancy register",
    href: "#discrepancy-register",
  },
  secondaryCta: {
    label: "Open decisions",
    href: "#open-decisions",
  },
} as const;

const browserPreview = {
  url: "zoikotelecom.com - navigation registry preview",
  image: "/Images/nav/1.png",
  alt: "Laptop displaying analytics dashboards alongside the navigation registry preview",
  statusBadge: "NOT APPROVED · NOT LOCKED",
  navPills: [
    { label: "Mobile", dotClass: "bg-[#10b981]" },
    { label: "Broadband & Fibre", dotClass: "bg-[#10b981]" },
    { label: "Landlines & Voice", dotClass: "bg-[#10b981]" },
    { label: "Business", dotClass: "bg-[#f59e0b]" },
    { label: "IoT & Connectivity", dotClass: "bg-[#94a3b8]" },
    { label: "Devices", dotClass: "bg-[#94a3b8]" },
    { label: "Support", dotClass: "bg-[#f59e0b]" },
    { label: "About Zoiko", dotClass: "bg-[#10b981]" },
  ] as const,
  surfacePill: "One registry · 5 surfaces",
} as const;

const stateMachine = {
  heading: "STATE MACHINE",
  steps: [
    { step: "1", label: "Draft", active: false, complete: false },
    { step: "2", label: "Design approved", active: false, complete: false },
    { step: "3", label: "Mapped", active: false, complete: false },
    { step: "4", label: "Verified", active: false, complete: false },
    { step: "5", label: "Release approved", active: false, complete: false },
    { step: "6", label: "Published", active: false, complete: true },
  ] as const,
  holdBadge: "HOLD on any failed check",
} as const;

export default function NavigationReconciliationHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F6F4FF] px-4 py-12 sm:px-8 lg:px-12 lg:py-16">
      {/* Subtle topographic contour overlay */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-35"
        viewBox="0 0 1440 680"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        preserveAspectRatio="xMidYMid slice"
      >
        <path
          d="M-60 90C140 40 290 175 480 120C670 65 770 -30 990 45C1190 112 1310 55 1500 95"
          stroke="#d8cef6"
          strokeWidth="1.2"
        />
        <path
          d="M-60 190C160 155 310 280 510 215C710 150 820 70 1040 145C1230 210 1340 165 1500 205"
          stroke="#d8cef6"
          strokeWidth="1.2"
        />
        <path
          d="M-60 320C150 285 330 390 540 325C750 260 860 195 1080 265C1260 322 1360 285 1500 325"
          stroke="#d8cef6"
          strokeWidth="1.2"
        />
        <path
          d="M-60 460C180 420 340 520 560 455C780 390 910 340 1120 405C1290 458 1380 430 1500 465"
          stroke="#d8cef6"
          strokeWidth="1.2"
        />
        <path
          d="M-60 595C200 560 360 640 590 580C820 520 940 485 1150 545C1310 590 1390 570 1500 600"
          stroke="#d8cef6"
          strokeWidth="1.2"
        />
      </svg>

      <div className="relative z-10 mx-auto max-w-[1200px]">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-8">
          {/* Left column: Control document copy & CTAs */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2.5">
              <span className="h-[1.5px] w-7 bg-[#c084fc]" aria-hidden="true" />
              <p className="text-[10.5px] font-bold uppercase tracking-[0.2em] text-[#a21caf]">
                {heroContent.eyebrow}
              </p>
            </div>

            <h1 className="mt-4 text-4xl font-extrabold leading-[1.04] tracking-[-0.03em] text-[#080d2c] sm:text-5xl lg:text-[54px]">
              {heroContent.headingLine1}
              <span className="block text-[#7c3aed]">
                {heroContent.headingLine2}
              </span>
            </h1>

            <p className="mt-4 max-w-[430px] text-[13.5px] leading-[1.6] text-[#475569] sm:text-[14px]">
              {heroContent.description}
            </p>

            {/* Metadata pills & approval status */}
            <div className="mt-5 flex flex-wrap items-center gap-2.5">
              {heroContent.metaChips.map((chip) => (
                <span
                  key={chip}
                  className="inline-flex items-center rounded-full border border-[#e2def5] bg-white/90 px-3.5 py-1 text-[11px] font-bold text-[#0c1438] shadow-[0_2px_8px_rgba(15,23,42,0.03)]"
                >
                  {chip}
                </span>
              ))}
            </div>

            <div className="mt-2.5">
              <span className="inline-flex items-center rounded-full border border-[#f5d08a] bg-[#fff7e6] px-4 py-1 text-[11px] font-semibold text-[#92400e]">
                {heroContent.approvalBanner}
              </span>
            </div>

            {/* Action buttons */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                href={heroContent.primaryCta.href}
                className="inline-flex h-11 items-center justify-center gap-1.5 rounded-lg bg-gradient-to-r from-[#ea157d] to-[#cf1286] px-5 text-[13px] font-semibold text-white shadow-[0_10px_26px_rgba(234,21,125,0.42)] transition hover:brightness-110"
              >
                <span>{heroContent.primaryCta.label}</span>
                <ChevronRight
                  className="h-3.5 w-3.5 stroke-[2.5]"
                  aria-hidden="true"
                />
              </Link>

              <Link
                href={heroContent.secondaryCta.href}
                className="inline-flex h-11 items-center justify-center rounded-lg border border-[#cfd6ea] bg-white/80 px-5 text-[13px] font-bold text-[#0c1438] transition hover:border-[#b7c1de] hover:bg-white"
              >
                {heroContent.secondaryCta.label}
              </Link>
            </div>
          </div>

          {/* Right column: Browser window + overlapping state machine card */}
          <div className="relative lg:col-span-7 lg:pr-10">
            {/* Browser window frame */}
            <div className="overflow-hidden rounded-2xl border border-[#e4e0f3] bg-white shadow-[0_20px_50px_rgba(15,23,42,0.1)]">
              {/* Browser top bar */}
              <div className="flex items-center gap-3 border-b border-[#eceaf4] bg-[#faf9fe] px-4 py-2.5">
                <div className="flex items-center gap-1.5" aria-hidden="true">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
                </div>

                <div className="flex-1 rounded-md border border-[#eae7f5] bg-[#f4f2fa] px-3 py-1 text-center text-[10.5px] font-medium text-[#64748b]">
                  {browserPreview.url}
                </div>
              </div>

              {/* Viewport canvas */}
              <div className="relative h-[300px] w-full overflow-hidden bg-[#1e2433] sm:h-[340px]">
                <Image
                  src={browserPreview.image}
                  alt={browserPreview.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover object-center"
                />

                {/* Status pill overlay */}
                <div className="absolute bottom-[68px] left-4 z-10 inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-[9.5px] font-extrabold uppercase tracking-[0.12em] text-[#0c1438] shadow-[0_6px_18px_rgba(15,23,42,0.18)]">
                  <span
                    className="h-2 w-2 rounded-full bg-[#f59e0b]"
                    aria-hidden="true"
                  />
                  <span>{browserPreview.statusBadge}</span>
                </div>

                {/* Bottom navigation registry bar */}
                <div className="absolute bottom-3 left-3 right-3 z-10 flex flex-wrap items-center justify-between gap-2 rounded-xl border border-white/70 bg-white/95 px-3 py-2 shadow-[0_8px_24px_rgba(15,23,42,0.16)] backdrop-blur-sm">
                  <div className="flex flex-wrap items-center gap-1.5">
                    {browserPreview.navPills.map((pill) => (
                      <span
                        key={pill.label}
                        className="inline-flex items-center gap-1.5 rounded-full border border-[#e6e9f2] bg-[#f8f9fc] px-2.5 py-1 text-[9.5px] font-bold text-[#0c1438]"
                      >
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${pill.dotClass}`}
                          aria-hidden="true"
                        />
                        <span>{pill.label}</span>
                      </span>
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1.5 rounded-lg bg-[#475569] px-2.5 py-1 text-[9.5px] font-bold text-white">
                    <Layers
                      className="h-3 w-3 stroke-[2.2]"
                      aria-hidden="true"
                    />
                    <span>{browserPreview.surfacePill}</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Overlapping dark State Machine card */}
            <aside
              aria-label="Navigation state machine"
              className="mt-4 rounded-2xl bg-[#070d2e] p-4 text-white shadow-[0_18px_40px_rgba(7,13,46,0.32)] sm:w-[192px] lg:absolute lg:-right-2 lg:top-10 lg:z-20 lg:mt-0"
            >
              <p className="text-[9px] font-extrabold uppercase tracking-[0.18em] text-[#94a3b8]">
                {stateMachine.heading}
              </p>

              <ol className="mt-3 space-y-2.5">
                {stateMachine.steps.map((item) => (
                  <li key={item.step} className="flex items-center gap-2.5">
                    <span
                      className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[9px] font-extrabold ${
                        item.complete
                          ? "bg-[#10b981] text-[#052e16]"
                          : "bg-white/15 text-white"
                      }`}
                    >
                      {item.step}
                    </span>
                    <span
                      className={`text-[10.5px] font-semibold leading-tight ${
                        item.complete ? "text-[#6ee7b7]" : "text-white/90"
                      }`}
                    >
                      {item.label}
                    </span>
                  </li>
                ))}
              </ol>

              <div className="mt-3.5 rounded-lg bg-[#f43f5e] px-3 py-2 text-center text-[9.5px] font-extrabold leading-snug text-white shadow-[0_6px_16px_rgba(244,63,94,0.4)]">
                {stateMachine.holdBadge}
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
