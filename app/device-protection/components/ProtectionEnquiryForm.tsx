"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, CheckCircle2, ChevronRight } from "lucide-react";

const IMG = "/Images/device-protection";
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const HELP_WITH = [
  "The difference between rights, warranty and insurance",
  "Where to go for a fault",
  "What to check before buying cover",
  "Who to contact if you’re already covered",
] as const;

const CONTACT_METHODS = ["Email", "Phone"];
const TOPICS = [
  "A fault or defect",
  "Accidental damage",
  "Lost or stolen",
  "Policy documents or existing cover",
  "Business devices",
  "Not sure yet",
];
const DEVICE_TYPES = ["Phone", "Tablet", "Hotspot or router", "Other device"];
const COVER_STATUS = ["Not sure", "Yes — I have cover", "No — I don’t have cover"];

type FormState = {
  name: string;
  email: string;
  preferredContact: string;
  phone: string;
  topic: string;
  deviceType: string;
  hasCover: string;
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
  deviceType: DEVICE_TYPES[0],
  hasCover: COVER_STATUS[0],
  question: "",
  privacyAck: false,
  marketing: false,
};

const inputClass = (hasError = false) =>
  `mt-1.5 w-full rounded-[11px] border bg-white px-4 py-3 text-sm text-[#0A1446] outline-none transition-colors placeholder:text-[#8A90A6] focus:border-[#E0127C] focus:ring-2 focus:ring-[#E0127C]/15 sm:text-[15px] ${
    hasError ? "border-[#DC2626]" : "border-[#CDD2E6]"
  }`;

const labelClass = "text-sm font-semibold text-[#0A1446]";
const hintClass = "text-[11.7px] font-semibold text-[#0A1446]/80";

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

