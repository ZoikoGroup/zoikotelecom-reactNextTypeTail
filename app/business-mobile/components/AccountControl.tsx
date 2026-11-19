import React from "react";
import { Key, FileText, Users, User } from "lucide-react";

const ACCOUNT_ROLES = [
  {
    id: "account-owner",
    title: "Account owner",
    icon: Key,
    features: [
      "Signs contracts",
      "Approves new lines",
      "Authorises number moves",
    ],
    borderColor: "border-t-[#E0127C]",
  },
  {
    id: "finance-contact",
    title: "Finance contact",
    icon: FileText,
    features: [
      "Receives invoices",
      "Queries charges",
      "No access to staff lines",
    ],
    borderColor: "border-t-[#7B3FE4]",
  },
  {
    id: "team-administrator",
    title: "Team administrator",
    icon: Users,
    features: [
      "Requests SIMs and swaps",
      "Reports lost devices",
      "With the owner's permission",
    ],
    borderColor: "border-t-[#3D7BFF]",
  },
  {
    id: "line-user",
    title: "Line user",
    icon: User,
    features: [
      "Uses their own line",
      "Asks for help",
      "Can't change the account",
    ],
    borderColor: "border-t-[#10B981]",
  },
] as const;

export default function AccountControl() {
  return (
    <section className="w-full bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-[1300px]">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#434A6E]">
            ACCOUNT CONTROL
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#11183C] sm:text-4xl lg:text-[42px] lg:leading-[1.15]">
            Who can manage your business mobiles
          </h2>
          <p className="mt-3.5 text-sm leading-relaxed text-[#4B5563] sm:text-base">
            Agree who can approve changes before you start. Online account
            management isn&apos;t available yet.
          </p>
        </div>

        {/* Four Cards Grid */}
        <div className="mx-auto mt-12 grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ACCOUNT_ROLES.map((role) => {
            const Icon = role.icon;
            return (
              <div
                key={role.id}
                className={`flex flex-col justify-between rounded-3xl bg-white p-7 shadow-xl sm:p-8`}
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#F4297B] to-[#7C3AED] text-white shadow-md">
                    <Icon className="h-6 w-6" strokeWidth={2.25} />
                  </div>

                  <h3 className="mt-6 text-xl font-extrabold tracking-tight text-[#11183C]">
                    {role.title}
                  </h3>

                  <div className="mt-5 space-y-3">
                    {role.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <span className="mt-1 flex h-2 w-2 shrink-0 rounded-full bg-[#E11D74]" />
                        <p className="text-xs leading-relaxed text-[#4B5563]">
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
