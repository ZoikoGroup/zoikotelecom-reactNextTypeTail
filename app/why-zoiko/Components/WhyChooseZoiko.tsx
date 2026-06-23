import React from "react";
import Image from "next/image";

const features = [
  {
    src: "/Images/Whyzoiko/whyzoiko-card1.png",
    label: "Why Zoiko Broadband?",
    description:
      "We offer full fibre (FTTP) and SOGEA connections - tailored to what's available at your address.",
      badge: false,
  },
  {
    src: "/Images/Whyzoiko/whyzoiko-card2.png",
    label: "Transparent Pricing",
    description:
      "No hidden fees, no surprises. Choose from 12, 18, or 24-month options.",
    badge: false,
  },
  {
    src: "/Images/Whyzoiko/whyzoiko-card3.png",
    label: "UK-Based Customer Support",
    description:
      "Speak to real people who understand your needs - and get help when it matters.",
    badge: false,
  },
  {
    src: "/Images/Whyzoiko/whyzoiko-card4.png",
    label: "Designed for Modern Living",
    description:
      "Whether you're streaming, gaming, or working remotely, our network delivers.",
    badge: false,
  },
  {
    src: "/Images/Whyzoiko/whyzoiko-card5.png",
    label: "Hassle-Free Setup",
    description: "We make switching simple and installation fast.",
    badge: false,
  },
  {
    src: "/Images/Whyzoiko/whyzoiko-card6.png",
    label: "Future-Proof Performance",
    description: "Because your home deserves the best internet available.",
    badge: true,
  },
];

export default function WhyChooseZoiko() {
  return (
    <>
      <section
        className="bg-[#fafbff] dark:bg-gray-950 w-full py-12 px-5 sm:px-10 border-t border-gray-200 dark:border-gray-800"
        aria-labelledby="why-zoiko-features"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2
            id="why-zoiko-features"
            className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white"
          >
            Why Zoiko Broadband?
          </h2>

          {/* Feature List */}
          <ul className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {features.map((item) => (
              <li key={item.label}>
                <article className="bg-white dark:bg-gray-900 h-full rounded-2xl border border-gray-200 dark:border-gray-700 px-6 py-10 flex flex-col transition hover:shadow-xl dark:hover:bg-gray-800">
                  
                  {/* Icon */}
                  <Image
                    src={item.src}
                    alt=""
                    aria-hidden="true"
                    width={96}
                    height={96}
                    className="w-24 h-24 object-contain"
                  />

                  {/* Title */}
                  <h3 className="text-left text-lg font-semibold text-gray-900 dark:text-white mt-4">
                    {item.label}
                  </h3>

                  {/* Description */}
                  <p className="text-left text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-3 flex-1">
                    {item.description}
                  </p>

                  {item.badge && (
                    <p className="text-left bg-gradient-to-r from-[#0F3F63] to-[#5FA5DA] max-w-fit rounded-4xl text-white px-4 py-3 text-sm md:text-base text-white mt-4">
                      Up to 1Gbps
                    </p>
                  )}

                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}