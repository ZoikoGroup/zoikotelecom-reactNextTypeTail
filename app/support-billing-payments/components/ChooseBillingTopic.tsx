import Link from "next/link";

interface BillingTopic {
  title: string;
  href: string;
  backdropBg: string;
  illustration: React.ReactNode;
}

const billingTopics: BillingTopic[] = [
  {
    title: "Understand my charges",
    href: "#understand-my-charges",
    backdropBg: "bg-[#FCECF4]",
    illustration: (
      <svg
        viewBox="0 0 88 76"
        className="h-16 w-20"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="billHeaderGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#9333EA" />
            <stop offset="100%" stopColor="#EC1C7A" />
          </linearGradient>
          <linearGradient
            id="poundBadgeGrad"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#7C3AED" />
            <stop offset="100%" stopColor="#EC1C7A" />
          </linearGradient>
        </defs>
        {/* Ground shadow */}
        <ellipse cx="42" cy="66" rx="26" ry="3.5" fill="#EBD5E3" />
        {/* Zig-zag bottom receipt */}
        <path
          d="M23 14h34v45l-4.25-3-4.25 3-4.25-3-4.25 3-4.25-3-4.25 3-4.25-3-4.25 3V14z"
          fill="#FFFFFF"
          stroke="#E5E1EF"
          strokeWidth="1"
        />
        {/* Purple-pink top bar */}
        <rect
          x="29"
          y="21"
          width="17"
          height="3.5"
          rx="1.75"
          fill="url(#billHeaderGrad)"
        />
        {/* Grey line items */}
        <rect x="29" y="29" width="22" height="2.8" rx="1.4" fill="#D8D4E6" />
        <rect x="29" y="35" width="18" height="2.8" rx="1.4" fill="#E4E1EE" />
        {/* Emerald green total bar */}
        <rect x="29" y="44" width="22" height="4.5" rx="2.25" fill="#10B981" />
        {/* Floating £ badge */}
        <circle cx="59" cy="24" r="8" fill="url(#poundBadgeGrad)" />
        <text
          x="59"
          y="27.5"
          textAnchor="middle"
          fill="#FFFFFF"
          fontSize="10"
          fontWeight="800"
          fontFamily="sans-serif"
        >
          £
        </text>
      </svg>
    ),
  },
  {
    title: "Payment guidance",
    href: "#payment-guidance",
    backdropBg: "bg-[#ECEEFA]",
    illustration: (
      <svg
        viewBox="0 0 88 76"
        className="h-16 w-20"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="cardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#6D28D9" />
          </linearGradient>
        </defs>
        {/* Ground shadow */}
        <ellipse cx="44" cy="66" rx="27" ry="3.5" fill="#D9DDF0" />
        {/* Blue-violet payment card */}
        <rect
          x="16"
          y="22"
          width="46"
          height="30"
          rx="5"
          fill="url(#cardGrad)"
        />
        {/* Dark magnetic stripe */}
        <rect x="16" y="28" width="46" height="5" fill="#282369" />
        {/* Yellow chip */}
        <rect x="22" y="38" width="8" height="5.5" rx="1.5" fill="#FBBF24" />
        {/* White verified check badge */}
        <rect
          x="45"
          y="37"
          width="24"
          height="19"
          rx="4"
          fill="#FFFFFF"
          stroke="#CBD5E1"
          strokeWidth="1.2"
        />
        <path
          d="M52.5 46.5l3 3 6-6"
          stroke="#10B981"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Dates & due dates",
    href: "#dates-due-dates",
    backdropBg: "bg-[#E8F6F1]",
    illustration: (
      <svg
        viewBox="0 0 88 76"
        className="h-16 w-20"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="calTopGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#10B981" />
            <stop offset="100%" stopColor="#2563EB" />
          </linearGradient>
        </defs>
        {/* Ground shadow */}
        <ellipse cx="44" cy="66" rx="26" ry="3.5" fill="#D2E8E0" />
        {/* Calendar body */}
        <rect
          x="22"
          y="18"
          width="44"
          height="40"
          rx="6"
          fill="#FFFFFF"
          stroke="#DCE6E3"
          strokeWidth="1"
        />
        {/* Top gradient header */}
        <path
          d="M22 24a6 6 0 0 1 6-6h32a6 6 0 0 1 6 6v5H22v-5z"
          fill="url(#calTopGrad)"
        />
        {/* Binding rings */}
        <rect x="31" y="14" width="3.5" height="7" rx="1.75" fill="#18133E" />
        <rect x="53.5" y="14" width="3.5" height="7" rx="1.75" fill="#18133E" />
        {/* Date grid dots */}
        <rect x="29" y="34" width="4.5" height="4.5" rx="1" fill="#D5D2E4" />
        <rect x="37.5" y="34" width="4.5" height="4.5" rx="1" fill="#D5D2E4" />
        <rect x="46" y="34" width="4.5" height="4.5" rx="1" fill="#D5D2E4" />
        <rect x="54.5" y="34" width="4.5" height="4.5" rx="1" fill="#D5D2E4" />

        <rect x="29" y="42" width="4.5" height="4.5" rx="1" fill="#D5D2E4" />
        <rect x="37.5" y="42" width="4.5" height="4.5" rx="1" fill="#D5D2E4" />
        {/* Highlighted due date square */}
        <rect x="46" y="42" width="4.5" height="4.5" rx="1" fill="#EC1C7A" />
        <rect x="54.5" y="42" width="4.5" height="4.5" rx="1" fill="#D5D2E4" />

        <rect x="29" y="50" width="4.5" height="4.5" rx="1" fill="#E6E4F0" />
        <rect x="37.5" y="50" width="4.5" height="4.5" rx="1" fill="#E6E4F0" />
      </svg>
    ),
  },
  {
    title: "Dispute a charge",
    href: "#dispute-a-charge",
    backdropBg: "bg-[#FDF3E7]",
    illustration: (
      <svg
        viewBox="0 0 88 76"
        className="h-16 w-20"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="flagGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF7A59" />
            <stop offset="100%" stopColor="#EC1C7A" />
          </linearGradient>
        </defs>
        {/* Ground shadow */}
        <ellipse cx="44" cy="66" rx="26" ry="3.5" fill="#EFE0CE" />
        {/* Flag pennant */}
        <path d="M31 18h27l-5.5 8.5L58 35H31V18z" fill="url(#flagGrad)" />
        {/* Flagpole */}
        <rect x="29" y="16" width="3" height="44" rx="1.5" fill="#18133E" />
        {/* Blue exclamation badge */}
        <circle cx="59" cy="50" r="8.5" fill="#3B82F6" />
        <rect x="58" y="45" width="2" height="6" rx="1" fill="#FFFFFF" />
        <circle cx="59" cy="54" r="1.2" fill="#FFFFFF" />
      </svg>
    ),
  },
  {
    title: "Struggling to pay",
    href: "#struggling-to-pay",
    backdropBg: "bg-[#F5EEFC]",
    illustration: (
      <svg
        viewBox="0 0 88 76"
        className="h-16 w-20"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="heartGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7C3AED" />
            <stop offset="100%" stopColor="#EC1C7A" />
          </linearGradient>
        </defs>
        {/* Ground shadow */}
        <ellipse cx="44" cy="66" rx="25" ry="3.5" fill="#E3D7F2" />
        {/* Heart shape */}
        <path
          d="M44 57.5S25 45.2 25 31.2c0-6.2 4.8-11 10.8-11 3.6 0 6.8 1.8 8.2 4.5 1.4-2.7 4.6-4.5 8.2-4.5 6 0 10.8 4.8 10.8 11 0 14-19 26.3-19 26.3z"
          fill="url(#heartGrad)"
        />
        {/* White plus symbol */}
        <path
          d="M44 30v13M37.5 36.5h13"
          stroke="#FFFFFF"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Business billing",
    href: "#business-billing",
    backdropBg: "bg-[#EAF3FC]",
    illustration: (
      <svg
        viewBox="0 0 88 76"
        className="h-16 w-20"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="bldgMainGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#10B981" />
          </linearGradient>
        </defs>
        {/* Ground shadow */}
        <ellipse cx="44" cy="66" rx="27" ry="3.5" fill="#D6E4F2" />
        {/* Left tall building */}
        <rect
          x="23"
          y="16"
          width="25"
          height="44"
          rx="3"
          fill="url(#bldgMainGrad)"
        />
        {/* Windows on tall building */}
        <rect x="28" y="22" width="3.5" height="4" rx="0.8" fill="#DBEAFE" />
        <rect x="34" y="22" width="3.5" height="4" rx="0.8" fill="#DBEAFE" />
        <rect x="40" y="22" width="3.5" height="4" rx="0.8" fill="#DBEAFE" />

        <rect x="28" y="30" width="3.5" height="4" rx="0.8" fill="#DBEAFE" />
        <rect x="34" y="30" width="3.5" height="4" rx="0.8" fill="#DBEAFE" />
        <rect x="40" y="30" width="3.5" height="4" rx="0.8" fill="#DBEAFE" />

        <rect x="28" y="38" width="3.5" height="4" rx="0.8" fill="#DBEAFE" />
        <rect x="34" y="38" width="3.5" height="4" rx="0.8" fill="#DBEAFE" />
        <rect x="40" y="38" width="3.5" height="4" rx="0.8" fill="#DBEAFE" />

        <rect x="28" y="46" width="3.5" height="4" rx="0.8" fill="#DBEAFE" />
        <rect x="34" y="46" width="3.5" height="4" rx="0.8" fill="#DBEAFE" />
        <rect x="40" y="46" width="3.5" height="4" rx="0.8" fill="#DBEAFE" />

        {/* Right coral-orange building */}
        <rect x="50" y="32" width="17" height="28" rx="3" fill="#FF7A59" />
        <rect x="54" y="38" width="3.5" height="4" rx="0.8" fill="#FFF1EE" />
        <rect x="60" y="38" width="3.5" height="4" rx="0.8" fill="#FFF1EE" />
        <rect x="54" y="46" width="3.5" height="4" rx="0.8" fill="#FFF1EE" />
        <rect x="60" y="46" width="3.5" height="4" rx="0.8" fill="#FFF1EE" />
      </svg>
    ),
  },
];

export default function ChooseBillingTopic() {
  return (
    <section
      id="choose-billing-topic"
      className="w-full bg-white px-4 py-14 text-[#18133E] antialiased sm:px-6 lg:py-20"
    >
      <div className="mx-auto w-full max-w-[1300px]">
        {/* Header */}
        <div className="text-center">
          <p className="text-[10.5px] font-extrabold uppercase tracking-[0.14em] text-[#5B5675]">
            What do you need?
          </p>
          <h2 className="mt-2.5 text-[32px] font-extrabold leading-[1.15] tracking-[-0.025em] text-[#110C3A] sm:text-[42px]">
            Choose a billing topic
          </h2>
        </div>

        {/* 3x2 Topic Cards Grid */}
        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {billingTopics.map((topic) => (
            <Link
              key={topic.title}
              href={topic.href}
              className="group relative flex h-[136px] items-center overflow-hidden rounded-2xl border border-[#ECEAF2] bg-white shadow-[0_2px_10px_rgba(17,12,58,0.03)] transition-all hover:-translate-y-0.5 hover:border-[#DCD7EC] hover:shadow-[0_10px_24px_rgba(17,12,58,0.07)]"
            >
              {/* Left Curved Pastel Illustration Backdrop */}
              <div
                className={`relative flex h-full w-[138px] shrink-0 items-center justify-center rounded-r-[68px] ${topic.backdropBg} pr-2 transition-transform duration-300 group-hover:scale-[1.03]`}
              >
                {topic.illustration}
              </div>

              {/* Right Title & Action Link */}
              <div className="flex flex-1 flex-col justify-center px-5">
                <h3 className="text-[15.5px] font-extrabold leading-[1.25] text-[#110C3A]">
                  {topic.title}
                </h3>
                <span className="mt-2 inline-flex items-center gap-1 text-[11.5px] font-bold text-[#EC1C7A] transition-transform duration-200 group-hover:translate-x-0.5">
                  Go to section <span aria-hidden="true">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
