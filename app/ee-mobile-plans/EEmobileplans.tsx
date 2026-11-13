"use client"
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Check, ChevronDown, Plus, X } from 'lucide-react'
import {
    Faqs,
    HEADING,
    HelpChoosing,
    Hero,
    HowItWorks,
    KeepYourNumber,
    SectionHeading,
    WhatsIncluded,
} from './sections'


// ─── Cart wiring ────────────────────────────────────────────────────────────────
// Matches the localStorage key the checkout page reads from.
const CART_KEY = "cart";

interface RawCartItem {
  id?: string | number;
  name?: string;
  price?: number | string;
  planType?: string;
  planName?: string;
  planTitle?: string;
  planDuration?: string;
  finalPrice?: number;
  salePrice?: number | string;
  dataAllowance?: string;
  eeCategory?: string;
  simType?: string;
  billingPeriod?: "monthly" | "one-off";
  features?: { id: number; title: string }[];
  qty?: number;
  timestamp?: number;
  formData?: { priceQty: number; price: number };
  [key: string]: unknown;
}

function readCart(): RawCartItem[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(CART_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    window.dispatchEvent(new Event("cart-updated"));
    return Array.isArray(parsed) ? (parsed as RawCartItem[]) : [];
  } catch {
    return [];
  }
}

function writeCart(items: RawCartItem[]): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(CART_KEY, JSON.stringify(items));

  window.dispatchEvent(new Event("cart:updated"));
}

/** "£15.00/m" → 15, "£5.00" → 5 */
function parsePrice(raw: string): number {
  return parseFloat(String(raw).replace(/[^0-9.]/g, "")) || 0;
}

interface Plan {
  name: string;
  data: string;
  // Static price for single-price categories (roaming / voice & text).
  price?: string;
  // Duration-keyed price for categories with duration tabs (bundles / broadband).
  prices?: Record<string, string>;
  badge: string | false;
  features: string[];
}

// Duration tabs are category-specific. Bundles expose three terms; broadband keeps two.
const durationTabsByCategory: Record<string, string[]> = {
    "EE Mobile Bundles": ["30 Days", "12 Months", "24 Months"],
    "EE Mobile Broadband Plans": ["12 Months", "24 Months"],
};

// SIM delivery type — applies to every SIM plan on this page.
const simTypes = ["eSIM", "pSIM"];

// Shared feature list for the bundle tiers.
const BUNDLE_FEATURES = [
    "No Long-Term Contracts",
    "Unlimited Data Pass Available",
    "Affordable & Competitive Pricing",
    "5G Ready SIMs",
    "Inclusive EU Roaming",
    "Exceptional Customer Support",
];

// Shared feature list for the broadband tiers.
const BROADBAND_FEATURES = [
    "Unlimited Data Options",
    "Nationwide 5G Coverage",
    "Portable Wi-Fi Hotspot",
    "Affordable Plans",
    "Roaming Included",
    "Free SIM & Free Delivery",
];

