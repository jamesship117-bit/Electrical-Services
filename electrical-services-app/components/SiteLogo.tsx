import Link from "next/link";

export function SiteLogo() {
  return (
    <Link
      href="/"
      className="group flex max-w-full items-center gap-3 rounded-lg py-1 outline-none transition-opacity hover:opacity-95 focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
      aria-label="Bright Solutions Electrical Services home"
    >
      <span
        className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-400/15 ring-1 ring-amber-400/35 md:h-12 md:w-12"
        aria-hidden
      >
        <svg
          viewBox="0 0 48 48"
          className="h-7 w-7 text-amber-400 md:h-8 md:w-8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24 4.5c10.77 0 19.5 8.73 19.5 19.5S34.77 43.5 24 43.5 4.5 34.77 4.5 24 13.23 4.5 24 4.5Z"
            fill="currentColor"
            fillOpacity="0.16"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M27.5 11.5 17.4 25.2h8l-4.1 11.3 13-17.6h-8.4l1.6-7.4Z"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="1.1"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="min-w-0 flex flex-col text-left leading-tight">
        <span className="truncate text-sm font-bold tracking-tight text-white sm:text-base md:text-lg">
          Bright Solutions
        </span>
        <span className="truncate text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-amber-300/95 sm:text-xs md:text-sm">
          Electrical Services
        </span>
      </span>
    </Link>
  );
}
