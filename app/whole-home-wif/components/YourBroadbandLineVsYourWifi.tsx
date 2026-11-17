import React from "react";
import { FileText, Router as RouterIcon, Laptop, Cable } from "lucide-react";

const COMPARISON_CARDS = [
  {
    id: "broadband-line",
    title: "Broadband line",
    subtitle: "Brings the internet to your router",
    icon: FileText,
  },
  {
    id: "your-router",
    title: "Your router",
    subtitle: "Shares the connection in your home",
    icon: RouterIcon,
  },
  {
    id: "your-device",
    title: "Your device",
    subtitle: "Phone, laptop, TV or console",
    icon: Laptop,
  },
] as const;

export default function YourBroadbandLineVsYourWifi() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#060C36] via-[#081040] to-[#2A1A6E] px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-[1300px]">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#9333EA]">
            TWO DIFFERENT THINGS
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-[42px] lg:leading-[1.15]">
            Your broadband line vs your Wi-Fi
          </h2>
          <p className="mt-3.5 text-sm leading-relaxed text-[#D1D5EB] sm:text-base">
            Slow internet can come from either. Testing with a cable helps tell
            them apart.
          </p>
        </div>

        {/* Three-Column Cards & Connecting Flow Grid */}
        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 items-center gap-6 lg:grid-cols-12">
          {/* Card 1: Broadband Line */}
          <div className="flex flex-col items-center rounded-3xl border border-white/10 bg-white/[0.04] p-7 text-center backdrop-blur-sm sm:p-8 lg:col-span-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#F4297B] to-[#7C3AED] text-white shadow-md">
              <FileText className="h-6 w-6" strokeWidth={2.25} />
            </div>
            <h3 className="mt-6 text-lg font-extrabold tracking-tight text-white">
              Broadband line
            </h3>
            <p className="mt-1.5 text-sm text-[#D1D5EB]">
              Brings the internet to your router
            </p>
          </div>

          {/* Card 2: Your Router */}
          <div className="flex flex-col items-center rounded-3xl border border-white/10 bg-white/[0.04] p-7 text-center backdrop-blur-sm sm:p-8 lg:col-span-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#F4297B] to-[#7C3AED] text-white shadow-md">
              <RouterIcon className="h-6 w-6" strokeWidth={2.25} />
            </div>
            <h3 className="mt-6 text-lg font-extrabold tracking-tight text-white">
              Your router
            </h3>
            <p className="mt-1.5 text-sm text-[#D1D5EB]">
              Shares the connection in your home
            </p>
          </div>

          {/* Card 3: Your Device */}
          <div className="flex flex-col items-center rounded-3xl border border-white/10 bg-white/[0.04] p-7 text-center backdrop-blur-sm sm:p-8 lg:col-span-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#F4297B] to-[#7C3AED] text-white shadow-md">
              <Laptop className="h-6 w-6" strokeWidth={2.25} />
            </div>
            <h3 className="mt-6 text-lg font-extrabold tracking-tight text-white">
              Your device
            </h3>
            <p className="mt-1.5 text-sm text-[#D1D5EB]">
              Phone, laptop, TV or console
            </p>
          </div>
        </div>

        {/* Bottom Explanatory Banner */}
        <div className="mx-auto mt-10 max-w-6xl rounded-2xl border border-white/15 bg-[#EEF2FF] p-5 backdrop-blur-sm sm:p-6">
          <div className="flex items-start gap-4 sm:items-center">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-[#23307A]">
              <Cable className="h-5 w-5" strokeWidth={2.25} />
            </div>
            <p className="text-sm leading-relaxed text-[#23307A]">
              If a device plugged in by cable is fast but Wi-Fi is slow, the
              issue is likely Wi-Fi inside your home. If both are slow, it may
              be the line.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
