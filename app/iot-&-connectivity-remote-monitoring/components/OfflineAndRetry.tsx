import React from "react";
import { Check } from "lucide-react";

const POINTS = [
  "Some devices buffer readings and send them when the signal returns",
  "Buffer size, power and firmware decide how much is kept",
  "Late readings should keep their original time, not look current",
  "Coverage, antenna position and power all affect reconnection",
] as const;

const SENT_BEFORE = [20, 58, 96, 134];
const HELD = [190, 236, 282];
const SENT_AFTER = [338, 376, 414];
const LABEL_X = 420;
const LABEL_Y = 132;

export default function OfflineAndRetry() {
  return (
    <section className="w-full bg-gradient-to-br from-[#0B1446] via-[#1F2470] to-[#4E3F9A] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-white">
            Offline &amp; retry
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#FBEFF1] sm:text-4xl lg:text-[42px] lg:leading-[1.15]">
            What happens when a device loses signal
          </h2>
          <p className="mt-3.5 max-w-[620px] text-sm leading-relaxed text-[#E4E6F3] sm:text-base">
            Readings may stop, be held on the device, or be lost — depending on
            the equipment.
          </p>
          <ul className="mt-5 space-y-2.5">
            {POINTS.map((point) => (
              <li key={point} className="flex items-start gap-3 text-sm text-[#E4E6F3]">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#F472B6]" strokeWidth={2.5} aria-hidden="true" />
                {point}
              </li>
            ))}
          </ul>
        </div>

        <figure className="rounded-[24px] bg-white p-6 shadow-[0_20px_50px_rgba(0,0,0,0.25)]">
          <svg
            viewBox="0 0 440 160"
            className="h-auto w-full"
            role="img"
            aria-label="Timeline: readings are sent on time, then the signal is lost and three readings are held on the device, then sent late with their original time once the signal returns."
          >
            <line x1="10" x2="430" y1="40" y2="40" stroke="#E6E9F2" strokeWidth="6" strokeLinecap="round" />
            <rect x="166" y="32" width="140" height="16" rx="8" fill="#FDE4E2" />
            <text x="236" y="20" textAnchor="middle" fontSize="11" fontWeight="700" fill="#434A6E">
              Signal lost
            </text>

            {SENT_BEFORE.concat(SENT_AFTER).map((x) => (
              <circle key={x} cx={x} cy="40" r="6" fill="#12936F" />
            ))}

            {HELD.map((x) => (
              <g key={x}>
                <circle cx={x} cy="40" r="7" fill="#FFFFFF" stroke="#E59400" strokeWidth="1.8" strokeDasharray="3 2" />
                <path
                  d={`M${x} 48 C${x} 110 ${(x + LABEL_X) / 2} ${LABEL_Y} ${LABEL_X - 120} ${LABEL_Y}`}
                  fill="none"
                  stroke="#E59400"
                  strokeWidth="1.6"
                  strokeDasharray="4 3"
                />
              </g>
            ))}

            <rect x={LABEL_X - 124} y={LABEL_Y - 14} width="128" height="26" rx="8" fill="#FEF3D7" />
            <text x={LABEL_X - 60} y={LABEL_Y + 3} textAnchor="middle" fontSize="10.5" fontWeight="700" fill="#434A6E">
              Sent late, original time
            </text>
          </svg>

          <figcaption className="mt-4">
            <div className="flex flex-wrap gap-x-8 gap-y-2 text-xs font-semibold">
              <span className="inline-flex items-center gap-2 text-[#11183C]">
                <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-[#12936F]" />
                Sent on time
              </span>
              <span className="inline-flex items-center gap-2 text-[#9A6A00]">
                <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full border-2 border-[#E59400]" />
                Held on device (if supported)
              </span>
            </div>
            <p className="mt-2 text-xs font-semibold text-[#6B7194]">
              Illustrative only — real behaviour depends on the device.
            </p>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
