"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AlertTriangle, Check, ChevronLeft, ChevronRight, HelpCircle, Phone, RotateCcw, ThumbsUp } from "lucide-react";
import SectionHeader from "./SectionHeader";

const IMG = "/Images/support-troubleshoot-a-service";

type ServiceId = "mobile" | "broadband" | "landline" | "business";

type Symptom = {
  id: string;
  label: string;
  checks: string[];
  warning?: string;
};

type Service = {
  id: ServiceId;
  label: string;
  hint: string;
  image: string;
  alt: string;
  question: string;
  symptoms: Symptom[];
};

const SERVICES: Service[] = [
  {
    id: "mobile",
    label: "Mobile",
    hint: "Calls, data, eSIM",
    image: `${IMG}/service-mobile.webp`,
    alt: "Smartphone home screen with app icons",
    question: "What’s happening with your mobile?",
    symptoms: [
      {
        id: "no-signal",
        label: "No signal",
        checks: [
          "Turn airplane mode on for 10 seconds, then off again.",
          "Restart your phone — don’t reset it to factory settings.",
          "Check whether someone else nearby on Zoiko has signal.",
          "Note where and when the problem started.",
        ],
      },
      {
        id: "no-data",
        label: "Signal but no data",
        checks: [
          "Make sure mobile data is switched on in your settings.",
          "Check you haven’t reached a data limit or spend cap.",
          "If you’re abroad, check data roaming is switched on.",
          "Restart your phone and try a different website or app.",
        ],
      },
      {
        id: "no-texts",
        label: "Calls work, texts don’t",
        checks: [
          "Restart your phone and try sending a new text.",
          "Clear some space if your messages app is full.",
          "Try texting a different number to see if it’s one contact.",
        ],
      },
      {
        id: "esim",
        label: "eSIM not working",
        checks: [
          "Check the eSIM line is switched on in your phone settings.",
          "Restart your phone.",
          "Note any error message shown on screen.",
        ],
        warning:
          "Don’t delete your eSIM profile unless we’ve told you to and you have a confirmed way to reactivate it.",
      },
    ],
  },
  {
    id: "broadband",
    label: "Broadband",
    hint: "Internet, slow Wi-Fi",
    image: `${IMG}/service-broadband.webp`,
    alt: "Network switch with connected cables",
    question: "What’s happening with your broadband?",
    symptoms: [
      {
        id: "no-internet",
        label: "No internet",
        checks: [
          "Check the router has power and its cables are pushed in firmly.",
          "Turn the router off, wait 30 seconds, then turn it back on.",
          "Look at the router lights and note their colours.",
          "Check whether neighbours have a power cut.",
        ],
        warning: "Don’t factory reset your router — it can remove settings we need to restore your service.",
      },
      {
        id: "wifi-no-internet",
        label: "Wi-Fi, no internet",
        checks: [
          "Restart the router, then the device you’re using.",
          "Try a different device to see if it’s one device or all.",
          "If you can, connect a laptop by cable to the router.",
        ],
      },
      {
        id: "slow-wifi",
        label: "Slow Wi-Fi",
        checks: [
          "Move closer to the router and test again.",
          "Pause large downloads, updates or streams on other devices.",
          "Keep the router off the floor and away from metal or mirrors.",
          "Run a speed test by cable if possible.",
        ],
      },
      {
        id: "one-room",
        label: "One room only",
        checks: [
          "Compare the same device in the room next to the router.",
          "Check for thick walls, radiators or appliances in between.",
          "Consider whether whole-home Wi-Fi could help that room.",
        ],
      },
    ],
  },
  {
    id: "landline",
    label: "Landline & voice",
    hint: "Call tone, cuts, VoIP",
    image: `${IMG}/service-landline-voice.webp`,
    alt: "Abstract pink and blue marbled pattern",
    question: "What’s happening with your landline?",
    symptoms: [
      {
        id: "no-dial-tone",
        label: "No dial tone",
        checks: [
          "Check the phone is plugged into the router’s phone port.",
          "Restart the router and wait for the lights to settle.",
          "Try a different handset if you have one.",
        ],
      },
      {
        id: "power-cut",
        label: "Off during a power cut",
        checks: [
          "Digital landlines usually need mains power to work.",
          "Use a mobile for urgent calls until power is back.",
          "Once power returns, restart the router.",
        ],
        warning:
          "If you rely on your landline for emergencies or a care alarm, tell us — you may be able to get a backup solution.",
      },
      {
        id: "poor-quality",
        label: "Poor call quality",
        checks: [
          "Check whether broadband is busy with large downloads.",
          "Move a cordless handset closer to its base.",
          "Note whether it happens on all calls or only some numbers.",
        ],
      },
      {
        id: "cant-call-out",
        label: "Can’t make calls",
        checks: [
          "Check for a call barring setting on your line.",
          "Try dialling with the full area code.",
          "Restart the router and test again.",
        ],
      },
    ],
  },
  {
    id: "business",
    label: "Business & IoT",
    hint: "Sites, UCaaS, devices",
    image: `${IMG}/service-business-iot.webp`,
    alt: "Long office corridor with glass partitions",
    question: "What’s happening with your business service?",
    symptoms: [
      {
        id: "voip-down",
        label: "VoIP interrupted",
        checks: [
          "Check whether all users or only some are affected.",
          "Restart desk phones or softphone apps.",
          "Check the site’s internet connection is working.",
        ],
      },
      {
        id: "iot-no-data",
        label: "IoT device not sending data",
        checks: [
          "Check the device has power or a charged battery.",
          "Look at the last reading time and note it.",
          "Check whether other devices on the same site are reporting.",
        ],
      },
      {
        id: "site-down",
        label: "Whole site offline",
        checks: [
          "Check site power and the router or firewall.",
          "Ask whether another site or nearby business is affected.",
          "Note the time it started and what changed recently.",
        ],
      },
      {
        id: "ucaas-app",
        label: "UCaaS app issue",
        checks: [
          "Sign out and back in to the app.",
          "Check for an app update.",
          "Try the web version or another device.",
        ],
      },
    ],
  },
];

