"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Tv, Video, Gamepad2, ArrowUp, ChevronRight } from "lucide-react";

const ONLINE_ACTIVITIES = [
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

const SPEED_TIERS = [
  { label: "Standard", active: true },
  { label: "Superfast", active: true },
  { label: "Ultrafast", active: false },
] as const;

type ActivityId = (typeof ONLINE_ACTIVITIES)[number]["id"];

export default function BroadbandBasics() {
  const [peopleOnline, setPeopleOnline] = useState<number>(3);
  const [connectedDevices, setConnectedDevices] = useState<number>(8);
  const [selectedActivities, setSelectedActivities] = useState<ActivityId[]>([
    "streaming",
  ]);

  const toggleActivity = (id: ActivityId) => {
    setSelectedActivities((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  return (
    <section className="w-full bg-[#F5F6FB] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1300px]">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#434A6E]">
            BROADBAND BASICS
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#11183C] sm:text-4xl lg:text-[42px] lg:leading-[1.15]">
            What does your household need?
          </h2>
          <p className="mt-3.5 text-sm leading-relaxed text-[#4B5563] sm:text-base">
            Tell us how you use the internet. We&apos;ll suggest a speed band to
            look for — it isn&apos;t a promise of speed at your address.
          </p>
        </div>

        {/* Two-Column Cards */}
        <div className="mx-auto mt-12 grid max-w-[1300px] grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Left Light Input Card */}
          <div className="flex flex-col justify-between rounded-3xl border border-[#ECEEF6] bg-white p-6 shadow-[0_8px_28px_rgba(17,24,60,0.04)] sm:p-9">
            <div>
              {/* People online at the same time */}
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="people-online-same-time"
                    className="text-sm font-bold text-[#11183C]"
                  >
                    People online at the same time
                  </label>
                  <span className="text-sm font-bold text-[#E11D74]">
                    {peopleOnline}
                  </span>
                </div>
                <input
                  id="people-online-same-time"
                  type="range"
                  min={1}
                  max={10}
                  value={peopleOnline}
                  onChange={(e) => setPeopleOnline(Number(e.target.value))}
                  className="mt-3 h-2 w-full cursor-pointer appearance-none rounded-full bg-[#EEF0F7] accent-[#E11D74]"
                />
              </div>

              {/* Connected devices */}
              <div className="mt-7">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="household-connected-devices"
                    className="text-sm font-bold text-[#11183C]"
                  >
                    Connected devices
                  </label>
                  <span className="text-sm font-bold text-[#E11D74]">
                    {connectedDevices}
                  </span>
                </div>
                <input
                  id="household-connected-devices"
                  type="range"
                  min={1}
                  max={30}
                  value={connectedDevices}
                  onChange={(e) => setConnectedDevices(Number(e.target.value))}
                  className="mt-3 h-2 w-full cursor-pointer appearance-none rounded-full bg-[#EEF0F7] accent-[#E11D74]"
                />
              </div>
            </div>

            {/* What do you do online? */}
            <div className="mt-8">
              <p className="text-sm font-bold text-[#11183C]">
                What do you do online?
              </p>
              <div className="mt-3.5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {ONLINE_ACTIVITIES.map((activity) => {
                  const Icon = activity.icon;
                  const isSelected = selectedActivities.includes(activity.id);

                  return (
                    <button
                      key={activity.id}
                      type="button"
                      aria-pressed={isSelected}
                      onClick={() => toggleActivity(activity.id)}
                      className={`flex min-h-[104px] flex-col items-center justify-center rounded-2xl border px-2.5 py-4 text-center transition-all ${
                        isSelected
                          ? "border-[#F4297B] bg-[#FDF2F7] text-[#11183C]"
                          : "border-[#ECEEF6] bg-white text-[#11183C] hover:border-[#DCE1F0] hover:bg-[#FAFBFD]"
                      }`}
                    >
                      <Icon
                        className="h-5 w-5 shrink-0 text-[#E11D74]"
                        strokeWidth={2}
                      />
                      <span className="mt-2.5 text-sm font-bold leading-snug">
                        {activity.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Dark Suggested Speed Card */}
          <div className="relative flex flex-col justify-between overflow-hidden rounded-3xl bg-gradient-to-br from-[#131144] via-[#21196E] to-[#5629C6] p-6 text-white shadow-[0_12px_30px_rgba(17,24,60,0.12)] sm:p-9">
            {/* Decorative Subtle Arc */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full border-[24px] border-white/[0.06]"
            />

            <div className="relative z-10">
              <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#F46BA8]">
                SUGGESTED SPEED BAND
              </p>
              <h3 className="mt-2.5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Superfast
              </h3>
              <p className="mt-3.5 max-w-md text-sm leading-relaxed text-[#E2E6F7] sm:text-[15px]">
                Around 30 Mbit/s and above suits most households who stream and
                browse.
              </p>

              {/* Speed Band Progress Bars */}
              <div className="mt-7 grid grid-cols-3 gap-2.5">
                {SPEED_TIERS.map((tier) => (
                  <div key={tier.label}>
                    <div
                      className={`h-2 w-full rounded-full ${
                        tier.active
                          ? "bg-gradient-to-r from-[#E11D74] to-[#F45299]"
                          : "bg-white/20"
                      }`}
                    />
                    <span className="mt-2 block text-sm text-[#D1D5EB]">
                      {tier.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10 mt-8">
              <Link
                href="/broadband/plans"
                className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-[#E11D74] to-[#D6156C] px-6 py-3.5 text-sm font-bold text-white shadow-[0_8px_22px_rgba(225,29,116,0.38)] transition-transform hover:scale-[1.01] hover:from-[#D01769] hover:to-[#C11260]"
              >
                <span>View broadband plans</span>
                <ChevronRight className="h-4 w-4" strokeWidth={2.5} />
              </Link>

              <p className="mt-5 text-sm leading-relaxed text-[#CBD0E8]">
                A guide only. Real speeds depend on your address, connection
                type, equipment and Wi-Fi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
