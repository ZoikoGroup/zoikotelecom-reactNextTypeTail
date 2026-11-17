import React from "react";
import Link from "next/link";
import {
  Router as RouterIcon,
  Share2,
  Smartphone,
  Cable,
  Package,
} from "lucide-react";

const EQUIPMENT_ITEMS = [
  {
    id: "router",
    title: "Router",
    description:
      "The box that creates your Wi-Fi. Placement makes a big difference.",
    tag: "Everyone has one",
    icon: RouterIcon,
    tagColor: "text-[#4B5563]",
  },
  {
    id: "mesh-wifi",
    title: "Mesh Wi-Fi",
    description:
      "Several units working as one network to spread Wi-Fi around larger homes.",
    tag: "Good for bigger homes",
    icon: Share2,
    tagColor: "text-[#E11D74]",
  },
  {
    id: "extender",
    title: "Extender",
    description:
      "Repeats your Wi-Fi further. Can help one weak spot, sometimes at lower speed.",
    tag: "For a single weak spot",
    icon: Smartphone,
    tagColor: "text-[#E11D74]",
  },
  {
    id: "wired-backhaul",
    title: "Wired backhaul",
    description:
      "Linking access points by cable gives the most consistent results.",
    tag: "Most reliable option",
    icon: Cable,
    tagColor: "text-[#E11D74]",
  },
] as const;

export default function RouterMeshExtenderOrCable() {
  return (
    <section className="w-full bg-[#F5F6FB] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1300px]">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#434A6E]">
            EQUIPMENT EXPLAINED
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#11183C] sm:text-4xl lg:text-[42px] lg:leading-[1.15]">
            Router, mesh, extender or cable?
          </h2>
          <p className="mt-3.5 text-sm leading-relaxed text-[#4B5563] sm:text-base">
            Plain-English descriptions — not product recommendations.
          </p>
        </div>

        {/* Four-Column Equipment Grid */}
        <div className="mx-auto mt-12 grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {EQUIPMENT_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="flex flex-col justify-between rounded-3xl border border-[#ECEEF6] bg-white p-7 shadow-[0_8px_30px_rgba(17,24,60,0.04)] sm:p-8"
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#F4297B] to-[#7C3AED] text-white shadow-md">
                    <Icon className="h-6 w-6" strokeWidth={2.25} />
                  </div>

                  <h3 className="mt-6 text-xl font-extrabold tracking-tight text-[#11183C]">
                    {item.title}
                  </h3>

                  <p className="mt-2.5 text-sm leading-relaxed text-[#4B5563]">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 border-t border-[#EEF0F7] pt-4">
                  <span className={`text-xs font-extrabold ${item.tagColor}`}>
                    {item.tag}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mx-auto mt-8 max-w-7xl rounded-2xl border border-[#F3D7C9] bg-gradient-to-r from-[#FFF5F0] via-[#FFF8F5] to-[#FEF3F0] p-5 sm:p-6 shadow-[0_4px_20px_rgba(17,24,60,0.02)]">
          <div className="flex items-start gap-4 sm:items-center">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E11D74] text-white">
              <Package className="h-5 w-5" strokeWidth={2.25} />
            </div>
            <p className="text-sm leading-relaxed text-[#3A1D0C]">
              Wi-Fi equipment isn&apos;t sold on this page yet. When it is,
              you&apos;ll see prices, compatibility and terms before you decide.
              For now,{" "}
              <Link
                href="/contact"
                className="font-bold underline decoration-[#E11D74] underline-offset-2 hover:text-[#E11D74]"
              >
                ask our team
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
