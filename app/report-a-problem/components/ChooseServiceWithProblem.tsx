"use client";

import { useState } from "react";
import Image from "next/image";

interface ServiceOption {
  id: string;
  label: string;
  image?: string;
  gradientBg?: string;
  icon: React.ReactNode;
  whatToInclude: string[];
}

const services: ServiceOption[] = [
  {
    id: "mobile",
    label: "Mobile",
    image: "/Images/prob/8.png",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-3.5 w-3.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="7" y="3" width="10" height="18" rx="2" />
        <path d="M11 17h2" />
      </svg>
    ),
    whatToInclude: [
      "The affected mobile number and whether it's a physical SIM or eSIM",
      "Whether you have no signal, no data, or can't make/receive calls or texts",
      "Whether the problem happens everywhere or at a specific location/postcode",
    ],
  },
  {
    id: "broadband",
    label: "Broadband",
    image: "/Images/prob/9.png",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-3.5 w-3.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 19v-5" />
        <path d="M8 14a4 4 0 0 1 8 0" />
        <path d="M5 10.5a8.5 8.5 0 0 1 14 0" />
        <circle cx="12" cy="19" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
    whatToInclude: [
      "The service postcode and whether all devices or only Wi-Fi/Ethernet devices are affected",
      "The router or ONT indicator lights you currently see",
      "When the issue started and whether restarting your router changed anything",
    ],
  },
  {
    id: "landline-voice",
    label: "Landline & voice",
    image: "/Images/prob/1.png",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-3.5 w-3.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="7" y="3" width="10" height="18" rx="2" />
        <path d="M10 7h4" />
      </svg>
    ),
    whatToInclude: [
      "The landline number and whether incoming calls, outgoing calls, or both are affected",
      "Whether your voice service runs over a digital router/hub or traditional line",
      "Any power cut or care/safety reliance on the line so we can prioritise advice",
    ],
  },
  {
    id: "business",
    label: "Business",
    image: "/Images/prob/2.png",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-3.5 w-3.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M8 8h2v2H8zM14 8h2v2h-2zM8 13h2v2H8zM14 13h2v2h-2z" />
      </svg>
    ),
    whatToInclude: [
      "Your business name, account reference, and affected site or line details",
      "How many users, sites, or circuits are impacted and the business impact",
      "When the problem began and any recent changes to lines or equipment",
    ],
  },
  {
    id: "iot-connectivity",
    label: "IoT & connectivity",
    image: "/Images/prob/3.png",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-3.5 w-3.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="7" y="7" width="10" height="10" rx="2" />
        <path d="M9 3v2M15 3v2M9 19v2M15 19v2M3 9h2M3 15h2M19 9h2M19 15h2" />
      </svg>
    ),
    whatToInclude: [
      "The SIM/eSIM or connectivity identifier and device type or location",
      "Whether data sessions are failing, delayed, or disconnected completely",
      "When the drop in connectivity was first noticed",
    ],
  },
  {
    id: "device",
    label: "Device",
    image: "/Images/prob/4.png",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-3.5 w-3.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="7" y="3" width="10" height="18" rx="2" />
        <path d="M11 17h2" />
      </svg>
    ),
    whatToInclude: [
      "The device make/model and what happens (power, screen, charging, or network)",
      "Whether the fault is hardware-related or tied to a specific SIM/service",
      "When the issue started and any steps you've already tried",
    ],
  },
  {
    id: "other-not-sure",
    label: "Other / not sure",
    gradientBg: "bg-gradient-to-br from-[#FDE7EA] via-[#F5F7F8] to-[#DFF5EE]",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-3.5 w-3.5 text-[#E11D48]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M9.8 9.5a2.3 2.3 0 0 1 4.4.8c0 1.6-2.2 2.2-2.2 4" />
        <circle cx="12" cy="17" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    ),
    whatToInclude: [
      "A brief description of what you're experiencing and when it started",
      "Any service or device details you have handy (never passwords, codes, or card numbers)",
      "Your preferred accessible contact method if you need an adjustment",
    ],
  },
];

