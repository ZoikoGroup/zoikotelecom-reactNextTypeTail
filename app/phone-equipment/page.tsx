import React from 'react'
import PhoneEquipment from './Phoneequipment'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zoiko Telecom Phone & Equipment | Business VoIP Gear",
  description:
    "Shop business phone equipment, VoIP handsets, DECT phones, and Cisco adapters at Zoiko Telecom. Reliable office gear for seamless communication.",
};

export default function page() {
  return (
   <>
   <PhoneEquipment/>
   </>
  )
}
