const sectionContent = {
  id: "your-number",
  step: "03",
  eyebrow: "YOUR NUMBER",
  headingPrefix: "Keeping your ",
  headingAccent: "number",
  description:
    "Usually possible when switching — we confirm the details first.",
} as const;

interface NumberStepItem {
  stepNumber: string;
  title: string;
  description: string;
}

const numberSteps: readonly NumberStepItem[] = [
  {
    stepNumber: "1",
    title: "Choose",
    description: "Keep your existing number, get a new one, or decide later.",
  },
  {
    stepNumber: "2",
    title: "Confirm authority",
    description:
      "The account holder or a verified representative confirms the request.",
  },
  {
    stepNumber: "3",
    title: "Check what’s affected",
    description:
      "Your current provider, linked broadband, charges and any alarms.",
  },
  {
    stepNumber: "4",
    title: "Review the transfer",
    description:
      "See the requested number and expected sequence before anything happens.",
  },
] as const;

export default function KeepingYourNumberSection() {
  return (
    <section
      id={sectionContent.id}
      className="w-full bg-[#f5f6fb] px-4 py-14 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-[1120px]">
        {/* Left-aligned section header */}
        <div>
          <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em]">
            <span className="italic text-[#e093b9]">{sectionContent.step}</span>
            <span className="text-[#9d175d]">{sectionContent.eyebrow}</span>
          </p>

          <h2 className="mt-2.5 text-3xl font-extrabold tracking-[-0.025em] text-[#0c1438] sm:text-[36px]">
            {sectionContent.headingPrefix}
            <span className="text-[#b81d78]">
              {sectionContent.headingAccent}
            </span>
          </h2>

          <p className="mt-1.5 text-[12px] leading-[1.55] text-[#4b5563]">
            {sectionContent.description}
          </p>
        </div>

        {/* Connected four-step strip */}
        <div className="mt-7 grid grid-cols-1 divide-y divide-[#eef0f7] overflow-hidden rounded-3xl border border-[#eaecf4] bg-white shadow-[0_10px_28px_rgba(15,23,42,0.04)] sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x lg:divide-[#eef0f7]">
          {numberSteps.map((item) => (
            <div
              key={item.stepNumber}
              className="flex flex-col p-6 sm:even:border-l sm:even:border-[#eef0f7] lg:p-7 lg:even:border-l-0"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-[#ff9a3c] via-[#f03e7c] to-[#c81878] text-[11px] font-extrabold text-white shadow-[0_4px_12px_rgba(226,24,125,0.25)]">
                {item.stepNumber}
              </span>

              <h3 className="mt-4 text-[13.5px] font-extrabold leading-snug text-[#0c1438]">
                {item.title}
              </h3>

              <p className="mt-1.5 text-[11px] leading-[1.55] text-[#4b5563]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
