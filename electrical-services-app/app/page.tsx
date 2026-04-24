import { SiteLogo } from "@/components/SiteLogo";
import { RevealOnScroll } from "@/components/RevealOnScroll";

const services = [
  "Panel Upgrades & Repairs",
  "Outlet & Switch Installation",
  "Ceiling Fan & Lighting Installation",
  "EV Charger Installation",
  "Whole Home Rewiring",
  "Safety Inspections",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F8F8F8] text-[#1A1A1A]">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#1A1A1A] text-white shadow-sm">
        <nav className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-3 md:px-8">
          <SiteLogo />
          <div className="flex flex-wrap items-center gap-2 md:gap-5">
            <a href="#home" className="text-xs font-medium uppercase tracking-[0.12em] hover:text-[#F5A623]">
              Home
            </a>
            <a href="#services" className="text-xs font-medium uppercase tracking-[0.12em] hover:text-[#F5A623]">
              Services
            </a>
            <a href="#about" className="text-xs font-medium uppercase tracking-[0.12em] hover:text-[#F5A623]">
              About
            </a>
            <a href="#contact" className="text-xs font-medium uppercase tracking-[0.12em] hover:text-[#F5A623]">
              Contact
            </a>
            <a
              href="tel:832-758-4456"
              className="inline-flex items-center rounded-md bg-[#F5A623] px-3 py-2 text-xs font-semibold text-[#1A1A1A] hover:bg-[#f7b84d] md:px-4"
            >
              Call Now: 832-758-4456
            </a>
          </div>
        </nav>
      </header>
      <main>
        <section id="home" className="circuit-pattern bg-[#0D1B2A] py-18 text-white md:py-24">
          <div className="relative z-10 mx-auto w-full max-w-6xl px-5 md:px-8">
            <RevealOnScroll className="max-w-3xl">
              <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl">
                Bright Solutions Electrical Services
              </h1>
              <p className="mt-5 text-lg text-slate-200 md:text-xl">
                We provide a bright solution for any of your electrical needs.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#appointment"
                  className="inline-flex items-center rounded-md bg-[#F5A623] px-5 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-[#1A1A1A] hover:bg-[#f7b84d]"
                >
                  Set an Appointment
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center rounded-md border border-[#F5A623] px-5 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-[#F5A623] hover:bg-[#F5A623] hover:text-[#1A1A1A]"
                >
                  Our Services
                </a>
              </div>
              <p className="mt-6 text-sm font-medium tracking-wide text-slate-200">
                Licensed &amp; Insured · Residential Specialist · Serving the Greater Houston Area
              </p>
            </RevealOnScroll>
          </div>
        </section>

        <section id="services" className="bg-[#F8F8F8] py-16 md:py-20">
          <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
            <RevealOnScroll>
              <h2 className="text-center text-3xl font-bold tracking-tight text-[#1A1A1A] md:text-4xl">
                What We Do
              </h2>
            </RevealOnScroll>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <RevealOnScroll key={service}>
                  <article className="card-lift rounded-xl bg-white p-6 shadow-sm hover:-translate-y-1 hover:shadow-lg">
                    <div className="mb-4 text-2xl text-[#F5A623]">⚡</div>
                    <h3 className="text-lg font-semibold text-[#1A1A1A]">{service}</h3>
                  </article>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="bg-[#0D1B2A] py-14 text-white md:py-16">
          <div className="mx-auto grid w-full max-w-6xl gap-6 px-5 md:grid-cols-3 md:px-8">
            {["Licensed & Insured", "Same-Week Appointments", "Satisfaction Guaranteed"].map((item) => (
              <RevealOnScroll key={item}>
                <div className="rounded-xl border border-white/15 bg-white/5 p-6 text-center">
                  <div className="mb-3 text-2xl text-[#F5A623]">★</div>
                  <h3 className="text-xl font-semibold">{item}</h3>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </section>

        <section id="contact" className="bg-[#1f2933] py-16 text-white md:py-18">
          <div className="mx-auto grid w-full max-w-6xl gap-8 px-5 md:grid-cols-2 md:px-8">
            <RevealOnScroll>
              <div className="rounded-xl border border-white/10 bg-white/5 p-6">
                <h2 className="text-2xl font-semibold text-[#F5A623]">Business Hours</h2>
                <ul className="mt-4 space-y-2 text-base text-slate-100">
                  <li>Monday: 8AM - 6PM</li>
                  <li>Tuesday: 8AM - 6PM</li>
                  <li>Wednesday: 8AM - 6PM</li>
                  <li>Thursday: 8AM - 6PM</li>
                  <li>Friday: 8AM - 6PM</li>
                  <li>Saturday: 8AM - 12PM</li>
                </ul>
              </div>
            </RevealOnScroll>

            <RevealOnScroll>
              <div className="rounded-xl border border-white/10 bg-white/5 p-6">
                <h2 className="text-2xl font-semibold text-[#F5A623]">Contact Information</h2>
                <p className="mt-4 text-lg">
                  Call us today: <span className="font-semibold text-[#F5A623]">832-758-4456</span>
                </p>
                <p className="mt-3 text-lg">
                  Email us:{" "}
                  <a
                    href="mailto:brightsol.electrical@gmail.com"
                    className="font-semibold text-[#F5A623] underline underline-offset-4 hover:text-[#f7b84d]"
                  >
                    brightsol.electrical@gmail.com
                  </a>
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        <section id="appointment" className="bg-[#F5F5F5] py-16 md:py-20">
          <div className="mx-auto w-full max-w-3xl px-5 md:px-8">
            <RevealOnScroll>
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-3xl font-bold tracking-tight text-[#1A1A1A]">Set an Appointment</h2>
                <p className="mt-2 text-sm text-slate-600">We&apos;ll confirm your appointment within 1 business day.</p>
                <form className="mt-6 grid gap-4">
                  <div>
                    <label htmlFor="name" className="mb-1 block text-sm font-medium text-slate-700">
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Enter your name"
                      className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder:text-slate-400 focus-visible:border-[#F5A623] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5A623]/50"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-1 block text-sm font-medium text-slate-700">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="(000) 000-0000"
                      className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder:text-slate-400 focus-visible:border-[#F5A623] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5A623]/50"
                    />
                  </div>
                  <div>
                    <label htmlFor="day" className="mb-1 block text-sm font-medium text-slate-700">
                      Preferred Day
                    </label>
                    <select
                      id="day"
                      name="day"
                      className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 focus-visible:border-[#F5A623] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5A623]/50"
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
                    <label htmlFor="details" className="mb-1 block text-sm font-medium text-slate-700">
                      Service Details
                    </label>
                    <textarea
                      id="details"
                      name="details"
                      placeholder="Tell us what you need help with"
                      className="min-h-24 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder:text-slate-400 focus-visible:border-[#F5A623] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5A623]/50"
                    />
                  </div>
                  <button
                    type="button"
                    className="inline-flex w-fit items-center justify-center rounded-md bg-[#0D1B2A] px-5 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-white hover:bg-[#13263b]"
                  >
                    Request Appointment
                  </button>
                </form>
              </div>
            </RevealOnScroll>
          </div>
        </section>
      </main>

      <footer className="bg-[#1A1A1A] text-white">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-5 py-10 md:grid-cols-3 md:px-8">
          <RevealOnScroll>
            <SiteLogo />
          </RevealOnScroll>
          <RevealOnScroll>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-[#F5A623]">Quick Links</h3>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <a href="#home" className="hover:text-[#F5A623]">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-[#F5A623]">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-[#F5A623]">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </RevealOnScroll>
          <RevealOnScroll>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-[#F5A623]">Contact</h3>
              <p className="mt-3 text-sm">832-758-4456</p>
              <p className="mt-2 text-sm">brightsol.electrical@gmail.com</p>
            </div>
          </RevealOnScroll>
        </div>
        <div className="border-t border-white/10 px-5 py-4 text-center text-xs text-slate-300 md:px-8">
          © 2025 Bright Solutions Electrical. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
