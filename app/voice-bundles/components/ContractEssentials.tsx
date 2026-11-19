import Image from "next/image";
import {
  PoundSterling,
  Box,
  Calendar,
  FileText,
  ArrowUp,
  ArrowLeftRight,
  X,
  Clock,
  type LucideIcon,
} from "lucide-react";

type ContractItem = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  icon: LucideIcon;
};

const CONTRACT_ITEMS: readonly ContractItem[] = [
  {
    title: "Monthly price",
    description: "Per line or user, and the total.",
    imageSrc: "/Images/voice/4.png",
    imageAlt: "Documents and calculator representing monthly price",
    icon: PoundSterling,
  },
  {
    title: "Set-up charges",
    description: "Any one-off costs, including equipment.",
    imageSrc: "/Images/voice/5.png",
    imageAlt: "Server racks representing set-up charges",
    icon: Box,
  },
  {
    title: "Minimum term",
    description: "How long you're committing for.",
    imageSrc: "/Images/voice/6.png",
    imageAlt: "Calendar and coffee cup representing minimum term",
    icon: Calendar,
  },
  {
    title: "VAT",
    description: "Whether prices include or exclude VAT.",
    imageSrc: "/Images/voice/7.png",
    imageAlt: "Person writing paperwork representing VAT",
    icon: FileText,
  },
  {
    title: "Price changes",
    description: "Any rises, shown in pounds and pence with dates.",
    imageSrc: "/Images/voice/8.png",
    imageAlt: "Laptop showing charts representing price changes",
    icon: ArrowUp,
  },
  {
    title: "Renewal",
    description: "What happens at the end of your term.",
    imageSrc: "/Images/voice/9.png",
    imageAlt: "Handshake representing contract renewal",
    icon: ArrowLeftRight,
  },
  {
    title: "Leaving early",
    description: "Any early termination charges.",
    imageSrc: "/Images/voice/10.png",
    imageAlt: "Woman working on laptop representing leaving early",
    icon: X,
  },
  {
    title: "Extra usage",
    description: "Rates for calls outside your allowance.",
    imageSrc: "/Images/voice/11.png",
    imageAlt: "Hands holding smartphone representing extra usage",
    icon: Clock,
  },
] as const;

export default function ContractEssentials() {
  return (
    <section className="w-full bg-white py-16 text-[#131138] sm:py-20">
      <div className="mx-auto max-w-[1300px] px-6 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-[#545275]">
            Contract essentials
          </p>
          <h2 className="mt-2.5 text-3xl font-black tracking-tight text-[#131138] sm:text-4xl lg:text-[42px]">
            Read these before you agree
          </h2>
          <p className="mx-auto mt-3 max-w-[560px] text-sm text-[#545275] sm:text-base">
            We&rsquo;ll give you a contract summary and full contract
            information before you commit.
          </p>
        </div>

        {/* 4x2 Grid of Horizontal Cards */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CONTRACT_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex min-h-[124px] flex-row overflow-hidden rounded-[22px] border border-[#ecebf4] bg-white shadow-[0_10px_28px_rgba(19,17,56,0.04)]"
              >
                {/* Left Image Container (Parallel) */}
                <div className="relative w-[44%] shrink-0 bg-[#f0f1f6]">
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 150px, 40vw"
                    className="object-cover"
                  />
                  {/* Pink Icon Badge overlay */}
                  <span className="absolute left-2.5 top-2.5 flex h-7 w-7 items-center justify-center rounded-lg bg-[#e6007e] text-white shadow-sm">
                    <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                </div>

                {/* Right Content Container */}
                <div className="flex flex-1 flex-col justify-center p-4">
                  <h3 className="text-sm font-extrabold leading-snug tracking-tight text-[#131138]">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs leading-4 text-[#545275]">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-8 rounded-[28px] bg-gradient-to-br from-[#1b1740] to-[#120f2e] p-8 text-white shadow-[0_20px_50px_rgba(27,23,64,0.25)] sm:p-10">
          <div className="grid items-center gap-6 lg:grid-cols-[auto_1fr] lg:gap-10">
            <div className="flex flex-col items-center justify-center text-center">
              <span className="text-4xl font-black leading-none tracking-tight text-[#e6007e] sm:text-5xl">
                24
              </span>
              <span className="mt-1 text-[11px] font-bold tracking-wide text-white">
                months max
              </span>
            </div>

            <div>
              <h3 className="text-lg font-black tracking-tight text-white sm:text-xl">
                Small business with 10 or fewer employees?
              </h3>
              <p className="mt-1.5 text-xs leading-5 text-[#b8b4d8] sm:text-sm sm:leading-6">
                You can&rsquo;t be tied into a minimum contract term longer than
                24 months, and you should receive a short contract summary
                before you agree. Adding minutes or features should never
                restart your contract without your clear agreement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
