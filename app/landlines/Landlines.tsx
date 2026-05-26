"use client";

import Image from "next/image";
import BusinessLandlinePlans from "./landline-plans";
import { useState } from "react";
const benefits = [
  {
    icon: "/image/mingcute_remote-fill.png",
    title: "Remote Collaboration",
    description: "Enable seamless remote work interactions.",
  },
  {
    icon: "/image/material-symbols_percent-discount.png",
    title: "Business Efficiency",
    description:
      "Streamline communication across teams effortlessly.",
  },
  {
    icon: "/image/customer-support.png",
    title: "Customer Support",
    description:
      "Provide uninterrupted support to customers anytime.",
  },
  {
    icon: "/image/solar_wad-of-money-bold.png",
    title: "Cost Saving",
    description:
      "Cut business on long-distance calls with flexible plans.",
  },
];

const testimonials = [
  {
    id: 1,
    text: "Moreover, ideal for my industry. Zoiko Telecom excels in field forcemanagement remotely and ensures seamless interactions on IoT-enabledphysical objects, appliances, and sensors with global 97.94 coverage. Thisdegree helping us is quite wonderful, decreasing distance, cutting fuelcosts, etc. They have a deep understanding of how interconnected devices work.",
    name: " Jahan Hussain",
    image: "/image/image 5.png",
  },
  {
    id: 2,
    text: "Zoiko Telecom is an exceptional choice for connecting global audiences. Their data solutions are named as the best internet providers better than all others, making them true global data specialists for their unlimited data plans. With their value-added globally hosted network, you can trust that your connectivity needs will be met efficiently and effectively.",
    name: "J.A.W. Thomas",
    image: "/image/testimonial-2.png",
  },
  {
    id: 3,
    text: "Completely satisfied, if you're looking for a reliable telecom partner that offers comprehensive cloud-based data storage, business premise security cameras and automation solutions, home internet providers, business phone lines tailored to your needs, and unlimited international calling plans, Zoiko Telecom is your go-to choice. They committed us to my business telecom needs completely.",
    name: "Lollo Milton",
    image: "/image/testimonial-3.png",
  },
];
const faqData = [
  {
    question:
      "What is Business Landline, and how can it benefit my company?",
    answer:
        "Business landline is a technology that allows you to make and receive phone calls over the internet rather than through traditional phone lines. Benefits include reduced costs, advanced communication features, support for remote work, enhanced productivity, and scalable communication solutions tailored to your business needs."
},  
  {
  question: "Which Zoiko Telecom Landline plan is best for my business?",
  answer: (
    <div className="text-[#525252] dark:text-gray-300 text-[15px] leading-[27px] space-y-0">
      <p>
        Zoiko Telecom offers a variety of plans to suit different business
        requirements:
      </p>

      <ul className="space-y-0">
        <li>
          -{" "}
          <span >
            Zoiko SmartVoice:
          </span>{" "}
          Ideal for small businesses needing basic communication features.
        </li>

        <li>
          -{" "}
          <span >
            Zoiko UnityVoice:
          </span>{" "}
          Suitable for businesses that require more minutes and additional
          features.
        </li>

        <li>
          -{" "}
          <span >
            Zoiko FusionLink:
          </span>{" "}
          Best for companies that need video conferencing and team messaging.
        </li>
        <li>
          -{" "}
          <span >
             Zoiko FlexiTalk:
          </span>{" "}
           Perfect for businesses that make frequent UK and international calls.
        </li>
        <li>
          -{" "}
          <span >
            Zoiko SyncVoice:
          </span>{" "}
          Designed for businesses requiring advanced call management and CRM integration.
        </li>
        <li>
          -{" "}
          <span >
             Zoiko MegaCall:
          </span>{" "}
          Tailored for large enterprises needing premium support and custom integration.
        </li>
      </ul>
    </div>
  ),


},
  {
    question: "What do the inclusive minutes cover?",
    answer:
    "Inclusive minutes cover standard landline and mobile calls within the UK. Calls to premium numbers, international destinations, and other non-standard numbers will incur additional charges."
},
  {
    question: "Are the listed prices inclusive of VAT?",
    answer:
      "Yes, all listed prices include VAT.",
  },
  {
    question: "Is line rental included in the Landline plans?",
    answer:
      "Yes, line rental is included in all Zoiko Telecom landline plans.",
  },
  {
    question:
      "Do I need a specific internet connection to use Zoiko Telecom's Landline services?",
    answer:
      "Yes, a compatible internet connection is required to use Zoiko Telecom’s Landline services. The plan prices do not include the cost of the internet connection.",
  },
  {
    question: "What happens if I exceed the inclusive minutes?",
    answer:
      "If you exceed the inclusive minutes, additional charges will apply based on Zoiko Telecom’s standard rates for extra minutes.",
  },
  {
    question: "Are there any international call allowances included?",
    answer:
      "Yes, certain plans, such as Zoiko FlexiTalk, Zoiko SyncVoice, and Zoiko MegaCall, include international call allowances. These are subject to fair usage policies.",
  },
  {
    question:
      "What features are available with Zoiko Telecom's Landline plans?",
    answer:
      "Each plan comes with a range of features, including voicemail transcription, call queuing, multi-level IVR, video conferencing, team messaging, advanced call management, CRM integration, and more. Features vary depending on the selected plan.",
  },
  {
    question: "Can I customise the Landline plans?",
    answer:
      "Zoiko MegaCall offers the option for custom integration and additional features tailored to your business needs. For more information on customisation options, please contact our customer service.",
  },
  {
    question:
      "How can I sign up for a Zoiko Telecom Landline plan?",
    answer:
      "You can sign up for a Zoiko Telecom landlines plan by visiting https://zoikotelecom.com/landlines/ or contacting our sales team. Our team will guide you through the sign-up process and help you choose the best plan for your business.",
  },

  {
    question:
      "What are the contract lengths available for Zoiko Telecom Landline plans?",
    answer:
      "Zoiko Telecom offers 12-month, 24-month, and 36-month contract options for all landline plans, allowing you to choose the term that best suits your business.",
  },

  {
    question:
      "Are there any additional terms and conditions?",
    answer:
      "Yes, all services are subject to Zoiko Telecom’s terms and conditions. Please refer to our website or contact customer service for detailed information.",
  },
];

