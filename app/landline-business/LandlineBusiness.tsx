"use client";

import { Play } from "lucide-react";
import Link from "next/link";
import Configure from "./Configure";


const steps = [
  {
    icon: "/image/icon (1).png",
    title: "Select Product",
  },
  {
    icon: "/image/icon (8).png",
    title: "Call Bundle",
  },
  {
    icon: "/image/icon (7).png",
    title: "Porting Options",
  },
  {
    icon: "/image/icon (6).png",
    title: "Contract",
  },
  {
    icon: "/image/icon (5).png",
    title: "Number",
  },
  {
    icon: "/image/icon (4).png",
    title: "Hardware",
  },
  {
    icon: "/image/icon (3).png",
    title: "You're Live!",
  },
];
const testimonials = [
  {
    initials: "JS",
    name: "John Smith",
    role: "Director, Smith & Co Solicitors",
    review:
      "Switching to Zoiko was the best decision we made. Setup took under an hour and our call quality is noticeably better. The savings versus our old BT line are significant too.",
  },
  {
    initials: "AK",
    name: "Aisha Khan",
    role: "Operations Manager, Bright Dental",
    review:
      "We ported three numbers across with zero downtime. The support team walked us through every step. I'd recommend Zoiko to any SME looking to modernise their phone system.",
  },
  {
    initials: "TR",
    name: "Tom Reynolds",
    role: "CEO, Reynolds Property Group",
    review:
      "The unlimited minutes bundle means we never think about call costs anymore. Our whole team is on digital landlines now. Crystal clear audio every time — even with multiple calls.",
  },
];

