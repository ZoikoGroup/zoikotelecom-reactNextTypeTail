"use client";

import React from "react";

const ROLE_COLUMNS = [
  {
    id: "connectivity",
    title: "Connectivity",
    headerClass: "bg-[#2563EB] text-[#FFFFFF]",
  },
  {
    id: "building-platform",
    title: "Building platform (third party)",
    headerClass: "bg-[#6D28D9] text-[#FFFFFF]",
  },
  {
    id: "control-safety",
    title: "Control & safety",
    headerClass: "bg-[#A21CAF] text-[#FFFFFF]",
  },
] as const;

const ROLE_ROWS = [
  {
    id: "what-it-does",
    label: "What it does",
    values: [
      {
        text: "Carries data between site devices and authorised systems",
        tone: "default",
      },
      {
        text: "Collects, displays and analyses readings (BMS, BEMS, sensor apps)",
        tone: "default",
      },
      {
        text: "Runs plant, lighting, HVAC, alarms and access",
        tone: "default",
      },
    ],
  },
  {
    id: "usually-owned-by",
    label: "Usually owned by",
    values: [
      {
        text: "Your connectivity provider — what we discuss",
        tone: "default",
      },
      {
        text: "Your platform vendor or integrator",
        tone: "default",
      },
      {
        text: "Your facilities team, integrator and safety owner",
        tone: "default",
      },
    ],
  },
  {
    id: "zoikos-role",
    label: "Zoiko's role",
    values: [
      {
        text: "Discussed during technical discovery",
        tone: "success",
      },
      {
        text: "Not a Zoiko product",
        tone: "danger",
      },
      {
        text: "Not offered — needs independent safety design",
        tone: "danger",
      },
    ],
  },
] as const;

function getValueToneClass(tone: "default" | "success" | "danger") {
  switch (tone) {
    case "success":
      return "font-semibold text-[#15803D]";
    case "danger":
      return "font-semibold text-[#DC2626]";
    default:
      return "font-normal text-[#4A5568]";
  }
}

export default function SmartBuildingRolesTable() {
  return (
    <section className="w-full bg-[#FFFFFF] py-16 md:py-20">
      <div className="mx-auto w-full max-w-[1300px] px-4 sm:px-6 lg:px-8">
        {/* Header Block */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#2B3766]">
            WHO DOES WHAT
          </p>

          <h2 className="mt-2.5 text-[30px] font-bold leading-[1.18] tracking-[-0.02em] text-[#0B1B48] sm:text-[36px]">
            Connectivity is one layer of a smart
            <br className="hidden sm:inline" /> building
          </h2>

          <p className="mt-3 text-[13.5px] font-normal leading-[1.6] text-[#4A5568] sm:text-[14.5px]">
            Cellular transport, sensor platforms and building automation are
            separate jobs — usually
            <br className="hidden sm:inline" /> with different owners.
          </p>
        </div>

        {/* Comparison Grid Table */}
        <div className="mt-11 overflow-x-auto rounded-[18px] border border-[#E6EAF2] bg-[#FFFFFF] shadow-[0_12px_32px_-12px_rgba(11,27,72,0.06)]">
          <div className="min-w-[820px]">
            {/* Top Column Headers */}
            <div className="grid grid-cols-[185px_1fr_1fr_1fr]">
              <div className="bg-[#070E2B]" />
              {ROLE_COLUMNS.map((col) => (
                <div
                  key={col.id}
                  className={`px-6 py-4 text-[13px] font-bold leading-[1.35] ${col.headerClass}`}
                >
                  {col.title}
                </div>
              ))}
            </div>

            {/* Data Rows */}
            {ROLE_ROWS.map((row, rowIndex) => {
              const isLastRow = rowIndex === ROLE_ROWS.length - 1;
              return (
                <div
                  key={row.id}
                  className={`grid grid-cols-[185px_1fr_1fr_1fr] items-start ${
                    !isLastRow ? "border-b border-[#EDF1F7]" : ""
                  }`}
                >
                  <div className="h-full border-r border-[#EDF1F7] bg-[#F8FAFC] px-6 py-5 text-[12.5px] font-bold leading-[1.45] text-[#0B1B48]">
                    {row.label}
                  </div>

                  {row.values.map((cell, cellIndex) => (
                    <div
                      key={`${row.id}-${cellIndex}`}
                      className={`h-full px-6 py-5 text-[12.5px] leading-[1.55] ${
                        cellIndex < row.values.length - 1
                          ? "border-r border-[#F1F5F9]"
                          : ""
                      } ${getValueToneClass(cell.tone)}`}
                    >
                      {cell.text}
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
