import type { Metadata } from "next";
import {
  AccessoriesHero,
  ChooseCategory,
  FindYourModel,
  CategoryComparison,
  BeforeYouAsk,
  AccessoryEnquiryForm,
  AccessoryFaqs,
  RelatedPages,
  AccessoriesCta,
} from "./components";

export const metadata: Metadata = {
  title: "Phone & Tablet Accessories | Zoiko Telecom",
  description:
    "Check what matters before you ask about accessories — fit for cases, safety and compatibility for chargers and cables, and connections for audio.",
};

export default function DevicesAccessoriesPage() {
  return (
    <main>
      <AccessoriesHero />
      <ChooseCategory />
      <FindYourModel />
      <CategoryComparison />
      <BeforeYouAsk />
      <AccessoryEnquiryForm />
      <AccessoryFaqs />
      <RelatedPages />
      <AccessoriesCta />
    </main>
  );
}
