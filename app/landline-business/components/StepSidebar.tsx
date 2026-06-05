interface SidebarProps {
  currentStep: number;
}

const steps = [
  {
    id: 1,
    title: "Select Product",
    subtitle: "Choose your landline type",
  },
  {
    id: 2,
    title: "Inclusive Call Bundles",
    subtitle: "Pick call package",
  },
  {
    id: 3,
    title: "Porting Options",
    subtitle: "Keep existing number",
  },
  {
    id: 4,
    title: "Contract Length",
    subtitle: "Select your term",
  },
  {
    id: 5,
    title: "Number Selection",
    subtitle: "Choose your number",
  },
  {
    id: 6,
    title: "Hardware",
    subtitle: "Optional device add-on",
  },
];

export default function StepSidebar({
  currentStep,
}: SidebarProps) {
  return (
    <div className="space-y-3">
      {steps.map((step) => {
        const active = currentStep === step.id;

        return (
          <div
            key={step.id}
            className={`rounded-[18px] border px-4 py-4 flex items-start gap-4 transition-all ${
              active
                ? "border-[#FF1493] bg-[#FCEAFF]"
                : "border-[#ECEAF3] bg-white dark:bg-gray-900 dark:border-gray-700"
            }`}
          >
            <div
              className={`min-w-[36px] w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold ${
                active
                  ? "bg-gradient-to-br from-purple-700 via-pink-700 to-pink-500 text-white"
                  : "bg-white border border-[#E5E5EF] text-[#B5B5C3]"
              }`}
            >
              {step.id}
            </div>

            <div className="min-w-0">
              <h3
                className={`text-sm font-semibold break-words ${
                  active
                    ? "text-[#B91965]"
                    : "text-[#1A1A2E] dark:text-white"
                }`}
              >
                {step.title}
              </h3>

              <p className="text-xs text-[#9A9AAF] mt-1 break-words">
                {step.subtitle}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}