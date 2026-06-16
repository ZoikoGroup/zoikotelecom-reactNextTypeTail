/**
 * POST /api/BritishTelecom/search-slots
 *
 * Searches for available appointment time slots for a given address +
 * access technology. Returns all available slots (not just the first),
 * so the frontend can let the user choose.
 *
 * Body:
 *   addressId        – Openreach NAD address id
 *   appointmentTech  – mapped BT appointment tech string (e.g. "FTTP", "SOGEA New Line")
 *   productSpecId    – "BB1" or "Ethernet"
 *   productFamily    – "BB1hub" or "Ethernet"
 *
 * Env vars used:  NEXT_BT_CLIENT_ID, NEXT_BT_CLIENT_SECRET, NEXT_BT_ENDPOINT_URI
 */

import { NextRequest, NextResponse } from "next/server";
import { callApi } from "../_lib/callApi";

interface SlotSearchResponse {
  availableTimeSlot?: Array<{
    id?: string;
    validFor?: { startDateTime?: string; endDateTime?: string };
  }>;
}

export async function POST(req: NextRequest) {
  let body: {
    addressId?: string;
    appointmentTech?: string;
    productSpecId?: string;
    productFamily?: string;
  };

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ success: false, message: "Invalid JSON body" }, { status: 400 });
  }

  const { addressId, appointmentTech, productSpecId, productFamily } = body;

  if (!addressId || !appointmentTech || !productSpecId || !productFamily) {
    return NextResponse.json(
      { success: false, message: "addressId, appointmentTech, productSpecId and productFamily are required" },
      { status: 400 }
    );
  }

  const payload = {
    relatedEntity: [
      {
        appointmentType: "Standard",
        siteVisitReason: "Standard",
        product: {
          productSpecification: { id: productSpecId },
          characteristic: [{ name: "AccessTechnology", value: appointmentTech }],
          place: [
            {
              id: addressId,
              role: "InstallationAddress",
              "@referredType": "OpenreachAddress",
            },
          ],
        },
        id: "1",
        role: "OrderInformation",
        "@referredType": "BTProductAppointmentSpecification",
        "@type": "BTProductAppointmentSpecification",
        "@baseType": "RelatedEntity",
      },
    ],
    requestedTimeSlot: [{ validFor: { startDateTime: new Date().toISOString() } }],
  };

  const response = await callApi<SlotSearchResponse>(
    "/common/appointmentManagement/v4/searchTimeSlot",
    {
      method: "POST",
      body: payload,
      headers: { productFamily },
    }
  );

  if (!response.success) {
    return NextResponse.json(
      { success: false, message: response.message, error: (response as { body?: unknown }).body },
      { status: response.status_code ?? 500 }
    );
  }

  const rawSlots = response.data?.availableTimeSlot ?? [];

  if (!rawSlots.length) {
    return NextResponse.json({ success: false, message: "No appointment slots available for this address and line type." }, { status: 404 });
  }

  const slots = rawSlots.map((s) => ({
    id:    s.id,
    start: s.validFor?.startDateTime ?? "",
    end:   s.validFor?.endDateTime   ?? "",
  }));

  return NextResponse.json({ success: true, slots, count: slots.length });
}