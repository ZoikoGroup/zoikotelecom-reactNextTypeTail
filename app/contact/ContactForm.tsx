"use client";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
  first_name: "",
  last_name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
});

const [loading, setLoading] = useState(false);

const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  setLoading(true);

  try {
     const payload = {
    first_name:formData.first_name,
    last_name:formData.last_name,
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
      alert(data.message || "Message sent successfully");

      setFormData({
        first_name: "",
        last_name:"",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
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
  return (
    <div className="w-full max-w-[520px] bg-white dark:bg-gray-900 border border-[#C12172] rounded-[24px] p-6 md:p-10 shadow-xl">

      {/* FORM TITLE */}
      <h2 className="text-[#2D3748] dark:text-white text-[24px] font-bold leading-[40px] mb-8">
        Send Us a Message
      </h2>

      {/* FORM */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">

        {/* FIRSTNAME */}
        <div>
          <label className="text-[#2D3748] dark:text-white text-[14px] font-semibold leading-[24px] mb-2 block">
            First Name
          </label>

          <input
            type="text"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              required
            placeholder="John"
            className="w-full h-[51px] border-2 border-[#CBD5E0] dark:border-gray-700 bg-white dark:bg-gray-900 text-[#2D3748] dark:text-white rounded-xl px-4 text-[14px] outline-none focus:border-[#C12172]"
          />
        </div>
        {/*LAST NAME*/}
        <div>
          <label className="text-[#2D3748] dark:text-white text-[14px] font-semibold leading-[24px] mb-2 block">
            Last Name
          </label>

          <input
            type="text"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              required
            placeholder="Doe"
            className="w-full h-[51px] border-2 border-[#CBD5E0] dark:border-gray-700 bg-white dark:bg-gray-900 text-[#2D3748] dark:text-white rounded-xl px-4 text-[14px] outline-none focus:border-[#C12172]"
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
            required
            placeholder="john@example.com"
            className="w-full h-[51px] border-2 border-[#CBD5E0] dark:border-gray-700 bg-white dark:bg-gray-900 text-[#2D3748] dark:text-white rounded-xl px-4 text-[14px] outline-none focus:border-[#C12172]"
          />
        </div>

        {/* PHONE */}
        <div>
          <label className="text-[#2D3748] dark:text-white text-[14px] font-semibold leading-[24px] mb-2 block">
            Phone Number
          </label>

          <input
            type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            placeholder="+44 123 456 7890"
            className="w-full h-[51px] border-2 border-[#CBD5E0] dark:border-gray-700 bg-white dark:bg-gray-900 text-[#2D3748] dark:text-white rounded-xl px-4 text-[14px] outline-none focus:border-[#C12172]"
          />
        </div>

        {/* SUBJECT */}
        <div>
          <label className="text-[#2D3748] dark:text-white text-[14px] font-semibold leading-[24px] mb-2 block">
            Subject
          </label>

          {/*<select className="w-full h-[51px] border-2 border-[#CBD5E0] dark:border-gray-700 bg-white dark:bg-gray-900 text-[#2D3748] dark:text-white rounded-xl px-4 text-[14px] outline-none focus:border-[#C12172]">
            <option>Select a subject</option>
          </select>*/}
          <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="Enter subject"
              className="w-full rounded-lg border border-gray-300 px-4 py-3"
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
            required
            className="w-full border-2 border-[#CBD5E0] dark:border-gray-700 bg-white dark:bg-gray-900 text-[#2D3748] dark:text-white rounded-xl p-4 text-[14px] outline-none resize-none focus:border-[#C12172]"
          ></textarea>
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