import Link from "next/link";
import {
  Wrench,
  FileText,
  ArrowUpRight,
  MessageSquare,
  type LucideIcon,
} from "lucide-react";

type SupportCard = {
  title: string;
  description: string;
  icon: LucideIcon;
  actionText: string;
  actionHref: string;
};

const SUPPORT_CARDS: readonly SupportCard[] = [
  {
    title: "Connection problems",
    description: "Slow or no service at a site.",
    icon: Wrench,
    actionText: "Report a fault",
    actionHref: "/contact",
  },
  {
    title: "Invoices & contracts",
    description: "Questions about charges or terms.",
    icon: FileText,
    actionText: "Ask a question",
    actionHref: "/contact",
  },
  {
    title: "Upgrades & renewals",
    description: "Faster speeds or a new term.",
    icon: ArrowUpRight,
    actionText: "Talk to us",
    actionHref: "/contact",
  },
  {
    title: "Complaints",
    description: "Tell us if something's gone wrong.",
    icon: MessageSquare,
    actionText: "Contact us",
    actionHref: "/contact",
  },
] as const;

export default function BroadbandServiceSupport() {
  return (
    <section className="w-full bg-gradient-to-br from-[#081040] to-[#141E63] py-16 text-white sm:py-20">
      <div className="mx-auto max-w-[1300px] px-6 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#a4a0c8]">
            Already connected?
          </p>
          <h2 className="mt-2.5 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-[42px]">
            Get help with your service
          </h2>
        </div>

        {/* 4 Support Cards Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SUPPORT_CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="flex flex-col justify-between rounded-[26px] border border-white/10 bg-white p-7 shadow-[0_20px_50px_rgba(11,9,30,0.3)] backdrop-blur-xs sm:p-8"
              >
                <div>
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-r from-[#E0127C] to-[#7B3FE4] text-white">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>

                  <h3 className="mt-6 text-lg font-black tracking-tight text-[#0A1446]">
                    {card.title}
                  </h3>

                  <p className="mt-2.5 text-xs leading-5 text-[#3A4268]">
                    {card.description}
                  </p>
                </div>

                <div className="mt-8 border-t border-white/10 pt-5">
                  <Link
                    href={card.actionHref}
                    className="inline-flex items-center gap-1 text-sm font-extrabold text-[#E0127C] transition hover:text-[#ff1a93]"
                  >
                    {card.actionText}
                    <span aria-hidden="true">&rsaquo;</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner Card */}
        <div className="mt-6 rounded-[22px] border border-white/10 bg-white p-6 backdrop-blur-xs sm:px-8">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h4 className="text-sm font-extrabold text-[#0A1446]">
                Manage your business connection online
              </h4>
              <p className="mt-1 text-xs text-[#3A4268]">
                A business account portal isn&rsquo;t available yet. Contact our
                team or read our FAQs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
