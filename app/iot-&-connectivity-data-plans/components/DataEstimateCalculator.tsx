"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronRight, Info } from "lucide-react";
import SectionHeader from "./SectionHeader";

const RETRY_OPTIONS = [
  { label: "None (+0%)", value: 0 },
  { label: "Low (+5%)", value: 0.05 },
  { label: "Medium (+15%)", value: 0.15 },
  { label: "High (+30%)", value: 0.3 },
] as const;

const PEAK_OPTIONS = [
  { label: "1.5× typical", value: 1.5 },
  { label: "2× typical", value: 2 },
  { label: "3× typical", value: 3 },
  { label: "5× typical", value: 5 },
] as const;

const MARGIN_OPTIONS = [
  { label: "0%", value: 0 },
  { label: "10%", value: 0.1 },
  { label: "20%", value: 0.2 },
  { label: "30%", value: 0.3 },
] as const;

const SEPARATE_ASSUMPTIONS = [
  "Roaming usage and roaming charges",
  "SMS, voice and any non-data traffic",
  "Fixed IP, private APN or VPN overheads",
  "Minimum session sizes and how the tariff rounds usage",
  "Binary vs decimal units on your bill",
  "VAT and any one-time charges",
] as const;

// Decimal units, matching the "note on units" above.
function formatBytes(bytes: number): string {
  if (!Number.isFinite(bytes) || bytes <= 0) return "0 KB";
  if (bytes >= 1e12) return `${(bytes / 1e12).toFixed(1)} TB`;
  if (bytes >= 1e9) return `${(bytes / 1e9).toFixed(1)} GB`;
  if (bytes >= 1e6) return `${(bytes / 1e6).toFixed(1)} MB`;
  return `${(bytes / 1e3).toFixed(1)} KB`;
}

const toNumber = (value: string) => {
  const n = Number(value);
  return Number.isFinite(n) && n > 0 ? n : 0;
};

const inputClass =
  "mt-2 w-full rounded-xl border border-[#D3D8E8] bg-white px-4 py-3 text-sm text-[#11183C] outline-none transition-colors focus:border-[#E11D74] focus:ring-2 focus:ring-[#E11D74]/15 disabled:bg-[#F5F6FB] disabled:text-[#8A90A6]";
const labelClass = "text-sm font-bold text-[#11183C]";

