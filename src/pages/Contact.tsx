import { FormEvent, useState } from "react";

type FormState = {
  name: string;
  email: string;
  phone: string;
  organization: string;
  projectType: string;
  message: string;
};

const initial: FormState = {
  name: "",
  email: "",
  phone: "",
  organization: "",
  projectType: "",
  message: "",
};

export function Contact() {
  const [form, setForm] = useState<FormState>(initial);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="bg-white">
      <div className="border-b border-slate-200 bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-navy-700">
            Consultation
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-navy-950 sm:text-5xl">
            Contact us
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            Request a confidential conversation about your project. Include location, approximate
            size, and schedule—we typically respond within two business days.
          </p>
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 lg:grid-cols-5 lg:px-8 lg:py-20">
        <div className="lg:col-span-2">
          <h2 className="font-display text-xl font-semibold text-navy-950">Studio</h2>
          <dl className="mt-6 space-y-4 text-sm text-slate-600">
            <div>
              <dt className="font-semibold text-navy-900">Email</dt>
              <dd className="mt-1">
                <a
                  href="mailto:thomas@michaelthomasarchitect.com"
                  className="hover:text-navy-800 hover:underline"
                >
                  thomas@michaelthomasarchitect.com
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-navy-900">Service area</dt>
              <dd className="mt-1">Licensed project work throughout the United States</dd>
            </div>
          </dl>
          <p className="mt-8 text-xs leading-relaxed text-slate-500">
            This form is a demonstration. Connect it to your CRM or email endpoint in production.
          </p>
        </div>

        <div className="lg:col-span-3">
          {submitted ? (
            <div className="rounded-sm border border-navy-200 bg-navy-50/50 p-8 sm:p-10">
              <h3 className="font-display text-xl font-semibold text-navy-950">
                Thank you for your inquiry.
              </h3>
              <p className="mt-3 text-slate-600">
                We have received your message. In a live deployment, this would trigger a
                notification to the firm. For now, you can continue exploring the site or send a
                direct email to{" "}
                <a href="mailto:thomas@michaelthomasarchitect.com" className="font-medium text-navy-800 underline">
                  thomas@michaelthomasarchitect.com
                </a>
                .
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <label className="block">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-600">
                    Full name *
                  </span>
                  <input
                    required
                    type="text"
                    name="name"
                    autoComplete="name"
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    className="mt-2 w-full rounded-sm border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none ring-navy-700/20 transition focus:border-navy-600 focus:ring-2"
                  />
                </label>
                <label className="block">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-600">
                    Email *
                  </span>
                  <input
                    required
                    type="email"
                    name="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    className="mt-2 w-full rounded-sm border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none ring-navy-700/20 transition focus:border-navy-600 focus:ring-2"
                  />
                </label>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                <label className="block">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-600">
                    Phone
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    autoComplete="tel"
                    value={form.phone}
                    onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                    className="mt-2 w-full rounded-sm border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none ring-navy-700/20 transition focus:border-navy-600 focus:ring-2"
                  />
                </label>
                <label className="block">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-600">
                    Organization
                  </span>
                  <input
                    type="text"
                    name="organization"
                    autoComplete="organization"
                    value={form.organization}
                    onChange={(e) => setForm((f) => ({ ...f, organization: e.target.value }))}
                    className="mt-2 w-full rounded-sm border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none ring-navy-700/20 transition focus:border-navy-600 focus:ring-2"
                  />
                </label>
              </div>
              <label className="block">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-600">
                  Project type
                </span>
                <select
                  name="projectType"
                  value={form.projectType}
                  onChange={(e) => setForm((f) => ({ ...f, projectType: e.target.value }))}
                  className="mt-2 w-full rounded-sm border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none ring-navy-700/20 transition focus:border-navy-600 focus:ring-2"
                >
                  <option value="">Select…</option>
                  <option value="commercial">Commercial / office</option>
                  <option value="institutional">Institutional / civic</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="education">Education</option>
                  <option value="industrial">Industrial / logistics</option>
                  <option value="residential">Residential / multifamily</option>
                  <option value="other">Other</option>
                </select>
              </label>
              <label className="block">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-600">
                  Project summary *
                </span>
                <textarea
                  required
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  placeholder="Location, approximate size, timeline, and services needed (architecture, structural, MEP, HVAC)…"
                  className="mt-2 w-full resize-y rounded-sm border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none ring-navy-700/20 transition focus:border-navy-600 focus:ring-2"
                />
              </label>
              <button
                type="submit"
                className="w-full rounded-sm bg-navy-900 py-3.5 text-sm font-semibold text-white transition hover:bg-navy-800 sm:w-auto sm:px-10"
              >
                Submit consultation request
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
