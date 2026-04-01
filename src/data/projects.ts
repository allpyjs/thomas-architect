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
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80",
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
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
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
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80",
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
    image:
      "https://images.unsplash.com/photo-1600047509358-9dc75507daeb?w=1200&q=80",
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
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
    alt: "Renovated residential interior with kitchen and living space",
  },
  {
    id: "6",
    title: "Pine Ridge Retreat",
    type: "Mountain second home",
    city: "Boulder",
    state: "CO",
    year: "2023",
    disciplines: ["architect", "structural", "mep"],
    image:
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3be6?w=1200&q=80",
    alt: "Contemporary mountain home nestled in trees",
  },
  {
    id: "7",
    title: "Grant Park Infill",
    type: "Urban new build",
    city: "Chicago",
    state: "IL",
    year: "2022",
    disciplines: ["architect", "structural", "mep"],
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80",
    alt: "Modern urban residence with pool and outdoor living",
  },
  {
    id: "8",
    title: "Willow Street Duplex",
    type: "Two-unit residential",
    city: "Santa Fe",
    state: "NM",
    year: "2024",
    disciplines: ["architect", "structural", "mep"],
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80",
    alt: "Suburban residential home with contemporary architecture",
  },
  {
    id: "9",
    title: "Cedar Ridge ADU",
    type: "Accessory dwelling unit",
    city: "Berkeley",
    state: "CA",
    year: "2024",
    disciplines: ["architect", "structural", "mep"],
    image:
      "https://images.unsplash.com/photo-1600585152919-c026d617b158?w=1200&q=80",
    alt: "Compact modern backyard dwelling with wood siding",
  },
  {
    id: "10",
    title: "Magnolia Row House",
    type: "Row house renovation",
    city: "Boston",
    state: "MA",
    year: "2023",
    disciplines: ["architect", "structural", "mep"],
    image:
      "https://images.unsplash.com/photo-1600607688160-eb0685f883ac?w=1200&q=80",
    alt: "Bright residential interior with stair and skylight",
  },
  {
    id: "11",
    title: "Silver Lake Pool House",
    type: "Pool house / pavilion",
    city: "Los Angeles",
    state: "CA",
    year: "2023",
    disciplines: ["architect", "mep"],
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80",
    alt: "Minimal poolside structure and terrace",
  },
  {
    id: "12",
    title: "Hudson View Fit-out",
    type: "Condo interior architecture",
    city: "Jersey City",
    state: "NJ",
    year: "2022",
    disciplines: ["architect", "mep"],
    image:
      "https://images.unsplash.com/photo-1600566752355-3579423c0ebf?w=1200&q=80",
    alt: "Open living space with views and modern furnishings",
  },
  {
    id: "13",
    title: "Locust Street Infill",
    type: "Urban new build",
    city: "Des Moines",
    state: "IA",
    year: "2024",
    disciplines: ["architect", "structural", "mep"],
    image:
      "https://images.unsplash.com/photo-1600585154083-e6293d9c0e7a?w=1200&q=80",
    alt: "Narrow modern home on urban lot",
  },
  {
    id: "14",
    title: "Hillside Residence",
    type: "Custom single-family",
    city: "Austin",
    state: "TX",
    year: "2023",
    disciplines: ["architect", "structural", "mep"],
    image:
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200&q=80",
    alt: "Multi-level modern home with glass walls",
  },
  {
    id: "15",
    title: "Gulfshore Villa",
    type: "Coastal residential",
    city: "Naples",
    state: "FL",
    year: "2024",
    disciplines: ["architect", "structural", "mep"],
    image:
      "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=1200&q=80",
    alt: "White modern villa with palm trees and terrace",
  },
  {
    id: "16",
    title: "Sun Valley Cabin",
    type: "Mountain second home",
    city: "Ketchum",
    state: "ID",
    year: "2021",
    disciplines: ["architect", "structural"],
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&q=80",
    alt: "Wood and glass cabin in a forested setting",
  },
  {
    id: "17",
    title: "Capitol Hill Victorian",
    type: "Historic renovation",
    city: "Washington",
    state: "DC",
    year: "2022",
    disciplines: ["architect", "structural", "mep"],
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a1?w=1200&q=80",
    alt: "Classic home facade with modern entry detail",
  },
  {
    id: "18",
    title: "Desert Courtyard House",
    type: "Desert contemporary",
    city: "Phoenix",
    state: "AZ",
    year: "2024",
    disciplines: ["architect", "structural", "mep"],
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&q=80",
    alt: "Single-story home with courtyard and desert landscaping",
  },
  {
    id: "19",
    title: "Queen Anne Remodel",
    type: "Interior-led renovation",
    city: "Seattle",
    state: "WA",
    year: "2023",
    disciplines: ["architect", "mep"],
    image:
      "https://images.unsplash.com/photo-1600585152919-d0bec964a8b4?w=1200&q=80",
    alt: "Kitchen and dining area with warm wood tones",
  },
  {
    id: "20",
    title: "Germantown Carriage House",
    type: "Adaptive reuse residential",
    city: "Nashville",
    state: "TN",
    year: "2022",
    disciplines: ["architect", "structural", "mep"],
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=80",
    alt: "Converted outbuilding as living space",
  },
  {
    id: "21",
    title: "Five Points Farmhouse",
    type: "Modern farmhouse",
    city: "Raleigh",
    state: "NC",
    year: "2023",
    disciplines: ["architect", "structural", "mep"],
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80",
    alt: "Contemporary home with pool and lawn",
  },
  {
    id: "22",
    title: "Lakefront Tower Residence",
    type: "High-rise residential fit-out",
    city: "Milwaukee",
    state: "WI",
    year: "2024",
    disciplines: ["architect", "mep"],
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=80",
    alt: "High-rise apartment interior with city views",
  },
];
