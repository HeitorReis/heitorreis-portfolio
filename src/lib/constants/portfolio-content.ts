export interface CuratedWorkEntry {
  kind: "experience" | "project";
  slug: string;
  sourceSlugs?: readonly string[];
  href: string;
  eyebrow: string;
  title: string;
  description: string;
  tags: readonly string[];
}

export interface AcademicPathEntry {
  institution: string;
  title: string;
  meta: string;
  description: string;
  tags: readonly string[];
}

export interface TechnicalTrainingEntry {
  provider: string;
  title: string;
  description: string;
}

export const selectedWorkEntries: CuratedWorkEntry[] = [
  {
    kind: "experience",
    slug: "sales-digital-tools-intern-embraer",
    href: "/experience/sales-digital-tools-intern-embraer",
    eyebrow: "EMBRAER",
    title: "Sales Digital Tools Intern",
    description:
      "Builds Salesforce, analytics, and AI-driven solutions to support strategic sales processes, improve business visibility, optimize workflows, and strengthen executive-level decision-making.",
    tags: [
      "Salesforce Administration",
      "Salesforce Development",
      "Power BI",
      "Artificial Intelligence",
      "Business Optimization",
      "Data Analysis",
      "Digital Tools",
      "CRM Systems",
      "Executive Communication",
    ],
  },
  {
    kind: "experience",
    slug: "contracts-administration-intern-embraer",
    href: "/experience/contracts-administration-intern-embraer",
    eyebrow: "EMBRAER",
    title: "Contracts Administration Intern",
    description:
      "Transformed contract administration routines into structured, automated, and transparent processes through data analysis, dashboards, spreadsheet optimization, reporting, and workflow automation.",
    tags: [
      "Data Analysis",
      "Business Intelligence",
      "Power BI",
      "Excel",
      "Process Automation",
      "Reporting",
      "Systems Optimization",
      "Stakeholder Management",
      "Data Visualization",
      "Corporate Analytics",
    ],
  },
  {
    kind: "experience",
    slug: "emma-founder-developer",
    href: "/experience/emma-founder-developer",
    eyebrow: "EMMA",
    title: "Founder & Developer - Emma Digital Health",
    description:
      "Leads the development of Emma, a mobile-first digital health platform focused on monitoring multiple sclerosis through AI, digital biomarkers, gamified engagement, and longitudinal patient interaction.",
    tags: [
      "Flutter",
      "Dart",
      "Digital Health",
      "Artificial Intelligence",
      "Digital Biomarkers",
      "Gamification",
      "Product Development",
      "Clinical Data Science",
      "Mobile Development",
      "Human-Computer Interaction",
    ],
  },
  {
    kind: "project",
    slug: "c-minus-compiler",
    sourceSlugs: ["c-minus-compiler", "arm-based-processor-verilog"],
    href: "/projects/c-minus-compiler",
    eyebrow: "LOW-LEVEL SYSTEMS",
    title: "Compiler & ARM Processor Projects",
    description:
      "A technical body of work that reflects Heitor's depth in low-level computing, spanning compiler construction, instruction flow, machine code generation, processor design, and hardware implementation in Verilog.",
    tags: [
      "Compiler Design",
      "Computer Architecture",
      "Systems Programming",
      "Low-Level Programming",
      "ARM Architecture",
      "Verilog",
      "Digital Logic Design",
      "Embedded Systems",
    ],
  },
];

export const academicPathEntries: AcademicPathEntry[] = [
  {
    institution: "UNIFESP",
    title: "B.Sc. in Science and Technology",
    meta: "Completed - 2022-2025",
    description:
      "A multidisciplinary foundation in mathematics, physics, computing, and engineering principles that strengthened Heitor's analytical thinking, research ability, and systems-oriented approach to problem solving.",
    tags: [
      "Mathematics",
      "Physics",
      "Computing",
      "Engineering Fundamentals",
      "Research",
    ],
  },
  {
    institution: "UNIFESP",
    title: "B.Sc. in Computer Engineering",
    meta: "Ongoing - 2022-2027",
    description:
      "An ongoing engineering path focused on software development, embedded systems, artificial intelligence, and data analysis, reinforcing Heitor's ability to integrate hardware, software, and applied problem-solving.",
    tags: [
      "Software Engineering",
      "Embedded Systems",
      "Artificial Intelligence",
      "Data Analysis",
      "Systems Integration",
    ],
  },
];

export const technicalTrainingEntries: TechnicalTrainingEntry[] = [
  {
    provider: "Huawei",
    title: "Seeds for the Future 2025",
    description:
      "A national-level technology development program focused on AI, 5G, cloud, and digital transformation, where Heitor was selected as one of 50 participants from Brazil.",
  },
  {
    provider: "Huawei",
    title: "Seeds for the Future 2024",
    description:
      "A highly selective technology program that deepened Heitor's exposure to artificial intelligence, connectivity, cloud, and the broader impact of emerging technologies.",
  },
  {
    provider: "Huawei",
    title: "HCIA-AI Training",
    description:
      "Training focused on artificial intelligence fundamentals, machine learning, neural networks, and practical AI applications in real-world environments.",
  },
  {
    provider: "Huawei",
    title: "HCIA-Cloud Training",
    description:
      "Coursework covering cloud architecture, virtualization, storage, and scalable infrastructure design for modern digital systems.",
  },
  {
    provider: "Huawei",
    title: "HCIA-5G Training",
    description:
      "Technical training in 5G architecture, connectivity systems, spectrum, and industrial applications of next-generation telecommunications.",
  },
  {
    provider: "EMBRAER",
    title: "Advanced Power BI",
    description:
      "Specialized training in data modeling, DAX, dashboard design, and analytical visualization to support more efficient and scalable reporting.",
  },
  {
    provider: "EMBRAER",
    title: "Power Automate",
    description:
      "Training focused on workflow automation and integration across digital tools, improving operational efficiency and reducing manual work.",
  },
  {
    provider: "EMBRAER",
    title: "Power Apps",
    description:
      "Low-code application training centered on internal tool creation, interface design, and process optimization through Microsoft's ecosystem.",
  },
  {
    provider: "EMBRAER",
    title: "Copilot Studio",
    description:
      "Training in AI assistant creation, natural language workflows, and productivity-oriented automation within Microsoft environments.",
  },
  {
    provider: "Curso em Video",
    title: "Python Programming",
    description:
      "A practical programming foundation covering data structures, functions, file handling, and object-oriented programming for structured software development.",
  },
];
