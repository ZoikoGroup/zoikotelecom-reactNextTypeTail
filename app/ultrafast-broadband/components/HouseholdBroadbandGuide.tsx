"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Tv,
  Video,
  Gamepad2,
  ArrowUp,
  Check,
  ChevronRight,
} from "lucide-react";

const SIMULTANEOUS_ACTIVITIES = [
  {
    id: "streaming",
    label: "HD/4K streaming",
    icon: Tv,
  },
  {
    id: "video-calls",
    label: "Video calls",
    icon: Video,
  },
  {
    id: "gaming",
    label: "Online gaming",
    icon: Gamepad2,
  },
  {
    id: "uploads",
    label: "Big uploads",
    icon: ArrowUp,
  },
] as const;

const GUIDE_FEATURES = [
  "Several 4K streams at once",
  "4 people online without waiting",
] as const;

type ActivityId = (typeof SIMULTANEOUS_ACTIVITIES)[number]["id"];

export default function HouseholdBroadbandGuide() {
  const [peopleOnline, setPeopleOnline] = useState<number>(4);
  const [connectedDevices, setConnectedDevices] = useState<number>(12);
  const [selectedActivities, setSelectedActivities] = useState<ActivityId[]>([
    "streaming",
  ]);

  const toggleActivity = (id: ActivityId) => {
    setSelectedActivities((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  return (
    <section className="w-full bg-gradient-to-br from-[#0F0E3B] via-[#171454] to-[#231975] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1300px]">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#CBD0E8]">
            YOUR HOUSEHOLD
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-[42px] lg:leading-[1.15]">
            Could your home benefit from
            <br className="hidden sm:inline" /> ultrafast?
          </h2>
          <p className="mt-4 text-sm text-[#D1D5EB] sm:text-base">
            A quick guide to what changes at home. It isn&apos;t a speed
            guarantee.
          </p>
        </div>

        {/* Two-Column Cards */}
        <div className="mx-auto mt-12 grid max-w-[1300px] grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Left Interactive Card */}
          <div className="rounded-3xl border border-white/10 bg-[#1F1F56]/80 p-6 shadow-xl backdrop-blur-sm sm:p-8">
            {/* People online at once */}
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="people-online-slider"
                  className="text-sm font-bold text-white"
                >
                  People online at once
                </label>
                <span className="text-sm font-bold text-[#F4297B]">
                  {peopleOnline}
                </span>
              </div>
              <input
                id="people-online-slider"
                type="range"
                min={1}
                max={10}
                value={peopleOnline}
                onChange={(e) => setPeopleOnline(Number(e.target.value))}
                className="mt-3 h-3 w-full cursor-pointer appearance-none rounded-sm bg-white accent-[#E11D74]"
              />
            </div>

            {/* Connected devices */}
            <div className="mt-7">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="connected-devices-slider"
                  className="text-sm font-bold text-white"
                >
                  Connected devices
                </label>
                <span className="text-sm font-bold text-[#F4297B]">
                  {connectedDevices}
                </span>
              </div>
              <input
                id="connected-devices-slider"
                type="range"
                min={1}
                max={30}
                value={connectedDevices}
                onChange={(e) => setConnectedDevices(Number(e.target.value))}
                className="mt-3 h-3 w-full cursor-pointer appearance-none rounded-sm bg-white accent-[#E11D74]"
              />
            </div>

            {/* What happens at the same time? */}
            <div className="mt-7">
              <p className="text-sm font-bold text-white">
                What happens at the same time?
              </p>
              <div className="mt-3.5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {SIMULTANEOUS_ACTIVITIES.map((activity) => {
                  const Icon = activity.icon;
                  const isSelected = selectedActivities.includes(activity.id);

                  return (
                    <button
                      key={activity.id}
                      type="button"
                      aria-pressed={isSelected}
                      onClick={() => toggleActivity(activity.id)}
                      className={`flex min-h-[108px] flex-col items-center justify-center rounded-2xl border px-2.5 py-4 text-center transition-all ${
                        isSelected
                          ? "border-[#C8287C] bg-[#451E5E]/90 text-white shadow-[0_0_0_1px_rgba(244,41,123,0.35)]"
                          : "border-white/10 bg-[#23225C]/70 text-[#E2E6F7] hover:border-white/25 hover:bg-[#2A296B]"
                      }`}
                    >
                      <Icon
                        className="h-5 w-5 shrink-0 text-[#E85D9E]"
                        strokeWidth={2}
                      />
                      <span className="mt-2.5 text-sm font-semibold leading-snug">
                        {activity.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Guide Card */}
          <div className="flex flex-col justify-between rounded-3xl bg-white p-6 shadow-xl sm:p-9">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#E11D74]">
                OUR GUIDE
              </p>
              <h3 className="mt-2.5 text-2xl font-extrabold tracking-tight text-[#11183C] sm:text-[32px] sm:leading-tight">
                Superfast may be enough
              </h3>
              <p className="mt-3.5 text-sm leading-relaxed text-[#4B5563] sm:text-[15px]">
                A superfast plan may suit your home. Ultrafast could help if you
                add more people or 4K streaming.
              </p>

              <ul className="mt-5 space-y-2.5">
                {GUIDE_FEATURES.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2.5 text-sm text-[#4B5563]"
                  >
                    <Check
                      className="h-4 w-4 shrink-0 text-[#E11D74]"
                      strokeWidth={2.75}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-7">
              <Link
                href="/broadband/plans"
                className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-[#E11D74] to-[#D6156C] px-6 py-3.5 text-sm font-bold text-white shadow-[0_8px_20px_rgba(225,29,116,0.32)] transition-transform hover:scale-[1.01] hover:from-[#D01769] hover:to-[#C11260]"
              >
                <span>View broadband plans</span>
                <ChevronRight className="h-4 w-4" strokeWidth={2.5} />
              </Link>

              <p className="mt-4 text-sm text-[#94A3B8]">
                Real speeds depend on your address, plan, equipment and Wi-Fi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
