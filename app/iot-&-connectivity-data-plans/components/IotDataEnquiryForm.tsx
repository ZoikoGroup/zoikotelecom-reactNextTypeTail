"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronRight, Lock } from "lucide-react";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const STEP_TITLES = ["Your contact details", "Your devices", "Data, regions and timing"] as const;

const WHY_WE_ASK = [
  "Your use case and device numbers",
  "How often devices send, and how much",
  "Where devices operate",
  "Your rollout timing",
] as const;

const BUSINESS_TYPES = ["Limited company", "Sole trader", "Partnership", "Public sector", "Charity", "Other"];
const CONTACT_METHODS = ["Email", "Phone"];
const USE_CASES = [
  "Low-frequency sensors",
  "Tracking beacons",
  "Industrial gateways",
  "Fleet telematics",
  "Retail endpoints",
  "Camera & audio devices",
  "Firmware-heavy estates",
  "Smart building gateways",
  "Something else",
];
const DEVICE_COUNTS = ["Unsure", "Fewer than 10", "10–100", "101–1,000", "1,001–10,000", "More than 10,000"];
const SEND_FREQUENCY = ["Unsure", "Every few seconds", "Every few minutes", "Hourly", "Daily or less", "Only on events"];
const DATA_PER_DEVICE = ["Unsure", "Under 1 MB a month", "1–10 MB a month", "10–100 MB a month", "100 MB–1 GB a month", "Over 1 GB a month"];
const REGIONS = ["Unsure", "UK only", "UK and Europe", "Several regions worldwide"];
const ROLLOUT = ["Unsure", "Pilot in the next 3 months", "Rollout in 3–6 months", "Rollout in 6–12 months", "Later than 12 months"];

type FormState = {
  businessName: string;
  contactName: string;
  email: string;
  phone: string;
  businessType: string;
  preferredContact: string;
  useCases: string[];
  devicesPilot: string;
  devicesFull: string;
  notes: string;
  frequency: string;
  dataPerDevice: string;
  regions: string;
  rollout: string;
  privacyAck: boolean;
  marketing: boolean;
};

type FieldKey = "businessName" | "contactName" | "email" | "useCases" | "privacyAck";
type FormErrors = Partial<Record<FieldKey, string>>;

const INITIAL: FormState = {
  businessName: "",
  contactName: "",
  email: "",
  phone: "",
  businessType: BUSINESS_TYPES[0],
  preferredContact: CONTACT_METHODS[0],
  useCases: [],
  devicesPilot: DEVICE_COUNTS[0],
  devicesFull: DEVICE_COUNTS[0],
  notes: "",
  frequency: SEND_FREQUENCY[0],
  dataPerDevice: DATA_PER_DEVICE[0],
  regions: REGIONS[0],
  rollout: ROLLOUT[0],
  privacyAck: false,
  marketing: false,
};

const inputClass = (hasError = false) =>
  `mt-2 w-full rounded-xl border bg-white px-4 py-3 text-sm text-[#11183C] outline-none transition-colors placeholder:text-[#8A90A6] focus:border-[#E11D74] focus:ring-2 focus:ring-[#E11D74]/15 ${
    hasError ? "border-[#DC2626]" : "border-[#D3D8E8]"
  }`;

const labelClass = "text-sm font-bold text-[#11183C]";

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

