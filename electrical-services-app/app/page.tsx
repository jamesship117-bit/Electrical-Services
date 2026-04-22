import { SiteLogo } from "@/components/SiteLogo";

export default function Home() {
  return (
    <div className="page-gradient min-h-screen text-slate-100">
      <header className="border-b border-white/10 bg-slate-950/35 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3 md:px-10 md:py-4">
          <SiteLogo />
        </div>
      </header>
      <main className="mx-auto w-full max-w-5xl px-6 py-8 md:px-10 md:py-12">
        <section className="mb-5 rounded-xl border border-white/10 bg-slate-950/80 p-6 shadow-lg backdrop-blur-md md:p-8">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            Bright Solutions Electrical Services
          </h1>
          <p className="mt-3 text-slate-300">
            We provide a bright solution for any of your electrical needs.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <span className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-sm">
              Professional
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-sm">
              Efficient
            </span>
          </div>
        </section>

        <section className="mb-5 rounded-xl border border-white/15 bg-slate-900/55 p-6 shadow-lg backdrop-blur-sm md:p-8">
          <h2 className="text-2xl font-semibold">Business Hours</h2>
          <ul className="mt-4 list-inside list-disc space-y-1 text-slate-200">
            <li>Monday: 8AM - 6PM</li>
            <li>Tuesday: 8AM - 6PM</li>
            <li>Wednesday: 8AM - 6PM</li>
            <li>Thursday: 8AM - 6PM</li>
            <li>Friday: 8AM - 6PM</li>
            <li>Saturday: 8AM - 12PM</li>
          </ul>
        </section>

        <section className="mb-5 rounded-xl border border-white/20 bg-slate-900/35 p-6 shadow-lg backdrop-blur-sm md:p-8">
          <h2 className="text-2xl font-semibold">Contact Information</h2>
          <p className="mt-3 text-lg">
            Call us today:{" "}
            <span className="font-semibold text-amber-400">832-758-4456</span>
          </p>
          <p className="mt-2 text-lg">
            Email us:{" "}
            <a
              href="mailto:brightsol.electrical@gmail.com"
              className="font-semibold text-amber-300 underline decoration-amber-300/70 underline-offset-4 hover:text-amber-200"
            >
              brightsol.electrical@gmail.com
            </a>
          </p>
        </section>

        <section className="rounded-xl border border-slate-200/90 bg-white/90 p-6 text-slate-900 shadow-lg backdrop-blur-sm md:p-8">
          <h2 className="text-2xl font-semibold text-slate-900">Set an Appointment</h2>
          <p className="mt-2 text-sm text-slate-600">
            Mockup only: this form is non-functional for now.
          </p>

          <form className="mt-5 grid gap-4">
            <div>
              <label htmlFor="name" className="mb-1 block text-sm text-slate-700">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
                className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              />
            </div>

            <div>
              <label htmlFor="phone" className="mb-1 block text-sm text-slate-700">
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="(000) 000-0000"
                className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              />
            </div>

            <div>
              <label htmlFor="day" className="mb-1 block text-sm text-slate-700">
                Preferred Day
              </label>
              <select
                id="day"
                name="day"
                className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                defaultValue="Monday"
              >
                <option>Monday</option>
                <option>Tuesday</option>
                <option>Wednesday</option>
                <option>Thursday</option>
                <option>Friday</option>
                <option>Saturday</option>
              </select>
            </div>

            <div>
              <label htmlFor="details" className="mb-1 block text-sm text-slate-700">
                Service Details
              </label>
              <textarea
                id="details"
                name="details"
                placeholder="Tell us what you need help with"
                className="min-h-24 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              />
            </div>

            <button
              type="button"
              className="inline-flex w-fit items-center justify-center rounded-md bg-amber-500 px-4 py-2 font-semibold text-slate-950 transition-colors hover:bg-amber-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
            >
              Request Appointment
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}
