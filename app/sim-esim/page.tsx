import {
  IotConnectivityHero,
  SimVsEsim,
  ArchitectureSection,
  DeploymentRequirementsSection,
  DataEstimateSection,
  UseCasesSection,
  ThingsToKnowSection,
  ProjectEnquirySection,
  CustomerReviewSection,
  IotFaqSection,
  RelatedServicesSection,
  IotDeploymentCtaSection,
} from "./components";

export default function SimEsimPage() {
  return (
    <main>
      <IotConnectivityHero />
      <SimVsEsim />
      <ArchitectureSection />
      <DeploymentRequirementsSection />
      <DataEstimateSection />
      <UseCasesSection />
      <ThingsToKnowSection />
      <ProjectEnquirySection />
      <CustomerReviewSection />
      <IotFaqSection />
      <RelatedServicesSection />
      <IotDeploymentCtaSection />
    </main>
  );
}
