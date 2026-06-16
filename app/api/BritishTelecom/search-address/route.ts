/**
 * POST /api/BritishTelecom/search-address
 *
 * Accepts { postcode: string } in the request body.
 * Queries the Openreach geographic address endpoint and returns
 * formatted addresses.
 *
 * Equivalent to ajax_search_addresses() in the WordPress plugin.
 */

import { NextRequest, NextResponse } from "next/server";
import { callApi } from "../_lib/callApi";

// ─── Types ────────────────────────────────────────────────────────────────────

interface RawAddress {
  id?: string;
  bestAddressLine1?: string;
  streetNr?: string;
  streetName?: string;
  city?: string;
  postcode?: string;
  districtCode?: string;
  uprn?: string;
  exchangeGroupCode?: string;
  qualifier?: string;
}

export interface FormattedAddress {
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

// ─── In-memory address cache (mirrors WordPress transients) ──────────────────
// For production, swap this Map for Redis / a DB-backed store.

interface CacheEntry {
  addresses: FormattedAddress[];
  expiresAt: number; // ms timestamp
}

const addressCache = new Map<string, CacheEntry>();
const CACHE_TTL_MS = 30 * 24 * 60 * 60 * 1000; // 30 days

function getCached(key: string): FormattedAddress[] | null {
  const entry = addressCache.get(key);
  if (!entry) return null;
  if (Date.now() > entry.expiresAt) {
    addressCache.delete(key);
    return null;
  }
  return entry.addresses;
}

function setCache(key: string, addresses: FormattedAddress[]): void {
  addressCache.set(key, {
    addresses,
    expiresAt: Date.now() + CACHE_TTL_MS,
  });
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function sanitizePostcode(raw: string): string {
  return raw.trim().toUpperCase().replace(/\s+/g, "");
}

function formatAddress(address: RawAddress): FormattedAddress {
  const display =
    address.bestAddressLine1 ??
    `${address.streetNr ?? ""} ${address.streetName ?? ""}`.trim();

  return {
    id: address.id ?? "",
    display,
    streetNr: address.streetNr ?? "",
    streetName: address.streetName ?? "",
    city: address.city ?? "",
    postcode: address.postcode ?? "",
    districtCode: address.districtCode ?? "",
    uprn: address.uprn ?? "",
    exchangeGroupCode: address.exchangeGroupCode ?? "",
    qualifier: address.qualifier ?? "",
  };
}

// ─── Route handler ────────────────────────────────────────────────────────────

export async function POST(request: NextRequest) {
  // ── 1. Parse & validate input ────────────────────────────────────────────
  let postcode: string;

  try {
    const body = await request.json();
    postcode = typeof body?.postcode === "string" ? body.postcode : "";
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid JSON body" },
      { status: 400 }
    );
  }

  postcode = sanitizePostcode(postcode);

  if (!postcode) {
    return NextResponse.json(
      { success: false, message: "Please enter a postcode" },
      { status: 400 }
    );
  }

  console.log(`[BT Address Search] Searching Openreach addresses for: ${postcode}`);

  // ── 2. Check cache ───────────────────────────────────────────────────────
  const cacheKey = `bt_openreach_addresses_${postcode}`;
  const cached = getCached(cacheKey);

  if (cached) {
    console.log(`[BT Address Search] ✅ Returning CACHED addresses: ${cached.length}`);
    return NextResponse.json({
      success: true,
      addresses: cached,
      count: cached.length,
      cached: true,
    });
  }

  // ── 3. Call BT API ───────────────────────────────────────────────────────
  console.log("[BT Address Search] No valid cache, fetching from API…");

  const endpoint =
    "/common/geographicAddressManagement/v1/geographicAddress?" +
    new URLSearchParams({
      postcode,
      addressSource: "Openreach",
    }).toString();

  const apiResponse = await callApi<RawAddress[]>(endpoint, { method: "GET" });

  // ── 4. Handle API errors ─────────────────────────────────────────────────
  if (!apiResponse.success) {
    console.error("[BT Address Search] ❌ API error:", apiResponse.message);
    return NextResponse.json(
      {
        success: false,
        message: `Failed to search addresses: ${apiResponse.message}`,
        cached: false,
      },
      { status: apiResponse.status_code ?? 500 }
    );
  }

  const rawAddresses = apiResponse.data;

  if (!Array.isArray(rawAddresses) || rawAddresses.length === 0) {
    console.error("[BT Address Search] ❌ No valid addresses in response");
    return NextResponse.json(
      { success: false, message: "No addresses found" },
      { status: 404 }
    );
  }

  // ── 5. Format addresses ──────────────────────────────────────────────────
  const formatted: FormattedAddress[] = rawAddresses.map(formatAddress);

  if (formatted.length === 0) {
    console.error("[BT Address Search] ❌ No addresses after formatting");
    return NextResponse.json(
      { success: false, message: "No valid addresses found" },
      { status: 404 }
    );
  }

  // ── 6. Cache & return ────────────────────────────────────────────────────
  console.log(`[BT Address Search] ✅ Caching ${formatted.length} addresses`);
  setCache(cacheKey, formatted);

  return NextResponse.json({
    success: true,
    addresses: formatted,
    count: formatted.length,
    cached: false,
  });
}