const plansData: Record<string, Plan[]> = {
    // Ordered cheapest → most expensive.
    "EE Mobile Bundles": [
        {
            name: "Z-Essentials",
            data: "10GB",
            prices: {
                "30 Days": "£11.50/m",
                "12 Months": "£10.50/m",
                "24 Months": "£9.50/m",
            },
            badge: false,
            features: BUNDLE_FEATURES,
        },
        {
            name: "Z-Comfort",
            data: "20GB",
            prices: {
                "30 Days": "£13.50/m",
                "12 Months": "£12.00/m",
                "24 Months": "£11.00/m",
            },
            badge: false,
            features: BUNDLE_FEATURES,
        },
        {
            name: "Z-Royal",
            data: "50GB",
            prices: {
                "30 Days": "£18.00/m",
                "12 Months": "£16.50/m",
                "24 Months": "£15.00/m",
            },
            badge: false,
            features: BUNDLE_FEATURES,
        },
        {
            name: "Super-Z",
            data: "100GB",
            prices: {
                "30 Days": "£30.00/m",
                "12 Months": "£27.50/m",
                "24 Months": "£25.00/m",
            },
            badge: "MOST POPULAR",
            features: [
                "No Long-Term Contracts",
                "Unlimited Data Options",
                "Affordable & Competitive Pricing",
                "5G Ready SIMs",
                "Inclusive EU Roaming",
                "Exceptional Customer Support",
            ],
        },
        {
            name: "Z-Unlimited",
            data: "Unlimited",
            prices: {
                "30 Days": "£35.00/m",
                "12 Months": "£32.00/m",
                "24 Months": "£29.00/m",
            },
            badge: false,
            features: [
                "No Long-Term Contracts",
                "Lightning-Fast Options",
                "Affordable & Competitive Pricing",
                "5G Ready SIMs",
                "Inclusive EU Roaming",
                "Exceptional Customer Support",
            ],
        },
    ],

    // Ordered cheapest → most expensive.
    "EE Mobile Broadband Plans": [
        {
            name: "ZB-Velocity",
            data: "30GB",
            prices: {
                "12 Months": "£13.00/m",
                "24 Months": "£12.00/m",
            },
            badge: false,
            features: BROADBAND_FEATURES,
        },
        {
            name: "ZB-Unlimited",
            data: "Unlimited",
            prices: {
                "12 Months": "£16.50/m",
                "24 Months": "£15.00/m",
            },
            badge: false,
            features: BROADBAND_FEATURES,
        },
        {
            name: "ZB-Bliss",
            data: "200GB",
            prices: {
                "12 Months": "£30.00/m",
                "24 Months": "£27.00/m",
            },
            badge: false,
            features: BROADBAND_FEATURES,
        },
    ],

    "Day Pass Roaming Plans": [
        {
            name: "World Traveller",
            data: "1GB",
            price: "£15.00",
            badge: false,
            features: [
                "Minutes: 60 Minutes",
                "Texts: 60 SMS",
                "Free SIM",
                "Free Delivery",
            ],
        },
        {
            name: "Pro Traveller",
            data: "1GB",
            price: "£10.00",
            badge: false,
            features: [
                "Minutes: Unlimited",
                "Texts: Unlimited",
                "Free SIM",
                "Free Delivery",
            ],
        },
        {
            name: "Euro Explorer",
            data: "2GB",
            price: "£5.00",
            badge: false,
            features: [
                "Minutes: Unlimited",
                "Texts: Unlimited",
                "Free SIM",
                "Free Delivery",
            ],
        },
    ],

    "Voice and Text Plans": [
        {
            name: "Chat Treat",
            data: "100MB",
            price: "£7.00",
            badge: false,
            features: [
                "Minutes: 1000",
                "Texts: 1000",
                "Free SIM",
                "Free Delivery",
            ],
        },
        {
            name: "Talk Pro",
            data: "100MB",
            price: "£6.50",
            badge: false,
            features: [
                "Minutes: 1000",
                "Texts: 1000",
                "Roaming Data: 100MB",
                "Free SIM",
                "Free Delivery",
            ],
        },
        {
            name: "Talk Master",
            data: "100MB",
            price: "£5.50",
            badge: false,
            features: [
                "Minutes: 1000",
                "Texts: 1000",
                "Roaming Data: 100MB",
                "Free SIM",
                "Free Delivery",
            ],
        },
    ],
};

// Display-only subtitles shown in each plan card header (not sent to the cart).
const planTaglines: Record<string, string> = {
    "Z-Essentials": "Everyday basics",
    "Z-Comfort": "More room for data",
    "Z-Royal": "For heavier use",
    "Super-Z": "Big data allowance",
    "Z-Unlimited": "Unlimited data*",
};

// Display-only card content from the Figma design (not sent to the cart).
const FEATURED_PLAN = "Z-Royal";
const CARD_HIGHLIGHTS = [
    "Unlimited UK minutes & texts [confirm]",
    "Keep your current phone",
    "eSIM on compatible devices [confirm]",
];

/** "30 Days" → "30-day", "12 Months" → "12-month" */
function termLabel(duration: string): string {
    const [num, unit] = duration.split(" ");
    return `${num}-${unit.toLowerCase().replace(/s$/, "")}`;
}

