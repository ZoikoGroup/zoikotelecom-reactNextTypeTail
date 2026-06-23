"use client";

import { useState } from "react";

type FAQItem = {
  id: number;
  question: string;
  answer: string;
};

type FAQProps = {
  faqs: FAQItem[];
};

export default function FAQ({ faqs }: FAQProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      aria-labelledby="frequently-asked-questions-heading"
      className="w-full bg-gray-50 py-16 px-4 dark:bg-gray-950 dark:text-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div
          id="frequently-asked-questions-heading"
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 mt-2 dark:text-gray-300">
            Quick answers to the most common questions
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={faq.id ?? index}
                className="bg-white rounded-lg border border-gray-200 shadow-sm dark:bg-gray-900 dark:border-gray-700"
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center text-base md:text-lg text-left px-8 py-6 font-bold text-[#10446C] dark:text-white"
                  aria-expanded={isOpen}
                >
                  {faq.question}
                  <span className="text-xl">{isOpen ? "−" : "+"}</span>
                </button>

                {/* Answer */}
                <div
                  className={`px-6 overflow-hidden transition-all duration-500 ${
                    isOpen ? "max-h-40 pb-4" : "max-h-0"
                  }`}
                >
                  <p className="whitespace-pre-line text-gray-600 text-sm md:text-base leading-relaxed dark:text-gray-300">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
