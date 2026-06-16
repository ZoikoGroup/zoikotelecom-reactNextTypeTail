/**
 * POST /api/BritishTelecom/landline/reserve-numbers
 *
 * Reserves WHC geographic directory numbers.
 * Endpoint: POST https://api.wholesale.bt.com/v1/resourceManagement/directoryNumbers/reservation
 *
 * After address selection, call with mode="servingExchangeId" passing the
 * exchangeGroupCode and districtCode from the address search response —
 * these map directly to BT's servingExchangeId + areaName fields.
 *
 * YAML-confirmed payload shapes:
 *
 *   servingExchangeId (primary — use after address selection):
 *     numbers: { type, quantity, characteristics: { servingExchangeId, svxFlag, areaName } }
 *     product: { name: "WHC" }
 *
 *   directoryNumber (port existing number):
 *     numbers: { type, quantity, directoryNumber: ["1234567890"] }  ← NO leading zero
 *     product: { name: "WHC" }
 *
 *   numberString (search by prefix):
 *     numbers: { type, quantity, characteristics: { numberString: "1471" } }
 *     product: { name: "WHC" }
 *
 *   postCode (area search — uses exchange postcode format "EA24 V12", product "GNOME"):
 *     numbers: { type, quantity, characteristics: { postCode: "EA24 V12" } }
 *     product: { name: "GNOME" }
 */

import { NextRequest, NextResponse } from "next/server";
import { getAccessToken } from "../../_lib/authToken";

interface ReservedNumber {
  number: string;
  status: string;
  prefix: string;
}

interface ReservationResponse {
  reservationKey?: string;
  reservationStatus?: "SUCCESS" | "FAILED";
  numbers?: ReservedNumber[];
  code?: string;
  message?: string;
  reason?: string;
}

