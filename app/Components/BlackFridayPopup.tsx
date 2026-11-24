"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

interface BlackFridayPopupProps {
  showOnEveryReload?: boolean;
}

const FEATURES = [
  {
    label: ["Multi-Line", "Plans"],
    w: "w-[12.9cqw]",
    pad: "pl-[1.8cqw]",
    icon: (
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
    ),
  },
  {
    label: ["For Businesses", "of All Sizes"],
    w: "w-[17.2cqw]",
    pad: "pl-[2.2cqw]",
    icon: (
      <>
        <circle cx="12" cy="6" r="2.6" />
        <circle cx="5" cy="10" r="2.2" />
        <circle cx="19" cy="10" r="2.2" />
        <path d="M7.5 20v-2.5a4.5 4.5 0 0 1 9 0V20M1.5 19v-1.5A3.5 3.5 0 0 1 5 14M22.5 19v-1.5A3.5 3.5 0 0 0 19 14" />
      </>
    ),
  },
  {
    label: ["Flexible", "Packages"],
    w: "w-[14.2cqw]",
    pad: "pl-[2.2cqw]",
    icon: (
      <>
        <path d="M12 2l9 4.5-9 4.5-9-4.5L12 2z" />
        <path d="M3 11.5l9 4.5 9-4.5M3 16.5l9 4.5 9-4.5" />
      </>
    ),
  },
  {
    label: ["UK-Based", "Business Support"],
    w: "w-[18.2cqw]",
    pad: "pl-[2.1cqw]",
    icon: (
      <>
        <path d="M3 14v-2a9 9 0 0 1 18 0v2" />
        <path d="M21 15a2 2 0 0 1-2 2h-1v-5h1a2 2 0 0 1 2 2v1zM3 15a2 2 0 0 0 2 2h1v-5H5a2 2 0 0 0-2 2v1z" />
        <path d="M18 17v1a3 3 0 0 1-3 3h-3" />
      </>
    ),
  },
] as const;

