"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, ChevronRight } from "lucide-react";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const HELP_WITH = [
  "Which type of device suits you",
  "SIM, plan and hotspot rules",
  "Indoor signal and placement",
  "Set-up and security basics",
] as const;

const CONTACT_METHODS = ["Email", "Phone"];
const TOPICS = ["A portable hotspot", "A 4G / 5G router", "A Wi-Fi router for broadband", "Not sure yet"];
const AUDIENCES = ["Personal use", "Business use"];
const MAIN_USES = ["Not sure", "Travel", "Home without fixed broadband", "Temporary workplace or site", "Better Wi-Fi on existing broadband"];

type FormState = {
  name: string;
  email: string;
  preferredContact: string;
  phone: string;
  topic: string;
  audience: string;
  mainUse: string;
  question: string;
  privacyAck: boolean;
  marketing: boolean;
};

type FieldKey = "name" | "email" | "phone" | "privacyAck";
type FormErrors = Partial<Record<FieldKey, string>>;

const INITIAL: FormState = {
  name: "",
  email: "",
  preferredContact: CONTACT_METHODS[0],
  phone: "",
  topic: TOPICS[0],
  audience: AUDIENCES[0],
  mainUse: MAIN_USES[0],
  question: "",
  privacyAck: false,
  marketing: false,
};

const inputClass = (hasError = false) =>
  `mt-2 w-full rounded-xl border bg-white px-4 py-3 text-sm text-[#11183C] outline-none transition-colors placeholder:text-[#8A90A6] focus:border-[#E11D74] focus:ring-2 focus:ring-[#E11D74]/15 sm:text-base ${
    hasError ? "border-[#DC2626]" : "border-[#D3D8E8]"
  }`;

const labelClass = "text-sm font-bold text-[#11183C]";
const hintClass = "text-xs font-normal text-[#4B5375]";

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-1.5 text-xs text-[#DC2626]">
      {message}
    </p>
  );
}

