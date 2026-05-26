"use client";

const slaverySections = [
  {
    title: "Introduction",
    content:
      "Zoiko Telecom Ltd is committed to conducting business in a responsible and ethical manner. We are dedicated to ensuring that our operations and supply chain are free from modern slavery and human trafficking.",
  },
  {
    title: "Policy Statement",
    content:
      "Zoiko Telecom Ltd is opposed to modern slavery and human trafficking in all its forms. We are committed to:",
    points: [
      {
        text: "Ensuring that our employees are not subject to modern slavery or human trafficking",
      },
      {
        text: "Conducting due diligence on our supply chain to identify and mitigate the risk of modern slavery and human trafficking",
      },
      {
        text: "Collaborating with our suppliers and partners to ensure that they adhere to the same standards",
      },
      {
        text: "Providing training and awareness programmes for our employees to recognise and report any instances of modern slavery or human trafficking",
      },
    ],
  },
  {
    title: "Responsibility",
    content:
      "The responsibility for implementing this policy lies with all employees, contractors, and suppliers of Zoiko Telecom Ltd. Our management team is responsible for ensuring that this policy is communicated and enforced throughout the organisation.",
  },
  {
    title: "Due Diligence",
    content:
      "We will conduct regular due diligence on our supply chain to identify and mitigate the risk of modern slavery and human trafficking. This will include:",
    points: [
      {
        text: "Conducting risk assessments on our suppliers and partners",
      },
      {
        text: "Reviewing our suppliers’ and partners’ modern slavery and human trafficking policies and procedures",
      },
      {
        text: "Auditing our suppliers’ and partners’ operations to ensure compliance with this policy",
      },
    ],
  },
  {
    title: "Reporting",
    content:
      "If any employee, contractor, or supplier has reason to believe that modern slavery or human trafficking is occurring within our organisation or supply chain, they must report it immediately to our management team.",
  },
  {
    title: "Training and Awareness",
    content:
      "We will provide training and awareness programmes for our employees to recognise and report any instances of modern slavery or human trafficking.",
  },
  {
    title: "Review and Update",
    content:
      "This policy will be reviewed and updated annually, or as needed, to ensure that it remains effective and relevant.",
  },
  {
    title: "Approval",
    content:
      "This policy has been approved by the management team of Zoiko Telecom Ltd.",
    boxContent: "Date: May 4, 2024",
  },
];

export default function ModernSlaveryPolicyPage() {
  return (
    <div className="min-h-screen bg-[#F8F9FA] dark:bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#7B1FA2] to-[#D81B60] py-10 px-4">
        <h1 className="text-center text-white text-3xl md:text-5xl font-bold">
          Modern Slavery Policy
        </h1>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 py-8 md:py-14">
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 md:p-10 shadow-sm">
          {slaverySections.map((section, index) => (
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