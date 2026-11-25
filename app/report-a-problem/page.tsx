import {
  ProblemHero,
  ChooseServiceWithProblem,
  ThreeSimpleStepsSection,
  GetYourDetailsReady,
  ChooseHowToReachUs,
  WhatThisPageCanAndCantDo,
  ReportingQuestions,
  TryAFewSafeChecksBanner,
} from "./components";

export default function ReportAProblemPage() {
  return (
    <main>
      <ProblemHero />
      <ChooseServiceWithProblem />
      <ThreeSimpleStepsSection />
      <GetYourDetailsReady />
      <ChooseHowToReachUs />
      <WhatThisPageCanAndCantDo />
      <ReportingQuestions />
      <TryAFewSafeChecksBanner />
    </main>
  );
}
