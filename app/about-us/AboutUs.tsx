"use client";

import Image from "next/image";

export default function AboutUs() {
  const whyChooseUs = [
    {
      title: "Innovative Solutions",
      desc: "Cutting-edge technology meets customer needs with our advanced Zoiko Fibre plans and digital services.",
      image: "/image/SVG.png",
    },
    {
      title: "Global Connectivity",
      desc: "Data SIM Cards and international solutions designed for seamless global communication.",
      image: "/image/SVG (1).png",
    },
    {
      title: "Customer-Centric",
      desc: "User-friendly interfaces and dedicated support teams committed to unparalleled service excellence.",
      image: "/image/SVG (2).png",
    },
  ];

  const services = [
    {
      title: "Data Solutions",
      desc: "Pocket-friendly Data SIM Cards offering unmatched coverage for highly effective communication.",
      image: "/image/SVG (3).png",
    },
    {
      title: "Broadband & Fibre",
      desc: "Ultrafast internet with unlimited streaming and end-to-end connectivity for homes and businesses.",
      image: "/image/SVG (4).png",
    },
    {
      title: "Cloud & Hosting",
      desc: "Unified and secure cloud hosting with 99.9% uptime guarantee and disaster recovery solutions.",
      image: "/image/SVG (5).png",
    },
    {
      title: "Business Solutions",
      desc: "Dedicated internet, scalable enterprise cloud solutions, and amazing storage plans for all businesses.",
      image: "/image/SVG (6).png",
    },
    {
      title: "Landline & VoIP",
      desc: "Flexible landline plans and advanced VoIP systems for seamless business communications.",
      image: "/image/SVG (7).png",
    },
    {
      title: "ISD Services",
      desc: "International calling at lower rates with Easy-Talk Bundles, Free SMS, and Top-up vouchers.",
      image: "/image/SVG (8).png",
    },
    {
      title: "Security & Automation",
      desc: "Enhanced security systems, sustainability solutions, and virtualization-based surveillance.",
      image: "/image/SVG (9).png",
    },
    {
      title: "Television Plans",
      desc: "UK's No.1 Channel Aggregator with unmatched entertainment and on-demand streaming services.",
      image: "/image/SVG (7).png",
    },
  ];

  const stats = [
    {
      number: "50K+",
      label: "Happy Customers",
    },
    {
      number: "99.9%",
      label: "Uptime Guarantee",
    },
    {
      number: "24/7",
      label: "Support Available",
    },
    {
      number: "15+",
      label: "Years Experience",
    },
  ];

  return (
    <div className="w-full bg-white overflow-hidden ">

      {/* ================= HERO SECTION ================= */}
      <section className="w-full min-h-[227px] py-10 bg-gradient-to-r from-[#C12172] to-[#782984]  flex items-center justify-center px-4 md:px-6 transition-all duration-300">
        <div className="max-w-[841px] text-center">
          <h1 className="text-white font-bold text-[32px] md:text-[50px] leading-[42px] md:leading-[72px]">
            Transforming the Way You Connect
          </h1>

          <p className="text-white/90 text-[16px] md:text-[20px] leading-[32px] mt-2">
            Leading the digital revolution with innovative telecom solutions
            that empower businesses and individuals worldwide.
          </p>
        </div>
      </section>

      {/* ================= VISION SECTION ================= */}
      <section className="w-full bg-white dark:bg-gray-900 py-10 md:py-11 transition-all duration-300">
        <div className="max-w-[1120px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center px-4 md:px-6">

          {/* LEFT CONTENT */}
          <div className="max-w-[551px]">
            <div className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-[#FFF4FD] mb-5">
              <span className="text-[#C12172] text-xs font-semibold uppercase tracking-wide">
                Our Vision
              </span>
            </div>

            <h2 className="text-[#2D3748] dark:text-white text-[28px] md:text-[35px] leading-[42px] md:leading-[62px] font-bold mb-3">
              Building a Connected Future
            </h2>

            <p className="text-[#2D3748] dark:text-gray-300 text-[16px] md:text-[20px] leading-[30px] md:leading-[34px] text-justify">
              We envision a world where communication knows no bounds.
              Zoiko Telecom strives to be the catalyst for technological
              evolution, creating a global network that enhances experiences
              and fosters unity. Our commitment extends beyond providing
              services we're architects of connectivity, weaving the digital
              fabric that binds our world together.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full flex justify-center lg:justify-end">
            <Image
              src="/image/Background.png"
              alt="Connected Future"
              width={500}
              height={500}
              className="rounded-[24px] object-cover w-full max-w-[500px] h-auto"
            />
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="w-full bg-[#F8F9FA] dark:bg-gray-900 py-10 md:py-11 transition-all duration-300">
        <div className="max-w-[1280px] mx-auto px-4 md:px-10 lg:px-20">

          {/* TOP TITLE */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-[#FFF4FD] mb-4">
              <span className="text-[#C12172] text-sm font-semibold uppercase tracking-wide">
                Why Choose Us
              </span>
            </div>

            <h2 className="text-[#2D3748] dark:text-white text-[28px] md:text-[35px] leading-[42px] md:leading-[62px] font-bold">
              What Sets Zoiko Apart
            </h2>
          </div>

          {/* CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="w-full max-w-[352px] min-h-[332px] bg-white dark:bg-gray-800 border border-[#E2E8F0] dark:border-gray-700 rounded-[24px] px-8 py-8 text-center hover:shadow-lg transition-all duration-300"
              >
                {/* IMAGE */}
                <div className="flex justify-center mb-8 mt-2">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-[#C12172] to-[#782984] flex items-center justify-center">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={35}
                      height={35}
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* TITLE */}
                <h3 className="text-[#2D3748] dark:text-white text-[22px] font-semibold mb-4">
                  {item.title}
                </h3>

                {/* DESC */}
                <p className="text-[#718096] dark:text-gray-300 text-[16px] leading-[30px]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SERVICES OVERVIEW ================= */}
      <section className="w-full bg-[#FFFAFD] dark:bg-gray-900 py-10 md:py-11 transition-all duration-300">
        <div className="max-w-[1200px] mx-auto px-4 md:px-10 lg:px-20">

          {/* TOP TAG */}
          <div className="flex justify-center mb-5">
            <div className="w-[140px] h-[38px] rounded-full border border-[#C12172] flex items-center justify-center">
              <span className="text-[#C12172] text-[14px] font-semibold uppercase">
                Our Services
              </span>
            </div>
          </div>

          {/* HEADING */}
          <h2 className="text-center text-[#2D3748] dark:text-white text-[28px] md:text-[35px] font-bold leading-[42px] md:leading-[62px]">
            Comprehensive Telecom Solutions
          </h2>

          {/* SUBTITLE */}
          <p className="text-center text-[#718096] dark:text-gray-300 text-[16px] md:text-[18px] leading-[30px] mt-1 mb-14">
            Everything you need for seamless digital communication
          </p>

          {/* SERVICES GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-6 justify-items-center">
            {services.map((item, index) => (
              <div
                key={index}
                className="w-full max-w-[256px] min-h-[280px] bg-white dark:bg-gray-800 border border-[#FFC8E4] dark:border-gray-700 rounded-[20px] p-6 text-center transition-all duration-300"
              >
                {/* IMAGE BOX */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-[#C12172] to-[#782984] flex items-center justify-center mx-auto mb-6">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={26}
                    height={26}
                    className="object-contain"
                  />
                </div>

                {/* TITLE */}
                <h3 className="text-[#2D3748] dark:text-white text-[18px] md:text-[18px] font-semibold mb-4">
                  {item.title}
                </h3>

                {/* DESC */}
                <p className="text-[#718096] dark:text-gray-300 text-[14px] leading-[24px]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="w-full bg-gradient-to-r from-[#C12172] to-[#782984]  py-10 transition-all duration-300">
        <div className="max-w-[1440px] mx-auto text-center px-4 md:px-6">

          {/* HEADING */}
          <h2 className="text-white text-[26px] md:text-[32px] font-bold leading-[42px] md:leading-[60px] mb-4">
            Ready to Join the Zoiko Experience?
          </h2>

          {/* DESCRIPTION */}
          <p className="text-white text-[16px] md:text-[20px] leading-[30px] mb-10">
            Architects of connectivity, weaving the digital fabric that binds our world.
          </p>

          {/* BUTTON */}
          <button className="w-full max-w-[293px] h-[60px] bg-white rounded-full text-[#C12172] text-[16px] font-semibold shadow-lg hover:scale-105 transition-all duration-300">
            Start Your Journey Today
          </button>
        </div>
      </section>

      {/* ================= STATS SECTION ================= */}
      <section className="w-full bg-white dark:bg-gray-900 py-16 transition-all duration-300">
        <div className="max-w-[1012px] mx-auto px-4 md:px-6">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 text-center">
            {stats.map((item, index) => (
              <div key={index}>
                <h2 className="text-[#9C257B] text-[38px] md:text-[64px] font-bold leading-[50px] md:leading-[70px]">
                  {item.number}
                </h2>

                <p className="text-[#718096] dark:text-gray-300 text-[16px] font-medium leading-[27px] mt-2">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

