
"use client";

import Image from "next/image";
import Link from "next/link";
import type {
  SVGProps,
  ComponentType,
} from "react";
import { Inter, Poppins } from "next/font/google";

// Fonts
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
  variable: "--font-billing-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-billing-inter",
});

const FONT_POPPINS =
  "font-[family-name:var(--font-billing-poppins)]";

const FONT_INTER =
  "font-[family-name:var(--font-billing-inter)]";

// Icons
type IconProps = SVGProps<SVGSVGElement>;

const shared = {
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": true,
  focusable: false,
} as const;

function CalendarIcon(props: IconProps) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" {...shared} {...props}>
      <path
        d="M3.33333 3.33337H12.6667C13.403 3.33337 14 3.93033 14 4.66671V12.6667C14 13.4031 13.403 14 12.6667 14H3.33333C2.59695 14 2 13.4031 2 12.6667V4.66671C2 3.93033 2.59695 3.33337 3.33333 3.33337Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 6.66667H14M5.33333 2V4.66667M10.6667 2V4.66667"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PercentIcon(props: IconProps) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" {...shared} {...props}>
      <path
        d="M12.6693 3.33337L3.33594 12.6667"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.33333 4.66667C6.33333 5.58714 5.58714 6.33333 4.66667 6.33333C3.74619 6.33333 3 5.58714 3 4.66667C3 3.74619 3.74619 3 4.66667 3C5.58714 3 6.33333 3.74619 6.33333 4.66667Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.9974 11.3333C12.9974 12.2538 12.2512 13 11.3307 13C10.4103 13 9.66406 12.2538 9.66406 11.3333C9.66406 10.4128 10.4103 9.66663 11.3307 9.66663C12.2512 9.66663 12.9974 10.4128 12.9974 11.3333Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LockIcon(props: IconProps) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" {...shared} {...props}>
      <path
        d="M4.66927 6.66663H11.3359C12.0723 6.66663 12.6693 7.26358 12.6693 7.99996V12C12.6693 12.7363 12.0723 13.3333 11.3359 13.3333H4.66927C3.93289 13.3333 3.33594 12.7363 3.33594 12V7.99996C3.33594 7.26358 3.93289 6.66663 4.66927 6.66663Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.33594 6.66667V4.66667C5.33594 3.95942 5.61689 3.28115 6.11699 2.78105C6.61708 2.28095 7.29536 2 8.0026 2C8.70985 2 9.38813 2.28095 9.88822 2.78105C10.3883 3.28115 10.6693 3.95942 10.6693 4.66667V6.66667"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ReceiptIcon(props: IconProps) {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" {...shared} {...props}>
      <path
        d="M3.125 1.875H11.875V13.125L10 11.875L8.75 13.125L7.5 11.875L6.25 13.125L5 11.875L3.125 13.125V1.875Z"
        stroke="currentColor"
        strokeWidth="1.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.625 5H9.375M5.625 7.5H9.375M5.625 10H7.5"
        stroke="currentColor"
        strokeWidth="1.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronRightIcon(props: IconProps) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" {...shared} {...props}>
      <path
        d="M6 4L10 8L6 12"
        stroke="currentColor"
        strokeWidth="1.73333"
      />
    </svg>
  );
}

function BubbleTealIcon(props: IconProps) {
  return (
    <svg width="70" height="80" viewBox="0 0 70 80" {...shared} {...props}>
      <path
        d="M9.33594 14.3334H60.6693C62.5258 14.3334 64.3063 15.0709 65.619 16.3836C66.9318 17.6964 67.6693 19.4769 67.6693 21.3334V49.3334C67.6693 51.1899 66.9318 52.9704 65.619 54.2831C64.3063 55.5959 62.5258 56.3334 60.6693 56.3334H28.0026L14.0026 68V56.3334H9.33594C7.47942 56.3334 5.69894 55.5959 4.38619 54.2831C3.07344 52.9704 2.33594 51.1899 2.33594 49.3334V21.3334C2.33594 19.4769 3.07344 17.6964 4.38619 16.3836C5.69894 14.3334 7.47942 14.3334 9.33594 14.3334Z"
        stroke="#0E9E7B"
        strokeWidth="2.32945"
      />
    </svg>
  );
}

