import Image from "next/image";
import {
  Users,
  Plus,
  CornerUpRight,
  Router,
  PoundSterling,
  type LucideIcon,
} from "lucide-react";

type CostCard = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  icon: LucideIcon;
};

const COST_CARDS: readonly CostCard[] = [
  {
    title: "Users or seats",
    description: "Many voice services charge per user, phone or seat.",
    imageSrc: "/Images/call/7.png",
    imageAlt:
      "Professional sitting at a desk with a computer representing user seats",
    icon: Users,
  },
  {
    title: "Add-on features",
    description: "Some features may be optional extras rather than included.",
    imageSrc: "/Images/call/8.png",
    imageAlt: "Person typing on a laptop working on add-on features",
    icon: Plus,
  },
  {
    title: "Forwarded calls",
    description: "Calls sent on to mobiles or other numbers can be charged.",
    imageSrc: "/Images/call/9.png",
    imageAlt: "Team members handling forwarded calls in an office",
    icon: CornerUpRight,
  },
  {
    title: "Equipment & internet",
    description: "Handsets, apps and broadband may be separate costs.",
    imageSrc: "/Images/call/10.png",
    imageAlt: "Network cables and equipment representing infrastructure",
    icon: Router,
  },
] as const;

export default function CallFeaturesCosts() {
  return (
    <section className="w-full bg-[#F5F6FB] py-16 text-[#131138] sm:py-20">
      <div className="mx-auto max-w-[1300px] px-6 sm:px-8 lg:px-10">
        {/* Section Header */}
        <div className="text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-[#545275]">
            Costs
          </p>
          <h2 className="mt-2.5 text-3xl font-black tracking-tight text-[#131138] sm:text-4xl lg:text-[42px]">
            What can affect the cost
          </h2>
          <p className="mx-auto mt-3 max-w-[500px] text-sm text-[#545275] sm:text-base">
            No feature prices are shown here &mdash; we&rsquo;ll give you an
            itemised quote.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {COST_CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="flex flex-col overflow-hidden rounded-[24px] border border-[#ecebf4] bg-white shadow-[0_12px_32px_rgba(19,17,56,0.04)]"
              >
                {/* Top Content: Icon, Title, Description */}
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#e6007e] to-[#7b3fe4] text-white shadow-md shadow-[#e6007e]/20">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-lg font-black tracking-tight text-[#131138]">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-xs leading-5 text-[#545275]">
                    {card.description}
                  </p>
                </div>

                {/* Bottom Image Container */}
                <div className="relative h-[150px] w-full bg-[#f0f1f6]">
                  <Image
                    src={card.imageSrc}
                    alt={card.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 280px, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Notice Banner */}
        <div className="mt-8 rounded-[22px] border border-[#e5e7ef] bg-[#f4f6fc] px-6 py-4.5 sm:px-8">
          <div className="flex items-start gap-3 text-xs leading-5 text-[#3b4359] sm:text-sm">
            <PoundSterling
              className="mt-0.5 h-4 w-4 shrink-0 text-[#131138]"
              aria-hidden="true"
            />
            <p>
              We&rsquo;ll show whether prices include VAT, any minimum term and
              any one-off charges before you agree to anything.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
