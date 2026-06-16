/**
 * POST /api/BritishTelecom/landline/search-slots
 *
 * Searches installation appointment slots for a landline (SOGEA New Line / FTTP).
 * Uses the same BT appointment management endpoint as broadband:
 *   POST /common/appointmentManagement/v4/searchTimeSlot
 *
 * For landline-only (WHCE), the underlying access technology is typically
 * SOGEA New Line. If the customer already has broadband at the address,
 * pass the actual tech via accessTechnology.
 */

import { NextRequest, NextResponse } from "next/server";
import { callApi } from "../../_lib/callApi";

interface SlotSearchResponse {
  availableTimeSlot?: Array<{
    id?: string;
    validFor?: { startDateTime?: string; endDateTime?: string };
  }>;
}

export async function POST(req: NextRequest) {
  let body: {
    addressId?: string;
    accessTechnology?: string; // default "SOGEA New Line"
  };

  try { body = await req.json(); }
  catch { return NextResponse.json({ success: false, message: "Invalid JSON" }, { status: 400 }); }

  if (!body.addressId) {
    return NextResponse.json({ success: false, message: "addressId is required" }, { status: 400 });
  }

  const tech = body.accessTechnology ?? "SOGEA New Line";

  const payload = {
    relatedEntity: [
      {
        appointmentType: "Standard",
        siteVisitReason: "Standard",
        product: {
          productSpecification: { id: "BB1" },
          characteristic: [{ name: "AccessTechnology", value: tech }],
          place: [
            {
              id: body.addressId,
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

  console.log("[BT landline/search-slots] addressId:", body.addressId, "tech:", tech);

  const response = await callApi<SlotSearchResponse>(
    "/common/appointmentManagement/v4/searchTimeSlot",
    { method: "POST", body: payload, headers: { productFamily: "BB1hub" } }
  );

  if (!response.success) {
    return NextResponse.json(
      { success: false, message: response.message },
      { status: response.status_code ?? 500 }
    );
  }

  const rawSlots = response.data?.availableTimeSlot ?? [];
  if (!rawSlots.length) {
    return NextResponse.json({ success: false, message: "No appointment slots available for this address" }, { status: 404 });
  }

  const slots = rawSlots.map((s) => ({
    id:    s.id    ?? null,
    start: s.validFor?.startDateTime ?? "",
    end:   s.validFor?.endDateTime   ?? "",
  }));

  return NextResponse.json({ success: true, slots, count: slots.length });
}