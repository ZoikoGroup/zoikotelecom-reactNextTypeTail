"use client";

import React, { useState } from "react";
import Link from "next/link";
import { DoorOpen, Home, Laptop, WifiOff, ChevronRight } from "lucide-react";

const TROUBLE_OPTIONS = [
  {
    id: "one-room",
    title: "One room",
    subtitle: "Weak signal in a particular room",
    icon: DoorOpen,
    steps: [
      "Check how far the room is from your router and how many walls are in between.",
      "Thick walls, metal, mirrors and appliances can block Wi-Fi.",
      "Try both Wi-Fi bands if your router has them.",
      "A mesh system or wired access point may help larger or awkward homes.",
    ],
    goodToKnow:
      "Equipment like mesh can help, but results depend on your home.",
  },
  {
    id: "everywhere",
    title: "Everywhere",
    subtitle: "Every room and device is slow",
    icon: Home,
    steps: [
      "Restart your main broadband router by unplugging it for 30 seconds.",
      "Test your speed using an Ethernet cable connected directly to the router.",
      "Check if background downloads or updates are running on multiple devices.",
      "Contact your provider if slowdowns persist across all devices.",
    ],
    goodToKnow:
      "Whole-home slowdowns are often linked to line capacity or router issues.",
  },
  {
    id: "one-device",
    title: "One device",
    subtitle: "Only one phone, tablet or laptop struggles",
    icon: Laptop,
    steps: [
      "Restart the specific device experiencing the slowdown.",
      "Check for pending operating system updates or background apps.",
      "Move closer to the router to test if signal strength is the limiting factor.",
    ],
    goodToKnow:
      "Device-specific issues are usually related to hardware, settings, or Wi-Fi antennas.",
  },
  {
    id: "dropouts",
    title: "Dropouts",
    subtitle: "The connection keeps dropping",
    icon: WifiOff,
    steps: [
      "Verify all physical cables, microfilters, and power cords are plugged in securely.",
      "Check if disconnections happen at specific times or across all devices.",
      "Contact support to investigate line stability and exchange connectivity.",
    ],
    goodToKnow:
      "Frequent dropouts may indicate line faults that require technician assistance.",
  },
] as const;

export default function WhereAreYouHavingTrouble() {
  const [selectedId, setSelectedId] = useState<string>("one-room");

  const activeOption =
    TROUBLE_OPTIONS.find((opt) => opt.id === selectedId) || TROUBLE_OPTIONS[0];

  return (
    <section className="w-full bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1300px]">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#434A6E]">
            START HERE
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#11183C] sm:text-4xl lg:text-[42px] lg:leading-[1.15]">
            Where are you having trouble?
          </h2>
          <p className="mt-3.5 text-sm leading-relaxed text-[#4B5563] sm:text-base">
            Choose what sounds most like your home.
          </p>
        </div>

        {/* Four-Column Selection Cards */}
        <div className="mx-auto mt-12 grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TROUBLE_OPTIONS.map((option) => {
            const Icon = option.icon;
            const isSelected = selectedId === option.id;

            return (
              <button
                key={option.id}
                type="button"
                onClick={() => setSelectedId(option.id)}
                className={`flex flex-col justify-between rounded-3xl border p-6 text-left transition-all sm:p-7 ${
                  isSelected
                    ? "border-[#E11D74] bg-white ring-2 ring-[#E11D74]/20 shadow-[0_12px_30px_rgba(225,29,116,0.08)]"
                    : "border-[#ECEEF6] bg-white shadow-[0_6px_24px_rgba(17,24,60,0.04)] hover:border-[#DCE1F0]"
                }`}
              >
                <div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#F4297B] to-[#7C3AED] text-white shadow-md">
                    <Icon className="h-5 w-5" strokeWidth={2.25} />
                  </div>

                  <h3 className="mt-6 text-lg font-extrabold tracking-tight text-[#11183C]">
                    {option.title}
                  </h3>

                  <p className="mt-1 text-sm font-medium text-[#4B5563]">
                    {option.subtitle}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Bottom Interactive Detail Card */}
        <div className="mx-auto mt-8 max-w-7xl rounded-3xl border border-[#ECEEF6] bg-white p-6 shadow-[0_8px_30px_rgba(17,24,60,0.04)] sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
            {/* Left Column: Title & Steps */}
            <div className="lg:col-span-7">
              <h3 className="text-2xl font-extrabold tracking-tight text-[#11183C]">
                {activeOption.title}
              </h3>
              <p className="mt-1.5 text-sm font-medium text-[#4B5563]">
                {activeOption.subtitle}. Try these steps in order.
              </p>

              <ul className="mt-6 space-y-3.5">
                {activeOption.steps.map((step, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-sm leading-relaxed text-[#4B5563]"
                  >
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#E11D74]" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column: Good to Know Callout Box */}
            <div className="lg:col-span-5">
              <div className="flex flex-col justify-between rounded-2xl bg-[#F4F5F9] p-6 sm:p-7">
                <div>
                  <h4 className="text-sm font-extrabold uppercase tracking-wider text-[#11183C]">
                    Good to know
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-[#4B5563]">
                    {activeOption.goodToKnow}
                  </p>
                </div>

                <div className="mt-6">
                  <Link
                    href="/contact"
                    className="inline-flex w-full items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-[#E11D74] to-[#D6156C] px-5 py-3.5 text-sm font-bold text-white shadow-[0_8px_20px_rgba(225,29,116,0.32)] transition-transform hover:scale-[1.01]"
                  >
                    <span>Ask about Wi-Fi support</span>
                    <ChevronRight className="h-4 w-4" strokeWidth={2.5} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
