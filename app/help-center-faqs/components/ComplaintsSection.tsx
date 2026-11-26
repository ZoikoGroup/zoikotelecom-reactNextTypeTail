"use client";

export default function ComplaintsSection() {
  const enquiryPoints = [
    "Most problems are solved here",
    "Contact us to explain the issue",
    "Clicking a link doesn't open a case",
  ];

  const formalComplaintPoints = [
    "Ask us for our complaints code",
    "Our full procedure is being finalised for publication",
    "You can always ask for it in an accessible format",
  ];

  const CheckIcon = () => (
    <svg
      viewBox="0 0 24 24"
      className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#EC1C7A]"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12.5l4.5 4.5L19 7" />
    </svg>
  );

  return (
    <section
      id="complaints"
      className="w-full bg-[#F8F8FB] px-4 py-14 text-[#18133E] antialiased sm:px-6 lg:py-20"
    >
      <div className="mx-auto w-full max-w-[1300px]">
        {/* Section Header */}
        <div className="text-center">
          <p className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#6E6A85]">
            Complaints
          </p>
          <h2 className="mt-2.5 text-[32px] font-extrabold leading-[1.15] tracking-[-0.025em] text-[#18133E] sm:text-[42px]">
            A question, or a formal complaint?
          </h2>
        </div>

        {/* Top Two-Column Cards */}
        <div className="mt-9 grid grid-cols-1 gap-5 md:grid-cols-2">
          {/* Support Enquiry Card */}
          <div className="rounded-xl border border-[#ECEAF2] bg-white p-6 shadow-[0_2px_10px_rgba(24,19,62,0.025)] sm:p-7">
            <div className="flex items-center gap-2.5">
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4 shrink-0 text-[#4F6EF7]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                <path d="M8.5 9.5h7M8.5 13h4.5" />
              </svg>
              <h3 className="text-[15px] font-extrabold text-[#18133E]">
                Support enquiry
              </h3>
            </div>

            <ul className="mt-4 space-y-2.5">
              {enquiryPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-2.5 text-[12px] leading-[1.5] text-[#6E6A85]"
                >
                  <CheckIcon />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Formal Complaint Card */}
          <div className="rounded-xl border border-[#F1E8F7] bg-[#FAF4FC] p-6 shadow-[0_2px_10px_rgba(24,19,62,0.02)] sm:p-7">
            <div className="flex items-center gap-2.5">
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4 shrink-0 text-[#EC1C7A]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 4v16" />
                <path d="M5 5h12l-2.5 4L17 13H5" />
              </svg>
              <h3 className="text-[15px] font-extrabold text-[#18133E]">
                Formal complaint
              </h3>
            </div>

            <ul className="mt-4 space-y-2.5">
              {formalComplaintPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-2.5 text-[12px] leading-[1.5] text-[#6E6A85]"
                >
                  <CheckIcon />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom 3-Part Timeline / Escalation Bar */}
        <div className="mt-5 grid grid-cols-1 divide-y divide-[#ECEAF2] rounded-xl border border-[#ECEAF2] bg-white shadow-[0_2px_12px_rgba(24,19,62,0.03)] md:grid-cols-3 md:divide-x md:divide-y-0">
          {/* Step 1 */}
          <div className="p-6 sm:p-7">
            <span className="inline-block bg-gradient-to-r from-[#EC1C7A] to-[#8B2CE2] bg-clip-text text-[22px] font-black leading-none text-transparent">
              1
            </span>
            <h3 className="mt-3.5 text-[13.5px] font-extrabold text-[#18133E]">
              Raise it with us
            </h3>
            <p className="mt-1.5 text-[11.5px] leading-[1.55] text-[#7A7691]">
              Explain the problem and ask for the formal complaints process.
            </p>
          </div>

          {/* Step 2: Six weeks */}
          <div className="p-6 sm:p-7">
            <span className="inline-block bg-gradient-to-r from-[#EC1C7A] to-[#8B2CE2] bg-clip-text text-[22px] font-black leading-none text-transparent">
              6
            </span>
            <h3 className="mt-3.5 text-[13.5px] font-extrabold text-[#18133E]">
              Six weeks
            </h3>
            <p className="mt-1.5 text-[11.5px] leading-[1.55] text-[#7A7691]">
              If it&apos;s not resolved after six weeks, eligible customers can
              usually go to a free ADR scheme.
            </p>
          </div>

          {/* Step 3: Or sooner */}
          <div className="p-6 sm:p-7">
            <svg
              viewBox="0 0 24 24"
              className="h-[22px] w-[22px] text-[#7C3AED]"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 13l4.5 4.5L19 6.5" />
            </svg>
            <h3 className="mt-3.5 text-[13.5px] font-extrabold text-[#18133E]">
              Or sooner
            </h3>
            <p className="mt-1.5 text-[11.5px] leading-[1.55] text-[#7A7691]">
              You may be able to go sooner if you receive a deadlock letter. See
              Ofcom&apos;s guidance.
            </p>
          </div>
        </div>

        {/* Footer Guidance Note */}
        <p className="mt-4 text-[11.5px] leading-[1.55] text-[#7A7691]">
          Read{" "}
          <a
            href="https://www.ofcom.org.uk/phones-telecoms-and-internet/advice-for-consumers/problems/make-a-complaint"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-[#EC1C7A] underline decoration-[#EC1C7A]/50 underline-offset-2 hover:text-[#c71465]"
          >
            Ofcom&apos;s guide to complaining
          </a>
          . Please don&apos;t upload personal evidence through public pages.
        </p>
      </div>
    </section>
  );
}
