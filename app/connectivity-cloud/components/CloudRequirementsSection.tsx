const sectionContent = {
  step: "04",
  eyebrow: "CLOUD REQUIREMENTS",
  headingPrefix: "Questions worth ",
  headingAccent: "answering first",
  description:
    "We ask what you need. These answers don’t imply any current Zoiko hosting region or certification.",
} as const;

type RequirementIconKey = "residency" | "backup" | "security" | "ownership";

const requirementCards: ReadonlyArray<{
  key: RequirementIconKey;
  title: string;
  description: string;
  tag: string;
}> = [
  {
    key: "residency",
    title: "Data residency",
    description:
      "Where would you prefer data to be held? We record a preference — not a confirmed location.",
    tag: "Your requirement",
  },
  {
    key: "backup",
    title: "Backup & recovery",
    description:
      "What recovery point and time do you need? These are your desired outcomes, not commitments.",
    tag: "Your requirement",
  },
  {
    key: "security",
    title: "Security requirements",
    description:
      "Tell us what you need. We won’t name certifications without approved, dated evidence.",
    tag: "Your requirement",
  },
  {
    key: "ownership",
    title: "Who does what",
    description:
      "A proposal should set out supplier, operator and data-processing responsibilities.",
    tag: "Your requirement",
  },
];

function RequirementIllustration({ type }: { type: RequirementIconKey }) {
  switch (type) {
    case "residency":
      return (
        <svg
          className="h-12 w-16"
          viewBox="0 0 64 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <ellipse cx="32" cy="43.5" rx="16" ry="2.2" fill="#e2e8f0" />
          <path
            d="M16 14C24.5 7 39.5 7 48 14"
            stroke="#f59e0b"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="2.5 3.5"
          />
          <circle cx="15" cy="14.5" r="2.6" fill="#f59e0b" />
          <circle cx="49" cy="14.5" r="2.6" fill="#f59e0b" />
          <circle cx="32" cy="26" r="13" fill="url(#residencyGlobeGrad)" />
          <ellipse
            cx="32"
            cy="26"
            rx="5.5"
            ry="13"
            stroke="#c7d2fe"
            strokeWidth="1.2"
          />
          <line
            x1="19"
            y1="26"
            x2="45"
            y2="26"
            stroke="#c7d2fe"
            strokeWidth="1.2"
          />
          <defs>
            <linearGradient
              id="residencyGlobeGrad"
              x1="19"
              y1="13"
              x2="45"
              y2="39"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#818cf8" />
              <stop offset="100%" stopColor="#4f46e5" />
            </linearGradient>
          </defs>
        </svg>
      );

    case "backup":
      return (
        <svg
          className="h-12 w-16"
          viewBox="0 0 64 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <ellipse cx="32" cy="43.5" rx="16" ry="2.2" fill="#e2e8f0" />
          <line
            x1="32"
            y1="4"
            x2="32"
            y2="8"
            stroke="#f59e0b"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="18"
            y1="10"
            x2="21"
            y2="13"
            stroke="#f59e0b"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="46"
            y1="10"
            x2="43"
            y2="13"
            stroke="#f59e0b"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="13"
            y1="22"
            x2="17"
            y2="22"
            stroke="#f59e0b"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="47"
            y1="22"
            x2="51"
            y2="22"
            stroke="#f59e0b"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M32 10C25.37 10 20 15.37 20 22C20 26.25 22.21 29.99 25.55 32.12C26.4 32.66 26.9 33.6 26.9 34.61V35.5H37.1V34.61C37.1 33.6 37.6 32.66 38.45 32.12C41.79 29.99 44 26.25 44 22C44 15.37 38.63 10 32 10Z"
            fill="url(#backupBulbGrad)"
          />
          <path
            d="M28.5 22.2L31 24.7L36 19.7"
            stroke="#ffffff"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <rect
            x="27.5"
            y="37"
            width="9"
            height="2.2"
            rx="1.1"
            fill="#475569"
          />
          <rect x="29" y="40" width="6" height="2" rx="1" fill="#94a3b8" />
          <defs>
            <linearGradient
              id="backupBulbGrad"
              x1="20"
              y1="10"
              x2="44"
              y2="36"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#7c3aed" />
              <stop offset="100%" stopColor="#db2777" />
            </linearGradient>
          </defs>
        </svg>
      );

    case "security":
      return (
        <svg
          className="h-12 w-16"
          viewBox="0 0 64 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <ellipse cx="32" cy="43.5" rx="16" ry="2.2" fill="#e2e8f0" />
          <rect
            x="14"
            y="12"
            width="34"
            height="24"
            rx="4"
            fill="#f8f9fd"
            stroke="#e2e8f0"
            strokeWidth="1.5"
          />
          <circle cx="23" cy="22" r="4.5" fill="#db2777" />
          <circle cx="23" cy="20.6" r="1.5" fill="#ffffff" />
          <path
            d="M20.2 24.4C20.8 23.2 21.8 22.6 23 22.6C24.2 22.6 25.2 23.2 25.8 24.4"
            stroke="#ffffff"
            strokeWidth="1.3"
            strokeLinecap="round"
          />
          <rect
            x="31"
            y="18.5"
            width="11"
            height="2.2"
            rx="1.1"
            fill="#cbd5e1"
          />
          <rect
            x="31"
            y="22.5"
            width="8"
            height="2.2"
            rx="1.1"
            fill="#e2e8f0"
          />
          <rect x="31" y="27.5" width="11" height="4" rx="2" fill="#f59e0b" />
          <circle cx="48" cy="12" r="5.5" fill="#7c3aed" />
          <rect
            x="45.8"
            y="11.5"
            width="4.4"
            height="3.5"
            rx="0.8"
            fill="#ffffff"
          />
          <path
            d="M46.7 11.5V10.4C46.7 9.7 47.3 9.1 48 9.1C48.7 9.1 49.3 9.7 49.3 10.4V11.5"
            stroke="#ffffff"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>
      );

    case "ownership":
      return (
        <svg
          className="h-12 w-16"
          viewBox="0 0 64 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <ellipse cx="32" cy="43.5" rx="16" ry="2.2" fill="#e2e8f0" />
          <path
            d="M32 7.5C30.8 6.3 28.9 6.3 27.8 7.5C26.7 8.7 26.8 10.6 28 11.7L32 15.2L36 11.7C37.2 10.6 37.3 8.7 36.2 7.5C35.1 6.3 33.2 6.3 32 7.5Z"
            fill="#e11d74"
          />
          <circle cx="25.5" cy="19.5" r="5.2" fill="url(#ownerLeftGrad)" />
          <path
            d="M16 37C16 31.8 20.2 28 25.5 28C30.8 28 35 31.8 35 37V39H16V37Z"
            fill="url(#ownerLeftGrad)"
          />
          <circle cx="39.5" cy="21.5" r="4.4" fill="#fbbf24" />
          <path
            d="M32.5 39V37.2C32.5 33.1 35.6 30 39.5 30C43.4 30 46.5 33.1 46.5 37.2V39H32.5Z"
            fill="#f59e0b"
          />
          <defs>
            <linearGradient
              id="ownerLeftGrad"
              x1="16"
              y1="14"
              x2="35"
              y2="39"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#0ea5e9" />
              <stop offset="100%" stopColor="#0d9488" />
            </linearGradient>
          </defs>
        </svg>
      );
  }
}

