import Image from "next/image";

interface LeadershipSlotCard {
  id: string;
  tag: "BOARD" | "LEADERSHIP";
  image: string;
  imageAlt: string;
}

const leadershipCards: LeadershipSlotCard[] = [
  {
    id: "board-meeting",
    tag: "BOARD",
    image: "/Images/board/2.png",
    imageAlt:
      "Board members gathered around a long conference table during a meeting",
  },
  {
    id: "board-discussion",
    tag: "BOARD",
    image: "/Images/board/3.png",
    imageAlt:
      "Team members reviewing notes and discussing strategy in a modern office",
  },
  {
    id: "leadership-team",
    tag: "LEADERSHIP",
    image: "/Images/board/4.png",
    imageAlt:
      "Executive leader in a dark suit in front of colleagues in a meeting room",
  },
];

export default function LeadershipProfilesOnceApproved() {
  return (
    <section
      id="leadership-profiles"
      className="w-full bg-[#FFFFF] px-4 py-14 text-[#110C3A] antialiased sm:px-6 lg:py-20"
    >
      <div className="mx-auto w-full max-w-[1300px]">
        {/* Centered Header */}
        <div className="text-center">
          <p className="inline-flex items-center justify-center gap-2 text-[10.5px] font-extrabold uppercase tracking-[0.14em]">
            <span className="font-semibold italic text-[#E5A9C3]">03</span>
            <span className="text-[#A3367A]">People</span>
          </p>

          <h2 className="mt-2.5 text-[34px] font-black leading-[1.12] tracking-[-0.025em] text-[#0B092E] sm:text-[42px]">
            Leadership profiles,{" "}
            <span className="font-extrabold text-[#9E2A76]">once approved</span>
          </h2>

          <p className="mx-auto mt-2.5 max-w-[560px] text-[13px] leading-[1.6] text-[#5B5675]">
            We&apos;ll introduce our board and leadership team here when
            profiles are confirmed — we won&apos;t publish placeholders as
            people.
          </p>
        </div>

        {/* Three-Column Image Cards */}
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {leadershipCards.map((card) => (
            <article
              key={card.id}
              className="relative h-[220px] w-full overflow-hidden rounded-[22px] sm:h-[240px]"
            >
              <Image
                src={card.image}
                alt={card.imageAlt}
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover object-center"
              />

              {/* Top-Right Pill Badge */}
              <span
                className="inline-flex items-center rounded-full border border-white/70 bg-white/90 px-3 py-1 text-[9.5px] font-extrabold uppercase tracking-[0.12em] text-[#110C3A] shadow-[0_2px_8px_rgba(17,12,58,0.1)] backdrop-blur-sm"
                style={{
                  position: "absolute",
                  top: "14px",
                  right: "14px",
                }}
              >
                {card.tag}
              </span>
            </article>
          ))}
        </div>

        {/* Bottom Italic Footnote */}
        <p className="mt-7 text-center text-[11px] italic text-[#7A758E]">
          Until then, the officers register is the source for statutory
          appointments.
        </p>
      </div>
    </section>
  );
}