function SelectField({
  id,
  label,
  value,
  options,
  onChange,
}: {
  id: string;
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
}) {
  return (
    <div>
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      <select id={id} value={value} onChange={(e) => onChange(e.target.value)} className={inputClass()}>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}

export default function HotspotEnquiryForm() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [errors, setErrors] = useState<FormErrors>({});

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const validate = (): FormErrors => {
    const next: FormErrors = {};
    if (!form.name.trim()) next.name = "Enter your name.";
    if (!form.email.trim()) next.email = "Enter your email address.";
    else if (!EMAIL_PATTERN.test(form.email.trim())) next.email = "Enter a valid email address.";
    if (form.preferredContact === "Phone" && !form.phone.trim()) next.phone = "Enter a phone number so we can call you.";
    if (!form.privacyAck) next.privacyAck = "Please confirm you’ve read the Privacy Notice.";
    return next;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    // TODO: connect to the enquiry endpoint once the backend team provides it.
    // Payload: form
  };

  const describedBy = (key: FieldKey) => (errors[key] ? `hs-${key}-error` : undefined);

  return (
    <section id="hotspot-enquiry" className="w-full scroll-mt-24 bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-start gap-10 lg:grid-cols-[440px_1fr] lg:gap-12">
        {/* Image panel */}
        <aside className="relative min-h-[460px] overflow-hidden rounded-[28px] lg:sticky lg:top-24 lg:min-h-[620px]">
          <Image
            src="/Images/mobile-hotspots-routers/form-support-handshake.webp"
            alt="Customer shaking hands with a support adviser"
            fill
            sizes="(min-width: 1024px) 440px, 100vw"
            className="object-cover"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#11183C]/90 via-[#11183C]/40 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#F472B6]">Ask our team</p>
            <h3 className="mt-2 text-2xl font-extrabold text-white">What we’ll help with</h3>
            <ul className="mt-4 space-y-2.5">
              {HELP_WITH.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-white/90">
                  <Check className="h-4 w-4 shrink-0 text-[#F472B6]" strokeWidth={2.5} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Form */}
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#E11D74]">Ask a question</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-[#11183C] sm:text-4xl lg:text-[40px] lg:leading-[1.15]">
            Tell us about your connectivity needs
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[#4B5375] sm:text-base">
            Describe where and how you’ll use it. Please don’t share Wi-Fi passwords, admin logins or SIM numbers.
          </p>

          <form noValidate onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="hs-name" className={labelClass}>
                Your name <span className="text-[#E11D74]">*</span>
              </label>
              <input
                id="hs-name"
                autoComplete="name"
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={describedBy("name")}
                className={inputClass(Boolean(errors.name))}
              />
              <FieldError id="hs-name-error" message={errors.name} />
            </div>
            <div>
              <label htmlFor="hs-email" className={labelClass}>
                Email <span className="text-[#E11D74]">*</span>
              </label>
              <input
                id="hs-email"
                type="email"
                autoComplete="email"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={describedBy("email")}
                className={inputClass(Boolean(errors.email))}
              />
              <FieldError id="hs-email-error" message={errors.email} />
            </div>

            <SelectField
              id="hs-preferredContact"
              label="Preferred contact"
              value={form.preferredContact}
              options={CONTACT_METHODS}
              onChange={(v) => update("preferredContact", v)}
            />
            <div>
              <label htmlFor="hs-phone" className={labelClass}>
                Phone <span className={hintClass}>(only if you prefer a call)</span>
                {form.preferredContact === "Phone" && <span className="text-[#E11D74]"> *</span>}
              </label>
              <input
                id="hs-phone"
                type="tel"
                autoComplete="tel"
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
                aria-invalid={Boolean(errors.phone)}
                aria-describedby={describedBy("phone")}
                className={inputClass(Boolean(errors.phone))}
              />
              <FieldError id="hs-phone-error" message={errors.phone} />
            </div>

            <div className="sm:col-span-2">
              <SelectField
                id="hs-topic"
                label="I’m asking about"
                value={form.topic}
                options={TOPICS}
                onChange={(v) => update("topic", v)}
              />
            </div>

            <SelectField
              id="hs-audience"
              label="For"
              value={form.audience}
              options={AUDIENCES}
              onChange={(v) => update("audience", v)}
            />
            <SelectField
              id="hs-mainUse"
              label="Main use"
              value={form.mainUse}
              options={MAIN_USES}
              onChange={(v) => update("mainUse", v)}
            />

            <div className="sm:col-span-2">
              <label htmlFor="hs-question" className={labelClass}>
                Your question{" "}
                <span className={hintClass}>
                  (optional — please don’t include passwords, card details or health information)
                </span>
              </label>
              <textarea
                id="hs-question"
                rows={4}
                value={form.question}
                onChange={(e) => update("question", e.target.value)}
                className={`${inputClass()} resize-y`}
              />
            </div>

            <div className="sm:col-span-2">
              <label className="flex cursor-pointer items-start gap-3 text-sm text-[#4B5375]">
                <input
                  type="checkbox"
                  checked={form.privacyAck}
                  onChange={(e) => update("privacyAck", e.target.checked)}
                  aria-invalid={Boolean(errors.privacyAck)}
                  aria-describedby={describedBy("privacyAck")}
                  className="mt-0.5 h-4 w-4 shrink-0 accent-[#E11D74]"
                />
                <span>
                  I’ve read the{" "}
                  <Link href="/privacy-policy" className="font-bold text-[#E11D74] underline underline-offset-2">
                    Privacy Notice
                  </Link>{" "}
                  and understand how my enquiry details are used. <span className="text-[#E11D74]">*</span>
                </span>
              </label>
              <FieldError id="hs-privacyAck-error" message={errors.privacyAck} />
            </div>

            <label className="flex cursor-pointer items-start gap-3 text-sm text-[#4B5375] sm:col-span-2">
              <input
                type="checkbox"
                checked={form.marketing}
                onChange={(e) => update("marketing", e.target.checked)}
                className="mt-0.5 h-4 w-4 shrink-0 accent-[#E11D74]"
              />
              Send me Zoiko Telecom news and offers (optional).
            </label>

            <button
              type="submit"
              className="inline-flex items-center justify-center gap-1 rounded-xl bg-gradient-to-r from-[#E11D74] to-[#C2185B] px-6 py-4 text-sm font-bold text-white shadow-[0_10px_24px_rgba(225,29,116,0.3)] transition-transform hover:scale-[1.005] sm:col-span-2 sm:text-base"
            >
              Send my question
              <ChevronRight className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
