import React from "react";
import Image from "next/image";
import { KeyRound, Building2, Map } from "lucide-react";

const PERMISSION_ITEMS = [
  {
    id: "landlord",
    title: "Landlord",
    description: "If you rent, ask before cables or equipment are fitted.",
    icon: KeyRound,
  },
  {
    id: "building-owner",
    title: "Building owner or managing agent",
    description: "Flats may need access to shared areas.",
    icon: Building2,
  },
  {
    id: "landowner-wayleave",
    title: "Landowner (wayleave)",
    description: "Sometimes cables cross land owned by someone else.",
    icon: Map,
  },
] as const;

export default function PermissionMayBeNeeded() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#060C36] via-[#081040] to-[#2A1A6E] px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-[1300px]">
        {/* Main Grid Container */}
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Left Column: Image with Rounded Corners */}
          <div className="relative h-[400px] w-full overflow-hidden rounded-3xl shadow-[0_12px_40px_rgba(6,12,54,0.4)] sm:h-[460px] lg:col-span-6">
            <Image
              src="/Images/check/3.png"
              alt="Modern residential apartment building"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Right Column: Content & Permission Cards */}
          <div className="lg:col-span-6">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#D1D5EB]">
              FLATS, RENTALS &amp; NEW BUILDS
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-[42px] lg:leading-[1.15]">
              Permission may be needed
            </h2>
            <p className="mt-3.5 text-sm leading-relaxed text-[#D1D5EB] sm:text-base">
              Some installations need agreement from someone other than
              you.
            </p>

            {/* Permission List */}
            <div className="mt-8 space-y-4">
              {PERMISSION_ITEMS.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.id}
                    className="flex items-start gap-4 rounded-2xl border border-white/15 bg-white/[0.06] p-5 backdrop-blur-sm transition-colors hover:border-white/25 hover:bg-white/[0.09]"
                  >
                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#F4297B]/15 text-[#F472B6]">
                      <Icon className="h-4 w-4" strokeWidth={2.25} />
                    </div>
                    <div>
                      <h3 className="text-sm font-extrabold text-white sm:text-base">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-xs leading-relaxed text-[#D1D5EB] sm:text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
