const sectionContent = {
  step: "02",
  eyebrow: "KNOW THE DIFFERENCE",
  headingPrefix: "Connectivity vs ",
  headingAccent: "cloud",
  description:
    "Internet access, cloud interconnect and hosting are separate things — and often come from different suppliers.",
  footerBanner: "Managed network: who monitors and supports each part",
} as const;

export default function ConnectivityVsCloudSection() {
  return (
    <section
      id="connectivity-vs-cloud"
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

        {/* Diagram container */}
        <div className="mt-8 rounded-3xl border border-[#e6e8f4] bg-[linear-gradient(105deg,#f3f5fc_0%,#f7f4fc_55%,#f6f3fb_100%)] px-6 py-8 shadow-[0_8px_28px_rgba(15,23,42,0.03)] sm:px-10 sm:py-10">
          {/* Desktop SVG Topology Diagram */}
          <div className="hidden md:block">
            <svg
              className="mx-auto h-auto w-full max-w-[920px]"
              viewBox="0 0 920 275"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Diagram comparing Internet access to The internet versus Cloud interconnect private path to Cloud and hosting from Your sites"
            >
              <defs>
                <linearGradient
                  id="internetPathGrad"
                  x1="190"
                  y1="128"
                  x2="405"
                  y2="68"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>

                <linearGradient
                  id="cloudPathGrad"
                  x1="190"
                  y1="164"
                  x2="405"
                  y2="215"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0%" stopColor="#ec4899" />
                  <stop offset="100%" stopColor="#9333ea" />
                </linearGradient>
              </defs>

              {/* Top solid path: Your sites -> Internet access -> The internet */}
              <path
                d="M190 128 C275 128, 315 68, 405 68"
                stroke="url(#internetPathGrad)"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <line
                x1="565"
                y1="68"
                x2="700"
                y2="68"
                stroke="#3b82f6"
                strokeWidth="3"
                strokeLinecap="round"
              />

              {/* Bottom dashed path: Your sites -> Cloud interconnect -> Cloud & hosting */}
              <path
                d="M190 164 C275 164, 315 215, 405 215"
                stroke="url(#cloudPathGrad)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray="6 6"
              />
              <line
                x1="565"
                y1="215"
                x2="690"
                y2="215"
                stroke="#ec4899"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray="6 6"
              />

              {/* Left Node: Your sites */}
              <g>
                <rect
                  x="44"
                  y="90"
                  width="146"
                  height="112"
                  rx="16"
                  fill="#ffffff"
                  stroke="#e2e6f3"
                  strokeWidth="1.5"
                />
                <rect
                  x="78"
                  y="110"
                  width="32"
                  height="48"
                  rx="5"
                  fill="#3b82f6"
                />
                <rect
                  x="116"
                  y="124"
                  width="40"
                  height="34"
                  rx="5"
                  fill="#8b5cf6"
                />
                <text
                  x="117"
                  y="181"
                  textAnchor="middle"
                  fill="#0c1438"
                  fontSize="12"
                  fontWeight="800"
                >
                  Your sites
                </text>
              </g>

              {/* Center Top Pill: Internet access */}
              <g>
                <rect
                  x="405"
                  y="40"
                  width="160"
                  height="56"
                  rx="24"
                  fill="#e4eaf9"
                />
                <text
                  x="485"
                  y="64"
                  textAnchor="middle"
                  fill="#0c1438"
                  fontSize="12"
                  fontWeight="800"
                >
                  Internet access
                </text>
                <text
                  x="485"
                  y="80"
                  textAnchor="middle"
                  fill="#64748b"
                  fontSize="10"
                  fontWeight="500"
                >
                  broadband or dedicated
                </text>
              </g>

              {/* Center Bottom Pill: Cloud interconnect */}
              <g>
                <rect
                  x="405"
                  y="187"
                  width="160"
                  height="56"
                  rx="24"
                  fill="#fae3eb"
                />
                <text
                  x="485"
                  y="211"
                  textAnchor="middle"
                  fill="#0c1438"
                  fontSize="12"
                  fontWeight="800"
                >
                  Cloud interconnect
                </text>
                <text
                  x="485"
                  y="227"
                  textAnchor="middle"
                  fill="#64748b"
                  fontSize="10"
                  fontWeight="500"
                >
                  private path
                </text>
              </g>

              {/* Right Top Node: The internet */}
              <g>
                <circle
                  cx="758"
                  cy="68"
                  r="48"
                  fill="#ffffff"
                  stroke="#e2e6f3"
                  strokeWidth="1.5"
                />
                <circle
                  cx="758"
                  cy="68"
                  r="25"
                  stroke="#3b82f6"
                  strokeWidth="2"
                />
                <ellipse
                  cx="758"
                  cy="68"
                  rx="11"
                  ry="25"
                  stroke="#3b82f6"
                  strokeWidth="1.8"
                />
                <line
                  x1="733"
                  y1="68"
                  x2="783"
                  y2="68"
                  stroke="#3b82f6"
                  strokeWidth="1.8"
                />
                <text
                  x="758"
                  y="136"
                  textAnchor="middle"
                  fill="#0c1438"
                  fontSize="12"
                  fontWeight="800"
                >
                  The internet
                </text>
              </g>

              {/* Right Bottom Node: Cloud & hosting */}
              <g>
                <path
                  d="M716 238 H792 C804.5 238 814 228.5 814 216.5 C814 205.5 805.5 196.5 794.5 195.5 C790.5 182.5 778.5 173 764 173 C748 173 734.5 184.5 732 200 C730 199.5 728 199 725.5 199 C712.5 199 702 209 702 221.5 C702 231 708 238 716 238 Z"
                  fill="#f8f7fd"
                  stroke="#9333ea"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
                <text
                  x="758"
                  y="264"
                  textAnchor="middle"
                  fill="#0c1438"
                  fontSize="12"
                  fontWeight="800"
                >
                  Cloud &amp; hosting
                </text>
              </g>
            </svg>
          </div>

          {/* Mobile Responsive Stacked Topology Fallback */}
          <div className="space-y-4 md:hidden">
            <div className="flex flex-col items-center rounded-2xl border border-[#e2e6f3] bg-white p-4 text-center">
              <div className="flex items-end gap-1.5" aria-hidden="true">
                <span className="h-9 w-6 rounded bg-[#3b82f6]" />
                <span className="h-6 w-8 rounded bg-[#8b5cf6]" />
              </div>
              <p className="mt-2.5 text-[12.5px] font-extrabold text-[#0c1438]">
                Your sites
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-[#dbe4fb] bg-[#e9effd] p-4 text-center">
                <p className="text-[12.5px] font-extrabold text-[#0c1438]">
                  Internet access
                </p>
                <p className="mt-0.5 text-[11px] text-[#64748b]">
                  broadband or dedicated
                </p>
                <p className="mt-2 text-[11.5px] font-bold text-[#2563eb]">
                  → The internet
                </p>
              </div>

              <div className="rounded-2xl border border-dashed border-[#f3c6d8] bg-[#fce8f0] p-4 text-center">
                <p className="text-[12.5px] font-extrabold text-[#0c1438]">
                  Cloud interconnect
                </p>
                <p className="mt-0.5 text-[11px] text-[#64748b]">
                  private path
                </p>
                <p className="mt-2 text-[11.5px] font-bold text-[#9333ea]">
                  ⇢ Cloud &amp; hosting
                </p>
              </div>
            </div>
          </div>

          {/* Bottom green managed network callout pill */}
          <div className="mt-5 flex justify-center md:-mt-3 md:justify-start md:pl-[19%]">
            <span className="inline-flex items-center rounded-full bg-[#dcfce7] px-4 py-1 text-[11px] font-bold text-[#15803d]">
              {sectionContent.footerBanner}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