export default function Landlinefun() {
    const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
};
 const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    
      <main>
    
    <section className="w-full bg-[#7B2983] relative overflow-hidden">
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-[##7B2983]" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-10 flex flex-col items-center text-center">
        
        {/* Heading */}
        <h1 className="max-w-[1090px] text-white font-extrabold text-[34px] leading-[44px] md:text-[56px] md:leading-[67.2px]">
          Discover Zoiko Telecom&apos;s Business Landline Service
        </h1>
       

        {/* Sub Heading */}
        <p className="mt-4 text-white font-medium text-[18px] leading-[30px] md:text-[24px] md:leading-[40.8px]">
          High quality scalable communication
        </p>

        {/* Features */}
        <p className="mt-5 text-white text-[13px] leading-[22px] md:text-[15px] md:leading-[22.4px] font-medium flex flex-wrap justify-center gap-2">
          <span>Cost reduction</span>
          <span>|</span>
          <span>Advanced business access</span>
          <span>|</span>
          <span>Remote services support</span>
          <span>|</span>
          <span>Enhanced productivity</span>
        </p>
      </div>
    </section>
    <BusinessLandlinePlans/>
    


    <section className="w-full bg-[#F8F9FA] dark:bg-gray-900 py-[40px] md:py-[60px] px-4 md:px-[40px] lg:px-[104px]">
      
      <div className="max-w-[1440px] mx-auto">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">

          {benefits.map((item, index) => (
            <div
              key={index}
              className="w-full max-w-[290px] min-h-[229px] bg-white dark:bg-gray-800 rounded-[8px] flex flex-col items-center justify-center text-center px-6 py-8 transition-all duration-300"
            >
              
              {/* ICON */}
              <div className="mb-5">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={57}
                  height={57}
                  className="object-contain"
                />
              </div>

              {/* TITLE */}
              <h3 className="text-[#C12172] dark:text-white text-[16px] font-semibold leading-[20px] mb-3">
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-[#525252] dark:text-gray-300 text-[14px] leading-[21px] max-w-[198px]">
                {item.description}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
     <section className="w-full bg-[#FFF4FA] dark:bg-gray-900 py-[60px] px-4 sm:px-6 lg:px-[80px]">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center">
        
        {/* Heading */}
        <h2 className="text-[#D81B60] text-center font-bold uppercase text-[28px] sm:text-[34px] md:text-[40px] lg:text-[38px] leading-tight">
          Customer Testimonials
        </h2>

        {/* Slider */}
        <div className="relative mt-10 w-full flex items-center justify-center">
          
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="hidden md:flex absolute left-0 z-10 h-[48px] w-[48px] items-center justify-center rounded-full border border-[#D4D4D4] bg-white dark:bg-gray-800 dark:border-gray-700"
          >
            <span className="text-[22px] text-black dark:text-white">
              ‹
            </span>
          </button>

          {/* Card */}
          <div className="w-full max-w-[1000px] rounded-[8px] bg-white dark:bg-gray-800 px-5 sm:px-8 md:px-10 py-8 md:py-10">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-10">
              
              {/* Text */}
              <div className="flex-1">
                <p className="text-[#525252] dark:text-gray-300 text-[15px] sm:text-[16px] md:text-[18px] leading-[30px]">
                  {testimonials[currentSlide].text}
                </p>

                <h4 className="mt-8 text-right text-black dark:text-white text-[18px] md:text-[20px] font-semibold">
                  - {testimonials[currentSlide].name}
                </h4>
              </div>

              {/* Image */}
              <div className="w-full max-w-[260px]">
                <div className="rounded-[15px] p-4 flex items-center justify-center">
                  <img
                    src={testimonials[currentSlide].image}
                    alt={testimonials[currentSlide].name}
                    className="w-full h-auto rounded-[12px] object-cover"
                  />
                </div>
              </div>

            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="hidden md:flex absolute right-0 z-10 h-[48px] w-[48px] items-center justify-center rounded-full border border-[#D4D4D4] bg-white dark:bg-gray-800 dark:border-gray-700"
          >
            <span className="text-[22px] text-black dark:text-white">
              ›
            </span>
          </button>
        </div>

        {/* Mobile Arrows */}
        <div className="flex md:hidden items-center gap-4 mt-6">
          <button
            onClick={prevSlide}
            className="h-[42px] w-[42px] rounded-full border border-[#D4D4D4] bg-white dark:bg-gray-800 dark:border-gray-700 flex items-center justify-center"
          >
            <span className="text-black dark:text-white text-[20px]">
              ‹
            </span>
          </button>

          <button
            onClick={nextSlide}
            className="h-[42px] w-[42px] rounded-full border border-[#D4D4D4] bg-white dark:bg-gray-800 dark:border-gray-700 flex items-center justify-center"
          >
            <span className="text-black dark:text-white text-[20px]">
              ›
            </span>
          </button>
        </div>

        {/* Dots */}
        <div className="mt-8 flex items-center justify-center gap-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-[12px] w-[12px] rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? "bg-[#E91E63]"
                  : "bg-[#D9D9D9]"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
    <section className="w-full bg-white dark:bg-gray-900 py-[60px] md:py-[96px] px-4 sm:px-6 lg:px-[80px] transition-colors duration-300">
      
      <div className="max-w-[1280px] mx-auto flex flex-col items-center">

        {/* Heading */}
        <h2 className="text-black dark:text-white text-center text-[28px] sm:text-[34px] md:text-[40px] lg:text-[38px] font-bold uppercase leading-tight">
          Frequently Asked Questions
        </h2>

        {/* FAQ Container */}
        <div className="w-full max-w-[900px] mt-[48px]">

          {faqData.map((item, index) => (
            <div
              key={index}
              className="border-b border-[#E5E5E5] dark:border-gray-700"
            >
              
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between gap-4 py-[24px] text-left"
              >
                <span className="text-black dark:text-white text-[16px] sm:text-[18px] md:text-[20px] font-medium leading-[30px]">
                  {item.question}
                </span>

                <span className="flex-shrink-0 text-[#525252] dark:text-gray-300 text-[20px]">
                            {openIndex === index ? "▲" : "▼"}
                </span>
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index
                    ? "max-h-[500px] pb-[24px]"
                    : "max-h-0"
                }`}
              >
                <p className="text-[#525252] dark:text-gray-300 text-[14px] sm:text-[16px] leading-[28px] pr-4">
                  {item.answer}
                </p>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
    </main>
  );
}
