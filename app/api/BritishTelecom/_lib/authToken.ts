/**
 * BT API Auth Token Manager
 * Equivalent to generate_token_programmatically() in WordPress plugin
 *
 * Handles OAuth2 client_credentials flow and caches the token
 * in memory (+ optionally a persistent store like Redis/DB).
 */

interface TokenStore {
  name: string;
  access_token: string;
  token_type: string;
  expires_in: number;
  expires_at: string; // ISO string
  created_at: string;
  updated_at: string;
}

/**
 * BT's token endpoint response keys differ between environments:
 *
 *   - "Complete Documentation" (2024-12) shows camelCase:
 *       { accessToken, tokenType, expiresIn }
 *   - "Final Handover Documentation" shows snake_case:
 *       { access_token, token_type, expires_in }
 *
 * The WordPress plugin reads `accessToken` for sandbox and `access_token`
 * for production via a separate token-manager module, so both shapes
 * are known to occur in practice. We accept whichever is present.
 */
interface TokenResponse {
  accessToken?: string;
  access_token?: string;
  tokenType?: string;
  token_type?: string;
  expiresIn?: number;
  expires_in?: number;
}

// ─── In-process cache (survives across requests in the same Node process) ───
let _cachedToken: TokenStore | null = null;

/**
 * Returns true when the stored token still has >60 s of life left.
 */
function isTokenValid(store: TokenStore): boolean {
  if (!store.expires_at) return false;
  const expiresAt = new Date(store.expires_at).getTime();
  const nowPlusBuffer = Date.now() + 60_000; // 60-second safety margin
  return expiresAt > nowPlusBuffer;
}

/**
 * Fetch a fresh token from the BT Auth URL using the
 * client_credentials grant and persist it in the in-memory cache.
 *
 * Required env vars:
 *   BT_CLIENT_ID
 *   BT_CLIENT_SECRET
 *   BT_AUTH_URL
 */
async function generateToken(name = "BritishTelecom"): Promise<string> {
  const clientId = process.env.NEXT_BT_CLIENT_ID;
  const clientSecret = process.env.NEXT_BT_CLIENT_SECRET;
  const authUrl = process.env.NEXT_BT_ENDPOINT_URI+'/oauth/accesstoken';

  if (!clientId || !clientSecret || !authUrl) {
    throw new Error(
      "BT API credentials are not configured. " +
        "Please set BT_CLIENT_ID, BT_CLIENT_SECRET, and BT_AUTH_URL env vars."
    );
  }

  // Basic Auth header  (base64 of "clientId:clientSecret")
  const authString = Buffer.from(`${clientId}:${clientSecret}`).toString(
    "base64"
  );

  const response = await fetch(authUrl, {
    method: "POST",
    headers: {
      Authorization: `Basic ${authString}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({ grant_type: "client_credentials" }).toString(),
    // Next.js: opt-out of the fetch cache so we always get a fresh token
    cache: "no-store",
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(
      `BT Auth request failed [${response.status}]: ${body}`
    );
  }

  const data: TokenResponse = await response.json();

  // Accept both camelCase (current BT doc) and snake_case (legacy/handover doc).
  const accessToken = data.accessToken  ?? data.access_token;
  const tokenType   = data.tokenType    ?? data.token_type   ?? "Bearer";
  const expiresIn   = data.expiresIn    ?? data.expires_in   ?? 0;

  if (!accessToken) {
    throw new Error(
      `BT Auth returned an invalid response (no access token under either ` +
      `'accessToken' or 'access_token'): ${JSON.stringify(data)}`
    );
  }

  const now = new Date();
  const expiresAt = expiresIn
    ? new Date(Date.now() + expiresIn * 1000).toISOString()
    : "";

  const store: TokenStore = {
    name,
    access_token: accessToken,
    token_type:   tokenType,
    expires_in:   expiresIn,
    expires_at:   expiresAt,
    created_at:   now.toISOString(),
    updated_at:   now.toISOString(),
  };

  // Persist in memory
  _cachedToken = store;

  return accessToken;
}

/**
 * Public entry-point used by callApi.ts
 *
 * Returns a valid access token, generating a new one when the cache is
 * empty or the existing token is about to expire.
 */
export async function getAccessToken(): Promise<string> {
  if (_cachedToken && isTokenValid(_cachedToken)) {
    return _cachedToken.access_token;
  }

  return generateToken();
}