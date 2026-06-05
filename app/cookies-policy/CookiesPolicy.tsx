"use client";

const cookieSections = [
  {
    title: "Introduction",
    content:
      "At Zoiko Telecom Ltd, we use cookies to improve your browsing experience and provide you with relevant information. This Cookies Policy explains what cookies are, how we use them, and how you can manage them.",
  },
  {
    title: "What are cookies?",
    content:
      "Cookies are small text files that are stored on your device (computer, tablet, or smartphone) when you visit a website. They are used to remember your preferences, track your browsing behaviour, and provide targeted advertising.",
  },
  {
    title: "Types of cookies",
    subtitle: "We use the following types of cookies:",
    points: [
      {
        heading: "Session cookies:",
        text: "These cookies are deleted when you close your browser.",
      },
      {
        heading: "Persistent cookies:",
        text: "These cookies remain on your device until they expire or are deleted.",
      },
      {
        heading: "First-party cookies:",
        text: "These cookies are set by our website.",
      },
      {
        heading: "Third-party cookies:",
        text: "These cookies are set by other websites or services.",
      },
    ],
  },
  {
    title: "How we use cookies",
    subtitle: "We use cookies for the following purposes:",
    points: [
      {
        text: "To remember your preferences and settings.",
      },
      {
        text: "To track your browsing behaviour and provide targeted advertising.",
      },
      {
        text: "To improve our website's performance and functionality.",
      },
      {
        text: "To provide you with relevant information and offers.",
      },
    ],
  },
  {
    title: "Managing cookies",
    subtitle: "You can manage cookies by:",
    points: [
      {
        text: "Adjusting your browser settings to accept or reject cookies.",
      },
      {
        text: "Using a cookie blocker or privacy badger.",
      },
      {
        text: "Deleting cookies from your device.",
      },
    ],
  },
  {
    title: "Consequences of disabling cookies",
    content:
      "If you disable cookies, some features of our website may not function properly.",
  },
  {
    title: "Changes to this policy",
    content:
      "We may update this Cookies Policy from time to time. Please check back regularly for changes.",
  },
  {
    title: "Approval",
    content:
      "This Cookies Policy has been approved by the management team of Zoiko Telecom Ltd.",
    boxContent: "Date: May 4, 2024",
  },
];

export default function CookiesPolicyPage() {
  return (
    <div className="min-h-screen bg-[#F8F9FA] dark:bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#7B1FA2] to-[#D81B60] py-10 px-4">
        <h1 className="text-center text-white text-3xl md:text-5xl font-bold">
          Cookies Policy
        </h1>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 py-8 md:py-14">
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 md:p-10 shadow-sm">
          {cookieSections.map((section, index) => (
            <div key={index} className="mb-10 last:mb-0">
              <h2 className="text-[#D81B60] text-2xl md:text-3xl font-bold mb-5">
                {section.title}
              </h2>

              {section.content && (
                <p className="text-[#444444] dark:text-white text-sm md:text-base leading-8 mb-4">
                  {section.content}
                </p>
              )}

              {section.subtitle && (
                <p className="text-[#D81B60] font-semibold text-sm md:text-base mb-5">
                  {section.subtitle}
                </p>
              )}

              {section.points && (
                <ul className="space-y-4">
                  {section.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-[#D81B60] mt-1 text-sm">◆</span>

                      <p className="text-[#444444] dark:text-white text-sm md:text-base leading-7">
                        {"heading" in point && point.heading && (
                            <span className="font-semibold">
                                {point.heading}{" "}
                            </span>
                                                    )}
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