import type { Metadata } from "next";
import {
  BlackFridayHero,
  BlackFridaySale,
  DigitalPhoneLines,
  BroadbandDeals,
  ESIMPlans,
  OfferingComparison,
  WhyChooseZoiko,
  RequestQuote,
  BlackFridayFaqs,
  BlackFridayCta,
  NewsletterSubscribe,
} from "../Components/home";

export const metadata: Metadata = {
  title: "Black Friday Telecom Deals: 20% Off | Zoiko Telecom",
  description:
    "Save 20% on eligible business digital phone line packages for the first 6 months with Zoiko Telecom's Black Friday deals. Request a business quote.",
};

export default function BlackFridayPage() {
  return (
    <main>
      <BlackFridayHero />
      <BlackFridaySale />
      <DigitalPhoneLines />
      <BroadbandDeals />
      <ESIMPlans />
      <OfferingComparison />
      <WhyChooseZoiko />
      <RequestQuote />
      <BlackFridayFaqs />
      <BlackFridayCta />
      <NewsletterSubscribe />
    </main>
  );
}
