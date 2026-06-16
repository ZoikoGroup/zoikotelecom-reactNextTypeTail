/**
 * POST /api/BritishTelecom/process-order
 *
 * Direct port of the payload-building logic from the BT Wholesale
 * WooCommerce Integration plugin (class-bt-order-manager.php and
 * class-bt-api-client.php), so this route produces byte-identical request
 * bodies to the plugin's:
 *
 *   • searchTimeSlot  (class-bt-api-client.php :: get_appointment_slots)
 *   • appointment     (class-bt-api-client.php :: book_appointment)
 *   • productOrder    (class-bt-order-manager.php :: place_bt_order)
 *
 * It reads everything off the cart item the user picked on Broadbandplans.tsx
 * — productOfferingQualificationItem (canonical BT POQ row) + zoikoPlan +
 * zoikoVariation + address — so nothing has to be inferred from strings.
 *
 * Key alignment points with the WP plugin (matters!):
 *   – Repair SLA code is technology-specific: FTTP/FTTC/SOADSL/ADSL → E0000028,
 *     SOGEA → E0000154. (`get_repair_sla_code`)
 *   – Min guaranteed speed = floor(advertisedDownloadSpeed * 0.95), min 1.
 *     (`calculate_minimum_guaranteed_speed`)
 *   – Journey type ATT_X_JOURNEYTYPE values are "NewLineProvide" (no spaces)
 *     for the order body, "New Line Provide" (with spaces) for the
 *     appointment tech mapping. (`determine_journey_type`)
 *   – Contract term is clamped per technology to BT-allowed values.
 *     (`validate_contract_term`)
 *   – AccessTechnology gets mapped for appointment endpoints
 *     (SOGEA → "SOGEA New Line", etc.). (`map_to_bt_access_technology`)
 *   – productSpecification: "BB1" / family "BB1hub" for broadband;
 *     "Ethernet" / family "Ethernet" for ethernet/MPF.
 *   – requestedCompletionDate on the order envelope = appointment_start
 *     (the PHP code logs "+3 days" but actually assigns appointment_start).
 *   – Optional ATT_RT_CLI + ATT_RT_PortingRequired (landline port)
 *     and ATT_RT_IntegratedCopperCease (FTTP migration from copper).
 */

import { NextRequest, NextResponse } from "next/server";
import { callApi } from "../_lib/callApi";
import type {
  Plan,
  BTProductOfferingQualificationItem,
  ProductCharacteristic,
  FormattedAddress,
  ZoikoVariation,
} from "@/app/context/CartContext";

// ─── Request shape ────────────────────────────────────────────────────────────

interface BillingAddress {
  firstName: string;
  lastName: string;
  companyName?: string;
  region?: string;
  state?: string;
  city?: string;
  street?: string;
  houseNumber?: string;
  zip?: string;
  phone: string;
  email: string;
}

/**
 * Optional checkout-time toggles, matching `$checkout_data` in the WP plugin.
 * If the React checkout form doesn't collect these yet, the route still works —
 * they just default to "no landline, new line provide, not migrating".
 */
interface CheckoutExtras {
  has_landline?: "yes" | "no";
  landline_number?: string;
  stop_existing_service?: "stop" | "remain";
  delivery_contact_first_name?: string;
  delivery_contact_last_name?: string;
  delivery_contact_email?: string;
  delivery_contact_phone?: string;
}

interface OrderRequestBody {
  billingAddress: BillingAddress;
  shippingAddress: BillingAddress;
  coupon: { type: string; discount: string | number } | null;
  cart: Plan[];
  totals: { subtotal: number; discount: number; total: number };
  agreedToTerms: boolean;
  paymentMethod: string;
  createdAt: string;
  /** Optional explicit override. If absent, uses cart[0].address. */
  serviceAddress?: FormattedAddress;
  /** Optional checkout-time toggles for porting / migration / delivery contact. */
  checkoutExtras?: CheckoutExtras;
}

// ─── Helpers — read fields off the cart item ──────────────────────────────────

function generateOrderId(): string {
  return String(Math.floor(Math.random() * 99999) + 1);
}

function readChar(
  chars: ProductCharacteristic[] | undefined,
  name: string
): string {
  if (!chars?.length) return "";
  const wanted = name.toLowerCase();
  const hit = chars.find((c) => (c?.name ?? "").toLowerCase() === wanted);
  return (hit?.value ?? "").trim();
}

/**
 * Read the raw AccessTechnology value from the cart's POQ row. BT returns
 * one of: "FTTP", "SOGEA", "FTTC", "SOADSL", "ADSL", …
 */
function getRawAccessTechnology(
  poq: BTProductOfferingQualificationItem
): string {
  const raw =
    readChar(poq.product.productCharacteristic, "AccessTechnology") || "FTTP";
  return raw.toUpperCase();
}

// ─── Plugin port: determine_journey_type() ────────────────────────────────────

