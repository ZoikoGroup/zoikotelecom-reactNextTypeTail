"use client";

import { useState } from "react";

type ProblemId =
  | "no-service"
  | "slow-internet"
  | "esim"
  | "billing"
  | "landline-voice";

interface ProblemGuide {
  id: ProblemId;
  label: string;
  icon: React.ReactNode;
  steps: string[];
  successLooksLike: string;
  whenToStop: string;
}

const problems: ProblemGuide[] = [
  {
    id: "no-service",
    label: "No service",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="9" r="2" />
        <path d="M8.5 5.5a5 5 0 0 0 0 7" />
        <path d="M15.5 5.5a5 5 0 0 1 0 7" />
        <path d="M6 3a8.5 8.5 0 0 0 0 12" />
        <path d="M18 3a8.5 8.5 0 0 1 0 12" />
        <path d="M12 11v10M8.5 21h7" />
      </svg>
    ),
    steps: [
      "Toggle Airplane Mode on for 15 seconds, then switch it back off to force a fresh network registration.",
      "Check that your mobile data and primary line are enabled in your device settings.",
      "Restart your handset and test signal strength near a window or outdoors.",
    ],
    successLooksLike:
      "Signal bars appear alongside your network name and you can place a test call or load a webpage on mobile data.",
    whenToStop:
      "Stop and contact support if you see 'No Service' or 'Emergency Calls Only' across multiple locations after a restart, or if your account shows a suspension notice.",
  },
  {
    id: "slow-internet",
    label: "Slow internet",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M3.5 9.5a12.5 12.5 0 0 1 17 0" />
        <path d="M7 13a8 8 0 0 1 10 0" />
        <path d="M10.5 16.5a3.5 3.5 0 0 1 3 0" />
        <circle cx="12" cy="19.5" r="1.2" fill="currentColor" stroke="none" />
      </svg>
    ),
    steps: [
      "Pause large background downloads, cloud backups, or streaming on other connected devices.",
      "Move closer to your router or test with an Ethernet cable if using broadband.",
      "Power-cycle your router or toggle Wi-Fi/mobile data off and on.",
    ],
    successLooksLike:
      "Pages load quickly without timeouts and video playback runs smoothly at standard or HD resolution.",
    whenToStop:
      "Stop and reach out to us if speeds remain severely degraded on a wired connection or across multiple devices after rebooting your router.",
  },
  {
    id: "esim",
    label: "eSIM",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M7 3h7l4 4v14a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
        <rect x="9.5" y="11.5" width="5" height="5.5" rx="0.8" />
        <path d="M12 11.5v5.5M9.5 14.25h5" />
      </svg>
    ),
    steps: [
      "Confirm your phone is carrier-unlocked and supports eSIM profiles.",
      "Connect to a reliable Wi-Fi network before scanning your eSIM QR code or entering activation details.",
      "Ensure the newly added eSIM line is turned on under Mobile Data / Cellular settings.",
    ],
    successLooksLike:
      "The eSIM plan appears as active in your device settings and connects to the mobile network.",
    whenToStop:
      "Stop and contact support if activation fails repeatedly, displays an 'Unable to Complete Cellular Plan Change' error, or your QR code has already been used.",
  },
  {
    id: "billing",
    label: "Billing",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="5" y="3.5" width="14" height="17" rx="2" />
        <path d="M8.5 8h7M8.5 12h7M8.5 16h4.5" />
      </svg>
    ),
    steps: [
      "Compare your latest statement against your plan allowance, start date, and any mid-cycle changes or add-ons.",
      "Check that your saved payment method or Direct Debit mandate has not expired.",
      "Review recent payment history in your account to confirm whether a payment is still processing.",
    ],
    successLooksLike:
      "Your statement breakdown matches your expected charges and your payment status shows as up to date.",
    whenToStop:
      "Stop and contact our billing team if you spot an unfamiliar charge, duplicate billing, or an error on your final bill.",
  },
  {
    id: "landline-voice",
    label: "Landline & voice",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="7" y="3" width="10" height="18" rx="2.5" />
        <circle cx="12" cy="17.5" r="0.9" fill="currentColor" stroke="none" />
      </svg>
    ),
    steps: [
      "Check power and cable connections on your handset, base station, or voice adapter/router.",
      "Disconnect extra extensions or splitters to rule out local handset or wiring faults.",
      "Try placing a short test call to and from another number.",
    ],
    successLooksLike:
      "You hear a clear dial tone and two-way voice audio works cleanly without echo or drop-outs.",
    whenToStop:
      "Stop and ask us for help if there is no dial tone at the master socket, calls drop immediately, or you hear line noise after isolating handsets.",
  },
];