export default function EEmobileplans() {

    const [activeCategory] = useState(
        "EE Mobile Bundles"
    );

    const [activeDuration, setActiveDuration] = useState("30 Days");

    // The plan whose SIM-type popup is currently open (null = closed).
    // price is resolved for the active duration at the moment "Buy Now" is clicked.
    const [pendingPlan, setPendingPlan] = useState<{
        name: string;
        data: string;
        price: string;
        features: string[];
    } | null>(null);

    const currentPlans = plansData[activeCategory];


    const router = useRouter();

    // Resolve the price to show/charge for a plan under the active duration.
    // Duration-based categories read from plan.prices; others use plan.price.
    const resolvePrice = (plan: Plan): string => {
        if (plan.prices) {
            return plan.prices[activeDuration] ?? Object.values(plan.prices)[0] ?? "";
        }
        return plan.price ?? "";
    };

    // Buy Now opens the SIM-type popup, capturing the current duration's price.
    const handleBuyNow = (plan: Plan) => {
        setPendingPlan({
            name: plan.name,
            data: plan.data,
            price: resolvePrice(plan),
            features: plan.features,
        });
    };

    // Called from the popup once the user picks eSIM or pSIM.
    const confirmPurchase = (simType: string) => {
        const plan = pendingPlan;
        if (!plan) return;

        const price = parsePrice(plan.price);
        // "/m" in the price = recurring monthly bundle; otherwise a one-off pass.
        const isMonthly = /\/m\s*$/i.test(plan.price.trim());
        // Contract duration applies to any category that exposes duration tabs
        // (EE Mobile Bundles and EE Mobile Broadband Plans).
        const duration =
            durationTabsByCategory[activeCategory] ? activeDuration : "";

        const item: RawCartItem = {
            id: `ee-${activeCategory}-${plan.name}-${duration || "na"}-${simType}`
                .toLowerCase()
                .replace(/\s+/g, "-"),
            name: plan.name,
            planName: plan.name,
            planTitle: plan.name,
            price,
            salePrice: price,
            finalPrice: price,
            planType: "ee_mobile_manual",
            eeCategory: activeCategory,
            simType,
            dataAllowance: plan.data,
            planDuration: duration,
            billingPeriod: isMonthly ? "monthly" : "one-off",
            features: plan.features.map((title, i) => ({ id: i + 1, title })),
            qty: 1,
            timestamp: Date.now(),
            formData: { priceQty: 1, price },
        };

        const cart = readCart();
        cart.push(item);


        writeCart(cart);

        setPendingPlan(null);
        window.dispatchEvent(new Event("cart-updated"));
        // Send the user to checkout. Change the path if your checkout route differs.
        router.push("/checkout");
    };

    // ─── UI-only state (filters, details, compare checkbox) ─────────────────
    const [dataFilter, setDataFilter] = useState("all");
    const [openDetails, setOpenDetails] = useState<string | null>(null);
    const [compare, setCompare] = useState<string[]>([]);

    const durationTabs = durationTabsByCategory[activeCategory];
    const dataOptions = Array.from(new Set(currentPlans.map((p) => p.data)));
    const visiblePlans = currentPlans.filter(
        (p) => dataFilter === "all" || p.data === dataFilter
    );

    const resetFilters = () => {
        setDataFilter("all");
        if (durationTabs) setActiveDuration(durationTabs[0]);
    };

    const toggleCompare = (name: string) => {
        setCompare((list) =>
            list.includes(name) ? list.filter((n) => n !== name) : [...list, name]
        );
    };

    /** "£11.50/m" → { amount: "£11.50", monthly: true } */
    const priceParts = (plan: Plan) => {
        const raw = resolvePrice(plan);
        return {
            amount: raw.replace(/\/m\s*$/i, ""),
            monthly: /\/m\s*$/i.test(raw.trim()),
        };
    };

    const termText = (plan: Plan) => {
        const { monthly } = priceParts(plan);
        if (!monthly) return "one-off price";
        return durationTabs
            ? `a month · ${termLabel(activeDuration)} term`
            : "a month";
    };

    // Close the SIM popup with Escape.
    useEffect(() => {
        if (!pendingPlan) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setPendingPlan(null);
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [pendingPlan]);

    const pill = (active: boolean) =>
        `rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
            active
                ? "bg-gradient-to-r from-[#a3227f] to-[#8a2585] text-white shadow-[0_8px_20px_rgba(163,34,127,0.25)]"
                : "border border-[#e3e5ec] bg-white text-[#1c1a33] hover:border-[#a3227f]"
        }`;

    return (
        <div className="bg-white text-[#1c1a33]">
            <Hero />

            {/* ─── Plans ─────────────────────────────────────────────── */}
            <section id="plans" className="scroll-mt-28 bg-[#f8f8fb] py-16 lg:py-20">
                <div className="mx-auto max-w-[1340px] px-6 lg:px-12">
                    <SectionHeading
                        eyebrow="Our plans"
                        title="Find the right SIM-only plan"
                        intro="Filter by contract length and data. Results update as you choose."
                    />

                    {/* Filters */}
                    <div className="mt-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                        <div>
                            {durationTabs && (
                                <>
                                    <p className="text-sm font-semibold text-[#1c1a33]">Contract length</p>
                                    <div className="mt-2.5 flex flex-wrap gap-2">
                                        {durationTabs.map((tab) => (
                                            <button
                                                key={tab}
                                                type="button"
                                                aria-pressed={activeDuration === tab}
                                                onClick={() => setActiveDuration(tab)}
                                                className={pill(activeDuration === tab)}
                                            >
                                                {tab}
                                            </button>
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>
                        <div className="w-full md:w-[320px]">
                            <label htmlFor="data-filter" className="text-sm font-semibold text-[#1c1a33]">
                                Data allowance
                            </label>
                            <div className="relative mt-2.5">
                                <select
                                    id="data-filter"
                                    value={dataFilter}
                                    onChange={(e) => setDataFilter(e.target.value)}
                                    className="w-full appearance-none rounded-xl border border-[#e3e5ec] bg-white px-4 py-3 pr-10 text-[15px] text-[#1c1a33] outline-none focus:border-[#a3227f]"
                                >
                                    <option value="all">All allowances</option>
                                    {dataOptions.map((d) => (
                                        <option key={d} value={d}>{d}</option>
                                    ))}
                                </select>
                                <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#5f6275]" aria-hidden="true" />
                            </div>
                        </div>
                    </div>

                    <div className="mt-4 flex items-center justify-between text-sm">
                        <p className="text-[#5f6275]" aria-live="polite">
                            Showing {visiblePlans.length} plan{visiblePlans.length === 1 ? "" : "s"}
                            {durationTabs ? ` · ${termLabel(activeDuration)}` : ""}
                        </p>
                        <button type="button" onClick={resetFilters} className="font-bold text-[#a3227f] hover:underline">
                            Reset
                        </button>
                    </div>

                    {/* Cards */}
                    <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                        {visiblePlans.map((plan) => {
                            const { amount } = priceParts(plan);
                            const detailsOpen = openDetails === plan.name;
                            const inCompare = compare.includes(plan.name);
                            return (
                                <article
                                    key={plan.name}
                                    className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-[0_14px_40px_rgba(15,27,61,0.08)]"
                                >
                                    <header className="flex items-start justify-between gap-3 bg-gradient-to-r from-[#a3227f] to-[#7a2a8f] px-5 py-4 text-white">
                                        <div>
                                            <h3 className={`${HEADING} text-lg font-semibold`}>{plan.name}</h3>
                                            <p className="mt-0.5 text-xs text-white/85">{planTaglines[plan.name]}</p>
                                        </div>
                                        {plan.name === FEATURED_PLAN && (
                                            <span className="mt-1 shrink-0 rounded-full bg-white px-2.5 py-0.5 text-[11px] font-bold text-[#a3227f]">
                                                Featured
                                            </span>
                                        )}
                                    </header>

                                    <div className="flex flex-1 flex-col px-5 pt-5">
                                        <p className="flex items-baseline gap-2">
                                            <span className={`${HEADING} text-3xl font-bold text-[#1c1a33]`}>{plan.data}</span>
                                            <span className="text-sm text-[#5f6275]">data</span>
                                        </p>
                                        <p className="mt-3 flex items-baseline gap-2">
                                            <span className={`${HEADING} text-xl font-bold text-[#a3227f]`}>{amount}</span>
                                            <span className="text-sm text-[#5f6275]">{termText(plan)}</span>
                                        </p>

                                        <span className="mt-3 self-start rounded-full bg-[#fff4e0] px-2.5 py-1 text-xs font-semibold text-[#8a5a00]">
                                            Price from approved tariff feed
                                        </span>

                                        <ul className="mt-4 space-y-2.5 pb-5">
                                            {CARD_HIGHLIGHTS.map((f) => (
                                                <li key={f} className="flex items-start gap-2.5 text-[15px] text-[#1c1a33]">
                                                    <Check className="mt-1 h-3.5 w-3.5 shrink-0 text-[#a3227f]" strokeWidth={3} aria-hidden="true" />
                                                    {f}
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="mt-auto border-t border-[#eceef3]">
                                            <button
                                                type="button"
                                                onClick={() => setOpenDetails(detailsOpen ? null : plan.name)}
                                                aria-expanded={detailsOpen}
                                                className="flex w-full items-center justify-between py-4 text-sm font-bold text-[#a3227f]"
                                            >
                                                View plan details
                                                <Plus className={`h-4 w-4 transition-transform ${detailsOpen ? "rotate-45" : ""}`} aria-hidden="true" />
                                            </button>
                                            {detailsOpen && (
                                                <ul className="space-y-2 pb-4">
                                                    {plan.features.map((f) => (
                                                        <li key={f} className="flex items-start gap-2.5 text-sm text-[#5f6275]">
                                                            <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#a3227f]" strokeWidth={3} aria-hidden="true" />
                                                            {f}
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>

                                        <label className="flex cursor-pointer items-center gap-2.5 py-2 text-sm font-semibold text-[#1c1a33]">
                                            <input
                                                type="checkbox"
                                                checked={inCompare}
                                                onChange={() => toggleCompare(plan.name)}
                                                className="h-[18px] w-[18px] accent-[#a3227f]"
                                            />
                                            Add to compare
                                        </label>

                                        <div className="grid grid-cols-2 gap-3 pb-5 pt-3">
                                            <button
                                                type="button"
                                                onClick={() => handleBuyNow(plan)}
                                                className="rounded-full bg-gradient-to-r from-[#a3227f] to-[#7a2a8f] py-3 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(163,34,127,0.3)] transition-transform hover:-translate-y-0.5"
                                            >
                                                Ask about it
                                            </button>
                                            <a
                                                href="/contact"
                                                className="flex items-center justify-center rounded-full border-2 border-[#a3227f] py-3 text-sm font-semibold text-[#a3227f] transition-colors hover:bg-[#fbe6f1]"
                                            >
                                                Get advice
                                            </a>
                                        </div>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>

            <WhatsIncluded />
            <KeepYourNumber />

            {/* ─── Roaming & international ───────────────────────────── */}
            <section className="bg-white">
                <div className="relative aspect-[1200/442] max-h-[520px] min-h-[300px] w-full overflow-hidden">
                    <Image
                        src="/Images/ee-mobile-plans/ee-roaming-world-map.webp"
                        alt="Two people pointing at a digital world map"
                        fill
                        sizes="100vw"
                        className="object-cover"
                    />
                    <div className="absolute inset-0 mx-auto flex max-w-[1340px] items-end px-6 pb-10 lg:px-12">
                        <div className="max-w-[560px]">
                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#1f3f7a] sm:text-sm">Roaming & international</p>
                            <h2 className={`${HEADING} mt-1 text-2xl font-bold text-[#7a2a8f] sm:text-3xl`}>Using your plan abroad</h2>
                            <p className="mt-2 text-sm leading-relaxed text-[#2a2440] sm:text-base">
                                Roaming terms differ by plan. Check each plan’s details for where it works and what it costs.
                            </p>
                        </div>
                    </div>
                </div>

            </section>

            <HowItWorks />
            <HelpChoosing />
            <Faqs />

            {/* ─── SIM type popup (Buy now → choose SIM → cart → checkout) ─── */}
            {pendingPlan && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-label="Choose your SIM type">
                    <div onClick={() => setPendingPlan(null)} className="absolute inset-0 bg-[#0b0d3b]/60 backdrop-blur-sm" />
                    <div className="relative w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl">
                        <div className="bg-gradient-to-r from-[#a3227f] to-[#7a2a8f] px-6 py-5 text-white">
                            <button
                                type="button"
                                onClick={() => setPendingPlan(null)}
                                aria-label="Close"
                                className="absolute right-4 top-4 text-white/80 hover:text-white"
                            >
                                <X className="h-6 w-6" aria-hidden="true" />
                            </button>
                            <h3 className={`${HEADING} text-xl font-bold`}>{pendingPlan.name}</h3>
                            <p className="mt-1 text-sm text-white/85">
                                {pendingPlan.data} data · {pendingPlan.price}
                            </p>
                        </div>
                        <div className="p-6">
                            <p className={`${HEADING} text-base font-semibold`}>Choose your SIM type</p>
                            <div className="mt-4 grid grid-cols-2 gap-4">
                                {simTypes.map((type) => (
                                    <button
                                        key={type}
                                        type="button"
                                        onClick={() => confirmPurchase(type)}
                                        className="group rounded-xl border border-[#e3e5ec] bg-[#f8f8fb] p-5 text-center transition-colors hover:border-[#a3227f] hover:bg-[#fbe6f1]"
                                    >
                                        <span className="block text-lg font-bold text-[#1c1a33] group-hover:text-[#a3227f]">{type}</span>
                                        <span className="mt-1 block text-xs text-[#5f6275]">
                                            {type === "eSIM" ? "Instant digital activation" : "Physical SIM by post"}
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
