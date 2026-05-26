"use client";

export default function TermsConditionsPage() {
  const sections = [
    {
      title: "1. Introduction",
      content:
        "These Terms and Conditions govern your access to and use of the Zoiko Telecom Ltd website. By accessing or using the Website, you agree to comply with and be bound by these Terms. If you do not agree with any part of these Terms, please do not use the Website.",
    },
    {
      title: "2. Use of the Website",
      points: [
        "The Website and its contents, including text, graphics, logos, icons, and software, are the property of Zoiko Telecom Ltd or our third-party licensors and are protected by intellectual property laws.",
        "You may use the Website for personal, non-commercial purposes only.",
        "You may not reproduce, modify, display, distribute, sell, or otherwise exploit the content of the Website without our prior written permission.",
        "We reserve the right to suspend or terminate your access to the Website if you breach these Terms.",
      ],
    },
    {
      title: "3. Intellectual Property",
      points: [
        "The content and materials available on the Website, including trademarks, logos, and service marks, are owned by Zoiko Telecom Ltd or licensed to us.",
        "The Website and all content are protected by copyright, trademark, and other intellectual property rights.",
        "Any unauthorised use of the Website’s content may result in legal action.",
      ],
    },
    {
      title: "4. User Conduct",
      content:
        "You agree to use the Website in accordance with all applicable laws and regulations.",
      subTitle: "You must not:",
      points: [
        "Engage in any conduct that could damage, disable, or impair the Website or interfere with other users’ access.",
        "Upload, transmit, or distribute viruses, malware, or any harmful software.",
        "Use the Website for fraudulent, illegal, or deceptive purposes.",
        "Harass, threaten, or bully other users or engage in any form of abusive behaviour.",
      ],
    },
    {
      title: "5. Privacy and Data Protection",
      points: [
        "Your use of the Website is also governed by our Privacy Policy, which explains how we collect, use, and protect your personal data.",
        "By using the Website, you consent to the collection and processing of your data in accordance with our Privacy Policy.",
      ],
    },
    {
      title: "6. Disclaimer",
      points: [
        'The Website and all its contents are provided on an "as is" and "as available" basis.',
        "We disclaim all warranties, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement.",
        "We do not guarantee that the Website will be free from errors, viruses, or interruptions.",
      ],
    },
    {
      title: "7. Limitation of Liability",
      points: [
        "To the fullest extent permitted by applicable law, Zoiko Telecom Ltd shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising from your use of the Website.",
        "This limitation of liability does not affect any liability that cannot be excluded or limited by law.",
      ],
    },
    {
      title: "8. Force Majeure",
      content:
        "Zoiko Telecom Ltd shall not be held liable for any failure or delay in performance due to circumstances beyond our reasonable control, including natural disasters, acts of government, strikes, war, or pandemics.",
    },
    {
      title: "9. Governing Law and Jurisdiction",
      points: [
        "These Terms shall be governed by and construed in accordance with the laws of England and Wales.",
        "Any disputes shall be resolved through arbitration under the rules of the London Court of International Arbitration.",
      ],
    },
    {
      title: "10. Entire Agreement",
      content:
        "These Terms constitute the entire agreement between you and us regarding your use of the Website and supersede any prior communications or agreements.",
    },
    {
      title: "11. Amendments",
      points: [
        "We reserve the right to modify or update these Terms at any time, at our sole discretion.",
        "Your continued use of the Website following changes constitutes acceptance of those changes.",
      ],
    },
  ];

  return (
    <div className="bg-[#F5F5F5] dark:bg-gray-900 dark:text-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#C12172] to-[#782984] py-10 md:py-11">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-white text-center text-[32px] md:text-[48px] font-extrabold leading-tight">
            Terms and Conditions
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-5xl mx-auto px-4 py-8 md:py-10">
        <div className="bg-white dark:bg-gray-800 rounded-[24px] shadow-sm border border-[#E5E7EB] dark:border-gray-700 p-5 sm:p-8 md:p-12">
          <div className="space-y-10">
            {sections.map((section, index) => (
              <div key={index}>
                {/* Heading */}
                <h2 className="text-[#D81B60] text-[22px] md:text-[24px] font-bold leading-[40px] mb-4">
                  {section.title}
                </h2>

                {/* Paragraph */}
                {section.content && (
                  <p className="text-[#2D3748] dark:text-gray-300 text-[15px] md:text-[16px] leading-[28px] mb-5">
                    {section.content}
                  </p>
                )}

                {section.subTitle && (
                        <p className="text-[#2D3748] dark:text-gray-300 text-[16px] font-semibold leading-[28px] mb-4">
                            {section.subTitle}
                        </p>
                        )}

                {/* Points */}
                {section.points && (
                  <ul className="space-y-4">
                    {section.points.map((point, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-[#2D3748] dark:text-gray-300 text-[15px] md:text-[16px] leading-[28px]"
                      >
                        <span className="text-[#D81B60] mt-[2px] text-[18px]">
                          ◆
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            {/* Contact Information */}
            <div>
              <h2 className="text-[#D81B60] text-[22px] md:text-[24px] font-bold leading-[40px] mb-4">
                12. Contact Information
              </h2>

              <p className="text-[#2D3748] dark:text-gray-300 text-[15px] md:text-[16px] leading-[28px] mb-6">
                If you have any questions or concerns regarding these Terms,
                please contact us at:
              </p>

              <div className="bg-[#F8F9FA] dark:bg-gray-900 border-l-4 border-[#D81B60] rounded-[10px] p-5 mb-6">
                <div className="space-y-3 text-[#2D3748] dark:text-gray-300 text-[15px] md:text-[16px]">
                  <p>
                    <strong>Zoiko Telecom Ltd</strong>
                  </p>
                  <p>
                    <strong>Email:</strong> info@zoikotelecom.com
                  </p>
                  <p>
                    <strong>Telephone:</strong> +44 (0) 207 164 6399
                  </p>
                </div>
              </div>

              {/* Acknowledgement Box */}
              <div className="border border-[#6C5CE7] rounded-[12px] bg-[rgba(108,92,231,0.05)] px-5 py-4">
                <p className="text-[#2D3748] dark:text-gray-300 text-[14px] md:text-[16px] leading-[28px]">
                  <strong>Acknowledgement:</strong> By accessing or using the
                  Website, you acknowledge that you have read, understood, and
                  agree to be bound by these Terms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}