export async function POST(req: NextRequest) {
  let body: {
    mode?: "servingExchangeId" | "directoryNumber" | "numberString" | "postCode";
    // servingExchangeId mode — pass exchangeGroupCode + districtCode from address
    exchangeGroupCode?: string; // e.g. "BRW" → servingExchangeId
    districtCode?: string;      // e.g. "EA"  → areaName
    svxFlag?: string;           // default "Y"
    // directoryNumber mode — existing number to port (no leading zero per BT spec)
    directoryNumbers?: string[];
    // numberString mode
    numberString?: string;
    exactFlag?: boolean;
    contiguosFlag?: boolean;
    // postCode mode — exchange area postcode format e.g. "EA24 V12"
    postCode?: string;
    // shared
    quantity?: number;
  };

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ success: false, message: "Invalid JSON" }, { status: 400 });
  }

  const cugId        = process.env.BT_LND_CUG;
  const baseUrl      = process.env.NEXT_BT_ENDPOINT_URI;
  const apigwClientId = process.env.BT_APIGW_CLIENT_ID ?? "";

  if (!cugId)    return NextResponse.json({ success: false, message: "BT_CUG env var not set" }, { status: 500 });
  if (!baseUrl)  return NextResponse.json({ success: false, message: "NEXT_BT_ENDPOINT_URI not set" }, { status: 500 });

  const mode = body.mode ?? "servingExchangeId";
  const qty  = Math.max(1, Math.min(body.quantity ?? 5, 100));

  // ── Build numbers + product per exact YAML examples ───────────────────────
  let numbersPayload: Record<string, unknown>;
  let productName = "WHC"; // default; postCode mode uses "GNOME"

  if (mode === "servingExchangeId") {
    // Primary mode after address selection.
    // exchangeGroupCode (e.g. "BRW") → servingExchangeId
    // districtCode      (e.g. "EA")  → areaName
    if (!body.exchangeGroupCode || !body.districtCode) {
      return NextResponse.json(
        { success: false, message: "exchangeGroupCode and districtCode are required for servingExchangeId mode" },
        { status: 400 }
      );
    }
    numbersPayload = {
      type: "Geographic",
      quantity: qty,
      characteristics: {
        servingExchangeId: body.exchangeGroupCode,
        svxFlag:           body.svxFlag ?? "Y",
        areaName:          body.districtCode,
      },
    };

  } else if (mode === "directoryNumber") {
    // Port existing number(s).
    // BT spec: no leading zero — strip it if present.
    const nums = (body.directoryNumbers ?? []).map((n) =>
      n.replace(/\s/g, "").replace(/^0/, "") // strip leading zero per YAML example
    );
    if (!nums.length) {
      return NextResponse.json({ success: false, message: "directoryNumbers array is required" }, { status: 400 });
    }
    numbersPayload = {
      type: "Geographic",
      quantity: nums.length,
      directoryNumber: nums,
    };

  } else if (mode === "numberString") {
    if (!body.numberString) {
      return NextResponse.json({ success: false, message: "numberString is required" }, { status: 400 });
    }
    // Strip leading zero to match YAML example (numberString: 1471)
    const ns = body.numberString.replace(/\s/g, "").replace(/^0/, "");
    numbersPayload = {
      type: "Geographic",
      quantity: qty,
      characteristics: {
        numberString: ns,
        ...(body.exactFlag     !== undefined && { exactFlag:     body.exactFlag }),
        ...(body.contiguosFlag !== undefined && { contiguosFlag: body.contiguosFlag }),
      },
    };

  } else {
    // postCode mode — exchange area postcode e.g. "EA24 V12", product is "GNOME"
    if (!body.postCode) {
      return NextResponse.json({ success: false, message: "postCode is required" }, { status: 400 });
    }
    numbersPayload = {
      type: "Geographic",
      quantity: qty,
      characteristics: { postCode: body.postCode },
    };
    productName = "GNOME";
  }

  const payload = {
    customer: { id: cugId, type: "BUSINESS" },
    numbers:  numbersPayload,
    product:  { name: productName },
  };

  // ── Get OAuth token ────────────────────────────────────────────────────────
  let token: string;
  try {
    token = await getAccessToken();
  } catch (err) {
    return NextResponse.json(
      { success: false, message: err instanceof Error ? err.message : "Failed to get token" },
      { status: 500 }
    );
  }

  const trackingId =
    typeof crypto !== "undefined" && crypto.randomUUID
      ? crypto.randomUUID()
      : `${Date.now()}-${Math.random().toString(36).slice(2)}`;

  const url = `${baseUrl}/v1/resourceManagement/directoryNumbers/reservation`;

  console.log("[BT WHC reservation] POST", url);
  console.log("[BT WHC reservation] mode:", mode, "| CUG:", cugId);
  console.log("[BT WHC reservation] payload:", JSON.stringify(payload, null, 2));

  // ── Direct fetch ──────────────────────────────────────────────────────────
  let response: Response;
  try {
    response = await fetch(url, {
      method: "POST",
      headers: {
        "Authorization":          `Bearer ${token}`,
        "Content-Type":           "application/json",
        "Accept":                 "application/json",
        "APIGW-Tracking-Header":  trackingId,
        ...(apigwClientId && { "APIGW-Client-Id": apigwClientId }),
      },
      body: JSON.stringify(payload),
      cache: "no-store",
    });
  } catch (err) {
    return NextResponse.json(
      { success: false, message: err instanceof Error ? err.message : "Network error" },
      { status: 500 }
    );
  }

  const statusCode = response.status;
  let data: ReservationResponse = {};
  try {
    const text = await response.text();
    if (text) data = JSON.parse(text);
  } catch { /* ignore */ }

  console.log("[BT WHC reservation] status:", statusCode);
  console.log("[BT WHC reservation] body:", JSON.stringify(data, null, 2));

  if (statusCode >= 400) {
    const detail =
      data.message ??
      (data.code ? `code ${data.code}${data.reason ? " — " + data.reason : ""}` : "");
    return NextResponse.json(
      {
        success: false,
        message: `API returned error: ${statusCode}${detail ? " — " + detail : ""}`,
        error: data,
      },
      { status: statusCode }
    );
  }

  if (!data.reservationKey || data.reservationStatus === "FAILED") {
    return NextResponse.json(
      { success: false, message: "BT returned FAILED reservation status", details: data },
      { status: 422 }
    );
  }

  console.log("[BT WHC reservation] ✅ Key:", data.reservationKey, "Numbers:", data.numbers?.map((n) => n.number));

  return NextResponse.json({
    success:           true,
    reservationKey:    data.reservationKey,
    reservationStatus: data.reservationStatus,
    numbers:           data.numbers ?? [],
  });
}