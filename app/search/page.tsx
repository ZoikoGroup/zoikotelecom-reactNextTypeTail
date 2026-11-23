import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Search } from "lucide-react";
import { NAV_ICONS } from "../Components/navbar/icons";
import { searchSite } from "../Components/search/searchSite";

export const metadata: Metadata = {
  title: "Search | Zoiko Telecom",
  robots: { index: false },
};

type SearchPageProps = {
  searchParams: Promise<{ q?: string | string[] }>;
};

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const params = await searchParams;
  const q = (Array.isArray(params.q) ? params.q[0] : params.q ?? "").trim();
  const { results, total } = searchSite(q, 50);

  return (
    <main className="mx-auto w-full max-w-[900px] flex-1 px-5 py-12 sm:py-16">
      <h1 className="text-3xl font-extrabold tracking-tight text-[#0f1b3d] sm:text-4xl">
        {q ? <>Results for “{q}”</> : "Search Zoiko Telecom"}
      </h1>

      <form
        action="/search"
        role="search"
        className="mt-6 flex overflow-hidden rounded-2xl border-2 border-[#c4237f]"
      >
        <label className="flex flex-1 items-center gap-3 px-4">
          <Search className="h-5 w-5 shrink-0 text-[#0f1b3d]" aria-hidden="true" />
          <span className="sr-only">Search</span>
          <input
            name="q"
            defaultValue={q}
            maxLength={100}
            placeholder="Search plans, broadband, devices, help…"
            className="min-w-0 flex-1 bg-transparent py-3.5 text-base font-semibold text-[#0f1b3d] outline-none placeholder:font-normal placeholder:text-[#8a90a6]"
          />
        </label>
        <button
          type="submit"
          className="bg-gradient-to-r from-[#c4237f] to-[#a01a69] px-6 font-bold text-white sm:px-10"
        >
          Search
        </button>
      </form>

      <p className="mt-6 text-sm text-[#4a5270]">
        {q
          ? `${total} ${total === 1 ? "result" : "results"}`
          : "Popular pages"}
      </p>

      {results.length === 0 ? (
        <div className="mt-4 rounded-2xl bg-[#f7f7fb] p-6 text-[#4a5270]">
          <p className="font-bold text-[#0f1b3d]">No matches found.</p>
          <p className="mt-1 text-sm">
            Check the spelling or try a broader term like “broadband”, “SIM” or
            “support”. You can also{" "}
            <Link href="/contact" className="font-bold text-[#c4237f] hover:underline">
              contact our team
            </Link>
            .
          </p>
        </div>
      ) : (
        <ul className="mt-3 divide-y divide-[#eceef3] rounded-2xl border border-[#eceef3]">
          {results.map((result, index) => {
            const Icon = NAV_ICONS[result.icon];
            return (
              <li key={result.id}>
                <Link
                  href={result.href}
                  className="flex items-center gap-4 p-4 transition-colors hover:bg-[#fbf3f8]"
                >
                  <span
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${
                      index % 2 === 0
                        ? "bg-[#fde8f3] text-[#c4237f]"
                        : "bg-[#e8f0fd] text-[#1d3f8f]"
                    }`}
                  >
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-bold text-[#0f1b3d]">{result.title}</span>
                    <span className="block text-sm text-[#4a5270]">{result.description}</span>
                  </span>
                  <span className="hidden rounded-full bg-[#f4f5f9] px-3 py-1 text-xs font-semibold text-[#4a5270] sm:inline">
                    {result.category}
                  </span>
                  <ChevronRight className="h-5 w-5 shrink-0 text-[#0f1b3d]" aria-hidden="true" />
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </main>
  );
}
