import { Check, X } from "lucide-react";

const INCLUDED_ITEMS = [
  "Calls to UK landline numbers starting 01 and 02",
  "Calls to UK mobile numbers starting 07",
  "Calls to 03 numbers, where the plan counts them as standard",
  "Calls between lines on your own account, where supported",
] as const;

const EXCLUDED_ITEMS = [
  "Premium-rate numbers (09) and some service numbers (084, 087, 118)",
  "International calls, unless your plan includes certain destinations",
  "Calls forwarded on to mobiles or other numbers",
  "Non-standard numbers and calls over a fair-use limit",
] as const;

export default function IncludedCallsBreakdown() {
  return (
    <section className="w-full bg-[#F5F6FB] py-16 text-[#131138] sm:py-20">
      <div className="mx-auto max-w-[1300px] px-6 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-[#221f4d]">
            Inclusive calls
          </p>
          <h2 className="mt-2.5 text-3xl font-black tracking-tight text-[#131138] max-w-3xl mx-auto sm:text-4xl lg:text-[42px]">
            Which calls are usually included &mdash; and which aren&rsquo;t
          </h2>
          <p className="mx-auto mt-3 max-w-[640px] text-sm text-[#545275] sm:text-base">
            Our business landline FAQ describes standard UK landline and mobile
            calls as an example of what&rsquo;s included. Exact number types and
            allowances depend on the plan.
          </p>
        </div>

        {/* Two Columns Grid */}
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {/* Often Included Card */}
          <div className="rounded-[24px] border border-[#15803D] border-t-4 border-t-[#15803D] bg-white p-6 shadow-[0_12px_32px_rgba(34,153,84,0.06)] sm:p-8">
            <div className="flex items-center gap-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#229954]/10 text-[#229954]">
                <Check className="h-4 w-4" strokeWidth={3} aria-hidden="true" />
              </span>
              <h3 className="text-lg font-extrabold tracking-tight text-[#131138] sm:text-xl">
                Often included, depending on plan
              </h3>
            </div>

            <ul className="mt-6 space-y-4">
              {INCLUDED_ITEMS.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-[#2c2a4a]"
                >
                  <Check
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#229954]"
                    strokeWidth={2.5}
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Usually Charged Separately Card */}
          <div className="rounded-[24px] border border-[#E0127C] border-t-4 border-t-[#E0127C] bg-white p-6 shadow-[0_12px_32px_rgba(230,0,126,0.06)] sm:p-8">
            <div className="flex items-center gap-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#e6007e]/10 text-[#e6007e]">
                <X className="h-4 w-4" strokeWidth={3} aria-hidden="true" />
              </span>
              <h3 className="text-lg font-extrabold tracking-tight text-[#131138] sm:text-xl">
                Usually charged separately
              </h3>
            </div>

            <ul className="mt-6 space-y-4">
              {EXCLUDED_ITEMS.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-[#2c2a4a]"
                >
                  <X
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#e6007e]"
                    strokeWidth={2.5}
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