export default function SafeChecksSection() {
  const [selectedId, setSelectedId] = useState<ProblemId | null>(null);

  const activeProblem = problems.find((p) => p.id === selectedId) ?? null;

  return (
    <section
      id="safe-checks"
      className="w-full bg-[#F8F8FB] px-4 py-14 text-[#18133E] antialiased sm:px-6 lg:py-20"
    >
      <div className="mx-auto w-full max-w-[1300px]">
        {/* Header */}
        <div className="text-center">
          <p className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#6E6A85]">
            Fix it yourself
          </p>
          <h2 className="mt-2.5 text-[32px] font-extrabold leading-[1.15] tracking-[-0.025em] text-[#18133E] sm:text-[42px]">
            Safe checks before you contact us
          </h2>
          <p className="mx-auto mt-2.5 max-w-[460px] text-[13px] leading-[1.55] text-[#7A7691]">
            Choose a problem. Each step shows what success looks like — and when
            to stop and ask us.
          </p>
        </div>

        {/* 5 Problem Selector Cards */}
        <div className="mt-9 grid grid-cols-2 gap-3.5 sm:grid-cols-3 lg:grid-cols-5 lg:gap-4">
          {problems.map((problem) => {
            const isSelected = selectedId === problem.id;
            return (
              <button
                key={problem.id}
                type="button"
                aria-pressed={isSelected}
                onClick={() =>
                  setSelectedId((prev) =>
                    prev === problem.id ? null : problem.id,
                  )
                }
                className={`flex flex-col items-center justify-center rounded-xl border bg-white px-4 py-6 text-center transition-all ${
                  isSelected
                    ? "border-[#7C3AED] shadow-[0_6px_20px_rgba(124,58,237,0.12)] ring-1 ring-[#7C3AED]"
                    : "border-[#ECEAF2] shadow-[0_2px_10px_rgba(24,19,62,0.025)] hover:border-[#DCD7EC] hover:shadow-[0_4px_16px_rgba(24,19,62,0.05)]"
                }`}
              >
                <span className="flex h-7 w-7 items-center justify-center text-[#7C3AED]">
                  {problem.icon}
                </span>
                <span className="mt-2.5 text-[12.5px] font-bold text-[#18133E]">
                  {problem.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Expandable Guided Steps Panel when a problem is chosen */}
        {activeProblem && (
          <div className="mt-4 rounded-xl border border-[#E5E1F2] bg-white p-5 shadow-[0_4px_18px_rgba(24,19,62,0.04)] sm:p-6">
            <div className="flex items-center justify-between gap-4 border-b border-[#F1EFF7] pb-3.5">
              <div className="flex items-center gap-2.5">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#EFEAFE] text-[#7C3AED]">
                  {activeProblem.icon}
                </span>
                <h3 className="text-[15px] font-extrabold text-[#18133E]">
                  {activeProblem.label} — Quick checks
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedId(null)}
                className="text-[12px] font-semibold text-[#7A7691] hover:text-[#18133E]"
              >
                Close
              </button>
            </div>

            <ol className="mt-4 list-decimal space-y-2 pl-5 text-[13px] leading-[1.6] text-[#3D3857]">
              {activeProblem.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>

            <div className="mt-5 grid grid-cols-1 gap-3.5 md:grid-cols-2">
              <div className="rounded-lg bg-[#F5F3FF] p-4">
                <p className="text-[10px] font-extrabold uppercase tracking-[0.08em] text-[#7C3AED]">
                  What success looks like
                </p>
                <p className="mt-1 text-[12.5px] leading-[1.55] text-[#2B2548]">
                  {activeProblem.successLooksLike}
                </p>
              </div>
              <div className="rounded-lg bg-[#FFF5F9] p-4">
                <p className="text-[10px] font-extrabold uppercase tracking-[0.08em] text-[#EC1C7A]">
                  When to stop and ask us
                </p>
                <p className="mt-1 text-[12.5px] leading-[1.55] text-[#2B2548]">
                  {activeProblem.whenToStop}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Info Notice Banner */}
        <div className="mt-4 flex items-center gap-3 rounded-xl bg-[#EEF2FF] px-4 py-3.5 text-[#5D668B] sm:px-5">
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4 shrink-0 text-[#6F789C]"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="9" />
            <path d="M12 11v5" />
            <circle cx="12" cy="8" r="0.7" fill="currentColor" stroke="none" />
          </svg>
          <p className="text-[12px] font-medium leading-snug">
            There&apos;s no live service-status feed on this page, so we
            can&apos;t show outages here.
          </p>
        </div>
      </div>
    </section>
  );
}
