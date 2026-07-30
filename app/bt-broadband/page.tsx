import React from 'react'

import type { Metadata } from "next";
import Btbroadband from './Btbroadband';
export const metadata: Metadata = {
  title: "BT High Speed Broadband Deals UK | Zoiko Telecom",
  description:
    "Get BT high speed broadband deals UK with Zoiko Telecom. Enjoy fast downloads, unlimited data, easy setup, and flexible plans designed to keep you connected.",
};

export default function page() {
  return (
    <>
    <Btbroadband/>
    </>
  )
}
