"use client";

export default function ContactForm() {
  return (
    <div className="w-full max-w-[520px] bg-white dark:bg-gray-900 border border-[#C12172] rounded-[24px] p-6 md:p-10 shadow-xl">

      {/* FORM TITLE */}
      <h2 className="text-[#2D3748] dark:text-white text-[24px] font-bold leading-[40px] mb-8">
        Send Us a Message
      </h2>

      {/* FORM */}
      <form className="flex flex-col gap-5">

        {/* NAME */}
        <div>
          <label className="text-[#2D3748] dark:text-white text-[14px] font-semibold leading-[24px] mb-2 block">
            Your Name
          </label>

          <input
            type="text"
            placeholder="John Doe"
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
            placeholder="+44 123 456 7890"
            className="w-full h-[51px] border-2 border-[#CBD5E0] dark:border-gray-700 bg-white dark:bg-gray-900 text-[#2D3748] dark:text-white rounded-xl px-4 text-[14px] outline-none focus:border-[#C12172]"
          />
        </div>

        {/* SUBJECT */}
        <div>
          <label className="text-[#2D3748] dark:text-white text-[14px] font-semibold leading-[24px] mb-2 block">
            Subject
          </label>

          <select className="w-full h-[51px] border-2 border-[#CBD5E0] dark:border-gray-700 bg-white dark:bg-gray-900 text-[#2D3748] dark:text-white rounded-xl px-4 text-[14px] outline-none focus:border-[#C12172]">
            <option>Select a subject</option>
          </select>
        </div>

        {/* MESSAGE */}
        <div>
          <label className="text-[#2D3748] dark:text-white text-[14px] font-semibold leading-[24px] mb-2 block">
            Your Message
          </label>

          <textarea
            rows={2}
            placeholder="How can we help you?"
            className="w-full border-2 border-[#CBD5E0] dark:border-gray-700 bg-white dark:bg-gray-900 text-[#2D3748] dark:text-white rounded-xl p-4 text-[14px] outline-none resize-none focus:border-[#C12172]"
          ></textarea>
        </div>

        {/* BUTTON */}
        <button
          type="submit"
          className="w-full h-[56px] rounded-full bg-gradient-to-r from-[#C12172] to-[#782984] text-white text-[16px] font-semibold mt-2 hover:scale-[1.01] transition-all duration-300"
        >
          Send Message →
        </button>

      </form>
    </div>
  );
}