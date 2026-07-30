import React from 'react'
import BusinessSolutions from './Businesssolutions'

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Business Telecom Solutions | Zoiko Telecom UK",
  description:
    "Zoiko Telecom UK delivers business telecom solutions with mobile, broadband and voice services tailored to improve connectivity and reduce costs.",
};

export default function page() {
  return (
  <>
  <BusinessSolutions/>
  </>
  )
}
