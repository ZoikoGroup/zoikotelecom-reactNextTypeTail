import {
  Hero,
  CallingVsRoaming,
  RateFinderSection,
  SixThingsAffectingPrice,
  DiallingGuideSection,
  AllowancesAndSettingsSection,
  MoreLandlinesAndVoiceSection,
  InternationalCallingFaqsSection,
  KnowTheCostBeforeYouCallCta,
} from "./components";

export default function InternationalCallingPage() {
  return (
    <main>
      <Hero />
      <CallingVsRoaming />
      <RateFinderSection />
      <SixThingsAffectingPrice />
      <DiallingGuideSection />
      <AllowancesAndSettingsSection />
      <MoreLandlinesAndVoiceSection />
      <InternationalCallingFaqsSection />
      <KnowTheCostBeforeYouCallCta />
    </main>
  );
}
