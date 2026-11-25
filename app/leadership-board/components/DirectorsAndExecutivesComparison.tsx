import { Check } from "lucide-react";

const statutoryPoints = [
  "Filed on the public register",
  "Legal duties to the company",
  "May or may not hold a job title",
];

const executivePoints = [
  "Set by the organisation",
  "Published only when confirmed",
  "One person can hold both",
];

export default function DirectorsAndExecutivesComparison() {
  return (
    <section
      id="directors-and-executives"
      className="w-full bg-[#F5F6FB] px-4 py-14 text-[#110C3A] antialiased sm:px-6 lg:py-20"
    >
      <div className="mx-auto w-full max-w-[1300px]">
        {/* Section Eyebrow & Heading */}
        <div>
          <p className="flex items-center gap-2 text-[10.5px] font-extrabold uppercase tracking-[0.14em]">
            <span className="font-semibold italic text-[#E5A9C3]">02</span>
            <span className="text-[#A3367A]">Good to know</span>
          </p>

          <h2 className="mt-2.5 text-[34px] font-black leading-[1.12] tracking-[-0.025em] text-[#0B092E] sm:text-[42px]">
            Directors and executives{" "}
            <span className="font-extrabold text-[#9E2A76]">
              aren&apos;t the same
            </span>
          </h2>
        </div>

        {/* Comparison Grid with Center "Not Equal" Symbol */}
        <div className="relative mt-9 grid grid-cols-1 items-stretch gap-5 lg:grid-cols-[1fr_auto_1fr] lg:gap-4">
          {/* Left Card: Statutory Directors (Dark Navy) */}
          <article className="flex flex-col justify-between rounded-[22px] bg-[#060B24] p-7 text-white shadow-[0_12px_30px_rgba(6,11,36,0.12)] sm:p-9">
            <div>
              <p className="text-[9.5px] font-extrabold uppercase tracking-[0.15em] text-[#7E94D8]">
                Board
              </p>

              <h3 className="mt-2 text-[24px] font-black leading-snug tracking-[-0.02em] text-white sm:text-[26px]">
                Statutory directors
              </h3>

              <p className="mt-3 max-w-[460px] text-[12.5px] leading-[1.6] text-white/75 sm:text-[13px]">
                Appointed under company law and recorded at Companies House. A
                company can also be a director.
              </p>

              <ul className="mt-6 space-y-3">
                {statutoryPoints.map((point) => (
                  <li
                    key={point}
                    className="flex items-center gap-3 text-[12.5px] text-white/90 sm:text-[13px]"
                  >
                    <Check
                      className="h-4 w-4 shrink-0 text-[#EC1C7A]"
                      strokeWidth={2.4}
                      aria-hidden="true"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>

          {/* Center "≠" Divider Badge */}
          <div className="flex items-center justify-center py-0.5 lg:px-2">
            <span
              aria-label="Not equal"
              className="select-none text-[20px] font-black leading-none text-[#9E2A76]"
            >
              ≠
            </span>
          </div>

          {/* Right Card: Executive Roles (Clean White) */}
          <article className="flex flex-col justify-between rounded-[22px] border border-[#ECEAF2] bg-white p-7 text-[#110C3A] shadow-[0_8px_24px_rgba(17,12,58,0.04)] sm:p-9">
            <div>
              <p className="text-[9.5px] font-extrabold uppercase tracking-[0.15em] text-[#A3367A]">
                Leadership
              </p>

              <h3 className="mt-2 text-[24px] font-black leading-snug tracking-[-0.02em] text-[#0B092E] sm:text-[26px]">
                Executive roles
              </h3>

              <p className="mt-3 max-w-[460px] text-[12.5px] leading-[1.6] text-[#5B5675] sm:text-[13px]">
                Job titles such as chief executive. These are shown here only
                once approved — they aren&apos;t implied by the register.
              </p>

              <ul className="mt-6 space-y-3">
                {executivePoints.map((point) => (
                  <li
                    key={point}
                    className="flex items-center gap-3 text-[12.5px] text-[#3E3A54] sm:text-[13px]"
                  >
                    <Check
                      className="h-4 w-4 shrink-0 text-[#EC1C7A]"
                      strokeWidth={2.4}
                      aria-hidden="true"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
