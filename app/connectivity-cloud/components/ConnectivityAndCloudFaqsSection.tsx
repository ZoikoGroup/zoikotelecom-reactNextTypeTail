"use client";

import { useState } from "react";
import Image from "next/image";
import { Plus } from "lucide-react";

const sectionContent = {
  step: "06",
  eyebrow: "QUESTIONS",
  headingPrefix: "Connectivity & Cloud ",
  headingAccent: "FAQs",
  image: "/Images/cloud/12.png",
  imageAlt:
    "Group of people raising their hands during a Q&A session in a workspace",
} as const;

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const faqItems: readonly FaqItem[] = [
  {
    id: "what-is-connectivity-and-cloud",
    question: "What is Connectivity & Cloud?",
    answer:
      "It covers four scope areas — internet access, hosting requirements, cloud interconnect and managed network needs — framed around technical scoping rather than self-serve online ordering.",
  },
  {
    id: "order-dedicated-internet-online",
    question: "Can I order dedicated internet online?",
    answer:
      "No. Dedicated connections and site-specific connectivity are assessed per premises and scoped in a written proposal rather than ordered directly online.",
  },
  {
    id: "guarantee-uptime",
    question: "Do you guarantee uptime?",
    answer:
      "No uptime guarantee is made on this page. Any service commitment or guarantee applies only if set out in a signed, service-specific agreement.",
  },
  {
    id: "where-cloud-data-hosted",
    question: "Where would my cloud data be hosted?",
    answer:
      "We record your hosting and data-residency preferences during scoping, which does not imply a confirmed location or certification until stated in a formal proposal.",
  },
  {
    id: "move-existing-business-service",
    question: "Can I move an existing business service?",
    answer:
      "Existing services and multi-site requirements can be discussed with our team so each site, dependency and supplier role can be reviewed properly.",
  },
  {
    id: "submit-network-diagram",
    question: "Can I submit a network diagram?",
    answer:
      "Please don’t include sensitive details such as network diagrams, IP lists, passwords or credentials in the public enquiry form; share only high-level scope first.",
  },
] as const;

export default function ConnectivityAndCloudFaqsSection() {
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({});

  const toggleItem = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section
      id="connectivity-and-cloud-faqs"
      className="w-full bg-white px-4 py-14 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-[1120px]">
        {/* Left-aligned section header */}
        <div>
          <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em]">
            <span className="italic text-[#e093b9]">{sectionContent.step}</span>
            <span className="text-[#9d175d]">{sectionContent.eyebrow}</span>
          </p>

          <h2 className="mt-2.5 text-3xl font-extrabold tracking-[-0.025em] text-[#0c1438] sm:text-[36px]">
            {sectionContent.headingPrefix}
            <span className="text-[#b81d78]">
              {sectionContent.headingAccent}
            </span>
          </h2>
        </div>

        {/* Two-column layout: Left accordion list + Right Q&A photo */}
        <div className="mt-7 grid grid-cols-1 items-start gap-6 lg:grid-cols-12 lg:gap-8">
          {/* Left column: 6 expandable question rows */}
          <div className="space-y-3 lg:col-span-6">
            {faqItems.map((item) => {
              const isOpen = Boolean(openIds[item.id]);

              return (
                <div
                  key={item.id}
                  className="overflow-hidden rounded-xl border border-[#e7eaf3] bg-white shadow-[0_2px_10px_rgba(15,23,42,0.025)] transition hover:border-[#d5dbea]"
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => toggleItem(item.id)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-3.5 text-left"
                  >
                    <span className="text-[13px] font-bold leading-snug text-[#0c1438]">
                      {item.question}
                    </span>

                    <Plus
                      className={`h-4 w-4 shrink-0 stroke-[2.2] text-[#e11d74] transition-transform duration-200 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>

                  {isOpen && (
                    <div className="border-t border-[#f1f3f9] px-5 py-3.5 text-[12px] leading-[1.6] text-[#4b5563]">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right column: Q&A session photograph */}
          <div className="lg:col-span-6">
            <div className="relative h-[280px] w-full overflow-hidden rounded-2xl border border-[#eaecf4] bg-[#1e293b] shadow-[0_10px_28px_rgba(15,23,42,0.08)] sm:h-[330px]">
              <Image
                src={sectionContent.image}
                alt={sectionContent.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
