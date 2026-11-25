import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface ValueThemeCard {
  step: string;
  title: string;
  image: string;
  imageAlt: string;
  whatItMeans: string;
  howWeWantItToShow: string;
  ctaLabel: string;
  ctaHref: string;
  icon: React.ReactNode;
}

const valueThemes: ValueThemeCard[] = [
  {
    step: "01",
    title: "Innovation",
    image: "/Images/vals/2.png",
    imageAlt:
      "Overhead workspace with laptops, notebooks, and team collaboration",
    whatItMeans: "Use technology thoughtfully.",
    howWeWantItToShow: "Aim to make choices easier and services more useful.",
    ctaLabel: "See how technology fits in",
    ctaHref: "#technology",
    icon: (
      <svg
        viewBox="0 0 84 68"
        className="h-12 w-14"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id="themeBulbGrad"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#FF7A59" />
            <stop offset="100%" stopColor="#EC1C7A" />
          </linearGradient>
        </defs>
        <ellipse cx="42" cy="61" rx="22" ry="3.5" fill="#EDEAF6" />

        {/* Radiating accent strokes */}
        <path
          d="M42 7v5M21 15l3.5 3.5M63 15l-3.5 3.5M14 31h5M65 31h5"
          stroke="#FBBF24"
          strokeWidth="2.6"
          strokeLinecap="round"
        />

        {/* Lightbulb body */}
        <path
          d="M28 29a14 14 0 0 1 28 0c0 5.4-3.1 9.5-5.8 12.6-1.2 1.4-1.7 2.8-1.7 4.4H35.5c0-1.6-.5-3-1.7-4.4C31.1 38.5 28 34.4 28 29z"
          fill="url(#themeBulbGrad)"
        />

        {/* Checkmark inside bulb */}
        <path
          d="M37.5 29.5l3 3 6-6"
          stroke="#FFFFFF"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Bulb base */}
        <rect x="36" y="48" width="12" height="3" rx="1.5" fill="#94A3B8" />
        <rect
          x="37.5"
          y="52.5"
          width="9"
          height="2.8"
          rx="1.4"
          fill="#CBD5E1"
        />
      </svg>
    ),
  },
  {
    step: "02",
    title: "International connectivity",
    image: "/Images/vals/1.png",
    imageAlt:
      "View of Earth at night with illuminated cities along the curvature",
    whatItMeans: "Consider the ways customers connect across borders.",
    howWeWantItToShow:
      "Explain that availability, destinations and charges depend on the service.",
    ctaLabel: "International calling",
    ctaHref: "#international-calling",
    icon: (
      <svg
        viewBox="0 0 84 68"
        className="h-12 w-14"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id="themeGlobeGrad"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#6366F1" />
            <stop offset="100%" stopColor="#7C3AED" />
          </linearGradient>
        </defs>
        <ellipse cx="42" cy="61" rx="22" ry="3.5" fill="#EDEAF6" />

        {/* Arc above globe */}
        <path
          d="M21 26c6.5-10.5 35.5-10.5 42 0"
          stroke="#F59E0B"
          strokeWidth="2"
          strokeDasharray="3 3"
          strokeLinecap="round"
        />
        <circle cx="21" cy="26" r="3" fill="#F59E0B" />
        <circle cx="63" cy="26" r="3" fill="#F59E0B" />

        {/* Globe sphere */}
        <circle cx="42" cy="39" r="15.5" fill="url(#themeGlobeGrad)" />
        <ellipse
          cx="42"
          cy="39"
          rx="7"
          ry="15.5"
          stroke="#E0E7FF"
          strokeWidth="1.6"
        />
        <line
          x1="26.5"
          y1="39"
          x2="57.5"
          y2="39"
          stroke="#E0E7FF"
          strokeWidth="1.6"
        />
      </svg>
    ),
  },
  {
    step: "03",
    title: "Customer focus",
    image: "/Images/vals/4.png",
    imageAlt: "Service counter with payment terminal and customer interaction",
    whatItMeans: "Start with customer needs.",
    howWeWantItToShow:
      "Explain options clearly and make routes to help easy to find.",
    ctaLabel: "Find help",
    ctaHref: "#help-hero",
    icon: (
      <svg
        viewBox="0 0 84 68"
        className="h-12 w-14"
        fill="none"
        aria-hidden="true"
      >
        <ellipse cx="42" cy="61" rx="22" ry="3.5" fill="#EDEAF6" />

        {/* Small heart above */}
        <path
          d="M42 20c-1.5-2.2-5-2.2-5 0.6 0 2.1 5 5.4 5 5.4s5-3.3 5-5.4c0-2.8-3.5-2.8-5-0.6z"
          fill="#EC1C7A"
        />

        {/* Left magenta person */}
        <circle cx="33" cy="34" r="6.5" fill="#BE185D" />
        <path
          d="M22 54c1.2-6.8 5.6-10.5 11-10.5s9.8 3.7 11 10.5H22z"
          fill="#BE185D"
        />

        {/* Right warm amber person */}
        <circle cx="51" cy="36.5" r="5.5" fill="#FBBF24" />
        <path
          d="M42.5 54c1-5.6 4.4-8.5 8.5-8.5s7.5 2.9 8.5 8.5h-17z"
          fill="#FBBF24"
        />
      </svg>
    ),
  },
];

