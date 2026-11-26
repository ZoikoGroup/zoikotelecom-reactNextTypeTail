interface ReportingStep {
  stepNumber: number;
  title: string;
  description: string;
  topBg: string;
  illustration: React.ReactNode;
}

const reportingSteps: ReportingStep[] = [
  {
    stepNumber: 1,
    title: "Describe the problem",
    description:
      "Service, what's happening and when it started — use the helper below if you like.",
    topBg: "bg-[#FCE6DE]",
    illustration: (
      <svg
        viewBox="0 0 130 96"
        className="h-24 w-32"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id="step1BubbleGrad"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#FF7A59" />
            <stop offset="100%" stopColor="#EC1C7A" />
          </linearGradient>
        </defs>
        {/* Ground shadow */}
        <ellipse cx="64" cy="85" rx="38" ry="4.5" fill="#E8CECA" />

        {/* Large pink-coral question bubble */}
        <path
          d="M32 20h54a6 6 0 0 1 6 6v33a6 6 0 0 1-6 6H53l-11 9v-9H32a6 6 0 0 1-6-6V26a6 6 0 0 1 6-6z"
          fill="url(#step1BubbleGrad)"
        />
        <text
          x="59"
          y="49"
          textAnchor="middle"
          fill="#FFFFFF"
          fontSize="24"
          fontWeight="800"
          fontFamily="sans-serif"
        >
          ?
        </text>

        {/* Smaller overlapping teal reply bubble */}
        <path
          d="M72 44h30a5 5 0 0 1 5 5v21a5 5 0 0 1-5 5H88l7 6-12-6H72a5 5 0 0 1-5-5V49a5 5 0 0 1 5-5z"
          fill="#0D9488"
        />
        <circle cx="80" cy="59.5" r="2.2" fill="#FFFFFF" />
        <circle cx="87" cy="59.5" r="2.2" fill="#FFFFFF" />
        <circle cx="94" cy="59.5" r="2.2" fill="#FFFFFF" />
      </svg>
    ),
  },
  {
    stepNumber: 2,
    title: "Contact our team",
    description:
      "Use our Contact page by phone or the enquiry form. Clicking a link doesn't send a report.",
    topBg: "bg-[#DFF4EE]",
    illustration: (
      <svg
        viewBox="0 0 130 96"
        className="h-24 w-32"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id="step2ScreenGrad"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#14B8A6" />
            <stop offset="100%" stopColor="#2563EB" />
          </linearGradient>
        </defs>
        {/* Ground shadow */}
        <ellipse cx="66" cy="85" rx="40" ry="4.5" fill="#C7E4DC" />

        {/* Smartphone body */}
        <rect x="61" y="15" width="32" height="63" rx="5.5" fill="#18133E" />
        <rect
          x="64.5"
          y="19.5"
          width="25"
          height="54"
          rx="3"
          fill="url(#step2ScreenGrad)"
        />

        {/* Overlapping coral-red message/form card */}
        <rect x="40" y="42" width="32" height="36" rx="4.5" fill="#FF5A4E" />
        <line
          x1="46.5"
          y1="51"
          x2="65.5"
          y2="51"
          stroke="#FFF2F0"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <line
          x1="46.5"
          y1="57.5"
          x2="60.5"
          y2="57.5"
          stroke="#FFF2F0"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <path
          d="M61 66.5v6M58 69.5h6"
          stroke="#FFF2F0"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    stepNumber: 3,
    title: "We look into it",
    description:
      "Our team reviews your report. Any case reference comes from them — not from this page.",
    topBg: "bg-[#EFE6FC]",
    illustration: (
      <svg
        viewBox="0 0 130 96"
        className="h-24 w-32"
        fill="none"
        aria-hidden="true"
      >
        {/* Ground shadow */}
        <ellipse cx="66" cy="85" rx="38" ry="4.5" fill="#D9CEEE" />

        {/* Profile/case card */}
        <rect
          x="36"
          y="24"
          width="58"
          height="46"
          rx="6.5"
          fill="#FFFFFF"
          stroke="#E3DCF4"
          strokeWidth="1"
        />

        {/* Left purple avatar circle */}
        <circle cx="52.5" cy="47" r="10.5" fill="#8B5CF6" />
        <circle cx="52.5" cy="44.2" r="3.4" fill="#FFFFFF" />
        <path d="M46.5 53.5c1.3-2.6 3.5-4 6-4s4.7 1.4 6 4" fill="#FFFFFF" />

        {/* Right summary lines & amber pill */}
        <rect x="68" y="35.5" width="18" height="4" rx="2" fill="#D8D3E8" />
        <rect x="68" y="43" width="14" height="4" rx="2" fill="#E6E2F2" />
        <rect x="68" y="53" width="18" height="7.5" rx="3.75" fill="#FBBF24" />

        {/* Floating pink padlock badge */}
        <circle cx="94" cy="24" r="10.5" fill="#EC1C7A" />
        <rect
          x="90.2"
          y="23.5"
          width="7.6"
          height="6"
          rx="1.2"
          fill="#FFFFFF"
        />
        <path
          d="M91.8 23.5v-2a2.2 2.2 0 0 1 4.4 0v2"
          stroke="#FFFFFF"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

export default function ThreeSimpleStepsSection() {
  return (
    <section
      id="how-reporting-works"
      className="w-full bg-[#F5F6FB] px-4 py-14 text-[#18133E] antialiased sm:px-6 lg:py-20"
    >
      <div className="mx-auto w-full max-w-[1300px]">
        {/* Header */}
        <div className="text-center">
          <p className="text-[10.5px] font-extrabold uppercase tracking-[0.14em] text-[#5B5675]">
            How reporting works
          </p>
          <h2 className="mt-2.5 text-[32px] font-extrabold leading-[1.15] tracking-[-0.025em] text-[#110C3A] sm:text-[42px]">
            Three simple steps
          </h2>
        </div>

        {/* Three-Column Step Cards */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {reportingSteps.map((step) => (
            <div
              key={step.stepNumber}
              className="flex flex-col overflow-hidden rounded-2xl border border-[#ECEAF2] bg-white shadow-[0_6px_22px_rgba(17,12,58,0.035)]"
            >
              {/* Pastel Illustration Panel with Top-Left Step Badge */}
              <div
                className={`relative flex h-[196px] w-full shrink-0 items-center justify-center ${step.topBg}`}
              >
                <span
                  className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[11px] font-extrabold text-[#EC1C7A] shadow-[0_2px_8px_rgba(17,12,58,0.08)]"
                  style={{ position: "absolute", top: "18px", left: "18px" }}
                >
                  {step.stepNumber}
                </span>

                {step.illustration}
              </div>

              {/* Bottom Text Content */}
              <div className="flex flex-1 flex-col justify-start px-6 py-5 sm:px-7">
                <h3 className="text-[15.5px] font-extrabold text-[#110C3A]">
                  {step.title}
                </h3>
                <p className="mt-2 text-[12px] leading-[1.55] text-[#6E6A85]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
