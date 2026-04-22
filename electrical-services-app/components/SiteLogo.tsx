import Link from "next/link";

export function SiteLogo() {
  return (
    <Link
      href="/"
      className="group flex max-w-full items-center gap-3 rounded-lg py-1 outline-none transition-opacity hover:opacity-95 focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
      aria-label="Bright Solutions Electrical Services home"
    >
      <span className="flex items-start gap-1.5 md:gap-2">
        <span className="text-xl font-black uppercase tracking-[0.08em] text-[#2a3e97] drop-shadow-[0_1px_0_rgba(255,255,255,0.25)] md:text-2xl">
          Bright
        </span>

        <span className="relative mt-0.5 inline-flex h-8 w-8 items-center justify-center md:h-10 md:w-10">
          <svg
            viewBox="0 0 72 72"
            className="h-full w-full"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <defs>
              <linearGradient id="boltFill" x1="14" y1="8" x2="58" y2="64" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FBBF24" />
                <stop offset="1" stopColor="#F97316" />
              </linearGradient>
              <linearGradient id="ringStroke" x1="12" y1="12" x2="60" y2="60" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FACC15" />
                <stop offset="1" stopColor="#F97316" />
              </linearGradient>
            </defs>
            <circle cx="36" cy="36" r="25" stroke="url(#ringStroke)" strokeWidth="5" />
            <path
              d="M41.5 7 24.5 35h12.2L30 64.5 48 36H35.8L41.5 7Z"
              fill="url(#boltFill)"
              stroke="#FB923C"
              strokeWidth="1.1"
              strokeLinejoin="round"
            />
          </svg>
        </span>

        <span className="flex flex-col">
          <span className="text-xl font-black uppercase tracking-[0.08em] text-[#2a3e97] drop-shadow-[0_1px_0_rgba(255,255,255,0.25)] md:text-2xl">
            Solutions
          </span>
          <span className="-mt-0.5 text-[0.72rem] font-semibold italic tracking-[0.08em] text-amber-400 md:text-sm">
            electrical
          </span>
        </span>
      </span>
    </Link>
  );
}
