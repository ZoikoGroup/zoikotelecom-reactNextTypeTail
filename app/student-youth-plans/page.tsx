import React from "react";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import StudentPage from "./StudentPage";

const headingFont = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-ee-heading",
});

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-ee-body",
});

export const metadata: Metadata = {
  title: "Student & Youth Mobile Plans | Zoiko Telecom",
  description:
    "Compare data, contract lengths, and transparent costs on the EE network with Zoiko Telecom. Built for students, young people, and parents.",
};

const studentSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://zoikotelecom.com/student/#webpage",
  url: "https://zoikotelecom.com/student",
  name: "Student & Youth Mobile Plans",
  isPartOf: {
    "@id": "https://zoikotelecom.com/#website",
  },
};

export default function Page() {
  return (
    <div
      className={`${headingFont.variable} ${bodyFont.variable} [font-family:var(--font-ee-body)]`}
    >
      <StudentPage />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(studentSchema) }}
      />
    </div>
  );
}
