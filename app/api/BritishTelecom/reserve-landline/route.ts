/**
 * POST /api/BritishTelecom/reserve-landline
 *
 * Reserves a landline directory number against the reseller's CUG via the
 * BT Wholesale HubCo WHCE API:
 *   POST /v1/resourceManagement/directoryNumbers/reservation
 *
 * Three modes — match the `numbers` shape to what the user supplies:
 *
 *   1. directoryNumber  – port an existing number (one or more specific CLIs).
 *   2. numberString     – search by prefix / partial number (e.g. "01234").
 *   3. postCode         – get the first available number in a postcode area.
 *
 * On success the API returns a `reservationKey` (valid for a limited time).
 * Pass this key + the reserved number into the broadband checkout's
 * `checkoutExtras.landline_number` / `checkoutExtras.has_landline` fields so
 * that `process-order/route.ts` can inject ATT_RT_CLI + ATT_RT_PortingRequired
 * into the BroadbandOne product order.
 *
 * BT API docs: BT Wholesale HubCo WHCE OpenAPI spec, /directoryNumbers/reservation
 */

import { NextRequest, NextResponse } from "next/server";
import { callApi } from "../_lib/callApi";

// ─── Request types ────────────────────────────────────────────────────────────

/**
 * Mode A: port / reserve one or more specific CLIs.
 * Pass the full national number(s) including leading zero, e.g. "01234567890".
 * Min length 10, max 11. Array of 1–100 numbers.
 */
interface DirectoryNumberMode {
  mode: "directoryNumber";
  directoryNumbers: string[]; // e.g. ["01234567890"]
}

/**
 * Mode B: search by partial number string.
 * `numberString` – 5 to 11 chars starting with 0.
 * Optional flags: exactFlag (exact match), contiguosFlag (contiguous block).
 */
interface NumberStringMode {
  mode: "numberString";
  numberString: string;
  quantity?: number; // default 1
  exactFlag?: boolean;
  contiguosFlag?: boolean;
}

/**
 * Mode C: first available number in a postcode area.
 * `postCode` – regex ^[a-zA-Z0-9]{2,4}[ ][a-zA-Z0-9]+$ (e.g. "SW1A 1AA").
 */
interface PostCodeMode {
  mode: "postCode";
  postCode: string;
  quantity?: number; // default 1
}

type LandlineRequestBody =
  | DirectoryNumberMode
  | NumberStringMode
  | PostCodeMode;

// ─── BT API response types ────────────────────────────────────────────────────

interface ReservedNumber {
  number: string;
  status: string;
  prefix: string;
}

interface ReservationResponse {
  reservationKey: string;
  reservationStatus: "SUCCESS" | "FAILED";
  numbers: ReservedNumber[];
}

// ─── Validation helpers ───────────────────────────────────────────────────────

const CLI_RE = /^0\d{9,10}$/; // 10–11 digits, leading 0
const POSTCODE_RE = /^[a-zA-Z0-9]{2,4} [a-zA-Z0-9]+$/;
const NUMBER_STRING_RE = /^0.{4,10}$/; // starts with 0, length 5–11

function validateDirectoryNumbers(numbers: string[]): string | null {
  if (!numbers.length || numbers.length > 100) {
    return "directoryNumbers must contain 1–100 entries";
  }
  for (const n of numbers) {
    if (!CLI_RE.test(n)) {
      return `Invalid directory number "${n}". Must be 10–11 digits starting with 0.`;
    }
  }
  return null;
}

// ─── Build BT request body ────────────────────────────────────────────────────

function buildReservationBody(
  req: LandlineRequestBody,
  cugId: string
): Record<string, unknown> {
  const base = {
    customer: {
      id: cugId,
      type: "BUSINESS" as const,
    },
    product: { name: "WHC" },
  };

  switch (req.mode) {
    case "directoryNumber":
      return {
        ...base,
        numbers: {
          type: "Geographic",
          quantity: req.directoryNumbers.length,
          directoryNumber: req.directoryNumbers,
        },
      };

    case "numberString": {
      const qty = Math.max(1, Math.min(req.quantity ?? 1, 100));
      return {
        ...base,
        numbers: {
          type: "Geographic",
          quantity: qty,
          characteristics: {
            numberString: req.numberString,
            ...(req.exactFlag !== undefined && { exactFlag: req.exactFlag }),
            ...(req.contiguosFlag !== undefined && {
              contiguosFlag: req.contiguosFlag,
            }),
          },
        },
      };
    }

    case "postCode": {
      const qty = Math.max(1, Math.min(req.quantity ?? 1, 100));
      return {
        ...base,
        numbers: {
          type: "Geographic",
          quantity: qty,
          characteristics: {
            postCode: req.postCode,
          },
        },
      };
    }
  }
}

