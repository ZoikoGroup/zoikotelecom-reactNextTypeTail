import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function OurStoryHero() {
  return (
    <section
      id="our-story-hero"
      className="relative w-full overflow-hidden bg-[#0B0418] text-white antialiased"
    >
      {/* Main Split Grid */}
      <div className="relative mx-auto grid min-h-[480px] w-full grid-cols-1 lg:min-h-[520px] lg:grid-cols-[45%_55%]">
        {/* Circular Stamp Straddling the Left/Right Seam */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-6 left-1/2 z-30 flex h-[96px] w-[96px] -translate-x-1/2 items-center justify-center rounded-full bg-[#F5A8D0] p-1 text-[#160A28] shadow-[0_12px_28px_rgba(0,0,0,0.45)] sm:h-[104px] sm:w-[104px] lg:top-7 lg:left-[45%]"
        >
          <div className="relative flex h-full w-full items-center justify-center">
            <svg
              viewBox="0 0 104 104"
              className="h-full w-full"
              aria-hidden="true"
            >
              <defs>
                <path
                  id="zoikoStampCircle"
                  d="M 52,52 m -39,0 a 39,39 0 1,1 78,0 a 39,39 0 1,1 -78,0"
                />
              </defs>
              <text
                fill="#160A28"
                fontSize="6.6"
                fontWeight="800"
                letterSpacing="1.85"
              >
                <textPath
                  href="#zoikoStampCircle"
                  startOffset="50%"
                  textAnchor="middle"
                >
                  ABOUT ZOIKO • OUR STORY •
                </textPath>
              </text>
            </svg>

            <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center px-3 text-center leading-none">
              <span className="text-[10.5px] font-black tracking-tight text-[#160A28]">
                UK
              </span>
              <span className="mt-0.5 text-[7px] font-bold italic text-[#2A1447]">
                connectivity
              </span>
            </div>
          </div>
        </div>

        {/* Left Panel: Deep Plum-Indigo Editorial Column */}
        <div className="relative flex flex-col justify-center overflow-hidden bg-gradient-to-br from-[#3A092B] via-[#220733] to-[#120424] px-6 py-14 sm:px-10 lg:py-16 lg:pl-[max(2rem,calc((100vw-1320px)/2))] lg:pr-14">
          {/* Subtle Right-Edge Darkening Band Before Seam */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-r from-transparent to-[#0B0418]/55"
          />

          {/* Subtle Ambient Purple Glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 top-14 h-80 w-80 rounded-full bg-[#5B2788]/30 blur-2xl"
          />

          {/* Subtle Curved Wave Lines at Bottom */}
          <svg
            viewBox="0 0 680 120"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-20 w-full"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M0 96c145-34 270 24 435-18 85-21 165-10 245 16"
              stroke="#F472B6"
              strokeOpacity="0.24"
              strokeWidth="1.25"
            />
            <path
              d="M0 108c160-22 285 20 450-20 80-19 150-6 230 15"
              stroke="#C084FC"
              strokeOpacity="0.22"
              strokeWidth="1.1"
              strokeDasharray="3 3"
            />
          </svg>

          <div className="relative z-10 max-w-[490px]">
            {/* Eyebrow with Leading Rule */}
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="h-[1.5px] w-6 bg-[#D96BA4]" />
              <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#E5A9C9]">
                About Zoiko
              </span>
            </div>

            {/* Hero Headline */}
            <h1 className="mt-4 text-[44px] font-black leading-[1.03] tracking-[-0.03em] text-white sm:text-[54px]">
              Our{" "}
              <span className="font-extrabold italic text-[#F5A8D0]">
                story
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-4 max-w-[430px] text-[13.5px] leading-[1.6] text-white/80">
              Zoiko Telecom brings together connectivity and communications
              services for individuals and organisations in the UK. Explore our
              services and find the right team to speak with.
            </p>

            {/* Primary & Secondary Buttons */}
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 rounded-lg bg-[#E41976] px-5 py-3 text-[12px] font-bold text-white shadow-[0_10px_26px_rgba(228,25,118,0.48)] transition-colors hover:bg-[#cc1468]"
              >
                <span>Contact us</span>
                <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-[12px] font-bold text-[#110C3A] shadow-[0_4px_14px_rgba(0,0,0,0.25)] transition-colors hover:bg-[#F8F6FC]"
              >
                Explore services
              </Link>
            </div>
          </div>
        </div>

        {/* Right Panel: Collage of 3 Story Images + Frosted Glass Card */}
        <div className="relative grid min-h-[440px] grid-cols-1 gap-1 bg-[#090414] sm:grid-cols-[1.2fr_0.8fr] lg:min-h-full">
          {/* Left Tall Photo: Connected cities */}
          <div className="relative min-h-[280px] w-full overflow-hidden bg-[#19152B]">
            <Image
              src="/Images/story/1.png"
              alt="City street lined with tall buildings and taxis in a connected urban centre"
              fill
              priority
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 45vw, 100vw"
              className="object-cover object-center"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-[#090514]/70 via-transparent to-transparent"
            />
            <span className="pointer-events-none absolute bottom-3 left-4 font-serif text-[12px] italic text-white/90">
              Connected cities
            </span>
          </div>

          {/* Right Stacked Column: People (top) + Business (bottom) */}
          <div className="relative grid grid-rows-2 gap-1">
            {/* Top-Right Photo: People */}
            <div className="relative min-h-[180px] w-full overflow-hidden bg-[#1E192D]">
              <Image
                src="/Images/story/2.png"
                alt="Team member collaborating at a wooden table with a laptop"
                fill
                sizes="(min-width: 1024px) 22vw, (min-width: 640px) 35vw, 100vw"
                className="object-cover object-top"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#090514]/60 via-transparent to-transparent"
              />
              <span className="pointer-events-none absolute bottom-2.5 left-3.5 font-serif text-[12px] italic text-white/90">
                People
              </span>
            </div>

            {/* Bottom-Right Photo: Business */}
            <div className="relative min-h-[190px] w-full overflow-hidden bg-[#171622]">
              <Image
                src="/Images/story/3.png"
                alt="Modern business workspace corridor with dark architectural walls"
                fill
                sizes="(min-width: 1024px) 22vw, (min-width: 640px) 35vw, 100vw"
                className="object-cover object-center"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#090514]/75 via-[#090514]/25 to-transparent"
              />
              <span className="pointer-events-none absolute bottom-2.5 left-3.5 font-serif text-[12px] italic text-white/90">
                Business
              </span>
            </div>

            {/* Frosted Glass Quote Card Overlapping Seam Between People & Business */}
            <div className="pointer-events-none relative z-20 mx-3.5 mb-3.5 -mt-12 rounded-2xl border border-white/20 bg-[#2C2736]/75 p-4 text-white shadow-[0_16px_36px_rgba(0,0,0,0.45)] backdrop-blur-md sm:mx-4 sm:mb-4 sm:-mt-14 sm:p-5">
              <span
                aria-hidden="true"
                className="block font-serif text-[17px] font-bold leading-none text-[#F472B6]"
              >
                “
              </span>
              <p className="mt-1.5 font-serif text-[13px] italic leading-[1.35] text-white/95 sm:text-[14.5px]">
                Connectivity for individuals and organisations across the UK.
              </p>
              <p className="mt-3 text-[8px] font-bold uppercase tracking-[0.16em] text-white/75">
                What we do
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