/**
 * Port of `determine_journey_type()` in class-bt-order-manager.php.
 *
 * Returns the value used both in:
 *   • the order body's ATT_X_JOURNEYTYPE characteristic
 *     (where the plugin emits "NewLineProvide" / "Migration"), and
 *   • indirectly in the appointment AccessTechnology mapping
 *     (where the plugin also passes "New Line Provide" with spaces).
 *
 * We return both spellings to avoid ambiguity downstream.
 */
function determineJourneyType(
  extras: CheckoutExtras,
  rawTech: string
): { order: "NewLineProvide" | "Migration"; appointment: string } {
  const hasLandline = extras.has_landline === "yes";
  const stopExisting = extras.stop_existing_service === "stop";

  if (
    hasLandline &&
    extras.landline_number &&
    ["SOGEA", "FTTC", "SOADSL"].includes(rawTech)
  ) {
    return { order: "Migration", appointment: "Migration" };
  }
  if (stopExisting) {
    return { order: "Migration", appointment: "Migration" };
  }
  return { order: "NewLineProvide", appointment: "New Line Provide" };
}

// ─── Plugin port: map_to_bt_access_technology() ───────────────────────────────

/**
 * Port of `map_to_bt_access_technology()` in class-bt-api-client.php.
 *
 * Translates the raw AccessTechnology from the POQ row into the value BT
 * expects on the appointment endpoints. The "New Line / Existing Line"
 * suffix depends on the journey type.
 */
function mapToBtAccessTechnology(
  rawTech: string,
  appointmentJourney: string
): string {
  const tech = rawTech.toUpperCase().trim();
  const isNewLine =
    /new/i.test(appointmentJourney) || /provide/i.test(appointmentJourney);

  const exact: Record<string, string> = {
    FTTP: "FTTP",
    SOGEA: isNewLine ? "SOGEA New Line" : "SOGEA Existing Line",
    "SOGEA GFAST": isNewLine ? "SOGEA GFAST New Line" : "SOGEA GFAST Existing Line",
    SOGEA_GFAST: isNewLine ? "SOGEA GFAST New Line" : "SOGEA GFAST Existing Line",
    FTTC: "FTTC",
    "FTTC GFAST": "FTTC GFAST",
    FTTC_GFAST: "FTTC GFAST",
    "FTTC SIM2": "FTTC Sim2",
    FTTC_SIM2: "FTTC Sim2",
    "FTTC GFAST SIM2": "FTTC GFAST Sim2",
    SOADSL: "SOADSL",
    ADSL: "ADSL",
    "FTTP SHIFT ONT": "FTTP Shift ONT",
    FTTP_SHIFT_ONT: "FTTP Shift ONT",
    MPF: "Generic Ethernet Access",
    "GENERIC ETHERNET ACCESS": "Generic Ethernet Access",
    "GEA-FTTP": "Generic Ethernet Access - FTTP",
  };

  if (exact[tech]) return exact[tech];

  if (tech.includes("SOGEA")) {
    if (tech.includes("GFAST")) {
      return isNewLine ? "SOGEA GFAST New Line" : "SOGEA GFAST Existing Line";
    }
    return isNewLine ? "SOGEA New Line" : "SOGEA Existing Line";
  }
  if (tech.includes("FTTC")) {
    if (tech.includes("GFAST")) return "FTTC GFAST";
    if (tech.includes("SIM2")) return "FTTC Sim2";
    return "FTTC";
  }
  return isNewLine ? "FTTP" : "SOGEA Existing Line";
}

// ─── Plugin port: get_product_specification_for_appointment() ─────────────────

function getProductSpecForAppointment(
  appointmentTech: string
): { id: string; family: string; referredType: string } {
  if (
    /generic ethernet/i.test(appointmentTech) ||
    /\bmpf\b/i.test(appointmentTech)
  ) {
    return {
      id: "Ethernet",
      family: "Ethernet",
      referredType: "btProductOfferingFamily",
    };
  }
  return {
    id: "BB1",
    family: "BB1hub",
    referredType: "btProductOfferingFamily",
  };
}

// ─── Plugin port: validate_contract_term() ────────────────────────────────────

/**
 * BT-allowed contract terms per technology (from plugin `validate_contract_term`).
 * If the user picks something outside this list, we clamp to the closest valid
 * value — same behaviour as the plugin (which logs a warning and proceeds).
 *
 * IMPORTANT: These are BT's hard rules. Zoiko's variations (12/18/24 months)
 * are MARKETING terms — what BT actually accepts in the order body is much
 * narrower:
 *   FTTP   → 12 months
 *   SOGEA  → 1  month
 *   FTTC   → 1  month
 *   SOADSL → 3  months
 *   ADSL   → 1  month
 */
const BT_ALLOWED_CONTRACT_MONTHS: Record<string, number[]> = {
  FTTP: [12],
  SOGEA: [1],
  FTTC: [1],
  SOADSL: [3],
  ADSL: [1],
};