export default function ThreeThemesThatGuideUs() {
  return (
    <section
      id="values-in-practice"
      className="w-full bg-[#FAF9FC] px-4 py-14 text-[#110C3A] antialiased sm:px-6 lg:py-20"
    >
      <div className="mx-auto w-full max-w-[1300px]">
        {/* Section Header */}
        <div className="text-center">
          <p className="inline-flex items-center justify-center gap-2 text-[10.5px] font-extrabold uppercase tracking-[0.14em]">
            <span className="font-semibold italic text-[#E5A9C3]">02</span>
            <span className="text-[#A3367A]">Values in practice</span>
          </p>

          <h2 className="mt-2.5 text-[34px] font-black leading-[1.12] tracking-[-0.025em] text-[#0B092E] sm:text-[42px]">
            Three themes that{" "}
            <span className="font-extrabold italic text-[#9E2A76]">
              guide us
            </span>
          </h2>

          <p className="mt-2.5 text-[13px] text-[#5B5675]">
            From our published About page — what each means and how we want it
            to show up.
          </p>
        </div>

        {/* Three-Column Theme Cards */}
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {valueThemes.map((item) => (
            <article
              key={item.step}
              className="flex flex-col overflow-hidden rounded-[22px] border border-[#ECEAF2] bg-white shadow-[0_8px_24px_rgba(17,12,58,0.04)]"
            >
              {/* Top Image Banner with Step Number + Overlapping Floating Icon Tile */}
              <div className="relative h-[176px] w-full shrink-0 bg-[#18133E]">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover object-center"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#0D0A24]/55 via-[#0D0A24]/15 to-transparent"
                />

                {/* Italic Step Number ("01", "02", "03") */}
                <span
                  aria-hidden="true"
                  className="font-sans text-[32px] font-semibold italic leading-none tracking-tight text-white/95 drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]"
                  style={{
                    position: "absolute",
                    bottom: "18px",
                    left: "24px",
                  }}
                >
                  {item.step}
                </span>

                {/* Floating White Icon Tile Overlapping Image & Body */}
                <div
                  className="flex h-[76px] w-[96px] items-center justify-center rounded-2xl border border-[#F1EFF6] bg-white shadow-[0_10px_24px_rgba(17,12,58,0.12)]"
                  style={{
                    position: "absolute",
                    bottom: "-26px",
                    right: "20px",
                  }}
                >
                  {item.icon}
                </div>
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col justify-between px-6 pb-6 pt-7 sm:px-7 sm:pb-7">
                <div>
                  <h3 className="text-[20px] font-extrabold leading-snug tracking-[-0.015em] text-[#0B092E]">
                    {item.title}
                  </h3>

                  <div className="mt-4">
                    <p className="text-[9.5px] font-extrabold uppercase tracking-[0.12em] text-[#A3367A]">
                      What it means
                    </p>
                    <p className="mt-1.5 text-[12.5px] leading-[1.55] text-[#4B4763]">
                      {item.whatItMeans}
                    </p>
                  </div>

                  <div className="mt-4">
                    <p className="text-[9.5px] font-extrabold uppercase tracking-[0.12em] text-[#A3367A]">
                      How we want it to show
                    </p>
                    <p className="mt-1.5 text-[12.5px] leading-[1.55] text-[#4B4763]">
                      {item.howWeWantItToShow}
                    </p>
                  </div>
                </div>

                <div className="mt-6">
                  <Link
                    href={item.ctaHref}
                    className="inline-flex items-center gap-1 text-[12px] font-bold text-[#D91B78] transition-colors hover:text-[#b31261]"
                  >
                    <span>{item.ctaLabel}</span>
                    <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
