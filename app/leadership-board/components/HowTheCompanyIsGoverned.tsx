import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface GovernanceCardItem {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  cta?: {
    label: string;
    href: string;
  };
}

const governanceCards: GovernanceCardItem[] = [
  {
    id: "governance-info",
    title: "Governance information",
    description:
      "Approved governance details will appear here — we don't list committees or charters that aren't confirmed.",
    image: "/Images/board/5.png",
    imageAlt: "Statue of Lady Justice holding scales and sword",
  },
  {
    id: "policies",
    title: "Policies",
    description:
      "Read our published ESG policy, which covers responsible decision-making and risk.",
    image: "/Images/board/6.png",
    imageAlt: "Hands signing a policy document with a pen on a dark desk",
    cta: {
      label: "Sustainability (ESG)",
      href: "/sustainability-esg",
    },
  },
  {
    id: "corporate-enquiries",
    title: "Corporate enquiries",
    description:
      "Questions about the company? Use our Contact page — we don't publish personal contact details for directors.",
    image: "/Images/board/7.png",
    imageAlt:
      "Team members collaborating in a bright room with sticky notes on a wall",
    cta: {
      label: "Contact Zoiko",
      href: "/contact",
    },
  },
];

export default function HowTheCompanyIsGoverned() {
  return (
    <section
      id="how-the-company-is-governed"
      className="w-full bg-[#F5F6FB] px-4 py-14 text-[#110C3A] antialiased sm:px-6 lg:py-20"
    >
      <div className="mx-auto w-full max-w-[1300px]">
        {/* Section Eyebrow & Heading */}
        <div>
          <p className="flex items-center gap-2 text-[10.5px] font-extrabold uppercase tracking-[0.14em]">
            <span className="font-semibold italic text-[#E5A9C3]">04</span>
            <span className="text-[#A3367A]">Governance</span>
          </p>

          <h2 className="mt-2.5 text-[34px] font-black leading-[1.12] tracking-[-0.025em] text-[#0B092E] sm:text-[42px]">
            How the company{" "}
            <span className="font-extrabold text-[#9E2A76]">is governed</span>
          </h2>
        </div>

        {/* Three-Column Governance Cards */}
        <div className="mt-9 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {governanceCards.map((card) => (
            <article
              key={card.id}
              className="flex flex-col overflow-hidden rounded-[22px] border border-[#ECEAF2] bg-white shadow-[0_8px_24px_rgba(17,12,58,0.04)]"
            >
              {/* Top Image Banner */}
              <div className="relative h-[176px] w-full shrink-0 bg-[#18133E]">
                <Image
                  src={card.image}
                  alt={card.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover object-center"
                />
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col justify-between px-6 py-6 sm:px-7">
                <div>
                  <h3 className="text-[20px] font-extrabold leading-snug tracking-[-0.015em] text-[#0B092E]">
                    {card.title}
                  </h3>

                  <p className="mt-2.5 text-[12px] leading-[1.58] text-[#5B5675]">
                    {card.description}
                  </p>
                </div>

                {card.cta && (
                  <div className="mt-6">
                    <Link
                      href={card.cta.href}
                      className="inline-flex items-center gap-1 text-[12px] font-bold text-[#D91B78] transition-colors hover:text-[#b31261]"
                    >
                      <span>{card.cta.label}</span>
                      <ChevronRight
                        className="h-3.5 w-3.5"
                        aria-hidden="true"
                      />
                    </Link>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
