import Link from "next/link";
import { FileText, ChevronRight, type LucideIcon } from "lucide-react";

type FeatureRow = {
  feature: string;
  goodFor: string;
  whatItNeeds: string;
};

const FEATURE_ROWS: readonly FeatureRow[] = [
  {
    feature: "Call forwarding",
    goodFor: "Reaching staff away from their desk",
    whatItNeeds: "Destination numbers; possible extra call charges",
  },
  {
    feature: "Time-based routing",
    goodFor: "Opening hours and holidays",
    whatItNeeds: "Accurate schedules and holiday dates",
  },
  {
    feature: "Call transfers",
    goodFor: "Passing callers to the right colleague",
    whatItNeeds: "User permissions",
  },
  {
    feature: "Auto-attendant menu",
    goodFor: "One number, several teams",
    whatItNeeds: "Menu design and platform support",
  },
  {
    feature: "Call queues",
    goodFor: "Busy periods",
    whatItNeeds: "Queue capacity and overflow rules",
  },
  {
    feature: "Hunt groups",
    goodFor: "Small teams sharing calls",
    whatItNeeds: "Group members and ring pattern",
  },
  {
    feature: "Voicemail",
    goodFor: "Out of hours and missed calls",
    whatItNeeds: "Mailbox access and retention",
  },
  {
    feature: "Voicemail transcription",
    goodFor: "Reading messages quickly",
    whatItNeeds: "Plan support; privacy settings",
  },
  {
    feature: "CRM integration",
    goodFor: "Sales and service teams",
    whatItNeeds: "Compatible system and data review",
  },
  {
    feature: "Call recording",
    goodFor: "Training or record-keeping",
    whatItNeeds: "Legal, privacy and security approval",
  },
] as const;

export default function FeatureComparisonTable() {
  return (
    <section className="w-full bg-white py-16 text-[#131138] sm:py-20">
      <div className="mx-auto max-w-[1300px] px-6 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-[#545275]">
            Compare
          </p>
          <h2 className="mt-2.5 text-3xl font-black tracking-tight text-[#131138] sm:text-4xl lg:text-[42px]">
            Which features suit which needs?
          </h2>
          <p className="mx-auto mt-3 max-w-[580px] text-sm text-[#545275] sm:text-base">
            A guide to what each feature is for and what it needs. It
            doesn&rsquo;t show what your plan includes.
          </p>
        </div>

        {/* Table Container */}
        <div className="mt-12 overflow-hidden rounded-[28px] border border-[#ecebf4] bg-white shadow-[0_16px_40px_rgba(19,17,56,0.06)]">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#1b1740] text-white">
                  <th className="py-4.5 pl-7 pr-6 text-xs font-black uppercase tracking-[0.08em]">
                    Feature
                  </th>
                  <th className="py-4.5 px-6 text-xs font-black uppercase tracking-[0.08em]">
                    Good for
                  </th>
                  <th className="py-4.5 px-6 text-xs font-black uppercase tracking-[0.08em]">
                    What it needs
                  </th>
                  <th className="py-4.5 pl-6 pr-7 text-right text-xs font-black uppercase tracking-[0.08em]">
                    On your plan?
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#f0f1f6] text-sm">
                {FEATURE_ROWS.map((row) => (
                  <tr
                    key={row.feature}
                    className="transition hover:bg-[#fafafc]"
                  >
                    <td className="py-4.5 pl-7 pr-6 font-extrabold text-[#131138]">
                      {row.feature}
                    </td>
                    <td className="py-4.5 px-6 text-[#545275]">
                      {row.goodFor}
                    </td>
                    <td className="py-4.5 px-6 text-[#545275]">
                      {row.whatItNeeds}
                    </td>
                    <td className="py-4.5 pl-6 pr-7 text-right">
                      <Link
                        href="/contact"
                        className="inline-flex items-center rounded-full border border-[#f0c2dc] bg-[#fff5fa] px-4 py-1.5 text-xs font-bold text-[#e6007e] transition hover:bg-[#ffe6f2]"
                      >
                        Ask to confirm
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom Dashed Notice Banner */}
        <div className="mt-8 rounded-[24px] border border-dashed border-[#d4d1e8] bg-white p-6 shadow-[0_8px_24px_rgba(19,17,56,0.03)] sm:p-7">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#e6007e] to-[#7b3fe4] text-white shadow-md shadow-[#e6007e]/20">
                <FileText className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-base font-extrabold text-[#131138]">
                  Plan details aren&rsquo;t shown online yet
                </h3>
                <p className="mt-1 text-xs text-[#545275] sm:text-sm">
                  We cannot confirm feature availability for a plan online.
                  Contact our team for current features, seats and prices.
                </p>
              </div>
            </div>

            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#e6007e] to-[#c41478] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_12px_28px_-6px_rgba(230,0,126,0.45)] transition hover:opacity-95"
            >
              Ask what&rsquo;s included
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
