import { ProjectDisciplineTags } from "@/components/ProjectDisciplineTags";
import { projects } from "@/data/projects";
import { Helmet } from "react-helmet-async";

export function Projects() {
  return (
    <div className="bg-white">
      <Helmet>
        <title>Projects | Michael Thomas Architect</title>
        <meta
          name="description"
          content="View selected work by Michael Thomas Architect, including residential architecture, renovations, and integrated engineering-led project delivery."
        />
      </Helmet>
      <div className="border-b border-slate-200 bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-navy-700">
            Portfolio
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-navy-950 sm:text-5xl">
            Project gallery
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            Our portfolio leans toward residential work—custom homes, renovations, townhomes, and
            small multi-unit housing—supported by the same structural and MEP rigor we bring to
            every building type. Imagery is illustrative of scale and design intent.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <li
              key={p.id}
              className="group overflow-hidden rounded-sm border border-slate-200 bg-white shadow-sm transition hover:border-navy-200 hover:shadow-md"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-200">
                <img
                  src={p.image}
                  alt={p.alt}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-navy-700">
                  {p.type}
                </p>
                <h2 className="mt-2 font-display text-xl font-semibold text-navy-950">{p.title}</h2>
                <p className="mt-2 text-sm text-slate-600">
                  {p.city}, {p.state} · {p.year}
                </p>
                <ProjectDisciplineTags disciplines={p.disciplines} variant="onLight" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
