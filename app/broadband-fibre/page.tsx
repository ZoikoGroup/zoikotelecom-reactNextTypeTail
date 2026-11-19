import {
  BusinessBroadbandHero,
  BusinessConnectionTypes,
  BusinessNeedsConnect,
  ResiliencePlan,
  CheckAvailability,
  InstallationSwitching,
  BeforeYouSwitch,
  BroadbandPerformanceAndSecurity,
  CostsContracts,
  BroadbandServiceSupport,
  TalkThroughBusinessBroadbandProposal,
  BusinessBroadbandFaqs,
  RelatedBusinessServices,
  TalkThroughBusinessProposalCta,
} from "./components";

export default function BroadbandFibrePage() {
  return (
    <main>
      <BusinessBroadbandHero />
      <BusinessConnectionTypes />
      <BusinessNeedsConnect />
      <ResiliencePlan />
      <CheckAvailability />
      <InstallationSwitching />
      <BeforeYouSwitch />
      <BroadbandPerformanceAndSecurity />
      <CostsContracts />
      <BroadbandServiceSupport />
      <TalkThroughBusinessBroadbandProposal />
      <BusinessBroadbandFaqs />
      <RelatedBusinessServices />
      <TalkThroughBusinessProposalCta />
    </main>
  );
}
