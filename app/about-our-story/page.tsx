import {
  OurStoryHero,
  WhoWeAreCompanyIdentity,
  ConnectingPeopleAndBusinesses,
  MilestonesWhenVerified,
  RelatedInformationSection,
  AboutZoikoQuestions,
  HaveAQuestionBanner,
} from "./components";

export default function AboutOurStoryPage() {
  return (
    <main>
      <OurStoryHero />
      <WhoWeAreCompanyIdentity />
      <ConnectingPeopleAndBusinesses />
      <MilestonesWhenVerified />
      <RelatedInformationSection />
      <AboutZoikoQuestions />
      <HaveAQuestionBanner />
    </main>
  );
}
