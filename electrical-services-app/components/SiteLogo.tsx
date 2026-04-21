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
          viewBox="0 0 40 52"
          className="h-7 w-7 text-amber-400 md:h-8 md:w-8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 6c-7.18 0-13 5.82-13 13 0 4.2 1.98 7.94 5.06 10.34.35.27.56.69.56 1.14V32c0 .83.67 1.5 1.5 1.5h12.88c.83 0 1.5-.67 1.5-1.5v-1.52c0-.45.21-.87.56-1.14C32.02 26.94 34 23.2 34 19c0-7.18-5.82-13-13-13Z"
            fill="currentColor"
            fillOpacity="0.12"
            stroke="currentColor"
            strokeWidth="1.35"
            strokeLinejoin="round"
          />
          <path
            d="M20 14v8M16.5 18h7"
            stroke="currentColor"
            strokeWidth="1.35"
            strokeLinecap="round"
          />
          <path
            d="M14 34.5h12"
            stroke="currentColor"
            strokeWidth="1.35"
            strokeLinecap="round"
            opacity="0.85"
          />
          <rect
            x="13"
            y="37"
            width="14"
            height="3.5"
            rx="1"
            fill="currentColor"
            opacity="0.75"
          />
          <rect
            x="14"
            y="41.5"
            width="12"
            height="3.5"
            rx="1"
            fill="currentColor"
            opacity="0.55"
          />
          <rect
            x="15"
            y="46"
            width="10"
            height="3.5"
            rx="1"
            fill="currentColor"
            opacity="0.4"
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
