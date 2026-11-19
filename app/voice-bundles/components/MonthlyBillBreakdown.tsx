import { Check } from "lucide-react";

const BILL_GUARANTEES = [
  "Mandatory parts are never hidden in the small print",
  "VAT shown clearly for your type of business",
  "No savings claims unless we compare like for like",
  "Broadband marked as included or separate",
] as const;

const QUOTE_ITEMS = [
  {
    label: "Line or user rental",
    detail: "Per line / user",
    dotColor: "bg-[#e6007e]",
  },
  {
    label: "Call allowance",
    detail: "What's included",
    dotColor: "bg-[#7b3fe4]",
  },
  {
    label: "Numbers",
    detail: "New or ported",
    dotColor: "bg-[#3b6ce0]",
  },
  {
    label: "Features & add-ons",
    detail: "If optional",
    dotColor: "bg-[#1f9d55]",
  },
  {
    label: "Set-up & equipment",
    detail: "One-off",
    dotColor: "bg-[#f59e0b]",
  },
  {
    label: "Broadband",
    detail: "Included or separate",
    dotColor: "bg-[#64748b]",
  },
  {
    label: "Calls outside allowance",
    detail: "Rates listed",
    dotColor: "bg-[#dc2626]",
  },
] as const;

export default function MonthlyBillBreakdown() {
  return (
    <section className="w-full bg-[#F5F6FB] py-16 text-[#131138] sm:py-20">
      <div className="mx-auto grid max-w-[1300px] items-center gap-12 px-6 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-10">
        {/* Left Column */}
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-[#545275]">
            Total cost
          </p>

          <h2 className="mt-2.5 text-3xl font-black leading-[1.12] tracking-tight text-[#131138] sm:text-4xl lg:text-[38px]">
            Everything that makes up your monthly bill
          </h2>

          <p className="mt-4 max-w-[490px] text-sm leading-6 text-[#545275] sm:text-base">
            A clear quote shows each part separately, with one monthly total and
            one total for anything you pay up front.
          </p>

          <ul className="mt-7 space-y-3.5">
            {BILL_GUARANTEES.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm font-medium text-[#2c2a4a]"
              >
                <Check
                  className="mt-0.5 h-4 w-4 shrink-0 text-[#e6007e]"
                  strokeWidth={2.5}
                  aria-hidden="true"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column: Quote Card */}
        <div className="mx-auto w-full max-w-[440px] rounded-[28px] border border-[#ecebf4] bg-white p-7 shadow-[0_24px_60px_rgba(19,17,56,0.08)] sm:p-8">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-base font-extrabold tracking-tight text-[#131138] sm:text-lg">
              Your quote will show
            </h3>
            <span className="rounded-md bg-[#f1f2f7] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.06em] text-[#7b849b]">
              Example
            </span>
          </div>

          <ul className="mt-6 divide-y divide-dashed divide-[#e5e7ef]">
            {QUOTE_ITEMS.map((item) => (
              <li
                key={item.label}
                className="flex items-center justify-between gap-4 py-3.5 text-sm"
              >
                <span className="flex items-center gap-3 font-bold text-[#131138]">
                  <span
                    aria-hidden="true"
                    className={`h-2.5 w-2.5 shrink-0 rounded-full ${item.dotColor}`}
                  />
                  {item.label}
                </span>
                <span className="text-xs font-medium text-[#7b849b] sm:text-[13px]">
                  {item.detail}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-3 flex items-center justify-between border-t border-[#eceef3] pt-5">
            <span className="text-sm font-extrabold text-[#131138]">
              Monthly total
            </span>
            <span className="rounded-full bg-[#fde8f3] px-4 py-1.5 text-xs font-bold text-[#d81b7a]">
              In your quote
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
