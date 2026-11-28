import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { SVGProps } from "react";
import { Inter, Poppins } from "next/font/google";

export const metadata: Metadata = {
  title: "Home phone | Zoiko Telecom",
  description:
    "Learn what a home phone service may need and get advice before switching.",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-hp-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-hp-inter",
});

const FONT_POPPINS = "font-[family-name:var(--font-hp-poppins)]";
const FONT_INTER = "font-[family-name:var(--font-hp-inter)]";

const FOCUS_RING =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2b1346]";

/* -------------------------------------------------------------------------- */
/* Icons                                                                      */
/* -------------------------------------------------------------------------- */

type IconProps = SVGProps<SVGSVGElement>;

function ChevronRightIcon(props: IconProps) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path
        d="M6.25 4.25L10 8L6.25 11.75"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PhoneIcon(props: IconProps) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.1"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function WarningIcon(props: IconProps) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/* Visual pieces                                                              */
/* -------------------------------------------------------------------------- */

const WAVE_HEIGHTS = [
  14, 22, 16, 30, 20, 36, 26, 40, 22, 34, 28, 38, 18, 32, 42, 24, 36, 20, 34,
  28, 40, 22, 32, 38, 24, 30, 42, 20, 36, 26, 32, 18, 34, 24, 28, 16, 24, 14,
] as const;

function VoiceCard() {
  return (
    <div className="absolute left-[10px] top-[270px] flex h-[108px] w-[298px] flex-col justify-between rounded-[20px] bg-white px-[18px] py-[15px] shadow-[0px_20px_40px_0px_rgba(43,19,70,0.14)]">
      <p
        className={`${FONT_POPPINS} text-[11px] font-bold uppercase leading-none tracking-[1.6px] text-[#6a6682]`}
      >
        Digital voice
      </p>
      <div
        aria-hidden="true"
        className="flex h-[44px] items-center justify-between gap-[2.5px]"
      >
        {WAVE_HEIGHTS.map((height, index) => (
          <span
            key={index}
            className="w-[3.5px] shrink-0 rounded-full bg-[#e0127c]"
            style={{ height }}
          />
        ))}
      </div>
    </div>
  );
}

