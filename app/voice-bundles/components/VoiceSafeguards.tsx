import { AlertCircle, Plug, Lock, type LucideIcon } from "lucide-react";

type SafeguardItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const SAFEGUARDS: readonly SafeguardItem[] = [
  {
    title: "999 and 112",
    description:
      "Emergency calls and your registered location must work correctly. Tell us your address for each site.",
    icon: AlertCircle,
  },
  {
    title: "Power cuts",
    description:
      "Digital voice equipment generally needs electricity and may stop in an outage without backup. Tell us if anyone relies on the line for safety.",
    icon: Plug,
  },
  {
    title: "Your data",
    description:
      "We use your enquiry and billing details only for your service. Marketing is your choice, and call recording only happens with the right approvals.",
    icon: Lock,
  },
] as const;

export default function VoiceSafeguards() {
  return (
    <section className="w-full bg-gradient-to-br from-[#081040] via-[#141E63] to-[#2A1A6E] py-16 text-white sm:py-20">
      <div className="mx-auto max-w-[1300px] px-6 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#a4a0c8]">
            Trust &amp; continuity
          </p>
          <h2 className="mt-2.5 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-[42px]">
            Safeguards that come with every voice service
          </h2>
        </div>

        {/* 3-Column Grid */}
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {SAFEGUARDS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex flex-col rounded-[26px] border border-white/10 bg-[#FFFFFF14] p-8 shadow-[0_20px_50px_rgba(11,9,30,0.3)] backdrop-blur-xs sm:p-9"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl text-[#FF8FCB]">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>

                <h3 className="mt-6 text-lg font-black tracking-tight text-white sm:text-xl">
                  {item.title}
                </h3>

                <p className="mt-2.5 text-sm leading-6 text-[#b8b4d8]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
