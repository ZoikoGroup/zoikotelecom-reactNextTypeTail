"use client";

import { Calendar } from "lucide-react";

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
          <InputField label="Company Name" required />
          <InputField label="Contact Name" required />
          <InputField label="Position" />
          <InputField label="Email Address" required />
          <InputField label="Phone Number" required />
          <InputField label="Company Website" />
        </div>

        {/* Business Address */}
        <div className="border-b-2 border-[#E2E8F0] pb-4 mb-8">
          <h2 className="text-[24px] font-bold text-[#2D3748] dark:text-white">
            Business Address
          </h2>
        </div>

        <div className="space-y-6 mb-10">
          <InputField label="Company Address" required fullWidth />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField label="City" required />
            <InputField label="Post Code" required />
          </div>

          <div>
            <label className="block text-[14px] font-semibold text-[#2D3748] dark:text-white mb-2">
              Country <span className="text-[#E53E3E]">*</span>
            </label>

            <div className="relative">
        <select
             className="w-full h-[51px] rounded-[12px] border-2 border-[#CBD5E0] px-4 text-[#2D3748] dark:bg-gray-900 dark:text-white">
                    <option>Select Country</option>
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
                  className="w-[21px] h-[21px] rounded-[6px] border-2 border-[#CBD5E0] dark:border-gray-500"
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
              className="mt-1 w-[21px] h-[21px] rounded-[6px] border-2 border-[#CBD5E0] dark:border-gray-500"
            />

            <span className="text-[16px] text-[#4A5568] dark:text-gray-300 leading-[28px]">
              I hereby declare that the information provided is true and
              accurate to the best of my knowledge.
            </span>
          </label>

          <label className="flex items-start gap-4 cursor-pointer">
            <input
              type="checkbox"
              className="mt-1 w-[21px] h-[21px] rounded-[6px] border-2 border-[#CBD5E0] dark:border-gray-500"
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
          <InputField label="Full Name" required />

          <div>
            <label className="block text-[14px] font-semibold text-[#2D3748] dark:text-white mb-2">
              Digital Signature <span className="text-[#E53E3E]">*</span>
            </label>

            <input
              type="text"
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
          <button className="bg-gradient-to-r from-[#C12172] to-[#7B2CBF] hover:opacity-90 transition-all duration-300 text-white font-semibold text-[18px] px-12 py-4 rounded-full shadow-md">
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
  required?: boolean;
  fullWidth?: boolean;
};

function InputField({
  label,
  required = false,
}: InputFieldProps) {
  return (
    <div>
      <label className="block text-[14px] font-semibold text-[#2D3748] dark:text-white mb-2">
        {label}{" "}
        {required && <span className="text-[#E53E3E]">*</span>}
      </label>

      <input
        type="text"
        className="w-full h-[51px] rounded-[12px] border-2 border-[#CBD5E0] dark:border-gray-600 bg-white dark:bg-gray-800 text-[#4A5568] dark:text-white px-4 outline-none"
      />
    </div>
  );
}