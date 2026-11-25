import Image from "next/image";

interface PracticeItem {
  title: string;
  description: string;
}

const practiceItems: PracticeItem[] = [
  {
    title: "Clear information",
    description:
      "Plain explanations of what a service is and what it depends on.",
  },
  {
    title: "Relevant choices",
    description: "Options that fit people and organisations, without pressure.",
  },
  {
    title: "Accessible routes to help",
    description:
      "Help that's easy to find — and more than one way to reach us.",
  },
];

export default function TurningValuesIntoEverydayPractice() {
  return (
    <section
      id="how-we-work"
      className="w-full bg-[#FDFCFF] px-4 py-14 text-[#110C3A] antialiased sm:px-6 lg:py-20"
    >
      <div className="mx-auto grid w-full max-w-[1300px] grid-cols-1 items-center gap-10 lg:grid-cols-[400px_1fr] lg:gap-14">
        {/* Left: Arch / Dome-Topped Image Frame */}
        <div className="mx-auto w-full max-w-[400px] lg:mx-0">
          <div className="relative h-[370px] w-full overflow-hidden rounded-t-[200px] rounded-b-[24px] bg-[#E6E5EA] shadow-[0_12px_30px_rgba(17,12,58,0.06)] sm:h-[400px]">
            <Image
              src="/Images/vals/5.png"
              alt="Two people shaking hands across a meeting table"
              fill
              sizes="(min-width: 1024px) 400px, 100vw"
              className="object-cover object-center"
            />
          </div>
        </div>

        {/* Right: Eyebrow, Heading, Subtitle & Horizontal Practice Rows */}
        <div>
          <p className="flex items-center gap-2 text-[10.5px] font-extrabold uppercase tracking-[0.14em]">
            <span className="font-semibold italic text-[#E5A9C3]">03</span>
            <span className="text-[#A3367A]">How we work</span>
          </p>

          <h2 className="mt-2.5 max-w-[540px] text-[34px] font-black leading-[1.12] tracking-[-0.025em] text-[#0B092E] sm:text-[42px]">
            Turning values into{" "}
            <span className="font-extrabold italic text-[#9E2A76]">
              everyday practice
            </span>
          </h2>

          <p className="mt-3 text-[13px] text-[#5B5675]">
            These are design intentions. Actual service terms and availability
            are described separately.
          </p>

          {/* Stacked Practice Items with Hairline Dividers */}
          <div className="mt-7 divide-y divide-[#F2ECE6] border-b border-[#F2ECE6]">
            {practiceItems.map((item) => (
              <div key={item.title} className="py-4 first:pt-2">
                <h3 className="text-[14.5px] font-extrabold text-[#0B092E]">
                  {item.title}
                </h3>
                <p className="mt-1 text-[12px] leading-[1.55] text-[#5B5675]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
