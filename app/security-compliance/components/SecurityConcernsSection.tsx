"use client";

import React from "react";
import {
  Smartphone,
  AlertCircle,
  MessageSquareWarning,
  Check,
  ChevronRight,
} from "lucide-react";

type ConcernIconType = "sim" | "breach" | "phishing";

interface SecurityConcernCard {
  readonly id: string;
  readonly iconType: ConcernIconType;
  readonly title: string;
  readonly description: string;
  readonly points: readonly string[];
  readonly imageSrc: string;
  readonly imageAlt: string;
}

const SECURITY_CONCERN_CARDS = [
  {
    id: "unexpected-sim-or-number-port",
    iconType: "sim",
    title: "Unexpected SIM or number port",
    description:
      "If a SIM stops working or a number moves without your approval, contact support straight away.",
    points: [
      "We verify identity before acting",
      "No self-service suspension online",
    ],
    imageSrc: "/Images/comp/15.png",
    imageAlt: "Padlock resting on a backlit keyboard for SIM and port security",
  },
  {
    id: "suspected-data-breach",
    iconType: "breach",
    title: "Suspected data breach",
    description:
      "Contain and assess with your own privacy team. We'll help with anything involving your Zoiko services.",
    points: [
      "ICO reporting may apply — usually within 72 hours",
      "We can't judge breach status on this page",
    ],
    imageSrc: "/Images/comp/16.png",
    imageAlt: "Circuit board and hardware traces for suspected data breach",
  },
  {
    id: "phishing-or-impersonation",
    iconType: "phishing",
    title: "Phishing or impersonation",
    description:
      "If someone contacts you claiming to be Zoiko, check through our verified contact page.",
    points: [
      "We never ask for passwords by email",
      "Report suspicious messages to us",
    ],
    imageSrc: "/Images/comp/17.png",
    imageAlt:
      "Smartphone screen showing apps for phishing and impersonation check",
  },
] as const satisfies readonly SecurityConcernCard[];

function ConcernCardIcon({ iconType }: { readonly iconType: ConcernIconType }) {
  switch (iconType) {
    case "sim":
      return (
        <Smartphone
          className="h-4 w-4 shrink-0 text-[#F472B6]"
          strokeWidth={2.2}
        />
      );
    case "breach":
      return (
        <AlertCircle
          className="h-4 w-4 shrink-0 text-[#F472B6]"
          strokeWidth={2.2}
        />
      );
    case "phishing":
      return (
        <MessageSquareWarning
          className="h-4 w-4 shrink-0 text-[#F472B6]"
          strokeWidth={2.2}
        />
      );
  }
}

export default function SecurityConcernsSection() {
  return (
    <section
      aria-labelledby="security-concerns-heading"
      className="w-full bg-gradient-to-br from-[#070A32] via-[#120B4D] to-[#260966] py-16 sm:py-20 px-4 sm:px-8 text-white font-sans"
    >
      <div className="max-w-[1300px] mx-auto">
        {/* Centered Header */}
        <div className="text-center max-w-[740px] mx-auto mb-11 sm:mb-12">
          <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#F472B6] mb-2.5">
            SECURITY CONCERNS
          </p>
          <h2
            id="security-concerns-heading"
            className="text-[32px] sm:text-[40px] font-extrabold leading-[1.15] tracking-[-0.025em] text-white mb-3.5"
          >
            Something suspicious? Use the right route
          </h2>
          <p className="text-[13.5px] sm:text-[14.5px] leading-[1.58] text-[#CBD0EB] font-normal">
            For an urgent service or account concern, use our verified support
            contact options. Never send passwords or security secrets through a
            web form.
          </p>
        </div>

        {/* 3 Dark Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {SECURITY_CONCERN_CARDS.map((card) => (
            <article
              key={card.id}
              className="group flex flex-col rounded-[18px] bg-[#2D2A6E]/80 border border-white/12 shadow-[0_18px_40px_rgba(6,7,34,0.35)] overflow-hidden backdrop-blur-xs"
            >
              {/* Top Image */}
              <div className="h-[168px] w-full bg-[#151836] overflow-hidden shrink-0">
                <img
                  src={card.imageSrc}
                  alt={card.imageAlt}
                  className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2.5 mb-3">
                    <ConcernCardIcon iconType={card.iconType} />
                    <h3 className="text-[16px] font-bold leading-[1.3] tracking-[-0.01em] text-white">
                      {card.title}
                    </h3>
                  </div>

                  <p className="text-[12.5px] leading-[1.55] text-[#D3D7EE] mb-4">
                    {card.description}
                  </p>
                </div>

                <ul className="space-y-2 text-[11.5px] leading-[1.45] text-[#BFC4E2]">
                  {card.points.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <Check
                        className="h-3.5 w-3.5 shrink-0 text-[#F472B6] mt-[2px]"
                        strokeWidth={2.5}
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        {/* Centered CTA Button */}
        <div className="text-center">
          <a
            href="#"
            className="inline-flex items-center justify-center gap-1.5 rounded-[9px] bg-gradient-to-r from-[#DF1A86] to-[#EB2690] px-6 py-3 text-[13px] font-bold text-white shadow-[0_12px_28px_rgba(230,26,134,0.45)] hover:brightness-105 transition"
          >
            <span>Contact support</span>
            <ChevronRight className="h-4 w-4 stroke-[2.5]" />
          </a>
        </div>
      </div>
    </section>
  );
}
