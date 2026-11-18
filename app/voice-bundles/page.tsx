import {
  VoiceBundlesHero,
  VoiceBundleMeanings,
  IncludedCallsBreakdown,
  CallAllowancesTypes,
  BusinessQuizSection,
  BusinessPlansSection,
  MonthlyBillBreakdown,
  ContractEssentials,
  SetupChecklist,
  NumberPortingSteps,
  VoiceSafeguards,
  CustomerSupportAndContact,
  VoiceBundleFaqs,
  RelatedServices,
  VoiceBundlesFooterCta,
} from "./components";

export default function VoiceBundlesPage() {
  return (
    <main>
      <VoiceBundlesHero />
      <VoiceBundleMeanings />
      <IncludedCallsBreakdown />
      <CallAllowancesTypes />
      <BusinessQuizSection />
      <BusinessPlansSection />
      <MonthlyBillBreakdown />
      <ContractEssentials />
      <SetupChecklist />
      <NumberPortingSteps />
      <VoiceSafeguards />
      <CustomerSupportAndContact />
      <VoiceBundleFaqs />
      <RelatedServices />
      <VoiceBundlesFooterCta />
    </main>
  );
}
