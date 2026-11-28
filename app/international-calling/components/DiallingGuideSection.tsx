import Image from "next/image";
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

interface DialStep {
  code: string;
  label: string;
}

const DIAL_STEPS: readonly DialStep[] = [
  {
    code: "00",
    label: "International prefix",
  },
  {
    code: "Country code",
    label: "e.g. for the destination",
  },
  {
    code: "Number",
    label: "Usually without the first 0",
  },
];

export default function DiallingGuideSection() {
  return (
    <section
      aria-labelledby="dialling-guide-heading"
      className={`${poppins.variable} ${inter.variable} ${FONT_INTER} bg-[#060f36] text-white`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left: City Skyline Photo */}
        <div className="relative min-h-[260px] w-full overflow-hidden sm:min-h-[340px] lg:min-h-[420px]">
          <Image
            src="/Images/int/6.png"
            alt="City skyline and tall buildings by the water at sunset"
            fill
            quality={85}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover object-center"
          />
        </div>

        {/* Right: Dialling Guide Panel */}
        <div className="flex flex-col justify-center bg-[#060f36] px-6 py-12 sm:px-10 md:px-14 lg:py-16 xl:px-16">
          <div className="max-w-[560px]">
            <p
              className={`${FONT_POPPINS} text-[10.5px] font-bold uppercase tracking-[0.2em] text-[#5677fc]`}
            >
              Dialling guide
            </p>

            <h2
              id="dialling-guide-heading"
              className={`${FONT_POPPINS} mt-2.5 text-[28px] font-bold leading-[1.15] tracking-[-0.02em] text-white sm:text-[34px] lg:text-[36px]`}
            >
              How to dial abroad from the UK
            </h2>

            {/* 3-Box Formula */}
            <div className="mt-6 flex flex-col items-stretch gap-2.5 sm:flex-row sm:items-center sm:gap-2">
              {DIAL_STEPS.map((step, index) => (
                <div key={step.code} className="contents">
                  <div className="flex min-h-[82px] flex-1 flex-col items-center justify-center rounded-[12px] border border-white/15 bg-[#1b244b] px-3 py-3.5 text-center shadow-[0_10px_24px_rgba(0,0,0,0.22)]">
                    <span
                      className={`${FONT_POPPINS} text-[17px] font-bold leading-snug text-white sm:text-[18px]`}
                    >
                      {step.code}
                    </span>
                    <span className="mt-1 text-[11px] leading-tight text-white/70">
                      {step.label}
                    </span>
                  </div>

                  {index < DIAL_STEPS.length - 1 && (
                    <span
                      aria-hidden="true"
                      className={`${FONT_POPPINS} self-center text-[15px] font-bold text-[#e0127c]`}
                    >
                      +
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Footnote */}
            <p className="mt-5 max-w-[490px] text-[13px] leading-[1.55] text-white/70 sm:text-[13.5px]">
              Formats vary by country — always check the country code and number
              format for where you&apos;re calling.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
