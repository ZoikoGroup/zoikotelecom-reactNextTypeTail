import React from 'react'
import WhyZoikoHero from './Components/WhyZoikoHero'
import WhyChooseZoiko from './Components/WhyChooseZoiko'
import CTASection from './Components/CTASection'
import TestimonialLoader from '../Components/TestimonialLoader'
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Why Choose Zoiko Broadband | High-Speed Fibre Plans",
  description:
    "Get connected with Zoiko’s high-speed fibre broadband plans. Enjoy fast downloads, smooth streaming, and reliable internet without hidden fees."

};
export default function page() {
  return (
    <>
    <WhyZoikoHero/>
    <WhyChooseZoiko/>
    <CTASection/>
    <TestimonialLoader/>
    </>
  )
}
