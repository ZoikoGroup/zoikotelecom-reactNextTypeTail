"use client";

import Image from "next/image";
import ContactForm from "./ContactForm";
import Link from "next/link";

export default function ContactSection() {

  // CONTACT INFO CARDS
  const contactCards = [
    {
      title: "CALL US",
      value: "+44 207 164 6399",
      icon: "/image/ion_call.png",
    },
    {
      title: "EMAIL US",
      value: "info@zoikotelecom.com",
      icon: "/image/tabler_mail-filled.png",
    },
    {
      title: "WORKING HOURS",
      value: "Mon - Fri, 9:00 - 18:00",
      icon: "/image/lsicon_time-one-filled.png",
    },
  ];

  // OFFICE LOCATIONS
  const offices = [
    {
      city: "London",
      badge: "HEAD OFFICE",
      desktopImage: "/image/londondesktop.png",
      mobileImage: "/image/londonmobile.png",
      address: "35 Berkeley Square, Mayfair, London W1J 5BF",
      phone: "+44 (0) 207 164 6399",
      email: "info@zoikotelecom.com",
      directionsLink: "https://maps.app.goo.gl/p3nJrebFYCE1pTDk9",
    },
    {
      city: "Glasgow",
      desktopImage: "/image/glasgowdesktop.png",
      mobileImage: "/image/glasgowmobile.png",
      address: "2nd Floor, 48 West George Street, Glasgow G2 1BP",
      phone: "+44 141 530 1560",
      email: "info@zoikotelecom.com",
      directionsLink: "https://maps.app.goo.gl/CGQqVnxdBWN46zc48",
    },
    {
      city: "Cardiff",
      desktopImage: "/image/cardiffdesktop.png",
      mobileImage: "/image/cardiffmobile.png",
      address: "113-116 Blue Street, Cardiff CF10 5EQ",
      phone: "+44 292 000 1374",
      email: "info@zoikotelecom.com",
      directionsLink: "https://maps.app.goo.gl/AisuKtyJFys7sMRa7",
    },
  ];

  return (
    <>
      {/* ================= CONTACT SECTION ================= */}

      <section className="w-full relative overflow-hidden dark:bg-gray-900 dark:text-white">

        {/* BACKGROUND IMAGE */}
        <div className="absolute inset-0">
          <Image
            src="/image/portrait-of-classy-team.png"
            alt="contact"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-[1200px] mx-auto px-4 md:px-6 lg:px-10 py-14 md:py-8">

          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start justify-between">

            {/* LEFT SIDE */}
            <div className="w-full max-w-[520px]">

              {/* HEADING */}
              <h1 className="text-white dark:text-white text-[38px] md:text-[48px] font-extrabold leading-[52px] md:leading-[67px]">
                Get in Touch
              </h1>

              {/* DESCRIPTION */}
              <p className="text-white/90 dark:text-white text-[16px] md:text-[18px] leading-[30px] mt-3 max-w-[486px]">
                We're here to help with any questions about our telecom
                solutions. Reach out to our team and we'll respond within
                24 hours.
              </p>

              {/* CONTACT CARDS */}
              <div className="mt-10 flex flex-col gap-4">

                {contactCards.map((item, index) => (
                  <div
                    key={index}
                    className="w-full max-w-[520px] min-h-[96px] bg-white dark:bg-gray-900 border border-[#C12172] rounded-2xl px-5 py-5 flex items-center gap-5"
                  >

                    {/* ICON BOX */}
                    <div className="w-[56px] h-[56px] rounded-2xl bg-gradient-to-r from-[#C12172] to-[#782984] flex items-center justify-center flex-shrink-0">

                      <Image
                        src={item.icon}
                        alt={item.title}
                        width={24}
                        height={24}
                        className="object-contain"
                      />

                    </div>

                    {/* TEXT */}
                    <div>

                      <h4 className="text-[#718096] dark:text-white text-[13px] font-medium uppercase tracking-[0.5px] leading-[22px]">
                        {item.title}
                      </h4>

                      <p className="text-[#2D3748] dark:text-white text-[16px] md:text-[18px] font-semibold leading-[27px] mt-1">
                        {item.value}
                      </p>

                    </div>
                  </div>
                ))}

              </div>
            </div>

            {/* RIGHT SIDE FORM */}
            <ContactForm />

          </div>
        </div>
      </section>

     {/* ================= OFFICE LOCATIONS SECTION ================= */}

<section className="w-full bg-white dark:bg-gray-900 dark:text-white py-[80px] md:py-[50px]">

  <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-22">

    {/* TOP CONTENT */}
    <div className="flex flex-col items-center text-center">

      {/* LABEL */}
      <div className="px-5 py-2 rounded-full border border-[#F6D5EA] bg-[#FFF5FC] dark:bg-gray-900">

        <span className="text-[#C12172] text-[11px] md:text-[13px] font-semibold tracking-[1px] uppercase">
          OUR OFFICES
        </span>

      </div>

      {/* TITLE */}
      <h2 className="mt-5 text-[#2D3748] dark:text-white text-[34px] md:text-[42px] lg:text-[38px] font-semibold leading-tight">
        Visit Us
      </h2>

      {/* SUBTITLE */}
      <p className="mt-3 text-[#718096] dark:text-white text-[15px] md:text-[18px] leading-[28px]">
        Find our offices across the UK
      </p>

    </div>

    {/* OFFICE CARDS */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 mt-8">

      {offices.map((office, index) => (
        <div
          key={index}
          className="bg-white dark:bg-gray-900 border border-[#ECECEC] rounded-[28px] overflow-hidden"
        >

          {/* IMAGE */}
          <div className="relative">

            {/* DESKTOP IMAGE */}
            <Image
              src={office.desktopImage}
              alt={office.city}
              width={420}
              height={260}
              className="hidden lg:block w-full h-[250px] object-cover"
            />

            {/* MOBILE IMAGE */}
            <Image
              src={office.mobileImage}
              alt={office.city}
              width={420}
              height={260}
              className="block lg:hidden w-full h-[220px] object-cover"
            />

            {/* BADGE */}
            {office.badge && (
              <div className="absolute bottom-[-16px] left-1/2 -translate-x-1/2 bg-white dark:bg-gray-900 border border-[#ECECEC] rounded-full px-5 py-2">

                <span className="text-[#C12172]  text-[11px] font-semibold tracking-[0.8px] uppercase">
                  {office.badge}
                </span>

              </div>
            )}

          </div>

          {/* CONTENT */}
          <div className="px-6 lg:px-7 pt-8 pb-7">

            {/* CITY */}
            <h3 className="text-[#2D3748] dark:text-white text-[28px] lg:text-[32px] font-bold">
              {office.city}
            </h3>

            {/* DETAILS */}
            <div className="mt-6 space-y-5">

              {/* ADDRESS */}
              <div className="flex items-start gap-4">

                <Image
                  src="/image/icon (2).png"
                  alt="location"
                  width={20}
                  height={20}
                  className="mt-1 flex-shrink-0"
                />

                <p className="text-[#718096] dark:text-white text-[14px] leading-[24px]">
                  {office.address}
                </p>

              </div>

              {/* PHONE */}
              <div className="flex items-center gap-4">

                <Image
                  src="/image/icon1.png"
                  alt="phone"
                  width={20}
                  height={20}
                  className="flex-shrink-0"
                />

                <p className="text-[#718096] dark:text-white text-[14px]">
                  {/* <a href={`tel:${office.phone}`} className="hover:underline"> */}
                    {office.phone}
                  {/* </a> */}
                </p>

              </div>

              {/* EMAIL */}
              <div className="flex items-center gap-4">

                <Image
                  src="/image/icon2.png"
                  alt="mail"
                  width={20}
                  height={20}
                  className="flex-shrink-0"
                />

                <p className="text-[#718096] dark:text-white text-[14px] break-all">
                  {/* <a href={`mailto:${office.email}`} className="hover:underline"> */}
                    {office.email}
                  {/* </a> */}
                </p>

              </div>

            </div>

            {/* BUTTON */}
            <Link href={office.directionsLink} target="_blank" rel="noopener noreferrer">
              <button className="mt-7 flex items-center gap-2 text-[#C12172]  text-[15px] font-semibold">

              Get Directions →

              </button>
            </Link>

          </div>

        </div>
      ))}

    </div>

  </div>
</section>

<section className="w-full bg-[#F8F9FA] dark:bg-gray-900 dark:text-white py-[80px] md:py-[40px]">
  <div className="max-w-[1440px] mx-auto px-5 md:px-20">

    {/* Top Badge */}
    <div className="flex justify-center mb-4">
      <div className="bg-[#FFF4FD]  text-[#C12172] dark:bg-gray-900 text-[15px] font-semibold px-5 py-2 rounded-full uppercase tracking-wide">
        FAQs
      </div>
    </div>

    {/* Heading */}
    <h2 className="text-center text-[#2D3748] dark:text-white text-[34px] md:text-[38px] font-bold leading-tight mb-9">
      Common Questions
    </h2>

    {/* FAQ Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

      {/* Card 1 */}
      <div className="bg-white dark:bg-gray-900 border border-[#E2E8F0] rounded-[20px] p-8 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
        <h3 className="text-[#2D3748] dark:text-white text-[18px] font-semibold leading-[30px] mb-4">
          What services do you offer?
        </h3>

        <p className="text-[#718096] dark:text-white text-[16px] font-normal leading-[25px]">
          We offer comprehensive telecom solutions including EE Mobile plans,
          BT Broadband, IoT connectivity, VoIP services and enterprise business
          solutions.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-white dark:bg-gray-900 border border-[#E2E8F0] rounded-[20px] p-8 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
        <h3 className="text-[#2D3748] dark:text-white text-[18px] font-semibold leading-[30px] mb-4">
          How quickly can you set up service?
        </h3>

        <p className="text-[#718096] dark:text-white text-[16px] font-normal leading-[25px]">
          Most services can be activated within 24–48 hours. Complex enterprise
          solutions may take 3–5 business days depending on requirements.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-white dark:bg-gray-900 border border-[#E2E8F0] rounded-[20px] p-8 ">
        <h3 className="text-[#2D3748] dark:text-white text-[18px] font-semibold leading-[30px] mb-4">
          Do you offer 24/7 support?
        </h3>

        <p className="text-[#718096] dark:text-white text-[16px] font-normal leading-[25px]">
          Yes! Our customer support team is available 24/7 via phone, email and
          live chat to assist with any issues or questions.
        </p>
      </div>

      {/* Card 4 */}
      <div className="bg-white dark:bg-gray-900 border border-[#E2E8F0] rounded-[20px] p-8 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
        <h3 className="text-[#2D3748] dark:text-white text-[18px] font-semibold leading-[30px] mb-4">
          What are your payment terms?
        </h3>

        <p className="text-[#718096] dark:text-white text-[16px] font-normal leading-[25px]">
          We offer flexible payment options including monthly billing, annual
          contracts and custom payment plans for enterprise customers.
        </p>
      </div>

    </div>
  </div>
</section>

    </>
  );
}