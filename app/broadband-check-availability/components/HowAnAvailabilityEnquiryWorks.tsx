import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Home,
  Building2,
  Users,
  X,
  MessageSquare,
  ChevronRight,
} from "lucide-react";

const ENQUIRY_ITEMS = [
  {
    id: "full-address",
    title: "Your full address",
    subtitle: "Including flat or unit number",
    icon: Home,
    type: "info",
  },
  {
    id: "new-build",
    title: "New build?",
    subtitle: "A plot or building reference helps",
    icon: Building2,
    type: "info",
  },
  {
    id: "access-needs",
    title: "Any access needs",
    subtitle: "For contact or installation",
    icon: Users,
    type: "info",
  },
  {
    id: "no-payment-details",
    title: "No payment or bank details",
    subtitle: "We won't ask for them in an enquiry",
    icon: X,
    type: "warning",
  },
] as const;

export default function HowAnAvailabilityEnquiryWorks() {
  return (
    <section className="w-full bg-[#F5F6FB] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1300px]">
        {/* Main Grid Container */}
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-stretch gap-8 lg:grid-cols-12">
          {/* Left Column: Card Container */}
          <div className="flex flex-col justify-between rounded-3xl border border-[#ECEEF6] bg-white p-7 shadow-[0_8px_30px_rgba(17,24,60,0.04)] sm:p-10 lg:col-span-6">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#434A6E]">
                ASK OUR TEAM
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#11183C] sm:text-4xl lg:text-[42px] lg:leading-[1.15]">
                How an availability enquiry works
              </h2>

              {/* Enquiry Checklist Items */}
              <div className="mt-8 space-y-3.5">
                {ENQUIRY_ITEMS.map((item) => {
                  const Icon = item.icon;
                  const isWarning = item.type === "warning";

                  return (
                    <div
                      key={item.id}
                      className={`flex items-start gap-4 rounded-2xl border p-4 sm:p-5 ${
                        isWarning
                          ? "border-[#F8D7DA] bg-[#FFF8F8]"
                          : "border-[#ECEEF6] bg-white"
                      }`}
                    >
                      <div
                        className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center ${
                          isWarning ? "text-[#C53030]" : "text-[#0F5132]"
                        }`}
                      >
                        <Icon className="h-5 w-5" strokeWidth={2.25} />
                      </div>
                      <div>
                        <h3 className="text-sm font-extrabold text-[#11183C] sm:text-base">
                          {item.title}
                        </h3>
                        <p className="mt-0.5 text-xs text-[#4B5563] sm:text-sm">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Reply Info Box */}
              <div className="mt-4 flex items-start gap-3.5 rounded-2xl bg-[#EEF0FA] p-4 sm:p-5">
                <MessageSquare
                  className="mt-0.5 h-5 w-5 shrink-0 text-[#434A6E]"
                  strokeWidth={2.25}
                />
                <p className="text-xs leading-relaxed text-[#434A6E] sm:text-sm">
                  We&apos;ll reply using the contact method you choose. Response
                  times can vary.
                </p>
              </div>
            </div>

            {/* Action Button */}
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-[#E11D74] to-[#D6156C] px-6 py-3.5 text-sm font-bold text-white shadow-[0_8px_20px_rgba(225,29,116,0.32)] transition-transform hover:scale-[1.01]"
              >
                <span>Ask about availability</span>
                <ChevronRight className="h-4 w-4" strokeWidth={2.5} />
              </Link>
            </div>
          </div>

          {/* Right Column: Image with Rounded Corners */}
          <div className="relative min-h-[420px] w-full overflow-hidden rounded-3xl shadow-[0_12px_40px_rgba(17,24,60,0.08)] sm:min-h-[540px] lg:col-span-6">
            <Image
              src="/Images/check/2.png"
              alt="Zoiko support specialist checking availability"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
