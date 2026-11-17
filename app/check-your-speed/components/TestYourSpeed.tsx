"use client";

import React, { useState } from "react";
import { Gauge, Plus } from "lucide-react";

interface Reading {
  id: string;
  time: string;
  download: string;
  upload: string;
  latency: string;
  connection: string;
}

export default function TestYourSpeed() {
  const [download, setDownload] = useState("");
  const [upload, setUpload] = useState("");
  const [latency, setLatency] = useState("");
  const [connection, setConnection] = useState("Wi-Fi");
  const [readings, setReadings] = useState<Reading[]>([]);

  const handleAddReading = () => {
    if (!download && !upload && !latency) return;

    const newReading: Reading = {
      id: Date.now().toString(),
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      download: download ? `${download} Mbit/s` : "—",
      upload: upload ? `${upload} Mbit/s` : "—",
      latency: latency ? `${latency} ms` : "—",
      connection: connection || "—",
    };

    setReadings([newReading, ...readings]);
    setDownload("");
    setUpload("");
    setLatency("");
  };

  return (
    <section className="w-full bg-[#FFFFFF] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1300px]">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#434A6E]">
            RUN A TEST
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#11183C] sm:text-4xl lg:text-[36px] lg:leading-[1.15]">
            Test your speed and keep a record
          </h2>
        </div>

        {/* Two-Column Grid */}
        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Left Dark Card */}
          <div className="relative flex flex-col justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-[#060C36] via-[#081040] to-[#2A1A6E] p-8 text-white shadow-[0_12px_30px_rgba(17,24,60,0.15)] sm:p-10 lg:col-span-5">
            <div className="mx-auto max-w-sm text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#F4297B] to-[#7C3AED] text-white shadow-lg">
                <Gauge className="h-7 w-7" strokeWidth={2.25} />
              </div>

              <h3 className="mt-6 text-2xl font-extrabold tracking-tight text-white">
                No speed test on this page yet
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-[#D1D5EB]">
                When an approved speed-test tool is available, it will appear
                here with its name, how it works and its privacy notice. Until
                then, any reputable speed test can be used.
              </p>
            </div>
          </div>

          {/* Right Readings & Input Card */}
          <div className="flex flex-col justify-between rounded-3xl border border-[#ECEEF6] bg-white p-6 shadow-[0_8px_30px_rgba(17,24,60,0.04)] sm:p-8 lg:col-span-7">
            <div>
              <h3 className="text-xl font-extrabold tracking-tight text-[#11183C]">
                Your readings
              </h3>
              <p className="mt-1 text-sm text-[#4B5563]">
                Type in results from any test. They stay on this page only and
                aren&apos;t sent anywhere.
              </p>

              {/* Input Row */}
              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-12">
                <div className="sm:col-span-3">
                  <label className="block text-xs font-bold uppercase tracking-wide text-[#434A6E]">
                    Download
                  </label>
                  <input
                    type="text"
                    value={download}
                    onChange={(e) => setDownload(e.target.value)}
                    placeholder="Mbit/s"
                    className="mt-1.5 w-full rounded-xl border border-[#E6E9F2] bg-[#F4F5F9] px-3.5 py-2.5 text-sm text-[#11183C] placeholder-[#94A3B8] focus:border-[#7C3AED] focus:bg-white focus:outline-none"
                  />
                </div>

                <div className="sm:col-span-3">
                  <label className="block text-xs font-bold uppercase tracking-wide text-[#434A6E]">
                    Upload
                  </label>
                  <input
                    type="text"
                    value={upload}
                    onChange={(e) => setUpload(e.target.value)}
                    placeholder="Mbit/s"
                    className="mt-1.5 w-full rounded-xl border border-[#E6E9F2] bg-[#F4F5F9] px-3.5 py-2.5 text-sm text-[#11183C] placeholder-[#94A3B8] focus:border-[#7C3AED] focus:bg-white focus:outline-none"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold uppercase tracking-wide text-[#434A6E]">
                    Latency
                  </label>
                  <input
                    type="text"
                    value={latency}
                    onChange={(e) => setLatency(e.target.value)}
                    placeholder="ms"
                    className="mt-1.5 w-full rounded-xl border border-[#E6E9F2] bg-[#F4F5F9] px-3.5 py-2.5 text-sm text-[#11183C] placeholder-[#94A3B8] focus:border-[#7C3AED] focus:bg-white focus:outline-none"
                  />
                </div>

                <div className="sm:col-span-4 flex items-end gap-2">
                  <div className="flex-1">
                    <label className="block text-xs font-bold uppercase tracking-wide text-[#434A6E]">
                      Connection
                    </label>
                    <input
                      type="text"
                      value={connection}
                      onChange={(e) => setConnection(e.target.value)}
                      placeholder="Wi-Fi"
                      className="mt-1.5 w-full rounded-xl border border-[#E6E9F2] bg-[#F4F5F9] px-3.5 py-2.5 text-sm text-[#11183C] placeholder-[#94A3B8] focus:border-[#7C3AED] focus:bg-white focus:outline-none"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={handleAddReading}
                    className="flex h-[42px] shrink-0 items-center justify-center rounded-xl bg-[#E0127C] px-5 text-sm font-bold text-white shadow-md transition-transform hover:scale-[1.02]"
                  >
                    Add
                  </button>
                </div>
              </div>

              {/* Table Header */}
              <div className="mt-8 grid grid-cols-5 border-b border-[#EEF0F7] pb-3 text-xs font-bold uppercase tracking-wider text-[#434A6E]">
                <span>Time</span>
                <span>Down</span>
                <span>Up</span>
                <span>Latency</span>
                <span className="text-right">Via</span>
              </div>
            </div>

            {/* Readings List or Empty State */}
            <div className="mt-4 min-h-[120px]">
              {readings.length === 0 ? (
                <p className="py-6 text-sm italic text-[#94A3B8]">
                  No readings yet
                </p>
              ) : (
                <div className="divide-y divide-[#F0F2F8]">
                  {readings.map((r) => (
                    <div
                      key={r.id}
                      className="grid grid-cols-5 py-3 text-sm text-[#11183C]"
                    >
                      <span className="font-medium text-[#4B5563]">
                        {r.time}
                      </span>
                      <span className="font-bold text-[#E11D74]">
                        {r.download}
                      </span>
                      <span className="font-bold text-[#7C3AED]">
                        {r.upload}
                      </span>
                      <span className="text-[#4B5563]">{r.latency}</span>
                      <span className="text-right font-medium text-[#4B5563]">
                        {r.connection}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
