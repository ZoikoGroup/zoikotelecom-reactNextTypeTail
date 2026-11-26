import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function MilestonesWhenVerified() {
  return (
    <section
      id="our-journey"
      className="w-full bg-[#FDFCFF] px-4 py-14 text-[#110C3A] antialiased sm:px-6 lg:py-20"
    >
      <div className="mx-auto w-full max-w-[1300px]">
        {/* Section Eyebrow & Heading */}
        <div>
          <p className="flex items-center gap-2 text-[10.5px] font-extrabold uppercase tracking-[0.14em]">
            <span className="font-semibold italic text-[#E5A9C3]">03</span>
            <span className="text-[#A3367A]">Our journey</span>
          </p>

          <h2 className="mt-2.5 text-[34px] font-black leading-[1.12] tracking-[-0.025em] text-[#0B092E] sm:text-[42px]">
            Milestones,{" "}
            <span className="font-extrabold text-[#9E2A76]">
              when they&apos;re verified
            </span>
          </h2>
        </div>

        {/* Soft Lilac-Tinted Milestone Banner Card */}
        <div className="mt-8 flex flex-col items-start justify-between gap-5 rounded-[20px] border border-[#F3EEF8] bg-gradient-to-r from-[#FBF9FE] via-[#FAF7FE] to-[#F7F3FC] px-6 py-5 shadow-[0_6px_22px_rgba(17,12,58,0.03)] sm:flex-row sm:items-center sm:px-7">
          <div className="flex items-center gap-4">
            {/* Soft Purple Compass Icon Tile */}
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F0EBFB] text-[#7C3AED]">
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="8.5" />
                <polygon
                  points="15.5 8.5 13.4 13.4 8.5 15.5 10.6 10.6 15.5 8.5"
                  fill="currentColor"
                  fillOpacity="0.18"
                />
              </svg>
            </div>

            <div>
              <h3 className="text-[15px] font-extrabold leading-snug text-[#0B092E] sm:text-[16px]">
                We&apos;ll share our journey with you here.
              </h3>
              <p className="mt-0.5 text-[11.5px] leading-[1.5] text-[#6E6985]">
                Dates and milestones will be added only once they&apos;re
                confirmed and documented — we won&apos;t invent a history.
              </p>
            </div>
          </div>

          <Link
            href="#purpose-and-vision"
            className="inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-[#E41976] px-5 py-3 text-[12px] font-bold text-white shadow-[0_8px_20px_rgba(228,25,118,0.28)] transition-colors hover:bg-[#cc1468]"
          >
            <span>Our purpose &amp; values</span>
            <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
