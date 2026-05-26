"use client";

import { useState } from "react";
import { FaArrowRight, FaCheckCircle, FaSpinner } from "react-icons/fa";

type FormState = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

type FormErrors = {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Your Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    } else if (formData.name.trim().length > 150) {
      newErrors.name = "Name must be under 150 characters";
    } else {
      const nameParts = formData.name.trim().split(/\s+/);
      const first_name = nameParts[0] || "";
      const last_name = nameParts.slice(1).join(" ") || "";
      if (first_name.length > 100) {
        newErrors.name = "First name part must be under 100 characters";
      } else if (last_name.length > 100) {
        newErrors.name = "Last name part must be under 100 characters";
      }
    }

    if (!formData.email.trim()) {
      newErrors.email = "Your Email is required";
    } else if (formData.email.trim().length > 254) {
      newErrors.email = "Email must be under 254 characters";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone Number is required";
    } else if (formData.phone.trim().length > 20) {
      newErrors.phone = "Phone number must not exceed 20 characters";
    } else if (!/^\+?[\d\s-]{7,15}$/.test(formData.phone.trim())) {
      newErrors.phone = "Please enter a valid phone number (e.g. +44 123 456 7890)";
    }

    if (!formData.subject || formData.subject === "Select a subject") {
      newErrors.subject = "Please select a subject";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Your Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    } else if (formData.message.trim().length > 2000) {
      newErrors.message = "Message must not exceed 2000 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    const nameParts = formData.name.trim().split(/\s+/);
    const first_name = nameParts[0] || "";
    const last_name = nameParts.slice(1).join(" ") || ".";

    try {
      const baseUrl = (process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000").replace(/\/$/, "");
      const response = await fetch(`${baseUrl}/api/contact/contact-us/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          first_name,
          last_name,
          email: formData.email,
          phone: formData.phone.trim(),
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        const serverErrors: FormErrors = {};
        if (data.errors) {
          if (data.errors.first_name) {
            serverErrors.name = data.errors.first_name.join(" ");
          }
          if (data.errors.last_name) {
            serverErrors.name = (serverErrors.name ? serverErrors.name + " " : "") + data.errors.last_name.join(" ");
          }
          if (data.errors.email) {
            serverErrors.email = data.errors.email.join(" ");
          }
          if (data.errors.phone) {
            serverErrors.phone = data.errors.phone.join(" ");
          }
          if (data.errors.subject) {
            serverErrors.subject = data.errors.subject.join(" ");
          }
          if (data.errors.message) {
            serverErrors.message = data.errors.message.join(" ");
          }
        } else {
          serverErrors.message = data.message || "An unexpected error occurred. Please try again.";
        }
        setErrors(serverErrors);
      }
    } catch (err) {
      console.error("Contact form submission error:", err);
      setErrors({
        message: "Failed to connect to the server. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-[2.5rem] shadow-2xl p-8 sm:p-10 w-full max-w-xl relative overflow-hidden transition-all duration-500 border border-neutral-100">
      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className="space-y-5">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900">
            Send Us a Message
          </h2>
          
          <div className="space-y-1.5">
            <label htmlFor="name" className="block text-xs sm:text-sm font-bold text-neutral-700">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              maxLength={150}
              className={`w-full rounded-xl border px-4 py-3 text-base text-neutral-900 placeholder-neutral-400 outline-none transition-all focus:ring-1
                ${errors.name 
                  ? "border-red-500 focus:border-red-500 focus:ring-red-500" 
                  : "border-neutral-300 focus:border-[#C12172] focus:ring-[#C12172]"
                }`}
            />
            {errors.name && (
              <span className="block text-xs font-semibold text-red-500">{errors.name}</span>
            )}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="email" className="block text-xs sm:text-sm font-bold text-neutral-700">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              maxLength={254}
              className={`w-full rounded-xl border px-4 py-3 text-base text-neutral-900 placeholder-neutral-400 outline-none transition-all focus:ring-1
                ${errors.email 
                  ? "border-red-500 focus:border-red-500 focus:ring-red-500" 
                  : "border-neutral-300 focus:border-[#C12172] focus:ring-[#C12172]"
                }`}
            />
            {errors.email && (
              <span className="block text-xs font-semibold text-red-500">{errors.email}</span>
            )}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="phone" className="block text-xs sm:text-sm font-bold text-neutral-700">
              Phone Number
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+44 123 456 7890"
              maxLength={20}
              className={`w-full rounded-xl border px-4 py-3 text-base text-neutral-900 placeholder-neutral-400 outline-none transition-all focus:ring-1
                ${errors.phone 
                  ? "border-red-500 focus:border-red-500 focus:ring-red-500" 
                  : "border-neutral-300 focus:border-[#C12172] focus:ring-[#C12172]"
                }`}
            />
            {errors.phone && (
              <span className="block text-xs font-semibold text-red-500">{errors.phone}</span>
            )}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="subject" className="block text-xs sm:text-sm font-bold text-neutral-700">
              Subject
            </label>
            <div className="relative">
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={`w-full rounded-xl border px-4 py-3 text-base text-neutral-900 outline-none transition-all focus:ring-1 appearance-none bg-white
                  ${formData.subject === "" || formData.subject === "Select a subject" ? "text-neutral-400" : "text-neutral-900"}
                  ${errors.subject 
                    ? "border-red-500 focus:border-red-500 focus:ring-red-500" 
                    : "border-neutral-300 focus:border-[#C12172] focus:ring-[#C12172]"
                  }`}
              >
                <option value="" disabled hidden>Select a subject</option>
                <option value="Select a subject">Select a subject</option>
                <option value="EE Mobile Plans">EE Mobile Plans</option>
                <option value="BT Broadband">BT Broadband</option>
                <option value="VoIP & Landlines">VoIP &amp; Landlines</option>
                <option value="Business Solutions">Business Solutions</option>
                <option value="General Support">General Support</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-neutral-500">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
            {errors.subject && (
              <span className="block text-xs font-semibold text-red-500">{errors.subject}</span>
            )}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="message" className="block text-xs sm:text-sm font-bold text-neutral-700">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="How can we help you?"
              rows={4}
              maxLength={2000}
              className={`w-full rounded-xl border px-4 py-3 text-base text-neutral-900 placeholder-neutral-400 outline-none transition-all resize-none focus:ring-1
                ${errors.message 
                  ? "border-red-500 focus:border-red-500 focus:ring-red-500" 
                  : "border-neutral-300 focus:border-[#C12172] focus:ring-[#C12172]"
                }`}
            />
            {errors.message && (
              <span className="block text-xs font-semibold text-red-500">{errors.message}</span>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-full bg-gradient-to-r from-[#9D257A] to-[#7B2983] py-3.5 text-white font-semibold flex items-center justify-center gap-2 shadow-lg shadow-purple-500/20 hover:from-[#b21771] hover:to-[#931e70] hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 cursor-pointer disabled:opacity-85 disabled:cursor-not-allowed disabled:transform-none"
          >
            {isSubmitting ? (
              <>
                <FaSpinner className="animate-spin text-lg" />
                Sending...
              </>
            ) : (
              <>
                Send Message
                <FaArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
              </>
            )}
          </button>
        </form>
      ) : (
        <div className="py-12 text-center space-y-6 flex flex-col items-center justify-center animate-fadeIn">
          <div className="h-20 w-20 rounded-full bg-green-100 text-green-600 flex items-center justify-center shadow-inner">
            <FaCheckCircle className="text-5xl" />
          </div>
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-neutral-900">
              Message Sent!
            </h3>
            <p className="text-neutral-600 text-base max-w-md">
              Thank you for reaching out. A support representative will review your message and get back to you within 24 hours.
            </p>
          </div>
          <button
            onClick={() => setIsSubmitted(false)}
            className="rounded-full border-2 border-[#C12172] px-6 py-2.5 text-sm font-semibold text-[#C12172] hover:bg-[#C12172] hover:text-white transition-all duration-300 hover:shadow-md cursor-pointer"
          >
            Send Another Message
          </button>
        </div>
      )}
    </div>
  );
}
