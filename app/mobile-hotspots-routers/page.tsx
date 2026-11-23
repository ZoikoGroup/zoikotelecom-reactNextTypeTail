import type { Metadata } from "next";
import {
  HotspotsHero,
  SetupExplorer,
  HowTheyConnect,
  CompareTypes,
  WillItFit,
  SecurityChecklist,
  CostsBreakdown,
  GettingStarted,
  HotspotEnquiryForm,
  HotspotFaqs,
  RelatedPages,
  HotspotsCta,
} from "./components";

export const metadata: Metadata = {
  title: "Mobile Hotspots & Routers | Zoiko Telecom",
  description:
    "Compare portable mobile hotspots, 4G/5G routers and Wi-Fi routers for fixed broadband — what each needs, what to check, costs, set-up and security.",
};

export default function MobileHotspotsRoutersPage() {
  return (
    <main>
      <HotspotsHero />
      <SetupExplorer />
      <HowTheyConnect />
      <CompareTypes />
      <WillItFit />
      <SecurityChecklist />
      <CostsBreakdown />
      <GettingStarted />
      <HotspotEnquiryForm />
      <HotspotFaqs />
      <RelatedPages />
      <HotspotsCta />
    </main>
  );
}
