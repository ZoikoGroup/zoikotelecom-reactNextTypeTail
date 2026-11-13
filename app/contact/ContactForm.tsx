"use client";
import { useState } from "react";
import Link from "next/link";
import toast from "react-hot-toast";
import { ArrowRight, BriefcaseBusiness, ChevronDown, Info, Loader2, User } from "lucide-react";

interface FormData {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormErrors {
  first_name?: string;
  last_name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
  privacy?: string;
}

type ValidatedField = Exclude<keyof FormErrors, "privacy">;
type TouchedFields = Partial<Record<ValidatedField, boolean>>;
type ContactType = "personal" | "business";

// Proper structure: local@domain.tld — rejects bare words / no-TLD strings.
const EMAIL_RE = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const EMAIL_MAX = 254;
const PHONE_MIN_DIGITS = 10;
const PHONE_MAX_DIGITS = 15;
const MESSAGE_MAX = 1500;

const HELP_TOPICS: Record<ContactType, string[]> = {
  personal: [
    "Mobile plans & SIMs",
    "Broadband",
    "Home phone & landline",
    "Billing & payments",
    "Technical support",
    "Moving home",
    "Something else",
  ],
  business: [
    "Business mobile",
    "Business broadband & fibre",
    "Business landlines & VoIP",
    "IoT & connectivity",
    "Becoming a reseller",
    "Billing & accounts",
    "Something else",
  ],
};

function validateField(name: ValidatedField, value: string): string {
  const v = value.trim();

  switch (name) {
    case "first_name":
      if (!v) return "First name is required.";
      return "";

    case "last_name":
      if (!v) return "Last name is required.";
      return "";

    case "email":
      if (!v) return "Email is required.";
      if (v.length > EMAIL_MAX) return `Email must be at most ${EMAIL_MAX} characters.`;
      if (/\.\./.test(v) || v.startsWith(".") || v.startsWith("@"))
        return "Enter a valid email address.";
      if (!EMAIL_RE.test(v)) return "Enter a valid email address.";
      return "";

    case "phone": {
      if (!v) return "Phone number is required.";
      const digits = v.replace(/\D/g, "");
      if (digits.length < PHONE_MIN_DIGITS)
        return `Phone number must be at least ${PHONE_MIN_DIGITS} digits.`;
      if (digits.length > PHONE_MAX_DIGITS)
        return `Phone number cannot exceed ${PHONE_MAX_DIGITS} digits.`;
      return "";
    }

    case "subject":
      if (!v) return "Please choose what you need help with.";
      return "";

    case "message":
      if (!v) return "Message is required.";
      return "";

    default:
      return "";
  }
}

const REQUIRED_FIELDS: ValidatedField[] = [
  "first_name",
  "last_name",
  "email",
  "phone",
  "subject",
  "message",
];

const EMPTY_FORM: FormData = {
  first_name: "",
  last_name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>(EMPTY_FORM);
  const [contactType, setContactType] = useState<ContactType>("personal");
  const [agreed, setAgreed] = useState(false);

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<TouchedFields>({});
  const [loading, setLoading] = useState(false);

  const isRequired = (name: string): name is ValidatedField =>
    REQUIRED_FIELDS.includes(name as ValidatedField);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    // Phone: strip letters/invalid symbols instantly, keep + - spaces,
    // cap at 15 digits, and show why input was blocked.
    if (name === "phone") {
      const cleaned = value.replace(/[^\d+\-\s]/g, "");
      const digits = cleaned.replace(/\D/g, "");
      if (digits.length > PHONE_MAX_DIGITS) {
        setErrors((prev) => ({
          ...prev,
          phone: `Phone number cannot exceed ${PHONE_MAX_DIGITS} digits.`,
        }));
        return;
      }

      if (cleaned !== value) {
        setErrors((prev) => ({
          ...prev,
          phone: "Phone can only contain numbers and + - spaces.",
        }));
      } else if (touched.phone) {
        setErrors((prev) => ({
          ...prev,
          phone: validateField("phone", cleaned) || undefined,
        }));
      }

      setFormData((prev) => ({ ...prev, phone: cleaned }));
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));

    if (isRequired(name) && (touched[name] || name === "subject")) {
      const msg = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: msg || undefined }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    if (!isRequired(name)) return;

