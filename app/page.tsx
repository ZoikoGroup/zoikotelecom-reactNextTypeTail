// app/page.tsx  (or components/Home/index.tsx)
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaCheck, FaStar } from "react-icons/fa";
import type { Metadata } from "next";

import {
  ChevronRight,
  Cloud,
  Laptop,
  MapPin,
  Network,
  Phone,
  Smartphone,
  Wifi,
  type LucideIcon,
} from "lucide-react";
import HomeClientWrapper from "./Components/HomeClientWrapper";

const homepageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://zoikotelecom.com/#organization",
      name: "Zoiko Telecom Ltd",
      url: "https://zoikotelecom.com/",
    },
    {
      "@type": "WebSite",
      "@id": "https://zoikotelecom.com/#website",
      name: "Zoiko Telecom",
      url: "https://zoikotelecom.com/",
      publisher: {
        "@id": "https://zoikotelecom.com/#organization",
      },
    },
    {
      "@type": "WebPage",
      "@id": "https://zoikotelecom.com/#webpage",
      url: "https://zoikotelecom.com/",
      name: "Zoiko Telecom | UK Telecoms Provider",
      isPartOf: {
        "@id": "https://zoikotelecom.com/#website",
      },
      about: {
        "@id": "https://zoikotelecom.com/#organization",
      },
    },
  ],
};

export const metadata: Metadata = {
  title: "Leading Telecom Services Provider UK | Zoiko Telecom",
  description:
    "Zoiko Telecom, a leading telecom services provider, delivers fast broadband, EE SIM plans, VoIP, and IoT solutions tailored for home and business users.",
  verification: {
    google: "43qQmyFkZminjSsB7aQVoirVS_cJIxJWuSiLtLWY3s4",
  },
};

type Feature = {
  title: string;
  description: string;
};

type Testimonial = {
  review: string;
  name: string;
  role: string;
};

const services = [
  {
    icon: "/Images/Homepage/broadband.png",
    title: "BT Broadband",
    description:
      "Ultra-fast fibre broadband with speeds up to 1Gbps. Unlimited data, 24/7 support.",
    button: "Learn More",
    btnLink: "/bt-broadband",
  },
  {
    icon: "/Images/Homepage/mobile.png",
    title: "EE Mobile",
    description:
      "Premium EE SIM plans with unlimited calls, texts, and high-speed data.",
    button: "View Plans",
    btnLink: "/ee-mobile-plans",
  },
  {
    icon: "/Images/Homepage/landline.png",
    title: "Landlines",
    description:
      "Crystal-clear business communications. Easy setup, flexible plans, global reach.",
    button: "Discover",
    btnLink: "/landlines",
  },
  {
    icon: "/Images/Homepage/business.png",
    title: "Business Solutions",
    description:
      "Dedicated internet, cloud hosting, and enterprise-grade infrastructure.",
    button: "Explore",
    btnLink: "/business-solutions",
  },
  {
    icon: "/Images/Homepage/iot.png",
    title: "IoT Services",
    description:
      "Global M2M connectivity for smart devices. Save up to 20% on IoT SIM cards.",
    button: "Get Started",
    btnLink: "/iot-services",
  },
  {
    icon: "/Images/Homepage/support.png",
    title: "24/7 Support",
    description:
      "Round-the-clock customer service with live chat, phone, and email support.",
    button: "Contact Us",
    btnLink: "/contact",
  },
];

const features: Feature[] = [
  {
    title: "Unmatched Reliability",
    description: "99.9% uptime guarantee with redundant systems",
  },
  {
    title: "Complete Service Portfolio",
    description: "All your communication needs under one roof",
  },
  {
    title: "Strategic Partnerships",
    description: "Authorized reseller for EE, BT, and major networks",
  },
  {
    title: "Scalable Solutions",
    description: "From home users to enterprise deployments",
  },
];

const testimonials: Testimonial[] = [
  {
    review:
      "Switched to Zoiko for our business broadband - the speed and reliability are exceptional. Customer service is top-notch!",
    name: "James Mitchell",
    role: "Tech Director",
  },
  {
    review:
      "The EE SIM plans are perfect for our remote team. Great coverage and competitive pricing.",
    name: "Sarah Peters",
    role: "Operations Manager",
  },
  {
    review:
      "IoT connectivity for our smart devices works flawlessly across multiple countries. Highly recommend!",
    name: "Rajesh Kumar",
    role: "CTO, IoT Solutions",
  },
];

