import Link from "next/link";
import { ChevronRight, Lock, Plus, Shield, User, X } from "lucide-react";

const sectionContent = {
  step: "04",
  eyebrow: "APPLYING WITH CONFIDENCE",
  headingPrefix: "Access, safety ",
  headingAccent: "& privacy",
} as const;

const safetyRules = [
  "Never pay a fee to apply or to be interviewed",
  "Never share passwords or bank credentials",
  "Don’t send identity documents by general contact",
] as const;

export default function AccessSafetyPrivacySection() {
  return (
    <section
      id="applying-with-confidence"
      className="w-full bg-[#F5F6FB] px-4 py-14 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-[1120px]">
        {/* Left-aligned section header */}
        <div>
          <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em]">
            <span className="italic text-[#e093b9]">{sectionContent.step}</span>
            <span className="text-[#9d175d]">{sectionContent.eyebrow}</span>
          </p>

          <h2 className="mt-2.5 text-3xl font-extrabold tracking-[-0.025em] text-[#0c1438] sm:text-[36px]">
            {sectionContent.headingPrefix}
            <span className="text-[#b81d78]">
              {sectionContent.headingAccent}
            </span>
          </h2>
        </div>

        {/* Three-column cards */}
        <div className="mt-7 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-3">
          {/* Card 1: Adjustments */}
          <div className="flex flex-col justify-between rounded-3xl border border-[#eaecf4] bg-white p-7 shadow-[0_8px_24px_rgba(15,23,42,0.04)] sm:p-8">
            <div>
              {/* Centered heart-plus badge */}
              <div className="flex flex-col items-center">
                <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#6d28d9] via-[#b81d78] to-[#ec4899] text-white shadow-[0_10px_20px_rgba(184,29,120,0.22)]">
                  <Plus className="h-5 w-5 stroke-[2.6]" aria-hidden="true" />
                </div>
                <span
                  className="mt-1.5 h-1.5 w-10 rounded-full bg-[#eef0f7]"
                  aria-hidden="true"
                />
              </div>

              <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.18em] text-[#c81878]">
                ADJUSTMENTS
              </p>

              <h3 className="mt-1.5 text-[19px] font-extrabold tracking-[-0.015em] text-[#0c1438]">
                Need an adjustment?
              </h3>

              <p className="mt-2.5 text-[12.5px] leading-[1.6] text-[#4b5563]">
                A dedicated recruitment assistance route will be shared with
                approved roles. Please don’t include medical details in general
                enquiries.
              </p>
            </div>

            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1 text-[12.5px] font-semibold text-[#c81878] transition hover:underline"
              >
                <span>Accessibility help</span>
                <ChevronRight
                  className="h-3.5 w-3.5 stroke-[2.5]"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>

          {/* Card 2: Dark Recruitment Safety */}
          <div className="flex flex-col justify-between rounded-3xl bg-[#0b0424] bg-[radial-gradient(ellipse_85%_75%_at_18%_12%,rgba(148,18,108,0.48)_0%,rgba(67,10,74,0.2)_55%,transparent_80%)] p-7 text-white shadow-[0_14px_34px_rgba(11,4,36,0.2)] sm:p-8">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#f472b6]">
                RECRUITMENT SAFETY
              </p>

              <h3 className="mt-2 text-[19px] font-extrabold tracking-[-0.015em] text-white">
                Spot suspicious recruitment
              </h3>

              <p className="mt-2.5 text-[12.5px] leading-[1.6] text-white/75">
                Verify the role and the channel before you share anything.
              </p>

              <ul className="mt-4 space-y-2.5">
                {safetyRules.map((rule) => (
                  <li
                    key={rule}
                    className="flex items-start gap-2.5 text-[12px] leading-[1.5] text-white/90"
                  >
                    <X
                      className="mt-0.5 h-3.5 w-3.5 shrink-0 stroke-[2.2] text-[#f472b6]"
                      aria-hidden="true"
                    />
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1 text-[12.5px] font-semibold text-[#f472b6] transition hover:underline"
              >
                <span>Report a suspicious request</span>
                <ChevronRight
                  className="h-3.5 w-3.5 stroke-[2.5]"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>

          {/* Card 3: Candidate Privacy */}
          <div className="flex flex-col justify-between rounded-3xl border border-[#eaecf4] bg-white p-7 shadow-[0_8px_24px_rgba(15,23,42,0.04)] sm:p-8">
            <div>
              {/* Centered ID card + lock illustration */}
              <div className="flex flex-col items-center">
                <div className="relative flex h-12 w-16 items-center justify-between rounded-xl border border-[#e5e7f2] bg-[#f8f9fd] px-2.5 shadow-sm">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#e0e7ff] text-[#4f46e5]">
                    <User className="h-4 w-4 stroke-[2.2]" aria-hidden="true" />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <span className="h-1.5 w-5 rounded-full bg-[#cbd5e1]" />
                    <span className="h-1.5 w-4 rounded-full bg-[#e2e8f0]" />
                    <span className="mt-0.5 h-2 w-5 rounded-full bg-[#f59e0b]" />
                  </div>

                  <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#7c3aed] text-white shadow">
                    <Lock
                      className="h-2.5 w-2.5 stroke-[2.5]"
                      aria-hidden="true"
                    />
                  </span>
                </div>
                <span
                  className="mt-1.5 h-1.5 w-10 rounded-full bg-[#eef0f7]"
                  aria-hidden="true"
                />
              </div>

              <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.18em] text-[#c81878]">
                CANDIDATE PRIVACY
              </p>

              <h3 className="mt-1.5 text-[19px] font-extrabold tracking-[-0.015em] text-[#0c1438]">
                Your data, explained first
              </h3>

              <p className="mt-2.5 text-[12.5px] leading-[1.6] text-[#4b5563]">
                A candidate-specific privacy notice will be shown before any
                application asks for your details.
              </p>
            </div>

            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1 text-[12.5px] font-semibold text-[#c81878] transition hover:underline"
              >
                <span>Ask a privacy question</span>
                <ChevronRight
                  className="h-3.5 w-3.5 stroke-[2.5]"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
