// Published per-line monthly prices, as shown on other Zoiko Telecom pages:
// - standard: 12-month price on the EE Mobile Plans page (app/ee-mobile-plans)
// - thirtyDay: 30-day price on the EE Mobile Plans page
// - esim: price on the eSIM page (app/esim); Super-Z isn't listed there
// Keep these in sync if those pages change.

export type PriceType = "standard" | "thirtyDay" | "esim";

export type Plan = {
  id: string;
  name: string;
  data: string;
  prices: Record<PriceType, number | null>;
};

export const PLANS: readonly Plan[] = [
  { id: "z-essentials", name: "Z-Essentials", data: "10GB", prices: { standard: 10.5, thirtyDay: 11.5, esim: 8.99 } },
  { id: "z-comfort", name: "Z-Comfort", data: "20GB", prices: { standard: 12, thirtyDay: 13.5, esim: 10.99 } },
  { id: "z-royal", name: "Z-Royal", data: "50GB", prices: { standard: 16.5, thirtyDay: 18, esim: 14.99 } },
  { id: "super-z", name: "Super-Z", data: "100GB", prices: { standard: 27.5, thirtyDay: 30, esim: null } },
  { id: "z-unlimited", name: "Z-Unlimited", data: "Unlimited", prices: { standard: 32, thirtyDay: 35, esim: 19.99 } },
];

export const PRICE_TYPE_LABELS: Record<PriceType, string> = {
  standard: "Standard",
  thirtyDay: "30-day",
  esim: "eSIM",
};

export const formatPrice = (amount: number) => `£${amount.toFixed(2)}`;
