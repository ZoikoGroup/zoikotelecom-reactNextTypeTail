import {
  ManagedTelecomHero,
  ServiceHighlightsBar,
  ThreePartiesSection,
  LifecycleStagesSection,
  ServiceAreasSection,
  ManagedScopeSection,
  ReportIssueTriage,
  ServiceExpectations,
  ChangesGrowthSection,
  ProcurementChecklist,
  TrustAccessSection,
  RequestInformationForm,
  ExistingCustomerHelp,
  ManagedServicesFaq,
  RelatedServicesSection,
  ServiceSupportCta,
} from "./components";

export default function ManagedServicesPage() {
  return (
    <main>
      <ManagedTelecomHero />
      <ServiceHighlightsBar />
      <ThreePartiesSection />
      <LifecycleStagesSection />
      <ServiceAreasSection />
      <ManagedScopeSection />
      <ReportIssueTriage />
      <ServiceExpectations />
      <ChangesGrowthSection />
      <ProcurementChecklist />
      <TrustAccessSection />
      <RequestInformationForm />
      <ExistingCustomerHelp />
      <ManagedServicesFaq />
      <RelatedServicesSection />
      <ServiceSupportCta />
    </main>
  );
}
