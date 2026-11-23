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

type CheckAvailabilityPageProps = {
  searchParams: Promise<{ postcode?: string | string[] }>;
};

export default async function CheckAvailabilityPage({
  searchParams,
}: CheckAvailabilityPageProps) {
  const { postcode } = await searchParams;
  const initialPostcode = (Array.isArray(postcode) ? postcode[0] : postcode ?? "")
    .trim()
    .slice(0, 10);

  return (
    <main>
      <CheckAvailabilityHero postcode={initialPostcode} />
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
