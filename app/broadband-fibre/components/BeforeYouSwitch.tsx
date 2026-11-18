"use client";
import React, { useState } from "react";

export default function BeforeYouSwitch() {
  const [selectedItems, setSelectedItems] = useState<string[]>([
    "Phone lines or VoIP",
    "Alarms and lift lines",
    "Card payment terminals",
    "Fax or franking machines",
    "Static IP addresses",
    "VPN or remote access",
  ]);

  const toggleItem = (title: string) => {
    if (selectedItems.includes(title)) {
      setSelectedItems(selectedItems.filter((i) => i !== title));
    } else {
      setSelectedItems([...selectedItems, title]);
    }
  };

  const options = [
    {
      title: "Phone lines or VoIP",
      description: "Business numbers and phone systems.",
    },
    {
      title: "Alarms and lift lines",
      description: "Security or safety lines that use the connection.",
    },
    {
      title: "Card payment terminals",
      description: "Point-of-sale and payment devices.",
    },
    {
      title: "Fax or franking machines",
      description: "Older equipment that may need a phone line.",
    },
    {
      title: "Static IP addresses",
      description: "Used for remote access, cameras or servers.",
    },
    {
      title: "VPN or remote access",
      description: "Staff or systems connecting in from outside.",
    },
  ];

  return (
    <div className="w-full bg-[#F5F6FB] py-16 px-4 flex justify-center font-sans">
      <div className="w-full max-w-[1300px] flex flex-col items-center">
        {/* Header section */}
        <div className="text-center mb-10">
          <span className="text-xs font-bold tracking-[0.15em] text-[#1e2230] uppercase mb-3 block">
            BEFORE YOU SWITCH
          </span>
          <h2 className="text-[38px] leading-[48px] font-extrabold text-[#111827] max-w-[700px] tracking-tight mb-3">
            What else depends on your line?
          </h2>
          <p className="text-base text-[#4b5563] font-normal">
            Tick anything you use today. Tell us when you enquire so nothing
            stops working.
          </p>
        </div>

        {/* Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full mb-12">
          {options.map((item, index) => {
            const isChecked = selectedItems.includes(item.title);
            return (
              <button
                key={index}
                type="button"
                onClick={() => toggleItem(item.title)}
                className={`bg-white rounded-2xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border text-left flex items-start gap-4 transition-all duration-200 ${
                  isChecked
                    ? "border-[#db2777] ring-1 ring-[#f472b6]/30"
                    : "border-[#f3f4f6] hover:border-gray-300"
                }`}
              >
                <span
                  className={`w-5 h-5 rounded-[6px] border mt-0.5 flex items-center justify-center shrink-0 transition-colors ${
                    isChecked
                      ? "bg-[#db2777] border-[#db2777] text-white"
                      : "border-gray-300 bg-white"
                  }`}
                >
                  {isChecked && (
                    <svg
                      className="w-3.5 h-3.5 stroke-[3]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )}
                </span>
                <div>
                  <h3 className="text-base font-bold text-[#111827] mb-1 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#4b5563] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Image Container */}
        <div className="w-full h-[450px] md:h-[520px] rounded-3xl overflow-hidden shadow-[0_10px_30px_-5px_rgba(0,0,0,0.08)] bg-[#e5e7eb]">
          <img
            src="/Images/brod/11.png"
            alt="Team collaborating and reviewing documents"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
}
