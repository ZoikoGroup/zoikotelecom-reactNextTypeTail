import { SEARCH_INDEX, type SearchEntry, type SearchResult } from "./searchIndex";

const POPULAR_HREFS = [
  "/bt-broadband",
  "/broadband-check-availability",
  "/sim-only-plans",
  "/switch-and-save",
  "/faqs",
];

export const MAX_QUERY_LENGTH = 100;

function normalize(text: string) {
  return text
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9\s-]/g, " ")
    .replace(/-/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/** Turn "plans" into "plan" so singular and plural both match. */
function stem(word: string) {
  return word.length > 3 && word.endsWith("s") ? word.slice(0, -1) : word;
}

function words(text: string) {
  return normalize(text).split(" ").filter(Boolean).map(stem);
}

/** Score one token against a list of words: exact beats prefix beats substring. */
function tokenScore(token: string, fieldWords: string[], weight: number) {
  let best = 0;
  for (const w of fieldWords) {
    if (w === token) return weight * 3;
    if (w.startsWith(token)) best = Math.max(best, weight * 2);
    else if (token.length >= 3 && w.includes(token)) best = Math.max(best, weight);
  }
  return best;
}

function scoreEntry(entry: SearchEntry, query: string, tokens: string[]) {
  const title = normalize(entry.title);
  const titleWords = words(entry.title);
  const descWords = words(entry.description);
  const keywordWords = entry.keywords.flatMap(words);
  const categoryWords = words(entry.category);

  let score = 0;
  if (title === query) score += 100;
  else if (title.startsWith(query)) score += 40;
  else if (title.includes(query)) score += 25;

  if (entry.keywords.some((k) => normalize(k) === query)) score += 30;

  let matched = 0;
  for (const token of tokens) {
    const s =
      tokenScore(token, titleWords, 6) +
      tokenScore(token, keywordWords, 3) +
      tokenScore(token, categoryWords, 3) +
      tokenScore(token, descWords, 2);
    if (s > 0) matched++;
    score += s;
  }

  // Every word in the query must match somewhere.
  return matched === tokens.length ? score : 0;
}

export type SearchResponse = {
  query: string;
  total: number;
  results: SearchResult[];
};

function toResult(entry: SearchEntry): SearchResult {
  const { id, title, description, href, icon, category } = entry;
  return { id, title, description, href, icon, category };
}

export function searchSite(rawQuery: string, limit = 8): SearchResponse {
  const query = normalize(rawQuery.slice(0, MAX_QUERY_LENGTH));

  if (!query) {
    const results = POPULAR_HREFS.map((href) =>
      SEARCH_INDEX.find((e) => e.href === href),
    )
      .filter((e): e is SearchEntry => Boolean(e))
      .map(toResult);
    return { query: "", total: results.length, results };
  }

  const tokens = [...new Set(words(query))];
  const ranked = SEARCH_INDEX.map((entry) => ({
    entry,
    score: scoreEntry(entry, query, tokens),
  }))
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score || a.entry.title.localeCompare(b.entry.title));

  return {
    query: rawQuery.trim().slice(0, MAX_QUERY_LENGTH),
    total: ranked.length,
    results: ranked.slice(0, limit).map((r) => toResult(r.entry)),
  };
}
