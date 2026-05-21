"use client";

import Image from "next/image";
import ResellerApplicationForm from "./Resller-form";

const benefits = [
  {
    title: "High Margins",
    description: "Competitive commission structure",
    icon: "/image/receipt-money.png",
  },
  {
    title: "Full Training",
    description: "Comprehensive onboarding support",
    icon: "/image/device-training.png",
  },
  {
    title: "Dedicated Support",
    description: "24/7 partner assistance",
    icon: "/image/customer-support.png",
  },
  {
    title: "Marketing Tools",
    description: "Ready-to-use promotional materials",
    icon: "/image/plump_tool.png",
  },
];

export default function BecomeSellerPage() {
  return (
    <main className="w-full overflow-hidden bg-white dark:bg-gray-900 transition-colors duration-300">
      
      {/* HERO SECTION */}
      <section className="w-full bg-gradient-to-r from-[#C12172] to-[#782984] pt-8 pb-12 px-4 md:px-10">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">

          {/* TAG */}
          <div className="bg-white/15 text-white text-[10px] md:text-sm font-semibold tracking-wide px-5 py-2 rounded-full mb-5">
            PARTNER PROGRAMME
          </div>

          {/* HEADING */}
          <h1 className="text-white font-extrabold text-3xl md:text-5xl leading-tight">
            Become a Zoiko Reseller
          </h1>

          {/* PARAGRAPH */}
          <p className="text-white/90 text-sm md:text-base mt-4 max-w-3xl leading-7">
            Join our network of successful partners and grow your business
            with industry leading telecom solutions
          </p>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="w-full bg-white dark:bg-gray-900 py-12 md:py-12 px-4 md:px-10 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((item, index) => (
              <div
                key={index}
                className="bg-[#FFFAFD] dark:bg-gray-800 rounded-2xl p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all duration-300"
              >
                {/* ICON */}
                <div className="w-11 h-12 relative mb-5">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    fill
                    className="object-contain"
                  />
                </div>

                {/* TITLE */}
                <h3 className="text-[#92267E] dark:text-white text-lg font-semibold">
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-[#718096] dark:text-gray-300 text-sm mt-3 leading-6">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ResellerApplicationForm/>

     <section className="w-full bg-white dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-10">
  <div className="max-w-[1440px] mx-auto">
    
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      
      {/* Call Us */}
      <div className="bg-[#FFFAFD] dark:bg-gray-800 rounded-[20px] min-h-[286px] flex flex-col items-center justify-center text-center px-6 py-10">
        
        {/* Icon */}
        <div className="w-[56px] h-[56px] rounded-[16px] bg-gradient-to-b from-[#C12172] to-[#782984] flex items-center justify-center mb-6">
          <div className="w-6 h-6 relative mb-1">
            <Image
              src="/image/ion_call (1).png"
              alt="call"
              fill
              className="object-contain"
            />
          </div>
        </div>

        <h3 className="text-[20px] leading-[32px] font-semibold text-[#2D3748] dark:text-white mb-2">
          Call Us
        </h3>

        <p className="text-[18px] leading-[25.6px] font-normal text-[#2D3748] dark:text-gray-300 mb-3">
          +44 330 057 6127
        </p>

        <p className="text-[16px] leading-[20.8px] font-normal text-[#718096] dark:text-gray-400">
          Mon - Fri, 9:00 - 18:00
        </p>
      </div>

      {/* Email Us */}
      <div className="bg-[#FFFAFD] dark:bg-gray-800 rounded-[20px] min-h-[286px] flex flex-col items-center justify-center text-center px-6 py-10">
        
        {/* Icon */}
        <div className="w-[56px] h-[56px] rounded-[16px] bg-gradient-to-b from-[#C12172] to-[#782984] flex items-center justify-center mb-6">
          <div className="w-6 h-6 relative mb-1">
            <Image
              src="/image/tabler_mail-filled.png"
              alt="mail"
              fill
              className="object-contain"
            />
          </div>
        </div>

        <h3 className="text-[20px] leading-[32px] font-semibold text-[#2D3748] dark:text-white mb-2">
          Email Us
        </h3>

        <p className="text-[16px] sm:text-[18px] leading-[25.6px] font-normal text-[#2D3748] dark:text-gray-300 mb-3 break-all">
          resellers@zoikotelecom.com
        </p>

        <p className="text-[16px] leading-[20.8px] font-normal text-[#718096] dark:text-gray-400">
          24-48 hour response time
        </p>
      </div>

      {/* Live Chat */}
      <div className="bg-[#FFFAFD] dark:bg-gray-800 rounded-[20px] min-h-[286px] flex flex-col items-center justify-center text-center px-6 py-10">
        
        {/* Icon */}
        <div className="w-[56px] h-[56px] rounded-[16px] bg-gradient-to-b from-[#C12172] to-[#782984] flex items-center justify-center mb-6">
          <div className="w-6 h-6 relative mb-1">
            <Image
              src="/image/entypo_chat.png"
              alt="chat"
              fill
              className="object-contain"
            />
          </div>
        </div>

        <h3 className="text-[20px] leading-[32px] font-semibold text-[#2D3748] dark:text-white mb-2">
          Live Chat
        </h3>

        <p className="text-[18px] leading-[25.6px] font-normal text-[#2D3748] dark:text-gray-300 mb-3">
          Available 24/7
        </p>

        <a
          href="#"
          className="text-[#C12172] text-[16px] font-semibold underline underline-offset-4"
        >
          Start Chat →
        </a>
      </div>

    </div>
  </div>
</section>
      
    </main>
  );
}
