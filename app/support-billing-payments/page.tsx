import {
  BillingHero,
  SecurityNoticeBar,
  ChooseBillingTopic,
  BillAnatomySection,
  BillingDatesTimeline,
  ChargesExplainedSection,
  PaymentMethodsAndMissedPayments,
  UnrecognisedChargeChecklist,
  PaymentDifficultiesSection,
  SpecialCasesSection,
  BillingAndPaymentQuestions,
  BillingMoreHelpCta,
  LookingForSomethingElseBanner,
} from "./components";

export default function SupportBillingPaymentsPage() {
  return (
    <main>
      <BillingHero />
      <SecurityNoticeBar />
      <ChooseBillingTopic />
      <BillAnatomySection />
      <BillingDatesTimeline />
      <ChargesExplainedSection />
      <PaymentMethodsAndMissedPayments />
      <UnrecognisedChargeChecklist />
      <PaymentDifficultiesSection />
      <SpecialCasesSection />
      <BillingAndPaymentQuestions />
      <BillingMoreHelpCta />
      <LookingForSomethingElseBanner />
    </main>
  );
}