export default function ProtectionEnquiryForm() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setSubmitted(false);
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const validate = (): FormErrors => {
    const next: FormErrors = {};
    if (!form.name.trim()) next.name = "Enter your name.";
    if (!form.email.trim()) next.email = "Enter your email address.";
    else if (!EMAIL_PATTERN.test(form.email.trim())) next.email = "Enter a valid email address.";
    if (form.preferredContact === "Phone" && !form.phone.trim()) {
      next.phone = "Enter a phone number so we can call you.";
    }
    if (!form.privacyAck) next.privacyAck = "Please confirm you’ve read the Privacy Notice.";
    return next;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    // TODO: connect to the enquiry endpoint once the backend team provides it.
    setSubmitted(true);
    setForm(INITIAL);
  };

  const describedBy = (key: FieldKey) => (errors[key] ? `dp-${key}-error` : undefined);

  return (
    <section id="protection-enquiry" className="w-full scroll-mt-24 bg-white px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-start gap-10 lg:grid-cols-[480px_1fr]">
        {/* Sticky left image panel */}
        <aside className="relative min-h-[460px] overflow-hidden rounded-[30px] lg:sticky lg:top-24 lg:min-h-[620px]">
          <Image
            src={`${IMG}/form-support-adviser.png`}
            alt="Customer getting help from a support adviser"
            fill
            sizes="(min-width: 1024px) 480px, 100vw"
            className="object-cover"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-[#0A1446]/90 via-[#0A1446]/40 to-transparent"
          />
          <div className="absolute inset-x-0 bottom-0 p-6">
            <p className="text-[13px] font-bold uppercase tracking-[0.14em] text-[#F7B9D9]">Ask our team</p>
            <h3 className="mt-1.5 text-2xl font-bold tracking-tight text-white">What we’ll help with</h3>
            <ul className="mt-3.5 space-y-2.5">
              {HELP_WITH.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-[15px] text-white/95">
                  <Check className="h-4 w-4 shrink-0 text-[#F7B9D9]" strokeWidth={2.5} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Right form */}
        <div>
          <p className="text-[13px] font-bold uppercase tracking-[0.14em] text-[#E0127C]">Ask a question</p>
          <h2 className="mt-1.5 text-3xl font-bold tracking-tight text-[#0A1446] sm:text-[34px] sm:leading-[1.15]">
            Ask about device protection
          </h2>
          <p className="mt-2.5 text-sm leading-relaxed text-[#1E1B2E] sm:text-[16.5px]">
            Tell us what you’d like to know. Please don’t send IMEI numbers, policy numbers or card details through this
            form.
          </p>

          {submitted && (
            <div
              role="status"
              className="mt-5 flex items-start gap-3 rounded-2xl border border-[#A7F3D0] bg-[#ECFDF5] px-4 py-3.5 text-sm text-[#065F46]"
            >
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#059669]" aria-hidden="true" />
              <p>
                Thanks — your question has been prepared. Our team will point you to the right route for your device or
                existing cover.
              </p>
            </div>
          )}

          <form noValidate onSubmit={handleSubmit} className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="dp-name" className={labelClass}>
                Your name <span className="text-[#E0127C]">*</span>
              </label>
              <input
                id="dp-name"
                autoComplete="name"
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={describedBy("name")}
                className={inputClass(Boolean(errors.name))}
              />
              <FieldError id="dp-name-error" message={errors.name} />
            </div>

            <div>
              <label htmlFor="dp-email" className={labelClass}>
                Email <span className="text-[#E0127C]">*</span>
              </label>
              <input
                id="dp-email"
                type="email"
                autoComplete="email"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={describedBy("email")}
                className={inputClass(Boolean(errors.email))}
              />
              <FieldError id="dp-email-error" message={errors.email} />
            </div>

            <SelectField
              id="dp-preferredContact"
              label="Preferred contact"
              value={form.preferredContact}
              options={CONTACT_METHODS}
              onChange={(v) => update("preferredContact", v)}
            />

            <div>
              <label htmlFor="dp-phone" className={labelClass}>
                Phone <span className={hintClass}>(only if you prefer a call)</span>
                {form.preferredContact === "Phone" && <span className="text-[#E0127C]"> *</span>}
              </label>
              <input
                id="dp-phone"
                type="tel"
                autoComplete="tel"
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
                aria-invalid={Boolean(errors.phone)}
                aria-describedby={describedBy("phone")}
                className={inputClass(Boolean(errors.phone))}
              />
              <FieldError id="dp-phone-error" message={errors.phone} />
            </div>

            <div className="sm:col-span-2">
              <SelectField
                id="dp-topic"
                label="I’m asking about"
                value={form.topic}
                options={TOPICS}
                onChange={(v) => update("topic", v)}
              />
            </div>

            <SelectField
              id="dp-deviceType"
              label="Device type"
              value={form.deviceType}
              options={DEVICE_TYPES}
              onChange={(v) => update("deviceType", v)}
            />

            <SelectField
              id="dp-hasCover"
              label="Do you have cover?"
              value={form.hasCover}
              options={COVER_STATUS}
              onChange={(v) => update("hasCover", v)}
            />

            <div className="sm:col-span-2">
              <label htmlFor="dp-question" className={labelClass}>
                Your question{" "}
                <span className={hintClass}>
                  (optional — please don’t include passwords, card details or health information)
                </span>
              </label>
              <textarea
                id="dp-question"
                rows={4}
                value={form.question}
                onChange={(e) => update("question", e.target.value)}
                className={`${inputClass()} resize-y`}
              />
            </div>

            <div className="sm:col-span-2">
              <label className="flex cursor-pointer items-start gap-2.5 text-sm text-[#1E1B2E]">
                <input
                  type="checkbox"
                  checked={form.privacyAck}
                  onChange={(e) => update("privacyAck", e.target.checked)}
                  aria-invalid={Boolean(errors.privacyAck)}
                  aria-describedby={describedBy("privacyAck")}
                  className="mt-0.5 h-[18px] w-[18px] shrink-0 accent-[#E0127C]"
                />
                <span>
                  I’ve read the{" "}
                  <Link href="/privacy-policy" className="font-semibold text-[#E0127C] underline underline-offset-2">
                    Privacy Notice
                  </Link>{" "}
                  and understand how my enquiry details are used. <span className="text-[#E0127C]">*</span>
                </span>
              </label>
              <FieldError id="dp-privacyAck-error" message={errors.privacyAck} />
            </div>

            <label className="flex cursor-pointer items-start gap-2.5 text-sm text-[#1E1B2E] sm:col-span-2">
              <input
                type="checkbox"
                checked={form.marketing}
                onChange={(e) => update("marketing", e.target.checked)}
                className="mt-0.5 h-[18px] w-[18px] shrink-0 accent-[#E0127C]"
              />
              Send me Zoiko Telecom news and offers (optional).
            </label>

            <button
              type="submit"
              className="mt-1 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#F0168A] via-[#E0127C] to-[#C8106E] px-6 py-4 text-[15px] font-semibold text-white shadow-[0_10px_22px_rgba(224,18,124,0.35)] transition-transform hover:scale-[1.005] sm:col-span-2"
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
