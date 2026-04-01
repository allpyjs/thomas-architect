const services = [
  {
    title: "Architectural Design",
    description:
      "Concept through construction documents: programming, spatial planning, code compliance, material selection, and coordination with stakeholders. We shape environments that balance vision, budget, and long-term operability.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
  },
  {
    title: "Structural Engineering",
    description:
      "Analysis and design of foundations, framing systems, lateral force-resisting elements, and specialty structures. Our engineers work in lockstep with architects to optimize safety, span, and economy.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
        />
      </svg>
    ),
  },
  {
    title: "MEP — Mechanical, Electrical & Plumbing",
    description:
      "Integrated building systems design: power distribution, lighting, fire alarm interfaces, domestic water, sanitary and storm, and mechanical plant routing. Single-source coordination reduces conflicts in the field.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    title: "HVAC Systems",
    description:
      "Load calculations, equipment selection, duct and piping layouts, energy code compliance, and indoor air quality strategies. From central plants to zoned VRF, we size systems for comfort and efficiency.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
        />
      </svg>
    ),
  },
];

type ServicesSectionProps = {
  id?: string;
  showIntro?: boolean;
};

export function ServicesSection({ id, showIntro = true }: ServicesSectionProps) {
  return (
    <section id={id} className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {showIntro && (
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-navy-700">
              Capabilities
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy-950 sm:text-4xl">
              Integrated design and engineering
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              One accountable team for architecture and technical systems—aligned schedules,
              shared models, and clear communication from schematic design through owner
              occupancy.
            </p>
          </div>
        )}

        <ul className="mt-14 grid gap-8 sm:grid-cols-2 lg:gap-10">
          {services.map((s) => (
            <li
              key={s.title}
              className="group rounded-sm border border-slate-200 bg-slate-50/50 p-8 transition hover:border-navy-200 hover:bg-white hover:shadow-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-sm border border-navy-100 bg-white text-navy-800 transition group-hover:border-navy-200 group-hover:bg-navy-50">
                {s.icon}
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold text-navy-950">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{s.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
