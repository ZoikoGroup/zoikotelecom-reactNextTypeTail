import {
  HelpHero,
  HelpTopics,
  PopularQuestions,
  AllFaqsByTopic,
  SafeChecksSection,
  HelpCentreLimits,
  ComplaintsSection,
  SupportTeamCta,
  BillingHelpBanner,
} from "./components";

export default function HelpCenterFaqsPage() {
  return (
    <main>
      <HelpHero />
      <HelpTopics />
      <PopularQuestions />
      <AllFaqsByTopic />
      <SafeChecksSection />
      <HelpCentreLimits />
      <ComplaintsSection />
      <SupportTeamCta />
      <BillingHelpBanner />
    </main>
  );
}