type HeroService = {
  label: string;
  href: string;
  icon: LucideIcon;
  ring: string;
};

const HERO_SERVICES: readonly HeroService[] = [
  {
    label: "Mobile",
    href: "/mobile",
    icon: Smartphone,
    ring: "border-[#ff2e93] shadow-[0_0_14px_rgba(255,46,147,0.55)]",
  },
  {
    label: "Broadband",
    href: "/broadband",
    icon: Wifi,
    ring: "border-[#3b82f6] shadow-[0_0_14px_rgba(59,130,246,0.6)]",
  },
  {
    label: "Landlines & Voice",
    href: "/landlines",
    icon: Phone,
    ring: "border-[#a855f7] shadow-[0_0_14px_rgba(168,85,247,0.6)]",
  },
  {
    label: "Business Solutions",
    href: "/business",
    icon: Cloud,
    ring: "border-[#3b82f6] shadow-[0_0_14px_rgba(59,130,246,0.6)]",
  },
  {
    label: "IoT & Connectivity",
    href: "/iot",
    icon: Network,
    ring: "border-[#ff2e93] shadow-[0_0_14px_rgba(255,46,147,0.55)]",
  },
  {
    label: "Devices",
    href: "/devices",
    icon: Laptop,
    ring: "border-[#3b82f6] shadow-[0_0_14px_rgba(59,130,246,0.6)]",
  },
] as const;

