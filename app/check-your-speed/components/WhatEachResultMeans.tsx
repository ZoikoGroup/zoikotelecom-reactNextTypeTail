import React from "react";
import { Clock } from "lucide-react";

const RESULT_CARDS = [
  {
    id: "download",
    unit: "Mbit/s",
    title: "Download",
    description: "How fast data reaches you — streaming, browsing, downloads.",
    subUnit: "Megabits per second",
  },
  {
    id: "upload",
    unit: "Mbit/s",
    title: "Upload",
    description: "How fast you send data — video calls, backups, sharing.",
    subUnit: "Megabits per second",
  },
  {
    id: "latency",
    unit: "ms",
    title: "Latency",
    description: "The delay before data moves. Lower is better.",
    subUnit: "Milliseconds",
  },
  {
    id: "jitter",
    unit: "ms",
    title: "Jitter",
    description:
      "How much latency varies. Shown only if your test measures it.",
    subUnit: "Optional",
  },
  {
    id: "packet-loss",
    unit: "%",
    title: "Packet loss",
    description: "Data that doesn't arrive. Shown only if measured.",
    subUnit: "Optional",
  },
] as const;

export default function WhatEachResultMeans() {
  return (
    <section className="w-full bg-gradient-to-br from-[#060C36] via-[#081040] to-[#2A1A6E] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1300px]">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#CBD0E8]">
            UNDERSTAND THE NUMBERS
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-[42px] lg:leading-[1.15]">
            What each result means
          </h2>
          <p className="mt-3.5 text-sm leading-relaxed text-[#D1D5EB] sm:text-base">
            Only results a test actually measures are shown — we never fill in
            missing numbers.
          </p>
        </div>

        {/* Five-Column Cards Grid */}
        <div className="mx-auto mt-12 grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {RESULT_CARDS.map((card) => (
            <div
              key={card.id}
              className="flex flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-sm sm:p-7"
            >
              <div>
                <span className="bg-gradient-to-r from-[#F4297B] to-[#C042FC] bg-clip-text text-2xl font-black tracking-tight text-transparent">
                  {card.unit}
                </span>

                <h3 className="mt-4 text-lg font-extrabold tracking-tight text-white">
                  {card.title}
                </h3>

                <p className="mt-2.5 text-sm leading-relaxed text-[#B8C0E0]">
                  {card.description}
                </p>
              </div>

              <div className="mt-6 border-t border-white/10 pt-4">
                <span className="text-xs font-semibold text-[#7FD3FF]">
                  {card.subUnit}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner Callout */}
        <div className="mx-auto mt-8 max-w-7xl rounded-2xl bg-[#EEF2FF] px-5 py-4 shadow-lg backdrop-blur-md sm:px-6 sm:py-5">
          <div className="flex items-start gap-4 sm:items-center">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-[#23307A]">
              <Clock className="h-5 w-5" strokeWidth={2.25} />
            </div>
            <p className="text-sm leading-relaxed text-[#4B5563]">
              <strong className="font-bold text-[#11183C]">
                One test isn&apos;t the full picture.
              </strong>{" "}
              Take several readings at different times of day. A single browser
              test can&apos;t be compared directly with the speeds in your
              contract.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
