import Image from "next/image";
import { Check, X } from "lucide-react";

const sectionContent = {
  step: "05",
  eyebrow: "INITIAL VS REFINED",
  headingPrefix: "One shell, ",
  headingAccent: "one registry",
  description:
    "Publishing individually approved menus directly can create a second, conflicting navigation tree.",
} as const;

const comparisonCards = [
  {
    eyebrow: "INITIAL · NOT A RELEASE DESIGN",
    eyebrowClass: "text-[#f472b6]",
    title: "Separately mapped menus",
    image: "/Images/nav/8.png",
    alt: "Hand sketching UI wireframe boxes and navigation lines on paper",
    items: [
      {
        boldPrefix: "Support 02/03/04 labels",
        detail:
          " — drift between screenshot, approved deliverable and route map.",
        positive: false,
      },
      {
        boldPrefix: "About → Investors",
        detail:
          " — a design-approved link may appear without an approved route.",
        positive: false,
      },
      {
        boldPrefix: "Footer, search, mobile",
        detail:
          " — a hidden or obsolete destination may still be discoverable.",
        positive: false,
      },
    ],
  },
  {
    eyebrow: "REFINED",
    eyebrowClass: "text-[#4ade80]",
    title: "v6 shell + one versioned registry",
    image: "/Images/nav/9.png",
    alt: "Laptop displaying code syntax in a dark development environment",
    items: [
      {
        boldPrefix: "",
        detail: "Every surface reads the same signed registry snapshot.",
        positive: true,
      },
      {
        boldPrefix: "",
        detail: "Only verified links appear; no disabled dead ends.",
        positive: true,
      },
      {
        boldPrefix: "",
        detail: "Locked homepage hero stays untouched.",
        positive: true,
      },
    ],
  },
] as const;

export default function OneShellOneRegistrySection() {
  return (
    <section
      id="initial-vs-refined"
      className="w-full bg-[#09238c] bg-[radial-gradient(ellipse_75%_85%_at_18%_18%,rgba(59,130,246,0.35)_0%,transparent_65%),radial-gradient(ellipse_65%_80%_at_92%_12%,rgba(14,165,233,0.28)_0%,transparent_60%),linear-gradient(125deg,#071663_0%,#0c2c9e_55%,#07196b_100%)] px-4 py-14 text-white sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-[1120px]">
        {/* Left-aligned section header */}
        <div>
          <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em]">
            <span className="italic text-[#60a5fa]">{sectionContent.step}</span>
            <span className="text-[#93c5fd]">{sectionContent.eyebrow}</span>
          </p>

          <h2 className="mt-2.5 text-3xl font-extrabold tracking-[-0.025em] text-white sm:text-[36px]">
            {sectionContent.headingPrefix}
            <span className="font-semibold italic text-[#7dd3fc]">
              {sectionContent.headingAccent}
            </span>
          </h2>

          <p className="mt-2 text-[13.5px] leading-[1.6] text-white/75 sm:text-sm">
            {sectionContent.description}
          </p>
        </div>

        {/* Two side-by-side comparison cards */}
        <div className="mt-8 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2">
          {comparisonCards.map((card) => (
            <article
              key={card.title}
              className="flex flex-col overflow-hidden rounded-3xl border border-white/15 bg-white/[0.08] shadow-[0_14px_34px_rgba(4,12,56,0.28)] backdrop-blur-sm sm:flex-row"
            >
              {/* Left flush image panel */}
              <div className="relative h-48 w-full shrink-0 overflow-hidden bg-[#061142] sm:h-auto sm:w-[168px]">
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 170px"
                  className="object-cover object-center"
                />
              </div>

              {/* Right content panel */}
              <div className="flex flex-1 flex-col justify-center p-6 sm:p-7">
                <p
                  className={`text-[9.5px] font-extrabold uppercase tracking-[0.18em] ${card.eyebrowClass}`}
                >
                  {card.eyebrow}
                </p>

                <h3 className="mt-2 text-[19px] font-extrabold leading-snug tracking-[-0.015em] text-white">
                  {card.title}
                </h3>

                <ul className="mt-4 space-y-3">
                  {card.items.map((item) => (
                    <li
                      key={`${item.boldPrefix}${item.detail}`}
                      className="flex items-start gap-2.5 text-[12px] leading-[1.52] text-white/85"
                    >
                      {item.positive ? (
                        <Check
                          className="mt-0.5 h-3.5 w-3.5 shrink-0 stroke-[2.5] text-[#4ade80]"
                          aria-hidden="true"
                        />
                      ) : (
                        <X
                          className="mt-0.5 h-3.5 w-3.5 shrink-0 stroke-[2.2] text-[#f472b6]"
                          aria-hidden="true"
                        />
                      )}

                      <span>
                        {item.boldPrefix ? (
                          <strong className="font-bold text-white">
                            {item.boldPrefix}
                          </strong>
                        ) : null}
                        {item.detail}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