export default function IotDataEnquiryForm() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormState>(INITIAL);
  const [errors, setErrors] = useState<FormErrors>({});

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const toggleUseCase = (useCase: string) =>
    update(
      "useCases",
      form.useCases.includes(useCase)
        ? form.useCases.filter((u) => u !== useCase)
        : [...form.useCases, useCase],
    );

  const validateStep = (index: number): FormErrors => {
    const next: FormErrors = {};
    if (index === 0) {
      if (!form.businessName.trim()) next.businessName = "Enter your business name.";
      if (!form.contactName.trim()) next.contactName = "Enter a contact name.";
      if (!form.email.trim()) next.email = "Enter your work email.";
      else if (!EMAIL_PATTERN.test(form.email.trim())) next.email = "Enter a valid email address.";
    }
    if (index === 1 && form.useCases.length === 0) {
      next.useCases = "Choose at least one option — “Something else” is fine.";
    }
    if (index === 2 && !form.privacyAck) {
      next.privacyAck = "Please confirm you’ve read how we use your details.";
    }
    return next;
  };

  const goNext = () => {
    const nextErrors = validateStep(step);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) setStep((s) => Math.min(s + 1, STEP_TITLES.length - 1));
  };

  const goBack = () => {
    setErrors({});
    setStep((s) => Math.max(s - 1, 0));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (step < STEP_TITLES.length - 1) {
      goNext();
      return;
    }
    const nextErrors = validateStep(step);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    // TODO: connect to the enquiry endpoint once the backend team provides it.
    // Payload: form
  };

  const describedBy = (key: FieldKey) => (errors[key] ? `dp-${key}-error` : undefined);

  return (
    <section id="iot-data-enquiry" className="w-full scroll-mt-24 bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_420px]">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#E11D74]">Request information</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-[#11183C] sm:text-4xl lg:text-[40px] lg:leading-[1.15]">
            Discuss your IoT data needs
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[#4B5375] sm:text-base">
            Share rough figures — “unsure” is fine. Please don’t include SIM numbers, payload
            contents or firmware files. A person from our team follows up.
          </p>

          <div
            role="progressbar"
            aria-label="Enquiry progress"
            aria-valuemin={1}
            aria-valuemax={STEP_TITLES.length}
            aria-valuenow={step + 1}
            className="mt-6 h-1.5 w-full overflow-hidden rounded-full bg-[#E6E9F2]"
          >
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#E11D74] to-[#8E37E8] transition-all duration-300"
              style={{ width: `${((step + 1) / STEP_TITLES.length) * 100}%` }}
            />
          </div>

          <form noValidate onSubmit={handleSubmit} className="mt-6">
            <fieldset className="rounded-[20px] border border-[#E6E9F2] px-5 pb-6 pt-2 sm:px-6">
              <legend className="px-2 text-xs font-bold uppercase tracking-[0.12em] text-[#E11D74]">
                Step {step + 1} of {STEP_TITLES.length} · {STEP_TITLES[step]}
              </legend>

              {step === 0 && (
                <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="dp-businessName" className={labelClass}>
                      Business name <span className="text-[#E11D74]">*</span>
                    </label>
                    <input
                      id="dp-businessName"
                      autoComplete="organization"
                      value={form.businessName}
                      onChange={(e) => update("businessName", e.target.value)}
                      aria-invalid={Boolean(errors.businessName)}
                      aria-describedby={describedBy("businessName")}
                      className={inputClass(Boolean(errors.businessName))}
                    />
                    <FieldError id="dp-businessName-error" message={errors.businessName} />
                  </div>
                  <div>
                    <label htmlFor="dp-contactName" className={labelClass}>
                      Contact name <span className="text-[#E11D74]">*</span>
                    </label>
                    <input
                      id="dp-contactName"
                      autoComplete="name"
                      value={form.contactName}
                      onChange={(e) => update("contactName", e.target.value)}
                      aria-invalid={Boolean(errors.contactName)}
                      aria-describedby={describedBy("contactName")}
                      className={inputClass(Boolean(errors.contactName))}
                    />
                    <FieldError id="dp-contactName-error" message={errors.contactName} />
                  </div>
                  <div>
                    <label htmlFor="dp-email" className={labelClass}>
                      Work email <span className="text-[#E11D74]">*</span>
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
                  <div>
                    <label htmlFor="dp-phone" className={labelClass}>
                      Phone <span className="text-xs font-normal text-[#4B5375]">(optional)</span>
                    </label>
                    <input
                      id="dp-phone"
                      type="tel"
                      autoComplete="tel"
                      value={form.phone}
                      onChange={(e) => update("phone", e.target.value)}
                      className={inputClass()}
                    />
                  </div>
                  <SelectField
                    id="dp-businessType"
                    label="Business type"
                    value={form.businessType}
                    options={BUSINESS_TYPES}
                    onChange={(v) => update("businessType", v)}
                  />
                  <SelectField
                    id="dp-preferredContact"
                    label="Preferred contact"
                    value={form.preferredContact}
                    options={CONTACT_METHODS}
                    onChange={(v) => update("preferredContact", v)}
                  />
                </div>
              )}

              {step === 1 && (
                <div className="mt-4 space-y-5">
                  <div role="group" aria-labelledby="dp-useCases-label" aria-describedby={describedBy("useCases")}>
                    <p id="dp-useCases-label" className={labelClass}>
                      What kind of devices? <span className="text-[#E11D74]">*</span>
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2.5">
                      {USE_CASES.map((useCase) => {
                        const checked = form.useCases.includes(useCase);
                        return (
                          <label
                            key={useCase}
                            className={`cursor-pointer rounded-full border px-4 py-2 text-sm font-semibold transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-[#E11D74]/30 ${
                              checked
                                ? "border-[#E11D74] bg-[#FDEFF6] text-[#C2185B]"
                                : "border-[#D3D8E8] bg-white text-[#2B3150] hover:border-[#B8BED4]"
                            }`}
                          >
                            <input
                              type="checkbox"
                              className="sr-only"
                              checked={checked}
                              onChange={() => toggleUseCase(useCase)}
                            />
                            {useCase}
                          </label>
                        );
                      })}
                    </div>
                    <FieldError id="dp-useCases-error" message={errors.useCases} />
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <SelectField
                      id="dp-devicesPilot"
                      label="Devices at pilot or first phase"
                      value={form.devicesPilot}
                      options={DEVICE_COUNTS}
                      onChange={(v) => update("devicesPilot", v)}
                    />
                    <SelectField
                      id="dp-devicesFull"
                      label="Devices at full rollout"
                      value={form.devicesFull}
                      options={DEVICE_COUNTS}
                      onChange={(v) => update("devicesFull", v)}
                    />
                  </div>

                  <div>
                    <label htmlFor="dp-notes" className={labelClass}>
                      Anything else about your use case{" "}
                      <span className="text-xs font-normal text-[#4B5375]">(optional)</span>
                    </label>
                    <textarea
                      id="dp-notes"
                      rows={4}
                      value={form.notes}
                      onChange={(e) => update("notes", e.target.value)}
                      placeholder="For example: tank sensors at 40 farm sites, sending a reading every 15 minutes"
                      className={`${inputClass()} resize-y`}
                    />
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="mt-4 space-y-5">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <SelectField
                      id="dp-frequency"
                      label="How often do devices send?"
                      value={form.frequency}
                      options={SEND_FREQUENCY}
                      onChange={(v) => update("frequency", v)}
                    />
                    <SelectField
                      id="dp-dataPerDevice"
                      label="Rough data per device"
                      value={form.dataPerDevice}
                      options={DATA_PER_DEVICE}
                      onChange={(v) => update("dataPerDevice", v)}
                    />
                    <SelectField
                      id="dp-regions"
                      label="Where do devices operate?"
                      value={form.regions}
                      options={REGIONS}
                      onChange={(v) => update("regions", v)}
                    />
                    <SelectField
                      id="dp-rollout"
                      label="Rollout timing"
                      value={form.rollout}
                      options={ROLLOUT}
                      onChange={(v) => update("rollout", v)}
                    />
                  </div>

                  <div>
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
                        I understand my details are used only to respond to this enquiry, as set out in the{" "}
                        <Link href="/privacy-policy" className="font-bold text-[#E11D74] underline underline-offset-2">
                          Privacy Notice
                        </Link>
                        . <span className="text-[#E11D74]">*</span>
                      </span>
                    </label>
                    <FieldError id="dp-privacyAck-error" message={errors.privacyAck} />
                  </div>

                  <label className="flex cursor-pointer items-start gap-3 text-sm text-[#4B5375]">
                    <input
                      type="checkbox"
                      checked={form.marketing}
                      onChange={(e) => update("marketing", e.target.checked)}
                      className="mt-0.5 h-4 w-4 shrink-0 accent-[#E11D74]"
                    />
                    I’d like to hear about Zoiko Telecom products and offers (optional).
                  </label>
                </div>
              )}
            </fieldset>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={goBack}
                disabled={step === 0}
                className="rounded-xl border border-[#D3D8E8] bg-white px-6 py-4 text-sm font-bold text-[#11183C] transition-colors hover:bg-[#F5F6FB] disabled:cursor-not-allowed disabled:opacity-60"
              >
                Back
              </button>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-1 rounded-xl bg-gradient-to-r from-[#E11D74] to-[#C2185B] px-6 py-4 text-sm font-bold text-white shadow-[0_10px_24px_rgba(225,29,116,0.3)] transition-transform hover:scale-[1.005]"
              >
                {step < STEP_TITLES.length - 1 ? "Continue" : "Send enquiry"}
                <ChevronRight className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
              </button>
            </div>
          </form>
        </div>

        <aside className="rounded-[28px] bg-gradient-to-b from-[#141B5C] to-[#3A2C88] p-7 text-white shadow-[0_24px_50px_rgba(17,24,60,0.25)] lg:mt-12">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#F472B6]">Why we ask</p>
          <h3 className="mt-2 text-xl font-bold">What we’ll ask</h3>
          <ul className="relative mt-5 space-y-4">
            <span aria-hidden="true" className="absolute bottom-2 left-[7px] top-2 w-px bg-white/25" />
            {WHY_WE_ASK.map((item) => (
              <li key={item} className="relative flex items-center gap-3 text-sm text-[#E4E6F3]">
                <span
                  aria-hidden="true"
                  className="relative z-10 h-[15px] w-[15px] shrink-0 rounded-full border-[3px] border-[#3A2C88] bg-[#F472B6] ring-1 ring-[#F472B6]/50"
                />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 flex items-start gap-3 rounded-xl bg-white/10 px-4 py-3 text-xs leading-relaxed text-[#E4E6F3]">
            <Lock className="mt-0.5 h-4 w-4 shrink-0 text-[#FBBF24]" strokeWidth={2} aria-hidden="true" />
            We never ask for staff phone numbers, passwords or payment details in this form.
          </p>
          <Link
            href="/contact"
            className="mt-4 inline-flex w-full items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-[#E11D74] to-[#C2185B] px-6 py-3.5 text-sm font-bold text-white shadow-[0_10px_24px_rgba(225,29,116,0.35)] transition-transform hover:scale-[1.01]"
          >
            Or contact us directly
            <ChevronRight className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
          </Link>
        </aside>
      </div>
    </section>
  );
}
