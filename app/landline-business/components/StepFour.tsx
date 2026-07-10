"use client";

interface Props {
  selectedContract: number;
  setSelectedContract: (id: number) => void;
  nextStep: () => void;
  prevStep: () => void;
}

const contracts = [
  {
    id: 1,
    title: "12 Months",
    description: "Best flexibility for growing businesses.",
    price: 11.99,
    badge: "£0 Setup",
  },
  {
    id: 2,
    title: "24 Months",
    description: "Lower monthly pricing with longer commitment.",
    price: 9.99,
    badge: "Most Popular",
  },
  {
    id: 3,
    title: "36 Months",
    description: "Maximum savings for long-term stability.",
    price: 6.99,
    badge: "Best Value",
  },
];

export default function StepFour({
  selectedContract,
  setSelectedContract,
  nextStep,
  prevStep,
}: Props) {
  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-900 rounded-[24px] p-4 sm:p-6 md:p-8">
        <div className="inline-flex border border-[#F91E8C] rounded-full px-4 py-1 text-[#F91E8C] text-xs font-bold mb-2">
          STEP 4 OF 6
        </div>

        <h2 className="text-[22px] sm:text-[28px] md:text-[32px] font-extrabold text-[#1A1A2E] dark:text-white mb-1">
          Contract Length
        </h2>

        <p className="text-[#8D8DAA] text-sm md:text-base">
          Select the contract term that works best for your business.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {contracts.map((item) => {
          const active = selectedContract === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setSelectedContract(item.id)}
              className={`rounded-[24px] border p-5 text-left transition-all ${
                active
                  ? "border-[#FF1493] shadow-[0px_2px_20px_0px_rgba(123,31,162,0.09)]"
                  : "border-[#ECEAF3] bg-white dark:bg-gray-900"
              }`}
            >
              <h3 className="text-lg font-bold text-[#1A1A2E] dark:text-white mb-2">
                {item.title}
              </h3>

              <p className="text-sm text-[#8D8DAA] mb-4 leading-6">
                {item.description}
              </p>

              <div className="flex items-baseline gap-2 flex-wrap">
                <span className="text-[#1A1A2E] dark:text-white font-extrabold text-2xl">
                  £{item.price.toFixed(2)}
                </span>
                <span className="text-[#8D8DAA] text-xs font-semibold">/mo</span>
                <span className="ml-1 text-[#F91E8C] font-bold text-xs">
                  {item.badge}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      <div className="flex flex-col sm:flex-row justify-end gap-4">
        <button
          onClick={prevStep}
          className="w-full sm:w-auto border border-[#F91E8C] text-[#F91E8C] px-6 py-3 rounded-full font-semibold"
        >
          &lt; Back
        </button>

        <button
          onClick={nextStep}
          className="w-full sm:w-auto bg-[#E91E8C] text-white px-7 py-3 rounded-full text-sm font-semibold"
        >
          Next Step &gt;
        </button>
      </div>
    </div>
  );
}