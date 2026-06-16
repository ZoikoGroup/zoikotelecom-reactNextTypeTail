/**
 * POST /api/BritishTelecom/landline/search-address
 *
 * Searches addresses using addressSource=ROBT (required for WHCE/landline).
 * The broadband search-address uses addressSource=Openreach — this is different.
 *
 * YAML endpoint: GET /common/geographicAddressManagement/v1/geographicAddress
 *   ?postcode=X&addressSource=ROBT
 */

import { NextRequest, NextResponse } from "next/server";
import { callApi } from "../../_lib/callApi";

interface RawAddress {
  id?: string;
  bestAddressLine1?: string;
  bestAddressLine2?: string;
  streetNr?: string;
  streetName?: string;
  city?: string;
  postcode?: string;
  districtCode?: string;
  uprn?: string;
  exchangeGroupCode?: string;
  qualifier?: string;
  addressSource?: string;
}

export interface LandlineAddress {
  id: string;
  display: string;
  streetNr: string;
  streetName: string;
  city: string;
  postcode: string;
  districtCode: string;
  uprn: string;
  exchangeGroupCode: string;
  qualifier: string;
}

function formatAddress(a: RawAddress): LandlineAddress {
  const display =
    a.bestAddressLine1 ??
    [a.streetNr, a.streetName].filter(Boolean).join(" ").trim() ??
    a.id ??
    "";
  return {
    id:               a.id               ?? "",
    display,
    streetNr:         a.streetNr         ?? "",
    streetName:       a.streetName       ?? "",
    city:             a.city             ?? "",
    postcode:         a.postcode         ?? "",
    districtCode:     a.districtCode     ?? "",
    uprn:             a.uprn             ?? "",
    exchangeGroupCode: a.exchangeGroupCode ?? "",
    qualifier:        a.qualifier        ?? "",
  };
}

// Simple in-memory cache — keyed by postcode (ROBT)
const cache = new Map<string, { data: LandlineAddress[]; expiresAt: number }>();
const TTL = 30 * 60 * 1000; // 30 min

export async function POST(req: NextRequest) {
  let postcode: string;
  try {
    const body = await req.json();
    postcode = (body?.postcode ?? "").trim().toUpperCase().replace(/\s+/, " ");
  } catch {
    return NextResponse.json({ success: false, message: "Invalid JSON body" }, { status: 400 });
  }

  if (!postcode) {
    return NextResponse.json({ success: false, message: "postcode is required" }, { status: 400 });
  }
  if (!/^[A-Z]{1,2}\d[A-Z\d]?\s?\d[A-Z]{2}$/.test(postcode)) {
    return NextResponse.json({ success: false, message: "Enter a valid UK postcode" }, { status: 400 });
  }

  // Cache hit
  const cached = cache.get(postcode);
  if (cached && Date.now() < cached.expiresAt) {
    return NextResponse.json({ success: true, addresses: cached.data, count: cached.data.length, cached: true });
  }

  const endpoint =
    "/common/geographicAddressManagement/v1/geographicAddress?" +
    new URLSearchParams({ postcode, addressSource: "ROBT" }).toString();

  const response = await callApi<RawAddress[]>(endpoint, { method: "GET" });

  if (!response.success) {
    return NextResponse.json(
      { success: false, message: response.message },
      { status: response.status_code ?? 500 }
    );
  }

  const raw = Array.isArray(response.data) ? response.data : [];
  if (!raw.length) {
    return NextResponse.json({ success: false, message: "No addresses found for this postcode" }, { status: 404 });
  }

  const addresses = raw.filter((a) => a.id).map(formatAddress);
  cache.set(postcode, { data: addresses, expiresAt: Date.now() + TTL });

  return NextResponse.json({ success: true, addresses, count: addresses.length, cached: false });
}