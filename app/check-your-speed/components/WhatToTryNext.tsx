"use client";

import React, { useState } from "react";
import { Laptop, Home, DoorOpen, WifiOff, Plus, Minus } from "lucide-react";

const SITUATION_CARDS = [
  {
    id: "one-device-slow",
    title: "Only one device is slow",
    icon: Laptop,
    steps: [
      "Restart the slow device (laptop, phone, or tablet).",
      "Check if a large background download, update, or cloud backup is running.",
      "Move closer to your wireless router to see if signal strength improves.",
    ],
  },
  {
    id: "all-devices-slow",
    title: "All devices are slow",
    icon: Home,
    steps: [
      "Restart your main broadband router by unplugging it for 30 seconds and plugging it back in.",
      "Test your speed using an Ethernet cable connected directly to the router to isolate Wi-Fi issues.",
      "Check if there are any reported network maintenance outages in your local area.",
    ],
  },
  {
    id: "wifi-weak-one-room",
    title: "Wi-Fi is weak in one room",
    icon: DoorOpen,
    steps: [
      "Reposition your router away from thick walls, large metal appliances, or mirrors.",
      "Elevate your router off the floor onto a desk or shelf for better signal propagation.",
      "Consider using a Wi-Fi extender, mesh system, or powerline adapter to reach distant rooms.",
    ],
  },
  {
    id: "connection-drops",
    title: "The connection drops",
    icon: WifiOff,
    steps: [
      "Check all physical cables, telephone socket microfilters, and power cords to ensure they are secure.",
      "Log into your router settings to check if your line is frequently disconnecting from the exchange.",
      "Contact your broadband provider to investigate potential line faults or cabinet issues.",
    ],
  },
] as const;

export default function WhatToTryNext() {
  const [openIds, setOpenIds] = useState<string[]>([]);

  const toggleCard = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  return (
    <section className="w-full bg-[#F5F6FB] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1300px]">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#434A6E]">
            COMMON SITUATIONS
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#11183C] sm:text-4xl lg:text-[42px] lg:leading-[1.15]">
            What to try next
          </h2>
          <p className="mt-3.5 text-sm leading-relaxed text-[#4B5563] sm:text-base">
            Open a card for steps to try.
          </p>
        </div>

        {/* Four-Column Cards Grid */}
        <div className="mx-auto mt-12 grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SITUATION_CARDS.map((card) => {
            const Icon = card.icon;
            const isOpen = openIds.includes(card.id);

            return (
              <div
                key={card.id}
                className="flex flex-col justify-between rounded-3xl border border-[#ECEEF6] bg-white p-6 shadow-[0_8px_30px_rgba(17,24,60,0.04)] transition-all sm:p-7"
              >
                <div>
                  {/* Icon Badge & Expand Action */}
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#F4297B] to-[#7C3AED] text-white shadow-md">
                      <Icon className="h-5 w-5" strokeWidth={2.25} />
                    </div>

                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => toggleCard(card.id)}
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FCE8F1] text-[#E11D74] transition-transform hover:scale-105"
                    >
                      {isOpen ? (
                        <Minus className="h-4 w-4" strokeWidth={2.5} />
                      ) : (
                        <Plus className="h-4 w-4" strokeWidth={2.5} />
                      )}
                    </button>
                  </div>

                  <h3 className="mt-6 text-lg font-extrabold tracking-tight text-[#11183C]">
                    {card.title}
                  </h3>
                </div>

                {/* Expandable Steps Section */}
                {isOpen ? (
                  <div className="mt-5 border-t border-[#EEF0F7] pt-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#7C3AED]">
                      Steps to try:
                    </p>
                    <ul className="mt-2.5 space-y-2">
                      {card.steps.map((step, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-2 text-xs leading-relaxed text-[#4B5563]"
                        >
                          <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#E11D74]" />
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <div className="mt-6 border-t border-[#EEF0F7] pt-4">
                    <button
                      type="button"
                      onClick={() => toggleCard(card.id)}
                      className="inline-flex items-center gap-1 text-sm font-bold text-[#E11D74] transition-colors hover:text-[#C11260]"
                    >
                      <span>See steps</span>
                      <span className="text-base font-extrabold">+</span>
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
