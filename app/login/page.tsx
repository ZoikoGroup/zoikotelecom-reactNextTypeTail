import React from 'react'
import Login from './Login'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login to Zoiko Telecom | Manage Your Account Now",
  description:
    "Log in to Zoiko Telecom to manage your UK business broadband, VoIP, and cloud services securely. Access your account and control your telecom solutions.",
};

export default function page() {
  return (
   <>
   <Login/>
   </>
  )
}