function parseContractTerm(
  variation: ZoikoVariation | null,
  fallbackValidity: string
): number {
  if (variation?.duration_value && variation.duration_value > 0) {
    return variation.duration_value;
  }
  const m = fallbackValidity.match(/(\d+)\s*(day|month|year)?s?/i);
  if (m) return parseInt(m[1], 10);
  return 12;
}

function validateContractTerm(
  variation: ZoikoVariation | null,
  fallbackValidity: string,
  rawTech: string
): { value: number; unit: "Month" } {
  const parsed = parseContractTerm(variation, fallbackValidity);
  const allowed =
    BT_ALLOWED_CONTRACT_MONTHS[rawTech] ?? [12];

  if (allowed.includes(parsed)) {
    return { value: parsed, unit: "Month" };
  }

  // Clamp to the closest allowed value (same algorithm as the plugin).
  let closest = allowed[0];
  let minDiff = Math.abs(parsed - closest);
  for (const a of allowed) {
    const diff = Math.abs(parsed - a);
    if (diff < minDiff) {
      minDiff = diff;
      closest = a;
    }
  }
  console.warn(
    `[BT processOrder] ⚠️ Contract term ${parsed} not allowed for ${rawTech}, clamping to ${closest}`
  );
  return { value: closest, unit: "Month" };
}

// ─── Plugin port: calculate_minimum_guaranteed_speed() ────────────────────────

/**
 * Plugin: `floor($speed * 0.95)`, with `max(1, …)`. We prefer the explicit
 * `productMinimumGuaranteedSpeed` from the POQ row if BT supplied one;
 * otherwise compute from the advertised download.
 */
function resolveMinGuaranteedSpeed(
  poq: BTProductOfferingQualificationItem
): string {
  const chars = poq.product.productCharacteristic;

  const fromChar = readChar(chars, "productMinimumGuaranteedSpeed");
  if (fromChar) {
    const n = parseFloat(fromChar);
    if (!isNaN(n) && n > 0) return String(Math.max(1, Math.floor(n)));
  }

  const adv = parseFloat(readChar(chars, "productAdvertisedDownloadSpeed"));
  if (!adv || isNaN(adv)) return "1";
  return String(Math.max(1, Math.floor(adv * 0.95)));
}

// ─── Plugin port: extract_district_code() ─────────────────────────────────────

function resolveDistrictCode(
  address: FormattedAddress,
  poq: BTProductOfferingQualificationItem
): string {
  if (address.districtCode) return address.districtCode;
  const placeWithDistrict = poq.product.place?.find((p) => p.districtId);
  if (placeWithDistrict?.districtId) return placeWithDistrict.districtId;

  // Derive from postcode: leading letters before the first digit.
  if (address.postcode) {
    const m = address.postcode.toUpperCase().match(/^([A-Z]{1,2})\d/);
    if (m) return m[1];
  }
  return "NS";
}

// ─── Plugin port: get_repair_sla_code() ───────────────────────────────────────

/**
 * Per the plugin (NOT what I had previously):
 *   FTTP    → E0000028 (Standard Care)
 *   SOGEA   → E0000154 (Basic Care)
 *   FTTC    → E0000028
 *   SOADSL  → E0000028
 *   ADSL    → E0000028
 */
function getRepairSlaCode(rawTech: string): string {
  switch (rawTech.toUpperCase()) {
    case "SOGEA":
      return "E0000154";
    case "FTTP":
    case "FTTC":
    case "SOADSL":
    case "ADSL":
    default:
      return "E0000028";
  }
}

// ─── Plugin port: build_managed_install_item() ────────────────────────────────

function buildManagedInstallItem(
  rawTech: string,
  installType: string,
  baseId: string
): Record<string, unknown> {
  const productCharacteristic: ProductCharacteristic[] = [];
  const tech = rawTech.toUpperCase();

  if (tech === "FTTP") {
    productCharacteristic.push(
      { name: "ATT_RT_ECCChargeband", value: "0" },
      { name: "ATT_RT_FTTPInstallType", value: "1 Stage" },
      { name: "ATT_RT_SiteVisitReason", value: installType }
    );
  } else if (["SOGEA", "SOADSL", "FTTC"].includes(tech)) {
    productCharacteristic.push(
      { name: "ATT_RT_TRChargeBand", value: "0" },
      { name: "ATT_RT_UpperCostBand", value: "Standard" },
      { name: "ATT_RT_SiteVisitReason", value: installType }
    );
  } else {
    productCharacteristic.push({
      name: "ATT_RT_SiteVisitReason",
      value: installType,
    });
  }

  return {
    "@type": "BTProductOrderItem",
    id: `${baseId}.3`,
    action: "add",
    product: {
      "@type": "BTProductRefOrValue",
      productOffering: { id: "E0000153" }, // Managed Install
      productCharacteristic,
    },
  };
}

// ─── Plugin port: build_product_characteristics_v2() ──────────────────────────

