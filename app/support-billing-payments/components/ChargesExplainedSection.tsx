export default function ChargesExplainedSection() {
  const chargeCards = [
    {
      title: "Recurring charges",
      description: "Your monthly plan or rental, as set in your agreement.",
      footnote: "No standard price applies to everyone.",
      topBg: "bg-[#E2F5EE]",
      illustration: (
        <svg
          viewBox="0 0 110 86"
          className="h-20 w-24"
          fill="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient
              id="chargeCalHeader"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#14B8A6" />
              <stop offset="100%" stopColor="#2563EB" />
            </linearGradient>
          </defs>
          <ellipse cx="55" cy="76" rx="33" ry="4" fill="#CBE8DF" />
          <rect
            x="27"
            y="20"
            width="56"
            height="48"
            rx="7"
            fill="#FFFFFF"
            stroke="#D6E5E0"
            strokeWidth="1"
          />
          <path
            d="M27 27a7 7 0 0 1 7-7h42a7 7 0 0 1 7 7v6H27v-6z"
            fill="url(#chargeCalHeader)"
          />
          <rect x="38" y="15" width="4" height="8" rx="2" fill="#18133E" />
          <rect x="68" y="15" width="4" height="8" rx="2" fill="#18133E" />
          {/* Calendar day cells */}
          <rect x="35" y="40" width="6" height="5" rx="1.2" fill="#D5D2E4" />
          <rect x="46" y="40" width="6" height="5" rx="1.2" fill="#D5D2E4" />
          <rect x="57" y="40" width="6" height="5" rx="1.2" fill="#D5D2E4" />
          <rect x="68" y="40" width="6" height="5" rx="1.2" fill="#D5D2E4" />

          <rect x="35" y="50" width="6" height="5" rx="1.2" fill="#D5D2E4" />
          <rect x="46" y="50" width="6" height="5" rx="1.2" fill="#D5D2E4" />
          <rect x="57" y="50" width="6" height="5" rx="1.2" fill="#EC1C7A" />
          <rect x="68" y="50" width="6" height="5" rx="1.2" fill="#D5D2E4" />
        </svg>
      ),
    },
    {
      title: "One-off charges",
      description:
        "Set-up or replacement fees — only where your contract allows them.",
      footnote: "Not every bill has these.",
      topBg: "bg-[#FDF1DF]",
      illustration: (
        <svg
          viewBox="0 0 110 86"
          className="h-20 w-24"
          fill="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient
              id="oneOffFlagGrad"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#FF7A59" />
              <stop offset="100%" stopColor="#EC1C7A" />
            </linearGradient>
          </defs>
          <ellipse cx="55" cy="76" rx="33" ry="4" fill="#EBDAC2" />
          <path
            d="M39 20h34l-7 10.5 7 10.5H39V20z"
            fill="url(#oneOffFlagGrad)"
          />
          <rect
            x="36.5"
            y="18"
            width="3.5"
            height="52"
            rx="1.75"
            fill="#18133E"
          />
          <circle cx="74" cy="56" r="10.5" fill="#3B82F6" />
          <rect
            x="72.8"
            y="50"
            width="2.4"
            height="7"
            rx="1.2"
            fill="#FFFFFF"
          />
          <circle cx="74" cy="60.5" r="1.4" fill="#FFFFFF" />
        </svg>
      ),
    },
    {
      title: "Usage & roaming",
      description:
        "Extra use outside your allowance, or use abroad, depending on your plan.",
      footnote: "Rates depend on plan and destination.",
      topBg: "bg-[#E6ECFC]",
      illustration: (
        <svg
          viewBox="0 0 110 86"
          className="h-20 w-24"
          fill="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="globeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#7C3AED" />
            </linearGradient>
          </defs>
          <ellipse cx="55" cy="76" rx="33" ry="4" fill="#CED8F2" />
          <circle cx="55" cy="44" r="24" fill="url(#globeGrad)" />
          <ellipse
            cx="55"
            cy="44"
            rx="11"
            ry="24"
            stroke="#C7D2FE"
            strokeWidth="2"
          />
          <line
            x1="31"
            y1="44"
            x2="79"
            y2="44"
            stroke="#C7D2FE"
            strokeWidth="2"
          />
          {/* Small angled roaming accent pill */}
          <rect
            x="78"
            y="21"
            width="12"
            height="5.5"
            rx="2"
            transform="rotate(-28 78 21)"
            fill="#FBBF24"
          />
        </svg>
      ),
    },
    {
      title: "Discounts & credits",
      description: "A promotional or contract credit lowers what you owe.",
      footnote: "A credit isn't the same as a refund.",
      topBg: "bg-[#F0E7FC]",
      illustration: (
        <svg
          viewBox="0 0 110 86"
          className="h-20 w-24"
          fill="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient
              id="percentBadgeGrad"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#7C3AED" />
              <stop offset="100%" stopColor="#EC1C7A" />
            </linearGradient>
          </defs>
          <ellipse cx="55" cy="76" rx="32" ry="4" fill="#DCD1EC" />
          <circle cx="54" cy="46" r="23" fill="url(#percentBadgeGrad)" />
          <line
            x1="46"
            y1="54"
            x2="62"
            y2="38"
            stroke="#FFFFFF"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
          <circle cx="47.5" cy="39.5" r="3" fill="#FFFFFF" />
          <circle cx="60.5" cy="52.5" r="3" fill="#FFFFFF" />
          {/* Small green accent dot */}
          <circle cx="80" cy="23" r="6.5" fill="#10B981" />
        </svg>
      ),
    },
    {
      title: "VAT & tax",
      description:
        "Shown on your actual bill, depending on the service and who bills you.",
      footnote: "We don't assume a standard rate.",
      topBg: "bg-[#FCECF4]",
      illustration: (
        <svg
          viewBox="0 0 110 86"
          className="h-20 w-24"
          fill="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="vatTopLine" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#9333EA" />
              <stop offset="100%" stopColor="#EC1C7A" />
            </linearGradient>
            <linearGradient
              id="vatPoundGrad"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#7C3AED" />
              <stop offset="100%" stopColor="#C026D3" />
            </linearGradient>
          </defs>
          <ellipse cx="53" cy="76" rx="32" ry="4" fill="#EBD5E3" />
          <path
            d="M32 16h40v52l-5-3.5-5 3.5-5-3.5-5 3.5-5-3.5-5 3.5-5-3.5-5 3.5V16z"
            fill="#FFFFFF"
            stroke="#E5E1EF"
            strokeWidth="1"
          />
          <rect
            x="38"
            y="24"
            width="20"
            height="4"
            rx="2"
            fill="url(#vatTopLine)"
          />
          <rect
            x="38"
            y="33"
            width="26"
            height="3.5"
            rx="1.75"
            fill="#D8D4E6"
          />
          <rect
            x="38"
            y="40"
            width="21"
            height="3.5"
            rx="1.75"
            fill="#E4E1EE"
          />
          <rect
            x="38"
            y="51"
            width="26"
            height="5.5"
            rx="2.75"
            fill="#10B981"
          />
          <circle cx="74" cy="27" r="9.5" fill="url(#vatPoundGrad)" />
          <text
            x="74"
            y="31"
            textAnchor="middle"
            fill="#FFFFFF"
            fontSize="11.5"
            fontWeight="800"
            fontFamily="sans-serif"
          >
            £
          </text>
        </svg>
      ),
    },
    {
      title: "Device vs service",
      description:
        "Phone payments and your airtime can be separate agreements — and even separate companies.",
      footnote: "Check before assuming a double charge.",
      topBg: "bg-[#E9F3FC]",
      illustration: (
        <svg
          viewBox="0 0 110 86"
          className="h-20 w-24"
          fill="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient
              id="deviceScreenGrad"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#1D4ED8" />
              <stop offset="100%" stopColor="#10B981" />
            </linearGradient>
          </defs>
          <ellipse cx="56" cy="76" rx="33" ry="4" fill="#D2E2F0" />
          {/* Phone */}
          <rect x="52" y="15" width="26" height="52" rx="4.5" fill="#18133E" />
          <rect
            x="55"
            y="19"
            width="20"
            height="44"
            rx="2.5"
            fill="url(#deviceScreenGrad)"
          />
          {/* Left coral plan card */}
          <rect x="32" y="36" width="24" height="31" rx="3.5" fill="#FF7A59" />
          <line
            x1="37"
            y1="44"
            x2="51"
            y2="44"
            stroke="#FFF4F0"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="37"
            y1="49.5"
            x2="48"
            y2="49.5"
            stroke="#FFF4F0"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M44 57v5M41.5 59.5h5"
            stroke="#FFF4F0"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="understand-my-charges"
      className="w-full bg-[#F5F6FB] px-4 py-14 text-[#18133E] antialiased sm:px-6 lg:py-20"
    >
      <div className="mx-auto w-full max-w-[1300px]">
        {/* Section Header */}
        <div className="text-center">
          <p className="text-[10.5px] font-extrabold uppercase tracking-[0.14em] text-[#5B5675]">
            Charges explained
          </p>
          <h2 className="mt-2.5 text-[32px] font-extrabold leading-[1.15] tracking-[-0.025em] text-[#110C3A] sm:text-[42px]">
            Where the numbers on a bill come
            <br className="hidden sm:inline" /> from
          </h2>
          <p className="mt-2.5 text-[13px] text-[#6E6A85]">
            Every example depends on your agreement — no tariffs or fees are
            quoted here.
          </p>
        </div>

        {/* 3x2 Cards Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {chargeCards.map((card) => (
            <div
              key={card.title}
              className="flex flex-col overflow-hidden rounded-2xl border border-[#ECEAF2] bg-white shadow-[0_2px_12px_rgba(17,12,58,0.03)]"
            >
              <div
                className={`flex h-[155px] w-full shrink-0 items-center justify-center ${card.topBg}`}
              >
                {card.illustration}
              </div>

              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <h3 className="text-[15.5px] font-extrabold text-[#110C3A]">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-[12px] leading-[1.55] text-[#6E6A85]">
                    {card.description}
                  </p>
                </div>

                <p className="mt-4 text-[10.5px] font-semibold text-[#C29B38]">
                  {card.footnote}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Pro-Rated Charge Banner */}
        <div className="mt-6 rounded-2xl border border-[#ECEAF2] bg-white p-6 shadow-[0_2px_12px_rgba(17,12,58,0.03)] sm:p-7">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center lg:gap-10">
            <div className="max-w-[680px]">
              <h3 className="text-[15px] font-extrabold text-[#110C3A]">
                What&apos;s a pro-rated charge?
              </h3>
              <p className="mt-2 text-[12px] leading-[1.6] text-[#6E6A85]">
                If a service starts or changes part-way through a billing
                period, you may see a charge for just part of that period. Your
                first bill can look different for this reason. The exact method
                depends on your agreement.
              </p>
            </div>

            {/* Visual Timeline Bar */}
            <div className="w-full max-w-[380px] shrink-0">
              <div className="grid grid-cols-2 overflow-hidden rounded-lg text-[10.5px] font-bold">
                <div className="flex items-center justify-center bg-[#C7CEDF] px-3 py-2.5 text-[#3B425E]">
                  Before start
                </div>
                <div className="flex items-center justify-center bg-gradient-to-r from-[#2563EB] to-[#7C3AED] px-3 py-2.5 text-white">
                  Part-period charge
                </div>
              </div>
              <div className="mt-2 flex items-center justify-between text-[9.5px] font-medium text-[#7A7691]">
                <span>Period starts</span>
                <span>Service starts</span>
                <span>Period ends</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
