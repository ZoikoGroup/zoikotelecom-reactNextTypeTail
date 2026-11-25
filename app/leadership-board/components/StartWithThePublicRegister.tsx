import { ExternalLink } from "lucide-react";

export default function StartWithThePublicRegister() {
  return (
    <section
      id="official-records"
      className="w-full bg-[#FFFFF] px-4 py-14 text-[#110C3A] antialiased sm:px-6 lg:py-20"
    >
      <div className="mx-auto w-full max-w-[1300px]">
        {/* Centered Section Header */}
        <div className="text-center">
          <p className="inline-flex items-center justify-center gap-2 text-[10.5px] font-extrabold uppercase tracking-[0.14em]">
            <span className="font-semibold italic text-[#E5A9C3]">01</span>
            <span className="text-[#A3367A]">Official records</span>
          </p>

          <h2 className="mt-2.5 text-[34px] font-black leading-[1.12] tracking-[-0.025em] text-[#0B092E] sm:text-[42px]">
            Start with{" "}
            <span className="font-extrabold text-[#9E2A76]">
              the public register
            </span>
          </h2>

          <p className="mx-auto mt-2.5 max-w-[540px] text-[13px] leading-[1.6] text-[#5B5675]">
            Statutory director appointments are recorded at Companies House. The
            register is a public source of filed information.
          </p>
        </div>

        {/* Two Split Register Cards */}
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Card 1: Company Overview */}
          <a
            href="https://find-and-update.company-information.service.gov.uk/company/15021457"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col overflow-hidden rounded-[22px] border border-[#ECEAF2] bg-white shadow-[0_8px_24px_rgba(17,12,58,0.04)] transition-shadow hover:shadow-[0_12px_30px_rgba(17,12,58,0.07)] sm:flex-row"
          >
            {/* Left Soft Periwinkle Icon Panel */}
            <div className="flex h-[112px] w-full shrink-0 items-center justify-center bg-[#EEF2FC] sm:h-auto sm:w-[152px]">
              <svg
                viewBox="0 0 48 48"
                className="h-7 w-7 text-[#2563EB]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.1"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="6" y="10" width="36" height="28" rx="4" />
                <circle cx="17.5" cy="21.5" r="3.5" />
                <path d="M12 31.5c1.3-3.2 3.4-4.8 5.5-4.8s4.2 1.6 5.5 4.8" />
                <line x1="27.5" y1="20" x2="36" y2="20" />
                <line x1="27.5" y1="26.5" x2="34" y2="26.5" />
              </svg>
            </div>

            {/* Right Card Copy */}
            <div className="flex flex-1 flex-col justify-center px-6 py-5 sm:px-7 sm:py-6">
              <p className="text-[9.5px] font-extrabold uppercase tracking-[0.14em] text-[#7A7593]">
                Company overview
              </p>

              <h3 className="mt-1.5 inline-flex items-center gap-1.5 text-[20px] font-black leading-snug tracking-[-0.015em] text-[#0B092E]">
                <span>Zoiko Telecom Ltd</span>
                <ExternalLink
                  className="h-3.5 w-3.5 text-[#9E2A76] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </h3>

              <p className="mt-1.5 text-[12px] leading-[1.55] text-[#5B5675]">
                Company number 15021457 — check the current status, filings and
                registered details.
              </p>
            </div>
          </a>

          {/* Card 2: Officers */}
          <a
            href="https://find-and-update.company-information.service.gov.uk/company/15021457/officers"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col overflow-hidden rounded-[22px] border border-[#ECEAF2] bg-white shadow-[0_8px_24px_rgba(17,12,58,0.04)] transition-shadow hover:shadow-[0_12px_30px_rgba(17,12,58,0.07)] sm:flex-row"
          >
            {/* Left Soft Rose-Blush Icon Panel */}
            <div className="flex h-[112px] w-full shrink-0 items-center justify-center bg-[#FCEEF5] sm:h-auto sm:w-[152px]">
              <svg
                viewBox="0 0 48 48"
                className="h-7 w-7 text-[#B02472]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.1"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="19" cy="18.5" r="4.5" />
                <path d="M10.5 33.5c1.5-4.4 4.8-6.8 8.5-6.8s7 2.4 8.5 6.8" />
                <path d="M28.5 14.5a4.2 4.2 0 0 1 0 8.2" />
                <path d="M31.5 27.2c2.8 1 4.9 3.2 6 6.3" />
              </svg>
            </div>

            {/* Right Card Copy */}
            <div className="flex flex-1 flex-col justify-center px-6 py-5 sm:px-7 sm:py-6">
              <p className="text-[9.5px] font-extrabold uppercase tracking-[0.14em] text-[#8E6A7C]">
                Officers
              </p>

              <h3 className="mt-1.5 inline-flex items-center gap-1.5 text-[20px] font-black leading-snug tracking-[-0.015em] text-[#0B092E]">
                <span>Directors on the register</span>
                <ExternalLink
                  className="h-3.5 w-3.5 text-[#9E2A76] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </h3>

              <p className="mt-1.5 text-[12px] leading-[1.55] text-[#5B5675]">
                See filed director appointments and resignations, directly from
                the source.
              </p>
            </div>
          </a>
        </div>

        {/* Bottom Italic Disclaimer */}
        <p className="mt-7 text-center text-[11px] italic text-[#7A758E]">
          The register records filed information. It isn&apos;t an assurance of
          trading activity or service quality, and records can lag recent
          changes.
        </p>
      </div>
    </section>
  );
}
