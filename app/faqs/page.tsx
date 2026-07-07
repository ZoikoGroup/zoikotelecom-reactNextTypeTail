"use client"
import {useState} from 'react'
import Image from "next/image";
import Link from 'next/link';

const categories = [
  {
    id: "plans",
    label: "eSIM & Mobile Plans",
  },
  {
    id: "broadband",
    label: "Broadband & Fibre",
  },
  {
    id: "business",
    label: "Business Solutions",
  },
  {
    id: "billing",
    label: "Billing & Payments",
  },
  {
    id: "account",
    label: "Account Management",
  },
  {
    id: "general",
    label: "General Questions",
  },
];

const faqData = [
  {
    id: "plans",
    title: "eSIM & Mobile Plans",
    items: [
      {
        question: "What is an eSIM?",
        answer:
          "An eSIM (embedded SIM) is a digital SIM that allows you to activate a mobile plan without having to use a physical SIM card.",
      },
      {
        question: "How do I activate my eSIM?",
        answer:
          "Once you purchase a plan, you will receive a QR code via email. Simply scan the QR code with your eSIM-compatible device to activate your plan.",
      },
      {
        question: "Can I switch between multiple plans?",
        answer:
          "Yes, you can switch between different eSIM plans. Contact our customer service to make any changes to your plan.",
      },
       {
        question: "What devices are compatible with eSIM?",
        answer:
          "Most modern smartphones, tablets, and smartwatches support eSIM. Check your device’s specifications to ensure compatibility.",
      },
       {
        question: "Can I use my eSIM while travelling abroad?",
        answer:
          "Yes, you can use your eSIM while travelling. Each plan includes a certain amount of roaming data. Check your plan details for more information.",
      },
    ],
  },

  {
    id: "broadband",
    title: "Broadband & Fibre",
    items: [
      {
        question: "What broadband speeds do you offer?",
        answer:
          "We offer fibre broadband speeds suitable for streaming, gaming, and business use.",
      },
      {
        question: "Do you offer installation?",
        answer:
          "Yes, professional installation is available for selected plans.",
      },
      {
        question: "Is there a data cap on your broadband plans?",
        answer:
          "Yes, some of our broadband plans may have data caps. Please check the details of each plan for more information.",
      }
    ],
  },

  {
    id: "business",
    title: "Business Solutions",
    items: [
      {
        question: "What business services do you offer?",
        answer:
          "We offer a range of business solutions including mobile plans, broadband, and unified communications.",
      },
      {
        question: "Can I customize a business package?",
        answer:
          "Yes, we can tailor a business package to meet your specific needs. Contact our sales team for more information.",
      },
      {
        question: "What is your uptime guarantee?",
        answer:
          "We guarantee 99.9% uptime for our services.",
      }
    ],
  },

  {
    id: "billing",
    title: "Billing & Payments",
    items: [
      {
        question: "What payment methods are supported?",
        answer:
          "We accept debit cards, credit cards, and selected digital wallets.",
      },
      {
        question: "When will I be charged?",
        answer:
          "You will be charged at the beginning of each billing cycle.",
      },
      {
        question: "Can I change my payment method?",
        answer:
          "Yes, payment methods can be updated anytime from account settings.",
      }
    ],
  },

  {
    id: "account",
    title: "Account Management",
    items: [
      {
        question: "How do I access my account?",
        answer:
          "You can access your account through our website or mobile app using your registered email and password.",
      },
      {
        question: "How do I update my personal information?",
        answer:
          "You can update your personal information from your account settings.",
      },
      {
        question: "Can I manage multiple services in one account?",
        answer:
          "Yes, you can manage multiple services in one account.",
      }
    ],
  },

  {
    id: "general",
    title: "General Questions",
    items: [
      {
        question: "How can I contact customer support?",
        answer:
          "Our support team is available via email, chat, and phone.",
      },
      {
        question: "Do you offer service in my area?",
        answer:
          "We currently offer our services in [Area]. Check our website for the most up-to-date coverage information.",
      },
      {
        question: "What is your cancellation policy?",
        answer:
          "You can cancel your service at any time. Please refer to your agreement for specific terms and conditions.",
      }
    ],
  },
];

