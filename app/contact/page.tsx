"use client";

import { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaClock, FaArrowRight, FaCheckCircle, FaSpinner, FaMapMarkerAlt } from "react-icons/fa";

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

const offices = [
  {
    name: "London",
    isHeadOffice: true,
    image: "/Images/Contact/london-office.png",
    address: "35 Berkeley Square, Mayfair, London W1J 5BF",
    phone: "+44 (0) 207 164 6399",
    email: "info@zoikotelecom.com",
    mapLink: "https://www.google.com/maps/search/?api=1&query=35+Berkeley+Square+Mayfair+London+W1J+5BF",
  },
  {
    name: "Glasgow",
    isHeadOffice: false,
    image: "/Images/Contact/glasgow.png",
    address: "2nd Floor, 48 West George Street, Glasgow G2 1BP",
    phone: "+44 141 530 1560",
    email: "glasgow@zoikotelecom.com",
    mapLink: "https://www.google.com/maps/search/?api=1&query=48+West+George+Street+Glasgow+G2+1BP",
  },
  {
    name: "Cardiff",
    isHeadOffice: false,
    image: "/Images/Contact/cardiff.png",
    address: "113-116 Blue Street, Cardiff CF10 5EQ",
    phone: "+44 292 000 1374",
    email: "cardiff@zoikotelecom.com",
    mapLink: "https://www.google.com/maps/search/?api=1&query=113-116+Blue+Street+Cardiff+CF10+5EQ",
  },
];

const faqs = [
  {
    question: "What services do you offer?",
    answer: "We offer comprehensive telecom solutions including EE Mobile plans, BT Broadband, IoT connectivity, VoIP services and enterprise business solutions.",
  },
  {
    question: "How quickly can you set up service?",
    answer: "Most services can be activated within 24-48 hours. Complex enterprise solutions may take 3-5 business days depending on requirements.",
  },
  {
    question: "Do you offer 24/7 support?",
    answer: "Yes! Our customer support team is available 24/7 via phone, email and live chat to assist with any issues or questions.",
  },
  {
    question: "What are your payment terms?",
    answer: "We offer flexible payment options including monthly billing, annual contracts, and custom payment plans for enterprise customers.",
  },
];

