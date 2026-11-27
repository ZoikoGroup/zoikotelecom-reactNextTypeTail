import Image from "next/image";
import Link from "next/link";
import type { SVGProps } from "react";
import { Inter, Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
  variable: "--font-intl-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-intl-inter",
});

const FONT_POPPINS = "font-[family-name:var(--font-intl-poppins)]";
const FONT_INTER = "font-[family-name:var(--font-intl-inter)]";

const FOCUS_RING =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

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
      <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.73333" />
    </svg>
  );
}

function PhoneIcon(props: IconProps) {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
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

function GlobeIcon(props: IconProps) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/* Globe (520 x 520 frame)                                                    */
/* -------------------------------------------------------------------------- */

const DOT_STEP = 15.408;
const DOT_ORIGIN_X = 50.86;
const DOT_ORIGIN_Y = 127.87;
const DOT_RADIUS = 3.09;

interface DotRow {
  row: number;
  cols: readonly number[];
  opacity: number;
}

const range = (from: number, to: number): number[] =>
  Array.from({ length: to - from + 1 }, (_, i) => from + i);

const DOT_ROWS: readonly DotRow[] = [
  { row: 0, cols: [21, 22], opacity: 0.9 },
  { row: 1, cols: range(19, 24), opacity: 0.9 },
  { row: 2, cols: [2], opacity: 0.4 },
  { row: 2, cols: range(17, 25), opacity: 0.9 },
  { row: 3, cols: [2], opacity: 0.4 },
  { row: 3, cols: range(16, 25), opacity: 0.9 },
  { row: 4, cols: [1, 2, 3], opacity: 0.4 },
  { row: 4, cols: range(15, 26), opacity: 0.9 },
  { row: 5, cols: [1, 2, 3], opacity: 0.4 },
  { row: 5, cols: range(14, 26), opacity: 0.9 },
  { row: 6, cols: [1, 2, 3, 4], opacity: 0.4 },
  { row: 6, cols: range(14, 26), opacity: 0.9 },
  { row: 7, cols: [1, 2, 3], opacity: 0.4 },
  { row: 7, cols: range(13, 25), opacity: 0.9 },
  { row: 8, cols: [0], opacity: 0.35 },
  { row: 8, cols: [1, 2], opacity: 0.4 },
  { row: 8, cols: range(14, 25), opacity: 0.55 },
  { row: 9, cols: range(14, 23), opacity: 0.55 },
  { row: 10, cols: range(15, 22), opacity: 0.55 },
  { row: 11, cols: range(16, 21), opacity: 0.55 },
  { row: 12, cols: [18, 19], opacity: 0.55 },
  { row: 16, cols: [3], opacity: 0.4 },
  { row: 17, cols: range(4, 7), opacity: 0.4 },
  { row: 18, cols: range(4, 8), opacity: 0.4 },
  { row: 18, cols: range(16, 20), opacity: 0.55 },
  { row: 19, cols: range(6, 10), opacity: 0.4 },
  { row: 19, cols: range(15, 21), opacity: 0.55 },
  { row: 20, cols: range(7, 10), opacity: 0.4 },
  { row: 20, cols: range(15, 20), opacity: 0.55 },
  { row: 21, cols: [9], opacity: 0.4 },
  { row: 21, cols: [16, 17], opacity: 0.55 },
];

function Globe() {
  return (
    <svg
      viewBox="0 0 520 520"
      width="520"
      height="520"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      className="block h-[520px] w-[520px]"
    >
      <defs>
        <radialGradient id="intl-globe-sphere" cx="0.35" cy="0.28" r="0.8">
          <stop offset="0" stopColor="#4a49e6" />
          <stop offset="0.55" stopColor="#3a35c4" />
          <stop offset="1" stopColor="#2b2594" />
        </radialGradient>
        <clipPath id="intl-globe-clip">
          <circle cx="260" cy="260" r="211.85" />
        </clipPath>
      </defs>

      {/* Dotted orbit ring */}
      <circle
        cx="260"
        cy="260"
        r="240.76"
        stroke="#ffd166"
        strokeOpacity="0.35"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="1.5 6"
      />

      {/* Sphere */}
      <circle cx="260" cy="260" r="211.85" fill="url(#intl-globe-sphere)" />

      <g clipPath="url(#intl-globe-clip)">
        {/* Wireframe */}
        <g stroke="#ffffff" strokeOpacity="0.12" strokeWidth="1.44">
          <ellipse cx="260" cy="260" rx="211.85" ry="67.4" />
          <ellipse cx="260" cy="260" rx="211.85" ry="144.4" />
          <path d="M48.15 260H471.85" />
          <ellipse cx="260" cy="260" rx="77" ry="211.85" />
          <ellipse cx="260" cy="260" rx="154" ry="211.85" />
          <path d="M260 48.15V471.85" />
        </g>

        {/* Dot grid */}
        <g fill="#ffd166">
          {DOT_ROWS.flatMap(({ row, cols, opacity }) =>
            cols.map((col) => (
              <circle
                key={`${row}-${col}`}
                cx={DOT_ORIGIN_X + col * DOT_STEP + DOT_RADIUS}
                cy={DOT_ORIGIN_Y + row * DOT_STEP + DOT_RADIUS}
                r={DOT_RADIUS}
                fillOpacity={opacity}
              />
            )),
          )}
        </g>
      </g>

      {/* Flight path */}
      <circle
        cx="125.2"
        cy="317.8"
        r="7"
        stroke="#ffd166"
        strokeWidth="1.5"
        strokeOpacity="0.8"
      />
      <path
        d="M125.2 317.8C150 200 235 146 300 146C365 146 405 168 423.7 192.6"
        stroke="#ffd166"
        strokeOpacity="0.9"
        strokeWidth="1.5"
        strokeDasharray="5 5"
      />
      <circle
        cx="423.7"
        cy="192.6"
        r="9"
        stroke="#ffc83d"
        strokeOpacity="0.35"
        strokeWidth="1.5"
      />
      <circle cx="423.7" cy="192.6" r="5.5" fill="#ffc83d" />

      {/* Plane */}
      <g transform="translate(288 124) rotate(63) scale(1.7) translate(-12 -12)">
        <path
          fill="#ffffff"
          d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"
        />
      </g>

      {/* "+ 00" label */}
      <rect
        x="394.8"
        y="144.4"
        width="73.2"
        height="32.8"
        rx="16.4"
        fill="#ffffff"
      />
      <text
        x="431.4"
        y="165.4"
        textAnchor="middle"
        fontSize="12.519"
        fontWeight="700"
        fill="#0a1030"
        style={{ fontFamily: "var(--font-intl-poppins), sans-serif" }}
      >
        + 00
      </text>
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/* Sections                                                                   */
/* -------------------------------------------------------------------------- */

function HeroContent() {
  return (
    <div className="relative z-10 order-1 w-full px-5 pb-10 pt-12 sm:px-8 md:px-12 xl:grid xl:h-full xl:grid-cols-[500px_minmax(0,1fr)] xl:items-start xl:gap-5 xl:px-[clamp(40px,7.8125vw,112.5px)] xl:pb-0 xl:pt-[138px]">
      <div className="flex flex-col items-start gap-[17.2px]">
        {/* Eyebrow */}
        <p
          className={`${FONT_POPPINS} flex items-center gap-3 pb-px text-[12.5px] font-bold uppercase leading-normal tracking-[3px] text-[#ff68b6] opacity-[0.92] xl:pt-[22.81px]`}
        >
          <span
            aria-hidden="true"
            className="h-[2px] w-[40px] shrink-0 bg-[#ff5baf]"
          />
          <span className="whitespace-nowrap">Landlines &amp; Voice</span>
        </p>

        {/* Heading */}
        <h1
          id="intl-hero-heading"
          className={`${FONT_POPPINS} w-full text-[40px] font-bold leading-[1.052] tracking-[-0.0309375em] text-white sm:text-[52px] xl:text-[64px]`}
        >
          <span className="block">International</span>
          <span className="-mb-2 block bg-[linear-gradient(90deg,#cd1171_0%,#c051fc_100%)] bg-clip-text pb-2 text-transparent">
            Calling
          </span>
        </h1>

        {/* Lead */}
        <p
          className={`${FONT_INTER} w-full max-w-[520px] pb-[0.585px] text-[17px] font-normal leading-[1.6] text-white/85 sm:text-[19px]`}
        >
          <span className="xl:block xl:whitespace-nowrap">
            Understand charges for calls from your UK fixed voice{" "}
          </span>
          <span className="xl:block xl:whitespace-nowrap">
            service to numbers overseas.
          </span>
        </p>

        {/* Actions */}
        <div className="flex w-full flex-wrap gap-3 pt-[8.8px]">
          <Link
            href="#"
            className={`${FONT_POPPINS} inline-flex min-h-[54px] items-center justify-center gap-2 rounded-[12px] border-2 border-transparent bg-[linear-gradient(90deg,#f0168a_0%,#e0127c_50%,#c8106e_100%)] px-6 text-base font-semibold leading-normal text-white drop-shadow-[0px_10px_13px_rgba(224,18,124,0.4)] transition-transform duration-200 hover:-translate-y-0.5 ${FOCUS_RING}`}
          >
            <span className="whitespace-nowrap">Know the cost first</span>
            <ChevronRightIcon className="h-4 w-4 shrink-0" />
          </Link>
          <Link
            href="#"
            className={`${FONT_POPPINS} inline-flex min-h-[54px] items-center justify-center rounded-[12px] border-2 border-white/55 px-6 text-base font-semibold leading-normal text-white transition-colors duration-200 hover:bg-white/10 ${FOCUS_RING}`}
          >
            <span className="whitespace-nowrap">Using a mobile abroad?</span>
          </Link>
        </div>

        {/* Note */}
        <p
          className={`${FONT_INTER} flex min-h-[26.39px] items-center gap-[10px] text-[13.5px] font-normal leading-[1.6] text-white/75`}
        >
          <GlobeIcon className="h-[18px] w-[18px] shrink-0 text-[#f4c24d]" />
          <span>For home phone and business voice customers</span>
        </p>
      </div>
    </div>
  );
}

function CallCard() {
  return (
    <div className="absolute bottom-[66.95px] right-[242px] flex h-[527.052px] w-[413px] items-center justify-center">
      <div className="relative flex h-[501.843px] w-[378.916px] -rotate-[4deg] flex-col overflow-hidden rounded-[30px] bg-[linear-gradient(158.44deg,#e0127c_0%,#7b3fe4_100%)] shadow-[0px_40px_80px_0px_rgba(0,0,0,0.5)]">
        <div className="relative min-h-px w-full flex-1 overflow-hidden">
          <Image
            src="/images/int/2.png"
            alt="Man in a flat cap and tweed jacket making a phone call"
            fill
            priority
            quality={80}
            sizes="380px"
            className="object-cover object-center"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-[-53.92px] top-[-131.91px] flex h-[655.134px] w-[438.447px] items-center justify-center"
          >
            <div className="relative h-[653.112px] w-[435.408px] -rotate-[0.27deg]">
              <Image
                src="/images/int/3.png"
                alt=""
                fill
                quality={80}
                sizes="440px"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-[6px_5.91px_5.84px_6px] rounded-[24px] border border-white/[0.18]"
        />

        <div className="absolute bottom-[18.83px] left-[20.01px] right-[19.91px] flex items-center gap-2 rounded-[14px] bg-white/95 px-3 pb-[11px] pt-[10px]">
          <PhoneIcon className="h-[17px] w-[17px] shrink-0 text-[#e0127c]" />
          <span
            className={`${FONT_POPPINS} whitespace-nowrap text-[13px] font-bold leading-normal text-[#0a1030]`}
          >
            Calling abroad from the UK
          </span>
        </div>
      </div>
    </div>
  );
}

function HeroVisual() {
  return (
    <div className="relative order-2 mx-auto h-[296px] w-[337px] sm:h-[526px] sm:w-[599px] md:h-[658px] md:w-[748.94px] xl:absolute xl:inset-0 xl:mx-0 xl:h-auto xl:w-auto">
      <div className="absolute left-0 top-0 h-[658px] w-[748.94px] origin-top-left scale-[0.45] sm:scale-[0.8] md:scale-100 xl:inset-0 xl:h-auto xl:w-auto xl:scale-100">
        {/* Photo panel */}
        <div className="absolute bottom-[68px] left-0 right-0 top-0 overflow-hidden bg-[linear-gradient(155.86deg,#3d7bff_0%,#7b3fe4_100%)] opacity-[0.55] xl:left-[47.99%]">
          <Image
            src="/images/int/1.png"
            alt=""
            fill
            quality={80}
            sizes="(min-width: 1280px) 52vw, 100vw"
            className="object-cover object-center"
          />
          <div
            aria-hidden="true"
            className="absolute inset-y-0 left-0 right-[0.2px] bg-[linear-gradient(90deg,#0a1030_0%,rgba(10,16,48,0.55)_30%,rgba(10,16,48,0.15)_70%),linear-gradient(0deg,rgba(10,16,48,0.7)_0%,rgba(10,16,48,0)_40%)]"
          />
        </div>

        {/* Globe */}
        <div
          aria-hidden="true"
          className="absolute right-[20px] top-[30px] h-[520px] w-[520px] overflow-clip drop-shadow-[0px_40px_60px_rgba(0,0,0,0.45)]"
        >
          <Globe />
        </div>

        <CallCard />
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Hero                                                                       */
/* -------------------------------------------------------------------------- */

export default function Hero() {
  return (
    <section
      aria-labelledby="intl-hero-heading"
      className={`${poppins.variable} ${inter.variable} ${FONT_INTER} relative isolate flex flex-col overflow-hidden bg-[#0a1030] pb-10 xl:h-[658px] xl:pb-0`}
    >
      {/* Background glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(648px_394.8px_at_0%_100%,rgba(61,123,255,0.3)_0%,rgba(61,123,255,0)_70%),radial-gradient(504px_296.1px_at_648px_0,rgba(224,18,124,0.22)_0%,rgba(224,18,124,0)_70%)]"
      />

      <HeroContent />
      <HeroVisual />
    </section>
  );
}
