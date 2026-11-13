"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import ContactForm from "./ContactForm";
import Link from "next/link";
import { ArrowRight, Clock, Headset, Mail, MapPin, Phone } from "lucide-react";

// Opening hours: Mon–Fri, 09:00–18:00 UK time.
function isOpenNowInUK(date = new Date()): boolean {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/London",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date);
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "";
  const weekday = get("weekday");
  const minutes = Number(get("hour")) * 60 + Number(get("minute"));
  const isWeekday = !["Sat", "Sun"].includes(weekday);
  return isWeekday && minutes >= 9 * 60 && minutes < 18 * 60;
}

/** Live "Open now / Closed now" pill — computed on the client only to avoid hydration mismatch. */
function OpeningStatus() {
  const [open, setOpen] = useState<boolean | null>(null);

  useEffect(() => {
    const update = () => setOpen(isOpenNowInUK());
    update();
    const id = window.setInterval(update, 60_000);
    return () => window.clearInterval(id);
  }, []);

  if (open === null) return <span className="mt-1 block h-[18px]" aria-hidden="true" />;

  return open ? (
    <span className="mt-1 flex items-center gap-1.5 whitespace-nowrap text-[12.5px] font-semibold sm:text-[13px] text-emerald-600">
      <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden="true" />
      Open now · we&apos;re ready to help
    </span>
  ) : (
    <span className="mt-1 flex items-center gap-1.5 whitespace-nowrap text-[12.5px] font-semibold sm:text-[13px] text-[#B5530C]">
      <span className="h-2 w-2 rounded-full bg-[#B5530C]" aria-hidden="true" />
      Closed now · leave an enquiry any time
    </span>
  );
}

export default function ContactSection() {

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

      <section
        aria-labelledby="contact-heading"
        className="relative w-full overflow-hidden bg-[#0B0C4A] text-white"
      >
        {/* HERO IMAGE — banner on small screens, full background on xl+ */}
        <div className="relative h-[230px] w-full sm:h-[340px] md:h-[400px] lg:absolute lg:inset-x-0 lg:top-0 lg:h-[780px]">
          <Image
            src="/Images/Contact/contact-hero-support-agent.webp"
            alt="Smiling Zoiko Telecom support agent wearing a headset, with the London skyline at twilight"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[left_center]"
          />
          {/* Fade into the navy page background */}
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-[#0B0C4A] lg:h-40" aria-hidden="true" />
          {/* On smaller laptops the copy overlaps the photo — darken the left side for readability */}
          <div
            className="absolute inset-0 hidden bg-gradient-to-r from-[#0B0C4A]/70 via-[#0B0C4A]/25 to-transparent lg:block xl:hidden"
            aria-hidden="true"
          />
        </div>

        {/* CONTENT */}
        <div className="relative z-10 mx-auto max-w-[1488px] px-4 pb-14 sm:px-6 lg:px-10 lg:pb-20 lg:pt-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_460px] lg:gap-8 xl:grid-cols-[minmax(0,1fr)_480px] xl:gap-10 2xl:grid-cols-[minmax(0,1fr)_570px]">
            {/* LEFT SIDE — left padding keeps the copy clear of the agent in the photo */}
            <div className="-mt-6 sm:-mt-10 lg:mt-0 lg:flex lg:flex-col lg:justify-center lg:pl-[clamp(40px,calc(100vw-960px),340px)]">
             {/* Container so the heading can size itself to the column width */}
             <div className="@container">
              <p className="flex items-center gap-3 text-[13px] font-bold uppercase tracking-[0.12em] text-white sm:text-[15px]">
                <span className="h-6 w-[3px] rounded-full bg-[#EC1C8C]" aria-hidden="true" />
                We&apos;re here to help
              </p>

              {/* Always exactly two lines, as in the design */}
              <h1
                id="contact-heading"
                className="mt-3 text-[clamp(34px,12cqw,64px)] font-bold leading-[1.05] tracking-[-0.025em]"
              >
                <span className="block whitespace-nowrap">Let&apos;s get</span>
                <span className="block whitespace-nowrap">
                  you <span className="text-[#F0218F]">connected</span>.
                </span>
              </h1>

              <p className="mt-5 max-w-[400px] text-[16px] leading-[1.65] text-white/90 sm:text-[17px]">
                Questions about mobile, broadband, landlines or business connectivity? Our team is here to help.
              </p>

              {/* CONTACT CARDS */}
              <ul className="mt-7 flex w-full max-w-[400px] flex-col gap-3.5">
                <li>
                  <a
                    href="tel:+442071646399"
                    className="group flex items-center gap-4 rounded-2xl bg-white/95 px-4 py-3.5 text-[#141640] sm:px-5 shadow-lg shadow-black/10 transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#EC1C8C]/40"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FCE7F2] text-[#D81B7E]">
                      <Phone className="h-[22px] w-[22px]" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-[15px] font-medium leading-snug">Call us</span>
                      <span className="block whitespace-nowrap text-[18px] font-bold leading-tight 2xl:text-[20px]">+44 207 164 6399</span>
                    </span>
                  </a>
                </li>

                <li>
                  <a
                    href="mailto:info@zoikotelecom.com"
                    className="group flex items-center gap-4 rounded-2xl bg-white/95 px-4 py-3.5 text-[#141640] sm:px-5 shadow-lg shadow-black/10 transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#EC1C8C]/40"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FCE7F2] text-[#D81B7E]">
                      <Mail className="h-[22px] w-[22px]" aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[15px] font-medium leading-snug">Email us</span>
                      <span className="block whitespace-nowrap text-[18px] font-bold leading-tight 2xl:text-[20px]">info@zoikotelecom.com</span>
                    </span>
                  </a>
                </li>

                <li className="flex items-center gap-4 rounded-2xl bg-white/95 px-4 py-3.5 text-[#141640] sm:px-5 shadow-lg shadow-black/10">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FCE7F2] text-[#D81B7E]">
                    <Clock className="h-[22px] w-[22px]" aria-hidden="true" />
                  </span>
                  {/* Exactly three lines: title / hours / live status */}
                  <span className="min-w-0">
                    <span className="block text-[15px] font-medium leading-snug">Opening hours</span>
                    <span className="block whitespace-nowrap text-[15px] leading-snug sm:text-[16px]">
                      <strong className="font-bold">Mon – Fri: 09:00 – 18:00</strong> (UK time)
                    </span>
                    <OpeningStatus />
                  </span>
                </li>
              </ul>

              {/* HELP CENTRE */}
              <Link
                href="/faqs"
                className="group mt-8 inline-flex items-center gap-3 border-b-2 border-[#EC1C8C] pb-2 text-[19px] font-bold text-white sm:text-[21px]"
              >
                <Headset className="h-7 w-7" strokeWidth={1.8} aria-hidden="true" />
                Visit our Help Centre
                <ArrowRight
                  className="h-5 w-5 text-[#F0218F] transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>

              {/* HEADQUARTERS */}
              <div className="mt-7 flex max-w-[440px] items-start gap-4 border-t border-white/15 pt-6">
                <MapPin className="mt-0.5 h-6 w-6 shrink-0" aria-hidden="true" />
                <address className="not-italic">
                  <span className="block text-[18px] font-bold">UK Headquarters</span>
                  <span className="mt-1 block text-[16px] leading-relaxed text-white/90">
                    167–169 Great Portland Street, 5th Floor,
                    <br />
                    London W1W 5PF, United Kingdom
                  </span>
                </address>
              </div>
             </div>
            </div>

            {/* RIGHT SIDE FORM */}
            <div className="lg:h-full">
              <ContactForm />
            </div>
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