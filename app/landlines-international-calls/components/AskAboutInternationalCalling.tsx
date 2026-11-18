"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check, ChevronRight } from "lucide-react";

const TALKING_POINTS = [
  "Which countries you call",
  "Whether it’s for home or business",
  "How you’d like us to reply",
] as const;

const TOPICS = [
  "Rates for a country",
  "International minutes in my plan",
  "A charge on my bill",
  "Business international calling",
  "Something else",
] as const;

const SERVICES = ["Home", "Business", "Mobile", "Not sure"] as const;
const REPLY_METHODS = ["Email", "Phone"] as const;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type FormErrors = Partial<Record<"topic" | "email", string>>;

const fieldClass = (hasError: boolean) =>
  `mt-2 w-full rounded-xl border bg-white px-4 py-3 text-sm text-[#11183C] outline-none transition-colors focus:border-[#E11D74] focus:ring-2 focus:ring-[#E11D74]/15 ${
    hasError ? "border-[#DC2626]" : "border-[#D3D8E8]"
  }`;

export default function AskAboutInternationalCalling() {
  const [topic, setTopic] = useState("");
  const [service, setService] = useState<string>(SERVICES[0]);
  const [email, setEmail] = useState("");
  const [reply, setReply] = useState<string>(REPLY_METHODS[0]);
  const [marketing, setMarketing] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const next: FormErrors = {};
    if (!topic) next.topic = "Choose what you’re asking about.";
    if (!email.trim()) next.email = "Enter your email address.";
    else if (!EMAIL_PATTERN.test(email.trim())) next.email = "Enter a valid email address.";
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    // TODO: connect to the enquiry endpoint once the backend team provides it.
    // Payload: { topic, service, email, reply, marketing }
  };

  return (
    <section
      id="ask-about-international-calling"
      className="w-full scroll-mt-24 bg-white px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="mx-auto grid max-w-[1300px] grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#434A6E]">Ask us</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#11183C] sm:text-4xl lg:text-[42px] lg:leading-[1.15]">
            Ask about international calling
          </h2>
          <p className="mt-3.5 max-w-[520px] text-sm leading-relaxed text-[#4B5375] sm:text-base">
            Tell us what you need and we’ll reply with current terms. We can’t
            promise a quote by a set time.
          </p>
          <ul className="mt-8 space-y-3">
            {TALKING_POINTS.map((point) => (
              <li key={point} className="flex items-start gap-3 text-sm text-[#4B5375]">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#E11D74]" strokeWidth={2.5} aria-hidden="true" />
                {point}
              </li>
            ))}
          </ul>
        </div>

        <form
          noValidate
          onSubmit={handleSubmit}
          className="rounded-3xl border border-[#E6E9F2] bg-white p-6 shadow-[0_12px_40px_rgba(17,24,60,0.06)] sm:p-8"
        >
          <label htmlFor="ic-topic" className="text-sm font-bold text-[#11183C]">
            I’m asking about <span className="text-[#E11D74]">*</span>
          </label>
          <select
            id="ic-topic"
            required
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            aria-invalid={Boolean(errors.topic)}
            aria-describedby={errors.topic ? "ic-topic-error" : undefined}
            className={fieldClass(Boolean(errors.topic))}
          >
            <option value="">Choose one</option>
            {TOPICS.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
          {errors.topic && (
            <p id="ic-topic-error" className="mt-1.5 text-xs text-[#DC2626]">{errors.topic}</p>
          )}

          <label htmlFor="ic-service" className="mt-5 block text-sm font-bold text-[#11183C]">
            Service <span className="text-xs font-normal text-[#4B5375]">(optional)</span>
          </label>
          <select id="ic-service" value={service} onChange={(e) => setService(e.target.value)} className={fieldClass(false)}>
            {SERVICES.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>

          <label htmlFor="ic-email" className="mt-5 block text-sm font-bold text-[#11183C]">
            Email <span className="text-[#E11D74]">*</span>
          </label>
          <input
            id="ic-email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "ic-email-error" : undefined}
            className={fieldClass(Boolean(errors.email))}
          />
          {errors.email && (
            <p id="ic-email-error" className="mt-1.5 text-xs text-[#DC2626]">{errors.email}</p>
          )}

          <label htmlFor="ic-reply" className="mt-5 block text-sm font-bold text-[#11183C]">
            Preferred reply <span className="text-xs font-normal text-[#4B5375]">(optional)</span>
          </label>
          <select id="ic-reply" value={reply} onChange={(e) => setReply(e.target.value)} className={fieldClass(false)}>
            {REPLY_METHODS.map((r) => (
              <option key={r}>{r}</option>
            ))}
          </select>

          <label className="mt-5 flex cursor-pointer items-start gap-3 text-sm text-[#4B5375]">
            <input
              type="checkbox"
              checked={marketing}
              onChange={(e) => setMarketing(e.target.checked)}
              className="mt-0.5 h-4 w-4 shrink-0 accent-[#E11D74]"
            />
            I’d like to hear about Zoiko Telecom products and offers (optional).
          </label>

          <p className="mt-4 text-xs text-[#4B5375]">
            We use your details only to answer your enquiry. See our{" "}
            <Link href="/privacy-policy" className="font-bold text-[#E11D74] underline underline-offset-2">
              Privacy Notice
            </Link>
            .
          </p>

          <button
            type="submit"
            className="mt-5 inline-flex w-full items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-[#E11D74] to-[#C2185B] px-6 py-4 text-sm font-bold text-white shadow-[0_10px_24px_rgba(225,29,116,0.3)]"
          >
            Send enquiry
            <ChevronRight className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
          </button>
        </form>
      </div>
    </section>
  );
}