/**
 * Builds the productCharacteristic array on the MAIN product order item.
 *
 * Order of characteristics matches the plugin exactly:
 *   ATT_RT_AccessTechnology, ATT_RT_InstallType, ATT_RT_EndUserType,
 *   ATT_RT_TrafficWeighting, ATT_RT_ContractTerm, ATT_RT_ContractTermUnit,
 *   ATT_RT_ResellerID, ATT_X_JOURNEYTYPE, [tech-specific],
 *   [optional landline porting], ATT_RT_ProductMinimumGuaranteedSpeed
 */
function buildMainProductCharacteristics(args: {
  rawTech: string;
  contract: { value: number; unit: "Month" };
  resellerId: string;
  journeyOrder: "NewLineProvide" | "Migration";
  extras: CheckoutExtras;
  minGuaranteedSpeed: string;
}): ProductCharacteristic[] {
  const {
    rawTech,
    contract,
    resellerId,
    journeyOrder,
    extras,
    minGuaranteedSpeed,
  } = args;

  if (!resellerId || resellerId === "ABC") {
    console.warn(
      "[BT processOrder] ⚠️ Using placeholder Reseller ID. Set BT_RESELLER_ID env."
    );
  }

  const chars: ProductCharacteristic[] = [
    { name: "ATT_RT_AccessTechnology", value: rawTech },
    { name: "ATT_RT_InstallType", value: "M" },
    { name: "ATT_RT_EndUserType", value: "Residential" },
    { name: "ATT_RT_TrafficWeighting", value: "Standard" },
    { name: "ATT_RT_ContractTerm", value: String(contract.value) },
    { name: "ATT_RT_ContractTermUnit", value: contract.unit },
    { name: "ATT_RT_ResellerID", value: resellerId },
    { name: "ATT_X_JOURNEYTYPE", value: journeyOrder },
  ];

  // Technology-specific
  if (rawTech === "FTTP") {
    chars.push({ name: "ATT_RT_ONTType", value: "New ONT" });

    // Migrating from copper? (plugin: is_migrating_from_copper)
    const migrating =
      extras.stop_existing_service === "stop" ||
      (extras.has_landline === "yes" && !!extras.landline_number);
    if (migrating) {
      chars.push({ name: "ATT_RT_IntegratedCopperCease", value: "Y" });
    }
  }

  // Optional landline porting (plugin: has_landline=yes branch)
  if (extras.has_landline === "yes" && extras.landline_number) {
    chars.push(
      { name: "ATT_RT_CLI", value: extras.landline_number },
      { name: "ATT_RT_PortingRequired", value: "Y" }
    );
  }

  chars.push({
    name: "ATT_RT_ProductMinimumGuaranteedSpeed",
    value: minGuaranteedSpeed,
  });

  return chars;
}

// ─── Plugin port: get_robt_address_for_place() ────────────────────────────────

/**
 * Direct port of `get_robt_address_for_place` — hits RoBT via
 * /common/geographicAddressManagement/v1/geographicAddress?addressSource=ROBT
 * and tries five matching strategies in order.
 */
async function resolveRobtAddressId(
  address: FormattedAddress
): Promise<string> {
  if (!address.postcode) return address.id;

  type RobtAddress = {
    id?: string;
    streetNr?: string;
    streetName?: string;
    postcode?: string;
    uprn?: string;
    alternateIds?: { type?: string; id?: string }[];
  };

  const endpoint =
    `/common/geographicAddressManagement/v1/geographicAddress` +
    `?postcode=${encodeURIComponent(address.postcode)}&addressSource=ROBT`;

  const res = await callApi<RobtAddress[]>(endpoint, { method: "GET" });
  if (!res.success) return address.id;

  const list = Array.isArray(res.data) ? res.data : [];
  if (!list.length) return address.id;

  const normPostcode = (s: string) =>
    s.replace(/\s+/g, "").toUpperCase();
  const eqPostcode = (a: string, b: string) =>
    normPostcode(a) === normPostcode(b);

  // Strategy 1: exact streetNr + streetName + postcode
  if (address.streetNr && address.streetName) {
    const hit = list.find(
      (r) =>
        (r.streetNr ?? "").trim() === address.streetNr.trim() &&
        (r.streetName ?? "").trim().toLowerCase() ===
          address.streetName.trim().toLowerCase() &&
        eqPostcode(r.postcode ?? "", address.postcode)
    );
    if (hit?.id) return hit.id;
  }

  // Strategy 2: UPRN
  if (address.uprn) {
    const hit = list.find((r) => r.uprn === address.uprn);
    if (hit?.id) return hit.id;
  }

  // Strategy 3: alternateIds OpenreachAddressId correlation
  for (const r of list) {
    if (!r.alternateIds?.length) continue;
    const match = r.alternateIds.find(
      (alt) => alt.type === "OpenreachAddressId" && alt.id === address.id
    );
    if (match && r.id) return r.id;
  }

  // Strategy 4: partial — streetNr + postcode
  if (address.streetNr) {
    const hit = list.find(
      (r) =>
        (r.streetNr ?? "").trim() === address.streetNr.trim() &&
        eqPostcode(r.postcode ?? "", address.postcode)
    );
    if (hit?.id) return hit.id;
  }

  // Strategy 5: first entry
  return list[0]?.id ?? address.id;
}

