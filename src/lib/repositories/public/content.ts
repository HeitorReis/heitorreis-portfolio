import { cache } from "react";

import { defaultHomepageSettings } from "@/lib/constants/site-defaults";
import type {
  DetailSection,
  Experience,
  HomepagePayload,
  Milestone,
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
    technologies: [
      "Computer Vision",
      "Human-Computer Interaction",
      "Signal Processing",
      "Python",
      "AI Systems",
    ],
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
    technologies: [
      "Python",
      "Automation",
      "3D Printing",
      "Computer Vision",
      "Process Optimization",
    ],
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

export const milestones: Milestone[] = [
  {
    id: "harvard-health-hackathon-2025",
    category: "Recognition",
    title: "Winner — Harvard Brazil Hackathon",
    organization: "Harvard Health Systems Innovation / Emma",
    location: "São Paulo, Brazil",
    startDate: "2025-05-01",
    displayDate: "May 2025",
    description:
      "Co-led the development of Emma, an AI-enabled digital health platform that uses digital biomarkers to support multiple sclerosis monitoring. The work brought software development, artificial intelligence, clinical research, and user-centered product design into a functional prototype.",
    contribution:
      "Technical development, scientific validation, product strategy, and final presentation.",
    evidence: [
      { label: "First place", context: "among 60+ national teams" },
      {
        label: "Functional prototype",
        context: "digital health platform delivered",
      },
      {
        label: "Jury presentation",
        context: "technical and product evaluation",
      },
    ],
    featured: true,
    sortOrder: 1,
  },
  {
    id: "municip-ai-congress-2024",
    category: "Research",
    title: "AI Research Presented at a National Congress",
    organization: "CEMADEN, FAPESP and ABRHidro",
    location: "Curitiba, Paraná, Brazil",
    startDate: "2024-10-01",
    displayDate: "October 2024",
    description:
      "Presented research applying FP-Growth to public-management data from Brazilian municipalities. The work identified interpretable association rules and demonstrated how artificial intelligence can support large-scale socio-environmental analysis.",
    contribution:
      "Data preprocessing, model implementation, rule extraction, validation, interpretation, and scientific presentation.",
    evidence: [
      {
        label: "5,571 municipalities",
        context: "records in the research dataset",
      },
      { label: "159 attributes", context: "processed for analysis" },
      {
        label: "Four validated rules",
        context: "association-rule mining results",
      },
      { label: "National congress", context: "original research presented" },
    ],
    sortOrder: 2,
  },
  {
    id: "federal-revenue-hackathon-2025",
    category: "Leadership",
    title: "Co-organizer — First Federal Revenue Hackathon",
    organization: "UNIFESP and Receita Federal do Brasil",
    location: "São José dos Campos, São Paulo, Brazil",
    startDate: "2025-05-01",
    displayDate: "May 2025",
    description:
      "Helped organize the UNIFESP hub by coordinating logistics, volunteers, mentors, institutional relationships, and event operations under a compressed preparation schedule.",
    contribution:
      "Event operations, volunteer coordination, mentor engagement, partnership support, logistics, and stakeholder alignment.",
    evidence: [
      {
        label: "Approximately 300 participants",
        context: "at the UNIFESP hub",
      },
      { label: "1,500+ participants", context: "across six hubs program-wide" },
      { label: "20+ volunteers and mentors", context: "coordinated locally" },
    ],
    sortOrder: 3,
  },
  {
    id: "huawei-seeds-2025",
    category: "Recognition",
    title: "Selected — Huawei Seeds for the Future 2025",
    organization: "Huawei",
    location: "Brazil, remote",
    startDate: "2025-06-01",
    displayDate: "June 2025",
    description:
      "Selected for Huawei’s national technology-development program and completed learning paths covering artificial intelligence, cloud computing, 5G, innovation, digital transformation, and sustainability.",
    contribution:
      "Completed mandatory and elective technical modules and participated in evaluated learning activities.",
    evidence: [
      { label: "One of 50", context: "participants selected in Brazil" },
      { label: "AI, cloud and 5G", context: "technical learning paths" },
      { label: "Full completion", context: "mandatory and elective modules" },
    ],
    sortOrder: 4,
  },
  {
    id: "emma-incube-hospitalar-2026",
    category: "Product",
    title: "Emma — From Acceleration to Market-Facing Showcase",
    organization: "Emma, InovaHC / HCFMUSP and Hospitalar",
    location: "São Paulo, Brazil",
    startDate: "2025-08-01",
    endDate: "2026-05-31",
    displayDate: "August 2025–May 2026",
    description:
      "Advanced Emma from an early healthtech concept into a functional mobile platform through the In.Cube acceleration cycle. The process refined its clinical proposition, business model, scalability, usability, regulatory direction, and market positioning.",
    contribution:
      "Mobile product development, technical leadership, product demonstration, pitch preparation, team coordination, and engagement with healthcare stakeholders.",
    evidence: [
      {
        label: "Functional mobile MVP",
        context: "built with Flutter and Dart",
      },
      {
        label: "Healthcare panel evaluation",
        context: "product and business validation",
      },
      {
        label: "Market-facing showcase",
        context:
          "presented to hospitals, pharmaceutical companies, and healthcare stakeholders",
      },
    ],
    sortOrder: 5,
  },
  {
    id: "embraer-ai-event-intelligence-2026",
    category: "Professional",
    title: "AI Event Intelligence at Embraer",
    organization: "Embraer",
    location: "São José dos Campos, São Paulo, Brazil",
    startDate: "2026-03-01",
    endDate: "2026-06-30",
    displayDate: "March–June 2026",
    description:
      "Designed and applied AI-supported workflows to consolidate discussions, generate executive summaries, structure insights, and track action items during corporate events involving leadership, internal specialists, and customers.",
    contribution:
      "AI workflow implementation, information structuring, transcription support, insight generation, executive summarization, and action-item consolidation.",
    evidence: [
      { label: "CRM AsOne 2026", context: "initial implementation" },
      { label: "Services Summit 2026", context: "extended application" },
      {
        label: "Structured follow-up",
        context: "summaries, insights, and action items",
      },
    ],
    sortOrder: 6,
  },
];

export const posts: Post[] = [
  {
    id: "post-building-emma-digital-health-product",
    slug: "building-emma-digital-health-product",
    title: "Building Emma as a long-term digital health product",
    excerpt:
      "Emma began as a rapid experiment, but its evolution has required decisions about mobile architecture, digital biomarkers, patient engagement, clinical relevance, and responsible data collection. This note explores how the project is moving from a hackathon prototype toward a more structured and scalable digital health platform.",
    content: [
      {
        heading: "From prototype to product questions",
        paragraphs: [
          "Emma began as a rapid prototype for exploring how software and digital biomarkers might support more continuous monitoring of multiple sclerosis. That format was useful because it made the idea tangible quickly, but it also exposed the distance between demonstrating a concept and building a product that people could use reliably over time.",
          "A demonstration can optimize for speed and a clear story. A long-term health product must also account for repeat use, understandable feedback, data quality, privacy, accessibility, and the limits of what its measurements can responsibly communicate. Those questions now shape the roadmap as much as the original technical concept.",
        ],
      },
      {
        heading: "Choosing an architecture for repeated use",
        paragraphs: [
          "The early Flask and Next.js experiments helped validate workflows and connect the interface to analysis services. As the product direction became more mobile and task-oriented, the architecture began moving toward a Flutter application designed around repeated assessments, clearer state management, and a more consistent experience across devices.",
          "This transition is not simply a framework replacement. It requires deciding which capabilities belong on the device, which require backend processing, how interrupted sessions should recover, and how results can remain understandable without overstating their clinical meaning.",
        ],
      },
      {
        heading: "Digital biomarkers and patient engagement",
        paragraphs: [
          "Emma explores signals related to eye movement, speech, cognition, and dexterity. Each area creates different engineering constraints: calibration for visual tasks, environmental variation for audio, clear instructions for cognitive activities, and device differences for motor interactions. Collecting a signal is only the beginning; the experience must make the task repeatable and the data interpretable.",
          "Gamification can support adherence when it gives users clear goals, feedback, and a sense of progress. In a health context, however, it should encourage consistent participation without turning symptoms into a score or creating misleading rewards. The product has to respect the seriousness of the context while still reducing friction.",
        ],
      },
      {
        heading: "What still needs to be proven",
        paragraphs: [
          "Conversations with healthcare professionals and participation in health innovation environments have influenced how I think about clinical relevance, usability, business viability, and regulation. They have also reinforced that technical novelty is not enough: assumptions need to be tested with the people who understand the condition and the realities of care.",
          "Emma remains an evolving product, not a clinically validated medical device. The current work is about strengthening validation plans, improving usability, defining responsible data practices, and designing an architecture that can scale without getting ahead of the evidence.",
        ],
      },
    ],
    category: "project-update",
    relatedSection: "projects",
    relatedProjectSlug: "emma-digital-health-platform",
    sortOrder: 1,
    publishedAt,
    isPublished: true,
    coverImagePath: "featured-emma-cover.jpg",
    createdAt: publishedAt,
    updatedAt: publishedAt,
  },
  {
    id: "post-building-across-engineering-layers",
    slug: "building-across-engineering-layers",
    title: "Why I like building across engineering layers",
    excerpt:
      "Working with dashboards, web applications, compilers, processors, embedded systems, and automation has taught me that software decisions rarely exist in isolation. Understanding how different layers interact helps me diagnose problems more precisely and design solutions that remain coherent from implementation to user experience.",
    content: [
      {
        heading: "Looking beyond one abstraction",
        paragraphs: [
          "I am drawn to projects that reveal what is happening below the interface. A dashboard depends on data definitions and operational processes. A web application depends on network behavior, state, storage, and the assumptions built into its services. Even a small automation inherits constraints from the systems and people around it.",
          "Understanding those relationships changes how I debug. Instead of treating the visible symptom as the whole problem, I can ask whether the failure comes from data shape, control flow, timing, hardware behavior, interface design, or a mismatch between the system and the user's actual task.",
        ],
      },
      {
        heading: "Lessons from compilers and processors",
        paragraphs: [
          "Building a C-minus compiler made the consequences of each transformation explicit. Source text had to become tokens, syntax, semantic meaning, an intermediate representation, assembly, and machine code. A mistake in one stage could remain hidden until much later, so clear contracts between stages were essential.",
          "Designing an ARM-oriented processor in Verilog exposed the same lesson from the hardware side. Instructions only work when datapaths, control signals, registers, memory behavior, and timing agree. Simulation made it possible to inspect that agreement and showed how a high-level operation becomes a sequence of concrete state changes.",
        ],
      },
      {
        heading: "How low-level work improves high-level decisions",
        paragraphs: [
          "Low-level experience does not mean every application should be optimized prematurely or rebuilt from first principles. Its value is judgment. It helps me recognize when an abstraction is serving the problem, when it is hiding an important constraint, and where additional investigation is likely to be useful.",
          "That perspective also improves communication. When people working on data, backend services, interfaces, or hardware describe different symptoms, I can reason about the shared path through the system and help translate concerns across those boundaries.",
        ],
      },
      {
        heading: "Selecting the right layer",
        paragraphs: [
          "Multidisciplinary engineering is not about using every technology in every project. It is about selecting the level of abstraction that makes the problem clearer and the solution maintainable. Sometimes the correct answer is a small script; sometimes it is a product workflow; sometimes the underlying architecture must change.",
          "Working across layers has made me more interested in coherence than technical variety. The goal is a system whose implementation, operational context, and user experience support one another, with complexity introduced only where it earns its place.",
        ],
      },
    ],
    category: "engineering-perspective",
    relatedSection: "how-i-think",
    relatedProjectSlug: "c-minus-compiler",
    sortOrder: 2,
    publishedAt,
    isPublished: true,
    coverImagePath: "featured-compiler-cover.jpg",
    createdAt: publishedAt,
    updatedAt: publishedAt,
  },
  {
    id: "post-ai-in-decision-making-contexts",
    slug: "ai-in-decision-making-contexts",
    title: "Applying AI in executive and decision-making contexts",
    excerpt:
      "Recent work at Embraer showed me that the value of AI is not limited to generating content. When applied carefully, it can organize complex discussions, consolidate information, identify actions, and help teams move from conversation to structured follow-up without replacing human judgment.",
    content: [
      {
        heading: "AI as an information-structuring tool",
        paragraphs: [
          "In corporate discussions and events, the difficult part is often not producing more information. It is preserving the important context, distinguishing decisions from open questions, and making follow-up clear enough that people can act. AI can assist with that work when the input and expected output are deliberately structured.",
          "During work connected to an Embraer corporate event, I supported AI-assisted flows for transcription, consolidation, summaries, and action-item extraction. The objective was not to let a model decide what mattered, but to make the discussion easier for responsible participants to review and continue.",
        ],
      },
      {
        heading: "Useful output starts before the prompt",
        paragraphs: [
          "A strong summary depends on more than a capable model. It depends on audio quality, participant context, vocabulary, clear session objectives, and an output format suited to the next step. Without those elements, a polished response can still omit a qualification or assign too much certainty to an unresolved point.",
          "Separating observations, decisions, owners, and pending questions makes review more reliable. It also makes limitations visible: missing context can be flagged, ambiguous statements can remain unresolved, and the final record can show where human confirmation is still required.",
        ],
      },
      {
        heading: "Review, confidentiality, and accountability",
        paragraphs: [
          "Generated information should be treated as a draft that requires review, especially when it supports executive or commercial work. Names, commitments, technical terms, and action owners can be misunderstood. Human validation is what turns a fast output into a dependable working document.",
          "Confidentiality also affects tool selection, data handling, retention, and access. A workflow is not responsible merely because it produces a useful summary. It must respect where the information came from, who is authorized to see it, and which details should never leave the approved environment.",
        ],
      },
      {
        heading: "Measuring value beyond speed",
        paragraphs: [
          "Speed matters when teams need timely follow-up, but it is not the primary measure of success. A useful AI workflow should improve clarity, preserve context, reduce avoidable rework, and help people understand what needs attention next.",
          "The experience reinforced a practical boundary: AI can support understanding and coordination, while people remain accountable for interpretation and decisions. Designing around that boundary produces less dramatic claims, but much more useful systems.",
        ],
      },
    ],
    category: "professional-reflection",
    relatedSection: "experience",
    relatedProjectSlug: null,
    sortOrder: 3,
    publishedAt,
    isPublished: true,
    coverImagePath: "featured-embraer-sales-cover.jpg",
    createdAt: publishedAt,
    updatedAt: publishedAt,
  },
  {
    id: "post-salesforce-and-digital-transformation",
    slug: "salesforce-and-digital-transformation",
    title: "What Salesforce taught me about digital transformation",
    excerpt:
      "Working with Salesforce changed how I understand CRM platforms. Their value is not simply storing customer information, but connecting processes, data quality, automation, commercial decisions, and user experience in a system that must reflect how the organization actually operates.",
    content: [
      {
        heading: "CRM is an operating system for work",
        paragraphs: [
          "Before working closely with Salesforce, it was easy to think of CRM mainly as a place to store accounts, contacts, and opportunities. In practice, its value comes from connecting people, commercial rules, product information, approvals, documents, and decisions in a shared operational system.",
          "That makes CRM work both technical and organizational. A field, validation rule, flow, or integration changes how information moves and how users complete their work. The best solution is therefore not the one with the most customization, but the one that represents the process clearly and remains understandable over time.",
        ],
      },
      {
        heading: "Map the process before developing",
        paragraphs: [
          "A quotation flow I helped restructure illustrates this point. The initial process involved multiple objects, repeated manual entry, information copied from other records, validation effort, and rework. Addressing only the interface would have left the underlying fragmentation in place.",
          "The work began by understanding the sequence, the information each stage required, and where users were compensating for gaps in the system. Requirement gathering and validation throughout development helped distinguish essential controls from habits created by the previous process.",
        ],
      },
      {
        heading: "Automation with controlled progression",
        paragraphs: [
          "The improved approach unified parts of the process, automated retrieval of existing information, supported product synchronization, and introduced controlled stage progression. Automated PDF generation connected the structured CRM record to a document users could review and use in the commercial workflow.",
          "Not every part needed to be rebuilt. Reusing and updating existing functionality where appropriate reduced unnecessary change and made the solution easier to integrate with the surrounding environment. That balance matters because customization creates future maintenance responsibilities.",
        ],
      },
      {
        heading: "Digital transformation depends on adoption",
        paragraphs: [
          "A technically correct CRM solution can still fail if it ignores data ownership, governance, and the people expected to use it. Poor source data weakens automation, unclear responsibilities create exceptions, and a flow designed without user feedback can simply move friction to a different screen.",
          "Salesforce administration and development have taught me to treat digital transformation as a relationship between technology and operating practice. The platform becomes valuable when the data, rules, user experience, and business objective agree with one another.",
        ],
      },
    ],
    category: "crm-digital-transformation",
    relatedSection: "experience",
    relatedProjectSlug: null,
    sortOrder: 4,
    publishedAt,
    isPublished: true,
    coverImagePath: "featured-embraer-sales-cover.jpg",
    createdAt: publishedAt,
    updatedAt: publishedAt,
  },
  {
    id: "post-building-ai-systems",
    slug: "building-ai-systems",
    title: "Building AI systems instead of isolated automations",
    excerpt:
      "Traditional automation works well when every step can be defined in advance. AI agents become useful when a system must interpret intent, select tools, manage context, and handle tasks that vary from one request to another. Building them responsibly, however, requires much more than connecting a language model to a set of actions.",
    content: [
      {
        heading: "From fixed workflows to interpreted requests",
        paragraphs: [
          "Traditional automation is effective when inputs, decisions, and actions can be specified in advance. It is easier to test, easier to constrain, and usually the better choice for stable repetitive work. An AI-assisted system becomes relevant when requests vary and the system must interpret intent before choosing a path.",
          "That flexibility changes the engineering problem. Instead of implementing only a sequence of steps, the system needs a way to represent available tools, decide what context is relevant, validate inputs, report uncertainty, and recover when an action cannot be completed.",
        ],
      },
      {
        heading: "Lessons from FRAI",
        paragraphs: [
          "FRAI is a functional technical portfolio project exploring a local-first personal AI agent. Its architecture connects natural-language interpretation to modular tools for tasks such as file and folder operations, email summarization, and draft preparation. It is an evolving system rather than a finished commercial product.",
          "The important work is not the conversational surface alone. Tool definitions need explicit inputs and outputs, execution results must return to the orchestration layer, and failures must remain legible. Modular boundaries make it possible to add capabilities without turning every request into a special case.",
        ],
      },
      {
        heading: "Context, memory, and local execution",
        paragraphs: [
          "Context helps an agent understand the current task, while memory can preserve selected information across interactions. Both need limits. Keeping everything increases privacy risk and can make future responses less relevant; keeping too little forces users to repeat information and weakens continuity.",
          "A local-first direction can reduce unnecessary exposure for files and personal workflows, but local execution is not automatically private or secure. Storage, logs, model access, integrations, and synchronization still need explicit design decisions and understandable controls.",
        ],
      },
      {
        heading: "Autonomy requires boundaries",
        paragraphs: [
          "The more tools an agent can use, the more important permissions and confirmation become. Reading a document, preparing a draft, sending an email, deleting a file, and changing a folder are not equivalent actions. Sensitive or irreversible operations should require clear user approval at the point of action.",
          "I think of an agent as a system for bounded orchestration, not unrestricted autonomy. Clear capabilities, observable execution, least-privilege access, and human confirmation are architectural features. Without them, a flexible demonstration does not become a dependable product.",
        ],
      },
    ],
    category: "ai-automation",
    relatedSection: "projects",
    relatedProjectSlug: null,
    sortOrder: 5,
    publishedAt,
    isPublished: true,
    coverImagePath: null,
    createdAt: publishedAt,
    updatedAt: publishedAt,
  },
  {
    id: "post-professional-influence-and-events",
    slug: "professional-influence-and-events",
    title: "Why professional influence requires active participation",
    excerpt:
      "Professional influence is not built only through visibility or job titles. It grows when someone contributes useful ideas, communicates them clearly, supports execution, and builds trust across different groups. Events can accelerate this process, but only when participation creates value beyond being present.",
    content: [
      {
        heading: "Presence and contribution are different",
        paragraphs: [
          "Attending an event can create access to ideas and people, but presence alone says little about contribution. Professional influence begins when participation makes the work clearer or more useful: asking a relevant question, explaining a technical point, helping organize execution, or following up on an unresolved discussion.",
          "This is different from treating visibility as an outcome. The useful question is not how many people were in the room, but what role I was responsible for and whether that role helped others understand, decide, connect, or move the work forward.",
        ],
      },
      {
        heading: "Different settings require different forms of participation",
        paragraphs: [
          "Organizing work around the Federal Revenue Hackathon emphasized coordination and execution. Presenting research at a national congress required translating methods and findings for a specialized audience. Emma's participation in healthcare innovation environments created opportunities to demonstrate the product and learn from healthcare professionals, researchers, and other builders.",
          "Corporate events at Embraer required another kind of contribution: understanding the purpose of the discussion, supporting information flow, and communicating within professional and confidentiality boundaries. These roles are not interchangeable, and describing them accurately matters more than presenting every event as the same kind of achievement.",
        ],
      },
      {
        heading: "Technical communication builds trust",
        paragraphs: [
          "Technical knowledge creates value only when it can be shared at the level another person needs. An engineer may need implementation constraints, a product professional may need tradeoffs and user consequences, and a leader may need a concise explanation of risk, ownership, and the next decision.",
          "Adapting the explanation does not mean removing rigor. It means preserving the important reasoning while choosing language, detail, and examples that help the audience act. Consistent communication across groups is one of the clearest ways technical work develops broader professional influence.",
        ],
      },
      {
        heading: "Influence as forward movement",
        paragraphs: [
          "Follow-up is where participation becomes durable. Sharing a useful reference, connecting people who can help one another, documenting an action, or returning with an answer demonstrates reliability beyond the moment of the event.",
          "I understand professional influence as the ability to create clarity, trust, alignment, and forward movement through useful participation. It is built gradually through contribution and accountability, not through popularity, self-promotion, or the scale of the event.",
        ],
      },
    ],
    category: "leadership-communication",
    relatedSection: "experience",
    relatedProjectSlug: null,
    sortOrder: 6,
    publishedAt,
    isPublished: true,
    coverImagePath: null,
    createdAt: publishedAt,
    updatedAt: publishedAt,
  },
];

function sortByFeatureRank<T extends { featureRank: number | null }>(
  items: T[],
) {
  return [...items].sort(
    (left, right) => (left.featureRank ?? 999) - (right.featureRank ?? 999),
  );
}

export const getHomepagePayload = cache(
  async (): Promise<HomepagePayload> => ({
    settings: defaultHomepageSettings,
    featuredExperiences: sortByFeatureRank(
      experiences.filter((entry) => entry.isFeatured),
    ),
    featuredProjects: sortByFeatureRank(
      projects.filter((entry) => entry.isFeatured),
    ),
    milestones: [...milestones].sort(
      (left, right) => left.sortOrder - right.sortOrder,
    ),
    latestPosts: posts
      .filter((entry) => entry.isPublished)
      .sort((left, right) => left.sortOrder - right.sortOrder),
  }),
);

export const getExperienceSummaryData = cache(async () => ({
  experiences: sortByFeatureRank(
    experiences.filter((entry) => entry.isPublished),
  ),
  projects: sortByFeatureRank(projects.filter((entry) => entry.isPublished)),
  milestones: [...milestones].sort(
    (left, right) => left.sortOrder - right.sortOrder,
  ),
}));

export const getExperienceBySlug = cache(async (slug: string) => {
  return (
    experiences.find((entry) => entry.slug === slug && entry.isPublished) ??
    null
  );
});

export const getProjectBySlug = cache(async (slug: string) => {
  return (
    projects.find((entry) => entry.slug === slug && entry.isPublished) ?? null
  );
});

export const getPublishedPosts = cache(async () => {
  return posts
    .filter((entry) => entry.isPublished)
    .sort((left, right) => left.sortOrder - right.sortOrder);
});

export const getPostBySlug = cache(async (slug: string) => {
  return (
    posts.find((entry) => entry.slug === slug && entry.isPublished) ?? null
  );
});

export const getPublicDetailSlugs = cache(async () => ({
  experiences: experiences
    .filter((entry) => entry.isPublished)
    .map((entry) => entry.slug),
  projects: projects
    .filter((entry) => entry.isPublished)
    .map((entry) => entry.slug),
  posts: posts.filter((entry) => entry.isPublished).map((entry) => entry.slug),
}));
