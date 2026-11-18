import Link from "next/link";
import {
  Workflow,
  CornerUpRight,
  Clock,
  ArrowLeftRight,
  Hash,
  PoundSterling,
  type LucideIcon,
} from "lucide-react";

type RouteCard = {
  title: string;
  description: string;
  icon: LucideIcon;
  dependsOn: string;
  actionText: string;
  actionHref: string;
  type: "forwarding" | "time" | "transfers" | "number";
};

const ROUTE_CARDS: readonly RouteCard[] = [
  {
    title: "Call forwarding",
    description:
      "Forwarding sends an eligible incoming call to another destination, such as a colleague or a mobile.",
    icon: CornerUpRight,
    dependsOn: "your service, the destination and its tariff.",
    actionText: "Ask about setup",
    actionHref: "/contact",
    type: "forwarding",
  },
  {
    title: "Time-based routing",
    description:
      "Handle calls differently during opening hours, out of hours and on public holidays.",
    icon: Clock,
    dependsOn:
      "your plan. Clock changes, holidays and overnight schedules need to be set up correctly.",
    actionText: "Sketch your hours",
    actionHref: "/contact",
    type: "time",
  },
  {
    title: "Call transfers",
    description:
      "Pass a caller to a colleague. A blind transfer sends the call straight on; an attended transfer lets you speak to the colleague first.",
    icon: ArrowLeftRight,
    dependsOn: "permissions and valid destinations on your service.",
    actionText: "Read about transfers",
    actionHref: "/call-features/transfers",
    type: "transfers",
  },
  {
    title: "Routing by number",
    description:
      "Different numbers — for example a sales line and a support line — can ring different people or teams.",
    icon: Hash,
    dependsOn: "the numbers on your account. See Virtual Numbers.",
    actionText: "Ask about numbers",
    actionHref: "/virtual-numbers",
    type: "number",
  },
] as const;

