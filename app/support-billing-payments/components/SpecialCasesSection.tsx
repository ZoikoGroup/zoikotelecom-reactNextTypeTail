interface SpecialCaseCard {
  title: string;
  description: string;
  topBg: string;
  illustration: React.ReactNode;
}

const specialCases: SpecialCaseCard[] = [
  {
    title: "Business invoices",
    description:
      "Format and consolidation depend on your business agreement — ask our business team.",
    topBg: "bg-[#E4E9FC]",
    illustration: (
      <svg
        viewBox="0 0 100 80"
        className="h-16 w-20"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id="specialBldgLeft"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#7C3AED" />
          </linearGradient>
          <linearGradient
            id="specialBldgRight"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#FF7A59" />
            <stop offset="100%" stopColor="#F97316" />
          </linearGradient>
        </defs>
        <ellipse cx="50" cy="70" rx="28" ry="3.5" fill="#CBD4F2" />
        <rect
          x="27"
          y="16"
          width="31"
          height="49"
          rx="4"
          fill="url(#specialBldgLeft)"
        />
        <rect x="33" y="23" width="4.5" height="5" rx="1" fill="#DBEAFE" />
        <rect x="40.5" y="23" width="4.5" height="5" rx="1" fill="#DBEAFE" />
        <rect x="48" y="23" width="4.5" height="5" rx="1" fill="#DBEAFE" />

        <rect x="33" y="33" width="4.5" height="5" rx="1" fill="#DBEAFE" />
        <rect x="40.5" y="33" width="4.5" height="5" rx="1" fill="#DBEAFE" />
        <rect x="48" y="33" width="4.5" height="5" rx="1" fill="#DBEAFE" />

        <rect x="33" y="43" width="4.5" height="5" rx="1" fill="#DBEAFE" />
        <rect x="40.5" y="43" width="4.5" height="5" rx="1" fill="#DBEAFE" />
        <rect x="48" y="43" width="4.5" height="5" rx="1" fill="#DBEAFE" />

        <rect
          x="60"
          y="34"
          width="20"
          height="31"
          rx="4"
          fill="url(#specialBldgRight)"
        />
        <rect x="65" y="41" width="4" height="4.5" rx="0.9" fill="#FFF2ED" />
        <rect x="72" y="41" width="4" height="4.5" rx="0.9" fill="#FFF2ED" />
        <rect x="65" y="50" width="4" height="4.5" rx="0.9" fill="#FFF2ED" />
        <rect x="72" y="50" width="4" height="4.5" rx="0.9" fill="#FFF2ED" />
      </svg>
    ),
  },
  {
    title: "Unexpected roaming",
    description:
      "Check what's included, what counts as usage and any roaming charges in your plan.",
    topBg: "bg-[#E2F4EC]",
    illustration: (
      <svg
        viewBox="0 0 100 80"
        className="h-16 w-20"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id="roamingGlobeGrad"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#14B8A6" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
        </defs>
        <ellipse cx="50" cy="70" rx="28" ry="3.5" fill="#C7E6D8" />
        <circle cx="49" cy="40" r="21" fill="url(#roamingGlobeGrad)" />
        <ellipse
          cx="49"
          cy="40"
          rx="9.5"
          ry="21"
          stroke="#CCFBF1"
          strokeWidth="1.8"
        />
        <line
          x1="28"
          y1="40"
          x2="70"
          y2="40"
          stroke="#CCFBF1"
          strokeWidth="1.8"
        />
        <rect
          x="69"
          y="19"
          width="11"
          height="5"
          rx="1.8"
          transform="rotate(-28 69 19)"
          fill="#FBBF24"
        />
      </svg>
    ),
  },
  {
    title: "Price changes",
    description:
      "For new UK contracts since 17 January 2025, in-contract rises must be shown in pounds and pence upfront. Older contracts may differ.",
    topBg: "bg-[#FDF1DF]",
    illustration: (
      <svg
        viewBox="0 0 100 80"
        className="h-16 w-20"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id="pricePercentGrad"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#FF7A59" />
            <stop offset="100%" stopColor="#EC1C7A" />
          </linearGradient>
        </defs>
        <ellipse cx="48" cy="70" rx="26" ry="3.5" fill="#EBDAC2" />
        <circle cx="47" cy="43" r="20" fill="url(#pricePercentGrad)" />
        <line
          x1="40"
          y1="50"
          x2="54"
          y2="36"
          stroke="#FFFFFF"
          strokeWidth="2.8"
          strokeLinecap="round"
        />
        <circle cx="41.2" cy="37.2" r="2.6" fill="#FFFFFF" />
        <circle cx="52.8" cy="48.8" r="2.6" fill="#FFFFFF" />
        <circle cx="72" cy="21" r="5.5" fill="#2563EB" />
      </svg>
    ),
  },
  {
    title: "Device vs airtime",
    description: "They may be separate agreements with different payees.",
    topBg: "bg-[#EFE6FC]",
    illustration: (
      <svg
        viewBox="0 0 100 80"
        className="h-16 w-20"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id="specialPhoneGrad"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#7C3AED" />
            <stop offset="100%" stopColor="#EC1C7A" />
          </linearGradient>
        </defs>
        <ellipse cx="52" cy="70" rx="28" ry="3.5" fill="#D8CDEF" />
        <rect x="49" y="13" width="24" height="49" rx="4.5" fill="#18133E" />
        <rect
          x="52"
          y="17"
          width="18"
          height="41"
          rx="2.5"
          fill="url(#specialPhoneGrad)"
        />
        <rect x="30" y="33" width="22" height="29" rx="3.5" fill="#FBBF24" />
        <line
          x1="35"
          y1="40"
          x2="47"
          y2="40"
          stroke="#FFFBEB"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="35"
          y1="45"
          x2="44"
          y2="45"
          stroke="#FFFBEB"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M41 52v5M38.5 54.5h5"
          stroke="#FFFBEB"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Cancelled services",
    description:
      "Final bills and any credits depend on your contract — ask us to explain.",
    topBg: "bg-[#FCECF4]",
    illustration: (
      <svg
        viewBox="0 0 100 80"
        className="h-16 w-20"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id="cancelledFlagGrad"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#EC1C7A" />
            <stop offset="100%" stopColor="#7C3AED" />
          </linearGradient>
        </defs>
        <ellipse cx="48" cy="70" rx="26" ry="3.5" fill="#EBD5E3" />
        <path
          d="M34 17h29l-6 9.5 6 9.5H34V17z"
          fill="url(#cancelledFlagGrad)"
        />
        <rect x="31.5" y="15" width="3.2" height="48" rx="1.6" fill="#18133E" />
        <circle cx="66" cy="49" r="9.5" fill="#10B981" />
        <rect x="65" y="44" width="2" height="6" rx="1" fill="#FFFFFF" />
        <circle cx="66" cy="53" r="1.2" fill="#FFFFFF" />
      </svg>
    ),
  },
];

export default function SpecialCasesSection() {
  return (
    <section
      id="special-cases"
      className="w-full bg-[#F5F6FB] px-4 py-14 text-[#18133E] antialiased sm:px-6 lg:py-20"
    >
      <div className="mx-auto w-full max-w-[1300px]">
        {/* Header */}
        <div className="text-center">
          <p className="text-[10.5px] font-extrabold uppercase tracking-[0.14em] text-[#5B5675]">
            Special cases
          </p>
          <h2 className="mt-2.5 text-[32px] font-extrabold leading-[1.15] tracking-[-0.025em] text-[#110C3A] sm:text-[42px]">
            Situations that need a closer look
          </h2>
        </div>

        {/* 5-Column Special Case Cards */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {specialCases.map((card) => (
            <div
              key={card.title}
              className="flex flex-col overflow-hidden rounded-2xl border border-[#ECEAF2] bg-white shadow-[0_2px_12px_rgba(17,12,58,0.03)]"
            >
              <div
                className={`flex h-[132px] w-full shrink-0 items-center justify-center ${card.topBg}`}
              >
                {card.illustration}
              </div>

              <div className="flex flex-1 flex-col p-4">
                <h3 className="text-[13px] font-extrabold text-[#110C3A]">
                  {card.title}
                </h3>
                <p className="mt-1.5 text-[11px] leading-[1.5] text-[#6E6A85]">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Dashed Notice Banner */}
        <div className="mt-6 rounded-2xl border border-dashed border-[#D6D2E6] bg-[#F5F4FA]/80 px-5 py-4">
          <div className="flex flex-col items-start gap-3.5 sm:flex-row sm:items-center">
            {/* Three Muted SVG Icon Tiles */}
            <div className="flex shrink-0 items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#EAE8F3] text-[#9A96AE]">
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.85"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M6 4h12v16l-2.5-1.8L13 20l-2.5-1.8L8 20l-2-1.5V4z" />
                  <path d="M9.5 9h5M9.5 13h3.5" />
                </svg>
              </span>

              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#EAE8F3] text-[#9A96AE]">
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.85"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
                  <path d="M3.5 10h17" />
                </svg>
              </span>

              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#EAE8F3] text-[#9A96AE]">
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.85"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="8.5" r="3" />
                  <path d="M6 19.5c1.1-3.2 3.5-5 6-5s4.9 1.8 6 5" />
                </svg>
              </span>
            </div>

            {/* Banner Copy */}
            <div>
              <h3 className="text-[12.5px] font-extrabold text-[#110C3A]">
                Online bills, payments and invoices aren&apos;t available yet
              </h3>
              <p className="mt-0.5 text-[11px] leading-[1.5] text-[#6E6A85]">
                There&apos;s no account sign-in, invoice download or online
                payment on this page. Contact us for a secure route.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
