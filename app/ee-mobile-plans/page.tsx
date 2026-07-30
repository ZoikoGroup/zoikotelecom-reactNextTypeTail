import React from 'react'

import type { Metadata } from 'next'
import EEmobileplans from './EEmobileplans';

export const metadata: Metadata = {
  title: "Best EE SIM Only Deals UK | Zoiko Telecom",
  description:
    "Discover the best EE SIM only deals at Zoiko Telecom. Flexible plans with unlimited calls, texts, and data to keep you connected at great prices online today.",
};
export default function page() {
  return (
   <>
   <EEmobileplans/>
   </>
  )
}
