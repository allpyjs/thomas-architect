import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ServicesSection } from "@/components/ServicesSection";

export function ServicesPage() {
  return (
    <div className="bg-white">
      <Helmet>
        <title>Services | Michael Thomas Architect</title>
        <meta
          name="description"
          content="Explore services from Michael Thomas Architect, including architectural design, structural engineering, MEP coordination, and HVAC systems integration."
        />
      </Helmet>
      <div className="border-b border-slate-200 bg-navy-950 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            What we deliver
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Services
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">
            End-to-end support for buildings that must perform—structurally, mechanically, and
            experientially. Our process is documented, peer-reviewed where required, and aligned
            with jurisdictional codes across the United States.
          </p>
        </div>
      </div>

      <ServicesSection showIntro={false} />

      <section className="border-t border-slate-200 bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-semibold text-navy-950 sm:text-3xl">
            How we work with your team
          </h2>
          <div className="mt-10 grid gap-10 md:grid-cols-3">
            <div>
              <span className="font-display text-3xl font-semibold text-navy-200">01</span>
              <h3 className="mt-2 font-semibold text-navy-950">Discovery &amp; programming</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                We clarify objectives, constraints, and success metrics before pencil hits paper.
              </p>
            </div>
            <div>
              <span className="font-display text-3xl font-semibold text-navy-200">02</span>
              <h3 className="mt-2 font-semibold text-navy-950">Design &amp; systems integration</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Architecture and engineering evolve together—fewer RFIs, tighter coordination.
              </p>
            </div>
            <div>
              <span className="font-display text-3xl font-semibold text-navy-200">03</span>
              <h3 className="mt-2 font-semibold text-navy-950">Construction administration</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Responsive submittal review and site observation to protect design intent.
              </p>
            </div>
          </div>
          <Link
            to="/contact"
            className="mt-12 inline-flex rounded-sm bg-navy-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-navy-800"
          >
            Discuss your scope
          </Link>
        </div>
      </section>
    </div>
  );
}