function BubbleBlueIcon(props: IconProps) {
  return (
    <svg width="58" height="58" viewBox="0 0 58 58" {...shared} {...props}>
      <path
        d="M7.72969 7.73328H50.263C51.8013 7.73328 53.2765 8.34435 54.3642 9.43206C55.452 10.5198 56.063 11.995 56.063 13.5333V36.7333C56.063 38.2715 55.452 39.7468 54.3642 40.8345C53.2765 41.9222 51.8013 42.5333 50.263 42.5333H23.1964L11.5964 52.1999V42.5333H7.72969C6.19143 42.5333 4.71618 41.9222 3.62847 40.8345C2.54076 39.7468 1.92969 38.2715 1.92969 36.7333V13.5333C1.92969 11.995 2.54076 10.5198 3.62847 9.43206C4.71618 7.73328 6.19143 7.73328 7.72969 7.73328Z"
        stroke="#3D7BFF"
        strokeWidth="1.925"
      />
    </svg>
  );
}

// Info Chip
const TONE_CLASSES = {
  azure: "bg-[#3d7bff]",
  teal: "bg-[#0e9e7b]",
  rose: "bg-[#e0127c]",
} as const;

type InfoChipTone = keyof typeof TONE_CLASSES;

interface InfoChipProps {
  tone: InfoChipTone;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  caption: string;
}

function InfoChip({
  tone,
  icon: Icon,
  title,
  caption,
}: InfoChipProps) {
  return (
    <div className="flex items-center gap-[9px] rounded-[16px] bg-white/90 p-[9px] pr-[14px] shadow-[0px_16px_32px_0px_rgba(15,22,64,0.2)] backdrop-blur-[12px]">
      <span
        className={`flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-[10px] text-white ${TONE_CLASSES[tone]}`}
      >
        <Icon className="h-4 w-4" />
      </span>
      <span className="flex flex-col gap-px whitespace-nowrap">
        <span
          className={`${FONT_POPPINS} text-[12.5px] font-bold leading-normal text-[#0a1446]`}
        >
          {title}
        </span>
        <span
          className={`${FONT_INTER} text-[11px] font-medium leading-normal text-[#6b7194]`}
        >
          {caption}
        </span>
      </span>
    </div>
  );
}

// Hero Decorations
const GLYPHS = [
  {
    char: "?",
    wrapper: "left-[299.52px] top-[29px]",
    text: "text-[64px] [-webkit-text-stroke:2px_rgba(14,158,123,0.22)]",
  },
  {
    char: "?",
    wrapper:
      "bottom-[35.99px] left-[22.45px] h-[80px] w-[26.91px] pb-[3px] pt-[2px]",
    text: "text-[50px] [-webkit-text-stroke:2px_rgba(61,123,255,0.2)]",
  },
  {
    char: "£",
    wrapper:
      "right-[14.96px] top-[328.22px] h-[69px] w-[30.88px] pb-[3px] pt-[2px]",
    text: "text-[46px] [-webkit-text-stroke:2px_rgba(14,158,123,0.22)]",
  },
] as const;

const BUBBLE_GLOW =
  "absolute -right-[30px] bottom-[10px] h-[220px] w-[220px] rounded-full bg-[radial-gradient(circle_at_center,rgba(224,18,124,0.18)_0%,rgba(224,18,124,0)_70%)]";

