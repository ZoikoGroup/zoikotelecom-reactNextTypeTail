import { Clock, Users, Smartphone, Scale, type LucideIcon } from "lucide-react";

type AllowanceCard = {
  title: string;
  description: string;
  icon: LucideIcon;
  badge: {
    label: string;
    tone: string;
  };
};

const ALLOWANCES: readonly AllowanceCard[] = [
  {
    title: "Set minutes",
    description:
      "A fixed number of minutes each month, then extra calls are charged.",
    icon: Clock,
    badge: {
      label: "Common",
      tone: "bg-[#fcebf5] text-[#d81b7a]",
    },
  },
  {
    title: "Shared minutes",
    description:
      "One pool of minutes shared across your lines, where the provider supports it.",
    icon: Users,
    badge: {
      label: "Check support",
      tone: "bg-[#f1ecfc] text-[#6a48d7]",
    },
  },
  {
    title: "Per-line allowance",
    description:
      "Each line has its own allowance that can't be moved to another line.",
    icon: Smartphone,
    badge: {
      label: "Common",
      tone: "bg-[#fcebf5] text-[#d81b7a]",
    },
  },
  {
    title: "“Unlimited”",
    description:
      "Only where the terms genuinely allow it — always with fair-use limits and exclusions you can read.",
    icon: Scale,
    badge: {
      label: "Only if confirmed",
      tone: "bg-[#fbf2e3] text-[#9a6712]",
    },
  },
] as const;

export default function CallAllowancesTypes() {
  return (
    <section className="w-full bg-white py-16 text-[#131138] sm:py-20">
      <div className="mx-auto max-w-[1300px] px-6 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-[#221f4d]">
            Types of calling package
          </p>
          <h2 className="mt-2.5 text-3xl font-black tracking-tight text-[#131138] sm:text-4xl lg:text-[42px]">
            How call allowances can work
          </h2>
          <p className="mx-auto mt-3 max-w-[560px] text-sm text-[#545275] sm:text-base">
            These are common types. We&rsquo;ll tell you which apply to the
            service you choose.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ALLOWANCES.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex flex-col justify-between rounded-[24px] border border-[#ecebf4] bg-white p-6 shadow-[0_12px_32px_rgba(19,17,56,0.05)] sm:p-7"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#e6007e] to-[#7b3fe4] text-white shadow-md shadow-[#e6007e]/20">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span
                      className={`rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.04em] ${item.badge.tone}`}
                    >
                      {item.badge.label}
                    </span>
                  </div>

                  <h3 className="mt-6 text-lg font-extrabold tracking-tight text-[#131138]">
                    {item.title}
                  </h3>

                  <p className="mt-2.5 text-sm leading-6 text-[#545275]">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
