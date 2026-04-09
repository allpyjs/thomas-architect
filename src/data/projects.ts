export type ProjectDiscipline = "architect" | "structural" | "mep";

export const DISCIPLINE_LABELS: Record<ProjectDiscipline, string> = {
  architect: "Architect",
  structural: "Structural",
  mep: "MEP",
};

export type Project = {
  id: string;
  title: string;
  /** Building / commission typology (e.g. custom single-family). */
  type: string;
  city: string;
  /** USPS state abbreviation (e.g. OR, MA). */
  state: string;
  year: string;
  /** Disciplines the firm provided on this commission. */
  disciplines: ProjectDiscipline[];
  image: string;
  alt: string;
};

/** Portfolio emphasizes custom homes, estates, renovations, and residential infill across the USA. */
export const projects: Project[] = [
  {
    id: "1",
    title: "Aspen Lane Residence",
    type: "Custom single-family",
    city: "Portland",
    state: "OR",
    year: "2024",
    disciplines: ["architect", "structural", "mep"],
    image: "/projects/Aspen Lane Residence.jpg",
    alt: "Contemporary single-family home with large windows and landscaped yard",
  },
  {
    id: "2",
    title: "Shoreline House",
    type: "Coastal residential",
    city: "Gloucester",
    state: "MA",
    year: "2023",
    disciplines: ["architect", "structural", "mep"],
    image: "/projects/Shoreline House.jpg",
    alt: "Modern coastal home exterior with pool and terrace",
  },
  {
    id: "3",
    title: "Laurel Court Estate",
    type: "Luxury residential",
    city: "Park City",
    state: "UT",
    year: "2024",
    disciplines: ["architect", "structural"],
    image: "/projects/Laurel Court Estate.jpg",
    alt: "Open-plan luxury living room with high ceilings and natural light",
  },
  {
    id: "4",
    title: "Mercer Street Townhomes",
    type: "Townhome",
    city: "Atlanta",
    state: "GA",
    year: "2023",
    disciplines: ["architect", "structural", "mep"],
    image: "/projects/Mercer Street Townhomes.jpg",
    alt: "Row of modern townhomes with clean facade lines",
  },
  {
    id: "5",
    title: "Oak Hollow Renovation",
    type: "Whole-home renovation",
    city: "Minneapolis",
    state: "MN",
    year: "2022",
    disciplines: ["architect", "mep"],
    image: "/projects/Oak Hollow Renovation.jpg",
    alt: "Renovated residential interior with kitchen and living space",
  },
  {
    id: "6",
    title: "Grant Park Infill",
    type: "Urban new build",
    city: "Chicago",
    state: "IL",
    year: "2022",
    disciplines: ["architect", "structural", "mep"],
    image: "/projects/Grant Park Infill.jpg",
    alt: "Modern urban residence with pool and outdoor living",
  },
  {
    id: "7",
    title: "Willow Street Duplex",
    type: "Two-unit residential",
    city: "Santa Fe",
    state: "NM",
    year: "2024",
    disciplines: ["architect", "structural", "mep"],
    image: "/projects/Willow Street Duplex.jpg",
    alt: "Suburban residential home with contemporary architecture",
  },
  {
    id: "8",
    title: "Silver Lake Pool House",
    type: "Pool house / pavilion",
    city: "Los Angeles",
    state: "CA",
    year: "2023",
    disciplines: ["architect", "mep"],
    image: "/projects/Silver Lake Pool House.jpg",
    alt: "Minimal poolside structure and terrace",
  },
  {
    id: "9",
    title: "Hillside Residence",
    type: "Custom single-family",
    city: "Austin",
    state: "TX",
    year: "2023",
    disciplines: ["architect", "structural", "mep"],
    image: "/projects/Hillside Residence.jpg",
    alt: "Multi-level modern home with glass walls",
  },
  {
    id: "10",
    title: "Gulfshore Villa",
    type: "Coastal residential",
    city: "Naples",
    state: "FL",
    year: "2024",
    disciplines: ["architect", "structural", "mep"],
    image: "/projects/Gulfshore Villa.jpg",
    alt: "White modern villa with palm trees and terrace",
  },
  {
    id: "11",
    title: "Sun Valley Cabin",
    type: "Mountain second home",
    city: "Ketchum",
    state: "ID",
    year: "2021",
    disciplines: ["architect", "structural"],
    image: "/projects/Sun Valley Cabin.jpg",
    alt: "Wood and glass cabin in a forested setting",
  },
  {
    id: "12",
    title: "Desert Courtyard House",
    type: "Desert contemporary",
    city: "Phoenix",
    state: "AZ",
    year: "2024",
    disciplines: ["architect", "structural", "mep"],
    image: "/projects/Desert Courtyard House.jpg",
    alt: "Single-story home with courtyard and desert landscaping",
  },
  {
    id: "13",
    title: "Germantown Carriage House",
    type: "Adaptive reuse residential",
    city: "Nashville",
    state: "TN",
    year: "2022",
    disciplines: ["architect", "structural", "mep"],
    image: "/projects/Germantown Carriage House.jpg",
    alt: "Converted outbuilding as living space",
  },
  {
    id: "14",
    title: "Five Points Farmhouse",
    type: "Modern farmhouse",
    city: "Raleigh",
    state: "NC",
    year: "2023",
    disciplines: ["architect", "structural", "mep"],
    image: "/projects/Five Points Farmhouse.jpg",
    alt: "Contemporary home with pool and lawn",
  },
];