export default function ChooseServiceWithProblem() {
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(
    null,
  );

  const selectedService =
    services.find((s) => s.id === selectedServiceId) ?? null;

  return (
    <section
      id="prepare-report"
      className="w-full bg-white px-4 pb-12 text-[#18133E] antialiased sm:px-6 lg:pb-16"
    >
      <div className="mx-auto w-full max-w-[1300px]">
        {/* Top Dual Emergency & Power Cut Banner */}
        <div className="grid grid-cols-1 overflow-hidden rounded-2xl border border-[#F5D6CE] bg-white shadow-[0_6px_22px_rgba(17,12,58,0.04)] md:grid-cols-2">
          {/* Left Red Alert Block */}
          <div className="flex items-stretch bg-[#FDF2F2]">
            <div className="flex w-16 shrink-0 items-center justify-center bg-[#B91C1C] text-white sm:w-20">
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="9" />
                <path d="M12 8v5" />
                <circle
                  cx="12"
                  cy="16"
                  r="1"
                  fill="currentColor"
                  stroke="none"
                />
              </svg>
            </div>

            <div className="flex flex-col justify-center px-5 py-4 sm:px-6">
              <h2 className="text-[13px] font-extrabold text-[#110C3A]">
                In immediate danger?
              </h2>
              <p className="mt-1 text-[11px] leading-[1.55] text-[#6E6A85]">
                Call 999 or 112 now. Don&apos;t use a web page or wait for a
                reply. An emergency call may connect on another network, but
                that isn&apos;t guaranteed.
              </p>
            </div>
          </div>

          {/* Right Warm Cream Power Cut Block */}
          <div className="flex flex-col justify-center border-t border-[#F7E3D7] bg-[#FFF8F2] px-5 py-4 sm:px-6 md:border-l md:border-t-0">
            <h2 className="text-[13px] font-extrabold text-[#110C3A]">
              Digital landline and a power cut?
            </h2>
            <p className="mt-1 text-[11px] leading-[1.55] text-[#6E6A85]">
              Digital voice usually needs power. Use a charged mobile for
              emergencies, and tell us if you rely on your landline for care or
              safety.
            </p>
          </div>
        </div>

        {/* Section Heading */}
        <div className="mt-12 text-center">
          <p className="text-[10.5px] font-extrabold uppercase tracking-[0.14em] text-[#5B5675]">
            What&apos;s affected?
          </p>
          <h2 className="mt-2.5 text-[32px] font-extrabold leading-[1.15] tracking-[-0.025em] text-[#110C3A] sm:text-[42px]">
            Choose the service with the problem
          </h2>
          <p className="mt-2.5 text-[13px] text-[#6E6A85]">
            This shows what to tell us — it doesn&apos;t log a report.
          </p>
        </div>

        {/* Service Cards Grid (4 on top row, 3 on bottom row on desktop) */}
        <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const isSelected = selectedServiceId === service.id;

            return (
              <button
                key={service.id}
                type="button"
                aria-pressed={isSelected}
                onClick={() =>
                  setSelectedServiceId(isSelected ? null : service.id)
                }
                className={`group relative flex h-[156px] w-full flex-col justify-end overflow-hidden rounded-2xl p-4 text-left transition-all ${
                  isSelected
                    ? "ring-2 ring-[#EC1C7A] ring-offset-2 ring-offset-[#F8F8FB]"
                    : "hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(17,12,58,0.12)]"
                } ${service.gradientBg ?? "bg-[#18133E]"}`}
              >
                {/* Background Photo for Cards 1-6 */}
                {service.image && (
                  <>
                    <Image
                      src={service.image}
                      alt={service.label}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover object-center transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                  </>
                )}

                {/* Bottom Icon Pill + Label */}
                <div className="relative z-10 flex flex-col items-start gap-2">
                  {service.image ? (
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#231F3A]/85 text-white backdrop-blur-sm">
                      {service.icon}
                    </span>
                  ) : (
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white text-[#E11D48] shadow-xs">
                      {service.icon}
                    </span>
                  )}

                  <span
                    className={`text-[13.5px] font-extrabold leading-tight ${
                      service.image ? "text-white" : "text-[#110C3A]"
                    }`}
                  >
                    {service.label}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Bottom Prompt / Selected Service Checklist Box */}
        <div className="mt-6 rounded-2xl border border-[#ECEAF2] bg-white p-3.5 shadow-[0_2px_12px_rgba(17,12,58,0.03)]">
          <div className="rounded-xl border border-dashed border-[#D8D3EB] bg-[#FBFAFE] px-5 py-4">
            {!selectedService ? (
              <div className="flex items-center gap-2.5 text-[12px] font-medium text-[#6E6A85]">
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4 shrink-0 text-[#F43F5E]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 11v5" />
                  <circle
                    cx="12"
                    cy="8"
                    r="0.7"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
                <span>Choose a service above to see what to include.</span>
              </div>
            ) : (
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-[13px] font-extrabold text-[#110C3A]">
                    What to include for {selectedService.label}
                  </h3>
                  <button
                    type="button"
                    onClick={() => setSelectedServiceId(null)}
                    className="text-[11px] font-bold text-[#EC1C7A] hover:underline"
                  >
                    Clear selection
                  </button>
                </div>

                <ul className="mt-2.5 space-y-1.5 text-[12px] text-[#55506E]">
                  {selectedService.whatToInclude.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span
                        aria-hidden="true"
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#EC1C7A]"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
