import { cache } from "react";

import { defaultHomepageSettings } from "@/lib/constants/site-defaults";
import type {
  Achievement,
  DetailSection,
  Experience,
  HomepagePayload,
  Post,
  Project,
} from "@/types/domain";

const publishedAt = "2026-04-09T00:00:00.000Z";

function detailContent(
  overview: string,
  responsibilities: string[],
  technologies: string[],
  impact: string[],
): DetailSection[] {
  return [
    {
      key: "context",
      heading: "Overview",
      body: overview,
    },
    {
      key: "what-i-did",
      heading: "Responsibilities",
      body: "Selected responsibilities and areas of contribution.",
      bullets: responsibilities,
    },
    {
      key: "technologies",
      heading: "Technologies and Focus",
      body: "Tools and areas connected to this work.",
      bullets: technologies,
    },
    {
      key: "impact",
      heading: "Impact",
      body: "Selected outcomes and areas of value.",
      bullets: impact,
    },
  ];
}

export const experiences: Experience[] = [
  {
    id: "experience-sales-digital-tools-intern-embraer",
    slug: "sales-digital-tools-intern-embraer",
    title: "Sales Digital Tools Intern",
    organization: "Embraer",
    category: "professional",
    location: "Sao Jose dos Campos - SP, Brazil",
    summary:
      "Work at Embraer that demonstrates Heitor's ability to build digital solutions around Salesforce, analytics, and AI to support commercial strategy, improve visibility, and strengthen executive decision-making.",
    responsibilities: [
      "Develops Salesforce-based solutions",
      "Builds Power BI dashboards",
      "Applies AI tools for business optimization",
      "Supports corporate performance management in strategic initiatives",
    ],
    technologies: [
      "Salesforce Administration",
      "Salesforce Development",
      "Power BI",
      "Artificial Intelligence",
      "Business Optimization",
      "Data Analysis",
      "Digital Tools",
    ],
    impact: [
      "Contributes to corporate-level decision-making",
      "Supports sales enablement and process improvement",
      "Works with executive-level performance management",
    ],
    timeframeLabel: "Jan 2026 - Present",
    startDate: "2026-01-01",
    endDate: null,
    isFeatured: true,
    featureRank: 1,
    isPublished: true,
    publishedAt,
    detailContent: detailContent(
      "At Embraer, Heitor works on digital tools that help improve business performance and support strategic sales processes. His work combines Salesforce, analytics, and AI to create practical solutions that increase visibility, efficiency, and competitiveness.",
      [
        "Develops Salesforce-based solutions",
        "Builds Power BI dashboards",
        "Applies AI tools for business optimization",
        "Supports corporate performance management in strategic initiatives",
      ],
      [
        "Salesforce Administration",
        "Salesforce Development",
        "Power BI",
        "Artificial Intelligence",
        "Business Optimization",
        "Data Analysis",
        "Digital Tools",
      ],
      [
        "Contributes to corporate-level decision-making",
        "Supports sales enablement and process improvement",
        "Works with executive-level performance management",
      ],
    ),
    imagePath: "featured-embraer-sales-cover.jpg",
    createdAt: publishedAt,
    updatedAt: publishedAt,
  },
  {
    id: "experience-contracts-administration-intern-embraer",
    slug: "contracts-administration-intern-embraer",
    title: "Contracts Administration Intern",
    organization: "Embraer",
    category: "professional",
    location: "Sao Jose dos Campos - SP, Brazil",
    summary:
      "An operations-focused experience at Embraer that demonstrates Heitor's ability to turn complex data, reporting flows, and manual routines into structured systems, measurable savings, and faster business execution.",
    responsibilities: [
      "Performed data analysis, controls, and calculations",
      "Built dashboards and optimized spreadsheets",
      "Automated workflows and recurring processes",
      "Supported internal and external stakeholders",
      "Improved technical reporting and operational visibility",
    ],
    technologies: [
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
    impact: [
      "Delivered 9 process improvement projects in 3 months",
      "Saved more than USD 23k in total",
      "Automated 5+ recurring workflows",
      "Improved reporting speed by around 40%",
    ],
    timeframeLabel: "Feb 2025 - Dec 2025",
    startDate: "2025-02-01",
    endDate: "2025-12-31",
    isFeatured: true,
    featureRank: 2,
    isPublished: true,
    publishedAt,
    detailContent: detailContent(
      "In the Contracts area at Embraer, Heitor transformed operational routines into more structured, faster, and more transparent processes. He built dashboards, optimized spreadsheets, automated repetitive workflows, and improved the quality of technical reporting.",
      [
        "Performed data analysis, controls, and calculations",
        "Built dashboards and optimized spreadsheets",
        "Automated workflows and recurring processes",
        "Supported internal and external stakeholders",
        "Improved technical reporting and operational visibility",
      ],
      [
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
      [
        "Delivered 9 process improvement projects in 3 months",
        "Saved more than USD 23k in total",
        "Automated 5+ recurring workflows",
        "Improved reporting speed by around 40%",
      ],
    ),
    imagePath: "featured-embraer-contracts-cover.jpg",
    createdAt: publishedAt,
    updatedAt: publishedAt,
  },
  {
    id: "experience-emma-founder-developer",
    slug: "emma-founder-developer",
    title: "Founder & Developer - Emma",
    organization: "Emma",
    category: "innovation",
    location: "Sao Paulo - SP, Brazil",
    summary:
      "Emma reflects Heitor's ability to lead from concept to execution, connecting AI, digital biomarkers, product strategy, and full-stack development to create a clinically meaningful health technology solution.",
    responsibilities: [
      "Leads product and technical development",
      "Defines the scientific and strategic roadmap",
      "Connects clinical research with software design",
      "Develops a scalable platform using modern web technologies",
    ],
    technologies: [
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
    impact: [
      "Built an AI-driven platform tested with simulated datasets of 100+ patients",
      "Helped position Emma as a recognized healthtech project in national programs",
    ],
    timeframeLabel: "2025 - Current",
    startDate: "2025-01-01",
    endDate: null,
    isFeatured: true,
    featureRank: 3,
    isPublished: true,
    publishedAt,
    detailContent: detailContent(
      "Emma sits at the intersection of engineering, healthcare, data, and real-world impact. As founder and developer, Heitor has led the technical direction of the platform while shaping its scientific and strategic foundation.",
      [
        "Leads product and technical development",
        "Defines the scientific and strategic roadmap",
        "Connects clinical research with software design",
        "Develops a scalable platform using modern web technologies",
      ],
      [
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
      [
        "Built an AI-driven platform tested with simulated datasets of 100+ patients",
        "Helped position Emma as a recognized healthtech project in national programs",
      ],
    ),
    imagePath: "featured-emma-cover.jpg",
    createdAt: publishedAt,
    updatedAt: publishedAt,
  },
  {
    id: "experience-ai-implementation-summit-crm-asone-2026",
    slug: "ai-implementation-summit-crm-asone-2026",
    title: "Summit CRM AsOne 2026 - AI Implementation",
    organization: "Embraer",
    category: "professional",
    location: "Sao Jose dos Campos - SP, Brazil",
    summary:
      "A high-visibility Embraer initiative that shows Heitor applying AI to faster understanding, clearer follow-through, and better strategic coordination.",
    responsibilities: [
      "Developed AI workflows for executive-level sessions",
      "Generated summaries and insights",
      "Supported leadership interactions",
      "Helped structure action items and follow-ups",
    ],
    technologies: [
      "Artificial Intelligence",
      "Data Analysis",
      "Communication",
      "NLP",
      "Information Structuring",
    ],
    impact: [
      "Enabled faster knowledge consolidation",
      "Supported strategic discussions in real time",
      "Contributed in a high-visibility corporate environment",
    ],
    timeframeLabel: "Mar 2026",
    startDate: "2026-03-01",
    endDate: "2026-03-31",
    isFeatured: true,
    featureRank: 4,
    isPublished: true,
    publishedAt,
    detailContent: detailContent(
      "During Summit CRM AsOne 2026, Heitor helped apply AI in a practical corporate setting, supporting transcription, synthesis, and decision-oriented information flow during executive sessions.",
      [
        "Developed AI workflows for executive-level sessions",
        "Generated summaries and insights",
        "Supported leadership interactions",
        "Helped structure action items and follow-ups",
      ],
      [
        "Artificial Intelligence",
        "Data Analysis",
        "Communication",
        "NLP",
        "Information Structuring",
      ],
      [
        "Enabled faster knowledge consolidation",
        "Supported strategic discussions in real time",
        "Contributed in a high-visibility corporate environment",
      ],
    ),
    imagePath: "featured-embraer-cover.jpg",
    createdAt: publishedAt,
    updatedAt: publishedAt,
  },
];

export const projects: Project[] = [
  {
    id: "project-emma-digital-health-platform",
    slug: "emma-digital-health-platform",
    title: "Emma",
    category: "ai-driven-system",
    summary:
      "A digital health platform for multiple sclerosis monitoring that connects AI, product thinking, and clinically relevant problem-solving.",
    context:
      "Emma was created to explore more continuous, objective, and scalable ways of monitoring neurological progression beyond isolated clinical observations.",
    problem:
      "Monitoring chronic neurological conditions is often limited by sparse evaluations and subjective interpretation.",
    solution:
      "Emma combines a Flask backend and a Next.js frontend to support the collection, organization, and interpretation of digital biomarkers through a user-centered product approach.",
    technologies: [
      "Flask",
      "Python",
      "Next.js",
      "TypeScript",
      "Digital Biomarkers",
      "AI",
      "Product Design",
      "Clinical Data Science",
    ],
    impact: [
      "Developed an AI-driven platform tested with simulated datasets of 100+ patients and recognized in national innovation and healthtech programs.",
    ],
    learnings: [
      "Emma reflects the importance of building technology that is technically strong, clinically meaningful, understandable, and scalable.",
    ],
    isFeatured: false,
    featureRank: 1,
    isPublished: true,
    publishedAt,
    relatedExperienceId: "experience-emma-founder-developer",
    imagePath: "featured-emma-cover.jpg",
    createdAt: publishedAt,
    updatedAt: publishedAt,
  },
  {
    id: "project-eye-tracking-system",
    slug: "eye-tracking-system",
    title: "Eye-Tracking System",
    category: "research",
    summary:
      "A computer vision project built for Emma that translates technical precision into meaningful health applications.",
    context:
      "The project was developed as part of Emma to capture visual biomarkers in a reliable and user-friendly way.",
    problem:
      "Eye-tracking for health applications needs to be responsive, adaptable to different users and screens, and understandable during calibration and use.",
    solution:
      "The system uses face detection to crop and center the user, calibration routines to adapt to different screen sizes, and pupil tracking to provide visual feedback and precision analysis.",
    technologies: ["Computer Vision", "Human-Computer Interaction", "Signal Processing", "Python", "AI Systems"],
    impact: ["Implemented a real-time tracking pipeline running at 30+ FPS."],
    learnings: [
      "This project reinforced the value of combining precision, performance, and usability in health-oriented interfaces.",
    ],
    isFeatured: true,
    featureRank: 5,
    isPublished: true,
    publishedAt,
    relatedExperienceId: null,
    imagePath: "featured-research-cover.jpg",
    createdAt: publishedAt,
    updatedAt: publishedAt,
  },
  {
    id: "project-c-minus-compiler",
    slug: "c-minus-compiler",
    title: "Compiler & ARM Processor Projects",
    category: "compiler",
    summary:
      "A technical body of work spanning compiler construction, instruction flow, machine code generation, processor design, and hardware implementation in Verilog.",
    context:
      "This body of work connects compiler construction and processor design into a coherent low-level systems track.",
    problem:
      "Low-level systems engineering requires precision across source parsing, code generation, instruction flow, control logic, and execution behavior.",
    solution:
      "The work spans lexical and syntactic analysis, semantic validation, intermediate representation, assembly translation, machine code generation, and ARM-oriented processor design in Verilog.",
    technologies: [
      "Compiler Design",
      "Computer Architecture",
      "Systems Programming",
      "Low-Level Programming",
      "ARM Architecture",
      "Verilog",
      "Digital Logic Design",
      "Embedded Systems",
    ],
    impact: [
      "Built a full compiler capable of handling the complete C- test suite.",
      "Implemented a functional 32-bit processor capable of executing a custom instruction set verified through simulation.",
    ],
    learnings: [
      "This work strengthened low-level reasoning across both software and hardware.",
    ],
    isFeatured: true,
    featureRank: 4,
    isPublished: true,
    publishedAt,
    relatedExperienceId: null,
    imagePath: "featured-compiler-cover.jpg",
    createdAt: publishedAt,
    updatedAt: publishedAt,
  },
  {
    id: "project-timelapsecreator",
    slug: "timelapsecreator",
    title: "TimeLapseCreator",
    category: "tooling",
    summary:
      "A Python-based tool that automates smooth 3D-printing timelapse generation from image sequences.",
    context:
      "The project was built from a personal interest in 3D printing, content creation, and practical automation.",
    problem:
      "Creating clean 3D-printing timelapses usually requires manual editing and better equipment than many makers have access to.",
    solution:
      "The tool automates image assembly, stabilization, frame timing, filtering, and output generation to simplify the workflow and improve consistency.",
    technologies: ["Python", "Automation", "3D Printing", "Computer Vision", "Process Optimization"],
    impact: [
      "Reduced editing time by around 80% while making timelapse generation more accessible for low-budget setups.",
    ],
    learnings: [
      "This project shows how engineering can support creativity, accessibility, and everyday maker workflows.",
    ],
    isFeatured: false,
    featureRank: 8,
    isPublished: true,
    publishedAt,
    relatedExperienceId: null,
    imagePath: "personal-3d-printing.jpg",
    createdAt: publishedAt,
    updatedAt: publishedAt,
  },
];

export const achievements: Achievement[] = [
  {
    id: "achievement-harvard-brazil-hackathon",
    title: "Winner - Harvard Brazil Hackathon",
    organization: "Emma",
    summary:
      "Won the Harvard Brazil Hackathon with Emma, a digital health platform focused on multiple sclerosis monitoring through AI and digital biomarkers.",
    impact: "Recognized among 60+ national teams for clinical relevance, innovation, and scalability.",
    timeframeLabel: "May 2025",
    imagePath: "featured-emma-cover.jpg",
    isFeatured: true,
    isPublished: true,
    publishedAt,
    sortOrder: 1,
    createdAt: publishedAt,
    updatedAt: publishedAt,
  },
  {
    id: "achievement-huawei-seeds-2025",
    title: "Selected Participant - Huawei Seeds for the Future 2025",
    organization: "Huawei",
    summary:
      "Selected as one of 50 young talents from Brazil for Huawei's global technology program focused on AI, 5G, cloud, innovation, and sustainability.",
    impact: "Completed all mandatory and elective modules with strong evaluation performance.",
    timeframeLabel: "Jun 2025",
    imagePath: null,
    isFeatured: true,
    isPublished: true,
    publishedAt,
    sortOrder: 2,
    createdAt: publishedAt,
    updatedAt: publishedAt,
  },
  {
    id: "achievement-incube-acceleration-program",
    title: "Participant - In.Cube Acceleration Program",
    organization: "InovaHC / HCFMUSP",
    summary:
      "Participated in the In.Cube healthtech acceleration program with Emma, refining business model, clinical applicability, scalability, and regulatory direction.",
    impact: "Strengthened Emma's positioning inside a real healthcare innovation ecosystem.",
    timeframeLabel: "Aug 2025 - Apr 2026",
    imagePath: "featured-emma-cover.jpg",
    isFeatured: true,
    isPublished: true,
    publishedAt,
    sortOrder: 4,
    createdAt: publishedAt,
    updatedAt: publishedAt,
  },
];

export const posts: Post[] = [
  {
    id: "post-building-emma-across-health-and-engineering",
    slug: "building-emma-across-health-and-engineering",
    title: "Building Emma across health, data, and engineering",
    excerpt:
      "A look at how Emma brings together AI, digital biomarkers, and product thinking to support more continuous neurological monitoring.",
    content:
      "Emma has become one of the clearest expressions of the kind of work I care about: building systems that connect technical depth with real-world meaning. Working on the platform has pushed me to think not only about software and AI, but also about usability, clinical relevance, and how to turn complex signals into something useful and understandable.",
    category: "project-update",
    relatedSection: "projects",
    relatedProjectSlug: "emma-digital-health-platform",
    publishedAt,
    isPublished: true,
    coverImagePath: "featured-emma-cover.jpg",
    createdAt: publishedAt,
    updatedAt: publishedAt,
  },
  {
    id: "post-why-i-like-building-across-layers",
    slug: "why-i-like-building-across-layers",
    title: "Why I like building across layers",
    excerpt:
      "From dashboards and automation to compilers and processors, I enjoy understanding systems from multiple levels.",
    content:
      "One thing that connects many of my projects is the desire to understand how things work across layers. Sometimes that means improving business processes with data and AI. Other times, it means building a compiler or a processor from scratch. I like that contrast because it keeps engineering grounded, flexible, and honest.",
    category: "learning",
    relatedSection: "how-i-think",
    relatedProjectSlug: null,
    publishedAt,
    isPublished: true,
    coverImagePath: null,
    createdAt: publishedAt,
    updatedAt: publishedAt,
  },
  {
    id: "post-applying-ai-in-executive-contexts",
    slug: "applying-ai-in-executive-contexts",
    title: "Applying AI in executive contexts",
    excerpt:
      "A recent experience at Embraer showed me how AI can support fast understanding, structured follow-up, and decision-oriented communication.",
    content:
      "During Summit CRM AsOne 2026, I worked on AI-supported flows for transcription, summarization, and action tracking in a high-visibility corporate environment. It was a valuable reminder that good AI work is not only about models. It is also about timing, clarity, reliability, and making information easier to use when it matters most.",
    category: "learning",
    relatedSection: "experience",
    relatedProjectSlug: null,
    publishedAt,
    isPublished: true,
    coverImagePath: "featured-embraer-cover.jpg",
    createdAt: publishedAt,
    updatedAt: publishedAt,
  },
];

function sortByFeatureRank<T extends { featureRank: number | null }>(items: T[]) {
  return [...items].sort((left, right) => (left.featureRank ?? 999) - (right.featureRank ?? 999));
}

function sortByNewest<T extends { publishedAt: string | null; createdAt: string }>(items: T[]) {
  return [...items].sort((left, right) =>
    (right.publishedAt ?? right.createdAt).localeCompare(left.publishedAt ?? left.createdAt),
  );
}

export const getHomepagePayload = cache(async (): Promise<HomepagePayload> => ({
  settings: defaultHomepageSettings,
  featuredExperiences: sortByFeatureRank(experiences.filter((entry) => entry.isFeatured)),
  featuredProjects: sortByFeatureRank(projects.filter((entry) => entry.isFeatured)),
  achievements: achievements
    .filter((entry) => entry.isPublished && entry.isFeatured)
    .sort((left, right) => left.sortOrder - right.sortOrder),
  latestPosts: sortByNewest(posts.filter((entry) => entry.isPublished)).slice(0, 3),
}));

export const getExperienceSummaryData = cache(async () => ({
  experiences: sortByFeatureRank(experiences.filter((entry) => entry.isPublished)),
  projects: sortByFeatureRank(projects.filter((entry) => entry.isPublished)),
  achievements: achievements
    .filter((entry) => entry.isPublished)
    .sort((left, right) => left.sortOrder - right.sortOrder),
}));

export const getExperienceBySlug = cache(async (slug: string) => {
  return experiences.find((entry) => entry.slug === slug && entry.isPublished) ?? null;
});

export const getProjectBySlug = cache(async (slug: string) => {
  return projects.find((entry) => entry.slug === slug && entry.isPublished) ?? null;
});

export const getPublishedPosts = cache(async () => {
  return sortByNewest(posts.filter((entry) => entry.isPublished));
});

export const getPostBySlug = cache(async (slug: string) => {
  return posts.find((entry) => entry.slug === slug && entry.isPublished) ?? null;
});

export const getPublicDetailSlugs = cache(async () => ({
  experiences: experiences.filter((entry) => entry.isPublished).map((entry) => entry.slug),
  projects: projects.filter((entry) => entry.isPublished).map((entry) => entry.slug),
  posts: posts.filter((entry) => entry.isPublished).map((entry) => entry.slug),
}));
