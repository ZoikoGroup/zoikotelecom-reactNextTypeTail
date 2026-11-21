import type { Metadata } from "next";
import {
  DataPlansHero,
  UsefulForStrip,
  FourDataFactors,
  TrafficPatterns,
  DataEstimateCalculator,
  AllowanceModels,
  CommercialTerms,
  CoverageRoamingSecurity,
  DeviceLifecycle,
  ReadinessChecklists,
  IotDataEnquiryForm,
  DataPlanFaqs,
  DataPlansCta,
} from "./components";

export const metadata: Metadata = {
  title: "IoT Data Plans | Zoiko Telecom",
  description:
    "Plan data for IoT devices — estimate monthly usage, understand per-device and pooled allowances, and see what a real proposal should show before you ask for one.",
};

export default function IotDataPlansPage() {
  return (
    <main>
      <DataPlansHero />
      <UsefulForStrip />
      <FourDataFactors />
      <TrafficPatterns />
      <DataEstimateCalculator />
      <AllowanceModels />
      <CommercialTerms />
      <CoverageRoamingSecurity />
      <DeviceLifecycle />
      <ReadinessChecklists />
      <IotDataEnquiryForm />
      <DataPlanFaqs />
      <DataPlansCta />
    </main>
  );
}