export default function CloudRequirementsSection() {
  return (
    <section
      id="cloud-requirements"
      className="w-full bg-[#f5f6fb] px-4 py-14 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-[1120px]">
        {/* Centered section header */}
        <div className="mx-auto max-w-[650px] text-center">
          <p className="flex items-center justify-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em]">
            <span className="italic text-[#e093b9]">{sectionContent.step}</span>
            <span className="text-[#9d175d]">{sectionContent.eyebrow}</span>
          </p>

          <h2 className="mt-2.5 text-3xl font-extrabold tracking-[-0.025em] text-[#0c1438] sm:text-[36px]">
            {sectionContent.headingPrefix}
            <span className="text-[#b81d78]">
              {sectionContent.headingAccent}
            </span>
          </h2>

          <p className="mt-2 text-[13.5px] leading-[1.6] text-[#4b5563] sm:text-sm">
            {sectionContent.description}
          </p>
        </div>

        {/* Four requirement cards */}
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {requirementCards.map((card) => (
            <article
              key={card.title}
              className="flex flex-col justify-between rounded-2xl border border-[#eaecf4] bg-white p-6 shadow-[0_8px_24px_rgba(15,23,42,0.04)]"
            >
              <div>
                <div className="flex justify-center">
                  <RequirementIllustration type={card.key} />
                </div>

                <h3 className="mt-5 text-[15.5px] font-bold leading-snug text-[#0c1438]">
                  {card.title}
                </h3>

                <p className="mt-2 text-[12px] leading-[1.58] text-[#4b5563]">
                  {card.description}
                </p>
              </div>

              <p className="mt-5 text-[11.5px] font-bold text-[#9d175d]">
                {card.tag}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
