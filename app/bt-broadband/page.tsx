"use client"
import {useState} from 'react'
import Image from "next/image";
import {  FaCheck } from "react-icons/fa";

// 
const durationTabs = [
  {
    label: "24 Months Plan",
    value: "24",
  },
  {
    label: "18 Months Plan",
    value: "18",
  },
  {
    label: "12 Months Plan",
    value: "12",
  },
];

const plans= [
  {
    name: "Z-Royal",
    data: "50GB",

    monthlyPrice: {
      "24": "£15.00/m",
      "18": "£18.00/m",
      "12": "£22.00/m",
    },

    features: [
      "No Long-Term Contracts",
      "Unlimited Data Pass Available",
      "Affordable & Competitive Pricing",
      "5G Ready SIMs",
      "Inclusive EU Roaming",
      "Exceptional Customer Support",
    ],
  },

  {
    name: "Super-Z",
    data: "100GB",

    monthlyPrice: {
      "24": "£23.00/m",
      "18": "£26.00/m",
      "12": "£30.00/m",
    },

    badge: "MOST POPULAR",

    features: [
      "No Long-Term Contracts",
      "Unlimited Data Options",
      "Affordable & Competitive Pricing",
      "5G Ready SIMs",
      "Inclusive EU Roaming",
      "Exceptional Customer Support",
    ],
  },

  {
    name: "Z-Unlimited",
    data: "Unlimited",

    monthlyPrice: {
      "24": "£29.00/m",
      "18": "£34.00/m",
      "12": "£39.00/m",
    },

    features: [
      "No Long-Term Contracts",
      "Lightning-Fast Options",
      "Affordable & Competitive Pricing",
      "5G Ready SIMs",
      "Inclusive EU Roaming",
      "Exceptional Customer Support",
    ],
  },
]

const benefits = [
  {
    title: "36 Month Contract",
    description: "Enjoy a fixed monthly rate that never goes up - a rare and valuable guarantee for a plan.",
  },
  {
    title: "18 Month Contract",
    description: "Lock in your broadband for just 18 months, with period promotions (also open your options).",
  },
  {
    title: "24 Months Contract",
    description: "Reliable long-term commitment period, minimizing your broadband service at a standard rate.",
  },
];

const benefits2 = [
  {
    title: "Refer a Friend",
    description:
      "Earn £50 credit when you refer a friend to Zoiko Telecom. Your friend will also receive a £50 discount on their first month’s bill.",
    icon: "/Images/BTBroadband/refer.png",
  },

  {
    title: "Price Lock Guarantee",
    description:
      "Enjoy guaranteed prices with no mid-contract price increases. If we introduce only one login by emailing a valid student ID.",
    icon: "/Images/BTBroadband/lock.png",
  },

  {
    title: "Loyalty Bonus",
    description:
      "Existing customers receive a 5% discount on all our monthly line access charges on any orders if months.",
    icon: "/Images/BTBroadband/bonus.png",
  },
];

const features =[
    {
        icon: "/Images/BTBroadband/download.png",
        title: "Unlimited Downloads",
        desc: "Enjoy unrestricted browsing, streaming and downloading with no data caps or limitations.",
    },
    {
        icon: "/Images/BTBroadband/support.png",
        title: "24/7 Support",
        desc: "Our dedicated support team is available round-the-clock to assist you with any concerns or queries.",
    },
    {
        icon: "/Images/BTBroadband/phone.png",
        title: "Easy Setup",
        desc: "Quick and easy installation process that gets you online in no time.",
    }
]

