/**
 * POST /api/BritishTelecom/landline/book-appointment
 *
 * Books a specific installation appointment slot for landline.
 * Endpoint: POST /common/appointmentManagement/v4/appointment
 */

import { NextRequest, NextResponse } from "next/server";
import { callApi } from "../../_lib/callApi";

interface AppointmentResponse {
  id?: string;
  BESAppointmentId?: string;
  validFor?: { startDateTime?: string; endDateTime?: string };
  status?: string;
}

export async function POST(req: NextRequest) {
  let body: {
    addressId?: string;
    startTime?: string;
    endTime?: string;
    accessTechnology?: string;
  };

  try { body = await req.json(); }
  catch { return NextResponse.json({ success: false, message: "Invalid JSON" }, { status: 400 }); }

  const { addressId, startTime, endTime } = body;
  if (!addressId || !startTime || !endTime) {
    return NextResponse.json(
      { success: false, message: "addressId, startTime and endTime are required" },
      { status: 400 }
    );
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
    validFor: { startDateTime: startTime, endDateTime: endTime },
  };

  console.log("[BT landline/book-appointment] Booking:", startTime, "→", endTime, "| address:", addressId);

  const response = await callApi<AppointmentResponse>(
    "/common/appointmentManagement/v4/appointment",
    { method: "POST", body: payload, headers: { productFamily: "BB1hub" } }
  );

  if (!response.success) {
    return NextResponse.json(
      { success: false, message: response.message, error: (response as { body?: unknown }).body },
      { status: response.status_code ?? 500 }
    );
  }

  const d = response.data;
  const appointment = {
    id:    d?.id ?? d?.BESAppointmentId ?? `APPT-${Date.now()}`,
    start: d?.validFor?.startDateTime   ?? startTime,
    end:   d?.validFor?.endDateTime     ?? endTime,
    status: d?.status ?? "confirmed",
  };

  console.log("[BT landline/book-appointment] ✅ Booked:", appointment.id);

  return NextResponse.json({ success: true, appointment });
}