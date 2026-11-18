import React from "react";
import { Info } from "lucide-react";

export default function InstallationSwitching() {
  const steps = [
    {
      step: "STEP 1",
      title: "Your needs",
      description: "Sites, users and the systems that rely on the connection.",
    },
    {
      step: "STEP 2",
      title: "Site check",
      description: "Availability and technology confirmed for each premises.",
    },
    {
      step: "STEP 3",
      title: "Survey",
      description:
        "If needed — access, cabling, power and landlord permission.",
    },
    {
      step: "STEP 4",
      title: "Proposal",
      description: "Costs, terms and an estimated install window in writing.",
    },
    {
      step: "STEP 5",
      title: "Switch plan",
      description:
        "Current contract, end dates and anything that depends on your line.",
    },
    {
      step: "STEP 6",
      title: "Install & handover",
      description: "Engineer visit, line test and support details.",
    },
  ];

  return (
    <div className="w-full bg-white py-16 px-4 flex justify-center font-sans">
      <div className="w-full max-w-[1300px] flex flex-col items-center">
        {/* Header section */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold tracking-[0.15em] text-[#1e2230] uppercase mb-3 block">
            INSTALLATION & SWITCHING
          </span>
          <h2 className="text-[38px] leading-[48px] font-extrabold text-[#111827] max-w-[700px] tracking-tight mb-3">
            Installation and switching depend on the site
          </h2>
          <p className="text-base text-[#4b5563] font-normal">
            What usually happens between your enquiry and a working connection.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 w-full mb-6">
          {steps.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-[#f3f4f6] flex flex-col justify-between transition-all duration-300 hover:shadow-[0_10px_25px_-5px_rgba(0,0,0,0.08)]"
            >
              <div>
                <span className="text-[11px] font-bold tracking-[0.12em] text-[#db2777] uppercase block mb-2">
                  {item.step}
                </span>
                <h3 className="text-base font-bold text-[#111827] mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-[#4b5563] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="w-full bg-[#f0f4ff] rounded-2xl p-5 border border-[#e0e7ff] flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#3b82f6] shadow-sm shrink-0">
            <Info className="w-5 h-5" />
          </div>
          <p className="text-sm text-[#1e293b] font-medium leading-snug">
            <span className="font-bold text-[#1e3a8a]">
              Business switching can work differently from home broadband
              switching.
            </span>{" "}
            We&apos;ll confirm the right process and timings — we can&apos;t
            promise an engineer date until it&apos;s booked.
          </p>
        </div>
      </div>
    </div>
  );
}
