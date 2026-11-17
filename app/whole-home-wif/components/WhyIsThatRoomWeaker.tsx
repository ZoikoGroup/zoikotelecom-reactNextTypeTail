"use client";

import React, { useState } from "react";

const ROOM_OPTIONS = [
  "Upstairs bedroom",
  "Downstairs lounge",
  "Home office",
  "Kitchen / Dining area",
] as const;

const OBSTACLE_OPTIONS = [
  { id: "thick-walls", label: "Thick or brick walls" },
  { id: "floor-ceiling", label: "A floor or ceiling" },
  { id: "metal-mirrors", label: "Metal or mirrors" },
  { id: "kitchen-appliances", label: "Kitchen appliances" },
  { id: "long-distance", label: "A long distance" },
  { id: "outside-wall", label: "An outside wall" },
] as const;

export default function WhyIsThatRoomWeaker() {
  const [selectedRoom, setSelectedRoom] = useState<string>("Upstairs bedroom");
  const [selectedObstacles, setSelectedObstacles] = useState<string[]>([
    "floor-ceiling",
  ]);

  const toggleObstacle = (id: string) => {
    setSelectedObstacles((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  return (
    <section className="w-full bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1300px]">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#434A6E]">
            ROOM EXPLORER
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#11183C] sm:text-4xl lg:text-[42px] lg:leading-[1.15]">
            Why is that room weaker?
          </h2>
          <p className="mt-3.5 text-sm leading-relaxed text-[#4B5563] sm:text-base">
            Pick a room and what&apos;s in the way. This is general advice — it
            can&apos;t measure your signal.
          </p>
        </div>

        {/* Two-Column Interactive Grid */}
        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Left Column: Input Controls */}
          <div className="flex flex-col justify-between rounded-3xl border border-[#ECEEF6] bg-white p-7 shadow-[0_8px_30px_rgba(17,24,60,0.04)] sm:p-8 lg:col-span-6">
            <div>
              {/* Room Selector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wide text-[#434A6E]">
                  Which room?
                </label>
                <div className="mt-1.5">
                  <select
                    value={selectedRoom}
                    onChange={(e) => setSelectedRoom(e.target.value)}
                    className="w-full rounded-xl border border-[#E6E9F2] bg-[#FAFAFD] px-4 py-3 text-sm font-semibold text-[#11183C] focus:border-[#7C3AED] focus:bg-white focus:outline-none"
                  >
                    {ROOM_OPTIONS.map((room) => (
                      <option key={room} value={room}>
                        {room}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Obstacles Checkboxes */}
              <div className="mt-6">
                <label className="block text-xs font-bold uppercase tracking-wide text-[#434A6E]">
                  What&apos;s between it and the router?
                </label>
                <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {OBSTACLE_OPTIONS.map((obstacle) => {
                    const isChecked = selectedObstacles.includes(obstacle.id);
                    return (
                      <button
                        key={obstacle.id}
                        type="button"
                        onClick={() => toggleObstacle(obstacle.id)}
                        className={`flex items-center gap-3 rounded-xl border p-3.5 text-left text-xs font-bold transition-all sm:text-sm ${
                          isChecked
                            ? "border-[#7C3AED] bg-[#F5F3FB] text-[#11183C]"
                            : "border-[#E6E9F2] bg-white text-[#4B5563] hover:border-[#DCE1F0]"
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => {}}
                          className="h-4 w-4 rounded border-[#D1D5DB] text-[#E11D74] focus:ring-0"
                        />
                        <span>{obstacle.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Insight Card (Dark Gradient) */}
          <div className="flex flex-col justify-between rounded-3xl bg-gradient-to-br from-[#060C36] via-[#081040] to-[#2A1A6E] p-7 text-white shadow-[0_12px_35px_rgba(17,24,60,0.15)] sm:p-8 lg:col-span-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[#F4297B]">
                THINGS TO CONSIDER
              </p>
              <h3 className="mt-2 text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                {selectedRoom}
              </h3>

              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <span className="mt-1 font-bold text-[#F4297B]">→</span>
                  <p className="text-sm leading-relaxed text-[#D1D5EB]">
                    {selectedRoom} rooms often sit behind a floor and several
                    walls.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 font-bold text-[#F4297B]">→</span>
                  <p className="text-sm leading-relaxed text-[#D1D5EB]">
                    A router downstairs near the stairs can help reach upstairs.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 border-t border-white/10 pt-4">
              <p className="text-xs leading-relaxed text-[#94A3B8]">
                General education only. It doesn&apos;t test or predict your
                signal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
