import React from 'react'
import Faq from './Faq'

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zoiko Telecom FAQs | Billing, Support & Service Help",
  description:
    "Find answers to common questions about Zoiko Telecom services, eSIM setup, broadband, billing, payments, account management and customer support.",
};

export default function page() {
  return (
   <>
   <Faq/>
   </>
  )
}