function HeroDecor() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-y-0 left-0 w-full overflow-clip xl:w-[52%]"
    >
      {/* Blurred colour blobs */}
      <span className="absolute -left-[140px] -top-[140px] h-[440px] w-[440px] rounded-full bg-[#bdefe0] opacity-[0.55] blur-[64px]" />
      <span className="absolute -bottom-[160.01px] -right-[60px] h-[400px] w-[400px] rounded-full bg-[#d3deff] opacity-[0.55] blur-[64px]" />
      <span className="absolute left-[314.5px] -top-[140px] h-[300px] w-[300px] rounded-full bg-[#e1d3fa] opacity-[0.55] blur-[64px]" />

      <div className="hidden xl:block">
        {/* Outlined glyphs */}
        {GLYPHS.map((glyph, index) => (
          <div
            key={`${glyph.char}-${index}`}
            className={`absolute flex flex-col items-start ${glyph.wrapper}`}
          >
            <span
              className={`block whitespace-nowrap font-extrabold leading-[1.5] text-transparent ${FONT_POPPINS} ${glyph.text}`}
            >
              {glyph.char}
            </span>
          </div>
        ))}

        {/* Speech bubbles */}
        <div className="absolute bottom-[69.99px] left-[247.09px] h-[80px] w-[70px] opacity-[0.18]">
          <BubbleTealIcon className="absolute inset-0 h-full w-full" />
          <span className={BUBBLE_GLOW} />
        </div>

        <div className="absolute right-[336.95px] top-[34px] h-[58px] w-[58px] opacity-[0.18]">
          <BubbleBlueIcon className="absolute inset-0 h-full w-full" />
          <span className={BUBBLE_GLOW} />
        </div>

        {/* Soft ellipses */}
        <span className="absolute left-[345.03px] top-[375.62px] h-[26.68px] w-[39.12px] rounded-full bg-[rgba(14,158,123,0.32)]" />
        <span className="absolute right-[105.41px] top-[85.66px] h-[26.68px] w-[39.12px] rounded-full bg-[rgba(61,123,255,0.3)]" />

        {/* Dots */}
        <span className="absolute left-[224.64px] top-[128.43px] h-[10px] w-[10px] rounded-full bg-[#0e9e7b] opacity-50" />
        <span className="absolute bottom-[142.7px] left-[344.45px] h-[10px] w-[10px] rounded-full bg-[#3d7bff] opacity-50" />
        <span className="absolute right-[37.43px] top-[142.71px] h-[10px] w-[10px] rounded-full bg-[#7b3fe4] opacity-50" />

        {/* Accent stripe */}
        <span className="absolute inset-x-0 top-[627.91px] h-[14px] bg-[linear-gradient(178.47deg,rgba(14,158,123,0)_33%,#0e9e7b_33%,#0e9e7b_66%,rgba(14,158,123,0)_66%)] opacity-[0.12]" />
      </div>
    </div>
  );
}

// Hero Visual
const CHIPS: readonly InfoChipProps[] = [
  {
    tone: "azure",
    icon: CalendarIcon,
    title: "Billing period",
    caption: "≠ due date",
  },
  {
    tone: "teal",
    icon: PercentIcon,
    title: "Credit",
    caption: "≠ refund",
  },
  {
    tone: "rose",
    icon: LockIcon,
    title: "Never share",
    caption: "Card numbers or codes",
  },
];

function HeroVisual() {
  return (
    <div className="relative order-2 h-[340px] sm:h-[440px] md:h-[520px] xl:absolute xl:inset-y-0 xl:right-0 xl:h-auto xl:w-[52%]">
      {/* Clipped photo */}
      <div className="absolute inset-0 overflow-hidden bg-[linear-gradient(150deg,#bdefe0_0%,#d3deff_55%,#e1d3fa_100%)] [clip-path:polygon(0_8%,100%_0,100%_100%,0_100%)] xl:[clip-path:polygon(18%_0,100%_0,100%_100%,0_100%)]">
        <Image
          src="/images/support/1.png"
          alt="Person reviewing a bill at a desk"
          fill
          priority
          quality={80}
          sizes="(min-width: 1280px) 52vw, 100vw"
          className="object-cover object-center"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(90deg,rgba(14,158,123,0.3)_0%,rgba(14,158,123,0)_45%),linear-gradient(0deg,rgba(15,22,64,0.5)_0%,rgba(15,22,64,0)_45%)]"
        />
      </div>

      {/* Gradient edge line */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden overflow-hidden xl:block"
      >
        <svg
          className="absolute left-0 top-0 h-full w-[138.284px] overflow-visible"
          viewBox="0 0 138.284 713.53"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M134.784 0L0 713.53"
            stroke="url(#billing-hero-edge-gradient)"
            strokeWidth="7"
            vectorEffect="non-scaling-stroke"
          />

          <defs>
            <linearGradient
              id="billing-hero-edge-gradient"
              x1="0"
              y1="0"
              x2="0"
              y2="713.53"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0E9E7B" />
              <stop offset="0.5" stopColor="#3D7BFF" />
              <stop offset="1" stopColor="#7B3FE4" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Info chips */}
      <ul className="absolute right-4 top-6 z-10 flex list-none flex-col items-stretch gap-2 sm:right-6 xl:right-[34.69px] xl:top-[60px]">
        {CHIPS.map((chip) => (
          <li key={chip.title}>
            <InfoChip {...chip} />
          </li>
        ))}
      </ul>
    </div>
  );
}

