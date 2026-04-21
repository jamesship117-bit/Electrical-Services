export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <main className="mx-auto w-full max-w-5xl px-6 py-8 md:px-10 md:py-12">
        <section className="mb-5 rounded-xl border border-slate-800 bg-slate-900/95 p-6 md:p-8">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            Bright Solutions Electrical Services
          </h1>
          <p className="mt-3 text-slate-300">
            Professional, efficient, and family owned electrical service you can
            trust.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <span className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-sm">
              Professional
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-sm">
              Efficient
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-sm">
              Family Owned
            </span>
          </div>
        </section>

        <section className="mb-5 rounded-xl border border-slate-800 bg-slate-900/95 p-6 md:p-8">
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

        <section className="mb-5 rounded-xl border border-slate-800 bg-slate-900/95 p-6 md:p-8">
          <h2 className="text-2xl font-semibold">Contact Information</h2>
          <p className="mt-3 text-lg">
            Call us today:{" "}
            <span className="font-semibold text-amber-400">832-758-4456</span>
          </p>
        </section>

        <section className="rounded-xl border border-slate-800 bg-slate-900/95 p-6 md:p-8">
          <h2 className="text-2xl font-semibold">Set an Appointment</h2>
          <p className="mt-2 text-sm text-slate-400">
            Mockup only: this form is non-functional for now.
          </p>

          <form className="mt-5 grid gap-4" onSubmit={(event) => event.preventDefault()}>
            <div>
              <label htmlFor="name" className="mb-1 block text-sm text-slate-200">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
                className="w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100 placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              />
            </div>

            <div>
              <label htmlFor="phone" className="mb-1 block text-sm text-slate-200">
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="(000) 000-0000"
                className="w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100 placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              />
            </div>

            <div>
              <label htmlFor="day" className="mb-1 block text-sm text-slate-200">
                Preferred Day
              </label>
              <select
                id="day"
                name="day"
                className="w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
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
              <label htmlFor="details" className="mb-1 block text-sm text-slate-200">
                Service Details
              </label>
              <textarea
                id="details"
                name="details"
                placeholder="Tell us what you need help with"
                className="min-h-24 w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100 placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              />
            </div>

            <button
              type="submit"
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
