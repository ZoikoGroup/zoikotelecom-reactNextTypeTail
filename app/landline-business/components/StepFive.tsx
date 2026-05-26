"use client";

interface Props {
  selectedNumber: number;
  setSelectedNumber: (id: number) => void;
  nextStep: () => void;
  prevStep: () => void;
}

const tabs = [
  {
    id: 0,
    title: "Geographic (01/02)",
    description:
      "Get local area presence with geographic numbers.",
  },
  {
    id: 1,
    title: "Freephone (0800)",
    description:
      "Give your customers a free-to-call number.",
  },
  {
    id: 2,
    title: "National (0845)",
    description:
      "Nationwide business presence across the UK.",
  },
  {
    id: 3,
    title: "London (0203)",
    description:
      "Prestigious London business number.",
  },
];

export default function StepFive({
  selectedNumber,
  setSelectedNumber,
  nextStep,
  prevStep,
}: Props) {
  return (
    <div className="space-y-6">
      {/* HEADER */}
      <div className="bg-white dark:bg-gray-900 rounded-[24px] p-6 md:p-8">
        <div className="inline-flex border border-[#F91E8C] rounded-full px-4 py-1 text-[#F91E8C] text-xs font-bold mb-3">
          STEP 5 OF 6
        </div>

        <h2 className="text-[28px] md:text-[32px] font-bold leading-tight text-[#1A1A2E] dark:text-white mb-2">
          Choose Your Number
        </h2>

        <p className="text-[#8D8DAA] text-sm md:text-m">
          Select the type and location for your new
          digital landline number.
        </p>
      </div>

      {/* CONTENT */}
      <div className="bg-white dark:bg-gray-900 rounded-[24px] p-6 md:p-8">
        <p className="text-xs font-bold tracking-[2px] text-[#77779A] mb-4">
          NUMBER TYPE
        </p>

        {/* TABS */}
        <div className="flex flex-wrap gap-3 mb-1">
          {tabs.map((tab) => {
            const active =
              selectedNumber === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() =>
                  setSelectedNumber(tab.id)
                }
                className={`px-3 py-2 rounded-full border text-sm md:text-sm font-semibold transition-all duration-300 ${
                  active
                    ? "bg-[#F91E8C] border-[#F91E8C] text-white"
                    : "border-[#E8DFF0] text-[#1A1A2E] dark:text-white bg-white dark:bg-gray-900"
                }`}
              >
                {tab.title}
              </button>
            );
          })}
        </div>

        {/* DESCRIPTION BOX */}
        <div className="bg-[#FAFAFA] dark:bg-gray-800 rounded-[20px] p-4 border border-[#F0F0F0]">
          <h3 className="font-bold text-[#1A1A2E] dark:text-white text-l mb-1">
            {tabs[selectedNumber].title}
          </h3>

          <p className="text-[#6F6F86] text-base leading-relaxed">
            {
              tabs[selectedNumber]
                .description
            }
          </p>
        </div>
        </div>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row justify-end gap-4">
        <button
          onClick={prevStep}
          className="border border-[#F91E8C] text-[#F91E8C] px-6 py-2 rounded-full font-semibold before:content-['<'] before:mr-2"
        >
          Back
        </button>

        <button
          onClick={nextStep}
            className="bg-[#E91E8C] text-white px-7 py-3 rounded-full text-sm font-semibold after:content-['>'] after:ml-2"
        >
          Next Step 
        </button>
      </div>
      </div>
   
  );
}