import {
  HomePhonePage,
  BeforeAnythingElsePowerConnectivityBanner,
  WhatIsADigitalHomePhoneSection,
  ThreeQuestionsBeforeYouSwitchSection,
  FourWaysToStartSection,
  KeepingYourNumberSection,
  EquipmentAndExtraHelpSection,
  QuestionsAboutCallSettingsCta,
} from "./components";

export default function VoiceHomePhonePage() {
  return (
    <main>
      <HomePhonePage />
      <BeforeAnythingElsePowerConnectivityBanner />
      <WhatIsADigitalHomePhoneSection />
      <ThreeQuestionsBeforeYouSwitchSection />
      <FourWaysToStartSection />
      <KeepingYourNumberSection />
      <EquipmentAndExtraHelpSection />
      <QuestionsAboutCallSettingsCta />
    </main>
  );
}