export default function HeroSection() {
  return (
    <main>
    <section className="relative overflow-hidden bg-[#FFFFFFF2] dark:bg-gray-900 transition-colors duration-300">
  
  {/* Desktop Background */}
  <div className="hidden lg:block absolute inset-0 bg-[#FFFFFFF2] dark:bg-gray-900" />

  {/* Mobile Background */}
  <div className="lg:hidden absolute inset-0 bg-[linear-gradient(180deg,#F7E9F6_0%,#FCEAF4_45%,#FFFFFF_100%)] dark:bg-gray-900" />
      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-23">
        {/* Desktop Layout */}
        <div className="hidden lg:flex items-center justify-between min-h-screen py-20 gap-16">
          {/* Left Content */}
          <div className="max-w-[620px]">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 border border-[#E91E8C] rounded-full px-4 py-[7px]">
              <div className="w-[6px] h-[6px] rounded-full bg-[#E91E8C]" />
              <span className="text-[#E91E8C] uppercase tracking-[1.2px] text-[10px] font-bold">
                Digital Landline 2026
              </span>
            </div>

            {/* Heading */}
            <h1 className="mt-6 text-[48px] leading-[58.8px] font-black text-[#1A1A2E] dark:text-white">
              Stay Connected,
              <br />
              <span className="bg-gradient-to-r from-[#7B1FA2] to-[#E91E8C] bg-clip-text text-transparent">
                Seamlessly.
              </span>
            </h1>

            {/* Paragraph */}
            <p className="mt-8 max-w-[560px] text-[18px] leading-[34px] text-[#6B6B8A] dark:text-gray-300">
              Transform your business communications with Zoiko’s
              next-generation digital landline. Crystal-clear calls,
              advanced features, and zero complexity — all in one place.
            </p>

            {/* Buttons */}
            <div className="flex items-center gap-5 mt-10">
              <Link href="#configureplan">
              <button className="h-[56px] px-9 rounded-full bg-gradient-to-r from-[#7B1FA2] to-[#E91E8C] text-white text-[15px] font-bold flex items-center gap-3 hover:scale-105 transition-transform">
                <Play size={16} fill="white" strokeWidth={0} />
                Configure Your Plan
              </button>
              </Link>

              <Link href="#How it works">
              <button className="h-[56px] px-8 rounded-full border border-[#7B1FA2] text-[#7B1FA2] dark:text-white text-[15px] font-bold hover:bg-[#7B1FA2] hover:text-white transition-all">
                See how it works
              </button>
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-16 pt-8 border-t border-[#7B1FA2]/10 dark:border-gray-700 flex items-center gap-20">
              <div>
                <h3 className="text-[48px] leading-none font-black text-[#E91E8C]">
                  50K+
                </h3>
                <p className="mt-2 text-[14px] text-[#6B6B8A] dark:text-gray-400">
                  Happy Customers
                </p>
              </div>

              <div>
                <h3 className="text-[48px] leading-none font-black text-[#E91E8C]">
                  99.9%
                </h3>
                <p className="mt-2 text-[14px] text-[#6B6B8A] dark:text-gray-400">
                  Uptime
                </p>
              </div>

              <div>
                <h3 className="text-[48px] leading-none font-black text-[#E91E8C]">
                  24/7
                </h3>
                <p className="mt-2 text-[14px] text-[#6B6B8A] dark:text-gray-400">
                  Support
                </p>
              </div>
            </div>
          </div>

          {/* Right Card */}
          <div className="w-full max-w-[430px] rounded-[32px] overflow-hidden bg-white dark:bg-gray-800 border border-[#F1D8EC] dark:border-gray-700 shadow-[0_30px_80px_rgba(123,31,162,0.12)]">
            <div className="h-[5px] bg-gradient-to-r from-[#7B1FA2] to-[#E91E8C]" />

            <div className="p-8">
              <p className="uppercase tracking-[1.5px] text-[11px] font-bold text-[#E91E8C]">
                Your Digital Landline Plan
              </p>

              <h2 className="mt-4 text-[30px] leading-[38px] font-extrabold text-[#1A1A2E] dark:text-white">
                Configure in 7 Easy Steps
              </h2>

              <div className="mt-8 space-y-5">
                <div className="flex items-center justify-between pb-4 border-b border-[#7B1FA2]/10 dark:border-gray-700">
                      <div className="flex items-center gap-2">
                          <img
                            src="https://s.w.org/images/core/emoji/17.0.2/svg/1f4de.svg"
                            alt="phone"
                            className="w-4 h-4"
                            draggable="false"
                          />
  <span className="text-[15px] text-[#1A1A2E] dark:text-white">
    Digital Line
  </span>
</div>
                  <span className="bg-[#E91E8C] text-white text-[10px] uppercase tracking-[1px] px-3 py-1 rounded-full font-bold">
                    Popular
                  </span>
                </div>

                <div className="flex items-center justify-between pb-4 border-b border-[#7B1FA2]/10 dark:border-gray-700">
                  <span className="text-[15px] text-[#1A1A2E] dark:text-white">
                    📋 12 Month Contract
                  </span>

                  <span className="text-[15px] font-bold text-[#7B1FA2]">
                    £14.99/mo
                  </span>
                </div>

                <div className="flex items-center justify-between pb-4 border-b border-[#7B1FA2]/10 dark:border-gray-700">
                  <span className="text-[15px] text-[#1A1A2E] dark:text-white">
                    📍 Number Type
                  </span>

                  <span className="text-[15px] font-bold text-[#7B1FA2]">
                    Geographic
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-[15px] text-[#1A1A2E] dark:text-white">
                    📦 Hardware Add-on
                  </span>

                  <span className="text-[15px] font-bold text-[#7B1FA2]">
                    + Phone
                  </span>
                </div>
              </div>

              <Link href="">
              <button className="w-full h-[56px] rounded-full mt-10 bg-gradient-to-r from-[#7B1FA2] to-[#E91E8C] text-white text-[15px] font-bold hover:scale-[1.02] transition-transform">
                Start Configuring
              </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden pt-8 pb-14">

          {/* Content */}
          <div className="mt-10">
            {/* Tag */}
            <div className="inline-flex items-center gap-[6px] border border-[#E91E8C] rounded-full px-[17px] py-[6px]">
              <div className="w-[5px] h-[5px] rounded-full bg-[#E91E8C]" />

              <span className="text-[#E91E8C] text-[10px] font-bold uppercase tracking-[1.2px]">
                Digital Landline 2026
              </span>
            </div>

            {/* Heading */}
            <h1 className="mt-4 text-[34px] leading-[35.7px] font-black text-[#1A1A2E] dark:text-white">
              Stay Connected,
              <br />
              <span className="bg-gradient-to-r from-[#7B1FA2] to-[#E91E8C] bg-clip-text text-transparent">
                Seamlessly.
              </span>
            </h1>

            {/* Paragraph */}
            <p className="mt-5 text-[16px] leading-[28px] text-[#6B6B8A] dark:text-gray-300 max-w-[352px]">
              Transform your business communications with Zoiko’s
              next-generation digital landline. Crystal-clear calls,
              advanced features, and zero complexity — all in one place.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col items-start gap-4">
              <button className="h-[46px] px-8 rounded-full bg-gradient-to-r from-[#7B1FA2] to-[#E91E8C] text-white text-[13px] font-bold flex items-center gap-2">
                <Play size={16} fill="white" strokeWidth={0} />
                Configure Your Plan
              </button>

              <button className="h-[46px] px-[30px] rounded-full border border-[#7B1FA2] text-[#7B1FA2] dark:text-white text-[13px] font-bold">
                See how it works
              </button>
            </div>

            {/* Stats */}
            <div className="mt-10 pt-8 border-t border-[#7B1FA2]/10 dark:border-gray-700 flex items-center justify-between">
              <div className="text-center">
                <h3 className="text-[28px] font-black text-[#E91E8C] leading-none">
                  50K+
                </h3>

                <p className="mt-2 text-[11px] text-[#6B6B8A] dark:text-gray-400">
                  Happy Customers
                </p>
              </div>

              <div className="text-center">
                <h3 className="text-[28px] font-black text-[#E91E8C] leading-none">
                  99.9%
                </h3>

                <p className="mt-2 text-[11px] text-[#6B6B8A] dark:text-gray-400">
                  Uptime
                </p>
              </div>

              <div className="text-center">
                <h3 className="text-[28px] font-black text-[#E91E8C] leading-none">
                  24/7
                </h3>

                <p className="mt-2 text-[11px] text-[#6B6B8A] dark:text-gray-400">
                  Support
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Configure/>
    
    <section id="How it works"
    className="w-full bg-white dark:bg-gray-950 py-16 md:py-10 overflow-hidden">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TOP LABEL */}
        <div className="flex justify-center">
          <div className="rounded-full">
            <span className="text-[#E6007E] text-[10px] font-bold uppercase tracking-[2px]">
              Your Journey
            </span>
          </div>
        </div>

        {/* HEADING */}
        <h2 className="mt-5 text-center text-[#121212] dark:text-white text-[32px] md:text-[42px] font-black leading-tight">
          From Sign-up to Live
        </h2>

        {/* DESCRIPTION */}
        <p className="mt-5 text-center text-[#667085] dark:text-gray-300 text-sm md:text-base leading-6 max-w-[760px] mx-auto">
          Here's a bird's-eye view of your setup journey
          simple, guided and completed in minutes.
        </p>

        {/* STEPS */}
        <div className="mt-12 overflow-x-auto pb-4">
  <div className="flex items-start justify-start lg:justify-center gap-4 min-w-max px-1">
    {steps.map((step, index) => {
      return (
        <div
          key={index}
          className="flex items-start"
        >
          <div className="flex flex-col items-center min-w-[92px]">
            
            {/* ICON BOX */}
            <div className="w-14 h-14 rounded-[20px] bg-[#FCE7F3] dark:bg-[#2A1630] flex items-center justify-center transition-all duration-300">
              
              {/* SVG IMAGE */}
              <img
                src={step.icon}
                alt={step.title}
                className="w-6 h-6 object-contain"
              />
            </div>

            {/* TITLE */}
            <p className="mt-4 text-center text-[#121212] dark:text-white text-xs font-bold leading-4">
              {step.title}
            </p>
          </div>

          {/* ARROW */}
          {index !== steps.length - 1 && (
            <div className="hidden md:flex items-center justify-center px-3 pt-4">
              <span className="text-[#E6007E] text-2xl">
                ›
              </span>
            </div>
          )}
        </div>
      );
    })}
  </div>
</div>

        {/* CTA CARD */}
        <div className="relative mt-14 overflow-hidden rounded-[24px] bg-gradient-to-r from-[#6D1BB3] via-[#B0147A] to-[#E6007E] px-6 sm:px-10 lg:px-6 py-14 md:py-11">
          
          {/* BACKGROUND CIRCLE */}
          <div className="absolute -top-32 -right-24 w-[320px] h-[320px] rounded-full bg-white/5" />

          <div className="relative z-10 flex flex-col items-center text-center">
            
            {/* SMALL TAG */}
            <div className="rounded-full border border-white/50 px-5 py-1">
              <span className="text-white text-[10px] font-bold uppercase tracking-[2px]">
                Get Started Today
              </span>
            </div>

            {/* TITLE */}
            <h3 className="mt-8 text-white text-3xl md:text-4xl font-black leading-tight">
              Ready to Go Digital?
            </h3>

            {/* TEXT */}
            <p className="mt-5 max-w-[620px] text-white/90 text-sm md:text-lg leading-6 md:leading-7">
              Join thousands of UK businesses already
              running on Zoiko's digital landline — no
              engineer visit, no downtime.
            </p>

            {/* BUTTON */}
            <button className="mt-7 h-10 px-5 rounded-full border-2 border-white text-white text-sm md:text-base font-bold tracking-wide hover:bg-white hover:text-[#E6007E] transition-all duration-300">
              Configure My Plan ›
            </button>
          </div>
        </div>
      </div>
    </section>
    <section className="w-full bg-[#F7F5F8] dark:bg-gray-950 py-16 md:py-3 overflow-hidden">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TOP LABEL */}
        <div className="flex justify-center">
          <div className="rounded-full">
            <span className="text-[#E6007E] text-[10px] font-bold uppercase tracking-[2px]">
              Customer Stories
            </span>
          </div>
        </div>

        {/* HEADING */}
        <h2 className="mt-5 text-center text-[#121212] dark:text-white text-[32px] md:text-[32px] font-black leading-tight">
          Loved by UK Businesses
        </h2>

        {/* DESCRIPTION */}
        <p className="mt-5 text-center text-[#667085] dark:text-gray-300 text-sm md:text-base leading-6 max-w-[720px] mx-auto">
          Real feedback from real customers who switched
          to Zoiko&apos;s digital landline.
        </p>

        {/* TESTIMONIAL CARDS */}
        <div className="mt-7 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-[#161616] rounded-[20px] shadow-[0px_2px_20px_rgba(123,31,162,0.09)] p-8 flex flex-col justify-between min-h-[320px] transition-all duration-300"
            >
              
              {/* QUOTE */}
              <div>
                <div className="text-[#5B1E96] text-5xl leading-none font-serif">
                  "
                </div>

                <p className="mt-6 text-[#667085] dark:text-gray-300 text-sm leading-7">
                  {item.review}
                </p>
              </div>

              {/* USER */}
              <div className="mt-8 flex items-start gap-4">
                
                {/* AVATAR */}
                <div className="w-11 h-11 rounded-[38px] bg-gradient-to-br from-[#5B1E96] via-[#B0147A] to-[#E6007E] flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-extrabold">
                    {item.initials}
                  </span>
                </div>

                {/* DETAILS */}
                <div>
                  <div className="text-[#F4B400] text-sm leading-none">
                    ★★★★★
                  </div>

                  <h4 className="mt-3 text-[#121212] dark:text-white text-xs font-bold leading-5">
                    {item.name}
                  </h4>

                  <p className="text-[#667085] dark:text-gray-400 text-xs leading-5">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </main>
  );
}