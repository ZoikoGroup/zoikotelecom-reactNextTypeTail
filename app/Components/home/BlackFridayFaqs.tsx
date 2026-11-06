const FAQS = [
  {
    question: "Does the Black Friday offer apply to digital phone lines?",
    tag: "YES",
    answer:
      "20% off the monthly charge on selected packages for the first six months of an eligible new service agreement.",
  },
  {
    question: "Does it apply to broadband and eSIMs?",
    tag: "NO",
    answer:
      "Broadband and eSIM plans are shown at their standard prices. The Black Friday offer covers digital phone lines only.",
  },
  {
    question: "Is setup free?",
    tag: "IF APPROVED",
    answer:
      "Setup is waived only where approved for your package. Installation terms are set out in your proposal before you sign.",
  },
  {
    question: "Can I keep my number?",
    tag: "YES",
    answer:
      "Keep your existing business number when you move to a digital phone line.",
  },
  {
    question: "Are eSIMs instant?",
    tag: "YES",
    answer: "Your eSIM QR code is delivered immediately on purchase.",
  },
  {
    question: "What is the minimum term?",
    tag: "TERM",
    answer:
      "Minimum term: [XX months]. Any annual price change will be shown in pounds and pence: [£X.XX — to be confirmed].",
  },
] as const;

export default function BlackFridayFaqs() {
  return (
    <section className="relative w-full overflow-hidden bg-[#fdf3ea] px-6 pb-16 pt-12 text-[#120b16] sm:px-8 lg:px-10">
      {/* Hanging tag */}
      <div
        aria-hidden="true"
        className="absolute left-6 top-0 hidden flex-col items-center md:flex lg:left-[7%]"
      >
        <span className="h-8 w-px bg-[#d4145a]/60" />
        <div className="rounded-lg bg-[#120b16] px-4 py-2 text-center text-white shadow-lg">
          <span className="mx-auto mb-1 block h-1.5 w-1.5 rounded-full bg-[#f0459f]" />
          <p className="text-sm font-bold uppercase leading-4 text-[#f0459f]">
            Sale
          </p>
          <p className="text-sm font-extrabold uppercase leading-4">
            27–30 Nov
          </p>
        </div>
      </div>

      <div className="relative mx-auto max-w-[1300px]">
        <div className="pt-6 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#c4237f]">
            FAQs
          </p>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Black Friday FAQs
          </h2>
          <span
            aria-hidden="true"
            className="mx-auto mt-4 block h-1 w-20 rounded-full bg-gradient-to-r from-[#c4237f] to-[#8a2fb3]"
          />
        </div>

        <ul className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {FAQS.map((faq) => (
            <li
              key={faq.question}
              className="rounded-xl border-l-4 border-[#c4237f] bg-white p-5 shadow-md"
            >
              <h3 className="text-base font-bold leading-6">{faq.question}</h3>
              <p className="mt-2 text-sm leading-5 text-[#3c3544]">
                <strong className="font-bold uppercase text-[#c4237f]">
                  {faq.tag}
                </strong>{" "}
                – {faq.answer}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
