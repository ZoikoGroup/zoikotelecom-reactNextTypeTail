import {
  PurposeHero,
  PurposeAndVisionSection,
  ThreeThemesThatGuideUs,
  TurningValuesIntoEverydayPractice,
  WhereToGoNextSection,
  PurposeAndValuesQuestions,
  ConnectivityThatHelpsBanner,
} from "./components";

export default function AboutOurPurposeValsPage() {
  return (
    <main>
      <PurposeHero />
      <PurposeAndVisionSection />
      <ThreeThemesThatGuideUs />
      <TurningValuesIntoEverydayPractice />
      <WhereToGoNextSection />
      <PurposeAndValuesQuestions />
      <ConnectivityThatHelpsBanner />
    </main>
  );
}
