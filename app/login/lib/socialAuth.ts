// Shared helpers for Google / Facebook social login.
// Keeps the SAME auth flow as the email/password login:
//   localStorage "token" + "user"  ->  window "authChanged" event  ->  redirect.
//
// Backend contract (mirrors the existing /api/accounts/login/ response):
//   POST /api/accounts/social-user/
//     body { provider: "google" | "facebook", access_token }  -> { token, user }
//
// The backend verifies the access token directly with Google / Facebook and
// reads the email from the provider's response (never trusts the client). It
// then finds-or-creates the user and returns your normal { token, user } payload.

const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export type SocialProvider = "google" | "facebook";

export interface SocialAuthResult {
  token: string;
  user: unknown;
}

// --- Window typings for the injected SDKs ---------------------------------
type GoogleTokenResponse = { access_token?: string; error?: string };

interface GoogleAccounts {
  oauth2: {
    initTokenClient: (config: {
      client_id: string;
      scope: string;
      callback: (resp: GoogleTokenResponse) => void;
    }) => { requestAccessToken: () => void };
  };
}

interface FacebookAuthResponse {
  accessToken: string;
}

interface FacebookSDK {
  init: (config: {
    appId: string;
    cookie?: boolean;
    xfbml?: boolean;
    version: string;
  }) => void;
  login: (
    cb: (resp: { authResponse?: FacebookAuthResponse | null }) => void,
    opts?: { scope: string }
  ) => void;
}

declare global {
  interface Window {
    google?: { accounts: GoogleAccounts };
    FB?: FacebookSDK;
    fbAsyncInit?: () => void;
  }
}

// --- Generic script loader (idempotent) -----------------------------------
function loadScript(id: string, src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    if (typeof document === "undefined") {
      reject(new Error("Not in a browser environment"));
      return;
    }
    const existing = document.getElementById(id) as HTMLScriptElement | null;
    if (existing) {
      if (existing.dataset.loaded === "true") resolve();
      else existing.addEventListener("load", () => resolve());
      return;
    }
    const script = document.createElement("script");
    script.id = id;
    script.src = src;
    script.async = true;
    script.defer = true;
    script.onload = () => {
      script.dataset.loaded = "true";
      resolve();
    };
    script.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.body.appendChild(script);
  });
}

// --- Google ---------------------------------------------------------------
export async function getGoogleAccessToken(): Promise<string> {
  const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
  if (!clientId) throw new Error("Missing NEXT_PUBLIC_GOOGLE_CLIENT_ID");

  await loadScript("google-gsi", "https://accounts.google.com/gsi/client");
  if (!window.google) throw new Error("Google SDK failed to initialise");

  return new Promise<string>((resolve, reject) => {
    const client = window.google!.accounts.oauth2.initTokenClient({
      client_id: clientId,
      scope: "openid email profile",
      callback: (resp) => {
        if (resp.error || !resp.access_token) {
          reject(new Error(resp.error || "Google sign-in was cancelled"));
        } else {
          resolve(resp.access_token);
        }
      },
    });
    client.requestAccessToken();
  });
}

// --- Facebook -------------------------------------------------------------
let fbReady: Promise<void> | null = null;

function ensureFacebook(): Promise<void> {
  const appId = process.env.NEXT_PUBLIC_FACEBOOK_APP_ID;
  if (!appId) return Promise.reject(new Error("Missing NEXT_PUBLIC_FACEBOOK_APP_ID"));
  if (fbReady) return fbReady;

  fbReady = new Promise<void>((resolve, reject) => {
    window.fbAsyncInit = () => {
      window.FB?.init({ appId, cookie: true, xfbml: false, version: "v19.0" });
      resolve();
    };
    loadScript("facebook-jssdk", "https://connect.facebook.net/en_US/sdk.js").catch(
      reject
    );
  });
  return fbReady;
}

export async function getFacebookAccessToken(): Promise<string> {
  await ensureFacebook();
  if (!window.FB) throw new Error("Facebook SDK failed to initialise");

  return new Promise<string>((resolve, reject) => {
    window.FB!.login(
      (resp) => {
        if (resp.authResponse?.accessToken) resolve(resp.authResponse.accessToken);
        else reject(new Error("Facebook sign-in was cancelled"));
      },
      { scope: "public_profile,email" }
    );
  });
}

// --- Backend exchange + persistence ---------------------------------------
export async function exchangeSocialToken(
  provider: SocialProvider,
  accessToken: string
): Promise<SocialAuthResult> {
  const res = await fetch(`${API_URL}/api/accounts/social-user/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Frontend-Origin":
        typeof window !== "undefined" ? window.location.origin : "",
    },
    body: JSON.stringify({ provider, access_token: accessToken }),
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.error || data.detail || "Social login failed"); 
  }
  return data as SocialAuthResult;
}

// Mirrors the email/password login side-effects exactly.
export function persistAuth(data: SocialAuthResult) {
  localStorage.setItem("token", data.token);
  localStorage.setItem("user", JSON.stringify(data.user));
  window.dispatchEvent(new Event("authChanged"));
}