type FAQ = {
  question: string;
  answer: string;
};

export default function FAQSection({ faqs }: { faqs: FAQ[] }) {
  return (
    <section className="py-20 bg-white dark:bg-neutral-950 border-t border-neutral-100 dark:border-neutral-800">
      <div className="mx-auto max-w-[1320px] px-5">
        
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="inline-block bg-[#C12172]/10 dark:bg-[#C12172]/20 text-[#C12172] dark:text-pink-400 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
            FAQs
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white mt-3">
            Common Questions
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200/60 dark:border-neutral-800/80 rounded-3xl p-6 sm:p-8 space-y-3.5 hover:shadow-md transition-shadow duration-300"
            >
              <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white leading-snug">
                {faq.question}
              </h3>
              <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