const STEPS = ["Service", "Symptom", "Safe checks", "Next action"] as const;

const PRIMARY_BTN =
  "inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#F0168A] via-[#E0127C] to-[#C8106E] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(224,18,124,0.3)] transition disabled:cursor-not-allowed disabled:opacity-50";

export default function TroubleshootGuide() {
  const [step, setStep] = useState(0);
  const [serviceId, setServiceId] = useState<ServiceId | "not-sure" | null>(null);
  const [symptomId, setSymptomId] = useState<string | null>(null);
  const [checked, setChecked] = useState<string[]>([]);
  const [resolved, setResolved] = useState<boolean | null>(null);

  const service = SERVICES.find((s) => s.id === serviceId) ?? null;
  const symptom = service?.symptoms.find((s) => s.id === symptomId) ?? null;
  const notSure = serviceId === "not-sure";

  const restart = () => {
    setStep(0);
    setServiceId(null);
    setSymptomId(null);
    setChecked([]);
    setResolved(null);
  };

  const chooseService = (id: ServiceId | "not-sure") => {
    if (id !== serviceId) {
      setSymptomId(null);
      setChecked([]);
      setResolved(null);
    }
    setServiceId(id);
  };

  const chooseSymptom = (id: string) => {
    if (id !== symptomId) {
      setChecked([]);
      setResolved(null);
    }
    setSymptomId(id);
  };

  const toggleCheck = (item: string) =>
    setChecked((prev) => (prev.includes(item) ? prev.filter((c) => c !== item) : [...prev, item]));

  const canVisit = (index: number) => {
    if (index === 0) return true;
    if (notSure) return index === 3;
    if (index === 1) return !!service;
    return !!symptom;
  };

  const continueFromService = () => setStep(notSure ? 3 : 1);

  return (
    <section id="troubleshoot-guide" className="w-full scroll-mt-24 bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeader
          eyebrow="Step-by-step guide"
          title="Let’s narrow it down"
          subtitle="Your answers stay on this page — nothing is sent or stored."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-[260px_1fr]">
          {/* Stepper */}
          <aside className="h-fit rounded-2xl border border-[#E3E6F2] bg-white p-5 shadow-[0_10px_30px_rgba(30,30,90,0.05)]">
            <ol className="flex gap-2 overflow-x-auto lg:flex-col lg:gap-1">
              {STEPS.map((label, index) => {
                const active = index === step;
                const done = index < step && canVisit(index);
                const enabled = canVisit(index);
                return (
                  <li key={label} className="shrink-0">
                    <button
                      type="button"
                      disabled={!enabled}
                      onClick={() => setStep(index)}
                      aria-current={active ? "step" : undefined}
                      className={`flex w-full items-center gap-3 rounded-xl px-2 py-2 text-left text-sm font-semibold transition-colors ${
                        active ? "text-[#0A1446]" : "text-[#6B7194]"
                      } ${enabled ? "hover:bg-[#F5F6FB]" : "cursor-not-allowed opacity-60"}`}
                    >
                      <span
                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-xs font-bold ${
                          active
                            ? "bg-gradient-to-br from-[#F0168A] to-[#F28C28] text-white"
                            : done
                              ? "bg-[#DDF1ED] text-[#0E9E7B]"
                              : "bg-[#F1F2F8] text-[#6B7194]"
                        }`}
                      >
                        {done ? <Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden="true" /> : index + 1}
                      </span>
                      {label}
                    </button>
                  </li>
                );
              })}
            </ol>
            <button
              type="button"
              onClick={restart}
              className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#E3E6F2] px-4 py-2 text-xs font-semibold text-[#0A1446] transition-colors hover:bg-[#F5F6FB]"
            >
              <RotateCcw className="h-3.5 w-3.5" strokeWidth={2.25} aria-hidden="true" />
              Restart guide
            </button>
          </aside>

          {/* Panel */}
          <div className="rounded-2xl border border-[#E3E6F2] bg-white p-5 shadow-[0_10px_30px_rgba(30,30,90,0.05)] sm:p-7" aria-live="polite">
            {step === 0 && (
              <div>
                <h3 className="text-xl font-extrabold text-[#0A1446] sm:text-2xl">What type of service is affected?</h3>
                <p className="mt-1.5 text-sm text-[#3A4268]">
                  Pick one — or choose “Not sure” to go straight to our team.
                </p>

                <div role="radiogroup" aria-label="Service type" className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
                  {SERVICES.map((s) => {
                    const selected = serviceId === s.id;
                    return (
                      <button
                        key={s.id}
                        type="button"
                        role="radio"
                        aria-checked={selected}
                        onClick={() => chooseService(s.id)}
                        className={`group relative h-[150px] overflow-hidden rounded-2xl text-left outline-none ring-offset-2 transition focus-visible:ring-2 focus-visible:ring-[#E0127C] ${
                          selected ? "ring-[3px] ring-[#E0127C]" : ""
                        }`}
                      >
                        <Image
                          src={s.image}
                          alt={s.alt}
                          fill
                          sizes="(min-width: 1024px) 160px, 45vw"
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0F1640]/20 to-[#0F1640]/85" />
                        {selected && (
                          <span className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-[#E0127C] text-white">
                            <Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden="true" />
                          </span>
                        )}
                        <span className="absolute inset-x-3 bottom-3">
                          <span className="block text-sm font-bold text-white">{s.label}</span>
                          <span className="block text-[11px] text-white/80">{s.hint}</span>
                        </span>
                      </button>
                    );
                  })}
                  <button
                    type="button"
                    role="radio"
                    aria-checked={notSure}
                    onClick={() => chooseService("not-sure")}
                    className={`relative flex h-[150px] flex-col justify-end rounded-2xl bg-[#FDF0F4] p-3 text-left outline-none ring-offset-2 transition focus-visible:ring-2 focus-visible:ring-[#E0127C] ${
                      notSure ? "ring-[3px] ring-[#E0127C]" : ""
                    }`}
                  >
                    <HelpCircle className="mb-3 h-5 w-5 text-[#0A1446]" strokeWidth={2} aria-hidden="true" />
                    <span className="block text-sm font-bold text-[#0A1446]">Not sure</span>
                    <span className="block text-[11px] text-[#6B7194]">Talk to a person</span>
                  </button>
                </div>

                <button type="button" disabled={!serviceId} onClick={continueFromService} className={`${PRIMARY_BTN} mt-6`}>
                  Continue
                  <ChevronRight className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
                </button>
              </div>
            )}

            {step === 1 && service && (
              <div>
                <h3 className="text-xl font-extrabold text-[#0A1446] sm:text-2xl">{service.question}</h3>
                <p className="mt-1.5 text-sm text-[#3A4268]">Choose the option closest to what you’re seeing.</p>
                <div role="radiogroup" aria-label="Symptom" className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {service.symptoms.map((s) => {
                    const selected = symptomId === s.id;
                    return (
                      <button
                        key={s.id}
                        type="button"
                        role="radio"
                        aria-checked={selected}
                        onClick={() => chooseSymptom(s.id)}
                        className={`flex items-center justify-between rounded-xl border px-4 py-4 text-left text-sm font-semibold text-[#0A1446] transition-colors ${
                          selected ? "border-[#E0127C] bg-[#FDF0F6]" : "border-[#E3E6F2] hover:border-[#D4D9EC] hover:bg-[#FAFBFE]"
                        }`}
                      >
                        {s.label}
                        <span
                          className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 ${
                            selected ? "border-[#E0127C] bg-[#E0127C] text-white" : "border-[#D4D9EC]"
                          }`}
                        >
                          {selected && <Check className="h-3 w-3" strokeWidth={3.5} aria-hidden="true" />}
                        </span>
                      </button>
                    );
                  })}
                </div>
                <StepNav onBack={() => setStep(0)} onNext={() => setStep(2)} nextDisabled={!symptom} />
              </div>
            )}

            {step === 2 && service && symptom && (
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#C2410C]">
                  {service.label} · {symptom.label}
                </p>
                <h3 className="mt-1.5 text-xl font-extrabold text-[#0A1446] sm:text-2xl">Try these safe checks</h3>
                <p className="mt-1.5 text-sm text-[#3A4268]">Tick each one as you go. They won’t change your account or settings.</p>

                <ul className="mt-5 space-y-2.5">
                  {symptom.checks.map((item) => {
                    const done = checked.includes(item);
                    return (
                      <li key={item}>
                        <label
                          className={`flex cursor-pointer items-start gap-3 rounded-xl border px-4 py-3.5 text-sm transition-colors ${
                            done ? "border-[#BFE5DB] bg-[#F1FAF7]" : "border-[#E3E6F2] hover:bg-[#FAFBFE]"
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={done}
                            onChange={() => toggleCheck(item)}
                            className="mt-0.5 h-4 w-4 shrink-0 accent-[#0E9E7B]"
                          />
                          <span className="text-[#0A1446]">{item}</span>
                        </label>
                      </li>
                    );
                  })}
                </ul>

                {symptom.warning && (
                  <div className="mt-4 flex gap-3 rounded-xl border border-[#F5E2BF] bg-[#FDF7EA] px-4 py-3.5 text-sm text-[#5B4318]">
                    <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-[#F09A1A]" strokeWidth={2.25} aria-hidden="true" />
                    {symptom.warning}
                  </div>
                )}

                <StepNav onBack={() => setStep(1)} onNext={() => setStep(3)} nextLabel="I’ve tried these" />
              </div>
            )}

            {step === 3 && (
              <div>
                {notSure ? (
                  <NotSurePanel onBack={() => setStep(0)} />
                ) : (
                  service &&
                  symptom && (
                    <div>
                      <h3 className="text-xl font-extrabold text-[#0A1446] sm:text-2xl">Did that fix it?</h3>
                      <div className="mt-5 grid grid-cols-2 gap-3">
                        {[
                          { value: true, label: "Yes, it’s working" },
                          { value: false, label: "No, still not working" },
                        ].map(({ value, label }) => (
                          <button
                            key={label}
                            type="button"
                            aria-pressed={resolved === value}
                            onClick={() => setResolved(value)}
                            className={`rounded-xl border px-4 py-3.5 text-sm font-semibold text-[#0A1446] transition-colors ${
                              resolved === value ? "border-[#E0127C] bg-[#FDF0F6]" : "border-[#E3E6F2] hover:bg-[#FAFBFE]"
                            }`}
                          >
                            {label}
                          </button>
                        ))}
                      </div>

                      {resolved === true && (
                        <div className="mt-5 flex gap-3 rounded-xl border border-[#BFE5DB] bg-[#F1FAF7] p-4 text-sm text-[#0A1446]">
                          <ThumbsUp className="mt-0.5 h-5 w-5 shrink-0 text-[#0E9E7B]" strokeWidth={2} aria-hidden="true" />
                          <span>
                            <span className="block font-bold">Great — glad it’s sorted.</span>
                            If the problem comes back, run the guide again or contact us with the time it happened.
                          </span>
                        </div>
                      )}

                      {resolved === false && (
                        <div className="mt-5 rounded-xl border border-[#E3E6F2] bg-[#FAFBFE] p-5">
                          <p className="text-sm font-bold text-[#0A1446]">Contact our team and tell us:</p>
                          <dl className="mt-3 grid grid-cols-1 gap-2 text-sm sm:grid-cols-[140px_1fr]">
                            <dt className="text-[#6B7194]">Service</dt>
                            <dd className="font-semibold text-[#0A1446]">{service.label}</dd>
                            <dt className="text-[#6B7194]">What’s happening</dt>
                            <dd className="font-semibold text-[#0A1446]">{symptom.label}</dd>
                            <dt className="text-[#6B7194]">Checks tried</dt>
                            <dd className="font-semibold text-[#0A1446]">
                              {checked.length ? `${checked.length} of ${symptom.checks.length}` : "None yet"}
                            </dd>
                          </dl>
                          <p className="mt-3 text-xs text-[#6B7194]">
                            Never share passwords, PINs or SIM codes. We won’t ask for them.
                          </p>
                          <Link href="/contact" className={`${PRIMARY_BTN} mt-4`}>
                            <Phone className="h-4 w-4" strokeWidth={2.25} aria-hidden="true" />
                            Contact support
                          </Link>
                        </div>
                      )}

                      <StepNav onBack={() => setStep(2)} />
                    </div>
                  )
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function StepNav({
  onBack,
  onNext,
  nextDisabled,
  nextLabel = "Continue",
}: {
  onBack: () => void;
  onNext?: () => void;
  nextDisabled?: boolean;
  nextLabel?: string;
}) {
  return (
    <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row">
      <button
        type="button"
        onClick={onBack}
        className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-[#E3E6F2] px-5 py-3.5 text-sm font-semibold text-[#0A1446] transition-colors hover:bg-[#F5F6FB]"
      >
        <ChevronLeft className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
        Back
      </button>
      {onNext && (
        <button type="button" disabled={nextDisabled} onClick={onNext} className={`${PRIMARY_BTN} sm:flex-1`}>
          {nextLabel}
          <ChevronRight className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
        </button>
      )}
    </div>
  );
}

function NotSurePanel({ onBack }: { onBack: () => void }) {
  return (
    <div>
      <h3 className="text-xl font-extrabold text-[#0A1446] sm:text-2xl">Let’s get you to a person</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-[#3A4268]">
        That’s fine — our team can work out which service is affected. Tell them what you’re seeing, when it started and
        what you’ve already tried. Never send passwords, PINs or SIM codes.
      </p>
      <Link href="/contact" className={`${PRIMARY_BTN} mt-6`}>
        <Phone className="h-4 w-4" strokeWidth={2.25} aria-hidden="true" />
        Contact support
      </Link>
      <StepNav onBack={onBack} />
    </div>
  );
}
