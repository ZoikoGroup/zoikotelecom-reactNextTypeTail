"use client";
import React, { useState } from "react";
const stepData = {
  billing: [
    {
      id: 1,
      title: "View/Download Bills",
      description: "Access and download your bills in PDF format",
      buttonText: "Download Bills",
    },
    {
      id: 2,
      title: "Payment Method",
      description: "Update your payment information",
      buttonText: "Change Method",
    },
    {
      id: 3,
      title: "Billing Cycle",
      description: "Adjust your billing cycle preferences",
      buttonText: "Adjust Cycle",
    },
    {
      id: 4,
      title: "Paperless Billing",
      description: "Switch to eco-friendly paperless bills",
      buttonText: "Go Paperless",
    },
  ],

  broadband: [
    {
      id: 1,
      title: "Data Usage",
      description: "Monitor your monthly data consumption",
      buttonText: "View Usage",
    },
    {
      id: 2,
      title: "Speed Check",
      description: "Test your current broadband speeds",
      buttonText: "Check Speed",
    },
    {
      id: 3,
      title: "Wi-Fi Optimization",
      description: "Optimize your Wi-Fi performance",
      buttonText: "Optimize Wi-Fi",
    },
    {
      id: 4,
      title: "Service Uptime",
      description: "View your service reliability statistics",
      buttonText: "View Uptime",
    },
  ],

  account: [
    {
      id: 1,
      title: "Contact Information",
      description: "Update your personal details",
      buttonText: "Edit Info",
    },
    {
      id: 2,
      title: "Address",
      description: "Change your service address",
      buttonText: "Change Address",
    },
    {
      id: 3,
      title: "Marketing Preference",
      description: "Manage your communication preferences",
      buttonText: "Manage Preferences",
    },
  ],

  security: [
    {
      id: 1,
      title: "Two-Factor Authentication",
      description: "Enable 2FA for enhanced security",
      buttonText: "Enable 2FA",
    },
    {
      id: 2,
      title: "Change Password",
      description: "Update your account password",
      buttonText: "Change Password",
    },
    {
      id: 3,
      title: "Login History",
      description: "Review your recent login activity",
      buttonText: "View History",
    },
    {
      id: 4,
      title: "Report Suspicious Activity",
      description: "Report any suspicious account activity",
      buttonText: "Report Activity",
    },
  ],

  support: [
    {
      id: 1,
      title: "Support Ticket",
      description: "Raise a new support ticket",
      buttonText: "Create Ticket",
    },
    {
      id: 2,
      title: "Live Chat",
      description: "Chat with our support team",
      buttonText: "Start Chat",
    },
    {
      id: 3,
      title: "Call-back Request",
      description: "Request a call from our support team",
      buttonText: "Request Call",
    },
    {
      id: 4,
      title: "Ticket History",
      description: "View your past support tickets",
      buttonText: "View History",
    },
  ],
};

