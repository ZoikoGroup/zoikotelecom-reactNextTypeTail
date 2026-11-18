import Link from "next/link";
import { Bookmark, Scale, type LucideIcon } from "lucide-react";

type PlanCard = {
  name: string;
  subtitle: string;
  icon: LucideIcon;
};

const PLANS: readonly PlanCard[] = [
  {
    name: "SmartVoice",
    subtitle: "Details on request",
    icon: Bookmark,
  },
  {
    name: "UnityVoice",
    subtitle: "Details on request",
    icon: Bookmark,
  },
  {
    name: "FusionLink",
    subtitle: "Details on request",
    icon: Bookmark,
  },
  {
    name: "FlexiTalk",
    subtitle: "Details on request",
    icon: Bookmark,
  },
  {
    name: "SyncVoice",
    subtitle: "Details on request",
    icon: Bookmark,
  },
  {
    name: "MegaCall",
    subtitle: "Details on request",
    icon: Bookmark,
  },
] as const;

export default function BusinessPlansSection() {
  return (
    <section className="w-full bg-white py-16 text-[#131138] sm:py-20">
      <div className="mx-auto max-w-[1300px] px-6 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-[#545275]">
            Plans
          </p>
          <h2 className="mt-2.5 text-3xl font-black tracking-tight mx-auto max-w-3xl text-[#131138] sm:text-4xl lg:text-[42px]">
            Plans named on our business landlines page
          </h2>
          <p className="mx-auto mt-3 max-w-[580px] text-sm text-[#545275] sm:text-base">
            Our business landline FAQ names these plans. Prices, allowances and
            what each includes aren&rsquo;t confirmed on this page.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {PLANS.map((plan) => {
            const Icon = plan.icon;
            return (
              <div
                key={plan.name}
                className="flex flex-col items-center justify-between rounded-[24px] border border-[#ecebf4] bg-white p-6 text-center shadow-[0_12px_32px_rgba(19,17,56,0.04)] sm:p-7"
              >
                <div className="w-full">
                  <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#e6007e] to-[#7b3fe4] text-white shadow-md shadow-[#e6007e]/20">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>

                  <h3 className="mt-5 text-base font-extrabold tracking-tight text-[#131138]">
                    {plan.name}
                  </h3>

                  <p className="mt-1 text-xs text-[#7b849b]">{plan.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-8 rounded-[24px] border border-dashed border-[#d4d1e8] bg-[#faf9fd] p-6 sm:p-8">
          <div className="grid items-center gap-6 lg:grid-cols-[1fr_auto]">
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#e6007e] to-[#7b3fe4] text-white shadow-md shadow-[#e6007e]/20">
                <Scale className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-base font-extrabold tracking-tight text-[#131138] sm:text-lg">
                  Online comparison isn&rsquo;t available yet
                </h3>
                <p className="mt-1 text-sm text-[#545275] max-w-[700px]">
                  We&rsquo;ll only show prices and allowances side by side once
                  they&rsquo;re confirmed and current. Until then, our team can
                  compare options for you.
                </p>
              </div>
            </div>

            <div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#e6007e] to-[#c41478] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_12px_28px_-6px_rgba(230,0,126,0.45)] transition hover:opacity-95"
              >
                Ask us to compare
                <span aria-hidden="true">&rsaquo;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