export default function BlackFridayPopup({
  showOnEveryReload = true,
}: BlackFridayPopupProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (showOnEveryReload) {
      setIsOpen(true);
    } else {
      try {
        const hasSeen = sessionStorage.getItem("blackFridayPopupSeen");
        if (!hasSeen) {
          setIsOpen(true);
          sessionStorage.setItem("blackFridayPopupSeen", "true");
        }
      } catch {
        setIsOpen(true);
      }
    }
  }, [showOnEveryReload]);

  // Esc to close + lock page scroll while the popup is open
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen]);

  if (!isOpen) return null;

  /*
    All positions are measured from the 1672 x 941 design.
    1cqw = 1% of poster width = 16.72px of the design.
    The OUTER div is the size container; the INNER div uses cqw.

    SWOOSH: the outer (content-facing) edge of the swoosh now runs
      (850,0) -> (690,330) -> (545,858)
    so it stays ~37px (design px) clear of the 20% OFF card (left edge x=727).
    The clip-path and the rim use the same curve so they always line up.

    NOTE: every font-size uses `text-[length:...]` so Tailwind never mistakes
    a cqw value for a text colour (this happens on Tailwind < 3.4 and makes
    the text fall back to the default size).
  */
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Black Friday Business Deals 2026"
      onClick={() => setIsOpen(false)}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-3 animate-in fade-in duration-300 sm:p-4"
    >
      {/* Photo clip-path (design curve, normalised to 0..1) */}
      <svg width="0" height="0" className="absolute" aria-hidden="true">
        <defs>
          <clipPath id="bf-photo-clip" clipPathUnits="objectBoundingBox">
            <path d="M0,0 L0.5084,0 C0.4725,0.0956 0.4396,0.2338 0.4127,0.3507 C0.3917,0.4463 0.3708,0.6589 0.3260,0.9118 L0.3200,1 L0,1 Z" />
          </clipPath>
        </defs>
      </svg>

      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[min(100%,1100px,calc((100dvh_-_2rem)*1.777))] [container-type:inline-size]"
      >
        <div
          className={`${inter.className} relative aspect-[1672/941] w-full overflow-hidden rounded-[3cqw] shadow-[0_30px_80px_rgba(10,20,60,0.45)]`}
          style={{
            background:
              "linear-gradient(120deg,#FFFFFF 0%,#F6F4FF 45%,#E7EDFF 100%)",
          }}
        >
          {/* ===== Bottom-right blue swoosh ===== */}
          <svg
            viewBox="0 0 1672 941"
            preserveAspectRatio="none"
            className="absolute inset-0 z-0 h-full w-full"
            aria-hidden="true"
          >
            <defs>
              <linearGradient
                id="bf-corner"
                gradientUnits="userSpaceOnUse"
                x1="1330"
                y1="858"
                x2="1672"
                y2="520"
              >
                <stop offset="0" stopColor="#7FA8FF" />
                <stop offset="0.5" stopColor="#2F6BFF" />
                <stop offset="1" stopColor="#0B3FE0" />
              </linearGradient>
            </defs>
            <path
              d="M1672,520 C1655,690 1540,810 1330,858 L1672,858 Z"
              fill="url(#bf-corner)"
            />
            <path
              d="M1672,610 C1640,730 1540,812 1400,846"
              fill="none"
              stroke="#fff"
              strokeOpacity="0.55"
              strokeWidth="3"
            />
          </svg>

          {/* ===== Man photo, clipped to the design curve ===== */}
          <div
            className="absolute inset-0 z-10"
            style={{ clipPath: "url(#bf-photo-clip)" }}
          >
            <div className="absolute inset-y-0 -left-[3cqw] w-[56%]">
              <Image
                src="/Images/pop/man.png"
                alt="Business professional smiling at his phone beside a laptop"
                fill
                priority
                sizes="(min-width: 1100px) 650px, 59vw"
                className="object-cover object-[50%_center]"
              />
            </div>
          </div>

          {/* ===== Swoosh rim: thin, magenta -> violet -> blue ===== */}
          <svg
            viewBox="0 0 1672 941"
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-0 z-[11] h-full w-full"
            aria-hidden="true"
          >
            <defs>
              <linearGradient
                id="bf-rim"
                gradientUnits="userSpaceOnUse"
                x1="0"
                y1="0"
                x2="0"
                y2="941"
              >
                <stop offset="0" stopColor="#E6007E" />
                <stop offset="0.45" stopColor="#7B2FE0" />
                <stop offset="1" stopColor="#1E5BFF" />
              </linearGradient>
              <filter id="bf-glow" x="-20%" y="-5%" width="140%" height="110%">
                <feGaussianBlur stdDeviation="7" />
              </filter>
            </defs>
            <path
              d="M826,0 L850,0 C790,90 735,220 690,330 C655,420 620,620 545,858 L533,858 C608,620 643,420 678,330 C722,220 770,90 826,0 Z"
              fill="url(#bf-rim)"
              opacity="0.35"
              filter="url(#bf-glow)"
            />
            <path
              d="M826,0 L850,0 C790,90 735,220 690,330 C655,420 620,620 545,858 L533,858 C608,620 643,420 678,330 C722,220 770,90 826,0 Z"
              fill="url(#bf-rim)"
            />
          </svg>

          {/* ===== Logo ===== */}
          <div className="absolute left-[59.1cqw] top-[0.5cqw] z-20 h-[7.7cqw] w-[24cqw]">
            <Image
              src="/image/logo.png"
              alt="Zoiko Telecom"
              fill
              priority
              sizes="264px"
              className="object-contain object-center"
            />
          </div>

          {/* ===== BLACK FRIDAY ===== */}
          <h2 className="absolute left-[50cqw] top-[8.4cqw] z-20 flex h-[5cqw] w-[44.6cqw] items-center justify-center whitespace-nowrap text-[length:6.1cqw] font-black italic leading-none tracking-[-0.03em] text-[#0B1440]">
            BLACK FRIDAY
          </h2>

          {/* ===== Ribbon: BUSINESS DEALS | 2026 ===== */}
          <div className="absolute left-[47.1cqw] top-[14.35cqw] z-20 flex h-[4.2cqw] w-[37.8cqw] items-center justify-center whitespace-nowrap bg-gradient-to-r from-[#D0107F] via-[#8A1F9E] to-[#2A4BD8] pl-[1.5cqw] text-[length:3.3cqw] font-extrabold italic leading-none tracking-[-0.02em] text-white [clip-path:polygon(5%_0,100%_0,96%_100%,0_100%)]">
            BUSINESS DEALS
          </div>
          <div className="absolute left-[84cqw] top-[14.35cqw] z-20 flex h-[4.2cqw] w-[10.8cqw] items-center justify-center bg-[#0B1440] pl-[0.6cqw] text-[length:2.9cqw] font-extrabold italic leading-none text-white [clip-path:polygon(15%_0,100%_0,86%_100%,0_100%)]">
            2026
          </div>

          {/* ===== 20% OFF card ===== */}
          <div className="absolute left-[43.5cqw] top-[20cqw] z-20 h-[11.2cqw] w-[52.2cqw] overflow-hidden rounded-[2.7cqw] bg-gradient-to-r from-[#BE137F] via-[#7B1FA8] to-[#2C3FDA] shadow-[0_1cqw_2.4cqw_rgba(120,30,170,0.28)]">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1A0B5A]/35" />
            <div className="absolute inset-x-0 top-[0.4cqw] flex h-[7.4cqw] items-center justify-center whitespace-nowrap text-[length:7.4cqw] font-black italic leading-none tracking-[-0.04em] text-white">
              <span>20</span>
              <span className="text-[length:6cqw]">%</span>
              <span className="ml-[1.2cqw]">OFF</span>
            </div>
            <p className="absolute inset-x-0 top-[7.4cqw] flex h-[3.4cqw] items-center justify-center whitespace-nowrap text-[length:1.9cqw] font-bold italic leading-none tracking-[-0.01em] text-white">
              Selected Business Digital Phone Line Packages
            </p>
          </div>

          {/* ===== For the first six months (centre line at y=556 in design) ===== */}
          <div className="absolute left-[46cqw] top-[31.6cqw] z-20 flex h-[3.4cqw] w-[44.3cqw] items-center justify-between">
            <span className="h-[0.2cqw] w-[7.8cqw] bg-gradient-to-r from-[#A0156F] to-[#7A1FA8]" />
            <p className="whitespace-nowrap text-[length:2.1cqw] font-semibold italic leading-none text-[#B0138F]">
              For the first six months
            </p>
            <span className="h-[0.2cqw] w-[7.5cqw] bg-gradient-to-r from-[#7A1FA8] to-[#A0156F]" />
          </div>

          {/* ===== Date ===== */}
          <div className="absolute left-[50.2cqw] top-[35.2cqw] z-20 flex h-[3cqw] items-center text-[#0B1440]">
            <svg
              viewBox="0 0 24 24"
              className="h-[3.3cqw] w-[3.3cqw] shrink-0"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="3" y="5" width="18" height="16" rx="2.5" />
              <path d="M3 10h18M8 3v4M16 3v4" />
              <path
                d="M7.5 14h1.5M11.25 14h1.5M15 14h1.5M7.5 17.5h1.5M11.25 17.5h1.5M15 17.5h1.5"
                strokeWidth="2.2"
              />
            </svg>
            <span
              aria-hidden="true"
              className="mx-[1.7cqw] h-[2.7cqw] w-[0.15cqw] bg-[#0B1440]"
            />
            <span className="whitespace-nowrap text-[length:2.1cqw] font-extrabold leading-none">
              20
              <sup className="relative -top-[0.55em] align-baseline text-[length:0.5em] leading-none">
                th
              </sup>{" "}
              – 30
              <sup className="relative -top-[0.55em] align-baseline text-[length:0.5em] leading-none">
                th
              </sup>{" "}
              November 2026
            </span>
          </div>

          {/* ===== CTA ===== */}
          <Link
            href="/black-friday"
            onClick={() => setIsOpen(false)}
            className="absolute left-[46.8cqw] top-[39.8cqw] z-20 inline-flex h-[4.9cqw] w-[40cqw] items-center justify-center gap-[1.4cqw] rounded-full bg-gradient-to-r from-[#C4147F] via-[#8B1FA0] to-[#2B3FD6] text-[length:2.4cqw] font-extrabold leading-none tracking-[0.01em] text-white shadow-[0_0.8cqw_1.8cqw_rgba(120,30,170,0.35)] transition-transform hover:-translate-y-0.5"
          >
            GET THIS OFFER
            <svg
              viewBox="0 0 24 24"
              className="h-[3cqw] w-[3cqw]"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M2 12h19M15 6l6 6-6 6" />
            </svg>
          </Link>

          {/* ===== Feature strip (full pill) ===== */}
          <ul className="absolute left-[35.6cqw] top-[45.3cqw] z-20 flex h-[4.9cqw] w-[62.5cqw] items-stretch overflow-hidden rounded-full border border-white/80 bg-white/90 shadow-[0_0.5cqw_1.6cqw_rgba(40,40,120,0.12)]">
            {FEATURES.map((f, i) => (
              <li
                key={f.label[0]}
                className={`relative flex ${f.w} ${f.pad} shrink-0 items-center gap-[0.9cqw] ${
                  i !== 0
                    ? "before:absolute before:left-0 before:top-1/2 before:h-[2.8cqw] before:w-px before:-translate-y-1/2 before:bg-[#0B1440]/35"
                    : ""
                }`}
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-[3cqw] w-[3cqw] shrink-0 text-[#8A1F9E]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  {f.icon}
                </svg>
                <span className="whitespace-nowrap text-[length:1.2cqw] font-bold leading-[1.22] text-[#0B1440]">
                  {f.label[0]}
                  <br />
                  {f.label[1]}
                </span>
              </li>
            ))}
          </ul>

          {/* ===== Footer bar ===== */}
          <div className="absolute inset-x-0 bottom-0 z-30 flex h-[5cqw] items-center justify-center gap-[1.2cqw] bg-gradient-to-r from-[#0B1A5C] via-[#0B1B66] to-[#0B1440]">
            <svg
              viewBox="0 0 24 24"
              className="h-[2.4cqw] w-[2.4cqw] shrink-0 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 11v6M12 7.5v.01" strokeWidth="2" />
            </svg>
            <p className="whitespace-nowrap text-center text-[length:1.15cqw] leading-[1.4] text-white">
              Eligible UK businesses only. 20% discount applies to selected
              Business Digital Phone Line packages for the first six months,
              <br />
              then returns to the standard monthly price. Terms and conditions
              apply.
            </p>
          </div>

          {/* ===== Close ===== */}
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close popup"
            className="absolute right-[1.4cqw] top-[1.4cqw] z-40 flex h-[3cqw] min-h-[24px] w-[3cqw] min-w-[24px] items-center justify-center rounded-full bg-white text-[#0B1440] shadow-md transition-transform hover:scale-110"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-[45%] w-[45%]"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M5 5l14 14M19 5L5 19" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
