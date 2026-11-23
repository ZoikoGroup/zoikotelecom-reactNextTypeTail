"use client";

import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Briefcase,
  ChevronRight,
  Cpu,
  Headphones,
  Keyboard,
  Laptop,
  Loader2,
  MapPin,
  Phone,
  Search,
  Smartphone,
  Truck,
  Wifi,
  X,
  type LucideIcon,
} from "lucide-react";
import { NAV_ICONS } from "../navbar/icons";
import type { SearchResult } from "./searchIndex";
import type { SearchResponse } from "./searchSite";

const EXPLORE: { label: string; href: string; icon: LucideIcon }[] = [
  { label: "Mobile", href: "/ee-mobile-plans", icon: Smartphone },
  { label: "Broadband", href: "/bt-broadband", icon: Wifi },
  { label: "Landlines", href: "/landlines", icon: Phone },
  { label: "Business", href: "/business-solutions", icon: Briefcase },
  { label: "IoT", href: "/iot-&-connectivity-data-plans", icon: Cpu },
  { label: "Devices", href: "/devices-accessories", icon: Laptop },
];

type SearchModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function SearchModal({ open, onClose }: SearchModalProps) {
  const router = useRouter();
  const listId = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");
  const [postcode, setPostcode] = useState("");
  const [data, setData] = useState<SearchResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [active, setActive] = useState(-1);

  const results: SearchResult[] = data?.results ?? [];
  const trimmed = query.trim();

  // Fetch results from the API (debounced; earlier requests are cancelled).
  useEffect(() => {
    if (!open) return;
    const controller = new AbortController();
    const timer = window.setTimeout(async () => {
      setLoading(true);
      setError(false);
      try {
        const res = await fetch(
          `/api/search?q=${encodeURIComponent(trimmed)}&limit=6`,
          { signal: controller.signal },
        );
        if (!res.ok) throw new Error(String(res.status));
        setData((await res.json()) as SearchResponse);
        setActive(-1);
      } catch (err) {
        if ((err as Error).name !== "AbortError") setError(true);
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }, 180);
    return () => {
      controller.abort();
      window.clearTimeout(timer);
    };
  }, [trimmed, open]);

  // Focus the input, lock page scroll and close on Escape while open.
  useEffect(() => {
    if (!open) return;
    inputRef.current?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  const go = (href: string) => {
    onClose();
    router.push(href);
  };

  const submitSearch = () => {
    if (active >= 0 && results[active]) return go(results[active].href);
    if (trimmed) go(`/search?q=${encodeURIComponent(trimmed)}`);
  };

  const onInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActive((i) => (results.length ? (i + 1) % results.length : -1));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActive((i) =>
        results.length ? (i <= 0 ? results.length - 1 : i - 1) : -1,
      );
    }
  };

  const checkAvailability = (event: React.FormEvent) => {
    event.preventDefault();
    const pc = postcode.trim().toUpperCase();
    go(
      pc
        ? `/broadband-check-availability?postcode=${encodeURIComponent(pc)}`
        : "/broadband-check-availability",
    );
  };

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-[#0f1b3d]/50 px-3 py-6 backdrop-blur-sm sm:px-6 sm:py-12"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={`${listId}-title`}
        className="relative w-full max-w-[1040px] overflow-hidden rounded-3xl bg-white shadow-2xl"
      >
        <div className="h-2 bg-gradient-to-r from-[#c4237f] via-[#7b3fe4] to-[#2f8fff]" />

        <div className="p-5 sm:p-8 lg:p-10">
          {/* Header */}
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2
                id={`${listId}-title`}
                className="text-2xl font-extrabold tracking-tight text-[#0f1b3d] sm:text-4xl"
              >
                Search Zoiko Telecom
              </h2>
              <p className="mt-1 text-sm text-[#4a5270] sm:text-lg">
                Find plans, services, devices and help in one place.
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close search"
              className="rounded-full p-1.5 text-[#0f1b3d] hover:bg-[#f4f5f9]"
            >
              <X className="h-7 w-7" aria-hidden="true" />
            </button>
          </div>

          {/* Search box */}
          <form
            role="search"
            onSubmit={(event) => {
              event.preventDefault();
              submitSearch();
            }}
            className="mt-6 flex items-stretch overflow-hidden rounded-2xl border-2 border-[#c4237f] focus-within:shadow-[0_0_0_4px_rgba(196,35,127,0.12)]"
          >
            <div className="flex flex-1 items-center gap-3 px-4">
              <Search className="h-6 w-6 shrink-0 text-[#0f1b3d]" aria-hidden="true" />
              <input
                ref={inputRef}
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                onKeyDown={onInputKeyDown}
                maxLength={100}
                placeholder="Search plans, broadband, devices, help…"
                aria-label="Search Zoiko Telecom"
                aria-controls={`${listId}-list`}
                aria-activedescendant={
                  active >= 0 ? `${listId}-opt-${active}` : undefined
                }
                className="min-w-0 flex-1 bg-transparent py-3.5 text-base font-semibold text-[#0f1b3d] outline-none placeholder:font-normal placeholder:text-[#8a90a6] sm:text-xl"
              />
              {loading && (
                <Loader2 className="h-5 w-5 animate-spin text-[#8a90a6]" aria-hidden="true" />
              )}
              {query && (
                <button
                  type="button"
                  onClick={() => {
                    setQuery("");
                    inputRef.current?.focus();
                  }}
                  aria-label="Clear search"
                  className="rounded-full p-1 text-[#0f1b3d] hover:bg-[#f4f5f9]"
                >
                  <X className="h-5 w-5" aria-hidden="true" />
                </button>
              )}
            </div>
            <button
              type="submit"
              className="shrink-0 bg-gradient-to-r from-[#c4237f] to-[#a01a69] px-5 text-base font-bold text-white hover:opacity-95 sm:px-12 sm:text-xl"
            >
              Search
            </button>
          </form>

          <div className="mt-7 grid gap-6 lg:grid-cols-[1fr_330px]">
            {/* Suggested matches */}
            <section aria-live="polite">
              <h3 className="text-lg font-extrabold text-[#0f1b3d]">
                {trimmed ? "Suggested matches" : "Popular searches"}
              </h3>

              {error ? (
                <p className="mt-4 rounded-xl bg-[#fff4f8] p-4 text-sm text-[#a01a69]">
                  Search is unavailable right now. Please try again.
                </p>
              ) : results.length === 0 && !loading && data ? (
                <p className="mt-4 rounded-xl bg-[#f7f7fb] p-4 text-sm text-[#4a5270]">
                  No matches for “{trimmed}”. Try “broadband”, “SIM only” or
                  “roaming”.
                </p>
              ) : (
                <ul id={`${listId}-list`} role="listbox" className="mt-2">
                  {results.map((result, index) => {
                    const Icon = NAV_ICONS[result.icon];
                    const pink = index % 2 === 0;
                    return (
                      <li
                        key={result.id}
                        id={`${listId}-opt-${index}`}
                        role="option"
                        aria-selected={active === index}
                        className="border-b border-[#eceef3] last:border-b-0"
                      >
                        <Link
                          href={result.href}
                          onClick={onClose}
                          onMouseEnter={() => setActive(index)}
                          className={`flex items-center gap-4 rounded-xl px-1 py-2.5 transition-colors ${
                            active === index ? "bg-[#fbf3f8]" : ""
                          }`}
                        >
                          <span
                            className={`flex h-12 w-[78px] shrink-0 items-center justify-center rounded-xl ${
                              pink
                                ? "bg-[#fde8f3] text-[#c4237f]"
                                : "bg-[#e8f0fd] text-[#1d3f8f]"
                            }`}
                          >
                            <Icon className="h-6 w-6" aria-hidden="true" />
                          </span>
                          <span className="min-w-0 flex-1">
                            <span className="block truncate text-base font-bold text-[#0f1b3d] sm:text-lg">
                              {result.title}
                            </span>
                            <span className="block truncate text-sm text-[#4a5270]">
                              {result.description}
                            </span>
                          </span>
                          <ChevronRight className="h-5 w-5 shrink-0 text-[#0f1b3d]" aria-hidden="true" />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </section>

            {/* Quick actions */}
            <aside className="h-fit rounded-2xl bg-[#f6f0fa] p-5">
              <h3 className="text-lg font-extrabold text-[#0f1b3d]">Quick actions</h3>
              <form onSubmit={checkAvailability} className="mt-3 space-y-3">
                <label className="flex items-center gap-3 rounded-xl border border-[#d9dbe5] bg-white px-4 py-3">
                  <MapPin className="h-5 w-5 shrink-0 text-[#0f1b3d]" aria-hidden="true" />
                  <span className="sr-only">Postcode</span>
                  <input
                    value={postcode}
                    onChange={(event) => setPostcode(event.target.value)}
                    placeholder="Enter your postcode"
                    autoComplete="postal-code"
                    maxLength={10}
                    className="min-w-0 flex-1 bg-transparent text-sm text-[#0f1b3d] outline-none placeholder:text-[#8a90a6]"
                  />
                </label>
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#c4237f] to-[#a01a69] py-3 text-base font-bold text-white hover:opacity-95"
                >
                  Check availability
                  <ChevronRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </form>
              <div className="mt-4 divide-y divide-[#e4dcea] border-t border-[#e4dcea]">
                <QuickLink href="/login" icon={Truck} label="Track an order" onClick={onClose} />
                <QuickLink href="/contact" icon={Headphones} label="Contact support" onClick={onClose} />
              </div>
            </aside>
          </div>

          {/* Explore by service */}
          <section className="mt-7">
            <h3 className="text-lg font-extrabold text-[#0f1b3d]">Explore by service</h3>
            <ul className="mt-3 grid grid-cols-3 gap-3 sm:grid-cols-6">
              {EXPLORE.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <Link
                    href={href}
                    onClick={onClose}
                    className="flex flex-col items-center gap-2 rounded-xl border border-[#e4e6ee] py-4 text-sm font-bold text-[#0f1b3d] transition hover:border-[#c4237f] hover:shadow-md sm:text-base"
                  >
                    <Icon className="h-7 w-7 text-[#c4237f]" aria-hidden="true" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          {/* Footer */}
          <div className="mt-6 flex flex-col gap-3 border-t border-[#eceef3] pt-4 text-sm text-[#4a5270] sm:flex-row sm:items-center sm:justify-between">
            <p className="hidden items-center gap-2 sm:flex">
              <Keyboard className="h-5 w-5" aria-hidden="true" />
              Use ↑ ↓ to navigate · Enter to select · Esc to close
            </p>
            {trimmed && (
              <Link
                href={`/search?q=${encodeURIComponent(trimmed)}`}
                onClick={onClose}
                className="inline-flex items-center gap-1 font-bold text-[#c4237f] hover:underline"
              >
                View all results for “{trimmed}”
                {data && data.total > 0 && ` (${data.total})`}
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}

function QuickLink({
  href,
  icon: Icon,
  label,
  onClick,
}: {
  href: string;
  icon: LucideIcon;
  label: string;
  onClick: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="flex items-center gap-3 py-3 font-bold text-[#0f1b3d] hover:text-[#c4237f]"
    >
      <Icon className="h-5 w-5 text-[#1d3f8f]" aria-hidden="true" />
      {label}
      <ChevronRight className="h-4 w-4" aria-hidden="true" />
    </Link>
  );
}
