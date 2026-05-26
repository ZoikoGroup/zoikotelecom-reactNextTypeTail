"use client";

import { useState } from "react";
import { Calendar, Loader2 } from "lucide-react";

const services = [
  "EE Mobile - SIM Plans",
  "BT Broadband",
  "IoT Services & M2M SIMs",
  "VoIP Solutions",
  "Business Solutions",
  "Cloud & Hosting Services",
];

const countries = [
  "United Kingdom",
  "India",
  "United States",
  "Canada",
  "Australia",
  "Germany",
  "France",
  "Singapore",
  "UAE",
];

type FormState = {
  companyName: string;
  contactName: string;
  position: string;
  email: string;
  phone: string;
  website: string;
  address: string;
  city: string;
  postCode: string;
  country: string;
  selectedServices: string[];
  declaration1: boolean;
  declaration2: boolean;
  fullName: string;
  digitalSignature: string;
  signatureDate: string;
};

type FormErrors = Partial<Record<keyof FormState | "general" | "services" | "declarations", string>>;

export default function ResellerApplicationForm() {
  const [formData, setFormData] = useState<FormState>({
    companyName: "",
    contactName: "",
    position: "",
    email: "",
    phone: "",
    website: "",
    address: "",
    city: "",
    postCode: "",
    country: "Select Country",
    selectedServices: [],
    declaration1: false,
    declaration2: false,
    fullName: "",
    digitalSignature: "",
    signatureDate: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.companyName.trim()) newErrors.companyName = "Company Name is required";
    if (!formData.contactName.trim()) newErrors.contactName = "Contact Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email Address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone Number is required";
    } else if (!/^\+?[\d\s-]{7,15}$/.test(formData.phone.trim())) {
      newErrors.phone = "Please enter a valid phone number";
    }
    if (!formData.address.trim()) newErrors.address = "Company Address is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.postCode.trim()) newErrors.postCode = "Post Code is required";
    if (formData.country === "Select Country" || !formData.country) newErrors.country = "Please select a country";
    
    if (formData.selectedServices.length === 0) {
      newErrors.services = "Please select at least one service of interest";
    }

    if (!formData.declaration1 || !formData.declaration2) {
      newErrors.declarations = "You must agree to both declarations to apply";
    }

    if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required";
    if (!formData.digitalSignature.trim()) newErrors.digitalSignature = "Digital Signature is required";
    if (!formData.signatureDate) newErrors.signatureDate = "Signature Date is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      if (name.startsWith("dec")) {
        setFormData((prev) => ({ ...prev, [name]: checked }));
        setErrors((prev) => ({ ...prev, declarations: undefined }));
      } else {
        // Services checkboxes
        const service = value;
        setFormData((prev) => {
          const updatedServices = checked 
            ? [...prev.selectedServices, service]
            : prev.selectedServices.filter((s) => s !== service);
          return { ...prev, selectedServices: updatedServices };
        });
        setErrors((prev) => ({ ...prev, services: undefined }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
      if (errors[name as keyof FormErrors]) {
        setErrors((prev) => ({ ...prev, [name]: undefined }));
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const baseUrl = (process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000").replace(/\/$/, "");
      const response = await fetch(`${baseUrl}/api/reseller/apply/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          company_name: formData.companyName,
          contact_name: formData.contactName,
          position: formData.position,
          email: formData.email,
          phone: formData.phone.trim(),
          website: formData.website,
          address: formData.address,
          city: formData.city,
          post_code: formData.postCode,
          country: formData.country,
          services_of_interest: formData.selectedServices,
          full_name: formData.fullName,
          digital_signature: formData.digitalSignature,
          signature_date: formData.signatureDate,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setIsSubmitted(true);
      } else {
        const serverErrors: FormErrors = {};
        if (data.errors) {
          // Map snake_case backend keys back to camelCase frontend state fields
          if (data.errors.company_name) serverErrors.companyName = data.errors.company_name.join(" ");
          if (data.errors.contact_name) serverErrors.contactName = data.errors.contact_name.join(" ");
          if (data.errors.position) serverErrors.position = data.errors.position.join(" ");
          if (data.errors.email) serverErrors.email = data.errors.email.join(" ");
          if (data.errors.phone) serverErrors.phone = data.errors.phone.join(" ");
          if (data.errors.website) serverErrors.website = data.errors.website.join(" ");
          if (data.errors.address) serverErrors.address = data.errors.address.join(" ");
          if (data.errors.city) serverErrors.city = data.errors.city.join(" ");
          if (data.errors.post_code) serverErrors.postCode = data.errors.post_code.join(" ");
          if (data.errors.country) serverErrors.country = data.errors.country.join(" ");
          if (data.errors.services_of_interest) serverErrors.services = data.errors.services_of_interest.join(" ");
          if (data.errors.full_name) serverErrors.fullName = data.errors.full_name.join(" ");
          if (data.errors.digital_signature) serverErrors.digitalSignature = data.errors.digital_signature.join(" ");
          if (data.errors.signature_date) serverErrors.signatureDate = data.errors.signature_date.join(" ");
        } else {
          serverErrors.general = data.message || "Something went wrong. Please try again later.";
        }
        setErrors(serverErrors);
      }
    } catch (err) {
      console.error("Reseller submit error:", err);
      setErrors({
        general: "Failed to connect to the server. Please check your internet connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full flex justify-center px-4 py-8 bg-[#F8F8FB] dark:bg-gray-900 font-sans">
      <div className="w-full max-w-[800px] bg-white dark:bg-gray-900 border border-[#E2E8F0] dark:border-gray-700 rounded-[24px] p-6 md:p-10 shadow-sm">
        
        {isSubmitted ? (
          <div className="py-16 text-center space-y-6 flex flex-col items-center justify-center animate-fadeIn">
            <div className="h-24 w-24 rounded-full bg-green-50 text-green-500 flex items-center justify-center shadow-inner">
              <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="space-y-3">
              <h2 className="text-3xl font-extrabold text-neutral-800 dark:text-white">
                Application Received!
              </h2>
              <p className="text-neutral-500 dark:text-neutral-300 text-lg max-w-lg leading-relaxed">
                Thank you for applying to the Zoiko Reseller Programme. Our partnership onboarding team will review your application details and reach out within 24 to 48 hours.
              </p>
            </div>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  companyName: "",
                  contactName: "",
                  position: "",
                  email: "",
                  phone: "",
                  website: "",
                  address: "",
                  city: "",
                  postCode: "",
                  country: "Select Country",
                  selectedServices: [],
                  declaration1: false,
                  declaration2: false,
                  fullName: "",
                  digitalSignature: "",
                  signatureDate: "",
                });
              }}
              className="mt-4 rounded-full border-2 border-[#C12172] text-[#C12172] hover:bg-[#C12172] hover:text-white font-bold text-[15px] px-8 py-3 transition-all duration-300 shadow-md cursor-pointer"
            >
              Submit Another Application
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-10">
            {errors.general && (
              <div className="p-4 bg-red-50 text-red-600 rounded-xl text-sm font-semibold border border-red-200">
                {errors.general}
              </div>
            )}

            {/* Company Information */}
            <div>
              <div className="border-b-2 border-[#E2E8F0] pb-3 mb-6">
                <h2 className="text-[22px] font-bold text-[#2D3748] dark:text-white">
                  Company Information
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField
                  label="Company Name"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="Enter your registered company name"
                  required
                  error={errors.companyName}
                />
                <InputField
                  label="Contact Name"
                  name="contactName"
                  value={formData.contactName}
                  onChange={handleChange}
                  placeholder="Full name of contact person"
                  required
                  error={errors.contactName}
                />
                <InputField
                  label="Position"
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  placeholder="Your position inside company"
                  error={errors.position}
                />
                <InputField
                  label="Email Address"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@company.com"
                  required
                  error={errors.email}
                />
                <InputField
                  label="Phone Number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+44 123 456 7890"
                  required
                  error={errors.phone}
                />
                <InputField
                  label="Company Website"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  placeholder="https://example.com"
                  error={errors.website}
                />
              </div>
            </div>

            {/* Business Address */}
            <div>
              <div className="border-b-2 border-[#E2E8F0] pb-3 mb-6">
                <h2 className="text-[22px] font-bold text-[#2D3748] dark:text-white">
                  Business Address
                </h2>
              </div>

              <div className="space-y-6">
                <div>
                  <label htmlFor="address" className="block text-[14px] font-semibold text-[#2D3748] dark:text-white mb-2">
                    Company Address <span className="text-[#E53E3E]">*</span>
                  </label>
                  <textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    rows={2}
                    placeholder="Street, suite, building..."
                    className={`w-full rounded-[12px] border-2 px-4 py-3 outline-none transition-all focus:ring-1 resize-none bg-white dark:bg-gray-800 text-[#4A5568] dark:text-white
                      ${errors.address
                        ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                        : "border-[#CBD5E0] dark:border-gray-600 focus:border-[#C12172] focus:ring-[#C12172]"
                      }`}
                  />
                  {errors.address && (
                    <span className="block text-xs font-semibold text-red-500 mt-1">{errors.address}</span>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <InputField
                    label="City"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Enter city"
                    required
                    error={errors.city}
                  />
                  <InputField
                    label="Post Code"
                    name="postCode"
                    value={formData.postCode}
                    onChange={handleChange}
                    placeholder="e.g. EC1A 1BB"
                    required
                    error={errors.postCode}
                  />
                </div>

                <div>
                  <label htmlFor="country" className="block text-[14px] font-semibold text-[#2D3748] dark:text-white mb-2">
                    Country <span className="text-[#E53E3E]">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className={`w-full h-[51px] rounded-[12px] border-2 px-4 outline-none appearance-none transition-all focus:ring-1 bg-white dark:bg-gray-800 text-[#2D3748] dark:text-white
                        ${formData.country === "Select Country" ? "text-gray-400" : "text-[#2D3748] dark:text-white"}
                        ${errors.country 
                          ? "border-red-500 focus:border-red-500 focus:ring-red-500" 
                          : "border-[#CBD5E0] dark:border-gray-600 focus:border-[#C12172] focus:ring-[#C12172]"
                        }`}
                    >
                      <option disabled>Select Country</option>
                      {countries.map((country) => (
                        <option key={country} value={country}>
                          {country}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#2D3748] dark:text-gray-400">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                  {errors.country && (
                    <span className="block text-xs font-semibold text-red-500 mt-1.5">{errors.country}</span>
                  )}
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <div className="border-b-2 border-[#E2E8F0] pb-3 mb-6">
                <h2 className="text-[22px] font-bold text-[#2D3748] dark:text-white">
                  Services of Interest
                </h2>
              </div>

              <div>
                <p className="text-[14px] font-semibold text-[#2D3748] dark:text-white mb-6">
                  Select services you're interested in reselling <span className="text-[#E53E3E]">*</span>
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12">
                  {services.map((service, index) => (
                    <label
                      key={index}
                      className="flex items-center gap-3 cursor-pointer group"
                    >
                      <input
                        type="checkbox"
                        value={service}
                        checked={formData.selectedServices.includes(service)}
                        onChange={handleChange}
                        className="w-[20px] h-[20px] rounded-[6px] border-2 border-[#CBD5E0] dark:border-gray-500 text-[#C12172] focus:ring-[#C12172] cursor-pointer"
                      />
                      <span className="text-[15px] font-semibold text-[#2D3748] dark:text-white group-hover:text-[#C12172] transition-colors">
                        {service}
                      </span>
                    </label>
                  ))}
                </div>
                {errors.services && (
                  <span className="block text-xs font-semibold text-red-500 mt-4">{errors.services}</span>
                )}
              </div>
            </div>

            {/* Declaration */}
            <div className="bg-[#F7F7FA] dark:bg-gray-800 rounded-[16px] p-6 space-y-5 border border-neutral-100 dark:border-neutral-700">
              <label className="flex items-start gap-4 cursor-pointer group">
                <input
                  type="checkbox"
                  name="declaration1"
                  checked={formData.declaration1}
                  onChange={handleChange}
                  className="mt-1 w-[20px] h-[20px] rounded-[6px] border-2 border-[#CBD5E0] dark:border-gray-500 text-[#C12172] focus:ring-[#C12172] cursor-pointer"
                />
                <span className="text-[15px] text-[#4A5568] dark:text-gray-300 leading-relaxed font-medium">
                  I hereby declare that the information provided is true and accurate to the best of my knowledge.
                </span>
              </label>

              <label className="flex items-start gap-4 cursor-pointer group">
                <input
                  type="checkbox"
                  name="declaration2"
                  checked={formData.declaration2}
                  onChange={handleChange}
                  className="mt-1 w-[20px] h-[20px] rounded-[6px] border-2 border-[#CBD5E0] dark:border-gray-500 text-[#C12172] focus:ring-[#C12172] cursor-pointer"
                />
                <span className="text-[15px] text-[#4A5568] dark:text-gray-300 leading-relaxed font-medium">
                  I understand that providing false information may result in the rejection of this application or termination of the reseller agreement.
                </span>
              </label>
              
              {errors.declarations && (
                <span className="block text-xs font-semibold text-red-500 pt-1">{errors.declarations}</span>
              )}
            </div>

            {/* Signature */}
            <div>
              <div className="border-b-2 border-[#E2E8F0] pb-3 mb-6">
                <h2 className="text-[22px] font-bold text-[#2D3748] dark:text-white">
                  Signature & Submission
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <InputField
                  label="Full Name"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your legal full name"
                  required
                  error={errors.fullName}
                />

                <InputField
                  label="Digital Signature"
                  name="digitalSignature"
                  value={formData.digitalSignature}
                  onChange={handleChange}
                  placeholder="Type your full name as signature"
                  required
                  error={errors.digitalSignature}
                />

                <div>
                  <label htmlFor="signatureDate" className="block text-[14px] font-semibold text-[#2D3748] dark:text-white mb-2">
                    Signature Date <span className="text-[#E53E3E]">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      id="signatureDate"
                      name="signatureDate"
                      value={formData.signatureDate}
                      onChange={handleChange}
                      className={`w-full h-[51px] rounded-[12px] border-2 px-4 outline-none transition-all focus:ring-1 bg-white dark:bg-gray-800 text-[#4A5568] dark:text-white
                        ${errors.signatureDate
                          ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                          : "border-[#CBD5E0] dark:border-gray-600 focus:border-[#C12172] focus:ring-[#C12172]"
                        }`}
                    />
                    <Calendar
                      size={18}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-[#2D3748] dark:text-gray-400 pointer-events-none"
                    />
                  </div>
                  {errors.signatureDate && (
                    <span className="block text-xs font-semibold text-red-500 mt-1.5">{errors.signatureDate}</span>
                  )}
                </div>
              </div>
            </div>

            <div className="border-t border-[#E2E8F0] dark:border-gray-700 pt-10 text-center space-y-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#C12172] to-[#7B2CBF] hover:from-[#d5247c] hover:to-[#8c3ad4] active:scale-[0.98] transition-all duration-300 text-white font-bold text-[18px] px-16 py-4.5 rounded-full shadow-lg shadow-pink-500/25 hover:shadow-xl cursor-pointer disabled:opacity-80 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Submitting Application...
                  </>
                ) : (
                  <>Submit Application →</>
                )}
              </button>

              <p className="text-center text-[14px] text-[#718096] dark:text-gray-400">
                By submitting, you agree to our{" "}
                <a href="/terms-and-conditions" className="text-[#C12172] hover:text-[#7B2CBF] underline cursor-pointer transition-colors">
                  Terms & Conditions
                </a>{" "}
                and{" "}
                <a href="/privacy-policy" className="text-[#C12172] hover:text-[#7B2CBF] underline cursor-pointer transition-colors">
                  Privacy Policy
                </a>
              </p>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}

type InputFieldProps = {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  error?: string;
  type?: string;
};

function InputField({
  label,
  name,
  value,
  onChange,
  placeholder,
  required = false,
  error,
  type = "text",
}: InputFieldProps) {
  return (
    <div className="space-y-2 w-full">
      <label htmlFor={name} className="block text-[14px] font-semibold text-[#2D3748] dark:text-white">
        {label} {required && <span className="text-[#E53E3E]">*</span>}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full h-[51px] rounded-[12px] border-2 px-4 outline-none transition-all focus:ring-1 bg-white dark:bg-gray-800 text-[#4A5568] dark:text-white
          ${error 
            ? "border-red-500 focus:border-red-500 focus:ring-red-500" 
            : "border-[#CBD5E0] dark:border-gray-600 focus:border-[#C12172] focus:ring-[#C12172]"
          }`}
      />
      {error && (
        <span className="block text-xs font-semibold text-red-500 mt-1">{error}</span>
      )}
    </div>
  );
}