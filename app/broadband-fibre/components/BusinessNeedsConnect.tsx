"use client";
import React, { useState } from "react";
import {
  Cloud,
  PhoneCall,
  CreditCard,
  Wifi,
  Building2,
  Lock,
  RefreshCw,
  Check,
} from "lucide-react";

export default function BusinessNeedsConnect() {
  const [selectedPills, setSelectedPills] = useState<string[]>([
    "Cloud apps",
    "Phones",
    "Card payments",
    "Guest Wi-Fi",
    "Several sites",
    "Remote access",
  ]);

  const togglePill = (name: string) => {
    if (selectedPills.includes(name)) {
      setSelectedPills(selectedPills.filter((p) => p !== name));
    } else {
      setSelectedPills([...selectedPills, name]);
    }
  };

  const pills = [
    { name: "Cloud apps", icon: Cloud },
    { name: "Phones", icon: PhoneCall },
    { name: "Card payments", icon: CreditCard },
    { name: "Guest Wi-Fi", icon: Wifi },
    { name: "Several sites", icon: Building2 },
    { name: "Remote access", icon: Lock },
  ];

  const cards = [
    {
      id: "cloud",
      title: "Cloud & collaboration",
      description:
        "Video calls, file sharing and cloud apps need good upload speed.",
      icon: Cloud,
      image: "/Images/brod/5.png",
      pillKey: "Cloud apps",
    },
    {
      id: "phones",
      title: "Phones & voice",
      description: "Internet-based calling depends on a stable connection.",
      icon: PhoneCall,
      image: "/Images/brod/6.png",
      pillKey: "Phones",
    },
    {
      id: "payments",
      title: "Card payments",
      description: "Payment terminals need dependable connectivity.",
      icon: CreditCard,
      image: "/Images/brod/7.png",
      pillKey: "Card payments",
    },
    {
      id: "wifi",
      title: "Guest Wi-Fi",
      description: "Keep guest access separate from business systems.",
      icon: Wifi,
      image: "/Images/brod/8.png",
      pillKey: "Guest Wi-Fi",
    },
    {
      id: "backups",
      title: "Backups",
      description: "Large backups benefit from strong upload speeds.",
      icon: RefreshCw,
      image: "/Images/brod/9.png",
      pillKey: "Several sites", // mapped to card section arrangement matching design
    },
    {
      id: "remote",
      title: "Remote access & VPN",
      description: "Staff connecting in may need a static IP.",
      icon: Lock,
      image: "/Images/brod/10.png",
      pillKey: "Remote access",
    },
  ];

  return (
    <div className="w-full bg-[#F5F6FB] py-16 px-4 flex justify-center font-sans">
      <div className="w-full max-w-[1300px] flex flex-col items-center">
        {/* Header section */}
        <div className="text-center mb-8">
          <span className="text-xs font-bold tracking-[0.15em] text-[#1e2230] uppercase mb-3 block">
            YOUR BUSINESS
          </span>
          <h2 className="text-[38px] leading-[48px] font-extrabold text-[#111827] max-w-[650px] tracking-tight mb-3">
            Tell us what your business needs to connect
          </h2>
          <p className="text-base text-[#4b5563] font-normal">
            Choose what applies. We&apos;ll highlight what to think about — it
            doesn&apos;t check availability.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12 max-w-[950px]">
          {pills.map((pill) => {
            const Icon = pill.icon;
            const isSelected = selectedPills.includes(pill.name);
            return (
              <button
                key={pill.name}
                type="button"
                onClick={() => togglePill(pill.name)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold transition-all duration-200 border ${
                  isSelected
                    ? "bg-white text-[#db2777] border-[#fce7f3] shadow-sm ring-1 ring-[#f472b6]/30"
                    : "bg-white text-[#374151] border-[#e5e7eb] hover:border-gray-300"
                }`}
              >
                <Icon
                  className={`w-4 h-4 ${isSelected ? "text-[#db2777]" : "text-[#6b7280]"}`}
                />
                <span>{pill.name}</span>
              </button>
            );
          })}
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mb-6">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-[#f3f4f6] flex items-center justify-between gap-4 transition-all duration-300 hover:shadow-[0_10px_25px_-5px_rgba(0,0,0,0.08)]"
              >
                <div className="flex flex-col justify-between h-full py-1 flex-1">
                  <div>
                    <div className="mb-3 text-[#db2777]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-[#111827] mb-2">
                      {card.title}
                    </h3>
                    <p className="text-sm text-[#4b5563] leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
                <div className="w-[110px] h-[95px] shrink-0 rounded-xl overflow-hidden bg-[#f3f4f6]">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="w-full bg-[#f0f4ff] rounded-2xl p-5 border border-[#e0e7ff] flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#3b82f6] shadow-sm shrink-0">
            <Building2 className="w-5 h-5" />
          </div>
          <p className="text-sm text-[#1e293b] font-medium leading-snug">
            <span className="font-bold text-[#1e3a8a]">Several sites?</span>{" "}
            Each office or shop is checked separately — one postcode can&apos;t
            confirm service for all of them.
          </p>
        </div>
      </div>
    </div>
  );
}
