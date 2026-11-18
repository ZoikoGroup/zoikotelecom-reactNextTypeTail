"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check, ChevronRight } from "lucide-react";

const TALKING_POINTS = [
  "Which number types you’re considering",
  "Where you want calls to go",
  "Whether you want to keep an existing number",
] as const;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type FormErrors = Partial<Record<"email" | "need", string>>;

export default function DiscussNumberOptions() {
  const [email, setEmail] = useState("");
  const [need, setNeed] = useState("");
  const [phone, setPhone] = useState("");
  const [marketing, setMarketing] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  const validate = (): FormErrors => {
    const next: FormErrors = {};
    if (!email.trim()) next.email = "Enter your business email.";
    else if (!EMAIL_PATTERN.test(email.trim()))
      next.email = "Enter a valid email address.";
    if (!need.trim()) next.need = "Tell us what you need.";
    return next;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    // TODO: connect to the enquiry endpoint once the backend team provides it.
    // Payload: { email, need, phone, marketing }
  };

  const inputClass = (hasError: boolean) =>
    `mt-2 w-full rounded-xl border bg-white px-4 py-3 text-sm text-[#11183C] outline-none transition-colors placeholder:text-[#8A90A6] focus:border-[#E11D74] focus:ring-2 focus:ring-[#E11D74]/15 ${
      hasError ? "border-[#DC2626]" : "border-[#D3D8E8]"
    }`;

  return (
    <section
      id="discuss-number-options"
      className="w-full scroll-mt-24 bg-[#F5F6FB] px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="mx-auto grid max-w-[1300px] grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Left: intro */}
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#434A6E]">
            Talk to us
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#11183C] sm:text-4xl lg:text-[42px] lg:leading-[1.15]">
            Discuss number options
          </h2>
          <p className="mt-3.5 max-w-[500px] text-sm leading-relaxed text-[#4B5375] sm:text-base">
            Tell us what you need and our team will be in touch. No ID documents
            needed at this stage.
          </p>

          <ul className="mt-8 space-y-3">
            {TALKING_POINTS.map((point) => (
              <li
                key={point}
                className="flex items-start gap-3 text-sm text-[#4B5375]"
              >
                <Check
                  className="mt-0.5 h-4 w-4 shrink-0 text-[#E11D74]"
                  strokeWidth={2.5}
                  aria-hidden="true"
                />
                {point}
              </li>
            ))}
          </ul>
        </div>

        {/* Right: form */}
        <form
          noValidate
          onSubmit={handleSubmit}
          className="rounded-3xl border border-[#E6E9F2] bg-white p-6 shadow-[0_12px_40px_rgba(17,24,60,0.06)] sm:p-8"
        >
          <div>
            <label
              htmlFor="vn-email"
              className="text-sm font-bold text-[#11183C]"
            >
              Business email <span className="text-[#E11D74]">*</span>
            </label>
            <input
              id="vn-email"
              type="email"
              name="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "vn-email-error" : undefined}
              className={inputClass(Boolean(errors.email))}
            />
            {errors.email && (
              <p id="vn-email-error" className="mt-1.5 text-xs text-[#DC2626]">
                {errors.email}
              </p>
            )}
          </div>

          <div className="mt-5">
            <label
              htmlFor="vn-need"
              className="text-sm font-bold text-[#11183C]"
            >
              What do you need? <span className="text-[#E11D74]">*</span>
            </label>
            <textarea
              id="vn-need"
              name="need"
              rows={4}
              required
              value={need}
              onChange={(e) => setNeed(e.target.value)}
              placeholder="For example: a freephone number that rings our sales team"
              aria-invalid={Boolean(errors.need)}
              aria-describedby={errors.need ? "vn-need-error" : undefined}
              className={`${inputClass(Boolean(errors.need))} resize-y`}
            />
            {errors.need && (
              <p id="vn-need-error" className="mt-1.5 text-xs text-[#DC2626]">
                {errors.need}
              </p>
            )}
          </div>

          <div className="mt-5">
            <label
              htmlFor="vn-phone"
              className="text-sm font-bold text-[#11183C]"
            >
              Phone{" "}
              <span className="text-xs font-normal text-[#4B5375]">
                (optional)
              </span>
            </label>
            <input
              id="vn-phone"
              type="tel"
              name="phone"
              autoComplete="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className={inputClass(false)}
            />
          </div>

          <label className="mt-5 flex cursor-pointer items-start gap-3 text-sm text-[#4B5375]">
            <input
              type="checkbox"
              name="marketing"
              checked={marketing}
              onChange={(e) => setMarketing(e.target.checked)}
              className="mt-0.5 h-4 w-4 shrink-0 accent-[#E11D74]"
            />
            I&apos;d like to hear about Zoiko Telecom products and offers
            (optional).
          </label>

          <p className="mt-4 text-xs text-[#4B5375]">
            We use your details only to respond to your enquiry. See our{" "}
            <Link
              href="/privacy-policy"
              className="font-bold text-[#E11D74] underline underline-offset-2"
            >
              Privacy Notice
            </Link>
            .
          </p>

          <button
            type="submit"
            className="mt-5 inline-flex w-full items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-[#E11D74] to-[#C2185B] px-6 py-4 text-sm font-bold text-white shadow-[0_10px_24px_rgba(225,29,116,0.3)] transition-transform hover:scale-[1.005]"
          >
            Send enquiry
            <ChevronRight className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
          </button>
        </form>
      </div>
    </section>
  );
}