// ─── Route handler ────────────────────────────────────────────────────────────

export async function POST(request: NextRequest) {
  // ── 1. Parse body ─────────────────────────────────────────────────────────
  let body: LandlineRequestBody;

  try {
    body = (await request.json()) as LandlineRequestBody;
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid JSON body" },
      { status: 400 }
    );
  }

  // ── 2. Validate mode ──────────────────────────────────────────────────────
  if (!body?.mode) {
    return NextResponse.json(
      {
        success: false,
        message:
          'mode is required. Supported values: "directoryNumber", "numberString", "postCode".',
      },
      { status: 400 }
    );
  }

  if (!["directoryNumber", "numberString", "postCode"].includes(body.mode)) {
    return NextResponse.json(
      {
        success: false,
        message: `Unknown mode "${body.mode}". Supported: directoryNumber | numberString | postCode`,
      },
      { status: 400 }
    );
  }

  // ── 3. Mode-specific validation ───────────────────────────────────────────
  if (body.mode === "directoryNumber") {
    if (!Array.isArray(body.directoryNumbers) || !body.directoryNumbers.length) {
      return NextResponse.json(
        { success: false, message: "directoryNumbers array is required" },
        { status: 400 }
      );
    }
    const err = validateDirectoryNumbers(body.directoryNumbers);
    if (err) {
      return NextResponse.json({ success: false, message: err }, { status: 400 });
    }
  }

  if (body.mode === "numberString") {
    if (!body.numberString || !NUMBER_STRING_RE.test(body.numberString)) {
      return NextResponse.json(
        {
          success: false,
          message:
            "numberString must be 5–11 characters starting with 0 (e.g. \"01234\")",
        },
        { status: 400 }
      );
    }
  }

  if (body.mode === "postCode") {
    if (!body.postCode || !POSTCODE_RE.test(body.postCode)) {
      return NextResponse.json(
        {
          success: false,
          message:
            'postCode must match the format "AA1 1AA" (e.g. "SW1A 1AA")',
        },
        { status: 400 }
      );
    }
  }

  // ── 4. Resolve CUG ────────────────────────────────────────────────────────
  const cugId = process.env.BT_CUG;
  if (!cugId) {
    return NextResponse.json(
      {
        success: false,
        message:
          "BT_CUG environment variable is not set. Cannot identify the reseller account.",
      },
      { status: 500 }
    );
  }

  // ── 5. Build and send request to BT WHCE ─────────────────────────────────
  const requestBody = buildReservationBody(body, cugId);

  console.log("[BT reserve-landline] Requesting number reservation…");
  console.log("[BT reserve-landline] mode:", body.mode);
  console.log(
    "[BT reserve-landline] payload:",
    JSON.stringify(requestBody, null, 2)
  );

  const response = await callApi<ReservationResponse>(
    "/v1/resourceManagement/directoryNumbers/reservation",
    {
      method: "POST",
      body: requestBody,
    }
  );

  // ── 6. Handle API errors ──────────────────────────────────────────────────
  if (!response.success) {
    console.error(
      "[BT reserve-landline] ❌ Reservation failed:",
      response.message
    );
    return NextResponse.json(
      {
        success: false,
        message: response.message,
        error: (response as { body?: unknown }).body,
      },
      { status: response.status_code ?? 500 }
    );
  }

  const data = response.data;

  if (!data?.reservationKey || data.reservationStatus === "FAILED") {
    console.error(
      "[BT reserve-landline] ❌ BT returned FAILED status:",
      JSON.stringify(data)
    );
    return NextResponse.json(
      {
        success: false,
        message: "BT was unable to reserve a number. reservationStatus: FAILED",
        details: data,
      },
      { status: 422 }
    );
  }

  console.log(
    "[BT reserve-landline] ✅ Reserved. Key:",
    data.reservationKey,
    "Numbers:",
    data.numbers?.map((n) => n.number)
  );

  // ── 7. Return reservation details ─────────────────────────────────────────
  //
  // The caller (checkout form) should:
  //   • Store reservationKey for reference / cancellation.
  //   • Set checkoutExtras.has_landline = "yes"
  //   • Set checkoutExtras.landline_number = numbers[0].number
  //   • Pass both into /api/BritishTelecom/process-order as checkoutExtras,
  //     which will inject ATT_RT_CLI + ATT_RT_PortingRequired into the BT order.
  //
  return NextResponse.json({
    success: true,
    reservationKey: data.reservationKey,
    reservationStatus: data.reservationStatus,
    numbers: data.numbers ?? [],
    // Convenience: the first reserved number, ready to paste into checkoutExtras
    primaryNumber: data.numbers?.[0]?.number ?? null,
  });
}