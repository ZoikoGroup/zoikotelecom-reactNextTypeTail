import type { Metadata } from "next";
import {
  RemoteMonitoringHero,
  MonitoringHighlights,
  FourPartsOfMonitoring,
  MonitoringUseCases,
  HowAReadingTravels,
  DataFreshness,
  ConnectivityHealth,
  ResponseScope,
  OfflineAndRetry,
  SecurityAndPrivacy,
  FeasibilitySteps,
  StartingPoint,
  MonitoringEnquiryForm,
  RemoteMonitoringFaqs,
  RelatedServices,
  RemoteMonitoringCta,
} from "./components";

export const metadata: Metadata = {
  title: "Remote Monitoring Connectivity | Zoiko Telecom",
  description:
    "Plan connectivity for remote equipment monitoring — pumps, tanks, cold stores and power systems. Understand what sensors, networks and platforms each need.",
};

export default function RemoteMonitoringPage() {
  return (
    <main>
      <RemoteMonitoringHero />
      <MonitoringHighlights />
      <FourPartsOfMonitoring />
      <MonitoringUseCases />
      <HowAReadingTravels />
      <DataFreshness />
      <ConnectivityHealth />
      <ResponseScope />
      <OfflineAndRetry />
      <SecurityAndPrivacy />
      <FeasibilitySteps />
      <StartingPoint />
      <MonitoringEnquiryForm />
      <RemoteMonitoringFaqs />
      <RelatedServices />
      <RemoteMonitoringCta />
    </main>
  );
}
