import React from "react";
import { CircleAlert, CircleDot, IdCard, Users } from "lucide-react";

const SAFETY_ITEMS = [
  {
    id: "emergency-calls",
    title: "Emergency calls",
    text: "A virtual inbound number isn’t a guaranteed 999-enabled line. Make sure your business has a phone line that can call emergency services.",
    icon: CircleAlert,
    card: "bg-[#FDF2F2]",
    iconBg: "bg-[#DC2626]",
    headingColor: "text-[#8B1D1D]",
    bodyColor: "text-[#7F1D1D]",
  },
  {
    id: "showing-your-number",
    title: "Showing your number",
    text: "You can only display a number as your caller ID if you have the right to use it. We check this to help prevent spoofing.",
    icon: IdCard,
    card: "bg-[#EEF1FD]",
    iconBg: "bg-[#3D5AFE]",
    headingColor: "text-[#1E2A78]",
    bodyColor: "text-[#283593]",
  },
  {
    id: "privacy-and-recording",
    title: "Privacy & recording",
    text: "Calls aren’t recorded automatically. If recording becomes available, it will come with consent and retention rules.",
    icon: CircleDot,
    card: "bg-[#FDEFF6]",
    iconBg: "bg-[#E11D74]",
    headingColor: "text-[#701A47]",
    bodyColor: "text-[#6B1C44]",
  },
  {
    id: "accessible-support",
    title: "Accessible support",
    text: "Prefer a different way to contact us, or need information in another format? Just ask.",
    icon: Users,
    card: "bg-[#FFF4E5]",
    iconBg: "bg-[#E08A00]",
    headingColor: "text-[#6B3A00]",
    bodyColor: "text-[#5C3300]",
  },
] as const;

export default function ThingsToKnowBeforeYouChoose() {
  return (
    <section className="w-full bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1300px]">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#434A6E]">
            Safety &amp; trust
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#11183C] sm:text-4xl lg:text-[42px] lg:leading-[1.15]">
            Things to know before you choose
          </h2>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-5 md:grid-cols-2">
          {SAFETY_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className={`flex items-start gap-5 rounded-3xl p-7 ${item.card}`}
              >
                <span
                  className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl text-white ${item.iconBg}`}
                >
                  <Icon className="h-6 w-6" strokeWidth={2} aria-hidden="true" />
                </span>
                <div>
                  <h3 className={`text-lg font-extrabold ${item.headingColor}`}>
                    {item.title}
                  </h3>
                  <p className={`mt-2 text-sm leading-relaxed ${item.bodyColor}`}>
                    {item.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
