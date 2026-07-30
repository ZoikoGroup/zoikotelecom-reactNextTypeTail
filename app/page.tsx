// app/page.tsx  (or components/Home/index.tsx)
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaCheck, FaStar } from "react-icons/fa";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leading Telecom Service Providers in UK | Zoiko Telecom ",
  description:
    "Leading Telecom Service Providers in UK | Zoiko Telecom",
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

export default function Home() {
  return (
    <div className="">
      {/* ─── HERO ───────────────────────────────────────────── */}
      <section className="relative min-h-[520px] overflow-hidden py-10 md:py-16 ">
      {/* Background image */}
      <Image
        src="/Images/Homepage/Hero-Section.webp"
        alt="hero-bg"
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-20 object-cover object-center"
      />
 
      {/* Dark overlay */}
      <div className="absolute inset-0 -z-10 bg-black/55 dark:bg-black/70" />
 
      {/* Pink gradient accent — top-right glow to hint the brand colour */}
      {/* <div className="pointer-events-none absolute -right-40 -top-40 -z-10 h-[500px] w-[500px] rounded-full bg-[#C12172]/20 blur-3xl" /> */}
 
      <div className="relative mx-auto max-w-[1320px] px-5 md:px-10">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">
 
          {/* ── Left Content ── */}
          <div className="text-white">
            <h1 className="text-2xl font-extrabold uppercase leading-[1.1] tracking-tight md:text-3xl lg:text-5xl">
              Empowering Your Digital
              <span className="block text-3xl md:text-5xl">Connections</span>
            </h1>
 
            <p className="mt-5 max-w-lg text-base leading-relaxed text-white/80 sm:text-lg lg:text-2xl">
              Lightning-fast broadband, seamless mobile connectivity, and
              enterprise solutions all under one roof with best-in-class
              customer service.
            </p>
 
            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/ee-mobile-plans" passHref>
                <button
                type="button"
                className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#C12172] shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl sm:px-8 sm:py-3.5 sm:text-base"
              >
                Explore Services
              </button>
              </Link>
              
              <Link href="/contact" passHref>
                <button
                  type="button"
                  className="rounded-full border-2 border-white px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-white hover:text-[#C12172] sm:px-8 sm:py-3.5 sm:text-base"
                >
                  Contact Us
                </button>
              </Link>
            </div>
 
            {/* Stats — flat, no card, matching screenshot */}
            <div className="mt-12 flex flex-wrap gap-x-10 gap-y-6 sm:gap-x-14">
              {[
                { value: "99.9%", label: "Uptime" },
                { value: "24/7",  label: "Support" },
                { value: "50K+",  label: "Happy Customers" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="text-2xl font-extrabold text-white sm:text-3xl">
                    {stat.value}
                  </span>
                  <span className="mt-0.5 text-xs font-medium text-white/70 sm:text-sm">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
 
          {/* ── Right: Hero Card with floating badges ── */}
          <div className="relative flex justify-center lg:justify-end">
 
            {/* Main card image */}
            <div className="relative w-full max-w-[340px] overflow-hidden rounded-3xl shadow-2xl sm:max-w-[400px] lg:max-w-[500px]">
              <Image
                src="/Images/Homepage/hero-card.webp"
                alt="Hero Card"
                width={800}
                height={500}
                priority
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
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

                <Link href={service.btnLink} passHref
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
    </div>
  );
}