export default function page() {
  const [activeCategory, setActiveCategory] = useState("plans");
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenItem(openItem === id ? null : id);
  };
  return (
    <>
      {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#C12172] to-[#782984] dark:bg-gradient-to-r dark:from-[#3E1542] dark:to-[#7B2983] py-8 md:py-16">
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
      Frequently Asked Questions
            </h1>

            <p
      className="
        mt-5
        font-semibold
        text-white
        text-lg
        md:text-2xl
      "
    >
      Find answers to common questions about our services
            </p>
            </div>
        </section>

        {/* FAQ Content */}
        <section className="bg-[#f7f5f8] dark:bg-[#0f1117] py-8 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
          
          {/* SIDEBAR */}
          <aside className="space-y-6">
            
            {/* Categories */}
            <div
              className="
                rounded-2xl
                border
                border-[#e1d8e8]
                dark:border-white/10
                bg-white
                dark:bg-[#181c25]
                p-4
              "
            >
              <h3
                className="
                  mb-4
                  text-sm
                  md:text-base
                  font-bold
                  uppercase
                  tracking-wide
                  text-[#1d2b4f]
                  dark:text-white
                "
              >
                Categories
              </h3>

              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => {
                        setActiveCategory(category.id);

                        document
                            .getElementById(category.id)
                            ?.scrollIntoView({
                             behavior: "smooth",
                             block: "start",
                            });
                        }}
                    className={`
                      w-full
                      rounded-lg
                      border
                      px-4
                      py-3
                      text-left
                      text-sm
                      md:text-base
                      font-semibold
                      transition-all
                      duration-300

                      ${
                        activeCategory === category.id
                          ? `
                            border-[#7B2983]
                            bg-[#7B2983]
                            text-white
                          `
                          : `
                            border-[#ececf1]
                            dark:border-white/10
                            bg-white
                            dark:bg-[#181c25]
                            text-[#4b5563]
                            dark:text-gray-300
                            hover:border-[#7B2983]
                          `
                      }
                    `}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>

            {/* SUPPORT CARD */}
            <div
              className="
                rounded-2xl
                bg-[#7B2983]
                p-5
                text-center
                text-white
              "
            >
              <div className="flex justify-center">
                <div
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    bg-white
                  "
                >
                  <Image
                    src="/Images/BTBroadband/support.png"
                    alt="support"
                    width={42}
                    height={42}
                  />
                </div>
              </div>

              <h4 className="mt-4 text-lg font-semibold">
                Need More Help?
              </h4>

              <p className="mt-2 mb-3 text-sm text-white/80">
                Contact our support team anytime for assistance.
              </p>

              <Link
                href="#"
                className="
                  mt-5
                  rounded-full
                  bg-white
                  px-5
                  py-2.5
                  text-sm
                  font-semibold
                  text-[#7B2983]
                  transition-all
                  duration-300
                  hover:scale-105
                "
              >
                Contact Support
              </Link>
            </div>
          </aside>

          {/* FAQ CONTENT */}
          <div
            className="
              rounded-2xl
              border
              border-[#e3d8ea]
              dark:border-white/10
              bg-white
              dark:bg-[#181c25]
              p-5
              md:p-8
            "
          >
            <div className="space-y-10">
              {faqData.map((section, sectionIndex) => (
                <div
                    key={sectionIndex}
                    id={categories[sectionIndex]?.id}
                    >
                  
                  {/* SECTION TITLE */}
                  <h2
                    className="
                      text-2xl
                      md:text-3xl
                      font-bold
                      text-[#1d2b4f]
                      dark:text-white
                    "
                  >
                    {section.title}
                  </h2>

                  {/* FAQ ITEMS */}
                  <div className="mt-6 space-y-3">
                    {section.items.map((item, itemIndex) => {
                      const accordionId = `${sectionIndex}-${itemIndex}`;
                      const isOpen = openItem === accordionId;

                      return (
                        <div
                          key={itemIndex}
                          className="
                            rounded-xl
                            border
                            border-[#ececf1]
                            dark:border-white/10
                            overflow-hidden
                          "
                        >
                          {/* QUESTION */}
                          <button
                            onClick={() =>
                              toggleAccordion(accordionId)
                            }
                            className="
                              flex
                              w-full
                              items-center
                              justify-between
                              gap-4
                              px-5
                              py-4
                              text-left
                            "
                          >
                            <span
                              className="
                                text-sm
                                md:text-lg
                                font-bold
                                text-[#1d2b4f]
                                dark:text-white
                              "
                            >
                              {item.question}
                            </span>

                            {/* ARROW */}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              className={`
                                h-5
                                w-5
                                flex-shrink-0
                                text-[#7B2983]
                                transition-transform
                                duration-300
                                ${
                                  isOpen
                                    ? "rotate-180"
                                    : ""
                                }
                              `}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </button>

                          {/* ANSWER */}
                          <div
                            className={`
                              grid
                              transition-all
                              duration-300
                              ${
                                isOpen
                                  ? "grid-rows-[1fr] opacity-100"
                                  : "grid-rows-[0fr] opacity-0"
                              }
                            `}
                          >
                            <div className="overflow-hidden">
                              <div
                                className="
                                  border-t
                                  border-[#ececf1]
                                  dark:border-white/10
                                  px-5
                                  py-4
                                "
                              >
                                <p
                                  className="
                                    text-sm
                                    md:text-base
                                    text-[#4b5563]
                                    dark:text-gray-300
                                    leading-relaxed
                                    text-[#6b7280]
                                    dark:text-gray-300
                                  "
                                >
                                  {item.answer}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
        </section>

        {/* Contact Section */}
        <section className="bg-[#f7f7f8] dark:bg-[#0f1117] py-8 md:py-16 transition-colors duration-300">
  <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
    
    {/* Content */}
    <div className="text-center">
      
      {/* Heading */}
      <h2
        className="
          text-3xl
          md:text-4xl
          lg:text-5xl
          font-bold
          tracking-tight
          text-[#1d2b4f]
          dark:text-white
        "
      >
        Still Have Questions?
      </h2>

      {/* Description */}
      <p
        className="
          mt-4
          text-sm
          md:text-base
          leading-relaxed
          text-[#7a7f8c]
          dark:text-gray-300
        "
      >
        Our support team is available 24/7 to help you with any inquiries
      </p>

      {/* Buttons */}
      <div
        className="
          mt-8
          flex
          flex-col
          sm:flex-row
          items-center
          justify-center
          gap-4
        "
      >
        {/* Primary Button */}
        <Link
          href="/contact"
          className="
            min-w-[220px]
            rounded-full
            bg-[#a11b74]
            px-8
            md:px-12
            py-3.5
            md:py-4
            text-sm
            md:text-base
            font-bold
            text-white
            shadow-lg
            shadow-pink-500/20
            transition-all
            duration-300
            hover:bg-[#8e1766]
            hover:scale-[1.02]
          "
        >
          Contact Support
        </Link>

        {/* Secondary Button */}
        <Link
          href="tel:+442071646399"
          className="
            min-w-[220px]
            rounded-full
            border
            border-[#d91c83]
            bg-transparent
            px-8
            md:px-12
            py-3.5
            md:py-4
            text-sm
            md:text-base
            font-bold
            text-[#d91c83]
            transition-all
            duration-300
            hover:bg-[#d91c83]
            hover:text-white
            dark:border-pink-500
            dark:text-pink-400
            dark:hover:bg-pink-500
            dark:hover:text-white
          "
        >
          Call Us Now
        </Link>
      </div>
    </div>
  </div>
        </section>
    </>
  )
}
