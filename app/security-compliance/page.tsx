import {
  SecurityComplianceHero,
  SecurityScopeSection,
  ChooseActionCards,
  SecurityConsiderationsSection,
  SharedResponsibilityTable,
  DataProtectionSection,
  AssuranceEvidenceSection,
  RequestHandlingSteps,
  SecurityConcernsSection,
  RequestingSecurityInfoSection,
  SectorConsiderationsSection,
  DiscussSecurityRequirementsSection,
  HelpAndSupportSection,
  SecurityComplianceFaqsSection,
  RelatedServicesSection,
  GetClearAnswersBanner,
} from "./components";

export default function SecurityCompliancePage() {
  return (
    <main>
      <SecurityComplianceHero />
      <SecurityScopeSection />
      <ChooseActionCards />
      <SecurityConsiderationsSection />
      <SharedResponsibilityTable />
      <DataProtectionSection />
      <AssuranceEvidenceSection />
      <RequestHandlingSteps />
      <SecurityConcernsSection />
      <RequestingSecurityInfoSection />
      <SectorConsiderationsSection />
      <DiscussSecurityRequirementsSection />
      <HelpAndSupportSection />
      <SecurityComplianceFaqsSection />
      <RelatedServicesSection />
      <GetClearAnswersBanner />
    </main>
  );
}
