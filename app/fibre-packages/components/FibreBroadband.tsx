
import React from 'react'
import Image from "next/image";

const features = [
  {
    src: "/Images/Fibrepackage/wifi.png",
    label: "Fibre Broadband Plans",
    description:
      "From basic packages to lightning-fast gigabit connections, we have a range of broadband options to suit your needs and budget",
  },
  {
    src: "/Images/Fibrepackage/verified.png",
    label: "Reliable & Consistent",
    description:
      "With Zoiko Broadband, you can enjoy stable, high-speed internet that won't let you down",
  },
  {
    src: "/Images/Fibrepackage/bulb.png",
    label: "Tailored Solutions",
    description:
      "Whether you're a small business, a remote worker, or a household with heavy internet usage, Zoiko Broadband has a broadband package that's perfectly suited to your requirements",
  },
];

export default function FibreBroadband() {
  return (
    <section
      aria-labelledby="fibre-broadband-solutions-heading"
      className="bg-[#f5c241] text-[#10446C] dark:bg-gray-950 dark:text-white w-full py-16 px-6 sm:px-10"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2
          id="fibre-broadband-solutions-heading"
          className="text-2xl md:text-3xl font-semibold dark:bg-gray-950 dark:text-white"
        >
          Ultrafast Fibre Broadband Solutions for Your Home or Business
        </h2>

        <ul className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((item) => (
            <li key={item.label}>
              <article className="flex flex-col items-center text-center dark:bg-gray-950 text-[#10446C] dark:text-white px-4 hover:-translate-y-1 transition-transform duration-300">
                <Image
                  src={item.src}
                  alt=""
                  aria-hidden="true"
                  width={80}
                  height={80}
                  className="w-16 h-16 md:w-20 md:h-20 object-contain dark:bg-gray-950 dark:text-white"
                />

                <h3 className="text-lg md:text-xl font-bold mt-5 dark:bg-gray-950 dark:text-white">
                  {item.label}
                </h3>

                <p className="text-sm md:text-base leading-relaxed mt-3 max-w-xs dark:bg-gray-950 dark:text-white">
                  {item.description}
                </p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
