"use client";

export default function HelpCentreLimits() {
  const unavailableActions = [
    {
      title: "Sign in to an account",
      description: "There's no online account sign-in yet.",
      icon: (
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
          <circle cx="12" cy="8.5" r="3.2" />
          <path d="M5.5 19.5c1.2-3.4 3.7-5.3 6.5-5.3s5.3 1.9 6.5 5.3" />
        </svg>
      ),
    },
    {
      title: "Take or change payments",
      description: "We never ask for card details on public pages.",
      icon: (
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
          <path d="M7 15h4" />
        </svg>
      ),
    },
    {
      title: "Change your services",
      description:
        "Adding, swapping or pausing services is done with our team.",
      icon: (
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
          <path d="M8 7h8M13.5 4.5 16 7l-2.5 2.5" />
          <path d="M16 17H8M10.5 14.5 8 17l2.5 2.5" />
        </svg>
      ),
    },
    {
      title: "Track a case",
      description: "There's no case tracker or ticket number online.",
      icon: (
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
          <path d="M6 4v16" />
          <path d="M6 5h11l-2.5 4L17 13H6" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="what-this-help-centre-cant-do"
      className="w-full bg-[#FFFFFF] px-4 py-14 text-[#18133E] antialiased sm:px-6 lg:py-20"
    >
      <div className="mx-auto w-full max-w-[1300px]">
        {/* Header */}
        <div className="text-center">
          <p className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#6E6A85]">
            What this help centre can&apos;t do
          </p>
          <h2 className="mt-2.5 text-[32px] font-extrabold leading-[1.15] tracking-[-0.025em] text-[#18133E] sm:text-[42px]">
            Some things need our team
          </h2>
          <p className="mx-auto mt-2.5 max-w-[540px] text-[13px] leading-[1.55] text-[#7A7691]">
            These actions aren&apos;t available online yet — we&apos;ll help you
            through a secure route instead.
          </p>
        </div>

        {/* Top Row: 4 "Not Online Yet" Action Cards */}
        <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {unavailableActions.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-[#ECEAF2] bg-white p-5 shadow-[0_2px_10px_rgba(24,19,62,0.025)]"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#F1EFF8] text-[#7A7691]">
                  {item.icon}
                </span>
                <span className="rounded bg-[#ECEAF5] px-2 py-1 text-[8.5px] font-extrabold uppercase tracking-[0.08em] text-[#6E6A85]">
                  Not online yet
                </span>
              </div>

              <h3 className="mt-4 text-[13.5px] font-extrabold text-[#18133E]">
                {item.title}
              </h3>
              <p className="mt-1.5 text-[11.5px] leading-[1.5] text-[#7A7691]">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Row: 3 Illustrated Comparison Cards */}
        <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-3">
          {/* Card 1: Handset vs airtime */}
          <div className="overflow-hidden rounded-xl border border-[#ECEAF2] bg-white shadow-[0_2px_12px_rgba(24,19,62,0.03)]">
            <div className="flex h-[175px] w-full items-center justify-center bg-[#EBE2FA] px-6">
              <svg
                viewBox="0 0 220 130"
                className="h-full max-h-[126px] w-auto"
                fill="none"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient
                    id="phoneScreenGrad"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#5B21B6" />
                    <stop offset="55%" stopColor="#EC1C7A" />
                    <stop offset="100%" stopColor="#FF7A59" />
                  </linearGradient>
                </defs>
                {/* Ground shadow */}
                <ellipse cx="115" cy="116" rx="54" ry="6" fill="#D5C6F0" />
                {/* Phone frame */}
                <rect
                  x="94"
                  y="14"
                  width="54"
                  height="98"
                  rx="8"
                  fill="#18133E"
                />
                <rect
                  x="98"
                  y="20"
                  width="46"
                  height="86"
                  rx="5"
                  fill="url(#phoneScreenGrad)"
                />
                {/* Left airtime/plan card */}
                <rect
                  x="64"
                  y="56"
                  width="44"
                  height="54"
                  rx="6"
                  fill="#FBBF24"
                />
                <line
                  x1="73"
                  y1="68"
                  x2="99"
                  y2="68"
                  stroke="#FFFBEB"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <line
                  x1="73"
                  y1="77"
                  x2="93"
                  y2="77"
                  stroke="#FFFBEB"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M86 92v8M82 96h8"
                  stroke="#FFFBEB"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className="px-5 py-4">
              <h3 className="text-[13.5px] font-extrabold text-[#18133E]">
                Handset vs airtime
              </h3>
              <p className="mt-1 text-[11.5px] leading-[1.5] text-[#7A7691]">
                Your phone and your mobile plan can be separate agreements.
              </p>
            </div>
          </div>

          {/* Card 2: Landline vs mobile */}
          <div className="overflow-hidden rounded-xl border border-[#ECEAF2] bg-white shadow-[0_2px_12px_rgba(24,19,62,0.03)]">
            <div className="flex h-[175px] w-full items-center justify-center bg-[#E1F3EC] px-6">
              <svg
                viewBox="0 0 220 130"
                className="h-full max-h-[126px] w-auto"
                fill="none"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient
                    id="routerBodyGrad"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#0D9488" />
                    <stop offset="55%" stopColor="#2563EB" />
                    <stop offset="100%" stopColor="#3B82F6" />
                  </linearGradient>
                </defs>
                {/* Ground shadow */}
                <ellipse cx="110" cy="116" rx="58" ry="6" fill="#C4E5D8" />
                {/* Wi-Fi signal waves above router */}
                <path
                  d="M86 44a34 34 0 0 1 48 0"
                  stroke="#F59E0B"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
                <path
                  d="M94 52a22 22 0 0 1 32 0"
                  stroke="#FBBF24"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
                <path
                  d="M102 60a11 11 0 0 1 16 0"
                  stroke="#FDE047"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
                {/* Antennas */}
                <rect
                  x="74"
                  y="56"
                  width="5"
                  height="22"
                  rx="2.5"
                  fill="#1E293B"
                />
                <rect
                  x="141"
                  y="56"
                  width="5"
                  height="22"
                  rx="2.5"
                  fill="#1E293B"
                />
                {/* Router base */}
                <rect
                  x="60"
                  y="76"
                  width="100"
                  height="32"
                  rx="7"
                  fill="url(#routerBodyGrad)"
                />
                {/* Status LEDs */}
                <circle cx="77" cy="92" r="3.5" fill="#6EE7B7" />
                <circle cx="90" cy="92" r="3.5" fill="#BAE6FD" />
              </svg>
            </div>
            <div className="px-5 py-4">
              <h3 className="text-[13.5px] font-extrabold text-[#18133E]">
                Landline vs mobile
              </h3>
              <p className="mt-1 text-[11.5px] leading-[1.5] text-[#7A7691]">
                Different services, different help topics.
              </p>
            </div>
          </div>

          {/* Card 3: Consumer vs business */}
          <div className="overflow-hidden rounded-xl border border-[#ECEAF2] bg-white shadow-[0_2px_12px_rgba(24,19,62,0.03)]">
            <div className="flex h-[175px] w-full items-center justify-center bg-[#E4E9FB] px-6">
              <svg
                viewBox="0 0 220 130"
                className="h-full max-h-[126px] w-auto"
                fill="none"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient
                    id="towerGrad"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="100%" stopColor="#7C3AED" />
                  </linearGradient>
                  <linearGradient
                    id="sideBuildingGrad"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#FF7A59" />
                    <stop offset="100%" stopColor="#EC1C7A" />
                  </linearGradient>
                </defs>
                {/* Ground shadow */}
                <ellipse cx="112" cy="116" rx="54" ry="6" fill="#C9D2F2" />
                {/* Tall building */}
                <rect
                  x="76"
                  y="24"
                  width="52"
                  height="86"
                  rx="6"
                  fill="url(#towerGrad)"
                />
                {/* Windows on tall building */}
                <rect
                  x="86"
                  y="36"
                  width="7"
                  height="8"
                  rx="1.5"
                  fill="#C7D2FE"
                />
                <rect
                  x="99"
                  y="36"
                  width="7"
                  height="8"
                  rx="1.5"
                  fill="#C7D2FE"
                />
                <rect
                  x="112"
                  y="36"
                  width="7"
                  height="8"
                  rx="1.5"
                  fill="#C7D2FE"
                />

                <rect
                  x="86"
                  y="52"
                  width="7"
                  height="8"
                  rx="1.5"
                  fill="#C7D2FE"
                />
                <rect
                  x="99"
                  y="52"
                  width="7"
                  height="8"
                  rx="1.5"
                  fill="#C7D2FE"
                />
                <rect
                  x="112"
                  y="52"
                  width="7"
                  height="8"
                  rx="1.5"
                  fill="#C7D2FE"
                />

                <rect
                  x="86"
                  y="68"
                  width="7"
                  height="8"
                  rx="1.5"
                  fill="#C7D2FE"
                />
                <rect
                  x="99"
                  y="68"
                  width="7"
                  height="8"
                  rx="1.5"
                  fill="#C7D2FE"
                />
                <rect
                  x="112"
                  y="68"
                  width="7"
                  height="8"
                  rx="1.5"
                  fill="#C7D2FE"
                />

                {/* Shorter adjacent building */}
                <rect
                  x="130"
                  y="54"
                  width="34"
                  height="56"
                  rx="6"
                  fill="url(#sideBuildingGrad)"
                />
                <rect
                  x="138"
                  y="65"
                  width="6"
                  height="7"
                  rx="1.5"
                  fill="#FFE4E6"
                />
                <rect
                  x="150"
                  y="65"
                  width="6"
                  height="7"
                  rx="1.5"
                  fill="#FFE4E6"
                />
                <rect
                  x="138"
                  y="80"
                  width="6"
                  height="7"
                  rx="1.5"
                  fill="#FFE4E6"
                />
                <rect
                  x="150"
                  y="80"
                  width="6"
                  height="7"
                  rx="1.5"
                  fill="#FFE4E6"
                />
              </svg>
            </div>
            <div className="px-5 py-4">
              <h3 className="text-[13.5px] font-extrabold text-[#18133E]">
                Consumer vs business
              </h3>
              <p className="mt-1 text-[11.5px] leading-[1.5] text-[#7A7691]">
                Business agreements can have their own own terms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
