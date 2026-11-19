"use client";
import React, { useState } from "react";
import { ChevronRight } from "lucide-react";

export default function ResiliencePlan() {
  const [impact, setImpact] = useState<string>("Minor");
  const [backup, setBackup] = useState<string>("No");
  const [matters, setMatters] = useState<string>("Download speed");
  const [people, setPeople] = useState<string>("1-10");

  return (
    <div className="w-full bg-[#f8f9fc] py-16 px-4 flex justify-center font-sans">
      <div className="w-full max-w-[1300px] flex flex-col items-center">
        {/* Header section */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold tracking-[0.15em] text-[#1e2230] uppercase mb-3 block">
            RESILIENCE
          </span>
          <h2 className="text-[38px] leading-[48px] font-extrabold text-[#111827] max-w-[700px] tracking-tight mb-3">
            Plan for essential applications and interruptions
          </h2>
          <p className="text-base text-[#4b5563] font-normal">
            Answer four questions to see what to discuss. No connection can
            promise zero downtime.
          </p>
        </div>

        {/* Content Body: Left Questions & Right Summary Card */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Side: Questions */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            {/* Question 1 */}
            <div>
              <label className="block text-sm font-bold text-[#111827] mb-3">
                If your internet stopped for a day, the impact would be...
              </label>
              <div className="flex flex-wrap gap-3">
                {[
                  { label: "Minor", value: "Minor" },
                  { label: "Disruptive", value: "Disruptive" },
                  { label: "Serious — we'd stop trading", value: "Serious" },
                ].map((item) => {
                  const isSelected = impact === item.value;
                  return (
                    <button
                      key={item.value}
                      type="button"
                      onClick={() => setImpact(item.value)}
                      className={`flex items-center gap-2.5 px-5 py-3 rounded-full text-sm font-semibold transition-all duration-200 border ${
                        isSelected
                          ? "bg-white text-[#db2777] border-[#db2777] shadow-sm ring-1 ring-[#f472b6]/30"
                          : "bg-white text-[#374151] border-[#e5e7eb] hover:border-gray-300"
                      }`}
                    >
                      <span
                        className={`w-4 h-4 rounded-full border flex items-center justify-center ${isSelected ? "border-[#db2777]" : "border-gray-400"}`}
                      >
                        {isSelected && (
                          <span className="w-2 h-2 rounded-full bg-[#db2777]" />
                        )}
                      </span>
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Question 2 */}
            <div>
              <label className="block text-sm font-bold text-[#111827] mb-3">
                Do you have a backup connection today?
              </label>
              <div className="flex flex-wrap gap-3">
                {[
                  { label: "No", value: "No" },
                  {
                    label: "Yes, a mobile backup",
                    value: "Yes, a mobile backup",
                  },
                  { label: "Yes, a second line", value: "Yes, a second line" },
                ].map((item) => {
                  const isSelected = backup === item.value;
                  return (
                    <button
                      key={item.value}
                      type="button"
                      onClick={() => setBackup(item.value)}
                      className={`flex items-center gap-2.5 px-5 py-3 rounded-full text-sm font-semibold transition-all duration-200 border ${
                        isSelected
                          ? "bg-white text-[#db2777] border-[#db2777] shadow-sm ring-1 ring-[#f472b6]/30"
                          : "bg-white text-[#374151] border-[#e5e7eb] hover:border-gray-300"
                      }`}
                    >
                      <span
                        className={`w-4 h-4 rounded-full border flex items-center justify-center ${isSelected ? "border-[#db2777]" : "border-gray-400"}`}
                      >
                        {isSelected && (
                          <span className="w-2 h-2 rounded-full bg-[#db2777]" />
                        )}
                      </span>
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Question 3 */}
            <div>
              <label className="block text-sm font-bold text-[#111827] mb-3">
                What matters most?
              </label>
              <div className="flex flex-wrap gap-3">
                {[
                  { label: "Download speed", value: "Download speed" },
                  { label: "Upload speed", value: "Upload speed" },
                  { label: "Low delay (calls, video)", value: "Low delay" },
                  { label: "Not sure", value: "Not sure" },
                ].map((item) => {
                  const isSelected = matters === item.value;
                  return (
                    <button
                      key={item.value}
                      type="button"
                      onClick={() => setMatters(item.value)}
                      className={`flex items-center gap-2.5 px-5 py-3 rounded-full text-sm font-semibold transition-all duration-200 border ${
                        isSelected
                          ? "bg-white text-[#db2777] border-[#db2777] shadow-sm ring-1 ring-[#f472b6]/30"
                          : "bg-white text-[#374151] border-[#e5e7eb] hover:border-gray-300"
                      }`}
                    >
                      <span
                        className={`w-4 h-4 rounded-full border flex items-center justify-center ${isSelected ? "border-[#db2777]" : "border-gray-400"}`}
                      >
                        {isSelected && (
                          <span className="w-2 h-2 rounded-full bg-[#db2777]" />
                        )}
                      </span>
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Question 4 */}
            <div>
              <label className="block text-sm font-bold text-[#111827] mb-3">
                How many people use the connection?
              </label>
              <div className="flex flex-wrap gap-3">
                {[
                  { label: "1–10", value: "1-10" },
                  { label: "11–50", value: "11-50" },
                  { label: "51+", value: "51+" },
                ].map((item) => {
                  const isSelected = people === item.value;
                  return (
                    <button
                      key={item.value}
                      type="button"
                      onClick={() => setPeople(item.value)}
                      className={`flex items-center gap-2.5 px-5 py-3 rounded-full text-sm font-semibold transition-all duration-200 border ${
                        isSelected
                          ? "bg-white text-[#db2777] border-[#db2777] shadow-sm ring-1 ring-[#f472b6]/30"
                          : "bg-white text-[#374151] border-[#e5e7eb] hover:border-gray-300"
                      }`}
                    >
                      <span
                        className={`w-4 h-4 rounded-full border flex items-center justify-center ${isSelected ? "border-[#db2777]" : "border-gray-400"}`}
                      >
                        {isSelected && (
                          <span className="w-2 h-2 rounded-full bg-[#db2777]" />
                        )}
                      </span>
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Side: Resilience Notes Card */}
          <div className="lg:col-span-5 w-full bg-[#111328] text-white rounded-3xl p-8 shadow-2xl border border-[#1f2448] flex flex-col justify-between relative overflow-hidden">
            <div>
              {/* Card Header */}
              <div className="text-[11px] font-bold tracking-[0.15em] text-[#ec4899] uppercase mb-2">
                WORTH DISCUSSING
              </div>
              <h3 className="text-2xl font-bold tracking-tight mb-8">
                Your resilience notes
              </h3>

              {/* Notes Timeline / Items */}
              <div className="relative pl-6 flex flex-col gap-8 mb-8">
                {/* Vertical connecting line */}
                <div className="absolute left-[7px] top-[6px] bottom-[6px] w-[2px] bg-[#2a305e]" />

                {/* Item 1 */}
                <div className="relative flex flex-col gap-1">
                  <div className="absolute -left-6 top-1 w-3.5 h-3.5 rounded-full bg-[#ec4899] border-2 border-[#111328]" />
                  <p className="text-sm font-semibold leading-snug">
                    <span className="text-white">Everyday use:</span>{" "}
                    <span className="text-[#9ca3af] font-normal">
                      business broadband or full fibre may be enough —
                      we&apos;ll confirm what&apos;s available at your site.
                    </span>
                  </p>
                </div>

                {/* Item 2 */}
                <div className="relative flex flex-col gap-1">
                  <div className="absolute -left-6 top-1 w-3.5 h-3.5 rounded-full bg-[#ec4899] border-2 border-[#111328]" />
                  <p className="text-sm font-semibold leading-snug">
                    <span className="text-white">Dependencies:</span>{" "}
                    <span className="text-[#9ca3af] font-normal">
                      tell us about phones, alarms and payment terminals before
                      switching.
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Action Section */}
            <div className="flex flex-col gap-4">
              <a
                href="#"
                className="w-full bg-gradient-to-r from-[#db2777] to-[#e11d48] hover:from-[#be185d] hover:to-[#9f1239] text-white font-semibold py-4 px-6 rounded-2xl flex items-center justify-between shadow-lg transition-all duration-200"
              >
                <span>Discuss your requirements</span>
                <ChevronRight className="w-5 h-5" />
              </a>
              <p className="text-[11px] text-[#9ca3af] text-left leading-normal">
                These are your preferences — not a speed or service guarantee.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
