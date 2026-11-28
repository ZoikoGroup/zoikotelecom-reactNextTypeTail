import {
  SectorSolutionsHero,
  StartingPointsNotCertificationsSection,
  NeedsBySectorSection,
  ServiceMatcherSection,
  WhatYouWontSeeHereSection,
  MoreForBusinessSectorSection,
  SectorFaqsSection,
  TellUsHowYouWorkCta,
} from "./components";

export default function SectorSolutionsPage() {
  return (
    <main>
      <SectorSolutionsHero />
      <StartingPointsNotCertificationsSection />
      <NeedsBySectorSection />
      <ServiceMatcherSection />
      <WhatYouWontSeeHereSection />
      <MoreForBusinessSectorSection />
      <SectorFaqsSection />
      <TellUsHowYouWorkCta />
    </main>
  );
}
