import {
  CheckAvailabilityHero,
  PostcodeAddressAndNetwork,
  WhatMightBeAvailable,
  WhatAnAvailabilityAnswerCanLookLike,
  HowAnAvailabilityEnquiryWorks,
  FromQuestionToConnection,
  PermissionMayBeNeeded,
  ChooseWhatYouNeed,
  AvailabilityQuestionsFaqs,
  VerifiedAnswerCta,
} from "./components";

export default function CheckAvailabilityPage() {
  return (
    <main>
      <CheckAvailabilityHero />
      <PostcodeAddressAndNetwork />
      <WhatMightBeAvailable />
      <WhatAnAvailabilityAnswerCanLookLike />
      <HowAnAvailabilityEnquiryWorks />
      <FromQuestionToConnection />
      <PermissionMayBeNeeded />
      <ChooseWhatYouNeed />
      <AvailabilityQuestionsFaqs />
      <VerifiedAnswerCta />
    </main>
  );
}
