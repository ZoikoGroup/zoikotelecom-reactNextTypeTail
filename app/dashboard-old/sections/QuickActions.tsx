import React from "react";
import Image from "next/image";

const Quickaction = [
  {
    title: "Billing Actions",
    actions: [
      "Download Latest Invoice",
      "Change Payment Date",
      "Cancel Direct Debit",
    ],
  },
  {
    title: "Security Actions",
    actions: ["Reset Password", "Enable 2FA", "Review Login History"],
  },
  {
    title: "Technical Actions",
    actions: ["Reset Router", "Report Service Issue", "Check Network Status"],
  },
];

const Items = [
  {
    src: "/Images/Dashboard/dash_icon5.png",
    label: "Monthly Bills",
    description: "Download your billing statements",
    btn: "Downlaod",
  },
  {
    src: "/Images/Dashboard/dash_icon6.png",
    label: "Usage Reports",
    description: "View detailed usage analytics",
    btn: "View Reports",
  },
  {
    src: "/Images/Dashboard/dash_icon7.png",
    label: "Broadband Contract",
    description: "Access your service agreement",
    btn: "View Contract",
  },
  {
    src: "/Images/Dashboard/dash_icon8.png",
    label: "Accessible Formats",
    description: "Large print and screen reader versions",
    btn: "Access",
  },
];
export default function QuickActions() {
  return (
    <>
      <section className="w-full" aria-labelledby="quick-actions-heading">
        {/* Quick Actions*/}
        <div className="bg-[#f0f2f4] dark:bg-gray-900 px-6 py-10 md:px-10 md:py-12">
          <h2
            id="quick-actions-heading"
            className="text-xl md:text-2xl font-bold text-[#10446C] dark:text-white"
          >
            Quick Actions
          </h2>

          {/* Cards */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Quickaction.map((group) => (
              <article
                key={group.title}
                className="bg-white dark:bg-gray-800 border-t-[3px] border-[#F5C241] rounded-2xl px-5 py-6 flex flex-col justify-between shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-[#10446C] dark:text-white font-semibold text-base md:text-lg mb-5">
                  {group.title}
                </h3>

                <ul className="flex flex-col gap-3">
                  {group.actions.map((action) => (
                    <li key={action}>
                      <button
                        aria-label={action}
                        className="w-full dark:bg-gray-700 text-sm md:text-base py-2.5 rounded-lg border border-gray-200 bg-white 
                  transition"
                      >
                        {action}
                      </button>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>

        {/*Documents & Download   */}
        <div
          className="bg-white dark:bg-gray-900  py-12 px-6 sm:px-8 lg:px-12"
          aria-labelledby="documents-heading"
        >
          <h2
            id="documents-heading"
            className="text-[#10446C] dark:text-white text-lg sm:text-xl lg:text-2xl font-bold"
          >
            Documents & Downloads
          </h2>

          <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Items.map((item) => (
              <li key={item.label}>
                <article className="h-full dark:bg-gray-800 p-5 flex items-center gap-4 border border-gray-200 rounded-xl bg-white shadow-sm hover:shadow-md transition">
                  {/* Icon */}
                  <div className="flex items-center justify-center w-14 h-14 bg-[#F5C241] rounded-lg">
                    <Image
                      src={item.src}
                      alt={`${item.label} icon`}
                      width={56}
                      height={56}
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col justify-between">
                    <div>
                      <p className="text-base md:text-lg font-semibold text-[#10446C] dark:text-white">
                        {item.label}
                      </p>
                      <p className="text-sm md:text-base text-gray-600 dark:text-white mt-1">
                        {item.description}
                      </p>
                    </div>

                    <button className="mt-3 w-fit px-3 py-1.5 text-sm border border-gray-300 rounded-md ">
                      {item.btn}
                    </button>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
