import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ProjectDisciplineTags } from "@/components/ProjectDisciplineTags";
import { ServicesSection } from "@/components/ServicesSection";
import { projects } from "@/data/projects";

const heroImage =
  "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1920&q=85";

export function Home() {
  const featured = projects.slice(0, 4);

  return (
    <>
      <Helmet>
        <title>Michael Thomas Architect | Architecture & Engineering Services</title>
        <meta
          name="description"
          content="Official website of Michael Thomas Architect. Explore architecture, structural engineering, MEP coordination, and HVAC design services across the United States."
        />
      </Helmet>
      <section className="relative min-h-[85vh] overflow-hidden bg-navy-950">
        <img
          src={heroImage}
          alt="Contemporary residential architecture by Michael Thomas Architect"
          className="absolute inset-0 h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/80 to-navy-950/40" aria-hidden />
        <div className="relative mx-auto flex min-h-[85vh] max-w-6xl flex-col justify-center px-4 py-24 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-300">
            Licensed architecture & engineering · USA
          </p>
          <h1 className="mt-6 max-w-3xl font-display text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Michael Thomas Architect: buildings engineered for clarity, performance, and permanence.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
            Michael Thomas Architect partners with owners, institutions, and developers to deliver
            coordinated architectural design, structural engineering, and MEP/HVAC systems—
            from first sketch to certificate of occupancy.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-sm bg-white px-8 py-3.5 text-sm font-semibold text-navy-950 shadow-lg transition hover:bg-slate-100"
            >
              Schedule a consultation
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center justify-center border border-white/40 px-8 py-3.5 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
            >
              View selected work
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50 py-6">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-12 gap-y-3 px-4 text-center text-sm font-medium text-slate-600 sm:px-6 lg:px-8">
          <span>Architectural design</span>
          <span className="hidden text-slate-300 sm:inline">·</span>
          <span>Structural engineering</span>
          <span className="hidden text-slate-300 sm:inline">·</span>
          <span>MEP coordination</span>
          <span className="hidden text-slate-300 sm:inline">·</span>
          <span>HVAC & building systems</span>
        </div>
      </section>

      <ServicesSection id="services" showIntro />

      <section className="bg-slate-100 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-navy-700">
                Portfolio
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy-950 sm:text-4xl">
                Selected projects
              </h2>
              <p className="mt-3 max-w-xl text-slate-600">
                Residential commissions—from custom estates to urban infill and whole-home
                renewals—with architecture and engineering tuned to how families actually live.
              </p>
            </div>
            <Link
              to="/projects"
              className="shrink-0 text-sm font-semibold text-navy-800 underline-offset-4 hover:text-navy-950 hover:underline"
            >
              Full project gallery →
            </Link>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {featured.map((p) => (
              <Link
                key={p.id}
                to="/projects"
                className="group relative aspect-[4/3] overflow-hidden rounded-sm bg-navy-900"
              >
                <img
                  src={p.image}
                  alt={p.alt}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-300">
                    {p.type}
                  </p>
                  <p className="mt-1 font-display text-xl font-semibold text-white">{p.title}</p>
                  <p className="mt-1 text-sm text-slate-300">
                    {p.city}, {p.state} · {p.year}
                  </p>
                  <ProjectDisciplineTags disciplines={p.disciplines} variant="onDark" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-950 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
            Ready to discuss your next project?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Share your goals and timeline—we will respond with next steps and a clear scope for
            how our team can support design, engineering, and permitting.
          </p>
          <Link
            to="/contact"
            className="mt-10 inline-flex rounded-sm bg-white px-8 py-3.5 text-sm font-semibold text-navy-950 transition hover:bg-slate-100"
          >
            Contact the studio
          </Link>
        </div>
      </section>
    </>
  );
}
