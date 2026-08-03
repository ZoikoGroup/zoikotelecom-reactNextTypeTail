import ProductPage from "./ProductPage";
import type { Metadata } from "next";

const PRODUCT_META: Record<
  string,
  { title: string; description: string }
> = {
  "yealink-t31g": {
    title: "Yealink T31G VoIP Phone with Dual Accounts | Zoiko Telecom",
    description:
      "Buy the Yealink T31G VoIP Phone at Zoiko Telecom. Experience high-quality audio, dual account support and easy setup for efficient business communication.",
  },

  "yealink-w73p": {
    title: "Yealink W73P Cordless Phone | Zoiko Telecom",
    description:
      "Discover the Yealink W73P Cordless Phone with Noise Reduction at Zoiko Telecom. It offers clear calls, long battery life and advanced noise reduction features.",
  },

  "cisco-192-ata": {
    title: "Buy Cisco 192 ATA | Reliable VoIP Adapter | Zoiko Telecom",
    description:
      "Buy the Cisco 192 ATA VoIP adapter from Zoiko Telecom. Reliable, easy-to-install and designed for high-quality VoIP calling from your analog phone.",
  },

  "yealink-w70b": {
    title: "Shop Yealink W70B DECT Handset | Zoiko Telecom",
    description:
      "Get the Yealink W70B DECT Handset from Zoiko Telecom. Perfect for business environments, offering seamless calls, reliable coverage and ergonomic design.",
  },

  "cisco-191-ata": {
    title: "Cisco 191 ATA | Affordable VOIP Adapter | Zoiko Telecom",
    description:
      "Looking for an affordable VOIP adapter? The Cisco 191 ATA from Zoiko Telecom offers seamless connectivity for analog phones to digital networks.",
  },

  "yealink-73h": {
    title: "Buy Yealink 73H | High-Quality VoIP Headset | Zoiko Telecom",
    description:
      "Shop Yealink 73H VoIP headset at Zoiko Telecom. Designed for business professionals, it offers superior sound quality, noise cancellation and ergonomic comfort.",
  },

  "yealink-t31g-t43u-psu": {
    title: "Yealink T31G/T43U PSU Power Adapter | Zoiko Telecom",
    description:
      "Power your Yealink T31G and T43U IP phones with the Yealink T31G/T43U PSU from Zoiko Telecom. Reliable, efficient & perfect for uninterrupted communication.",
  },

  "polycom-psu": {
    title: "Polycom PSU | High-Quality Power Solutions | Zoiko Telecom",
    description:
      "Shop Polycom PSU at Zoiko Telecom for high-quality & reliable power solutions that ensure the performance and longevity of your Polycom communication equipment.",
  },

  "jabra-biz-2300-mono": {
    title: "Zoiko Jabra BIZ 2300 Mono Noise Cancellation Microphone",
    description:
      "Experience superior sound quality with the Jabra Biz 2300 Mono headset. Its noise-cancelling microphone ensures your voice is heard loud and clear, every time.",
  },

  "jabra-biz-2300-duo": {
    title: "Jabra BIZ 2300 Duo Noise Cancellation Phone | Zoiko Telecom",
    description:
      "Get the Jabra Biz 2300 Duo headset for exceptional noise cancellation and crisp audio quality at an affordable price. Boost your communication experience today!",
  },

  "yealink-cp700-speaker": {
    title: "Yealink CP700 Speaker | Portable Bluetooth Speaker",
    description:
      "Looking for a high-quality portable speaker? The Yealink CP700 Speaker from Zoiko Telecom offers clear sound, Bluetooth pairing & easy setup for professional use.",
  },

  "jabra-speak-510": {
    title: "Buy Jabra Speak 510 for Better Sound | Zoiko Telecom",
    description:
      "Upgrade your conference calls with Jabra Speak 510 from Zoiko Telecom. A compact, wireless speakerphone that delivers exceptional sound & seamless connectivity.",
  },

  "jabra-pro-920-polycom": {
    title: "Buy Jabra PRO 920 - Mono for Polycom | Zoiko Telecom",
    description:
      "Buy Jabra Pro 920 Mono for Polycom from Zoiko Telecom to ensures crystal-clear audio. Enjoy exceptional audio and comfort for all your communication needs!",
  },

  "jabra-pro-920-yealink": {
    title: "Buy Jabra PRO 920 - Mono for Yealink | Zoiko Telecom",
    description:
      "Boost your communication setup with the Jabra Pro 920 Mono for Yealink from Zoiko Telecom. Elevate your calls with superior sound quality today. Shop Now!",
  },

  "jabra-pro-920-duo-for-yealink": {
    title: "Zoiko Jabra Pro 920 Duo for Yealink | Dual Audio Headset",
    description:
      "Discover the Jabra Pro 920 Duo for Yealink at Zoiko Telecom. Experience crystal-clear calls and superior comfort for your communication needs. Shop Now!",
  },

  "polycom-calisto-5300-portable-bluetooth-usb-speakerphone": {
    title: "Polycom Calisto 5300 Portable Bluetooth | Zoiko Telecom",
    description:
      "Shop Polycom Calisto 5300 portable Bluetooth & USB speakerphone at Zoiko Telecom. Clear office calls, 360° mic, full-duplex audio, and compact design.",
  },

  "jabra-pro-920-duo-for-polycom": {
    title: "Jabra PRO 920 – Duo for Polycom | Zoiko Telecom",
    description:
      "Get professional-grade audio with Jabra Pro 920 Duo for Polycom from Zoiko Mobile. Wireless design, noise-cancelling mic & easy setup for better call quality.",
  },

  "cisco-ip-phone-adapter": {
    title: "Buy Cisco IP Phone Adapter Online | Zoiko Telecom",
    description:
      "Buy Cisco IP phone adapter online from Zoiko Telecom for reliable VoIP communication, easy installation, trusted Cisco quality & fast delivery across the UK.",
  },

  "business-conference-speaker": {
    title: "Buy Business Conference Speaker | Zoiko Telecom",
    description:
      "Buy a business conference speaker from Zoiko Telecom for crystal-clear meetings, HD audio, seamless connectivity, and fast delivery across the UK.",
  },

  "wireless-office-headset": {
    title: "Shop Wireless Office Headset | Zoiko Telecom",
    description:
      "Shop a wireless office headset from Zoiko Telecom for crystal-clear business calls, all-day comfort, wireless freedom, and fast delivery across the UK.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const meta = PRODUCT_META[slug];

  return {
    title: meta?.title ?? "Product | Zoiko Telecom",
    description:
      meta?.description ?? "Browse telecom products from Zoiko Telecom.",
  };
}

export default function Page() {
  return <ProductPage />;
}