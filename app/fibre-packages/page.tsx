import React from 'react'
import FibrePackagesHero from './components/FibrePackagesHero'
import FibreBroadband from './components/FibreBroadband'
import WhyChooseZoiko from '../why-zoiko/Components/WhyChooseZoiko'
import FAQ from '../Components/FAQs/FAQ'
import  BroadbandPlans  from '../Components/Broadbandplans';
export const metadata = {
  title: "Affordable Fibre Broadband Packages | Zoiko Broadband",
  description:
    "Explore fibre broadband packages from Zoiko Broadband with fast speeds, reliable connectivity, and flexible internet plans for homes and businesses.",
};
const fibrefaqs = [
  {
    id: 1,
    question: "What is Broadband only?",
    answer:
      "Broadband only refers to an internet service that provides a connection to the internet without any additional services such as TV or phone. It is a standalone internet service that allows you to access the web, stream content, and use online applications without the need for bundled packages.",
  },
  {
    id: 2,
    question:
      "Can I get my current landline number back after I've opted for Broadband only?",
    answer:
      "Yes, it is possible to recover your landline number when switching to broadband-only service. You can contact our customer support team who will guide you through the process and help you retain your existing number.",
  },
  {
    id: 3,
    question:
      "How do I make calls to the emergency services or to premium numbers without a landline?",
    answer:
      "You can use VoIP services, mobile phones, or internet-based calling applications to make calls to emergency services and premium numbers. Many customers use services like Skype, WhatsApp, or other calling apps as alternatives to traditional landlines.",
  },
  {
    id: 4,
    question:
      "Can I move to another provider and get a landline once I've taken Broadband only?",
    answer:
      "Yes, you can switch to another provider at any time. When moving to another provider, you can opt for packages that include landline services. Most providers offer flexibility to add or change services during or after the switching process.",
  },
  {
    id: 5,
    question:
      "Can I get a landline with BT if I change my mind after taking a Broadband only package?",
    answer:
      "Absolutely! You can upgrade your service to include a landline at any time by contacting our support team or logging into your account. There may be additional charges associated with adding a landline service to your existing broadband package.",
  },
  {
    id: 6,
    question:
      "Why does the home phone plugged into my phone socket not have a dial tone?",
    answer:
      "You won’t have a dial tone if you’ve taken a Broadband only package. This is because your package doesn’t include a Home Phone service. If you have a broadband package with us that includes a Home Phone service and you have no dial tone, please call customer services from your mobile. They’ll look into the issue for you.",
  },
  {
    id: 7,
    question:
      "Can my family and friends call my home phone number if I’ve taken Broadband only?",
    answer:
      "No. You’ll have no dial tone and won’t be able to make or receive calls from your landline.",
  },
  {
    id: 8,
    question: "What types of broadband are there?",
    answer:
      "Different types of broadband connections include full fibre (FTTP), part fibre (FTTC), copper (ADSL) and mobile broadband. Full fibre (FTTP) offers the fastest connection, while part fibre (FTTC) is a slightly slower due to copper cabling. Copper (ADSL) is slower and likely to be replaced by fibre in the future. Mobile broadband uses 4G or 5G networks for internet access. ",
  },
  {
    id: 9,
    question: "Will I always get the advertised speed?",
    answer:
      "In order to advertise a speed, we need to ensure that at least 50% of our customers can receive it between 8pm and 10pm, or the peak hours of internet usage. It’s always our aim to deliver the advertised speeds but with factors like, distance to router, network traffic and each home being different it will likely vary. With our stay fast guarantee we constantly check and optimise your speed to ensure you’re always getting the best service. You can also run tests regularly from your hub in My BT.",
  },
];
export default function page() {
  return (
    <>
    <FibrePackagesHero/>
    <BroadbandPlans/>
    <FibreBroadband/>
    <WhyChooseZoiko/>
    <FAQ faqs={fibrefaqs} />
    </>
  )
}
