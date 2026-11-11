"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface BlackFridayPopupProps {
  showOnEveryReload?: boolean;
}

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

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Black Friday Sale 2026"
      onClick={() => setIsOpen(false)}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 animate-in fade-in duration-300"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-[920px] overflow-hidden rounded-[28px] border-2 border-white/90 bg-white shadow-[0_30px_80px_rgba(10,20,60,0.45)] md:aspect-[1.72]"
      >
        {/* Full-modal design background */}
        <Image
          src="/Images/pop/design.png"
          alt=""
          fill
          priority
          sizes="(min-width: 768px) 920px, 100vw"
          className="object-cover object-center"
        />

        {/* Close button */}
        <button
          onClick={() => setIsOpen(false)}
          aria-label="Close popup"
          className="absolute right-4 top-4 z-40 flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 shadow-md transition-transform hover:scale-110"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="3.2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <path d="M5 5l14 14M19 5L5 19" />
          </svg>
        </button>

        {/* Man photo with curved right edge following the swoosh */}
        <div
          className="absolute bottom-0 left-0 top-0 z-10 hidden w-[60%] md:block"
          style={{
            clipPath:
              "polygon(0 0, 96% 0, 91% 12%, 82% 35%, 78% 55%, 74% 78%, 70% 100%, 0 100%)",
          }}
        >
          <Image
            src="/Images/pop/man.png"
            alt="Business professional smiling at his phone beside a laptop"
            fill
            priority
            sizes="(min-width: 768px) 550px, 0px"
            className="object-cover object-[45%_center]"
          />
        </div>

        {/* Content (sits in the white area of the design) */}
        <div className="relative z-20 flex h-full flex-col items-center justify-center px-6 py-8 text-center md:ml-auto md:w-[50%] md:px-5 md:py-5">
          {/* Logo */}
          <div className="relative h-[64px] w-[200px]">
            <Image
              src="/image/logo.png"
              alt="Zoiko Telecom"
              fill
              priority
              sizes="200px"
              className="object-contain object-center"
            />
          </div>

          {/* Headline */}
          <h2 className="mt-2 text-[34px] font-black italic leading-[0.98] tracking-[-0.03em] text-[#0B1440] lg:text-[42px]">
            BLACK FRIDAY
            <span className="block bg-gradient-to-r from-[#E6007E] via-[#7B2FF7] to-[#0A8CFF] bg-clip-text text-transparent">
              SALE 2026
            </span>
          </h2>

          {/* 20% OFF pill */}
          <div className="mt-3 flex w-full max-w-[400px] items-center justify-center rounded-[24px] bg-gradient-to-r from-[#E6007E] via-[#8A2BE2] to-[#0A8CFF] px-5 py-0.5 [clip-path:polygon(0%_0,100%_0,100%_100%,0_100%)]">
            <span className="text-[58px] font-black italic leading-none tracking-[-0.04em] text-white lg:text-[64px]">
              20
              <span className="text-[34px] lg:text-[40px]">%</span>
              <span className="ml-2 text-[34px] lg:text-[40px]">OFF</span>
            </span>
          </div>

          {/* Description */}
          <p className="mt-3 max-w-[340px] text-[18px] font-extrabold italic leading-[1.12] text-[#0B1440]">
            Selected business digital phone line packages
          </p>

          {/* For the first six months */}
          <div className="mt-1.5 flex w-full items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#E6007E] lg:w-12" />
            <p className="text-[17px] font-extrabold italic text-[#E6007E]">
              For the first six months
            </p>
            <span className="h-px w-8 bg-[#4A3AFF] lg:w-12" />
          </div>

          {/* Date */}
          <div className="mt-2 flex items-center justify-center gap-2.5 text-[#0B1440]">
            <svg
              viewBox="0 0 24 24"
              className="h-7 w-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
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
            <span className="text-[20px] font-extrabold tracking-tight">
              27–30 NOVEMBER 2026
            </span>
          </div>

          {/* CTA */}
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="mt-4 inline-flex w-full max-w-[380px] items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#E6007E] via-[#B0138F] to-[#0A8CFF] px-6 py-3 text-[15px] font-bold text-white shadow-[0_10px_24px_rgba(230,0,126,0.35)] transition-all hover:-translate-y-0.5"
          >
            REQUEST A BUSINESS QUOTE
            <span aria-hidden="true">→</span>
          </Link>

          {/* Disclaimer */}
          <p className="mt-2.5 text-[10px] italic leading-snug text-[#0B1440]">
            Eligible UK businesses and new service agreements only.
            <br />
            Offer subject to approval. Broadband and eSIM plans are not included
            in this discount.
          </p>
        </div>
      </div>
    </div>
  );
}
