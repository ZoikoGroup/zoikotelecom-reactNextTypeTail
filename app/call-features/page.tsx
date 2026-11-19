import {
  CallFeaturesHero,
  BusinessCallSituations,
  RouteCallsSection,
  WelcomeCallersSection,
  ManageBusyPeriodsSection,
  MessagesSection,
  TeamsAndToolsSection,
  TrustAndSafetySection,
  FeatureComparisonTable,
  CallFeaturesCosts,
  CallFlowSketcher,
  CallFeaturesHowItWorks,
  CallFeaturesSupportAndContact,
  CallFeaturesFaqs,
  RelatedServicesSection,
  CallFeaturesCTA,
} from "./components";

export default function CallFeaturesPage() {
  return (
    <main>
      <CallFeaturesHero />
      <BusinessCallSituations />
      <RouteCallsSection />
      <WelcomeCallersSection />
      <ManageBusyPeriodsSection />
      <MessagesSection />
      <TeamsAndToolsSection />
      <TrustAndSafetySection />
      <FeatureComparisonTable />
      <CallFeaturesCosts />
      <CallFlowSketcher />
      <CallFeaturesHowItWorks />
      <CallFeaturesSupportAndContact />
      <CallFeaturesFaqs />
      <RelatedServicesSection />
      <CallFeaturesCTA />
    </main>
  );
}
