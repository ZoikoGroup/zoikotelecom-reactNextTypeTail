"use client";

import React, { useMemo, useState } from "react";

export default function DataEstimateSection() {
  const [messageSizeKb, setMessageSizeKb] = useState<number>(2);
  const [messagesPerHour, setMessagesPerHour] = useState<number>(4);
  const [updatesPerYear, setUpdatesPerYear] = useState<number>(2);
  const [updateSizeMb, setUpdateSizeMb] = useState<number>(20);

  const { formattedEstimate, usageTier } = useMemo(() => {
    // 2 KB * 4 msg/hr * 24 hr * 30 days = 5760 KB (~5.625 MB / 5.76 MB)
    // Plus 2 updates/yr * 20 MB / 12 months = 3.333 MB -> Total ~9.0 MB
    const monthlyTelemetryMb =
      (messageSizeKb * messagesPerHour * 24 * 30) / 1024;
    const monthlyUpdatesMb = (updatesPerYear * updateSizeMb) / 12;
    const totalMb = monthlyTelemetryMb + monthlyUpdatesMb;

    let display = `${totalMb.toFixed(1)} MB`;
    if (totalMb >= 1024) {
      display = `${(totalMb / 1024).toFixed(1)} GB`;
    }

    let tier = "Low usage";
    if (totalMb >= 500) {
      tier = "High usage";
    } else if (totalMb >= 50) {
      tier = "Moderate usage";
    }

    return {
      formattedEstimate: display,
      usageTier: tier,
    };
  }, [messageSizeKb, messagesPerHour, updatesPerYear, updateSizeMb]);

  const sliders = [
    {
      id: "message-size",
      label: "Message size",
      valueDisplay: `${messageSizeKb} KB`,
      value: messageSizeKb,
      min: 1,
      max: 100,
      step: 1,
      onChange: setMessageSizeKb,
    },
    {
      id: "messages-per-hour",
      label: "Messages per hour",
      valueDisplay: `${messagesPerHour}`,
      value: messagesPerHour,
      min: 1,
      max: 60,
      step: 1,
      onChange: setMessagesPerHour,
    },
    {
      id: "firmware-updates",
      label: "Firmware updates per year",
      valueDisplay: `${updatesPerYear}`,
      value: updatesPerYear,
      min: 0,
      max: 12,
      step: 1,
      onChange: setUpdatesPerYear,
    },
    {
      id: "typical-update-size",
      label: "Typical update size",
      valueDisplay: `${updateSizeMb} MB`,
      value: updateSizeMb,
      min: 1,
      max: 100,
      step: 1,
      onChange: setUpdateSizeMb,
    },
  ] as const;

  return (
    <section className="w-full bg-[#F6F8FC] py-16 md:py-20">
      <div className="mx-auto w-full max-w-[1300px] px-4 sm:px-6 lg:px-8">
        {/* Header Block */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#2B3766]">
            DATA ESTIMATE
          </p>
          <h2 className="mt-2.5 text-[28px] font-bold leading-[1.2] tracking-[-0.02em] text-[#0B1B48] sm:text-[34px]">
            Roughly how much data will each
            <br className="hidden sm:inline" /> device use?
          </h2>
          <p className="mt-3 text-[13.5px] font-normal leading-[1.6] text-[#4A5568] sm:text-[14.5px]">
            Move the sliders for a rough per-device estimate to bring to your
            conversation. It&apos;s
            <br className="hidden sm:inline" /> arithmetic only — not a plan,
            price or allowance.
          </p>
        </div>

        {/* Interactive Calculator Container */}
        <div className="mx-auto mt-10 max-w-[1060px] rounded-[24px] bg-gradient-to-r from-[#E4F7F8] via-[#EDF5FA] to-[#EFEBFB] p-6 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.55fr_1fr] lg:gap-10">
            {/* Left Sliders Column */}
            <div className="space-y-6">
              {sliders.map((slider) => (
                <div key={slider.id}>
                  <div className="flex items-center justify-between text-[13px]">
                    <label
                      htmlFor={slider.id}
                      className="font-bold text-[#0B1B48]"
                    >
                      {slider.label}
                    </label>
                    <span className="font-bold text-[#0891B2]">
                      {slider.valueDisplay}
                    </span>
                  </div>

                  <div className="relative mt-2.5 flex items-center">
                    <input
                      id={slider.id}
                      type="range"
                      min={slider.min}
                      max={slider.max}
                      step={slider.step}
                      value={slider.value}
                      onChange={(e) => slider.onChange(Number(e.target.value))}
                      className="h-[18px] w-full cursor-pointer appearance-none rounded-[4px] bg-[#FFFFFF] outline-none transition-opacity focus-visible:ring-2 focus-visible:ring-[#0891B2]/40 [&::-moz-range-thumb]:h-[18px] [&::-moz-range-thumb]:w-[10px] [&::-moz-range-thumb]:rounded-[3px] [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-[#0891B2] [&::-webkit-slider-thumb]:h-[18px] [&::-webkit-slider-thumb]:w-[10px] [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-[3px] [&::-webkit-slider-thumb]:bg-[#0891B2]"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Right Estimated Output Card */}
            <div className="flex flex-col items-center justify-center rounded-[20px] bg-[#FFFFFF] px-6 py-8 text-center shadow-[0_14px_34px_-10px_rgba(11,27,72,0.08)] sm:px-8 sm:py-10">
              <p className="text-[10.5px] font-bold uppercase tracking-[0.12em] text-[#0891B2]">
                ESTIMATED PER DEVICE
              </p>

              <div className="mt-3 text-[34px] font-extrabold leading-none tracking-[-0.02em] text-[#0B1B48] sm:text-[38px]">
                {formattedEstimate}
              </div>

              <p className="mt-3 text-[12px] font-normal text-[#4A5568]">
                per month, including an average share of updates
              </p>

              <div className="mt-4">
                <span className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#06B6D4] via-[#4F46E5] to-[#7C3AED] px-5 py-1.5 text-[11.5px] font-semibold text-[#FFFFFF] shadow-[0_4px_12px_rgba(79,70,229,0.22)]">
                  {usageTier}
                </span>
              </div>

              <p className="mt-4 max-w-[240px] text-[11px] font-normal leading-[1.55] text-[#64748B]">
                Real usage varies with retries, overheads and peaks. Our
                engineers will help you set a realistic band.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
