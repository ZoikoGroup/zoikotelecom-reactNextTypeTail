import {
  SmartSitesHero,
  SmartBuildingRolesTable,
  ConnectivityStackSection,
  PremisesTypesSection,
  SiteLifecycleSection,
  PracticalSiteUseCasesSection,
  SecurityBoundariesSection,
  ScopeComparisonTable,
  SiteFeasibilitySection,
  SiteAssuranceAndEnquirySection,
  SmartBuildingsFaqSection,
  RelatedConnectivityServicesSection,
  BuildingConnectivityCtaSection,
} from "./components";

export default function SmartBuildingSitesPage() {
  return (
    <main>
      <SmartSitesHero />
      <SmartBuildingRolesTable />
      <ConnectivityStackSection />
      <PremisesTypesSection />
      <SiteLifecycleSection />
      <PracticalSiteUseCasesSection />
      <SecurityBoundariesSection />
      <ScopeComparisonTable />
      <SiteFeasibilitySection />
      <SiteAssuranceAndEnquirySection />
      <SmartBuildingsFaqSection />
      <RelatedConnectivityServicesSection />
      <BuildingConnectivityCtaSection />
    </main>
  );
}
