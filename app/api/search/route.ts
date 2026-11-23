import { NextResponse } from "next/server";
import { searchSite } from "../../Components/search/searchSite";

export const runtime = "nodejs";

/**
 * GET /api/search?q=broadband&limit=8
 * Returns ranked pages matching the query. An empty query returns popular pages.
 */
export function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const q = searchParams.get("q") ?? "";
  const limitParam = Number(searchParams.get("limit"));
  const limit =
    Number.isFinite(limitParam) && limitParam > 0
      ? Math.min(Math.floor(limitParam), 50)
      : 8;

  return NextResponse.json(searchSite(q, limit), {
    headers: { "Cache-Control": "public, max-age=60, s-maxage=300" },
  });
}
