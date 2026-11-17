import React from "react";
import { Home } from "lucide-react";

const BROADBAND_STEPS = [
  "Choose your new broadband plan.",
  "Your new provider arranges the switch.",
  "Your old provider tells you about any exit fees.",
] as const;

const MOBILE_STEPS = [
  "Text your current provider for a code.",
  "Give the code to your new provider.",
  "Your number moves across.",
] as const;

export default function SwitchingBroadbandAndMobile() {
  return (
    <section className="w-full bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1300px]">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#434A6E]">
            SWITCHING
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#11183C] sm:text-4xl lg:text-[42px] lg:leading-[1.15]">
            Switching broadband and mobile works differently
          </h2>
        </div>

        {/* Two-Column Cards Grid */}
        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2">
          {/* Left Card: Broadband (One Touch Switch) */}
          <div className="flex flex-col justify-between rounded-3xl border border-[#ECEEF6] bg-white p-7 shadow-[0_8px_30px_rgba(17,24,60,0.04)] sm:p-8">
            <div>
              {/* Badge */}
              <span className="inline-block rounded-full bg-[#FCE8F1] px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-[#E11D74]">
                BROADBAND
              </span>

              <h3 className="mt-5 text-xl font-extrabold tracking-tight text-[#11183C]">
                One Touch Switch
              </h3>

              {/* Numbered Steps */}
              <ol className="mt-5 space-y-3">
                {BROADBAND_STEPS.map((step, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-sm leading-relaxed text-[#4B5563]"
                  >
                    <span className="font-bold text-[#11183C]">
                      {index + 1}.
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Right Card: Mobile (Text-to-switch codes) */}
          <div className="flex flex-col justify-between rounded-3xl border border-[#ECEEF6] bg-white p-7 shadow-[0_8px_30px_rgba(17,24,60,0.04)] sm:p-8">
            <div>
              {/* Badge */}
              <span className="inline-block rounded-full bg-[#FCE8F1] px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-[#E11D74]">
                MOBILE
              </span>

              <h3 className="mt-5 text-xl font-extrabold tracking-tight text-[#11183C]">
                Text-to-switch codes
              </h3>

              {/* Numbered Steps */}
              <ol className="mt-5 space-y-3">
                {MOBILE_STEPS.map((step, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-sm leading-relaxed text-[#4B5563]"
                  >
                    <span className="font-bold text-[#11183C]">
                      {index + 1}.
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>

              {/* Code Pills Box */}
              <div className="mt-6 flex flex-wrap gap-2.5 rounded-2xl bg-[#F5F3FB] p-3.5">
                <span className="rounded-xl bg-white px-3 py-1.5 text-xs font-bold text-[#11183C] shadow-sm">
                  PAC → 65075 (keep number)
                </span>
                <span className="rounded-xl bg-white px-3 py-1.5 text-xs font-bold text-[#11183C] shadow-sm">
                  STAC → 75075 (new number)
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner: Moving Home */}
        <div className="mx-auto mt-8 max-w-6xl rounded-2xl border border-[#F3D7C9] bg-gradient-to-r from-[#FFF5F0] via-[#FFF8F5] to-[#FEF3F0] p-5 sm:p-6 shadow-[0_4px_20px_rgba(17,24,60,0.02)]">
          <div className="flex items-start gap-4 sm:items-center">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#D97706] text-white">
              <Home className="h-5 w-5" strokeWidth={2.25} />
            </div>
            <p className="text-sm leading-relaxed text-[#3A1D0C]">
              <strong className="font-bold">Moving home?</strong> Broadband
              depends on your new address, so check availability before you
              move. Your mobile plan usually moves with you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
