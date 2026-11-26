import Image from "next/image";
import Link from "next/link";

export default function ConnectingPeopleAndBusinesses() {
  return (
    <section
      id="what-we-offer"
      className="w-full bg-[#F5F6FB] px-4 py-14 text-[#110C3A] antialiased sm:px-6 lg:py-20"
    >
      <div className="mx-auto w-full max-w-[1300px]">
        {/* Section Header */}
        <div className="text-center">
          <p className="inline-flex items-center justify-center gap-2 text-[10.5px] font-extrabold uppercase tracking-[0.14em]">
            <span className="font-semibold italic text-[#E5A9C3]">02</span>
            <span className="text-[#A3367A]">What we offer</span>
          </p>

          <h2 className="mt-2.5 text-[34px] font-black leading-[1.12] tracking-[-0.025em] text-[#0B092E] sm:text-[42px]">
            Connecting{" "}
            <span className="font-extrabold text-[#9E2A76]">
              people and businesses
            </span>
          </h2>

          <p className="mt-2.5 text-[13px] text-[#5B5675]">
            Explore each service for current details, terms and availability.
          </p>
        </div>

        {/* Main Bento Grid: Left Featured Mobile Card + Right Stacked Broadband & Voice */}
        <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {/* No. 01: Mobile Featured Image Card */}
          <article className="group relative flex min-h-[300px] flex-col justify-end overflow-hidden rounded-[22px] bg-[#141126] p-7 text-white shadow-[0_10px_28px_rgba(17,12,58,0.08)] sm:min-h-[344px] sm:p-8">
            <Image
              src="/Images/story/4.png"
              alt="Smartphone screen displaying mobile apps and everyday connectivity"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-center transition-transform duration-300 group-hover:scale-[1.02]"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-[#0A0818]/90 via-[#0A0818]/45 to-[#0A0818]/10"
            />

            <div className="relative z-10">
              <p className="font-serif text-[12.5px] italic text-white/80">
                No. 01
              </p>
              <h3 className="mt-1 text-[28px] font-black leading-tight tracking-[-0.02em] text-white sm:text-[32px]">
                Mobile
              </h3>
              <p className="mt-1.5 text-[12.5px] text-white/80">
                Explore mobile plans for everyday life.
              </p>
              <Link
                href="/mobile"
                className="mt-4 inline-flex items-center text-[12px] font-bold text-white transition-colors hover:text-[#F9A8D4]"
              >
                Explore mobile plans
              </Link>
            </div>
          </article>

          {/* Right Column: No. 02 Broadband + No. 03 Voice */}
          <div className="flex flex-col justify-between gap-5">
            {/* No. 02: Broadband */}
            <article className="flex flex-1 flex-col overflow-hidden rounded-[22px] border border-[#ECEAF2] bg-white shadow-[0_6px_22px_rgba(17,12,58,0.035)] sm:flex-row">
              <div className="flex h-[132px] w-full shrink-0 items-center justify-center bg-[#E8F6EF] sm:h-auto sm:w-[190px]">
                <svg
                  viewBox="0 0 110 80"
                  className="h-16 w-24"
                  fill="none"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient
                      id="broadbandRouterGrad"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#10B981" />
                      <stop offset="100%" stopColor="#2563EB" />
                    </linearGradient>
                  </defs>
                  <ellipse cx="55" cy="70" rx="34" ry="4.5" fill="#CFEAE0" />

                  {/* Wi-Fi signal waves */}
                  <path
                    d="M44 26a15.5 15.5 0 0 1 22 0"
                    stroke="#F59E0B"
                    strokeWidth="3.2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M48.5 31.5a9.2 9.2 0 0 1 13 0"
                    stroke="#FBBF24"
                    strokeWidth="3.2"
                    strokeLinecap="round"
                  />

                  {/* Router chassis */}
                  <rect
                    x="25"
                    y="42"
                    width="60"
                    height="20"
                    rx="6"
                    fill="url(#broadbandRouterGrad)"
                  />
                  <circle cx="35" cy="52" r="2.2" fill="#A7F3D0" />
                  <circle cx="42" cy="52" r="2.2" fill="#A7F3D0" />
                  <circle
                    cx="74"
                    cy="52"
                    r="2.2"
                    fill="#FFFFFF"
                    opacity="0.8"
                  />
                </svg>
              </div>

              <div className="flex flex-1 flex-col justify-center px-6 py-5 sm:px-7">
                <p className="font-serif text-[12px] italic text-[#A3367A]">
                  No. 02
                </p>
                <h3 className="mt-1 text-[21px] font-black leading-snug tracking-[-0.015em] text-[#0B092E]">
                  Broadband
                </h3>
                <p className="mt-1 text-[12px] text-[#5B5675]">
                  Explore broadband options for your home.
                </p>
                <Link
                  href="/broadband"
                  className="mt-3.5 inline-flex w-fit items-center text-[11.5px] font-bold text-[#D91B78] transition-colors hover:text-[#b31261]"
                >
                  Explore broadband
                </Link>
              </div>
            </article>

            {/* No. 03: Voice */}
            <article className="flex flex-1 flex-col overflow-hidden rounded-[22px] border border-[#ECEAF2] bg-white shadow-[0_6px_22px_rgba(17,12,58,0.035)] sm:flex-row">
              <div className="flex h-[132px] w-full shrink-0 items-center justify-center bg-[#F1ECFC] sm:h-auto sm:w-[190px]">
                <svg
                  viewBox="0 0 110 80"
                  className="h-16 w-24"
                  fill="none"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient
                      id="voicePhoneGrad"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#7C3AED" />
                      <stop offset="100%" stopColor="#EC1C7A" />
                    </linearGradient>
                  </defs>
                  <ellipse cx="55" cy="70" rx="34" ry="4.5" fill="#DDD4F5" />

                  {/* Top handle arc */}
                  <path
                    d="M39 36v-4a16 16 0 0 1 32 0v4"
                    stroke="#6D28D9"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />

                  {/* Sound wave lines on right */}
                  <path
                    d="M82 37a11 11 0 0 1 0 18"
                    stroke="#F59E0B"
                    strokeWidth="2.8"
                    strokeLinecap="round"
                  />
                  <path
                    d="M87.5 32.5a17.5 17.5 0 0 1 0 27"
                    stroke="#FBBF24"
                    strokeWidth="2.8"
                    strokeLinecap="round"
                  />

                  {/* Phone base */}
                  <rect
                    x="32"
                    y="35"
                    width="46"
                    height="28"
                    rx="7"
                    fill="url(#voicePhoneGrad)"
                  />
                  {/* Keypad dots */}
                  <circle cx="46" cy="46" r="1.8" fill="#FFFFFF" />
                  <circle cx="53" cy="46" r="1.8" fill="#FFFFFF" />
                  <circle cx="60" cy="46" r="1.8" fill="#FFFFFF" />
                  <circle cx="46" cy="53" r="1.8" fill="#FFFFFF" />
                  <circle cx="53" cy="53" r="1.8" fill="#FFFFFF" />
                  <circle cx="60" cy="53" r="1.8" fill="#FFFFFF" />
                </svg>
              </div>

              <div className="flex flex-1 flex-col justify-center px-6 py-5 sm:px-7">
                <p className="font-serif text-[12px] italic text-[#A3367A]">
                  No. 03
                </p>
                <h3 className="mt-1 text-[21px] font-black leading-snug tracking-[-0.015em] text-[#0B092E]">
                  Voice
                </h3>
                <p className="mt-1 text-[12px] text-[#5B5675]">
                  Explore digital landlines and calling.
                </p>
                <Link
                  href="/voice"
                  className="mt-3.5 inline-flex w-fit items-center text-[11.5px] font-bold text-[#D91B78] transition-colors hover:text-[#b31261]"
                >
                  Explore digital landlines
                </Link>
              </div>
            </article>
          </div>
        </div>

        {/* Bottom Row: No. 04 Business + No. 05 IoT */}
        <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {/* No. 04: Business */}
          <article className="flex flex-col overflow-hidden rounded-[22px] border border-[#ECEAF2] bg-white shadow-[0_6px_22px_rgba(17,12,58,0.035)] sm:flex-row">
            <div className="flex h-[126px] w-full shrink-0 items-center justify-center bg-[#EEF1FC] sm:h-auto sm:w-[190px]">
              <svg
                viewBox="0 0 110 80"
                className="h-16 w-24"
                fill="none"
                aria-hidden="true"
              >
                <ellipse cx="55" cy="70" rx="34" ry="4.5" fill="#D8DFF6" />

                {/* Tall left building */}
                <rect
                  x="33"
                  y="20"
                  width="26"
                  height="44"
                  rx="3.5"
                  fill="#6366F1"
                />
                <rect
                  x="38"
                  y="26"
                  width="4"
                  height="4"
                  rx="1"
                  fill="#E0E7FF"
                />
                <rect
                  x="45"
                  y="26"
                  width="4"
                  height="4"
                  rx="1"
                  fill="#E0E7FF"
                />
                <rect
                  x="52"
                  y="26"
                  width="4"
                  height="4"
                  rx="1"
                  fill="#E0E7FF"
                />
                <rect
                  x="38"
                  y="34"
                  width="4"
                  height="4"
                  rx="1"
                  fill="#E0E7FF"
                />
                <rect
                  x="45"
                  y="34"
                  width="4"
                  height="4"
                  rx="1"
                  fill="#E0E7FF"
                />
                <rect
                  x="52"
                  y="34"
                  width="4"
                  height="4"
                  rx="1"
                  fill="#E0E7FF"
                />
                <rect
                  x="38"
                  y="42"
                  width="4"
                  height="4"
                  rx="1"
                  fill="#E0E7FF"
                />
                <rect
                  x="45"
                  y="42"
                  width="4"
                  height="4"
                  rx="1"
                  fill="#E0E7FF"
                />

                {/* Shorter right coral-orange building */}
                <rect
                  x="59"
                  y="34"
                  width="18"
                  height="30"
                  rx="3"
                  fill="#FF7A59"
                />
                <rect
                  x="63.5"
                  y="40"
                  width="3.5"
                  height="3.5"
                  rx="0.8"
                  fill="#FFF7ED"
                />
                <rect
                  x="70"
                  y="40"
                  width="3.5"
                  height="3.5"
                  rx="0.8"
                  fill="#FFF7ED"
                />
                <rect
                  x="63.5"
                  y="47"
                  width="3.5"
                  height="3.5"
                  rx="0.8"
                  fill="#FFF7ED"
                />
                <rect
                  x="70"
                  y="47"
                  width="3.5"
                  height="3.5"
                  rx="0.8"
                  fill="#FFF7ED"
                />
              </svg>
            </div>

            <div className="flex flex-1 flex-col justify-center px-6 py-5 sm:px-7">
              <p className="font-serif text-[12px] italic text-[#A3367A]">
                No. 04
              </p>
              <h3 className="mt-1 text-[21px] font-black leading-snug tracking-[-0.015em] text-[#0B092E]">
                Business
              </h3>
              <p className="mt-1 text-[12px] text-[#5B5675]">
                Explore connectivity for organisations.
              </p>
              <Link
                href="/business"
                className="mt-3.5 inline-flex w-fit items-center text-[11.5px] font-bold text-[#D91B78] transition-colors hover:text-[#b31261]"
              >
                Explore business connectivity
              </Link>
            </div>
          </article>

          {/* No. 05: IoT */}
          <article className="flex flex-col overflow-hidden rounded-[22px] border border-[#ECEAF2] bg-white shadow-[0_6px_22px_rgba(17,12,58,0.035)] sm:flex-row">
            <div className="flex h-[126px] w-full shrink-0 items-center justify-center bg-[#FDF1EA] sm:h-auto sm:w-[190px]">
              <svg
                viewBox="0 0 110 80"
                className="h-16 w-24"
                fill="none"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient
                    id="iotChipGrad"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#EC1C7A" />
                    <stop offset="100%" stopColor="#FF7A59" />
                  </linearGradient>
                </defs>
                <ellipse cx="55" cy="70" rx="34" ry="4.5" fill="#F5DFD3" />

                {/* Floating purple nodes */}
                <circle cx="31" cy="54" r="3.5" fill="#7C3AED" />
                <circle cx="77" cy="28" r="4.5" fill="#7C3AED" />

                {/* Chip pins */}
                <path
                  d="M44 21v6M55 21v6M66 21v6M44 53v6M55 53v6M66 53v6M33 32h6M33 40h6M33 48h6M71 32h6M71 40h6M71 48h6"
                  stroke="#475569"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                />

                {/* Chip body */}
                <rect
                  x="39"
                  y="27"
                  width="32"
                  height="26"
                  rx="5"
                  fill="url(#iotChipGrad)"
                />
                <rect
                  x="48"
                  y="33"
                  width="14"
                  height="14"
                  rx="2.5"
                  fill="#FFFFFF"
                  fillOpacity="0.28"
                />
              </svg>
            </div>

            <div className="flex flex-1 flex-col justify-center px-6 py-5 sm:px-7">
              <p className="font-serif text-[12px] italic text-[#A3367A]">
                No. 05
              </p>
              <h3 className="mt-1 text-[21px] font-black leading-snug tracking-[-0.015em] text-[#0B092E]">
                IoT
              </h3>
              <p className="mt-1 text-[12px] text-[#5B5675]">
                Discuss your connected-device requirements.
              </p>
              <Link
                href="/iot"
                className="mt-3.5 inline-flex w-fit items-center text-[11.5px] font-bold text-[#D91B78] transition-colors hover:text-[#b31261]"
              >
                Discuss IoT needs
              </Link>
            </div>
          </article>
        </div>

        {/* Bottom Disclaimer */}
        <p className="mt-7 text-[10.5px] text-[#8A869E]">
          Availability, terms and features depend on each service. No coverage,
          uptime or customer number claims are made on this page.
        </p>
      </div>
    </section>
  );
}
