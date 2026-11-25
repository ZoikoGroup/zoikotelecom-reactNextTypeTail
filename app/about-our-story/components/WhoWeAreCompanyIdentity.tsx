import { ExternalLink } from "lucide-react";

export default function WhoWeAreCompanyIdentity() {
  return (
    <section
      id="who-we-are"
      className="w-full bg-[#FDFCFF] px-4 py-14 text-[#110C3A] antialiased sm:px-6 lg:py-20"
    >
      <div className="mx-auto grid w-full max-w-[1300px] grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_540px] lg:gap-12">
        {/* Left Column: Eyebrow, Heading & Left-Bordered Quote */}
        <div>
          <p className="flex items-center gap-2 text-[10.5px] font-extrabold uppercase tracking-[0.14em]">
            <span className="font-semibold italic text-[#E5A9C3]">01</span>
            <span className="text-[#A3367A]">Who we are</span>
          </p>

          <h2 className="mt-2.5 max-w-[540px] text-[34px] font-black leading-[1.12] tracking-[-0.025em] text-[#0B092E] sm:text-[42px]">
            A telecoms company{" "}
            <span className="text-[#9E2A76]">you can look up</span>
          </h2>

          <blockquote className="mt-7 max-w-[430px] border-l-[2.5px] border-[#EC1C7A] pl-4 text-[19px] font-semibold italic leading-[1.35] tracking-[-0.01em] text-[#0E0930] sm:text-[21px]">
            We&apos;d rather show you{" "}
            <span className="text-[#9E2A76]">where to check</span> than ask you
            to take our word for it.
          </blockquote>
        </div>

        {/* Right Column: Warm Cream Company Identity Card */}
        <div className="rounded-[22px] border border-[#F3ECE4] bg-[#FBF7F2] p-6 shadow-[0_8px_24px_rgba(17,12,58,0.035)] sm:p-8">
          <p className="text-[9.5px] font-extrabold uppercase tracking-[0.14em] text-[#8E6A7C]">
            Company identity
          </p>

          <h3 className="mt-2 text-[22px] font-black leading-snug tracking-[-0.02em] text-[#0B092E] sm:text-[24px]">
            Zoiko Telecom Ltd
          </h3>

          <p className="mt-2.5 max-w-[450px] text-[12px] leading-[1.6] text-[#6A657E]">
            Zoiko Telecom Ltd is the company identified in our published privacy
            policy. You can view the official company register for corporate
            information.
          </p>

          {/* Nested White Register Box */}
          <a
            href="https://find-and-update.company-information.service.gov.uk/company/15021457"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 flex flex-col justify-between gap-3 rounded-xl border border-[#EFE9E2] bg-white px-4 py-3.5 shadow-[0_2px_10px_rgba(17,12,58,0.025)] transition-colors hover:border-[#E2D6E6] sm:flex-row sm:items-center sm:px-5"
          >
            <div>
              <p className="text-[12.5px] font-extrabold text-[#0B092E]">
                Companies House
              </p>
              <p className="mt-0.5 text-[10.5px] text-[#7A758E]">
                Company number 15021457 · check current status on the register
              </p>
            </div>

            <span className="inline-flex shrink-0 items-center gap-1 text-[11px] font-bold text-[#9E2A76]">
              <span>View register</span>
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            </span>
          </a>

          <p className="mt-3.5 text-[10px] font-medium text-[#A67B38]">
            The register is the authoritative source — status can change, so
            always check it directly.
          </p>
        </div>
      </div>
    </section>
  );
}