// Hero Content
const HEADING_GRADIENT =
  "bg-[linear-gradient(90deg,#0e9e7b_0%,#3d7bff_50%,#7b3fe4_100%)] bg-clip-text text-transparent";

const FOCUS_RING =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0a1446]";

function HeroContent() {
  return (
    <div className="relative z-10 order-1 w-full px-5 pb-10 pt-12 sm:px-8 md:px-12 xl:order-none xl:grid xl:h-[713.53px] xl:min-h-[640px] xl:grid-cols-[560px_minmax(0,1fr)] xl:gap-5 xl:px-[clamp(40px,7.8125vw,112.5px)] xl:pb-16 xl:pt-[52px]">
      <div className="flex flex-col items-start gap-[14.9px] xl:self-center">
        {/* Eyebrow pill */}
        <p
          className={`${FONT_POPPINS} flex items-center gap-2 rounded-full border border-[#c9eee2] bg-white px-[14px] pb-2 pt-[10.11px] text-[12.5px] font-bold uppercase leading-normal tracking-[1.5px] text-[#0e7a62] drop-shadow-[0px_6px_7px_rgba(91,47,184,0.08)]`}
        >
          <ReceiptIcon className="h-[15px] w-[15px] shrink-0" />
          <span className="whitespace-nowrap">
            Billing &amp; payments
          </span>
        </p>

        {/* Heading */}
        <h1
          id="billing-hero-heading"
          className={`${FONT_POPPINS} w-full pb-[0.595px] pt-[1.1px] text-[40px] font-extrabold leading-[0.9656] tracking-[-0.028125em] text-[#0a1446] sm:text-[52px] xl:text-[64px]`}
        >
          <span className="flex w-fit max-w-full flex-col xl:whitespace-nowrap">
            <span className="block">Understand your</span>
            <span className="block">
              bill{" "}
              <span className={HEADING_GRADIENT}>
                and how to get
              </span>
            </span>
            <span className={`-mb-2 block pb-2 ${HEADING_GRADIENT}`}>
              help.
            </span>
          </span>
        </h1>

        {/* Lead */}
        <p
          className={`${FONT_INTER} w-full max-w-[540px] text-[17px] font-normal leading-[1.6] text-[#3a4268] sm:text-[19px]`}
        >
          <span className="xl:block xl:whitespace-nowrap">
            See what each part of a bill means, how billing dates work,{" "}
          </span>
          <span className="xl:block xl:whitespace-nowrap">
            and what to do about a charge you don’t recognise or a{" "}
          </span>
          <span className="xl:block xl:whitespace-nowrap">
            payment you’re worried about.
          </span>
        </p>

        {/* Actions */}
        <div className="flex w-full flex-wrap gap-3 pt-[17.1px]">
          <Link
            href="#"
            className={`${FONT_POPPINS} inline-flex min-h-[54px] items-center justify-center gap-2 rounded-[12px] border-2 border-transparent bg-[linear-gradient(90deg,#f0168a_0%,#e0127c_50%,#c8106e_100%)] px-6 text-base font-semibold leading-normal text-white drop-shadow-[0px_10px_13px_rgba(224,18,124,0.4)] transition-transform duration-200 hover:-translate-y-0.5 ${FOCUS_RING}`}
          >
            <span className="whitespace-nowrap">
              Explore a sample bill
            </span>
            <ChevronRightIcon className="h-4 w-4 shrink-0" />
          </Link>

          <Link
            href="#"
            className={`${FONT_POPPINS} inline-flex min-h-[54px] items-center justify-center rounded-[12px] border-2 border-[#0a1446] bg-white px-6 text-base font-semibold leading-normal text-[#0a1446] transition-colors duration-200 hover:bg-[#0a1446] hover:text-white ${FOCUS_RING}`}
          >
            <span className="whitespace-nowrap">
              Contact support
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

// Main Billing Hero Component
export default function BillingHero() {
  return (
    <section
      aria-labelledby="billing-hero-heading"
      className={`${poppins.variable} ${inter.variable} ${FONT_INTER} relative isolate flex flex-col overflow-hidden bg-[linear-gradient(125deg,#eefbf6_0%,#f1f5ff_55%,#f8f0ff_100%)]`}
    >
      <HeroDecor />
      <HeroVisual />
      <HeroContent />
    </section>
  );
}
