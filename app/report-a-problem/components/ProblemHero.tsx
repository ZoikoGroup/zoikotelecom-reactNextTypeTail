import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function ProblemReportHero() {
  return (
    <section
      id="report-problem-hero"
      className="relative w-full overflow-hidden bg-gradient-to-br from-[#FDE7EC] via-[#F7ECFC] to-[#E8F8F5] text-[#110C3A] antialiased"
    >
      {/* Decorative subtle background doodles on the light left panel */}
      <svg
        viewBox="0 0 800 560"
        className="pointer-events-none absolute inset-0 h-full w-full"
        fill="none"
        aria-hidden="true"
      >
        {/* Top question mark outline */}
        <path
          d="M225 56c0-7.5 5.5-12.5 13-12.5 7.5 0 13 4.8 13 11.5 0 6.2-4.5 9.5-8.5 12-3 1.9-4.5 3.6-4.5 7.5v2h-7.5v-2.5c0-5.8 2.4-8.8 6.8-11.5 3.3-2.1 5.2-3.9 5.2-7 0-2.9-2.2-5-5.5-5-3.4 0-5.5 2.1-5.5 5.5H225zm3.7 28.5h7.6v7.3h-7.6v-7.3z"
          stroke="#EC1C7A"
          strokeOpacity="0.22"
          strokeWidth="1.6"
        />
        {/* Small coral dot */}
        <circle cx="163" cy="96" r="3.5" fill="#FF7A59" fillOpacity="0.65" />
        {/* Soft teal chat bubble behind description */}
        <path
          d="M242 298h38a7 7 0 0 1 7 7v22a7 7 0 0 1-7 7h-21l-9 7v-7h-8a7 7 0 0 1-7-7v-22a7 7 0 0 1 7-7z"
          fill="#14B8A6"
          fillOpacity="0.24"
        />
        {/* Small mint dot near secondary CTA */}
        <circle cx="256" cy="436" r="4" fill="#2DD4BF" fillOpacity="0.7" />
        {/* Bottom chat bubble outline */}
        <path
          d="M192 438h36a6.5 6.5 0 0 1 6.5 6.5v20a6.5 6.5 0 0 1-6.5 6.5h-19l-8.5 6.5V471H192a6.5 6.5 0 0 1-6.5-6.5v-20a6.5 6.5 0 0 1 6.5-6.5z"
          stroke="#64748B"
          strokeOpacity="0.25"
          strokeWidth="1.5"
        />
        {/* Bottom-left faint question mark */}
        <path
          d="M12 478c0-6.5 4.8-11 11.2-11 6.5 0 11.2 4.2 11.2 10 0 5.4-3.9 8.2-7.4 10.4-2.6 1.6-3.9 3.1-3.9 6.5v1.7h-6.5v-2.2c0-5 2.1-7.6 5.9-10 2.9-1.8 4.5-3.4 4.5-6.1 0-2.5-1.9-4.3-4.8-4.3-3 0-4.8 1.8-4.8 4.8H12zm3.2 24.7h6.6v6.3h-6.6v-6.3z"
          stroke="#EC1C7A"
          strokeOpacity="0.25"
          strokeWidth="1.5"
        />
        {/* Sweeping wavy curves across bottom */}
        <path
          d="M0 518c130-35 240 28 380-4 105-24 190-6 275 26"
          stroke="#EC1C7A"
          strokeOpacity="0.16"
          strokeWidth="1.6"
        />
        <path
          d="M0 534c145-22 255 34 405-4 95-24 185-8 265 24"
          stroke="#14B8A6"
          strokeOpacity="0.22"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />
      </svg>

      {/* Main Two-Column Split Layout */}
      <div className="relative z-10 mx-auto grid min-h-[480px] w-full max-w-[1440px] grid-cols-1 lg:min-h-[540px] lg:grid-cols-[49%_51%]">
        {/* Left Column: Badge, Gradient Headline, Copy & CTAs */}
        <div className="flex flex-col justify-center px-6 py-12 sm:px-10 lg:py-14 lg:pl-[max(1.5rem,calc((100vw-1300px)/2))] lg:pr-12">
          <div>
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#F3DCE4] bg-white px-3.5 py-1.5 shadow-[0_2px_10px_rgba(17,12,58,0.04)]">
              <svg
                viewBox="0 0 24 24"
                className="h-3.5 w-3.5 text-[#EC1C7A]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.1"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 4v16" />
                <path d="M5 5h11.5l-2.2 3.8 2.2 3.7H5" />
              </svg>
              <span className="text-[9.5px] font-extrabold uppercase tracking-[0.12em] text-[#9A3412]">
                Report a problem
              </span>
            </div>

            {/* Hero Headline */}
            <h1 className="mt-5 max-w-[520px] text-[40px] font-black leading-[1.04] tracking-[-0.03em] text-[#110C3A] sm:text-[52px]">
              Tell us about{" "}
              <span className="bg-gradient-to-r from-[#5B6890] to-[#7C85A6] bg-clip-text text-transparent">
                a
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#FF6B5B] via-[#EC1C7A] to-[#0D9488] bg-clip-text text-transparent">
                service problem.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-4 max-w-[460px] text-[13.5px] font-medium leading-[1.6] text-[#5B5675]">
              Report a problem with your mobile, broadband, landline, business
              or connected-device service — and know what to include so our team
              can help quickly.
            </p>

            {/* CTA Buttons */}
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-[#EC1C7A] px-5 py-3 text-[12.5px] font-bold text-white shadow-[0_8px_22px_rgba(236,28,122,0.32)] transition-colors hover:bg-[#d6166d]"
              >
                <span>Contact support</span>
                <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>

              <Link
                href="#prepare-report"
                className="inline-flex items-center justify-center rounded-lg border border-[#3B3663] bg-white px-5 py-3 text-[12.5px] font-bold text-[#110C3A] shadow-[0_2px_8px_rgba(17,12,58,0.04)] transition-colors hover:bg-[#FAF9FD]"
              >
                Prepare your report
              </Link>
            </div>
          </div>
        </div>

        {/* Right Column: Curved Masked Photo + Floating Sample Card + Channel Pills + Emergency Box */}
        <div className="relative min-h-[420px] w-full lg:min-h-full">
          {/* SVG ClipPath for the wavy organic left edge */}
          <svg className="h-0 w-0" aria-hidden="true">
            <defs>
              <clipPath id="probHeroWaveClip" clipPathUnits="objectBoundingBox">
                <path d="M 0.085,0 C 0.14,0.14 0.015,0.28 0.045,0.45 C 0.075,0.62 -0.025,0.78 0.075,1 L 1,1 L 1,0 Z" />
              </clipPath>
            </defs>
          </svg>

          {/* Clipped Background Image */}
          <div
            style={{ clipPath: "url(#probHeroWaveClip)" }}
            className="relative h-full min-h-[420px] w-full bg-[#241628]"
          >
            <Image
              src="/Images/prob/hero.png"
              alt="Customer paying at a countertop terminal with support options overlaid"
              fill
              priority
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="object-cover object-center"
            />
            {/* Subtle dark scrim for contrast */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-r from-[#1D0F24]/45 via-[#181224]/25 to-[#120E1D]/35"
            />
          </div>

          {/* Overlay Content Container */}
          <div className="relative z-20 flex h-full flex-col justify-between p-5 sm:p-7 lg:absolute lg:inset-0 lg:p-8">
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-start lg:pl-10">
              {/* Floating "Your problem report" Example Card */}
              <div className="w-full max-w-[295px] rounded-2xl bg-white p-5 shadow-[0_18px_40px_rgba(10,6,24,0.34)]">
                <div className="flex items-center justify-between gap-2">
                  <h2 className="text-[12.5px] font-extrabold text-[#110C3A]">
                    Your problem report
                  </h2>
                  <span className="rounded bg-[#EEF0FA] px-2 py-0.5 text-[8px] font-extrabold uppercase tracking-[0.08em] text-[#5B5675]">
                    Example
                  </span>
                </div>

                <dl className="mt-3.5 divide-y divide-[#F3F1F7] text-[10px]">
                  <div className="flex items-center justify-between py-2">
                    <dt className="font-bold uppercase tracking-[0.06em] text-[#7A7691]">
                      Service
                    </dt>
                    <dd className="rounded-md bg-[#FDECE6] px-2 py-0.5 font-bold text-[#9A3412]">
                      Broadband
                    </dd>
                  </div>

                  <div className="flex items-center justify-between gap-2 py-2">
                    <dt className="font-bold uppercase tracking-[0.06em] text-[#7A7691]">
                      What&apos;s wrong
                    </dt>
                    <dd className="text-right font-extrabold text-[#110C3A]">
                      No internet on any device
                    </dd>
                  </div>

                  <div className="flex items-center justify-between py-2">
                    <dt className="font-bold uppercase tracking-[0.06em] text-[#7A7691]">
                      Started
                    </dt>
                    <dd className="font-extrabold text-[#110C3A]">
                      This morning
                    </dd>
                  </div>

                  <div className="flex items-center justify-between py-2">
                    <dt className="font-bold uppercase tracking-[0.06em] text-[#7A7691]">
                      Details
                    </dt>
                    <dd className="flex flex-col items-end gap-1">
                      <span className="h-1.5 w-24 rounded-full bg-[#ECEAF4]" />
                      <span className="h-1.5 w-16 rounded-full bg-[#F3F1F8]" />
                    </dd>
                  </div>
                </dl>

                {/* Security Warning Pill Inside Card */}
                <div className="mt-2.5 flex items-center gap-1.5 rounded-lg bg-[#FFF4F4] px-2.5 py-2 text-[9px] font-bold text-[#B42318]">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-3 w-3 shrink-0 text-[#D92D20]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="5" y="11" width="14" height="10" rx="2" />
                    <path d="M8 11V7a4 4 0 0 1 8 0v4" />
                  </svg>
                  <span>No passwords, codes or card numbers</span>
                </div>
              </div>

              {/* Right Channel Pills Stack */}
              <div className="flex flex-row flex-wrap gap-2 sm:flex-col">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2.5 rounded-xl bg-white/95 px-3.5 py-2 text-[10.5px] font-bold text-[#110C3A] shadow-[0_8px_20px_rgba(10,6,24,0.22)] backdrop-blur transition-colors hover:bg-white"
                >
                  <span className="flex h-5 w-5 items-center justify-center rounded-md bg-[#F43F5E] text-white">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-3 w-3"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <rect x="7" y="3" width="10" height="18" rx="2" />
                      <path d="M11 17h2" />
                    </svg>
                  </span>
                  <span>Phone</span>
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2.5 rounded-xl bg-white/95 px-3.5 py-2 text-[10.5px] font-bold text-[#110C3A] shadow-[0_8px_20px_rgba(10,6,24,0.22)] backdrop-blur transition-colors hover:bg-white"
                >
                  <span className="flex h-5 w-5 items-center justify-center rounded-md bg-[#0D9488] text-white">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-3 w-3"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <rect x="3" y="5" width="18" height="14" rx="2" />
                      <path d="M3 7l9 6 9-6" />
                    </svg>
                  </span>
                  <span>Contact form</span>
                </Link>

                <Link
                  href="/contact#accessibility"
                  className="inline-flex items-center gap-2.5 rounded-xl bg-white/95 px-3.5 py-2 text-[10.5px] font-bold text-[#110C3A] shadow-[0_8px_20px_rgba(10,6,24,0.22)] backdrop-blur transition-colors hover:bg-white"
                >
                  <span className="flex h-5 w-5 items-center justify-center rounded-md bg-[#7C3AED] text-white">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-3 w-3"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="5.5" r="1.5" />
                      <path d="M6 9h12M12 9v5.5M9 20l3-5.5L15 20" />
                    </svg>
                  </span>
                  <span>Accessible options</span>
                </Link>
              </div>
            </div>

            {/* Bottom-Right Emergency Alert Card */}
            <div className="mt-4 flex justify-end sm:mt-0">
              <div className="max-w-[275px] rounded-xl bg-[#5C0D12]/95 px-4 py-3 text-white shadow-[0_12px_28px_rgba(10,6,24,0.4)] backdrop-blur">
                <p className="text-[8.5px] font-extrabold uppercase tracking-[0.12em] text-[#FDA4AF]">
                  Emergency?
                </p>
                <p className="mt-1 text-[10.5px] font-bold leading-[1.45] text-white">
                  Call 999 or 112 — don&apos;t wait for a reply from us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
