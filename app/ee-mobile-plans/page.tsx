"use client"
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

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

const categories = [
    "EE Mobile Bundles",
    "EE Mobile Broadband Plans",
    "Day Pass Roaming Plans",
    "Voice and Text Plans",
];

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

const zonesData = [
  {
    id: 1,
    title: "Chat Connect",
    price: "£0.10",
    countries: [
      "Alaska",
      "Bangladesh",
      "Belgium",
      "Bermuda",
      "Bhutan",
      "Brazil",
      "Brunei Darussalam",
      "Bulgaria",
      "Cambodia",
      "Canada",
      "Chile",
      "China",
      "Colombia",
      "Croatia",
      "Cyprus",
      "Czech Republic",
      "Denmark",
      "Estonia",
      "Faroe Islands",
      "Finland",
      "France",
      "French Guiana",
      "Germany",
      "Greece",
      "Greenland",
      "Guam",
      "Hawaii",
      "Hong Kong",
      "Hungary",
      "Iceland",
      "India",
      "Indonesia",
      "Ireland",
      "Israel",
      "Japan",
      "Kuwait",
      "Laos",
      "Latvia",
      "Liechtenstein",
      "Lithuania",
      "Luxembourg",
      "Malta",
      "Martinique",
      "Mexico",
      "Mongolia",
      "Netherlands",
      "New Zealand",
      "North Mariana",
      "Norway",
      "Pakistan",
      "Paraguay",
      "Peru",
      "Poland",
      "Portugal",
      "Puerto Rico",
      "Romania",
      "Singapore",
      "Slovakia",
      "Slovenia",
      "South Korea",
      "Spain",
      "Sweden",
      "Thailand",
      "United States",
      "USA Virgin Islands",
      "Vatican",
      "Vietnam",
    ],
  },

  {
    id: 2,
    title: "World Connect",
    price: "£0.30",
    countries: [
      "Argentina",
      "Austria",
      "Dominican Republic",
      "Egypt",
      "Gibraltar",
      "Guatemala",
      "Iran",
      "Macao",
      "Malaysia",
      "Mauritius",
      "Mayotte Island",
      "Nepal",
      "Norfolk",
      "Netherlands",
      "Nigeria",
      "Panama",
      "Philippines",
      "Reunion",
      "San Marino",
      "Saudi Arabia",
      "Sri Lanka",
      "Sudan",
      "Swaziland",
      "Taiwan",
      "Turkmenistan",
      "United Arab Emirates",
      "Uruguay",
      "Uzbekistan",
      "Venezuela",
      "Yemen",
    ],
  },

  {
    id: 3,
    title: "Global Link",
    price: "£0.38",
    countries: [
      "Afghanistan",
      "Andorra",
      "Angola",
      "Armenia",
      "Aruba",
      "Barbados",
      "Belize",
      "Bolivia",
      "Botswana",
      "British Virgin Islands",
      "Cayman Islands",
      "Costa Rica",
      "Ecuador",
      "El Salvador",
      "Eritrea",
      "Ethiopia",
      "Grenada",
      "Guadeloupe",
      "Guyana",
      "Jamaica",
      "Jordan",
      "Kazakhstan",
      "Kenya",
      "Kyrgyzstan",
      "Lebanon",
      "Marshall Islands",
      "Montserrat",
      "Oman",
      "Palau",
      "Palestine",
      "Qatar",
      "Saint Kitts",
      "Saint Lucia",
      "Saint Vincent",
      "South Africa",
      "Switzerland",
      "Tajikistan",
      "Trinidad and Tobago",
      "Turkey",
      "Turks and Caicos Islands",
      "Ukraine",
    ],
  },

  {
    id: 4,
    title: "Talk Expert",
    price: "£0.37",
    countries: [
      "Albania",
      "Antigua and Barbuda",
      "Azerbaijan",
      "Bahamas",
      "Bahrain",
      "Benin",
      "Bosnia and Herzegovina",
      "Burkina Faso",
      "Cameroon",
      "Cape Verde",
      "Djibouti",
      "Fiji",
      "French Polynesia",
      "Ghana",
      "Guinea",
      "Haiti",
      "Liberia",
      "Libya",
      "Macedonia",
      "Russia",
      "Rwanda",
      "Senegal",
      "Serbia",
      "Suriname",
      "Syria",
      "Tanzania",
      "Togo",
      "Uganda",
    ],
  },

  {
    id: 5,
    title: "Global Traveller",
    price: "£0.60",
    countries: [
      "Algeria",
      "Burundi",
      "Central African Republic",
      "Comoros Islands",
      "Congo",
      "Cuba",
      "Equatorial Guinea",
      "Gabon",
      "Gambia, Guinea-Bissau",
      "Ivory Coast",
      "Kosovo",
      "Lesotho",
      "Madagascar",
      "Malawi",
      "Mauritania",
      "Micronesia",
      "Morocco",
      "Seychelles",
      "Sierra Leone",
      "Somalia",
      "South Sudan",
      "Tunisia",
      "Zambia",
      "Zimbabwe",
    ],
  },

  {
    id: 6,
    title: "Global Specialist",
    price: "£1.15",
    countries: [
      "Ascension",
      "Chad",
      "Diego Garcia",
      "Falkland Islands",
      "Maldives",
      "Nauru",
      "Papua New Guinea",
      "Sao Tome and Principe",
      "Tonga",
    ],
  },

  {
    id: 7,
    title: "Connect Pro",
    price: "£1.55",
    countries: [
      "Cook Islands",
      "Kiribati",
      "Niue",
      "Saint Helena",
      "Samoa",
      "Tuvalu",
      "Vanuatu",
    ],
  },

  {
    id: 8,
    title: "Elite Connect",
    price: "£3.30",
    countries: ["Solomon Islands", "Tokelau"],
  },
];



