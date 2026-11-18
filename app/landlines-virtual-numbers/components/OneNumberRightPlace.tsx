import React from "react";
import {
  CircleAlert,
  CornerUpRight,
  FileText,
  Hash,
  Moon,
  Phone,
  Smartphone,
  TriangleAlert,
  Users,
} from "lucide-react";

const DESTINATIONS = [
  { id: "office", label: "Office phone", icon: Phone },
  { id: "mobile", label: "Mobile", icon: Smartphone },
  { id: "system", label: "Business phone system", icon: FileText },
] as const;

const ROUTING_NOTES = [
  {
    id: "forwarding",
    title: "Forwarding",
    text: "Calls can go to a phone, mobile or phone system, depending on the service. Forwarding may cost extra.",
    icon: CornerUpRight,
    alert: false,
  },
  {
    id: "office-hours",
    title: "Office hours",
    text: "Different routing in and out of hours may be possible — ask what’s supported.",
    icon: Moon,
    alert: false,
  },
  {
    id: "no-answer",
    title: "If no one answers",
    text: "Ask what happens when a destination is unavailable, and who manages it.",
    icon: TriangleAlert,
    alert: false,
  },
  {
    id: "inbound-only",
    title: "Inbound only",
    text: "A virtual number receives calls. It isn’t a line for making calls or calling 999 unless your service says so.",
    icon: CircleAlert,
    alert: true,
  },
] as const;

function FlowNode({
  icon: Icon,
  title,
  subtitle,
}: {
  icon: typeof Users;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="flex shrink-0 flex-col items-center text-center">
      <span className="flex h-[72px] w-[72px] items-center justify-center rounded-2xl bg-gradient-to-br from-[#E11D74] to-[#8E37E8] text-white shadow-[0_10px_24px_rgba(142,55,232,0.3)]">
        <Icon className="h-8 w-8" strokeWidth={2} aria-hidden="true" />
      </span>
      <p className="mt-4 text-base font-extrabold text-[#11183C]">{title}</p>
      <p className="mt-1 text-xs text-[#4B5375] sm:text-sm">{subtitle}</p>
    </div>
  );
}

function Connector() {
  return (
    <span
      aria-hidden="true"
      className="mx-auto h-10 w-1 rounded-full bg-gradient-to-b from-[#E11D74] to-[#8E37E8] lg:mx-0 lg:mb-12 lg:h-1 lg:w-auto lg:flex-1 lg:bg-gradient-to-r"
    />
  );
}

export default function OneNumberRightPlace() {
  return (
    <section className="w-full bg-[#F5F6FB] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1300px]">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#434A6E]">
            Call routing
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#11183C] sm:text-4xl lg:text-[42px] lg:leading-[1.15]">
            One number, sent to the right place
          </h2>
          <p className="mt-3.5 text-sm leading-relaxed text-[#4B5375] sm:text-base">
            A simple example of how inbound calls can be directed.
          </p>
        </div>

        {/* Routing diagram */}
        <figure className="mx-auto mt-12 max-w-6xl">
          <div className="flex flex-col items-stretch gap-4 rounded-3xl border border-[#E6E9F2] bg-white px-6 py-10 sm:px-10 lg:flex-row lg:items-center lg:gap-6">
            <FlowNode icon={Users} title="Caller" subtitle="Dials your number" />
            <Connector />
            <FlowNode
              icon={Hash}
              title="Your virtual number"
              subtitle="e.g. an 03 number"
            />
            <Connector />
            <ul className="mx-auto flex w-full max-w-[260px] shrink-0 flex-col gap-2.5 lg:mx-0 lg:w-[220px]">
              {DESTINATIONS.map((dest) => {
                const Icon = dest.icon;
                return (
                  <li
                    key={dest.id}
                    className="flex items-center gap-2.5 rounded-lg bg-[#F1F3F9] px-4 py-2.5 text-sm font-bold text-[#11183C]"
                  >
                    <Icon
                      className="h-4 w-4 text-[#E11D74]"
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                    {dest.label}
                  </li>
                );
              })}
            </ul>
          </div>
          <figcaption className="mt-4 text-center text-xs text-[#8A90A6]">
            Illustration only. Available destinations depend on the service.
          </figcaption>
        </figure>

        {/* Routing notes */}
        <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ROUTING_NOTES.map((note) => {
            const Icon = note.icon;
            return (
              <div
                key={note.id}
                className={`rounded-2xl border p-6 ${
                  note.alert
                    ? "border-[#F8D7DA] bg-[#FFF8F8]"
                    : "border-[#E6E9F2] bg-white"
                }`}
              >
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-xl text-white ${
                    note.alert
                      ? "bg-[#DC2626]"
                      : "bg-gradient-to-br from-[#E11D74] to-[#8E37E8]"
                  }`}
                >
                  <Icon className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-extrabold text-[#11183C]">
                  {note.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#4B5375]">
                  {note.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
