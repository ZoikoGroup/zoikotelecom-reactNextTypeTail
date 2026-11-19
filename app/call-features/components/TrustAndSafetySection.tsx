import {
  IdCard,
  Radio,
  AlertCircle,
  Plug,
  VolumeX,
  Lock,
  type LucideIcon,
} from "lucide-react";

type TrustSafetyCard = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const TRUST_SAFETY_CARDS: readonly TrustSafetyCard[] = [
  {
    title: "Caller ID",
    description:
      "You can show or withhold your number where allowed. You can't display a number your business doesn't own or have permission to use — that's against UK caller ID rules.",
    icon: IdCard,
  },
  {
    title: "Call recording",
    description:
      "Recording and transcription require suitable legal, security and product approvals. It's never switched on by default, and callers and staff must be told.",
    icon: Radio,
  },
  {
    title: "999 and 112",
    description:
      "Digital voice needs appropriate connectivity and emergency-calling arrangements. Forwarding and menus must never interrupt emergency calls or your registered location.",
    icon: AlertCircle,
  },
  {
    title: "Power cuts",
    description:
      "Digital phones usually stop working in a power cut unless you have backup. Tell us if anyone relies on the line for safety.",
    icon: Plug,
  },
  {
    title: "Nuisance and anonymous calls",
    description:
      "Ask about options for handling withheld or unwanted calls — what's possible depends on the network.",
    icon: VolumeX,
  },
  {
    title: "Your data",
    description:
      "Voicemails, transcripts and recordings can hold personal information. We'll explain who can access them and how long they're kept.",
    icon: Lock,
  },
] as const;

export default function TrustAndSafetySection() {
  return (
    <section className="w-full bg-gradient-to-br from-[#081040] via-[#141E63] to-[#2A1A6E] py-16 text-white sm:py-20">
      <div className="mx-auto max-w-[1300px] px-6 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#a4a0c8]">
            Trust &amp; safety
          </p>
          <h2 className="mt-2.5 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-[42px]">
            Clear rules for caller ID, recording and emergencies
          </h2>
          <p className="mx-auto mt-3 max-w-[560px] text-sm text-[#b8b4d8] sm:text-base">
            Some call features affect privacy and safety. These are the things
            we&rsquo;ll always check with you.
          </p>
        </div>

        {/* 3x2 Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TRUST_SAFETY_CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="flex flex-col rounded-[26px] border border-[#FFFFFF29] bg-[#FFFFFF14] p-8 shadow-[0_20px_50px_rgba(11,9,30,0.3)] backdrop-blur-xs sm:p-9"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl text-[#FF8FCB]">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>

                <h3 className="mt-6 text-lg font-black tracking-tight text-white sm:text-xl">
                  {card.title}
                </h3>

                <p className="mt-2.5 text-sm leading-6 text-[#b8b4d8]">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