export default function RouteCallsSection() {
  return (
    <section className="w-full bg-[#F5F6FB] py-16 text-[#131138] sm:py-20">
      <div className="mx-auto max-w-[1300px] px-6 sm:px-8 lg:px-10">
        {/* Section Header */}
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#e6007e] to-[#7b3fe4] text-white shadow-md shadow-[#e6007e]/20">
            <Workflow className="h-5 w-5" aria-hidden="true" />
          </span>
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-[#545275]">
              Route calls
            </p>
            <h2 className="text-2xl font-black tracking-tight text-[#131138] sm:text-3xl lg:text-4xl">
              Send calls to the right person
            </h2>
          </div>
        </div>
        <p className="mt-2.5 max-w-[600px] text-sm text-[#545275] sm:text-base">
          With clear fallback when they can&rsquo;t answer. Routing options
          depend on your service and supplier.
        </p>

        {/* 2x2 Grid of Cards */}
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {ROUTE_CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="flex flex-col justify-between rounded-[26px] border border-[#ecebf4] bg-white p-7 shadow-[0_14px_36px_rgba(19,17,56,0.04)] sm:p-9"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#e6007e] to-[#7b3fe4] text-white shadow-md shadow-[#e6007e]/20">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-black tracking-tight text-[#131138]">
                    {card.title}
                  </h3>

                  <p className="mt-2.5 text-sm leading-6 text-[#545275]">
                    {card.description}
                  </p>

                  {/* Specialized Card Content Elements */}
                  {card.type === "forwarding" && (
                    <>
                      <div className="mt-6 grid grid-cols-3 gap-3">
                        <div className="rounded-xl border border-[#ecebf4] bg-[#fcfcff] p-3.5">
                          <span className="block text-xs font-extrabold text-[#131138]">
                            Always
                          </span>
                          <span className="mt-1 block text-[11px] leading-4 text-[#7b849b]">
                            Every call goes to the new destination.
                          </span>
                        </div>
                        <div className="rounded-xl border border-[#ecebf4] bg-[#fcfcff] p-3.5">
                          <span className="block text-xs font-extrabold text-[#131138]">
                            When busy
                          </span>
                          <span className="mt-1 block text-[11px] leading-4 text-[#7b849b]">
                            Only if the line is already in use.
                          </span>
                        </div>
                        <div className="rounded-xl border border-[#ecebf4] bg-[#fcfcff] p-3.5">
                          <span className="block text-xs font-extrabold text-[#131138]">
                            No answer
                          </span>
                          <span className="mt-1 block text-[11px] leading-4 text-[#7b849b]">
                            After a set number of rings.
                          </span>
                        </div>
                      </div>

                      <div className="mt-5 rounded-2xl border border-[#e5e7ef] bg-[#f4f6fc] p-4 text-xs leading-5 text-[#3b4359]">
                        <div className="flex items-start gap-2.5">
                          <PoundSterling
                            className="mt-0.5 h-4 w-4 shrink-0 text-[#131138]"
                            aria-hidden="true"
                          />
                          <p>
                            <strong className="font-bold text-[#131138]">
                              Forwarding can add call charges.
                            </strong>{" "}
                            Sending a call on to a mobile or another number can
                            be billed as a separate call. Ask for the charges on
                            your service.
                          </p>
                        </div>
                      </div>
                    </>
                  )}

                  {card.type === "time" && (
                    <div className="mt-6 rounded-2xl border border-[#ecebf4] bg-[#fcfcff] p-4">
                      <div className="flex items-center justify-between pb-3">
                        <span className="text-xs font-extrabold text-[#131138]">
                          Schedule preview
                        </span>
                        <span className="rounded-md bg-[#f0f1f6] px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.06em] text-[#7b849b]">
                          Example
                        </span>
                      </div>
                      <div className="space-y-1.5 pt-1 text-[11px]">
                        <div className="flex items-center gap-2">
                          <span className="w-16 text-[#7b849b]">
                            Mon&ndash;Fri
                          </span>
                          <div className="flex flex-1 gap-0.5">
                            <span className="h-3.5 w-3 rounded-xs bg-[#e3e2ef]" />
                            <span className="h-3.5 w-3 rounded-xs bg-[#e3e2ef]" />
                            <span className="h-3.5 w-3 rounded-xs bg-[#e6007e]" />
                            <span className="h-3.5 w-3 rounded-xs bg-[#e6007e]" />
                            <span className="h-3.5 w-3 rounded-xs bg-[#e6007e]" />
                            <span className="h-3.5 w-3 rounded-xs bg-[#b843b0]" />
                            <span className="h-3.5 w-3 rounded-xs bg-[#7b3fe4]" />
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="w-16 text-[#7b849b]">Sat</span>
                          <div className="flex flex-1 gap-0.5">
                            <span className="h-3.5 w-3 rounded-xs bg-[#e3e2ef]" />
                            <span className="h-3.5 w-3 rounded-xs bg-[#e3e2ef]" />
                            <span className="h-3.5 w-3 rounded-xs bg-[#fde8f3]" />
                            <span className="h-3.5 w-3 rounded-xs bg-[#fde8f3]" />
                            <span className="h-3.5 w-3 rounded-xs bg-[#fde8f3]" />
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="w-16 text-[#7b849b]">Bank hol.</span>
                          <div className="flex flex-1 gap-0.5">
                            <span className="h-3.5 w-3 rounded-xs bg-[#fef3c7]" />
                            <span className="h-3.5 w-3 rounded-xs bg-[#fef3c7]" />
                            <span className="h-3.5 w-3 rounded-xs bg-[#fef3c7]" />
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 flex flex-wrap gap-4 text-[10px] font-semibold text-[#545275]">
                        <span className="flex items-center gap-1.5">
                          <span className="h-2.5 w-2.5 rounded-full bg-[#e6007e]" />
                          Calls to your team
                        </span>
                        <span className="flex items-center gap-1.5">
                          <span className="h-2.5 w-2.5 rounded-full bg-[#d0cbe7]" />
                          Out-of-hours handling
                        </span>
                        <span className="flex items-center gap-1.5">
                          <span className="h-2.5 w-2.5 rounded-full bg-[#fef3c7]" />
                          Holiday exception
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Card Footer: Depends on & Action */}
                <div className="mt-8 border-t border-[#f0f1f6] pt-5">
                  <p className="text-xs text-[#545275]">
                    <strong className="font-bold text-[#131138]">
                      Depends on:
                    </strong>{" "}
                    {card.dependsOn}
                  </p>
                  <div className="mt-4">
                    <Link
                      href={card.actionHref}
                      className="inline-flex items-center gap-1 text-sm font-extrabold text-[#e6007e] transition hover:text-[#c41478]"
                    >
                      {card.actionText}
                      <span aria-hidden="true">&rsaquo;</span>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
