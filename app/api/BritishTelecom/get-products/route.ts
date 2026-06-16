import { NextRequest, NextResponse } from "next/server";
import { callApi } from "../_lib/callApi";

// ─── Types ────────────────────────────────────────────────────────────────────

interface ZoikoPlan {
  id: number;
  name: string;
  slug: string;
  category: {
    id: number;
    name: string;
    slug: string;
    description: string;
    is_active: boolean;
    sort_order: number;
  };
  bt_plan_id: string;
  bt_plan_name: string; // ← matched against BT productOffering.id
  description: string;
  is_active: boolean;
  is_featured: boolean;
  sort_order: number;
  created_at: string;
  updated_at: string;
  variations: {
    id: number;
    label: string;
    duration_value: number;
    duration_unit: string;
    duration_display: string;
    price: string;
    sale_price: string | null;
    bt_plan_id: string;
    effective_bt_plan_id: string;
    is_default: boolean;
    is_active: boolean;
    sort_order: number;
  }[];
}

interface ZoikoPlansResponse {
  count: number;
  results: ZoikoPlan[];
}

// ─── Fetch Zoiko plans ────────────────────────────────────────────────────────

async function fetchZoikoPlans(): Promise<ZoikoPlan[]> {
  try {
    const res = await fetch("https://api.zoikobroadband.com/api/v1/plans/", {
      next: { revalidate: 300 }, // cache for 5 minutes
    });
    if (!res.ok) return [];
    const data: ZoikoPlansResponse = await res.json();
    return data.results ?? [];
  } catch {
    return [];
  }
}

// ─── Match logic ──────────────────────────────────────────────────────────────
//
// BT returns:  product.productOffering.id  →  e.g. "SOGEA 40_10M"
// Zoiko has:   bt_plan_name                →  e.g. "SOGEA 40_10M"
//
// Only an exact match on bt_plan_name is used.
// Items with no match get zoikoPlan: null and are hidden in the frontend.

function matchZoikoPlan(
  btProductOfferingId: string,
  zoikoPlans: ZoikoPlan[]
): ZoikoPlan | null {
  return (
    zoikoPlans.find(
      (plan) => plan.bt_plan_name === btProductOfferingId
    ) ?? null
  );
}

// ─── Route handler ────────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  try {
    const { address_id, district_code } = await req.json();

    if (!address_id) {
      return NextResponse.json({
        success: false,
        message: "address_id is required",
      });
    }

    const requestBody = {
      "@type": "btProductOfferingQualification",
      instantSyncQualification: true,
      productOfferingQualificationItem: [
        {
          id: "74",
          action: "add",
          product: {
            "@type": "Product",
            productOffering: {
              id: "BroadbandOne",
              "@referredType": "btProductOfferingFamily",
            },
            place: [
              {
                id: address_id,
                districtId: district_code || "NS",
                role: "install address",
                "@referredType": "btNADLocationReference",
              },
            ],
          },
          "@type": "btProductOfferingQualificationItem",
        },
      ],
      provideAlternative: true,
      provideOnlyAvailable: true,
      provideUnavailabilityReason: false,
      relatedParty: [
        {
          id: process.env.BT_CUG || "CUG5025628076",
          role: "BtCug",
          "@type": "BTRelatedParty",
          "@referredType": "Customer",
        },
      ],
    };

    // Run BT qualification and Zoiko plans fetch in parallel
    const [response, zoikoPlans] = await Promise.all([
      callApi<any>(
        "/hubco/tmf/productOfferingQualification/v4/productOfferingQualification",
        {
          method: "POST",
          body: requestBody,
        }
      ),
      fetchZoikoPlans(),
    ]);

    if (!response.success) {
      return NextResponse.json({
        success: false,
        message: response.message,
        error: response.body,
      });
    }

    const qualificationItems =
      response.data?.productOfferingQualificationItem ?? [];

    // Enrich each BT item with its matched Zoiko plan (or null if no match).
    // Match key: BT productOffering.id === Zoiko bt_plan_name
    const enrichedItems = qualificationItems.map((item: any) => {
      const btPlanId: string = item.product?.productOffering?.id ?? "";
      const zoikoPlan = matchZoikoPlan(btPlanId, zoikoPlans);
      return {
        ...item,
        zoikoPlan: zoikoPlan ?? null,
        bt_plan_id: zoikoPlan?.bt_plan_id ?? null,  // ← add this
      };
    });

    return NextResponse.json({
      success: true,
      productOfferingQualificationItem: enrichedItems,
    });

  } catch (err: any) {
    return NextResponse.json({
      success: false,
      message: err.message || "Server error",
    });
  }
}