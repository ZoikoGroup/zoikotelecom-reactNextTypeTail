import Image from "next/image";
import Link from "next/link";
import { MessageSquare, FileText, type LucideIcon } from "lucide-react";

type MessageCard = {
  title: string;
  description: string;
  icon: LucideIcon;
  dependsOn: string;
  actionText: string;
  actionHref: string;
};

const MESSAGE_CARDS: readonly MessageCard[] = [
  {
    title: "Voicemail",
    description:
      "Callers can leave a message when no one answers. You may be notified, for example by email, depending on the service.",
    icon: MessageSquare,
    dependsOn:
      "mailbox settings, who can access messages, and how long they're kept.",
    actionText: "Explore voicemail",
    actionHref: "/contact",
  },
  {
    title: "Voicemail transcription",
    description:
      "Our public business landline FAQ lists transcription among possible features. Transcripts can contain mistakes and supported languages may be limited.",
    icon: FileText,
    dependsOn: "your plan, plus storage and privacy settings for the text.",
    actionText: "Request specifics",
    actionHref: "/contact",
  },
] as const;

export default function MessagesSection() {
  return (
    <section className="w-full bg-white py-16 text-[#131138] sm:py-20">
      <div className="mx-auto max-w-[1300px] px-6 sm:px-8 lg:px-10">
        {/* Section Header */}
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#e6007e] to-[#7b3fe4] text-white shadow-md shadow-[#e6007e]/20">
            <MessageSquare className="h-5 w-5" aria-hidden="true" />
          </span>
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-[#545275]">
              Messages
            </p>
            <h2 className="text-2xl font-black tracking-tight text-[#131138] sm:text-3xl lg:text-4xl">
              Never lose track of a message
            </h2>
          </div>
        </div>
        <p className="mt-2.5 max-w-[600px] text-sm text-[#545275] sm:text-base">
          Understand voicemail options and ask whether transcription is
          available on your plan.
        </p>

        {/* 2-Column Layout: Left Image / Right Cards Stack */}
        <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:items-start">
          {/* Left Column: Image Card */}
          <div className="relative h-[440px] w-full overflow-hidden rounded-[28px] border border-[#ecebf4] bg-[#f0f1f6] shadow-[0_16px_40px_rgba(19,17,56,0.06)] sm:h-[650px]">
            <Image
              src="/Images/call/6.png"
              alt="Bright modern office interior with tall window and desk setup"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          {/* Right Column: Two Cards Stack */}
          <div className="space-y-6">
            {MESSAGE_CARDS.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="flex flex-col justify-between rounded-[26px] border border-[#ecebf4] bg-white p-7 shadow-[0_14px_36px_rgba(19,17,56,0.04)] sm:p-9"
                >
                  <div>
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#e6007e] to-[#7b3fe4] text-white shadow-md shadow-[#e6007e]/20">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>

                    <h3 className="mt-6 text-xl font-black tracking-tight text-[#131138]">
                      {card.title}
                    </h3>

                    <p className="mt-2.5 text-sm leading-6 text-[#545275]">
                      {card.description}
                    </p>
                  </div>

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
      </div>
    </section>
  );
}
