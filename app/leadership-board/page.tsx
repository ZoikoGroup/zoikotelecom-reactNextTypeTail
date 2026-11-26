import {
  LeadershipBoardHero,
  StartWithThePublicRegister,
  DirectorsAndExecutivesComparison,
  LeadershipProfilesOnceApproved,
  HowTheCompanyIsGoverned,
  RelatedInformationBoardSection,
  LeadershipAndBoardQuestions,
  QuestionsAboutOurCompanyBanner,
} from "./components";

export default function LeadershipBoardPage() {
  return (
    <main>
      <LeadershipBoardHero />
      <StartWithThePublicRegister />
      <DirectorsAndExecutivesComparison />
      <LeadershipProfilesOnceApproved />
      <HowTheCompanyIsGoverned />
      <RelatedInformationBoardSection />
      <LeadershipAndBoardQuestions />
      <QuestionsAboutOurCompanyBanner />
    </main>
  );
}