function NumberPill() {
  return (
    <div className="absolute left-[462px] top-[356px] flex h-[50px] w-[194px] items-center gap-2.5 rounded-full bg-white pl-[10px] pr-3.5 shadow-[0px_12px_30px_0px_rgba(43,19,70,0.14)]">
      <span className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full bg-[#7b3fe4] text-white">
        <PhoneIcon />
      </span>
      <span
        className={`${FONT_POPPINS} whitespace-nowrap text-[13.5px] font-semibold leading-none text-[#1f1235]`}
      >
        Keep your number?
      </span>
    </div>
  );
}

function PowerAlertCard() {
  return (
    <div className="absolute left-[68px] top-[462px] grid w-[396px] grid-cols-[38px_minmax(0,1fr)] items-start gap-x-4 rounded-[22px] bg-[#2b1346] p-[17px] shadow-[0px_20px_42px_0px_rgba(43,19,70,0.34)]">
      <span className="mt-0.5 flex h-[38px] w-[38px] items-center justify-center rounded-[10px] bg-[#ffb53d] text-[#2b1346]">
        <WarningIcon />
      </span>
      <div className="flex flex-col">
        <p
          className={`${FONT_POPPINS} text-[14.5px] font-bold leading-[1.35] text-white`}
        >
          Digital phones need power and an internet connection
        </p>
        <p
          className={`${FONT_INTER} mt-1.5 text-[12.5px] font-normal leading-[1.55] text-white/80`}
        >
          Rely on your landline in an emergency, or use a care alarm? Get help
          first.
        </p>
        <Link
          href="#"
          className={`${FONT_POPPINS} mt-3 w-fit whitespace-nowrap text-[13px] font-semibold leading-5 text-[#ffb53d] underline decoration-[#ffb53d] underline-offset-4 transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffb53d]`}
        >
          Check before you switch &rarr;
        </Link>
      </div>
    </div>
  );
}

function HeroVisual() {
  return (
    <div className="relative order-2 mx-auto h-[338px] w-[336px] shrink-0 sm:h-[611px] sm:w-[608px] md:h-[680px] md:w-[670px]">
      <div className="absolute left-0 top-0 h-[680px] w-[670px] origin-top-left scale-[0.5] sm:scale-[0.9] md:scale-100">
        {/* Pink house outline frame */}
        <div
          aria-hidden="true"
          className="absolute left-[122px] top-[22px] h-[616px] w-[496px] bg-[linear-gradient(165deg,#f8b6ce_0%,#fbc4ce_52%,#fcd2c6_100%)] [clip-path:polygon(50%_0,100%_33%,100%_100%,0_100%,0_33%)]"
        />

        {/* Interior house photo */}
        <div className="absolute left-[134px] top-[36px] h-[602px] w-[472px] overflow-hidden [clip-path:polygon(50%_0,100%_32.5%,100%_100%,0_100%,0_32.5%)]">
          <Image
            src="/Images/home/1.png"
            alt="Bright living room with a leather sofa, plants and a woven wall hanging"
            fill
            priority
            quality={80}
            sizes="(min-width: 768px) 472px, 340px"
            className="object-cover object-center"
          />
        </div>

        <VoiceCard />
        <NumberPill />
        <PowerAlertCard />
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Content                                                                    */
/* -------------------------------------------------------------------------- */

function HeroContent() {
  return (
    <div className="relative z-10 order-1 flex w-full flex-col items-start gap-[18px] px-5 pt-12 sm:px-8 md:px-12 md:flex-1 md:px-0 md:pl-[40px] md:pt-[196px]">
      {/* Eyebrow */}
      <p
        className={`${FONT_POPPINS} flex items-center gap-3 text-[11.5px] font-bold uppercase leading-none tracking-[2.8px] text-[#d4561f]`}
      >
        <span
          aria-hidden="true"
          className="h-[1.5px] w-[34px] shrink-0 bg-[#e6732d]"
        />
        <span className="whitespace-nowrap">Landlines &amp; Voice</span>
      </p>

      {/* Heading */}
      <h1
        id="hp-hero-heading"
        className={`${FONT_POPPINS} text-[44px] font-extrabold leading-[1.04] tracking-[-0.035em] text-[#22103d] sm:text-[54px] md:text-[64px]`}
      >
        Home{" "}
        <span className="bg-[linear-gradient(90deg,#e0127c_0%,#d11186_100%)] bg-clip-text pr-[0.08em] italic text-transparent">
          Phone
        </span>
      </h1>

      {/* Lead */}
      <p
        className={`${FONT_INTER} max-w-[430px] text-[16.5px] font-normal leading-[1.6] text-[#5e5873] sm:text-[18px]`}
      >
        Learn what a home phone service may need and get advice before
        switching.
      </p>

      {/* Actions */}
      <div className="flex flex-wrap items-center gap-[12px] pt-[6px]">
        <Link
          href="#"
          className={`${FONT_POPPINS} inline-flex h-[50px] items-center justify-center gap-2 rounded-[12px] bg-[linear-gradient(90deg,#f0168a_0%,#e0127c_55%,#cc1070_100%)] px-5 text-[14.5px] font-semibold leading-none text-white shadow-[0px_10px_22px_-4px_rgba(224,18,124,0.45)] transition-transform duration-200 hover:-translate-y-0.5 ${FOCUS_RING}`}
        >
          <span className="whitespace-nowrap">Get home phone advice</span>
          <ChevronRightIcon className="h-4 w-4 shrink-0" />
        </Link>
        <Link
          href="#"
          className={`${FONT_POPPINS} inline-flex h-[50px] items-center justify-center rounded-[12px] border-[1.5px] border-[#2b1346]/80 bg-white/85 px-5 text-[14.5px] font-semibold leading-none text-[#2b1346] transition-colors duration-200 hover:bg-[#2b1346] hover:text-white ${FOCUS_RING}`}
        >
          <span className="whitespace-nowrap">How digital calling works</span>
        </Link>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Page                                                                       */
/* -------------------------------------------------------------------------- */

export default function HomePhonePage() {
  return (
    <main>
      <section
        aria-labelledby="hp-hero-heading"
        className={`${poppins.variable} ${inter.variable} ${FONT_INTER} relative isolate overflow-hidden bg-[linear-gradient(105deg,#fffaf5_0%,#fff4ef_48%,#fde8ed_100%)] pb-10 md:pb-0`}
      >
        {/* Warm corner glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(540px_380px_at_0%_100%,rgba(255,206,152,0.5)_0%,rgba(255,206,152,0)_72%)]"
        />

        {/* Contour background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          <Image
            src="/Images/cloud/1.png"
            alt=""
            fill
            quality={75}
            sizes="100vw"
            className="object-cover object-center opacity-80"
          />
        </div>

        <div className="relative z-10 mx-auto flex max-w-[1300px] flex-col items-center gap-4 md:h-[680px] md:flex-row md:items-start md:gap-6">
          <HeroContent />
          <HeroVisual />
        </div>
      </section>
    </main>
  );
}
