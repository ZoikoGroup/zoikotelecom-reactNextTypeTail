import {
  UnifiedCommunicationsHero,
  WhatIsUnifiedCommunicationsSection,
  FourFamiliesClearlyLabelledSection,
  BusinessVoiceOrUnifiedCommunicationsSection,
  WhatToThinkAboutSection,
  EmergencyCallingAndResilienceSection,
  FromConversationToAgreementSection,
  MoreForBusinessUnifiedSection,
  UnifiedCommunicationsFaqsSection,
  UnifiedCommunicationsCta,
} from "./components";

export default function UnifiedPage() {
  return (
    <main>
      <UnifiedCommunicationsHero />
      <WhatIsUnifiedCommunicationsSection />
      <FourFamiliesClearlyLabelledSection />
      <BusinessVoiceOrUnifiedCommunicationsSection />
      <WhatToThinkAboutSection />
      <EmergencyCallingAndResilienceSection />
      <FromConversationToAgreementSection />
      <MoreForBusinessUnifiedSection />
      <UnifiedCommunicationsFaqsSection />
      <UnifiedCommunicationsCta />
    </main>
  );
}
