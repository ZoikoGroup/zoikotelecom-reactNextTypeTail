import {
  MultiLineHero,
  PersonalOrBusiness,
  ChooseAPlanForEachLine,
  EveryPlanEveryPrice,
  HowEachLineGetsActivated,
  TellUsWhatYouNeed,
  QuestionsWorthAsking,
  PricePerLineAndTotal,
  AccountRoles,
  MovingSeveralNumbers,
  ConversationToConnected,
  MultiLineFaqs,
  ReadyToTalkCta,
} from "./components";

export default function MultiLinePlansPage() {
  return (
    <main>
      <MultiLineHero />
      <PersonalOrBusiness />
      <ChooseAPlanForEachLine />
      <EveryPlanEveryPrice />
      <HowEachLineGetsActivated />
      <TellUsWhatYouNeed />
      <QuestionsWorthAsking />
      <PricePerLineAndTotal />
      <AccountRoles />
      <MovingSeveralNumbers />
      <ConversationToConnected />
      <MultiLineFaqs />
      <ReadyToTalkCta />
    </main>
  );
}
