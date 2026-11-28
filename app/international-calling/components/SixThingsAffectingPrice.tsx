import type { ReactNode, SVGProps } from "react";
import { Inter, Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
  variable: "--font-intl-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-intl-inter",
});

const FONT_POPPINS = "font-[family-name:var(--font-intl-poppins)]";
const FONT_INTER = "font-[family-name:var(--font-intl-inter)]";

type IconProps = SVGProps<SVGSVGElement>;

function DocumentIcon(props: IconProps) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="8" y1="13" x2="16" y2="13" />
      <line x1="8" y1="17" x2="13" y2="17" />
    </svg>
  );
}

function GlobeGridIcon(props: IconProps) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
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

function MobileIcon(props: IconProps) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <rect x="6" y="2" width="12" height="20" rx="2.5" />
      <line x1="10.5" y1="18.5" x2="13.5" y2="18.5" />
    </svg>
  );
}

function PhoneCallIcon(props: IconProps) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
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

function ClockIcon(props: IconProps) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <circle cx="12" cy="12" r="9.5" />
      <polyline points="12 6.5 12 12 15.5 14" />
    </svg>
  );
}

function CardIcon(props: IconProps) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <rect x="2" y="5" width="20" height="14" rx="2.5" />
      <line x1="2" y1="10" x2="22" y2="10" />
    </svg>
  );
}

interface FactorCard {
  title: string;
  description: string;
  badgeBg: string;
  iconColor: string;
  Icon: (props: IconProps) => ReactNode;
}

const FACTORS: readonly FactorCard[] = [
  {
    title: "Your plan",
    description:
      "Some plans include certain destinations — only if your terms say so.",
    badgeBg: "bg-[#e9efff]",
    iconColor: "text-[#3b6ef6]",
    Icon: DocumentIcon,
  },
  {
    title: "Destination",
    description: "Each country or territory can have its own rate.",
    badgeBg: "bg-[#f1eaff]",
    iconColor: "text-[#8b4cf7]",
    Icon: GlobeGridIcon,
  },
  {
    title: "Number type",
    description:
      "Landlines, mobiles and special numbers are often priced differently.",
    badgeBg: "bg-[#fde8f3]",
    iconColor: "text-[#e0127c]",
    Icon: MobileIcon,
  },
  {
    title: "Connection fee",
    description:
      "Some calls have a charge to connect, as well as per-minute costs.",
    badgeBg: "bg-[#e5f7ee]",
    iconColor: "text-[#17a362]",
    Icon: PhoneCallIcon,
  },
  {
    title: "Billing increments",
    description: "How call time is rounded and any minimum charge.",
    badgeBg: "bg-[#fff0e4]",
    iconColor: "text-[#e97324]",
    Icon: ClockIcon,
  },
  {
    title: "Tax",
    description: "Whether VAT is included and how it's shown.",
    badgeBg: "bg-[#eef0f7]",
    iconColor: "text-[#58627a]",
    Icon: CardIcon,
  },
];

export default function SixThingsAffectingPrice() {
  return (
    <section
      aria-labelledby="six-things-heading"
      className={`${poppins.variable} ${inter.variable} ${FONT_INTER} bg-[#fcfcfd] px-5 py-16 sm:px-8 md:px-12 lg:py-24`}
    >
      <div className="mx-auto max-w-[1140px]">
        {/* Section Header */}
        <div className="text-center">
          <p
            className={`${FONT_POPPINS} text-[11px] font-bold uppercase tracking-[0.2em] text-[#b0186a]`}
          >
            <span className="mr-2 italic text-[#f2a7c6]">03</span>
            <span>What affects the cost</span>
          </p>

          <h2
            id="six-things-heading"
            className={`${FONT_POPPINS} mt-2.5 text-[30px] font-bold leading-[1.15] tracking-[-0.025em] text-[#0a1030] sm:text-[38px] md:text-[42px]`}
          >
            Six things that{" "}
            <span className="bg-[linear-gradient(90deg,#cd1171_0%,#c051fc_100%)] bg-clip-text italic text-transparent">
              change the price
            </span>
          </h2>
        </div>

        {/* 3x2 Cards Grid */}
        <div className="mt-11 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {FACTORS.map(({ title, description, badgeBg, iconColor, Icon }) => (
            <article
              key={title}
              className="rounded-[20px] border border-slate-200/75 bg-white p-6 shadow-[0_12px_30px_-14px_rgba(10,16,48,0.07)] transition-shadow duration-200 hover:shadow-[0_18px_38px_-14px_rgba(10,16,48,0.12)] sm:p-7"
            >
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-[12px] ${badgeBg} ${iconColor}`}
              >
                <Icon className="h-[18px] w-[18px]" />
              </div>

              <h3
                className={`${FONT_POPPINS} mt-4 text-[16px] font-bold leading-snug text-[#0a1030]`}
              >
                {title}
              </h3>

              <p className="mt-1.5 text-[13.5px] leading-[1.6] text-[#525870]">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