// ─── Plugin port: get_appointment_slots() / book_appointment() ────────────────

function buildSearchTimeSlotPayload(params: {
  addressId: string;
  appointmentTech: string;
  productSpec: { id: string };
  startDate: string;
  appointmentType?: string;
  siteVisitReason?: string;
}) {
  const {
    addressId,
    appointmentTech,
    productSpec,
    startDate,
    appointmentType = "Standard",
    siteVisitReason = "Standard",
  } = params;

  return {
    relatedEntity: [
      {
        appointmentType,
        siteVisitReason,
        product: {
          productSpecification: { id: productSpec.id },
          characteristic: [
            { name: "AccessTechnology", value: appointmentTech },
          ],
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
    requestedTimeSlot: [{ validFor: { startDateTime: startDate } }],
  };
}

function buildBookAppointmentPayload(params: {
  addressId: string;
  appointmentTech: string;
  productSpec: { id: string };
  startTime: string;
  endTime: string;
  appointmentType?: string;
  siteVisitReason?: string;
}) {
  const {
    addressId,
    appointmentTech,
    productSpec,
    startTime,
    endTime,
    appointmentType = "Standard",
    siteVisitReason = "Standard",
  } = params;

  return {
    relatedEntity: [
      {
        appointmentType,
        siteVisitReason,
        product: {
          productSpecification: { id: productSpec.id },
          characteristic: [
            { name: "AccessTechnology", value: appointmentTech },
          ],
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
      endDateTime: endTime,
    },
  };
}

interface SlotSearchResponse {
  availableTimeSlot?: Array<{
    id?: string;
    validFor?: { startDateTime?: string; endDateTime?: string };
  }>;
}

async function searchAppointmentSlots(params: {
  addressId: string;
  appointmentTech: string;
  productSpec: { id: string; family: string };
  startDate: string;
}): Promise<{ start: string; end: string; id?: string } | null> {
  const body = buildSearchTimeSlotPayload(params);
  console.log(
    "[BT processOrder] searchTimeSlot payload:",
    JSON.stringify(body, null, 2)
  );

  const response = await callApi<SlotSearchResponse>(
    "/common/appointmentManagement/v4/searchTimeSlot",
    {
      method: "POST",
      body,
      headers: { productFamily: params.productSpec.family },
    }
  );

  if (!response.success) {
    console.error("[BT processOrder] ❌ Slot search failed:", response.message);
    return null;
  }

  const slots = response.data?.availableTimeSlot ?? [];
  if (!slots.length) return null;

  const first = slots[0];
  return {
    id: first.id,
    start: first.validFor?.startDateTime ?? params.startDate,
    end: first.validFor?.endDateTime ?? params.startDate,
  };
}

interface BookedAppointment {
  id: string;
  start: string;
  end: string;
}

async function bookAppointment(params: {
  addressId: string;
  appointmentTech: string;
  productSpec: { id: string; family: string };
  startTime: string;
  endTime: string;
}): Promise<BookedAppointment | null> {
  const body = buildBookAppointmentPayload(params);
  console.log(
    "[BT processOrder] bookAppointment payload:",
    JSON.stringify(body, null, 2)
  );

  const response = await callApi<{
    id?: string;
    BESAppointmentId?: string;
    validFor?: { startDateTime?: string; endDateTime?: string };
    status?: string;
  }>("/common/appointmentManagement/v4/appointment", {
    method: "POST",
    body,
    headers: { productFamily: params.productSpec.family },
  });

  if (!response.success) {
    console.error(
      "[BT processOrder] ❌ Appointment booking failed:",
      response.message
    );
    return null;
  }

  return {
    id:
      response.data?.id ??
      response.data?.BESAppointmentId ??
      `APPT-${Date.now()}`,
    start: response.data?.validFor?.startDateTime ?? params.startTime,
    end: response.data?.validFor?.endDateTime ?? params.endTime,
  };
}

// ─── Plugin port: place_bt_order() ────────────────────────────────────────────

function buildOrderPayload(params: {
  orderId: string;
  externalId: string;
  cart: Plan;
  robtAddressId: string;
  openreachAddressId: string;
  districtCode: string;
  billingAddress: BillingAddress;
  extras: CheckoutExtras;
  appointmentId: string;
  appointmentStart: string;
  rawTech: string;
  btProductCode: string; // E0000xxx — the main product offering id
  contract: { value: number; unit: "Month" };
  btAccount: string;
  btCug: string;
  resellerId: string;
  minGuaranteedSpeed: string;
  installType: string; // "Standard" | "Premium" | "Advanced"
  journeyOrder: "NewLineProvide" | "Migration";
}) {
  const {
    orderId,
    externalId,
    robtAddressId,
    openreachAddressId,
    districtCode,
    billingAddress,
    extras,
    appointmentId,
    appointmentStart,
    rawTech,
    btProductCode,
    contract,
    btAccount,
    btCug,
    resellerId,
    minGuaranteedSpeed,
    installType,
    journeyOrder,
  } = params;

  const { firstName, lastName, email, phone, companyName } = billingAddress;

  // Main product characteristics (matches plugin's build_product_characteristics_v2)
  const productCharacteristic = buildMainProductCharacteristics({
    rawTech,
    contract,
    resellerId,
    journeyOrder,
    extras,
    minGuaranteedSpeed,
  });

  // Sub-items (Repair SLA + IP + Managed Install) — matches sub_items in plugin
  const subItems: Record<string, unknown>[] = [
    {
      "@type": "BTProductOrderItem",
      id: `${orderId}.1`,
      action: "add",
      product: {
        "@type": "BTProductRefOrValue",
        productOffering: { id: getRepairSlaCode(rawTech) },
      },
    },
    {
      "@type": "BTProductOrderItem",
      id: `${orderId}.2`,
      action: "add",
      product: {
        "@type": "BTProductRefOrValue",
        productOffering: { id: "E0000703" }, // IP address
      },
    },
    buildManagedInstallItem(rawTech, installType, orderId),
  ];

  // Primary site contact
  const primaryRelatedParty = {
    "@type": "BTRelatedParty",
    "@baseType": "RelatedParty",
    "@referredType": "Individual",
    id: "-1",
    role: "PrimarySiteContact",
    givenName: firstName,
    familyName: lastName,
    contactMedium: [
      {
        mediumType: "email",
        characteristic: {
          contactType: "Primary Work",
          emailAddress: email,
        },
      },
      {
        mediumType: "telephone",
        characteristic: {
          contactType: "Primary Work",
          phoneNumber: phone,
        },
      },
    ],
  };

  // Optional delivery contact (plugin: if checkout_data has delivery_contact_*)
  const deliveryContactMedium: Record<string, unknown>[] = [];
  if (extras.delivery_contact_email) {
    deliveryContactMedium.push({
      mediumType: "email",
      characteristic: {
        contactType: "Primary Work",
        emailAddress: extras.delivery_contact_email,
      },
    });
  }
  if (extras.delivery_contact_phone) {
    deliveryContactMedium.push({
      mediumType: "telephone",
      characteristic: {
        contactType: "Primary Work",
        phoneNumber: extras.delivery_contact_phone,
      },
    });
  }
  const deliveryRelatedParty =
    deliveryContactMedium.length > 0
      ? {
          "@type": "BTRelatedParty",
          "@baseType": "RelatedParty",
          "@referredType": "Individual",
          id: "-1",
          role: "DeliveryContact",
          givenName: extras.delivery_contact_first_name ?? "Delivery",
          familyName: extras.delivery_contact_last_name ?? "Contact",
          contactMedium: deliveryContactMedium,
        }
      : null;

  const relatedParty = deliveryRelatedParty
    ? [primaryRelatedParty, deliveryRelatedParty]
    : [primaryRelatedParty];

  // Main item
  const mainItem = {
    "@type": "BTProductOrderItem",
    "@baseType": "ProductOrderItem",
    id: orderId,
    action: "add",
    billingAccount: { id: btAccount },
    product: {
      "@type": "BTProductRefOrValue",
      "@baseType": "Product",
      productOffering: { id: btProductCode },
      place: [
        {
          "@type": "btRelatedPlaceRefOrValue",
          id: robtAddressId,
          role: "SiteAddress",
        },
        {
          "@type": "btRelatedPlaceRefOrValue",
          id: openreachAddressId,
          role: "OpenreachAddress",
          address: { districtCode },
        },
      ],
      productCharacteristic,
      relatedParty,
    },
    appointment: {
      "@type": "AppointmentRef",
      id: appointmentId,
      BESAppointmentId: appointmentId,
      appointmentStart,
    },
    additionalNotes: [
      {
        text: "Engineering instruction",
        type: "Engineering",
        "@type": "BTNote",
      },
      {
        text: "PT Hazards Note",
        type: "HazardNote",
        "@type": "BTNote",
      },
    ],
    productOrderItem: subItems,
  };

  // EndCustomer name — plugin uses billing_company if set, else full name
  const endCustomerName =
    (companyName && companyName.trim()) ||
    `${firstName} ${lastName}`.trim();

  return {
    "@type": "BTProductOrder",
    "@baseType": "ProductOrder",
    externalId,
    requestedCompletionDate: appointmentStart, // plugin uses appointment_start
    productOrderItem: [mainItem],
    relatedParty: [
      {
        "@type": "BTRelatedParty",
        "@baseType": "RelatedParty",
        "@referredType": "Customer",
        id: btCug,
        role: "BtCug",
        name: "BT CUG",
      },
      {
        "@type": "BTRelatedParty",
        "@baseType": "RelatedParty",
        "@referredType": "Customer",
        id: endCustomerName,
        role: "EndCustomer",
      },
      {
        "@type": "BTRelatedParty",
        "@baseType": "RelatedParty",
        "@referredType": "Individual",
        id: "primary_order_contact",
        role: "PrimaryOrderContact",
        givenName: firstName,
        familyName: lastName,
        contactMedium: [
          {
            mediumType: "email",
            characteristic: {
              contactType: "Primary Work",
              emailAddress: email,
            },
          },
          {
            mediumType: "telephone",
            characteristic: {
              contactType: "Primary Work",
              phoneNumber: phone,
            },
          },
        ],
      },
    ],
  };
}

// ─── Resolve the BT product code (E0000xxx) ───────────────────────────────────

function resolveBtProductCode(cart: Plan): string {
  // Order of preference:
  //   1. Plan.bt_plan_id            (variation.effective_bt_plan_id, e.g. "E0000429")
  //   2. variation.effective_bt_plan_id
  //   3. zoikoPlan.bt_plan_id
  //   4. POQ.product.productOffering.id  (legacy fallback, e.g. "SOGEA 40_10M")
  return (
    cart.bt_plan_id ??
    cart.zoikoVariation?.effective_bt_plan_id ??
    cart.zoikoPlan?.bt_plan_id ??
    cart.productOfferingQualificationItem.product.productOffering.id
  );
}

// ─── Route handler ────────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  let body: OrderRequestBody;

  try {
    body = (await req.json()) as OrderRequestBody;
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid JSON body" },
      { status: 400 }
    );
  }

  const { billingAddress, cart, serviceAddress } = body;
  const extras: CheckoutExtras = body.checkoutExtras ?? {};

  // ── Validate ─────────────────────────────────────────────────────────────
  if (!billingAddress?.email || !billingAddress?.firstName) {
    return NextResponse.json(
      {
        success: false,
        message: "billingAddress with firstName and email is required",
      },
      { status: 400 }
    );
  }

  if (!cart?.length) {
    return NextResponse.json(
      { success: false, message: "cart must contain at least one item" },
      { status: 400 }
    );
  }

  const cartItem = cart[0];
  const address: FormattedAddress | null =
    serviceAddress ?? cartItem.address ?? null;

  if (!address?.id) {
    return NextResponse.json(
      {
        success: false,
        message:
          "Service address with a valid Openreach id is required. " +
          "Make sure the address from the plan-selection step is stored " +
          "on the cart item.",
      },
      { status: 400 }
    );
  }

  if (!cartItem.productOfferingQualificationItem) {
    return NextResponse.json(
      {
        success: false,
        message:
          "Cart item is missing productOfferingQualificationItem. " +
          "Re-select the plan on /fibre-packages so the cart is rebuilt " +
          "with the BT POQ row.",
      },
      { status: 400 }
    );
  }

  cartItem.address = address;

  // ── Resolve everything from the cart item ────────────────────────────────
  const poq = cartItem.productOfferingQualificationItem;
  const rawTech = getRawAccessTechnology(poq);

  const journey = determineJourneyType(extras, rawTech);
  const appointmentTech = mapToBtAccessTechnology(rawTech, journey.appointment);
  const productSpec = getProductSpecForAppointment(appointmentTech);

  const contract = validateContractTerm(
    cartItem.zoikoVariation ?? null,
    cartItem.validity ?? "",
    rawTech
  );
  const minGuaranteedSpeed = resolveMinGuaranteedSpeed(poq);
  const districtCode = resolveDistrictCode(address, poq);
  const btProductCode = resolveBtProductCode(cartItem);

  // Install type — plugin defaults to "Standard" when no order meta exists
  const installType = "Standard";

  // ── Env config ───────────────────────────────────────────────────────────
  const btAccount = process.env.BT_ACCOUNT_ID ?? "";
  const btCug = process.env.BT_CUG ?? "CUG5025628076";
  const resellerId = process.env.BT_RESELLER_ID ?? "ABC";
  const isSandbox =
    process.env.NEXT_BT_ENDPOINT_URI?.includes("sandbox") ?? false;

  if (!btAccount) {
    return NextResponse.json(
      {
        success: false,
        message: "BT_ACCOUNT_ID env var is not set — cannot place order.",
      },
      { status: 500 }
    );
  }

  const orderId = generateOrderId();
  const externalId = `WC-${Date.now()}-${orderId}`;
  const startDate = new Date().toISOString();

  console.log("[BT processOrder] ========== START ==========");
  console.log("[BT processOrder] btProductCode    :", btProductCode);
  console.log("[BT processOrder] POQ offering.id  :", poq.product.productOffering.id);
  console.log("[BT processOrder] Openreach NAD id :", address.id);
  console.log("[BT processOrder] Postcode         :", address.postcode);
  console.log("[BT processOrder] Raw tech         :", rawTech);
  console.log("[BT processOrder] Appointment tech :", appointmentTech);
  console.log("[BT processOrder] Journey (order)  :", journey.order);
  console.log("[BT processOrder] Contract         :", contract.value, contract.unit);
  console.log("[BT processOrder] District code    :", districtCode);
  console.log("[BT processOrder] Min guaranteed   :", minGuaranteedSpeed);
  console.log("[BT processOrder] Repair SLA       :", getRepairSlaCode(rawTech));
  console.log("[BT processOrder] Sandbox          :", isSandbox);

  // ── Step A: RoBT site address ────────────────────────────────────────────
  console.log("[BT processOrder] Step A: resolving RoBT site address…");
  const robtAddressId = isSandbox
    ? address.id
    : await resolveRobtAddressId(address);
  console.log("[BT processOrder] ✅ RoBT site address:", robtAddressId);
  if (robtAddressId === address.id) {
    console.warn(
      "[BT processOrder] ⚠️ RoBT lookup returned the Openreach id (fallback). Order may be rejected by BT."
    );
  }

  // ── Step 5.1 / 5.2: Appointment ──────────────────────────────────────────
  let appointmentId = "";
  let appointmentStart = "";
  let appointmentEnd = "";

  if (isSandbox) {
    console.log("[BT processOrder] 🟡 SANDBOX — mocking appointment");
    const installDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
    appointmentId = `SANDBOX-APPT-${Date.now()}`;
    appointmentStart = installDate.toISOString();
    appointmentEnd = new Date(
      installDate.getTime() + 5 * 60 * 60 * 1000
    ).toISOString();
  } else {
    console.log("[BT processOrder] Step 5.1: searchTimeSlot…");
    const slot = await searchAppointmentSlots({
      addressId: address.id,
      appointmentTech,
      productSpec,
      startDate,
    });

    if (!slot) {
      return NextResponse.json(
        {
          success: false,
          message:
            "No appointment slots available for the selected address and technology.",
        },
        { status: 422 }
      );
    }
    console.log("[BT processOrder] ✅ Slot:", slot.start);

    console.log("[BT processOrder] Step 5.2: bookAppointment…");
    const booked = await bookAppointment({
      addressId: address.id,
      appointmentTech,
      productSpec,
      startTime: slot.start,
      endTime: slot.end,
    });

    if (!booked) {
      return NextResponse.json(
        { success: false, message: "Failed to book installation appointment." },
        { status: 422 }
      );
    }

    appointmentId = booked.id;
    appointmentStart = booked.start;
    appointmentEnd = booked.end;
    console.log("[BT processOrder] ✅ Appointment:", appointmentId);
  }

  // ── Step 6: Place product order ──────────────────────────────────────────
  console.log("[BT processOrder] Step 6: productOrder…");

  const orderPayload = buildOrderPayload({
    orderId,
    externalId,
    cart: cartItem,
    robtAddressId,
    openreachAddressId: address.id,
    districtCode,
    billingAddress,
    extras,
    appointmentId,
    appointmentStart,
    rawTech,
    btProductCode,
    contract,
    btAccount,
    btCug,
    resellerId,
    minGuaranteedSpeed,
    installType,
    journeyOrder: journey.order,
  });

  console.log(
    "[BT processOrder] productOrder payload:",
    JSON.stringify(orderPayload, null, 2)
  );

  const orderResponse = await callApi<Record<string, unknown>>(
    "/hubco/tmf/productOrderingManagement/v4/productOrder",
    {
      method: "POST",
      body: orderPayload,
      headers: {
        productFamily: productSpec.family,
        "apigw-client-id": process.env.BT_APIGW_CLIENT_ID ?? "",
      },
    }
  );

  if (!orderResponse.success) {
    console.error(
      "[BT processOrder] ❌ Order submission failed:",
      orderResponse.message
    );
    return NextResponse.json(
      {
        success: false,
        message: orderResponse.message ?? "BT order submission failed",
        error: (orderResponse as { body?: unknown }).body,
      },
      { status: orderResponse.status_code ?? 500 }
    );
  }

  const statusCode = orderResponse.status_code;
  const data = orderResponse.data;

  console.log("[BT processOrder] ✅ Order submitted. Status:", statusCode);
  console.log("[BT processOrder] ========== END ==========");

  if (statusCode === 201 || statusCode === 202) {
    const btOrderId =
      statusCode === 201
        ? (data?.id as string | undefined) ?? externalId
        : `PENDING-${externalId}`;

    return NextResponse.json({
      success: true,
      status: statusCode === 201 ? "created" : "pending",
      btOrderId,
      externalId,
      appointmentId,
      appointmentStart,
      appointmentEnd,
      data,
    });
  }

  return NextResponse.json({
    success: true,
    status: "unknown",
    btOrderId: externalId,
    externalId,
    appointmentId,
    appointmentStart,
    appointmentEnd,
    data,
  });
}