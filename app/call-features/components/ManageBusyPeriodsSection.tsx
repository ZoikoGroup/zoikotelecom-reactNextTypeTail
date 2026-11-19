import Link from "next/link";
import { Check, Users, Workflow, Info, type LucideIcon } from "lucide-react";

type BusyCard = {
  title: string;
  description: string;
  icon: LucideIcon;
  dependsOn: string;
  actionText: string;
  actionHref: string;
  type: "queues" | "hunt";
};

const BUSY_CARDS: readonly BusyCard[] = [
  {
    title: "Call queues",
    description:
      "A queue holds incoming calls while your team is busy, and connects them in order as people become free.",
    icon: Workflow,
    dependsOn: "queue capacity and settings on your plan.",
    actionText: "Read queue basics",
    actionHref: "/call-features/queues",
    type: "queues",
  },
  {
    title: "Hunt groups (ring groups)",
    description:
      "A group of phones that ring in a set pattern so a call reaches someone who's free.",
    icon: Users,
    dependsOn:
      "whether your plan includes ring groups and which patterns it supports.",
    actionText: "Check plan fit",
    actionHref: "/contact",
    type: "hunt",
  },
] as const;

const QUEUE_POINTS = [
  "Where verified: messages or music while callers wait",
  "What happens after a set wait — overflow to another team or voicemail",
  "Callbacks only with the caller's agreement",
] as const;

const HUNT_PATTERNS = [
  { title: "All at once", subtitle: "Every phone rings together", active: 3 },
  { title: "In order", subtitle: "One after another", active: 1 },
  { title: "Rotating", subtitle: "Shares calls around the team", active: 2 },
] as const;

export default function ManageBusyPeriodsSection() {
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
              Manage busy periods
            </p>
            <h2 className="text-2xl font-black tracking-tight text-[#131138] sm:text-3xl lg:text-4xl">
              Keep callers informed when everyone&rsquo;s busy
            </h2>
          </div>
        </div>
        <p className="mt-2.5 max-w-[600px] text-sm text-[#545275] sm:text-base">
          Queues and ring groups depend on your service configuration and
          capacity.
        </p>

        {/* 2-Column Grid */}
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {BUSY_CARDS.map((card) => {
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

                  {/* Card Type: Call Queues */}
                  {card.type === "queues" && (
                    <>
                      <ul className="mt-6 space-y-3">
                        {QUEUE_POINTS.map((pt) => (
                          <li
                            key={pt}
                            className="flex items-start gap-3 text-sm font-medium text-[#2c2a4a]"
                          >
                            <Check
                              className="mt-0.5 h-4 w-4 shrink-0 text-[#e6007e]"
                              strokeWidth={2.5}
                              aria-hidden="true"
                            />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-6 rounded-2xl border border-[#e5e7ef] bg-[#f4f6fc] p-4 text-xs leading-5 text-[#3b4359]">
                        <div className="flex items-start gap-2.5">
                          <Info
                            className="mt-0.5 h-4 w-4 shrink-0 text-[#131138]"
                            aria-hidden="true"
                          />
                          <p>
                            We don&rsquo;t show live wait times or promise how
                            fast calls are answered.
                          </p>
                        </div>
                      </div>
                    </>
                  )}

                  {/* Card Type: Hunt Groups */}
                  {card.type === "hunt" && (
                    <div className="mt-6 grid grid-cols-3 gap-3">
                      {HUNT_PATTERNS.map((pat) => (
                        <div
                          key={pat.title}
                          className="flex flex-col items-center rounded-2xl border border-[#ecebf4] bg-[#fcfcff] p-4 text-center"
                        >
                          {/* Mini visual bars representation */}
                          <div className="flex items-end gap-1 pb-3">
                            <span
                              className={`h-4 w-2 rounded-xs ${pat.active >= 1 ? "bg-[#e6007e]" : "bg-[#e3e2ef]"}`}
                            />
                            <span
                              className={`h-4 w-2 rounded-xs ${pat.active >= 2 ? "bg-[#b843b0]" : "bg-[#e3e2ef]"}`}
                            />
                            <span
                              className={`h-4 w-2 rounded-xs ${pat.active >= 3 ? "bg-[#7b3fe4]" : "bg-[#e3e2ef]"}`}
                            />
                          </div>
                          <span className="text-xs font-extrabold text-[#131138]">
                            {pat.title}
                          </span>
                          <span className="mt-1 text-[10px] leading-3.5 text-[#7b849b]">
                            {pat.subtitle}
                          </span>
                        </div>
                      ))}
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
