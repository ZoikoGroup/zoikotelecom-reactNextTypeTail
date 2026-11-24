export default function SecurityNoticeBar() {
  return (
    <div
      role="region"
      aria-label="Security and example notice"
      className="w-full bg-[#13113A] px-4 py-2.5 text-white antialiased sm:px-6"
    >
      <div className="mx-auto flex w-full max-w-[1300px] flex-wrap items-center justify-center gap-x-3 gap-y-1.5 text-center text-[11.5px] font-semibold leading-snug">
        {/* Security Warning Item */}
        <span className="inline-flex items-center gap-2">
          <svg
            viewBox="0 0 24 24"
            className="h-3.5 w-3.5 shrink-0 text-[#E58EB7]"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <rect x="5" y="11" width="14" height="10" rx="2" />
            <path d="M8 11V7a4 4 0 0 1 8 0v4" />
          </svg>
          <span>
            Never share card numbers, security codes, passwords or one-time
            codes
          </span>
        </span>

        {/* Separator Dot */}
        <span aria-hidden="true" className="hidden text-white/40 sm:inline">
          •
        </span>

        {/* Example Disclaimer Item */}
        <span className="inline-flex items-center gap-2">
          <svg
            viewBox="0 0 24 24"
            className="h-3.5 w-3.5 shrink-0 text-[#E58EB7]"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="9" />
            <path d="M12 11v5" />
            <circle cx="12" cy="8" r="0.7" fill="currentColor" stroke="none" />
          </svg>
          <span>Not your bill — examples only</span>
        </span>
      </div>
    </div>
  );
}
