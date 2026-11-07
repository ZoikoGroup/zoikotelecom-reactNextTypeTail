import { Check } from "lucide-react";

const offeringData = {
  sectionTitle: "Know what you're buying",
  mainHeading: "Digital phone line vs business broadband",
  digitalPhone: {
    title: "Digital phone line",
    tag: "In the offer",
    features: [
      "Your business number and calls, delivered digitally",
      "Priced per line, per month",
      "Needs an internet connection to work",
    ],
  },
  businessBroadband: {
    title: "Business broadband",
    tag: "Separate",
    features: [
      "Data, email, cloud apps and video calls",
      "Its own price, term and installation",
      "Not part of the Black Friday line offer",
    ],
  },
};

export default function OfferingComparison() {
  const { sectionTitle, mainHeading, digitalPhone, businessBroadband } =
    offeringData;

  const FeatureList = ({
    features,
    iconColor,
  }: {
    features: string[];
    iconColor: string;
  }) => (
    <ul className="mt-5 space-y-2.5 text-sm md:text-[15px] leading-relaxed">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start gap-3">
          <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${iconColor}`} />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  );

  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-20 font-sans text-gray-900">
      <div className="max-w-[1300px] mx-auto text-center">
        {/* Section Title */}
        <h3 className="text-xs md:text-sm font-semibold uppercase tracking-widest text-[#d13a8c]">
          {sectionTitle}
        </h3>

        {/* Main Heading */}
        <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-950">
          {mainHeading}
        </h2>

        {/* Comparison Cards */}
        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-4xl mx-auto">
          {/* Digital Phone Line Card (Gradient) */}
          <div className="bg-gradient-to-r from-[#d13a8c] to-[#7f26a1] text-white p-8 rounded-[2rem] shadow-lg text-left">
            <div className="flex items-center gap-3">
              <h4 className="text-xl md:text-2xl font-bold tracking-tight">
                {digitalPhone.title}
              </h4>
              <span className="bg-white text-[#d13a8c] text-[11px] font-bold uppercase tracking-wide px-3 py-1 rounded-full whitespace-nowrap">
                {digitalPhone.tag}
              </span>
            </div>
            <FeatureList
              features={digitalPhone.features}
              iconColor="text-white"
            />
          </div>

          {/* Business Broadband Card (White) */}
          <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 text-left">
            <div className="flex items-center gap-3">
              <h4 className="text-xl md:text-2xl font-bold tracking-tight text-gray-950">
                {businessBroadband.title}
              </h4>
              <span className="bg-gray-950 text-white text-[11px] font-bold uppercase tracking-wide px-3 py-1 rounded-full whitespace-nowrap">
                {businessBroadband.tag}
              </span>
            </div>
            <FeatureList
              features={businessBroadband.features}
              iconColor="text-[#d13a8c]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
