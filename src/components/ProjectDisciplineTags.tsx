import { DISCIPLINE_LABELS, type ProjectDiscipline } from "@/data/projects";

const DISPLAY_ORDER: ProjectDiscipline[] = ["architect", "structural", "mep"];

type Variant = "onDark" | "onLight";

type ProjectDisciplineTagsProps = {
  disciplines: ProjectDiscipline[];
  variant?: Variant;
};

function orderedDisciplines(list: ProjectDiscipline[]) {
  return [...list].sort(
    (a, b) => DISPLAY_ORDER.indexOf(a) - DISPLAY_ORDER.indexOf(b),
  );
}

export function ProjectDisciplineTags({
  disciplines,
  variant = "onLight",
}: ProjectDisciplineTagsProps) {
  const chip =
    variant === "onDark"
      ? "border-white/35 bg-white/10 text-white"
      : "border-slate-200 bg-white text-navy-800";

  const ordered = orderedDisciplines(disciplines);

  return (
    <ul
      className="mt-3 flex flex-wrap gap-1.5"
      aria-label="Disciplines provided"
    >
      {ordered.map((d) => (
        <li key={d}>
          <span
            className={`inline-block rounded-sm border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${chip}`}
          >
            {DISCIPLINE_LABELS[d]}
          </span>
        </li>
      ))}
    </ul>
  );
}
