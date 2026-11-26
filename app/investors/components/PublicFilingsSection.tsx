import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

const sectionContent = {
  step: "02",
  eyebrow: "PUBLIC FILINGS",
  headingPrefix: "Go to the ",
  headingAccent: "official source",
  description:
    "These links open the Companies House record for company 15021457.",
} as const;

const filingCards = [
  {
    eyebrow: "COMPANIES HOUSE",
    title: "Company overview",
    description: "Registered details and the current register status.",
    domain: "find-and-update.company-information.service.gov.uk",
    href: "https://find-and-update.company-information.service.gov.uk/company/15021457",
    image: "/Images/investors/2.png",
    alt: "Curved rows of books on shelves inside a library",
  },
  {
    eyebrow: "COMPANIES HOUSE",
    title: "Filing history",
    description: "Accounts, confirmation statements and other filed documents.",
    domain: "find-and-update.company-information.service.gov.uk",
    href: "https://find-and-update.company-information.service.gov.uk/company/15021457/filing-history",
    image: "/Images/investors/3.png",
    alt: "Overhead view of financial documents, calculator, and pen on a white desk",
  },
  {
    eyebrow: "COMPANIES HOUSE",
    title: "Officers",
    description: "Filed director appointments and resignations.",
    domain: "find-and-update.company-information.service.gov.uk",
    href: "https://find-and-update.company-information.service.gov.uk/company/15021457/officers",
    image: "/Images/investors/4.png",
    alt: "Tall wooden bookshelves filled with bound volumes",
  },
] as const;

export default function PublicFilingsSection() {
  return (
    <section
      id="public-filings"
      className="w-full bg-[#F5F6FB] px-4 py-14 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-[1120px]">
        {/* Centered section header */}
        <div className="mx-auto max-w-[580px] text-center">
          <p className="flex items-center justify-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em]">
            <span className="italic text-[#e093b9]">{sectionContent.step}</span>
            <span className="text-[#9d175d]">{sectionContent.eyebrow}</span>
          </p>

          <h2 className="mt-2.5 text-3xl font-extrabold tracking-[-0.025em] text-[#0c1438] sm:text-[36px]">
            {sectionContent.headingPrefix}
            <span className="text-[#b81d78]">
              {sectionContent.headingAccent}
            </span>
          </h2>

          <p className="mt-2.5 text-[13.5px] leading-[1.6] text-[#4b5563] sm:text-sm">
            {sectionContent.description}
          </p>
        </div>

        {/* Three filing cards */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {filingCards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col overflow-hidden rounded-2xl border border-[#eceaf2] bg-white shadow-[0_8px_24px_rgba(15,23,42,0.05)] transition hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(15,23,42,0.09)]"
            >
              <div className="relative h-[185px] w-full overflow-hidden bg-[#eef0f6]">
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center transition duration-300 group-hover:scale-[1.03]"
                />
              </div>

              <div className="flex flex-1 flex-col justify-between px-6 pb-6 pt-5">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#3b5bdb]">
                    {card.eyebrow}
                  </p>

                  <div className="mt-1.5 flex items-center gap-1.5">
                    <h3 className="text-[17px] font-bold leading-snug text-[#0c1438] group-hover:underline">
                      {card.title}
                    </h3>
                    <ExternalLink
                      className="h-3.5 w-3.5 shrink-0 text-[#c81878]"
                      aria-hidden="true"
                    />
                  </div>

                  <p className="mt-1.5 text-[12.5px] leading-[1.55] text-[#4b5563]">
                    {card.description}
                  </p>
                </div>

                <p className="mt-5 break-words text-[11.5px] font-medium leading-[1.45] text-[#5b6b82]">
                  {card.domain}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