export default function page() {
  const [selectedDuration, setSelectedDuration] = useState<
    "24" | "18" | "12"
  >("24");

  return (
    <>
       {/* Hero Section */}
        <section className="bg-[#7B2983] dark:bg-[#3E1542] py-8 md:py-12">
            <div className="mx-auto max-w-5xl px-4 text-center">
    
    <h1
      className="
        text-white
        text-3xl
        font-bold
        leading-[1.1]
        tracking-tight
        md:text-5xl
        lg:text-6xl
      "
    >
      High-Speed Broadband
    </h1>

    <p
      className="
        mt-4
        font-semibold
        text-white
        text-lg
        md:text-2xl
      "
    >
      Only Deals from Zoiko Telecom
    </p>

    <p
      className="
        mt-6
        mx-auto
        max-w-4xl
        text-sm
        leading-relaxed
        text-white/90
        sm:text-base
        md:text-lg
      "
    >
      Discover Zoiko Telecom's extensive range of high-speed broadband only
      packages, designed to cater to every Residences Connectivity needs.
      Enjoy lightning-fast fibre optic speeds, unlimited downloads, and
      reliable connections that keep you connected to the digital world 24/7.
    </p>

            </div>
        </section>
       
       {/* Plans section */}
        <section className="bg-[#f8f6f8] dark:bg-[#0f1117] py-5 md:py-14">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center">
          <h2
            className="
              text-3xl
              md:text-4xl
              font-bold
              text-[#1d2b4f]
              dark:text-white
            "
          >
            Broadband Only Packages
          </h2>
        </div>

        {/* Duration Tabs */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {durationTabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() =>
                setSelectedDuration(tab.value as "24" | "18" | "12")
              }
              className={`
                rounded-full
                border
                px-5
                py-2.5
                text-sm
                md:text-base
                font-semibold
                transition-all
                duration-300

                ${
                  selectedDuration === tab.value
                    ? `
                      bg-[#c61b7f]
                      border-[#c61b7f]
                      text-white
                      shadow-lg
                      shadow-pink-500/20
                    `
                    : `
                      bg-white
                      dark:bg-[#181c25]
                      border-gray-300
                      dark:border-white/10
                      text-[#1d2b4f]
                      dark:text-gray-300
                      hover:border-pink-500
                    `
                }
              `}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Plans */}
        <div
          className="
            mt-14
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-3
            gap-8
          "
        >
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`
                relative
                rounded-[28px]
                border
                bg-white
                dark:bg-[#181c25]
                border-[#dfe3ea]
                dark:border-white/10
                p-8
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-2xl
                hover:shadow-pink-500/10

                ${
                  plan.badge
                    ? "ring-2 ring-pink-500 scale-[1.02]"
                    : ""
                }
              `}
            >
              {/* Badge */}
              {plan.badge && (
                <div
                  className="
                    absolute
                    -top-4
                    left-1/2
                    -translate-x-1/2
                  "
                >
                  <span
                    className="
                      rounded-full
                      bg-[#c61b7f]
                      px-4
                      py-1.5
                      text-[10px]
                      md:text-xs
                      font-semibold
                      text-white
                      shadow-lg
                    "
                  >
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Top Text */}
              <div className="text-center">
                <p
                  className="
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-[#8d8d9c]
                  "
                >
                  Powered By
                </p>

                <p
                  className="
                    mt-1
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-[#8d8d9c]
                  "
                >
                  EE'S AWARD-WINNING NETWORK
                </p>

                {/* Plan Name */}
                <h3
                  className="
                    mt-8
                    text-xl
                    sm:text-2xl
                    md:text-3xl
                    font-bold
                    text-[#c61b7f]
                  "
                >
                  {plan.name}
                </h3>

                {/* DATA */}
                <p
                  className="
                    mt-5
                    text-[11px]
                    uppercase
                    tracking-[0.2em]
                    text-[#8d8d9c]
                  "
                >
                  DATA
                </p>

                {/* Data Amount */}
                <h2
                  className="
                    mt-2
                    text-2xl
                    md:text-3xl
                    lg:text-5xl
                    font-extrabold
                    text-[#c61b7f]
                    break-words
                  "
                >
                  {plan.data}
                </h2>

                {/* Price */}
                <p
                  className="
                    mt-3
                    text-2xl
                    md:text-3xl
                    lg:text-4xl
                    font-semibold
                    text-[#1d2b4f]
                    dark:text-white
                  "
                >
                  {plan.monthlyPrice[selectedDuration]}
                </p>
              </div>

              {/* Features */}
              <div className="mt-8 space-y-4">
                {plan.features.map((feature, i) => (
                  <div
                    key={i}
                    className="
                      flex
                      items-start
                      gap-3
                      border-b
                      border-[#eceef3]
                      dark:border-white/10
                      pb-3
                    "
                  >
                    {/* SVG CHECK */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      className="
                        mt-1
                        h-4
                        w-4
                        flex-shrink-0
                        text-[#c61b7f]
                      "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>

                    <p
                      className="
                        text-sm
                        leading-relaxed
                        text-[#5f6470]
                        dark:text-gray-300
                      "
                    >
                      {feature}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <button
                className="
                  mt-8
                  w-full
                  rounded-full
                  bg-[#c61b7f]
                  py-2
                  text-sm
                  md:text-base
                  md:py-3
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:bg-[#b21771]
                  hover:shadow-lg
                  hover:shadow-pink-500/20
                "
              >
                Buy Now
              </button>
            </div>
          ))}
        </div>
            </div>
        </section>

        {/* Features section */}
        <section className="bg-[#f8f6f8] dark:bg-[#0f1117] py-5 md:py-14">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Cards */}
        <div
          className="
            mt-14
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-3
            gap-8
          "
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className={`
                relative
                rounded-[28px]
                border
                bg-white
                dark:bg-[#181c25]
                border-[#dfe3ea]
                dark:border-white/10
                p-8
                transition-all
                duration-300
                // hover:-translate-y-2
                hover:shadow-2xl
                hover:shadow-pink-500/10
              `}
            >
              {/* Top Text */}
              <div className="text-center">
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl  transition-colors group-hover:bg-[#C12172]/20 dark:bg-pink-400/10 dark:group-hover:bg-pink-400/20">
                                  <Image
                                    src={feature.icon}
                                    alt={feature.title}
                                    width={64}
                                    height={64}
                                    className="h-16 w-16 object-contain"
                                  />
                                </div>

                {/* Title */}
                <h3
                  className="
                    mt-2
                    text-lg
                    md:text-2xl
                    font-bold
                    text-[#c61b7f]
                  "
                >
                  {feature.title}
                </h3>

                {/* Description */}
                <p
                  className="
                    mt-3
                    text-base
                    md:text-lg
                    leading-relaxed
                    text-[#5f6470]
                    dark:text-gray-300
                    text-[#8d8d9c]
                  "
                >
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
            </div>
        </section>

        {/* Our guarantees */}
        <section className="bg-[#c61b7f] dark:bg-[#3E1542] py-8 md:py-16">
                <div className="mx-auto max-w-[1320px] px-5 md:px-10">
                  <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
                    {/* Left Content */}
                    <div className="relative">
                      <div className="overflow-hidden rounded-3xl shadow-2xl">
                        <Image
                          src="/Images/BTBroadband/speed-test.png"
                          alt="Speed Test"
                          width={500}
                          height={300}
                          priority
                          className="h-auto w-full"
                        />
                      </div>
                    </div>
        
                    {/* Right Image */}
                    <div>
                      <h2 className=" text-2xl font-bold text-white dark:text-white sm:text-3xl lg:text-4xl">
                        Our Guarantees
                      </h2>
                      <div className="mt-8 space-y-5">
                        {benefits.map((item) => (
                          <div key={item.title} className="flex items-start gap-4">
                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-[#c61b7f] dark:text-[#c61b7f]">
                              <FaCheck className="text-sm" />
                            </div>
                            <div>
                              <h4 className="text-base md:text-xl font-semibold text-white dark:text-white">
                                {item.title}
                              </h4>
                              <p className="mt-2 text-sm md:text-base text-white dark:text-white">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
        </section>

        {/*  */}
       <section className="bg-[#f6f6f7] dark:bg-[#0f1117] py-8 md:py-16">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    
    <div
      className="
        grid
        grid-cols-1
        md:grid-cols-2
        lg:grid-cols-3
        gap-5
      "
    >
      {benefits2.map((item, index) => (
        <div
          key={index}
          className="
            flex
            items-start
            gap-5
            rounded-[14px]
            border
            border-[#d8dee8]
            dark:border-white/10
            bg-white
            dark:bg-[#181c25]
            px-5
            py-5
            md:py-6
            transition-all
            duration-300
            hover:border-[#7B2983]
          "
        >
          {/* Icon */}
          <div
            className="
              flex
              h-9
              w-9
              flex-shrink-0
              items-center
              justify-center
              rounded-md
              bg-[#7B2983]
            "
          >
            <Image
              src={item.icon}
              alt={item.title}
              width={30}
              height={30}
              className="object-contain"
            />
          </div>

          {/* Content */}
          <div className="flex-1">
            <h3
              className="
                text-[20px]
                font-semibold
                leading-tight
                text-[#7B2983]
                dark:text-white
              "
            >
              {item.title}
            </h3>

            <p
              className="
                mt-2
                text-[15px]
                leading-7
                text-[#6b7280]
                dark:text-gray-300
              "
            >
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
        </section>
    </>
  )
}
