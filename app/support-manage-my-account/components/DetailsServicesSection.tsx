import React from "react";
import Link from "next/link";
import { ArrowLeftRight, Eye, Layers, ReceiptText, User, Users, type LucideIcon } from "lucide-react";
import { HEADING, SectionHeader } from "./shared";

const ITEMS: { title: string; body: string; note: string; icon: LucideIcon }[] = [
  {
    title: "Contact details",
    body: "Email, phone and how you’d like us to contact you.",
    note: "Ask us — we’ll verify it’s you first.",
    icon: User,
  },
  {
    title: "Your services",
    body: "Mobile, broadband and landline services on your account.",
    note: "Not shown online yet.",
    icon: Layers,
  },
  {
    title: "Bills & invoices",
    body: "Charges, due dates and invoices.",
    note: "See our Billing & Payments help.",
    icon: ReceiptText,
  },
  {
    title: "Service changes",
    body: "Adding, switching or cancelling a service.",
    note: "A request isn’t a confirmed change.",
    icon: ArrowLeftRight,
  },
  {
    title: "Privacy preferences",
    body: "Contact preferences and your data rights.",
    note: "See our privacy notice or ask us.",
    icon: Eye,
  },
  {
    title: "Someone else helping",
    body: "A family member or carer making changes.",
    note: "Their authority must be verified.",
    icon: Users,
  },
];

export default function DetailsServicesSection() {
  return (
    <section id="your-details" className="w-full scroll-mt-24 bg-[#F5F6FB] px-4 py-16 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeader
          eyebrow="Your details & services"
          title="What you can do — and how"
          subtitle="Online changes aren’t available yet, so our team handles them securely."
        />

        <ul className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map(({ title, body, note, icon: Icon }) => (
            <li key={title} className="flex gap-4 rounded-2xl border border-[#E3E6F2] bg-white p-[18px]">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F1F2F8] text-[#3A4268]">
                <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
              </span>
              <span>
                <span className={`${HEADING} block text-base font-semibold text-[#0F1452]`}>{title}</span>
                <span className="mt-0.5 block text-sm leading-relaxed text-[#3A4268]">{body}</span>
                <span className="mt-2 block pl-1 text-[13px] italic text-[#5B2FB8]">{note}</span>
              </span>
            </li>
          ))}
        </ul>

        <p className="mt-5 text-sm text-[#3A4268]">
          Billing questions? Go to{" "}
          <Link href="/contact" className="font-semibold text-[#E0127C] underline underline-offset-4 hover:text-[#C8106E]">
            Billing &amp; Payments
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
