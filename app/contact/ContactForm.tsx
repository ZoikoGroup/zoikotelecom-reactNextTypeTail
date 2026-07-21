"use client";
import { useState } from "react";

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
  email?: string;
  phone?: string;
  message?: string;
}

type TouchedFields = Partial<Record<keyof FormErrors, boolean>>;

// Proper structure: local@domain.tld — rejects bare words / no-TLD strings.
const EMAIL_RE = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const EMAIL_MAX = 254;
const PHONE_MIN_DIGITS = 10;
const PHONE_MAX_DIGITS = 15;

function validateField(name: keyof FormErrors, value: string): string {
  const v = value.trim();

  switch (name) {
    case "first_name":
      if (!v) return "First name is required.";
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

    case "message":
      if (!v) return "Message is required.";
      return "";

    default:
      return "";
  }
}

const REQUIRED_FIELDS: (keyof FormErrors)[] = ["first_name", "email", "phone", "message"];

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<TouchedFields>({});
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name } = e.target;
    let { value } = e.target;

    // Hard-cap phone at PHONE_MAX_DIGITS digits (separators don't count).
    // if (name === "phone") {
    //   const digits = value.replace(/[^\d]/g, "");
    //   if (digits.length > PHONE_MAX_DIGITS) return;
    // }
    // Phone: strip letters/invalid symbols instantly, keep + - ( ) spaces,
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

    // setFormData((prev) => ({ ...prev, [name]: value }));

    if (REQUIRED_FIELDS.includes(name as keyof FormErrors) && touched[name as keyof FormErrors]) {
      const msg = validateField(name as keyof FormErrors, value);
      setErrors((prev) => ({ ...prev, [name]: msg || undefined }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    if (!REQUIRED_FIELDS.includes(name as keyof FormErrors)) return;

    setTouched((prev) => ({ ...prev, [name]: true }));
    const msg = validateField(name as keyof FormErrors, value);
    setErrors((prev) => ({ ...prev, [name]: msg || undefined }));
  };

  const validateAll = (): boolean => {
    const nextErrors: FormErrors = {};
    for (const field of REQUIRED_FIELDS) {
      const msg = validateField(field, formData[field]);
      if (msg) nextErrors[field] = msg;
    }
    setErrors(nextErrors);
    setTouched({ first_name: true, email: true, phone: true, message: true });
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
        alert("Thank you for contacting Zoiko Telecom. We will reach out soon.");

        setFormData({
          first_name: "",
          last_name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        setErrors({});
        setTouched({});
      } else {
        alert("Something went wrong");
        console.log(data);
      }
    } catch (error) {
      console.error(error);
      alert("Failed to submit form");
    } finally {
      setLoading(false);
    }
  };

  const inputBase =
    "w-full h-[51px] bg-white dark:bg-gray-900 text-[#2D3748] dark:text-white rounded-xl px-4 text-[14px] outline-none border-2 transition-colors";
  const borderNormal = "border-[#CBD5E0] dark:border-gray-700 focus:border-[#C12172]";
  const borderError = "border-red-500 focus:border-red-500";

  const fieldBorder = (field: keyof FormErrors) => (errors[field] ? borderError : borderNormal);

  return (
    <div className="w-full max-w-[520px] bg-white dark:bg-gray-900 border border-[#C12172] rounded-[24px] p-6 md:p-10 shadow-xl">

      {/* FORM TITLE */}
      <h2 className="text-[#2D3748] dark:text-white text-[24px] font-bold leading-[40px] mb-8">
        Send Us a Message
      </h2>

      {/* FORM */}
      <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">

        {/* FIRST NAME */}
        <div>
          <label className="text-[#2D3748] dark:text-white text-[14px] font-semibold leading-[24px] mb-2 block">
            First Name
          </label>

          <input
            type="text"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={!!errors.first_name}
            placeholder="John"
            className={`${inputBase} ${fieldBorder("first_name")}`}
          />
          {errors.first_name && (
            <p className="mt-1 text-[13px] text-red-500">{errors.first_name}</p>
          )}
        </div>

        {/* LAST NAME */}
        <div>
          <label className="text-[#2D3748] dark:text-white text-[14px] font-semibold leading-[24px] mb-2 block">
            Last Name
          </label>

          <input
            type="text"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            placeholder="Doe"
            className={`${inputBase} ${borderNormal}`}
          />
        </div>

        {/* EMAIL */}
        <div>
          <label className="text-[#2D3748] dark:text-white text-[14px] font-semibold leading-[24px] mb-2 block">
            Your Email
          </label>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={!!errors.email}
            placeholder="john@example.com"
            maxLength={EMAIL_MAX}
            className={`${inputBase} ${fieldBorder("email")}`}
          />
          {errors.email && (
            <p className="mt-1 text-[13px] text-red-500">{errors.email}</p>
          )}
        </div>

        {/* PHONE */}
        <div>
          <label className="text-[#2D3748] dark:text-white text-[14px] font-semibold leading-[24px] mb-2 block">
            Phone Number
          </label>

          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={!!errors.phone}
            placeholder="+44 123 456 7890"
            className={`${inputBase} ${fieldBorder("phone")}`}
          />
          {errors.phone && (
            <p className="mt-1 text-[13px] text-red-500">{errors.phone}</p>
          )}
        </div>

        {/* SUBJECT */}
        <div>
          <label className="text-[#2D3748] dark:text-white text-[14px] font-semibold leading-[24px] mb-2 block">
            Subject
          </label>

          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Enter subject"
            className={`${inputBase} ${borderNormal}`}
          />
        </div>

        {/* MESSAGE */}
        <div>
          <label className="text-[#2D3748] dark:text-white text-[14px] font-semibold leading-[24px] mb-2 block">
            Your Message
          </label>

          <textarea
            rows={2}
            name="message"
            placeholder="How can we help you?"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={!!errors.message}
            className={`w-full bg-white dark:bg-gray-900 text-[#2D3748] dark:text-white rounded-xl p-4 text-[14px] outline-none resize-none border-2 transition-colors ${fieldBorder(
              "message"
            )}`}
          ></textarea>
          {errors.message && (
            <p className="mt-1 text-[13px] text-red-500">{errors.message}</p>
          )}
        </div>

        {/* BUTTON */}
        <button
          type="submit"
          disabled={loading}
          className="w-full h-[56px] rounded-full bg-gradient-to-r from-[#C12172] to-[#782984] text-white text-[16px] font-semibold mt-2 hover:scale-[1.01] transition-all duration-300 disabled:opacity-50"
        >
          {loading ? "Sending..." : "Send Message →"}
        </button>

      </form>
    </div>
  );
}

export default ContactForm;