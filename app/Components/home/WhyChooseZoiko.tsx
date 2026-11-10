import Image from "next/image";
import { Check, FileText, Wifi, Clock } from "lucide-react";

const FEATURES = [
  {
    icon: Check,
    title: "BT Wholesale authorised reseller",
  },
  {
    icon: FileText,
    title: "Instant digital activation (eSIM + VoIP)",
  },
  {
    icon: Wifi,
    title: "Full Fibre, SoGEA and ADSL availability",
  },
  {
    icon: Clock,
    title: "24/7 support by live chat, phone and email",
  },
] as const;

export default function WhyChooseZoiko() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-r from-[#7D2D8B] via-[#5A1F68] to-[#2A1630] px-6 py-16 text-white sm:px-8 lg:px-12 lg:py-20">
      {/* Background Watermark in Bottom Right */}
      <p
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-10 -right-6 hidden select-none whitespace-nowrap text-[140px] font-extrabold uppercase leading-none text-transparent opacity-10 lg:block"
        style={{ WebkitTextStroke: "1px rgba(255,255,255,0.4)" }}
      >
        BLACK FRIDAY
      </p>

      <div className="relative mx-auto max-w-[1300px]">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Headings, Paragraph & Image Card */}
          <div className="lg:col-span-5">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#e2a8eb]">
              WHY CHOOSE ZOIKO TELECOM
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              Your trusted connectivity partner
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-purple-100/80 sm:text-base">
              Broadband, eSIM and digital phone lines from one provider.
              Designed for SMEs, remote workers and growing teams.
            </p>

            {/* Image Card */}
            <div className="relative mt-8 h-64 w-full overflow-hidden sm:h-72">
              <Image
                src="/images/sale/office.png"
                alt="Professional team member standing in office"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Right Column: 2x2 Feature Cards Grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            {FEATURES.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col justify-start rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-md transition-all duration-300 hover:bg-white/15"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/15 text-white shadow-inner">
                    <IconComponent className="h-5 w-5" />
                  </div>
                  <h3 className="mt-6 text-sm font-semibold leading-snug text-white sm:text-base">
                    {feature.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