export default function DashboardOptions() {
  const [activeTab, setActiveTab] = useState<
    "overview" | "billing" | "broadband" | "account" | "security" | "support"
  >("overview");

  const tabs: Array<{ id: "overview" | "billing" | "broadband" | "account" | "security" | "support"; label: string; style?: string }> = [
    { id: "overview", label: "Overview", style: "hidden sm:block" },
    { id: "billing", label: "Billing" },
    { id: "broadband", label: "Broadband" },
    { id: "account", label: "Account Settings" },
    { id: "security", label: "Security" },
    { id: "support", label: "Support" },
  ];

  return (
    <>
      <section
  aria-labelledby="select-your-setup-type-heading"
  className="bg-[#f8fafc] dark:bg-gray-900 flex flex-col py-8 sm:px-3 lg:px-8 lg:py-12 border-t border-gray-200 dark:border-gray-700 transition-colors duration-300"
>

  {/* Tabs */}
  <div className="bg-white dark:bg-gray-800 rounded-xl p-1 md:p-2 flex gap-1 md:gap-3">

    {tabs.map((tab) => (
      <button
        key={tab.id}
        onClick={() => setActiveTab(tab.id)}
        className={`${tab.style} px-1 md:px-4 py-2 md:py-5 text-[10px] md:text-base rounded-md font-semibold md:font-bold transition whitespace-wrap
        ${
          activeTab === tab.id
            ? "bg-[#fefbf4] dark:bg-gray-700 border-b-2 border-[#ffd300] text-[#10446C] dark:text-yellow-400"
            : "text-gray-600 dark:text-white"
        }`}
      >
        {tab.label}
      </button>
    ))}

  </div>

  {/* Overview */}
  {activeTab === "overview" ? (
    <div className="mt-5 p-4 md:p-8">

      <h2 className="text-[#10446C] dark:text-white font-semibold text-lg mb-4">
        Account Overview
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Recent Activity */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm p-5">

          <h3 className="text-[#10446C] dark:text-white font-semibold text-sm mb-4">
            Recent Activity
          </h3>

          <div className="divide-y divide-gray-200 dark:divide-gray-700">

            {/** Items */}
            {[
              { icon: "🧾", title: "Payment Processed", desc: "Monthly payment of £34.99 processed successfully", time: "2 days ago" },
              { icon: "🔧", title: "Router Restart", desc: "Router was restarted remotely", time: "5 days ago" },
              { icon: "📄", title: "Bill Generated", desc: "Your August bill is now available", time: "1 week ago" },
            ].map((item, i) => (
              <div key={i} className="flex gap-3 py-4">
                <div className="w-9 h-9 flex items-center justify-center rounded-full bg-[#F5C241]/20">
                  {item.icon}
                </div>

                <div>
                  <p className="text-sm md:text-base font-medium text-[#10446C] dark:text-white">
                    {item.title}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {item.desc}
                  </p>
                  <p className="text-[11px] text-gray-400 dark:text-gray-500 mt-1">
                    {item.time}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>

        {/* Data Usage */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm p-5">

          <h3 className="text-[#10446C] dark:text-white font-semibold text-sm mb-4">
            Data Usage This Month
          </h3>

          {/* Progress */}
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-2">
            <div className="bg-[#F5C241] h-2 rounded-full w-[45%]" />
          </div>

          <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-4">
            <span className="text-[#10446C] dark:text-white font-medium">
              45.2 GB used
            </span>
            <span>Unlimited</span>
          </div>

          {/* Chart */}
          <div className="flex items-end justify-between h-40 gap-2 md:gap-6">
            {[
              { day: "Mon", h: "40%" },
              { day: "Tue", h: "70%" },
              { day: "Wed", h: "30%" },
              { day: "Thu", h: "85%" },
              { day: "Fri", h: "55%" },
              { day: "Sat", h: "80%" },
              { day: "Sun", h: "60%" },
            ].map((item) => (
              <div key={item.day} className="flex flex-col items-center w-full h-full">
                <div className="flex items-end h-full w-full">
                  <div
                    className="w-full bg-[#F5C241] rounded-sm"
                    style={{ height: item.h }}
                  />
                </div>
                <span className="text-[10px] md:text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {item.day}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  ) : (

    <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stepData[activeTab].map((item) => (
        <li key={item.id}>
          <div className="h-full bg-white dark:bg-gray-800 rounded-xl shadow-md p-5 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition">

            <h3 className="text-base md:text-lg font-semibold text-[#10446C] dark:text-white">
              {item.title}
            </h3>

            <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 mt-2">
              {item.description}
            </p>

            <button className="mt-4 px-4 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md text-[#10446C] dark:text-white font-medium hover:bg-gray-100 dark:hover:bg-gray-700">
              {item.buttonText}
            </button>

          </div>
        </li>
      ))}
    </ul>

  )}
</section>
    </>
  );
}