export default function Home() {
  return (
    <HomeClientWrapper>
      <div className="">
        {/* ─── HERO ───────────────────────────────────────────── */}
        <section className="relative min-h-[600px] w-full overflow-hidden bg-[#0b1040] text-white lg:min-h-[640px]">
          <Image
            src="/Images/Homepage/background.png"
            alt="hero image"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[70%_center]"
          />

          {/* Left readability gradient (mobile stronger) */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-[#0b1040]/80 via-[#0b1040]/30 to-transparent lg:from-[#0b1040]/40 lg:via-transparent"
          />
          {/* Bottom fade */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0b1040]/90 to-transparent"
          />

          <div className="relative mx-auto flex min-h-[600px] max-w-[1360px] flex-col justify-between px-5 pb-6 pt-12 md:px-10 lg:min-h-[640px] lg:pt-16">
            <div className="flex max-w-[520px] gap-5">
              <span
                aria-hidden="true"
                className="w-1 shrink-0 self-stretch rounded-full max-h-47 bg-gradient-to-b from-[#ff2e93] to-[#c12172]"
              />

              <div>
                <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
                  The UK&rsquo;s
                  <span className="block">Connected</span>
                  <span className="block font-medium italic text-[#ff2e93]">
                    Lifestyle
                  </span>
                </h1>

                <p className="mt-6 max-w-[430px] text-base leading-7 text-white/95 sm:text-lg">
                  Mobile, broadband, landlines and smart connectivity for homes,
                  businesses and a more connected UK.
                </p>

                <div className="mt-8 flex flex-col items-start gap-4">
                  <Link
                    href="/ee-mobile-plans"
                    className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#e6007e] to-[#c12172] px-8 py-3.5 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(230,0,126,0.4)] transition-opacity hover:opacity-95 sm:text-base"
                  >
                    Explore Our Services
                    <ChevronRight className="h-4 w-4" aria-hidden="true" />
                  </Link>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2.5 rounded-full border border-white/60 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/15 sm:text-base"
                  >
                    <MapPin className="h-4 w-4" aria-hidden="true" />
                    Check Availability
                  </Link>
                </div>
              </div>
            </div>

            {/* Services strip */}
            <nav
              aria-label="Services"
              className="mt-12 border-t border-white/10 pt-5"
            >
              <ul className="grid grid-cols-2 gap-y-4 sm:grid-cols-3 lg:grid-cols-6 lg:gap-y-0">
                {HERO_SERVICES.map((service) => {
                  const Icon = service.icon;
                  return (
                    <li
                      key={service.label}
                      className="lg:border-l lg:border-white/20 lg:first:border-l-0"
                    >
                      <Link
                        href={service.href}
                        className="flex items-center gap-3 px-2 py-1 text-sm font-semibold leading-5 text-white lg:justify-center lg:px-3"
                      >
                        <span
                          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border-2 bg-[#0b1040]/60 ${service.ring}`}
                        >
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </span>
                        <span className="max-w-[110px]">{service.label}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </section>

        {/* ─── SERVICES ───────────────────────────────────────── */}
        <section className="bg-neutral-50 py-20 dark:bg-neutral-900 lg:py-28">
          <div className="mx-auto max-w-[1320px] px-5">
            {/* Heading */}
            <div className="mx-auto mb-14 max-w-2xl text-center">
              <span className="text-sm font-bold uppercase tracking-[0.15em] text-[#C12172] dark:text-pink-400">
                Our Services
              </span>
              <h2 className="mt-3 text-3xl font-bold text-neutral-900 dark:text-white sm:text-4xl lg:text-5xl">
                Complete Connectivity Solutions
              </h2>
              <p className="mt-4 text-base text-neutral-600 dark:text-neutral-400">
                Everything you need for seamless digital communication
              </p>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="group rounded-3xl border border-neutral-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#C12172]/30 hover:shadow-xl dark:border-neutral-700 dark:bg-neutral-800 dark:hover:border-pink-400/40"
                >
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[#C12172]/10 transition-colors group-hover:bg-[#C12172]/20 dark:bg-pink-400/10 dark:group-hover:bg-pink-400/20">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={64}
                      height={64}
                      className="h-16 w-16 object-contain"
                    />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-neutral-900 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="mb-6 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                    {service.description}
                  </p>

                  <Link
                    href={service.btnLink}
                    passHref
                    type="button"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#C12172] transition-all hover:gap-3 dark:text-pink-400"
                  >
                    {service.button}
                    <FaArrowRight className="text-xs" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── WHY CHOOSE ZOIKO ───────────────────────────────── */}
        <section className="bg-white py-20 dark:bg-neutral-950 lg:py-28">
          <div className="mx-auto max-w-[1320px] px-5">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
              {/* Left Content */}
              <div>
                <span className="text-sm font-bold uppercase tracking-[0.15em] text-[#C12172] dark:text-pink-400">
                  Why Choose Zoiko
                </span>
                <h2 className="mt-3 text-3xl font-bold text-neutral-900 dark:text-white sm:text-4xl lg:text-5xl">
                  Your Trusted Connectivity
                  <span className="block text-[#C12172] dark:text-pink-400">
                    Partner
                  </span>
                </h2>
                <p className="mt-4 text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
                  We deliver comprehensive telecom solutions backed by
                  cutting-edge infrastructure and exceptional service.
                </p>

                <div className="mt-8 space-y-5">
                  {features.map((item) => (
                    <div key={item.title} className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#C12172] text-white dark:bg-pink-500">
                        <FaCheck className="text-sm" />
                      </div>
                      <div>
                        <h4 className="text-base md:text-lg font-semibold text-neutral-900 dark:text-white">
                          {item.title}
                        </h4>
                        <p className="mt-1 text-sm md:text-base text-neutral-600 dark:text-neutral-400">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <Link href="/ee-mobile-plans" passHref>
                  <button
                    type="button"
                    className="mt-8 rounded-full bg-[#C12172] px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-[#C12172]/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#a01a60] hover:shadow-xl dark:bg-pink-500 dark:shadow-pink-500/30 dark:hover:bg-pink-600"
                  >
                    Get Started Today
                  </button>
                </Link>
              </div>

              {/* Right Image */}
              <div className="relative">
                <div className="overflow-hidden rounded-3xl shadow-2xl">
                  <Image
                    src="/Images/Homepage/Why-Choose-Zoiko.webp"
                    alt="Trusted Telecom"
                    width={600}
                    height={400}
                    priority
                    className="h-auto w-full"
                    // placeholder="blur"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── CTA ────────────────────────────────────────────── */}
        <section className="bg-neutral-50 py-20 dark:bg-neutral-900 lg:py-24">
          <div className="mx-auto max-w-[1320px] px-5">
            <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#C12172] via-[#a01a60] to-[#7b2d8b] px-6 py-14 text-center sm:px-12 sm:py-20">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(255,255,255,0.15),_transparent_60%)]" />

              <div className="relative mx-auto max-w-2xl">
                <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                  Ready to Transform Your Connectivity?
                </h2>
                <p className="mt-4 text-base text-white/90 sm:text-lg">
                  Join thousands of satisfied customers enjoying seamless
                  digital experiences.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <Link href="/ee-mobile-plans" passHref>
                    <button
                      type="button"
                      className="rounded-full bg-white px-8 py-3.5 text-base font-semibold text-[#C12172] shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                    >
                      Get Started
                    </button>
                  </Link>
                  <Link href="/ee-mobile-plans" passHref>
                    <button
                      type="button"
                      className="rounded-full border-2 border-white px-8 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:bg-white hover:text-[#C12172]"
                    >
                      View All Services
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── TESTIMONIALS ───────────────────────────────────── */}
        <section className="bg-white py-20 dark:bg-neutral-950 lg:py-28">
          <div className="mx-auto max-w-[1320px] px-5">
            <div className="mx-auto mb-14 max-w-2xl text-center">
              <span className="text-sm font-bold uppercase tracking-[0.15em] text-[#C12172] dark:text-pink-400">
                Testimonials
              </span>
              <h2 className="mt-3 text-3xl font-bold text-neutral-900 dark:text-white sm:text-4xl lg:text-5xl">
                Trusted by Thousands
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
              {testimonials.map((item) => (
                <div
                  key={item.name}
                  className="rounded-3xl border border-neutral-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-neutral-700 dark:bg-neutral-800"
                >
                  <div className="mb-4 flex gap-1 text-yellow-400">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <p className="mb-6 text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
                    &ldquo;{item.review}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 shrink-0 rounded-full bg-gradient-to-br from-[#C12172] to-[#7b2d8b]" />
                    <div>
                      <h4 className="font-semibold text-neutral-900 dark:text-white">
                        {item.name}
                      </h4>
                      <span className="text-sm text-neutral-500 dark:text-neutral-400">
                        {item.role}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── FAQ / AEO & GEO ANSWER BLOCKS ─────────────────── */}
        <section className="bg-neutral-50 py-20 dark:bg-neutral-900 lg:py-28">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageSchema) }}
          />
          <div className="mx-auto max-w-[1320px] px-5">
            <div className="mx-auto mb-14 max-w-2xl text-center">
              <span className="text-sm font-bold uppercase tracking-[0.15em] text-[#C12172] dark:text-pink-400">
                FAQs
              </span>
              <h2 className="mt-3 text-3xl font-bold text-neutral-900 dark:text-white sm:text-4xl lg:text-5xl">
                Frequently Asked Questions
              </h2>
              <p className="mt-4 text-base text-neutral-600 dark:text-neutral-400">
                Clear answers about Zoiko Telecom services, partner networks,
                and connectivity solutions across the UK.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <section className="aeo-answer-block rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#C12172] hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900 sm:p-7">
                <h2 className="mb-2 text-lg font-bold text-neutral-900 dark:text-white sm:text-xl">
                  What is Zoiko Telecom?
                </h2>
                <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-300 sm:text-base">
                  Zoiko Telecom is a UK telecoms provider offering broadband,
                  mobile connectivity, landlines, VoIP, IoT connectivity and
                  business communication solutions for individuals and
                  organisations.
                </p>
              </section>

              <section className="aeo-answer-block rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#C12172] hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900 sm:p-7">
                <h2 className="mb-2 text-lg font-bold text-neutral-900 dark:text-white sm:text-xl">
                  What does Zoiko Telecom do?
                </h2>
                <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-300 sm:text-base">
                  Zoiko Telecom provides connectivity and communications
                  services including EE Mobile plans, BT Broadband, landlines,
                  VoIP solutions, IoT connectivity and business-focused telecoms
                  services.
                </p>
              </section>

              <section className="aeo-answer-block rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#C12172] hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900 sm:p-7">
                <h2 className="mb-2 text-lg font-bold text-neutral-900 dark:text-white sm:text-xl">
                  Who is Zoiko Telecom for?
                </h2>
                <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-300 sm:text-base">
                  Zoiko Telecom serves home users, mobile customers, remote
                  workers, small and medium-sized businesses, enterprises and
                  organisations requiring connectivity or communications
                  services.
                </p>
              </section>

              <section className="geo-answer-block rounded-2xl border border-neutral-200 border-l-4 border-l-[#C12172] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md dark:border-neutral-800 dark:border-l-pink-400 dark:bg-neutral-900 sm:p-7">
                <h2 className="mb-2 text-lg font-bold text-neutral-900 dark:text-white sm:text-xl">
                  Why use Zoiko Telecom?
                </h2>
                <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-300 sm:text-base">
                  Zoiko Telecom brings broadband, mobile, landline, VoIP, IoT
                  and business connectivity services together within one broader
                  UK telecoms portfolio, supported by partner networks and
                  customer service.
                </p>
              </section>
            </div>
          </div>
        </section>
      </div>
    </HomeClientWrapper>
  );
}
