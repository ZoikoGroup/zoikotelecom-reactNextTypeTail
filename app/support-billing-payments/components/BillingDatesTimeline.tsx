export default function BillingDatesTimeline() {
  const milestones = [
    {
      title: "Period starts",
      description: "The first day your charges cover.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="h-4 w-4 text-[#18133E]"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="4" y="5" width="16" height="15" rx="2" />
          <path d="M8 3v4M16 3v4M4 10h16" />
          <rect
            x="8"
            y="13"
            width="2.5"
            height="2.5"
            rx="0.5"
            fill="currentColor"
            stroke="none"
          />
        </svg>
      ),
    },
    {
      title: "Period ends",
      description: "The last day of that billing period.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="h-4 w-4 text-[#18133E]"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="4" y="5" width="16" height="15" rx="2" />
          <path d="M8 3v4M16 3v4M4 10h16" />
          <rect
            x="13.5"
            y="15"
            width="2.5"
            height="2.5"
            rx="0.5"
            fill="currentColor"
            stroke="none"
          />
        </svg>
      ),
    },
    {
      title: "Issue date",
      description: "When the bill is created and sent.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="h-4 w-4 text-[#18133E]"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M6 4h12v16l-2.5-1.8L13 20l-2.5-1.8L8 20l-2-1.5V4z" />
          <path d="M9 9h6M9 13h4" />
        </svg>
      ),
    },
    {
      title: "Due date",
      description: "When payment is due, per your agreement.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="h-4 w-4 text-[#18133E]"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="8" />
          <path d="M12 8v4l2.8 1.8" />
        </svg>
      ),
    },
    {
      title: "Payment date",
      description: "When your payment is actually made.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="h-4 w-4 text-[#18133E]"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.1"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M6 12.5l4 4L18.5 8" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="due-dates"
      className="w-full bg-white px-4 py-14 text-[#18133E] antialiased sm:px-6 lg:py-20"
    >
      <div className="mx-auto w-full max-w-[1300px]">
        {/* Section Header */}
        <div className="text-center">
          <p className="text-[10.5px] font-extrabold uppercase tracking-[0.14em] text-[#5B5675]">
            Dates
          </p>
          <h2 className="mt-2.5 text-[32px] font-extrabold leading-[1.15] tracking-[-0.025em] text-[#110C3A] sm:text-[42px]">
            Five dates that are easy to mix up
          </h2>
          <p className="mt-2.5 text-[13.5px] text-[#6E6A85]">
            Your agreement and bill set the actual dates.
          </p>
        </div>

        {/* Horizontal 5-Step Timeline */}
        <div className="relative mt-12">
          {/* Continuous multi-stop gradient connector line behind circles (desktop) */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-[10%] right-[10%] top-[26px] hidden h-[2.5px] bg-gradient-to-r from-[#10B981] via-[#3B82F6] via-[#7C3AED] to-[#EC1C7A] md:block"
          />

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-5 md:gap-4">
            {milestones.map((item) => (
              <div
                key={item.title}
                className="relative flex flex-col items-center text-center"
              >
                {/* Circular Icon Node */}
                <div className="relative z-10 flex h-[54px] w-[54px] items-center justify-center rounded-full border-2 border-[#DCE1F2] bg-white shadow-[0_4px_14px_rgba(17,12,58,0.05)]">
                  {item.icon}
                </div>

                {/* Label & Description */}
                <h3 className="mt-4 text-[13.5px] font-extrabold text-[#110C3A]">
                  {item.title}
                </h3>
                <p className="mt-1.5 max-w-[175px] text-[11.5px] leading-[1.5] text-[#6E6A85]">
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
