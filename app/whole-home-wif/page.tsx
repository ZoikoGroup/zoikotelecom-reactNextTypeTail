import {
  WholeHomeWifiHero,
  WhereAreYouHavingTrouble,
  WhereYouPutYourRouterMatters,
  YourBroadbandLineVsYourWifi,
  WhyIsThatRoomWeaker,
  RouterMeshExtenderOrCable,
  WhatToHaveReadyWhenYouContactUs,
  WifiFaqs,
  NeedAHandWithWifiCta,
} from "./components";

export default function WholeHomeWifPage() {
  return (
    <main>
      <WholeHomeWifiHero />
      <WhereAreYouHavingTrouble />
      <WhereYouPutYourRouterMatters />
      <YourBroadbandLineVsYourWifi />
      <WhyIsThatRoomWeaker />
      <RouterMeshExtenderOrCable />
      <WhatToHaveReadyWhenYouContactUs />
      <WifiFaqs />
      <NeedAHandWithWifiCta />
    </main>
  );
}
