import React from "react";
import {
  PoundSterling,
  Box,
  Calendar,
  ArrowUpRight,
  Gauge,
  CreditCard,
  ShieldCheck,
  XCircle,
  Scale,
} from "lucide-react";

export default function CostsContracts() {
  const cards = [
    {
      title: "Monthly price",
      description: "With VAT basis clearly labelled.",
      icon: PoundSterling,
    },
    {
      title: "Installation & set-up",
      description: "Survey, engineer and equipment costs.",
      icon: Box,
    },
    {
      title: "Minimum term",
      description: "Including any 12-month option.",
      icon: Calendar,
    },
    {
      title: "Price changes",
      description: "In pounds and pence, with dates.",
      icon: ArrowUpRight,
    },
    {
      title: "Speed estimate",
      description: "Download and upload for your site.",
      icon: Gauge,
    },
    {
      title: "Extras",
      description: "Static IP, backup or router charges.",
      icon: CreditCard,
    },
    {
      title: "Support terms",
      description: "Hours, fix targets and exclusions.",
      icon: ShieldCheck,
    },
    {
      title: "Leaving early",
      description: "Early termination charges.",
      icon: XCircle,
    },
  ];

  return (
    <div className="w-full bg-[#F5F6FB] py-16 px-4 flex justify-center font-sans">
      <div className="w-full max-w-[1300px] flex flex-col items-center">
        {/* Header section */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold tracking-[0.15em] text-[#1e2230] uppercase mb-3 block">
            COSTS & CONTRACTS
          </span>
          <h2 className="text-[38px] leading-[48px] font-extrabold text-[#111827] max-w-[700px] tracking-tight mb-3">
            Understand the full cost before you commit
          </h2>
          <p className="text-base text-[#4b5563] font-normal">
            Business broadband prices aren&apos;t listed online yet. Every
            proposal shows these clearly.
          </p>
        </div>

        {/* Feature Cards Grid (4 columns x 2 rows) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full mb-6">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-[#f3f4f6] flex flex-col justify-between transition-all duration-300 hover:shadow-[0_10px_25px_-5px_rgba(0,0,0,0.08)]"
              >
                <div>
                  <div className="mb-4 text-[#db2777]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#111827] mb-1.5 leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-xs text-[#4b5563] leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Info Banner */}
        <div className="w-full bg-[#111328] text-white rounded-2xl p-6 md:p-8 shadow-xl border border-[#1f2448] flex flex-col md:flex-row items-center gap-6 mb-6">
          <div className="flex flex-col items-center justify-center bg-[#1e2347] border border-[#2a305e] rounded-2xl p-4 min-w-[120px] text-center shrink-0">
            <span className="text-3xl font-extrabold text-[#ec4899] tracking-tight">
              24
            </span>
            <span className="text-[11px] font-bold text-[#9ca3af] uppercase tracking-wider mt-0.5">
              months max
            </span>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-1.5">
              10 or fewer employees?
            </h3>
            <p className="text-sm text-[#9ca3af] leading-relaxed">
              Small businesses can&apos;t be tied into a minimum term longer
              than 24 months and should receive a contract summary before
              agreeing. Home broadband prices don&apos;t apply to business
              services.
            </p>
          </div>
        </div>

        {/* Bottom Action Card with dashed border */}
        <div className="w-full bg-white rounded-2xl p-6 md:p-8 border-2 border-dashed border-[#e5e7eb] flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)]">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#E0127C] to-[#7B3FE4] flex items-center justify-center text-white shrink-0">
              <Scale className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#111827] mb-1">
                Business offers aren&apos;t shown online yet
              </h3>
              <p className="text-xs text-[#4b5563] leading-relaxed">
                We&apos;ll only show prices and compare offers once they&apos;re
                confirmed for your premises. Our team will send a written
                proposal.
              </p>
            </div>
          </div>
          <a
            href="#"
            className="w-full md:w-auto bg-gradient-to-r from-[#db2777] to-[#e11d48] hover:from-[#be185d] hover:to-[#9f1239] text-white font-semibold py-3.5 px-8 rounded-xl shadow-md transition-all duration-200 shrink-0 text-center text-sm"
          >
            Request a proposal &gt;
          </a>
        </div>
      </div>
    </div>
  );
}
