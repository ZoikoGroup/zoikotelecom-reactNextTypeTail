"use client";

import { Calendar } from "lucide-react";
import { useState } from "react";
const services = [
  "EE Mobile - SIM Plans",
  "BT Broadband",
  "IoT Services & M2M SIMs",
  "VoIP Solutions",
  "Business Solutions",
  "Cloud & Hosting Services",
];
const countries = [
  "India",
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "Germany",
  "France",
  "Singapore",
  "UAE",
];

export default function ResellerApplicationForm() {
  const [formData, setFormData] = useState({
  company_name: "",
  contact_name: "",
  position: "",
  email: "",
  phone_number: "",
  company_website: "",
  company_address: "",
  city: "",
  post_code: "",
  country: "",
  services: [] as string[],
  declaration_one: false,
  declaration_two: false,
  full_name: "",
  digital_signature: "",
  signed_date: "",
});
const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
) => {
  const { name, value, type } = e.target;

  setFormData((prev) => ({
    ...prev,
    [name]:
      type === "checkbox"
        ? (e.target as HTMLInputElement).checked
        : value,
  }));
};
const handleServiceChange = (service: string) => {
  setFormData((prev) => ({
    ...prev,
    services: prev.services.includes(service)
      ? prev.services.filter((s) => s !== service)
      : [...prev.services, service],
  }));
};
const handleSubmit = async () => {
  if (!formData.company_name) {
    alert("Please enter your Company Name.");
    return;
  }

  if (!formData.contact_name) {
    alert("Please enter the Contact Name.");
    return;
  }

  if (!formData.email) {
    alert("Please enter your Email Address.");
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    alert("Please enter a valid Email Address.");
    return;
  }

  if (!formData.phone_number) {
    alert("Please enter your Phone Number.");
    return;
  }

  const phone = formData.phone_number.replace(/\D/g, "");

  if (phone.length < 7 || phone.length > 15) {
    alert("Please enter a valid Phone Number.");
    return;
  }

  if (
    formData.company_website &&
    !/^https?:\/\/.+\..+/.test(formData.company_website)
  ) {
    alert(
      "Please enter a valid Company Website URL (e.g. https://example.com)."
    );
    return;
  }

  if (!formData.company_address) {
    alert("Please enter your Company Address.");
    return;
  }

  if (!formData.city) {
    alert("Please enter your City.");
    return;
  }

  if (!formData.post_code) {
    alert("Please enter your Post Code.");
    return;
  }

  if (!formData.country) {
    alert("Please select a Country.");
    return;
  }

  if (formData.services.length === 0) {
    alert("Please select at least one Service of Interest.");
    return;
  }

  if (!formData.declaration_one || !formData.declaration_two) {
    alert("Please accept both declarations.");
    return;
  }

  if (!formData.full_name) {
    alert("Please enter your Full Name.");
    return;
  }

  if (!/^[a-zA-Z\s]+$/.test(formData.full_name)) {
    alert("Full Name should contain only letters.");
    return;
  }

  if (!formData.digital_signature) {
    alert("Please enter your Digital Signature.");
    return;
  }

  if (!formData.signed_date) {
    alert("Please select a Date.");
    return;
  }


  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/reseller-form/submit/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    const data = await response.json();

    if (response.ok) {
      alert("Application submitted successfully!");

  setFormData({
    company_name: "",
    contact_name: "",
    position: "",
    email: "",
    phone_number: "",
    company_website: "",
    company_address: "",
    city: "",
    post_code: "",
    country: "",
    services: [],
    declaration_one: false,
    declaration_two: false,
    full_name: "",
    digital_signature: "",
    signed_date: "",
  });

    } else {
      console.error(data);
      alert("Submission failed");
    }
  } catch (error) {
    console.error(error);
    alert("Something went wrong");
  }
};
  return (
    <section className="w-full flex justify-center px-4 py-8 bg-[#F8F8FB] dark:bg-gray-900">
      <div className="w-full max-w-[800px] bg-white dark:bg-gray-900 border border-[#E2E8F0] dark:border-gray-700 rounded-[24px] p-6 md:p-10">
        {/* Company Information */}
        <div className="border-b-2 border-[#E2E8F0] pb-4 mb-8">
          <h2 className="text-[24px] font-bold text-[#2D3748] dark:text-white">
            Company Information
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <InputField
            label="Company Name"
            name="company_name"
            value={formData.company_name}
            onChange={handleChange}
            required
          />
          <InputField
            label="Contact Name"
            name="contact_name"
            value={formData.contact_name}
            onChange={handleChange}
            required
          />

          <InputField
            label="Position"
            name="position"
            value={formData.position}
            onChange={handleChange}
          />

          <InputField
            label="Email Address"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <InputField
            label="Phone Number"
            name="phone_number"
            value={formData.phone_number}
            onChange={handleChange}
            required
          />

          <InputField
            label="Company Website"
            name="company_website"
            value={formData.company_website}
            onChange={handleChange}
          />
        </div>

        {/* Business Address */}
        <div className="border-b-2 border-[#E2E8F0] pb-4 mb-8">
          <h2 className="text-[24px] font-bold text-[#2D3748] dark:text-white">
            Business Address
          </h2>
        </div>

        <div className="space-y-6 mb-10">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField
              label="Company Address"
              name="company_address"
              value={formData.company_address}
              onChange={handleChange}
              required
            />

            <InputField
              label="City"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />

            <InputField
              label="Post Code"
              name="post_code"
              value={formData.post_code}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-[14px] font-semibold text-[#2D3748] dark:text-white mb-2">
              Country <span className="text-[#E53E3E]">*</span>
            </label>

            <div className="relative">
             <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full h-[51px] rounded-[12px] border-2 border-[#CBD5E0] px-4 text-[#2D3748] dark:bg-gray-900 dark:text-white"
              >
              <option value="">Select Country</option>

              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="border-b-2 border-[#E2E8F0] pb-4 mb-8">
          <h2 className="text-[24px] font-bold text-[#2D3748] dark:text-white">
            Services of Interest
          </h2>
        </div>

        <div className="mb-10">
          <p className="text-[14px] font-semibold text-[#2D3748] dark:text-white mb-8">
            Select services you're interested in reselling{" "}
            <span className="text-[#E53E3E]">*</span>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12">
            {services.map((service, index) => (
              <label
                key={index}
                className="flex items-center gap-3 cursor-pointer"
              >
                <input
                type="checkbox"
                checked={formData.services.includes(service)}
                onChange={() => handleServiceChange(service)}
              />

                <span className="text-[16px] font-semibold text-[#2D3748] dark:text-white">
                  {service}
                </span>                         
              </label>            
            ))}
          </div>
        </div>

        {/* Declaration */}
        <div className="bg-[#F7F7FA] dark:bg-gray-800 rounded-[16px] p-6 mb-10 space-y-6">
          <label className="flex items-start gap-4 cursor-pointer">
            <input
                type="checkbox"
                name="declaration_one"
                checked={formData.declaration_one}
                onChange={handleChange}
              />

            <span className="text-[16px] text-[#4A5568] dark:text-gray-300 leading-[28px]">
              I hereby declare that the information provided is true and
              accurate to the best of my knowledge.
            </span>
          </label>

          <label className="flex items-start gap-4 cursor-pointer">
            <input
                type="checkbox"
                name="declaration_two"
                checked={formData.declaration_two}
                onChange={handleChange}
              />

            <span className="text-[16px] text-[#4A5568] dark:text-gray-300 leading-[28px]">
              I understand that providing false information may result in the
              rejection of this application or termination of the reseller
              agreement.
            </span>
          </label>
        </div>

        {/* Signature */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <InputField
            label="Full Name"
            name="full_name"
            value={formData.full_name}
            onChange={handleChange}
            required
          />

          <div>
            <label className="block text-[14px] font-semibold text-[#2D3748] dark:text-white mb-2">
              Digital Signature <span className="text-[#E53E3E]">*</span>
            </label>

            <input
                type="text"
                name="digital_signature"
                value={formData.digital_signature}
                onChange={handleChange}
                placeholder="Type your full name"
                className="w-full h-[51px] rounded-[12px] border-2 border-[#CBD5E0] dark:border-gray-600 bg-white dark:bg-gray-800 text-[#4A5568] dark:text-white px-4 outline-none"
              />
          </div>

          <div>
            <label className="block text-[14px] font-semibold text-[#2D3748] dark:text-white mb-2">
              Date <span className="text-[#E53E3E]">*</span>
            </label>

            <div className="relative">
              <input
                type="date"
                name="signed_date"
                value={formData.signed_date}
                onChange={handleChange}
                className="w-full h-[51px] rounded-[12px] border-2 border-[#CBD5E0] dark:border-gray-600 bg-white dark:bg-gray-800 text-[#4A5568] dark:text-white px-4 outline-none"
              />

              <Calendar
                size={18}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#2D3748] dark:text-gray-400 pointer-events-none"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-[#E2E8F0] dark:border-gray-700 pt-10 text-center">
          <button  onClick={handleSubmit} className="bg-gradient-to-r from-[#C12172] to-[#7B2CBF] hover:opacity-90 transition-all duration-300 text-white font-semibold text-[18px] px-12 py-4 rounded-full shadow-md">
            Submit Application →
          </button>

          <p className="text-center text-[14px] text-[#718096] mt-6">
                By submitting, you agree to our{" "}
                <a href="/terms-and-conditions" className="text-[#C12172] underline cursor-pointer">
                Terms & Conditions
                </a>{" "}
                and{" "}
                <a href="/privacy-policy"  className="text-[#C12172] underline cursor-pointer">
                    Privacy Policy
                </a>
            </p>
        </div>
      </div>
    </section>     
  );
}

type InputFieldProps = {
  label: string;
  name: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
  required?: boolean;
};

function InputField({
  label,
  name,
  value,
  onChange,
  required = false,
}: InputFieldProps) {
  return (
    <div>
      <label className="block text-[14px] font-semibold text-[#2D3748] dark:text-white mb-2">
        {label}
        {required && <span className="text-[#E53E3E]">*</span>}
      </label>

      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        className="w-full h-[51px] rounded-[12px] border-2 border-[#CBD5E0] dark:border-gray-600 bg-white dark:bg-gray-800 text-[#4A5568] dark:text-white px-4 outline-none"
      />
    </div>
  );
}
