import React from 'react'
import Accessories from './Accessories'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zoiko Telecom Accessories UK | Phones, Headsets & Gear",
  description:
    "Shop Zoiko Telecom Accessories UK for phones, headsets, chargers and essential telecom gear designed for reliable business connectivity and productivity.",
};

export default function page() {
  return (
    <>
      <Accessories />
    </>
  )
}