export default function DataEstimateCalculator() {
  const [devices, setDevices] = useState("500");
  const [messages, setMessages] = useState("96");
  const [bytes, setBytes] = useState("400");
  const [days, setDays] = useState("30");
  const [firmwareMb, setFirmwareMb] = useState("5");
  const [retry, setRetry] = useState(0.15);
  const [peak, setPeak] = useState(2);
  const [margin, setMargin] = useState(0.1);
  const [unknown, setUnknown] = useState(false);

  const deviceCount = toNumber(devices);
  const telemetry = deviceCount * toNumber(messages) * toNumber(bytes) * toNumber(days);
  const firmware = deviceCount * toNumber(firmwareMb) * 1e6;
  const typical = (telemetry * (1 + retry) + firmware) * (1 + margin);
  const peakMonth = typical * peak;
  const perDevice = deviceCount > 0 ? typical / deviceCount : 0;

  const numberField = (
    id: string,
    label: string,
    value: string,
    onChange: (v: string) => void,
  ) => (
    <div>
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      <input
        id={id}
        type="number"
        inputMode="decimal"
        min={0}
        value={value}
        disabled={unknown}
        onChange={(e) => onChange(e.target.value)}
        className={inputClass}
      />
    </div>
  );

  const selectField = <T extends number>(
    id: string,
    label: string,
    value: T,
    options: readonly { label: string; value: T }[],
    onChange: (v: T) => void,
  ) => (
    <div>
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      <select
        id={id}
        value={value}
        disabled={unknown}
        onChange={(e) => onChange(Number(e.target.value) as T)}
        className={inputClass}
      >
        {options.map((o) => (
          <option key={o.label} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  );

  return (
    <section className="w-full bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeader
          eyebrow="Data estimate"
          title="Work out a rough monthly data range"
          subtitle="A transparent formula you can check. Nothing you enter is stored or sent."
          className="max-w-3xl"
        />

        <div className="mt-10 grid grid-cols-1 items-start gap-8 lg:grid-cols-[1.45fr_1fr]">
          <div className="rounded-[24px] border border-[#E6E9F2] bg-white p-5 sm:p-6">
            <p className="rounded-xl border border-dashed border-[#D9CCF2] bg-[#F7F3FC] px-4 py-4 font-mono text-[13px] leading-7 text-[#11183C]">
              Monthly data ≈ <span className="text-[#B0177A]">devices</span> ×{" "}
              <span className="text-[#B0177A]">messages per day</span> ×{" "}
              <span className="text-[#B0177A]">bytes per message</span> ×{" "}
              <span className="text-[#B0177A]">days</span>
              <br />+ firmware + retries + safety margin
            </p>

            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {numberField("de-devices", "Active devices", devices, setDevices)}
              {numberField("de-messages", "Messages per device per day", messages, setMessages)}
              {numberField("de-bytes", "Bytes per message (incl. overhead)", bytes, setBytes)}
              {numberField("de-days", "Days in period", days, setDays)}
              {numberField("de-firmware", "Firmware per device per month (MB)", firmwareMb, setFirmwareMb)}
              {selectField("de-retry", "Retries & reconnects", retry, RETRY_OPTIONS, setRetry)}
              {selectField("de-peak", "Peak multiplier", peak, PEAK_OPTIONS, setPeak)}
              {selectField("de-margin", "Planning margin (not billed)", margin, MARGIN_OPTIONS, setMargin)}
            </div>

            <label className="mt-4 flex cursor-pointer items-center gap-3 text-sm font-bold text-[#11183C]">
              <input
                type="checkbox"
                checked={unknown}
                onChange={(e) => setUnknown(e.target.checked)}
                className="h-4 w-4 accent-[#E11D74]"
              />
              I don’t know our payload size or reporting pattern yet
            </label>

            <details className="group mt-4 rounded-xl border border-[#E6E9F2] px-5 py-3.5">
              <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-bold text-[#7B3FE4]">
                <span className="flex items-center gap-2">
                  <span aria-hidden="true">•</span>
                  Assumptions we keep separate
                </span>
                <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" aria-hidden="true" />
              </summary>
              <p className="mt-3 text-sm text-[#4B5375]">This estimate doesn’t include:</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-[#4B5375]">
                {SEPARATE_ASSUMPTIONS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </details>
          </div>

          <aside
            aria-live="polite"
            className="rounded-[26px] bg-gradient-to-br from-[#1B1660] via-[#3A1F86] to-[#5B1E7E] p-6 text-white shadow-[0_24px_50px_rgba(17,24,60,0.25)]"
          >
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#F9A8D4]">
              Illustrative estimate
            </p>

            {unknown ? (
              <p className="mt-4 rounded-2xl bg-white/10 p-5 text-sm leading-relaxed text-[#E4E6F3]">
                That’s fine. Tell us about your devices and how they’re used, and our team
                will help you work out typical and peak data with you.
              </p>
            ) : (
              <>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-white/10 p-4">
                    <p className="text-xs font-semibold text-[#D1D5EB] sm:text-sm">Typical month</p>
                    <p className="mt-2 text-2xl font-extrabold sm:text-3xl">{formatBytes(typical)}</p>
                  </div>
                  <div className="rounded-2xl bg-white/10 p-4">
                    <p className="text-xs font-semibold text-[#D1D5EB] sm:text-sm">Peak month</p>
                    <p className="mt-2 text-2xl font-extrabold sm:text-3xl">{formatBytes(peakMonth)}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-[#D1D5EB]">
                  Per device, typical: <span className="font-bold text-white">{formatBytes(perDevice)}</span>
                </p>
              </>
            )}

            <p className="mt-4 flex items-start gap-2.5 text-xs leading-relaxed text-[#C9CDE3]">
              <Info className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={2} aria-hidden="true" />
              Illustrative planning only — not a tariff, a billing measurement or an
              availability result. No price or plan is matched to this estimate.
            </p>

            <Link
              href="#iot-data-enquiry"
              className="mt-5 inline-flex w-full items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-[#E11D74] to-[#C2185B] px-6 py-4 text-sm font-bold text-white shadow-[0_10px_24px_rgba(225,29,116,0.35)] transition-transform hover:scale-[1.01] sm:text-base"
            >
              Request a tailored estimate
              <ChevronRight className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
            </Link>
          </aside>
        </div>
      </div>
    </section>
  );
}