export default function page() {

    const [activeCategory, setActiveCategory] = useState(
        "EE Mobile Bundles"
    );

    const [activeDuration, setActiveDuration] = useState("12 Months");

    // The plan whose SIM-type popup is currently open (null = closed).
    // price is resolved for the active duration at the moment "Buy Now" is clicked.
    const [pendingPlan, setPendingPlan] = useState<{
        name: string;
        data: string;
        price: string;
        features: string[];
    } | null>(null);

    const currentPlans = plansData[activeCategory];

    const [openZone, setOpenZone] = useState<number | null>(1);

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

    // Keep the selected duration valid when switching categories
    // (e.g. "30 Days" doesn't exist for broadband).
    const handleCategoryChange = (category: string) => {
        setActiveCategory(category);
        const tabs = durationTabsByCategory[category];
        if (tabs && !tabs.includes(activeDuration)) {
            setActiveDuration(tabs[0]);
        }
    };

    const toggleZone = (id: number) => {
        setOpenZone(openZone === id ? null : id);
        };

    return (
        <>
            {/* Hero Section */}
            <section className="bg-[#7B2983] dark:bg-[#3E1542] relative min-h-[220px] overflow-hidden py-8 md:py-12 ">
                <div className="relative mx-auto max-w-[1200px] px-5 md:px-7">
                    <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 lg:gap-16">

                        {/* ── Left Content ── */}
                        <div className="text-white">
                            <h1 className="text-2xl font-bold uppercase leading-[1.1] tracking-tight md:text-3xl lg:text-5xl">
                                EE SIM Only Deals:
                            </h1>
                            <p className="mt-3 max-w-lg font-semibold text-base leading-relaxed text-white/80 sm:text-lg lg:text-2xl">
                                Unlimited • Pay As You Go • Connected
                            </p>
                            <p className="mt-3 max-w-lg text-base leading-relaxed text-white/80 sm:text-lg lg:text-xl">
                                Experience unparalleled connectivity with our flexible EE SIM plans
                            </p>
                        </div>

                        {/* ── Right: sim ── */}
                        <div className="relative flex justify-center lg:justify-end">

                            {/* Main card image */}
                            <div className="relative w-full max-w-[240px] overflow-hidden rounded-3xl sm:max-w-[350px] lg:max-w-[450px]">
                                <Image
                                    src="/Images/ee-sim.png"
                                    alt="Hero Card"
                                    width={600}
                                    height={400}
                                    priority
                                    className="h-auto w-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Plans Section */}
            <section className="w-full bg-[#faf6f9] dark:bg-[#0f0f14] py-16 transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Top Tabs */}
                    <div className="flex flex-wrap justify-center gap-3">
                        {categories.map((item) => (
                            <button
                                key={item}
                                onClick={() => handleCategoryChange(item)}
                                className={`rounded-full border px-5 py-2 text-sm font-medium transition-all duration-300
                ${activeCategory === item
                                        ? "bg-[#C12172] text-white border-pink-600 shadow-sm shadow-pink-500/20"
                                        : "bg-white dark:bg-[#18181f] text-gray-700 dark:text-gray-300 border-gray-300 dark:border-white/10 hover:border-pink-500"
                                    }
              `}
                            >
                                {item}
                            </button>
                        ))}
                    </div>

                    {/* Divider */}
                    <div className="mt-10 border-t border-gray-300 dark:border-white/10" />

                    {/* Duration Tabs */}
                    {durationTabsByCategory[activeCategory] && (
                        <div className="flex justify-center gap-3 mt-8">
                            {durationTabsByCategory[activeCategory].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveDuration(tab)}
                                    className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300
                  ${activeDuration === tab
                                            ? "bg-[#C12172] text-white shadow-sm shadow-pink-500/20"
                                            : "bg-white dark:bg-[#18181f] text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-white/10"
                                        }
                `}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                    )}

                    {/* Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 mt-12">
                        {currentPlans.map((plan, index) => (
                            <div
                                key={index}
                                className={`relative rounded-3xl border bg-white dark:bg-[#18181f]
              border-gray-200 dark:border-white/10
              p-8 transition-all duration-300 hover:-translate-y-2
              hover:shadow-2xl hover:shadow-pink-500/10
              ${plan.badge
                                        ? "ring-2 ring-pink-500 scale-[1.02]"
                                        : ""
                                    }`}
                            >
                                {/* Badge */}
                                {plan.badge && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                        <span className="rounded-full bg-pink-600 text-white text-xs font-semibold px-4 py-1 shadow-lg">
                                            {plan.badge}
                                        </span>
                                    </div>
                                )}

                                {/* Top Text */}
                                <div className="text-center">
                                    <h3 className="mt-8 text-3xl font-bold text-pink-700 dark:text-pink-500">
                                        {plan.name}
                                    </h3>

                                    <p className="mt-6 text-xs tracking-[0.2em] uppercase text-gray-500 dark:text-gray-400">
                                        Data
                                    </p>

                                    <h2 className="mt-2 text-5xl font-extrabold text-pink-700 dark:text-pink-500 break-words">
                                        {plan.data}
                                    </h2>

                                    <p className="mt-2 text-2xl font-semibold text-gray-800 dark:text-white">
                                        {resolvePrice(plan)}
                                    </p>
                                </div>

                                {/* Features */}
                                <div className="mt-8 space-y-4">
                                    {plan.features.map((feature, i) => (
                                        <div
                                            key={i}
                                            className="flex items-start gap-3 border-b border-gray-200 dark:border-white/10 pb-3"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="3"
                                                className="w-4 h-4 text-pink-600 mt-1 flex-shrink-0"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </svg>

                                            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                                                {feature}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                {/* Button */}
                                <button
                                    onClick={() => handleBuyNow(plan)}
                                    className="mt-8 w-full rounded-full bg-[#C12172] hover:bg-pink-700
                text-white font-semibold py-3 transition-all duration-300
                shadow-xs shadow-pink-500/20"
                                >
                                    Buy Now
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/*  */}
            <section className="w-full bg-[#f6f6f7] dark:bg-[#0f1117] py-16 transition-colors duration-300">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2
            className="
            text-3xl
            sm:text-4xl
            lg:text-5xl
            font-bold
            text-[#1f3557]
            dark:text-white
            leading-tight
          "
          >
            ZT International Calling Rates Per Minute
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-5">
          {zonesData.map((zone) => {
            const isOpen = openZone === zone.id;

            return (
              <div
                key={zone.id}
                className="
                  rounded-3xl
                  border
                  border-[#d8dee8]
                  dark:border-white/10
                  bg-white
                  dark:bg-[#181c25]
                  overflow-hidden
                  transition-all
                  duration-300
                "
              >
                {/* Header */}
                <button
                  onClick={() => toggleZone(zone.id)}
                  className="
                    w-full
                    flex
                    flex-col
                    md:flex-row
                    md:items-center
                    justify-between
                    gap-4
                    px-6
                    md:px-8
                    py-6
                    text-left
                  "
                >
                  {/* Zone */}
                  <div
                    className="
                      text-2xl
                      font-bold
                      text-[#1f3557]
                      dark:text-white
                    "
                  >
                    Zone {zone.id}
                  </div>

                  {/* Price */}
                  <div
                    className="
                      text-lg
                      font-semibold
                      text-[#ec0b7b]
                      dark:text-pink-500
                    "
                  >
                    {zone.title} @ {zone.price}
                  </div>

                  {/* Toggle */}
                  <div
                    className="
                      flex
                      items-center
                      gap-2
                      text-[#7b2ea8]
                      dark:text-purple-400
                      font-semibold
                    "
                  >
                    <span>View Countries</span>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className={`w-5 h-5 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>

                {/* Content */}
                <div
                  className={`
                    grid
                    transition-all
                    duration-500
                    ease-in-out
                    ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }
                  `}
                >
                  <div className="overflow-hidden">
                    <div
                      className="
                        px-6
                        md:px-8
                        pb-8
                      "
                    >
                      <div
                        className="
                          flex
                          flex-wrap
                          gap-3
                        "
                      >
                        {zone.countries.map((country, index) => (
                          <div
                            key={index}
                            className="
                              px-4
                              py-2.5
                              rounded-xl
                              border
                              border-pink-500
                              text-pink-600
                              dark:text-pink-400
                              dark:border-pink-400/40
                              bg-pink-50
                              dark:bg-pink-500/10
                              text-sm
                              sm:text-base
                              font-medium
                              transition-all
                              duration-300
                              hover:bg-pink-500
                              hover:text-white
                              cursor-default
                            "
                          >
                            {country}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
                </div>
            </section>

            {/* SIM Type Popup */}
            {pendingPlan && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4"
                    role="dialog"
                    aria-modal="true"
                >
                    {/* Backdrop */}
                    <div
                        onClick={() => setPendingPlan(null)}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />

                    {/* Modal */}
                    <div className="relative w-full max-w-md rounded-3xl bg-white dark:bg-[#18181f] border border-gray-200 dark:border-white/10 p-8 shadow-2xl">
                        {/* Close */}
                        <button
                            onClick={() => setPendingPlan(null)}
                            aria-label="Close"
                            className="absolute right-5 top-5 text-gray-400 hover:text-gray-700 dark:hover:text-white transition-colors"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>

                        {/* Heading */}
                        <div className="text-center">
                            <h3 className="text-2xl font-bold text-pink-700 dark:text-pink-500">
                                {pendingPlan.name}
                            </h3>
                            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                                {pendingPlan.data} • {pendingPlan.price}
                            </p>
                            <p className="mt-6 text-base font-semibold text-gray-800 dark:text-white">
                                Choose your SIM type
                            </p>
                        </div>

                        {/* Options */}
                        <div className="mt-6 grid grid-cols-2 gap-4">
                            {simTypes.map((type) => (
                                <button
                                    key={type}
                                    onClick={() => confirmPurchase(type)}
                                    className="group rounded-2xl border border-gray-200 dark:border-white/10
                  bg-[#faf6f9] dark:bg-[#0f0f14] p-5 text-center
                  hover:border-pink-500 hover:bg-pink-50 dark:hover:bg-pink-500/10
                  transition-all duration-300"
                                >
                                    <span className="block text-lg font-bold text-gray-800 dark:text-white group-hover:text-pink-700 dark:group-hover:text-pink-500">
                                        {type}
                                    </span>
                                    <span className="mt-1 block text-xs text-gray-500 dark:text-gray-400">
                                        {type === "eSIM"
                                            ? "Instant digital activation"
                                            : "Physical SIM by post"}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}