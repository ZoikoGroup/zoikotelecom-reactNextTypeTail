import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import {
  TroubleshootHero,
  TroubleshootGuide,
  NotOurNetworkSection,
  TroubleshootFaqs,
  StillNotWorkingSection,
} from "./components";

const headingFont = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-ts-heading",
});

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-ts-body",
});

export const metadata: Metadata = {
  title: "Troubleshoot a Service | Zoiko Telecom",
  description:
    "Answer a few questions about your mobile, broadband, landline or business service, follow safe checks and know when to contact Zoiko Telecom.",
};

export default function SupportTroubleshootAServicePage() {
  return (
    <main className={`${headingFont.variable} ${bodyFont.variable} [font-family:var(--font-ts-body)]`}>
      <TroubleshootHero />
      <TroubleshootGuide />
      <NotOurNetworkSection />
      <TroubleshootFaqs />
      <StillNotWorkingSection />
    </main>
  );
}
