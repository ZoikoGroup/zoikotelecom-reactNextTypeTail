"use client";

const esgSections = [
  {
    title: "Introduction",
    content:
      "At Zoiko Telecom, we are committed to operating in a responsible and sustainable manner, ensuring that our activities have a positive impact on the environment, society, and our stakeholders. This ESG Policy outlines our approach to managing environmental, social, and governance issues, and our commitment to creating long-term value for our stakeholders.",
  },
  {
    title: "Environmental",
    content:
      "We are dedicated to minimising our environmental impact and promoting sustainable practices throughout our operations. Our environmental objectives include:",
    points: [
      {
        text: "Reducing our carbon footprint through energy-efficient practices and renewable energy sources",
      },
      {
        text: "Minimising waste and promoting recycling",
      },
      {
        text: "Ensuring compliance with environmental regulations and standards",
      },
    ],
  },
  {
    title: "Social",
    content:
      "We are committed to making a positive impact on society, through our operations, products, and services. Our social objectives include:",
    points: [
      {
        text: "Promoting diversity, equity, and inclusion in our workplace and supply chain",
      },
      {
        text: "Ensuring ethical and responsible business practices",
      },
      {
        text: "Supporting community development and charitable initiatives",
      },
    ],
  },
  {
    title: "Governance",
    content:
      "We are committed to high standards of governance, transparency, and accountability. Our governance objectives include:",
    points: [
      {
        text: "Ensuring compliance with relevant laws and regulations",
      },
      {
        text: "Maintaining a robust risk management framework",
      },
      {
        text: "Promoting ethical and responsible decision-making",
      },
    ],
  },
  {
    title: "Implementation and Review",
    content:
      "This ESG Policy will be implemented through our existing management systems and procedures. We will review and update this policy annually, or as needed, to ensure it remains effective and relevant.",
  },
  {
    title: "Approval",
    content:
      "This ESG Policy has been approved by the management team of Zoiko Telecom Ltd.",
    boxContent: "Date: May 4, 2024",
  },
];

export default function ESGPolicyPage() {
  return (
    <div className="min-h-screen bg-[#F8F9FA] dark:bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#7B1FA2] to-[#D81B60] py-10 px-4">
        <h1 className="text-center text-white text-3xl md:text-5xl font-bold">
          ESG Policy
        </h1>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 py-8 md:py-14">
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 md:p-10 shadow-sm">
          {esgSections.map((section, index) => (
            <div key={index} className="mb-10 last:mb-0">
              <h2 className="text-[#D81B60] text-2xl md:text-3xl font-bold mb-5">
                {section.title}
              </h2>

              {section.content && (
                <p className="text-[#444444] dark:text-white text-sm md:text-base leading-8 mb-5">
                  {section.content}
                </p>
              )}

              {section.points && (
                <ul className="space-y-4">
                  {section.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-[#D81B60] mt-1 text-sm">◆</span>

                      <p className="text-[#444444] dark:text-white text-sm md:text-base leading-7">
                        {point.text}
                      </p>
                    </li>
                  ))}
                </ul>
              )}

              {section.boxContent && (
                <div className="mt-6 border-l-4 border-[#D81B60] bg-[#FAFAFA] dark:bg-gray-700 rounded-md px-5 py-4">
                  <p className="text-[#444444] dark:text-white text-sm md:text-base">
                    {section.boxContent}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