export default function ContactPage() {
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
    <div className="w-full bg-white dark:bg-neutral-950 font-sans">
      
      <section className="relative min-h-[calc(100vh-95px)] w-full flex items-center justify-center py-12 sm:py-16 md:py-24 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/Images/Contact/hero-contact.png')",
          }}
        />
        
        <div className="absolute top-1/4 left-1/4 h-72 w-72 rounded-full bg-[#C12172]/15 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-[#7B2983]/15 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-[1320px] w-full px-5 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-6 text-white space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
                Get in Touch
              </h1>
              <p className="text-base sm:text-lg leading-relaxed text-white/80 max-w-xl">
                We're here to help with any questions about our telecom solutions. Reach out to our team and we'll respond within 24 hours.
              </p>
            </div>

            <div className="space-y-5">
              <div className="flex items-center gap-5 bg-white p-5 rounded-2xl border border-[#C12172]/20 shadow-lg hover:shadow-xl hover:scale-[1.01] transition-all duration-300 group">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#931e70] text-white shadow-md group-hover:scale-105 transition-transform">
                  <FaPhoneAlt className="text-xl" />
                </div>
                <div>
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-[#931e70]">
                    CALL US
                  </span>
                  <a 
                    href="tel:+442071646399" 
                    className="block text-base sm:text-lg font-bold text-neutral-800 hover:text-[#931e70] transition-colors"
                  >
                    +44 207 164 6399
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-5 bg-white p-5 rounded-2xl border border-[#C12172]/20 shadow-lg hover:shadow-xl hover:scale-[1.01] transition-all duration-300 group">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#931e70] text-white shadow-md group-hover:scale-105 transition-transform">
                  <FaEnvelope className="text-xl" />
                </div>
                <div>
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-[#931e70]">
                    EMAIL US
                  </span>
                  <a 
                    href="mailto:info@zoikotelecom.com" 
                    className="block text-base sm:text-lg font-bold text-neutral-800 hover:text-[#931e70] transition-colors break-all"
                  >
                    info@zoikotelecom.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-5 bg-white p-5 rounded-2xl border border-[#C12172]/20 shadow-lg hover:shadow-xl hover:scale-[1.01] transition-all duration-300 group">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#931e70] text-white shadow-md group-hover:scale-105 transition-transform">
                  <FaClock className="text-xl" />
                </div>
                <div>
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-[#931e70]">
                    WORKING HOURS
                  </span>
                  <span className="block text-base sm:text-lg font-bold text-neutral-800">
                    Mon - Fri, 9:00 - 18:00
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 flex justify-center lg:justify-end w-full">
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
          </div>

        </div>
      </section>

      <section className="py-20 bg-neutral-50 dark:bg-neutral-900 border-t border-neutral-100 dark:border-neutral-800">
        <div className="mx-auto max-w-[1320px] px-5">
          
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="inline-block bg-[#C12172]/10 dark:bg-[#C12172]/20 text-[#C12172] dark:text-pink-400 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
              Our Offices
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white mt-3">
              Visit Us
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 text-base mt-2">
              Find our offices across the UK
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offices.map((office) => (
              <div 
                key={office.name} 
                className="relative bg-white dark:bg-neutral-800 border border-neutral-200/80 dark:border-neutral-700/80 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col group"
              >
                <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-700 overflow-hidden flex items-center justify-center">
                  <img
                    src={office.image}
                    alt={`${office.name} Office`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  
                  {office.isHeadOffice && (
                    <div className="absolute left-1/2 -translate-x-1/2 -bottom-3.5 z-10">
                      <span className="bg-white dark:bg-neutral-900 text-[#C12172] dark:text-pink-400 border border-[#C12172]/20 dark:border-pink-500/30 text-[10px] font-extrabold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-md">
                        Head Office
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-6 sm:p-8 pt-8 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white">
                      {office.name}
                    </h3>
                    
                    <ul className="space-y-3.5 text-sm sm:text-[15px] text-neutral-600 dark:text-neutral-300">
                      <li className="flex items-start gap-3">
                        <FaMapMarkerAlt className="text-neutral-400 dark:text-neutral-500 shrink-0 mt-1" />
                        <span className="leading-snug">{office.address}</span>
                      </li>
                      
                      <li className="flex items-start gap-3">
                        <FaPhoneAlt className="text-neutral-400 dark:text-neutral-500 shrink-0 mt-1" />
                        <a href={`tel:${office.phone.replace(/[\s()]/g, "")}`} className="hover:text-[#C12172] transition-colors leading-snug">
                          {office.phone}
                        </a>
                      </li>
                      
                      <li className="flex items-start gap-3">
                        <FaEnvelope className="text-neutral-400 dark:text-neutral-500 shrink-0 mt-1" />
                        <a href={`mailto:${office.email}`} className="hover:text-[#C12172] transition-colors leading-snug break-all">
                          {office.email}
                        </a>
                      </li>
                    </ul>
                  </div>

                  <a
                    href={office.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#C12172] dark:text-pink-400 hover:text-[#931e70] dark:hover:text-pink-300 transition-colors group/link cursor-pointer"
                  >
                    Get Directions
                    <FaArrowRight className="text-xs transition-transform duration-300 group-hover/link:translate-x-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <section className="py-20 bg-white dark:bg-neutral-950 border-t border-neutral-100 dark:border-neutral-800">
        <div className="mx-auto max-w-[1320px] px-5">
          
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="inline-block bg-[#C12172]/10 dark:bg-[#C12172]/20 text-[#C12172] dark:text-pink-400 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
              FAQs
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white mt-3">
              Common Questions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200/60 dark:border-neutral-800/80 rounded-3xl p-6 sm:p-8 space-y-3.5 hover:shadow-md transition-shadow duration-300"
              >
                <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white leading-snug">
                  {faq.question}
                </h3>
                <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
