import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import {
  AccountHero,
  NeverAskBanner,
  ChooseTaskSection,
  SignInSafelySection,
  RecoverAccessSection,
  DetailsServicesSection,
  AccountAccessSection,
  DashboardHelpSection,
  AccountFaqs,
  AccountHelpCta,
} from "./components";

const headingFont = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-ma-heading",
});

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-ma-body",
});

export const metadata: Metadata = {
  title: "Manage My Account | Zoiko Telecom",
  description:
    "Find sign-in and recovery guidance, see how to request changes to your details, and learn how business account access works at Zoiko Telecom.",
};

export default function SupportManageMyAccountPage() {
  return (
    <main className={`${headingFont.variable} ${bodyFont.variable} [font-family:var(--font-ma-body)]`}>
      <AccountHero />
      <NeverAskBanner />
      <ChooseTaskSection />
      <SignInSafelySection />
      <RecoverAccessSection />
      <DetailsServicesSection />
      <AccountAccessSection />
      <DashboardHelpSection />
      <AccountFaqs />
      <AccountHelpCta />
    </main>
  );
}
