/**
 * POST /api/BritishTelecom/book-appointment
 *
 * Books a specific installation appointment slot with BT.
 *
 * Body:
 *   addressId        – Openreach NAD address id
 *   appointmentTech  – mapped BT appointment tech string (e.g. "FTTP", "SOGEA New Line")
 *   productSpecId    – "BB1" or "Ethernet"
 *   productFamily    – "BB1hub" or "Ethernet"
 *   startTime        – ISO datetime from the chosen slot
 *   endTime          – ISO datetime from the chosen slot
 *
 * Env vars used:  NEXT_BT_CLIENT_ID, NEXT_BT_CLIENT_SECRET, NEXT_BT_ENDPOINT_URI
 */

import { NextRequest, NextResponse } from "next/server";
import { callApi } from "../_lib/callApi";

interface AppointmentResponse {
  id?: string;
  BESAppointmentId?: string;
  validFor?: { startDateTime?: string; endDateTime?: string };
  status?: string;
}

export async function POST(req: NextRequest) {
  let body: {
    addressId?: string;
    appointmentTech?: string;
    productSpecId?: string;
    productFamily?: string;
    startTime?: string;
    endTime?: string;
  };

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ success: false, message: "Invalid JSON body" }, { status: 400 });
  }

  const { addressId, appointmentTech, productSpecId, productFamily, startTime, endTime } = body;

  if (!addressId || !appointmentTech || !productSpecId || !productFamily || !startTime || !endTime) {
    return NextResponse.json(
      { success: false, message: "addressId, appointmentTech, productSpecId, productFamily, startTime and endTime are all required" },
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
    validFor: {
      startDateTime: startTime,
      endDateTime:   endTime,
    },
  };

  console.log("[BT book-appointment] Booking slot:", startTime, "→", endTime);
  console.log("[BT book-appointment] Tech:", appointmentTech, "| Address:", addressId);

  const response = await callApi<AppointmentResponse>(
    "/common/appointmentManagement/v4/appointment",
    {
      method: "POST",
      body: payload,
      headers: { productFamily },
    }
  );

  if (!response.success) {
    console.error("[BT book-appointment] ❌ Failed:", response.message);
    return NextResponse.json(
      { success: false, message: response.message, error: (response as { body?: unknown }).body },
      { status: response.status_code ?? 500 }
    );
  }

  const data = response.data;
  const appointment = {
    id:    data?.id ?? data?.BESAppointmentId ?? `APPT-${Date.now()}`,
    start: data?.validFor?.startDateTime ?? startTime,
    end:   data?.validFor?.endDateTime   ?? endTime,
  };

  console.log("[BT book-appointment] ✅ Booked:", appointment.id);

  return NextResponse.json({ success: true, appointment });
}