    setTouched((prev) => ({ ...prev, [name]: true }));
    const msg = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: msg || undefined }));
  };

  const handleContactType = (type: ContactType) => {
    setContactType(type);
    // Clear the topic if it doesn't exist in the newly selected list.
    setFormData((prev) =>
      HELP_TOPICS[type].includes(prev.subject) ? prev : { ...prev, subject: "" }
    );
  };

  const validateAll = (): boolean => {
    const nextErrors: FormErrors = {};
    for (const field of REQUIRED_FIELDS) {
      const msg = validateField(field, formData[field]);
      if (msg) nextErrors[field] = msg;
    }
    if (!agreed) nextErrors.privacy = "Please confirm you've read the Privacy Notice.";

    setErrors(nextErrors);
    setTouched(Object.fromEntries(REQUIRED_FIELDS.map((f) => [f, true])) as TouchedFields);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateAll()) return;

    setLoading(true);

    try {
      const payload = {
        first_name: formData.first_name,
        last_name: formData.last_name,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
      };

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/contact/contact-us/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();

      if (response.ok) {
        toast.success("Thank you for contacting Zoiko Telecom. We will reach out soon.");

        setFormData(EMPTY_FORM);
        setAgreed(false);
        setErrors({});
        setTouched({});
      } else {
        toast.error("Something went wrong. Please try again.");
        console.log(data);
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to submit form. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // ─── Styles ────────────────────────────────────────────────────────────────
  const labelCls =
    "mb-2 block text-[14px] font-semibold text-[#1A1D3A] dark:text-white";
  const inputBase =
    "w-full h-[48px] rounded-xl border bg-white px-4 text-[15px] text-[#1A1D3A] placeholder:text-[#8A90A6] outline-none transition-[border-color,box-shadow] dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-400";
  const borderNormal =
    "border-[#D5D8E2] focus:border-[#D81B7E] focus:ring-4 focus:ring-[#D81B7E]/10 dark:border-gray-600";
  const borderError =
    "border-red-500 focus:border-red-500 focus:ring-4 focus:ring-red-500/10";

  const fieldBorder = (field: ValidatedField) => (errors[field] ? borderError : borderNormal);

  const requiredMark = (
    <span className="text-[#E3197F]" aria-hidden="true">
      *
    </span>
  );

  const fieldError = (field: keyof FormErrors) =>
    errors[field] ? (
      <p id={`${field}-error`} className="mt-1.5 text-[13px] text-red-600 dark:text-red-400">
        {errors[field]}
      </p>
    ) : null;

  const errProps = (field: ValidatedField) => ({
    "aria-invalid": !!errors[field],
    "aria-describedby": errors[field] ? `${field}-error` : undefined,
  });

  const typeOptions: { value: ContactType; label: string; Icon: typeof User }[] = [
    { value: "personal", label: "Personal", Icon: User },
    { value: "business", label: "Business", Icon: BriefcaseBusiness },
  ];

  return (
    <div className="@container flex h-full w-full flex-col rounded-[28px] bg-white p-6 shadow-[0_24px_60px_-20px_rgba(5,6,40,0.55)] sm:p-8 dark:bg-gray-900">
      {/* FORM TITLE */}
      <h2 className="text-[28px] font-extrabold leading-tight tracking-[-0.02em] text-[#141640] sm:text-[32px] dark:text-white">
        Send us an enquiry
      </h2>
      <p className="mt-1 text-[16px] text-[#4A5068] dark:text-gray-300">Tell us how we can help.</p>

      <form onSubmit={handleSubmit} noValidate className="mt-6 flex flex-1 flex-col gap-5">
        {/* CONTACT TYPE */}
        <fieldset>
          <legend className="mb-3 text-[15px] font-bold text-[#141640] dark:text-white">
            I&apos;m contacting as:
          </legend>
          <div role="radiogroup" aria-label="I'm contacting as" className="flex flex-wrap gap-3">
            {typeOptions.map(({ value, label, Icon }) => {
              const active = contactType === value;
              return (
                <button
                  key={value}
                  type="button"
                  role="radio"
                  aria-checked={active}
                  onClick={() => handleContactType(value)}
                  className={`inline-flex h-[40px] items-center gap-2 rounded-full px-4 text-[14px] font-semibold transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#D81B7E]/25 ${
                    active
                      ? "bg-gradient-to-r from-[#B3165F] to-[#E3197F] text-white shadow-md shadow-[#D81B7E]/25"
                      : "border border-[#D5D8E2] bg-white text-[#141640] hover:border-[#D81B7E] dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                  }`}
                >
                  <Icon className="h-4 w-4" strokeWidth={2.2} aria-hidden="true" />
                  {label}
                </button>
              );
            })}
          </div>
        </fieldset>

        {/* NAMES */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="first_name" className={labelCls}>
              First name {requiredMark}
            </label>
            <input
              id="first_name"
              type="text"
              name="first_name"
              autoComplete="given-name"
              value={formData.first_name}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter your first name"
              className={`${inputBase} ${fieldBorder("first_name")}`}
              {...errProps("first_name")}
            />
            {fieldError("first_name")}
          </div>

          <div>
            <label htmlFor="last_name" className={labelCls}>
              Last name {requiredMark}
            </label>
            <input
              id="last_name"
              type="text"
              name="last_name"
              autoComplete="family-name"
              value={formData.last_name}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter your last name"
              className={`${inputBase} ${fieldBorder("last_name")}`}
              {...errProps("last_name")}
            />
            {fieldError("last_name")}
          </div>
        </div>

        {/* EMAIL + PHONE */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="email" className={labelCls}>
              Email address {requiredMark}
            </label>
            <input
              id="email"
              type="email"
              name="email"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter your email address"
              maxLength={EMAIL_MAX}
              className={`${inputBase} ${fieldBorder("email")}`}
              {...errProps("email")}
            />
            {fieldError("email")}
          </div>

          <div>
            <label htmlFor="phone" className={labelCls}>
              Phone number {requiredMark}
            </label>
            <input
              id="phone"
              type="tel"
              name="phone"
              autoComplete="tel"
              value={formData.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter your phone number"
              className={`${inputBase} ${fieldBorder("phone")}`}
              {...errProps("phone")}
            />
            {fieldError("phone")}
          </div>
        </div>

        {/* HELP TOPIC (sent as `subject`) */}
        <div>
          <label htmlFor="subject" className={labelCls}>
            What do you need help with? {requiredMark}
          </label>
          <div className="relative">
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`${inputBase} ${fieldBorder("subject")} cursor-pointer appearance-none pr-11 ${
                formData.subject ? "" : "text-[#4A5068] dark:text-gray-400"
              }`}
              {...errProps("subject")}
            >
              <option value="" disabled>
                Please select an option
              </option>
              {HELP_TOPICS[contactType].map((topic) => (
                <option key={topic} value={topic}>
                  {topic}
                </option>
              ))}
            </select>
            <ChevronDown
              className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#141640] dark:text-white"
              aria-hidden="true"
            />
          </div>
          {fieldError("subject")}
        </div>

        {/* MESSAGE — grows to fill spare height so the card matches the left column */}
        <div className="flex flex-1 flex-col">
          <label htmlFor="message" className={labelCls}>
            Your message {requiredMark}
          </label>
          <textarea
            id="message"
            rows={4}
            name="message"
            placeholder="Tell us how we can help..."
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            maxLength={MESSAGE_MAX}
            className={`${inputBase} ${fieldBorder("message")} h-auto min-h-[104px] flex-1 resize-none py-3`}
            {...errProps("message")}
          />
          <div className="mt-1.5 flex items-start justify-between gap-3">
            {fieldError("message")}
            <span className="ml-auto shrink-0 text-[12px] text-[#6B7088] dark:text-gray-400" aria-live="polite">
              {formData.message.length} / {MESSAGE_MAX}
            </span>
          </div>
        </div>

        {/* PRIVACY */}
        <div>
          <label className="flex cursor-pointer items-center gap-3 text-[14px] text-[#2B2F4A] dark:text-gray-200">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => {
                setAgreed(e.target.checked);
                if (e.target.checked) setErrors((prev) => ({ ...prev, privacy: undefined }));
              }}
              aria-invalid={!!errors.privacy}
              aria-describedby={errors.privacy ? "privacy-error" : undefined}
              className="h-5 w-5 shrink-0 cursor-pointer rounded border-[#B9BDCB] accent-[#D81B7E]"
            />
            <span>
              I&apos;ve read the{" "}
              <Link
                href="/privacy-policy"
                target="_blank"
                className="font-semibold text-[#C2186F] underline underline-offset-2 hover:text-[#E3197F]"
              >
                Privacy Notice
              </Link>
              .
            </span>
          </label>
          {fieldError("privacy")}
        </div>

        {/* BUTTON */}
        <button
          type="submit"
          disabled={loading}
          className="group inline-flex h-[54px] w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#A8145A] via-[#C8186F] to-[#EC1C8C] text-[16px] font-bold text-white shadow-lg shadow-[#D81B7E]/30 transition-[transform,filter] duration-200 hover:brightness-110 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
              Sending...
            </>
          ) : (
            <>
              Send enquiry
              <ArrowRight
                className="h-5 w-5 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </>
          )}
        </button>

        {/* Figma size (14px) on one line when the card is full width; never shrinks below 13px.
            On narrower cards the phone number drops to a second line as a whole. */}
        <p className="-mx-2 flex items-center justify-center gap-2 text-center text-[13px] leading-snug text-[#4A5068] text-balance @[30rem]:text-[14px] dark:text-gray-300">
          <Info className="h-4 w-4 shrink-0" aria-hidden="true" />
          <span>
            For urgent service issues, please call our support team on{" "}
            <a href="tel:+442071646399" className="whitespace-nowrap font-bold text-[#141640] hover:underline dark:text-white">
              +44 207 164 6399
            </a>
          </span>
        </p>
      </form>
    </div>
  );
}

export default ContactForm;
