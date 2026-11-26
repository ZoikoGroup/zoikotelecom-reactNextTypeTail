import {
  BusinessMobileHero,
  BusinessMobileYourWaySection,
  FiveQuestionsToThinkAboutSection,
  DevicesCoverageAndNumbersSection,
  HowItWorksSection,
  MoreForBusinessMobileSection,
  MobileForBusinessFaqsSection,
  BusinessMobileCta,
} from "./components";

export default function MobilePage() {
  return (
    <main>
      <BusinessMobileHero />
      <BusinessMobileYourWaySection />
      <FiveQuestionsToThinkAboutSection />
      <DevicesCoverageAndNumbersSection />
      <HowItWorksSection />
      <MoreForBusinessMobileSection />
      <MobileForBusinessFaqsSection />
      <BusinessMobileCta />
    </main>
  );
}
