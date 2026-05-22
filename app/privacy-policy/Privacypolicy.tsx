"use client";

export default function PrivacyPolicyPage() {
  const sections = [
    {
      title: "1. Introduction",
      paragraphs: [
        'Zoiko Telecom Ltd ("we", "us", "our") is committed to protecting your personal data and upholding the highest standards of privacy, transparency and regulatory compliance.',
        "This Privacy Policy explains how we collect, use, process, store and safeguard personal data when you visit our website, apply for or use our telecom services, contact customer services, or engage with us as a reseller, supplier or business partner.",
        "We process personal data in accordance with UK GDPR, the Data Protection Act 2018, PECR, the Communications Act 2003, the Investigatory Powers Act 2016 (where applicable), Ofcom General Conditions of Entitlement, and other applicable UK telecom and consumer protection legislation.",
      ],
    },
    {
      title: "2. Data Controller Information",
      card: true,
    },
    {
      title: "3. Categories of Personal Data",
      categories: [
        {
          heading: "Identity Data",
          points: [
            "Full name",
            "Date of birth",
            "Proof of identity documentation where required for fraud prevention or regulatory compliance",
          ],
        },
        {
          heading: "Contact Data",
          points: [
            "Billing address",
            "Installation address",
            "Email address",
            "Telephone numbers",
          ],
        },
        {
          heading: "Financial and Credit Data",
          points: [
            "Bank account details",
            "Payment card information",
            "Direct debit mandates",
            "Credit reference and credit scoring data",
            "Payment history",
          ],
        },
        {
          heading: "Technical and Network Data",
          points: [
            "IP addresses",
            "SIM identifiers",
            "Device identifiers (IMEI where applicable)",
            "Network identifiers",
            "Login credentials",
            "Traffic and routing data",
            "Network performance logs",
          ],
        },
      ],
    },
    {
      title: "4. Special Categories and Vulnerability",
      paragraphs: [
        "We do not intentionally collect special category data unless required by law or voluntarily disclosed.",
        "Where vulnerability is identified, data will be processed strictly in accordance with our Vulnerability Policy and UK regulatory guidance.",
      ],
    },
    {
      title: "5. Lawful Basis for Processing",
      paragraphs: [
        "Contractual Necessity to provide telecom services and fulfil contractual obligations.",
        "Legal Obligation compliance with telecom, financial, consumer protection and investigatory legislation.",
        "Legitimate Interests fraud prevention, network security, service improvement and risk management.",
        "Consent marketing communications and certain non-essential cookies.",
        "Vital Interests emergency situations involving risk to life or safety.",
      ],
    },
    {
      title: "6. Telecom Regulatory Processing",
      paragraphs: [
        "We may process personal data to comply with Ofcom General Conditions, emergency services routing obligations, lawful interception requirements, data retention requirements and network security obligations.",
        "We implement appropriate technical and organisational measures to ensure confidentiality, integrity and availability of communications networks and services.",
      ],
    },
    {
      title: "7. Network Security and Integrity",
      paragraphs: [
        "We monitor networks to detect fraud or unlawful activity, implement security controls, conduct risk assessments, maintain incident response procedures and ensure supplier due diligence.",
        "Where a personal data breach occurs, we notify the ICO and affected individuals where required and maintain breach records in accordance with UK GDPR.",
      ],
    },
    {
      title: "8. Data Sharing",
      paragraphs: [
        "We may share data with wholesale network operators, payment processors, credit reference agencies, fraud prevention agencies, IT providers, professional advisers, regulators and law enforcement where legally required.",
        "All third parties are bound by contractual and regulatory confidentiality obligations.",
      ],
    },
    {
      title: "9. International Transfers",
      paragraphs: [
        "Where data is transferred outside the United Kingdom, we ensure adequacy regulations apply, UK IDTAs are implemented, or other appropriate safeguards are legally in place.",
      ],
    },
    {
      title: "10. Data Retention",
      paragraphs: [
        "Personal data is retained only for as long as necessary to fulfil contractual, regulatory, legal and legitimate business purposes.",
        "Financial records are generally retained for six years after contract termination.",
        "Traffic and network data are retained only for lawful and proportionate periods.",
      ],
    },
    {
      title: "11. Your Rights",
      paragraphs: [
        "You have the right to access, rectify, erase, restrict processing, object, request data portability, withdraw consent and request review of automated decisions.",
        "Requests are handled within statutory timeframes.",
      ],
    },
    {
      title: "12. Complaints and Regulatory Contact",
      paragraphs: [
        "If dissatisfied with our response, you may contact the Information Commissioner’s Office.",
        "We comply with consumer dispute resolution requirements under Ofcom regulations where applicable.",
      ],
    },
    {
      title: "13. Automated Decision-Making and Credit Checks",
      paragraphs: [
        "We may conduct automated processing for creditworthiness assessments, fraud detection and risk scoring.",
        "You may request human review of significant automated decisions.",
      ],
    },
    {
      title: "14. Marketing and Electronic Communications",
      paragraphs: [
        "We comply with PECR requirements, obtain consent where required, provide opt-out mechanisms, maintain suppression lists and respect marketing preferences.",
      ],
    },
    {
      title: "15. Children and Age Verification",
      paragraphs: [
        "Our services are not intended for children under 16 without parental or guardian consent. Age verification measures may apply where required.",
      ],
    },
    {
      title: "16. Accountability and Governance",
      paragraphs: [
        "Zoiko Telecom Ltd maintains data protection policies, staff training, internal compliance monitoring, supplier assessments, risk registers and audit processes.",
        "Senior management retains accountability for data protection governance.",
      ],
    },
    {
      title: "17. Contact Information",
      contact: true,
    },
    {
      title: "18. Changes to This Privacy Policy",
      paragraphs: [
        "We may update this Privacy Policy periodically. The latest version will always be available on our website.",
      ],
    },
  ];

  return (
    <div className="bg-[#F5F5F5] dark:bg-gray-900 dark:text-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#C12172] to-[#782984] py-10 md:py-11">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-white text-center text-[32px] md:text-[48px] font-extrabold leading-tight">
            Privacy Policy
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-5xl mx-auto px-10 py-8 md:py-14">
        <div className="bg-white dark:bg-gray-800 rounded-[24px] shadow-sm border border-[#E5E7EB] dark:border-gray-700 p-5 sm:p-8 md:p-12">
          <div className="space-y-10">
            {sections.map((section, index) => (
              <div key={index}>
                {/* Heading */}
                <h2 className="text-[#D81B60] text-[22px] md:text-[24px] font-bold leading-[40px] mb-2 mt-2">
                  {section.title}
                </h2>

                {/* Paragraphs */}
                {section.paragraphs && (
                  <div className="space-y-2">
                    {section.paragraphs.map((para, idx) => (
                      <p
                        key={idx}
                        className="text-[#444444] dark:text-gray-300 text-[15px] md:text-[16px] leading-[30px]"
                      >
                        {para}
                      </p>
                    ))}
                  </div>
                )}

                {/* Categories */}
                {section.categories && (
                  <div className="space-y-6">
                    {section.categories.map((category, idx) => (
                      <div key={idx}>
                        <h3 className="text-[#444444] dark:text-white text-[18px]  mb-3">
                          {category.heading}
                        </h3>

                        <ul className="space-y-2 pl-5">
                          {category.points.map((point, pointIdx) => (
                            <li
                              key={pointIdx}
                              className="list-disc text-[#444444] dark:text-gray-300 text-[15px] md:text-[16px] leading-[28px]"
                            >
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}

                {/* Data Controller Card */}
                {section.card && (
                  <div className="bg-[#FAFAFA] dark:bg-gray-900 border border-[#DDDDDD] dark:border-gray-700 rounded-[8px] p-5 mt-2">
                    <div className="space-y-0 text-[#444444] dark:text-gray-300 text-[15px] md:text-[16px] leading-[30px]">
                      <p>Zoiko Telecom Ltd</p>
                      <p>
                        Registered in England and Wales (Company No. 15021457)
                      </p>
                      <p>
                        Registered Office: 35 Berkeley Square, London W1J 5BF,
                        United Kingdom
                      </p>
                      <p>ICO Registration Number: ZB585887</p>

                      <div className="pt-2">
                        <p>
                          Zoiko Telecom Ltd acts as the Data Controller for the
                          personal data described in this policy.
                        </p>
                      </div>

                      <div className="pt-2">
                        <p>
                          Data Protection Contact:
                        </p>

                        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                          <p>Email: privacy@zoikotelecom.com</p>
                          <span className="hidden md:block">|</span>
                          <p>Tel: +44 (0) 207 164 6399</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Contact Card */}
                {section.contact && (
                  <>
                    <p className="text-[#444444] dark:text-gray-300 text-[15px] md:text-[16px] leading-[28px] mb-5">
                      If you have any questions or concerns regarding this
                      Privacy Policy, please contact us at:
                    </p>

                    <div className="bg-[#FAFAFA] dark:bg-gray-900 border border-[#DDDDDD] dark:border-gray-700 rounded-[8px] p-5">
                      <div className="space-y-2 text-[#444444] dark:text-gray-300 text-[15px] md:text-[16px] leading-[28px]">
                        <p>
                          <strong>Zoiko Telecom Ltd</strong>
                        </p>
                        <p>Email: info@zoikotelecom.com</p>
                        <p>Telephone: +44 (0) 207 164 6399</p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}

            {/* Acknowledgement */}
            <div className="border border-[#E5E7EB] dark:border-gray-700 bg-[#FAFAFA] dark:bg-gray-900 rounded-[8px] px-5 py-4">
              <p className="text-[#666666] dark:text-gray-300 text-[14px] md:text-[15px] leading-[26px]">
                <strong>Acknowledgement:</strong> By accessing or using the
                Website, you acknowledge that you have read, understood, and
                agree to be bound by this Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}