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
      "Work at Embraer that demonstrates Heitor’s ability to build digital solutions around Salesforce, analytics, and AI to support commercial strategy, improve visibility, and strengthen executive decision-making.",
    tags: [
      "Salesforce Administration",
      "Salesforce Development",
      "Power BI",
      "Artificial Intelligence",
      "Business Optimization",
      "Data Analysis",
      "Digital Tools",
    ],
  },
  {
    kind: "experience",
    slug: "contracts-administration-intern-embraer",
    href: "/experience/contracts-administration-intern-embraer",
    eyebrow: "EMBRAER",
    title: "Contracts Administration Intern",
    description:
      "An operations-focused experience at Embraer that demonstrates Heitor’s ability to turn complex data, reporting flows, and manual routines into structured systems, measurable savings, and faster business execution.",
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
    title: "Founder & Developer – Emma",
    description:
      "Emma reflects Heitor’s ability to lead from concept to execution — connecting AI, digital biomarkers, product strategy, and full-stack development to create a clinically meaningful health technology solution.",
    tags: [
      "Software Engineering",
      "Digital Health",
      "Artificial Intelligence",
      "Clinical Data Science",
      "Product Development",
      "Flask",
      "Python",
      "Next.js",
      "TypeScript",
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
      "A technical body of work that reflects Heitor’s depth in low-level computing, spanning compiler construction, instruction flow, machine code generation, processor design, and hardware implementation in Verilog.",
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
    meta: "Completed · 2022–2025",
    description:
      "A multidisciplinary foundation in mathematics, physics, computing, and engineering principles that strengthened Heitor’s analytical thinking, research ability, and systems-oriented approach to problem solving.",
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
    meta: "Ongoing · 2022–2027",
    description:
      "An ongoing engineering path focused on software development, embedded systems, artificial intelligence, and data analysis, reinforcing Heitor’s ability to integrate hardware, software, and applied problem-solving.",
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
      "A highly selective technology program that deepened Heitor’s exposure to artificial intelligence, connectivity, cloud, and the broader impact of emerging technologies.",
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
      "Low-code application training centered on internal tool creation, interface design, and process optimization through Microsoft’s ecosystem.",
  },
  {
    provider: "EMBRAER",
    title: "Copilot Studio",
    description:
      "Training in AI assistant creation, natural language workflows, and productivity-oriented automation within Microsoft environments.",
  },
  {
    provider: "Curso em Vídeo",
    title: "Python Programming",
    description:
      "A practical programming foundation covering data structures, functions, file handling, and object-oriented programming for structured software development.",
  },
];
