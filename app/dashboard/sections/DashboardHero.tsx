import React from "react";
import Image from "next/image";

const Items = [
  {
    src: "/Images/Dashboard/dash_icon1.png",
    label: "Current Plan",
    description: "Superfast 500",
  },
  {
    src: "/Images/Dashboard/dash_icon2.png",
    label: "Contract Ends",
    description: "14 Dec 2026",
  },
  {
    src: "/Images/Dashboard/dash_icon3.png",
    label: "Next Payment",
    description: "£29.99 on 14 Jan 2026",
  },
  {
    src: "/Images/Dashboard/dash_icon4.png",
    label: "Data Usage",
    description: "45.4 GB",
  },
];
const Items2 = [
  {
    title: "Uptime",
    description: "99.9%",
  },
  {
    title: "Avg Speed (Mbps)",
    description: "78.8",
  },
  {
    title: "Monthly Bill",
    description: "£34.90",
  },
  {
    title: "Months Remaining",
    description: "18",
  },
];
export default function DashboardHero() {
  return (
    <section className="w-full">

  {/* ── HERO SECTION ───────────────────────── */}
  <div className="bg-[#10446C] dark:bg-gray-900 text-white text-center md:text-left py-16 px-6 sm:px-8 lg:px-20 lg:py-20 transition-colors duration-300">

    <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold leading-relaxed">
      Welcome back, John
    </h2>

    <p className="mt-2 text-base md:text-xl text-white/90 dark:text-gray-300">
      Manage your Zoiko Broadband account with ease
    </p>

    <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {Items.map((item, i) => (
        <li key={i}>
          <article className="
            h-full px-6 py-4 flex items-center gap-4
            border border-[#f5c241]/40 dark:border-yellow-400/30
            bg-white/10 dark:bg-gray-800/60
            backdrop-blur-md
            text-white dark:text-gray-100
            rounded-2xl transition
          ">
            {/* Icon */}
            <div className="shrink-0">
              <Image
                src={item.src}
                alt={item.label}
                width={36}
                height={36}
                className="object-contain"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col border-l border-[#f5c241]/40 dark:border-yellow-400/30 pl-4">
              <p className="text-sm text-white/80 dark:text-gray-400">
                {item.label}
              </p>
              <p className="text-lg font-semibold text-[#f5c241] dark:text-yellow-400 leading-tight">
                {item.description}
              </p>
            </div>
          </article>
        </li>
      ))}
    </ul>
  </div>

  {/* ── STATS SECTION ───────────────────────── */}
  <div className="bg-white dark:bg-gray-800 text-center md:text-left py-8 px-6 sm:px-8 lg:px-20 lg:py-12 transition-colors duration-300">

    <ul className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {Items2.map((item, i) => (
        <li key={i}>
          <article className="
            h-full px-6 py-6 flex flex-col items-center justify-center gap-3
            border border-[#f5c241]/40 dark:border-yellow-400/30
            bg-[#fefbf4] dark:bg-gray-800
            rounded-2xl transition
          ">
            <p className="text-base md:text-3xl font-semibold text-[#10446C] dark:text-white">
              {item.description}
            </p>
            <p className="text-base md:text-lg font-medium text-[#666666] dark:text-gray-400 leading-tight">
              {item.title}
            </p>
          </article>
        </li>
      ))}
    </ul>

  </div>

</section>
  );
}
