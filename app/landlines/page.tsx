import Landlinefun from "./Landlines";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Landline Service Plans UK | Zoiko Telecom",
  description:
    "Zoiko Telecom offers business landline service plans UK with reliable call quality, flexible packages, affordable pricing and expert support for companies.",
};

const landlinesSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://zoikotelecom.com/landlines/#webpage",
  "url": "https://zoikotelecom.com/landlines",
  "name": "Zoiko Telecom Business Landline Services",
  "isPartOf": {
    "@id": "https://zoikotelecom.com/#website",
  },
};

export default function page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(landlinesSchema) }}
      />
      <Landlinefun />
    </>
  );
}