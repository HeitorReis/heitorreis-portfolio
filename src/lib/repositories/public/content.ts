import { cache } from "react";

import { defaultHomepageSettings } from "@/lib/constants/site-defaults";
import type {
  Achievement,
  DetailSection,
  Experience,
  HomepagePayload,
  Post,
  Project,
  StrategicEvent,
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
      "Builds Salesforce, analytics, and AI-driven solutions to support strategic sales processes, improve business visibility, optimize workflows, and strengthen executive-level decision-making.",
    responsibilities: [
      "Develops Salesforce-based solutions for sales and business processes",
      "Builds Power BI dashboards and analytical views for performance management",
      "Applies AI tools to improve business workflows and information synthesis",
      "Supports corporate performance management and sales enablement initiatives",
      "Contributes to high-visibility corporate events through AI-supported summaries, insights, and action item tracking",
    ],
    technologies: [
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
    impact: [
      "Supports strategic commercial decision-making",
      "Connects CRM, analytics, and AI to real business needs",
      "Works in a high-visibility corporate environment with executive-level performance management",
    ],
    timeframeLabel: "Jan 2026 - Present",
    startDate: "2026-01-01",
    endDate: null,
    isFeatured: true,
    featureRank: 1,
    isPublished: true,
    publishedAt,
    detailContent: detailContent(
      "At Embraer, Heitor builds digital tools that support strategic sales processes, improve business visibility, optimize workflows, and strengthen executive-level decision-making. His work connects Salesforce, analytics, and AI to practical business needs.",
      [
        "Develops Salesforce-based solutions for sales and business processes",
        "Builds Power BI dashboards and analytical views for performance management",
        "Applies AI tools to improve business workflows and information synthesis",
        "Supports corporate performance management and sales enablement initiatives",
        "Contributes to high-visibility corporate events through AI-supported summaries, insights, and action item tracking",
      ],
      [
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
      [
        "Supports strategic commercial decision-making",
        "Connects CRM, analytics, and AI to real business needs",
        "Works in a high-visibility corporate environment with executive-level performance management",
      ],
    ).concat([
      {
        key: "impact",
        heading: "Highlighted Project: AI-driven Event Intelligence System - Summit CRM AsOne 2026",
        body:
          "During Summit CRM AsOne 2026, Heitor developed and applied AI workflows for transcription, insight generation, and action item tracking across executive-level discussions, supporting faster knowledge consolidation and strategic follow-up.",
      },
      {
        key: "impact",
        heading: "Highlighted Project: AI Technical Support - Embraer Services Summit 2026",
        body:
          "Supported a client-facing Embraer Services event by applying AI tools to capture discussion topics, consolidate insights, generate executive summaries, and structure action items related to digital solutions and aircraft modification initiatives.",
      },
    ]),
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
      "Transformed contract administration routines into more structured, automated, and transparent processes through data analysis, dashboards, spreadsheet optimization, technical reporting, and workflow automation.",
    responsibilities: [
      "Performed data analysis, calculations, and control activities in the Contracts area",
      "Built and optimized spreadsheets, dashboards, and management tools",
      "Automated recurring workflows and manual routines",
      "Prepared and reviewed technical reports",
      "Supported internal and external stakeholders",
      "Improved operational visibility for supervisory and executive decision-making",
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
      "Improved reporting speed by approximately 40%",
      "Reduced manual operations and improved process transparency",
    ],
    timeframeLabel: "Feb 2025 - Dec 2025",
    startDate: "2025-02-01",
    endDate: "2025-12-31",
    isFeatured: true,
    featureRank: 2,
    isPublished: true,
    publishedAt,
    detailContent: detailContent(
      "In the Contracts area at Embraer, Heitor transformed contract administration routines into more structured, automated, and transparent processes through data analysis, dashboards, spreadsheet optimization, technical reporting, and workflow automation.",
      [
        "Performed data analysis, calculations, and control activities in the Contracts area",
        "Built and optimized spreadsheets, dashboards, and management tools",
        "Automated recurring workflows and manual routines",
        "Prepared and reviewed technical reports",
        "Supported internal and external stakeholders",
        "Improved operational visibility for supervisory and executive decision-making",
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
        "Improved reporting speed by approximately 40%",
        "Reduced manual operations and improved process transparency",
      ],
    ),
    imagePath: "featured-embraer-contracts-cover.jpg",
    createdAt: publishedAt,
    updatedAt: publishedAt,
  },
  {
    id: "experience-emma-founder-developer",
    slug: "emma-founder-developer",
    title: "Founder & Developer - Emma Digital Health",
    organization: "Emma",
    category: "innovation",
    location: "Sao Paulo - SP, Brazil",
    summary:
      "Leads the development of Emma, a mobile-first digital health platform focused on monitoring multiple sclerosis through AI, digital biomarkers, gamified engagement, and longitudinal patient interaction.",
    responsibilities: [
      "Built the first web-based proof of concept using Flask, Python, Next.js, and TypeScript",
      "Led the transition to the official mobile platform using Flutter and Dart",
      "Designed features for digital biomarker collection, patient adherence, and longitudinal monitoring",
      "Integrated concepts involving eye-tracking, speech analysis, cognitive performance, and dexterity",
      "Aligned technical implementation with clinical relevance, product strategy, and user-centered design",
      "Supported pitch, validation, and showcase activities in health innovation ecosystems",
    ],
    technologies: [
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
    impact: [
      "Created the technical foundation for a healthtech product focused on neurological monitoring",
      "Developed a functional mobile MVP",
      "Helped position Emma through Harvard Brazil Hackathon recognition, In.Cube acceleration, and Hospitalar 2026 showcase",
      "Connects software engineering, healthcare innovation, patient engagement, and real-world evidence strategy",
    ],
    timeframeLabel: "2025 - Current",
    startDate: "2025-01-01",
    endDate: null,
    isFeatured: true,
    featureRank: 3,
    isPublished: true,
    publishedAt,
    detailContent: detailContent(
      "Emma is a mobile-first digital health platform focused on monitoring multiple sclerosis through AI, digital biomarkers, gamified engagement, and longitudinal patient interaction. Heitor leads the technical development while aligning the product with clinical relevance and user-centered design.",
      [
        "Built the first web-based proof of concept using Flask, Python, Next.js, and TypeScript",
        "Led the transition to the official mobile platform using Flutter and Dart",
        "Designed features for digital biomarker collection, patient adherence, and longitudinal monitoring",
        "Integrated concepts involving eye-tracking, speech analysis, cognitive performance, and dexterity",
        "Aligned technical implementation with clinical relevance, product strategy, and user-centered design",
        "Supported pitch, validation, and showcase activities in health innovation ecosystems",
      ],
      [
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
      [
        "Created the technical foundation for a healthtech product focused on neurological monitoring",
        "Developed a functional mobile MVP",
        "Helped position Emma through Harvard Brazil Hackathon recognition, In.Cube acceleration, and Hospitalar 2026 showcase",
        "Connects software engineering, healthcare innovation, patient engagement, and real-world evidence strategy",
      ],
    ),
    imagePath: "featured-emma-cover.jpg",
    createdAt: publishedAt,
    updatedAt: publishedAt,
  },
  {
    id: "experience-cope-disaster-response-project",
    slug: "cope-disaster-response-project",
    title: "Research & Data Science Participant - COPE Disaster-Response Project",
    organization: "CEMADEN & FAPESP",
    category: "research",
    location: "Sao Jose dos Campos - SP, Brazil",
    summary:
      "Contributed to a research project focused on data-driven tools for disaster prediction, environmental analysis, and community resilience, applying machine learning and geospatial data analysis to support decision-making in natural disaster contexts.",
    responsibilities: [
      "Analyzed large geospatial and environmental datasets",
      "Applied machine learning methods to identify patterns and support early-warning research",
      "Collaborated with multidisciplinary teams connected to public safety, environmental monitoring, and applied research",
      "Supported data preprocessing, model development, and analysis workflows",
      "Contributed to research that later supported national congress presentation work involving MUNIC 2020 data",
    ],
    technologies: [
      "Data Science",
      "Geospatial Analysis",
      "Machine Learning",
      "Environmental Modeling",
      "Public Policy",
      "Disaster Prediction",
      "Applied Research",
    ],
    impact: [
      "Connects AI and data science to public-sector and environmental impact",
      "Shows research maturity through work with CEMADEN and FAPESP",
      "Demonstrates ability to analyze large-scale datasets and communicate technical findings in applied contexts",
    ],
    timeframeLabel: "May 2024 - Dec 2024",
    startDate: "2024-05-01",
    endDate: "2024-12-31",
    isFeatured: true,
    featureRank: 4,
    isPublished: true,
    publishedAt,
    detailContent: detailContent(
      "Heitor contributed to a research project focused on data-driven tools for disaster prediction, environmental analysis, and community resilience. The work applied machine learning and geospatial data analysis to support decision-making in natural disaster contexts.",
      [
        "Analyzed large geospatial and environmental datasets",
        "Applied machine learning methods to identify patterns and support early-warning research",
        "Collaborated with multidisciplinary teams connected to public safety, environmental monitoring, and applied research",
        "Supported data preprocessing, model development, and analysis workflows",
        "Contributed to research that later supported national congress presentation work involving MUNIC 2020 data",
      ],
      [
        "Data Science",
        "Geospatial Analysis",
        "Machine Learning",
        "Environmental Modeling",
        "Public Policy",
        "Disaster Prediction",
        "Applied Research",
      ],
      [
        "Connects AI and data science to public-sector and environmental impact",
        "Shows research maturity through work with CEMADEN and FAPESP",
        "Demonstrates ability to analyze large-scale datasets and communicate technical findings in applied contexts",
      ],
    ),
    imagePath: null,
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
      "A mobile-first digital health platform for multiple sclerosis monitoring that connects AI, digital biomarkers, gamified engagement, and clinically relevant product strategy.",
    context:
      "Emma was created to explore more continuous, objective, and scalable ways of monitoring neurological progression beyond isolated clinical observations. The first web-based proof of concept used Flask, Python, Next.js, and TypeScript, and the current product direction is a Flutter and Dart mobile MVP.",
    problem:
      "Monitoring chronic neurological conditions is often limited by sparse evaluations and subjective interpretation.",
    solution:
      "Emma is moving from its original web proof of concept into an official mobile platform designed around digital biomarker collection, patient adherence, longitudinal monitoring, and user-centered clinical workflows.",
    technologies: [
      "Flutter",
      "Dart",
      "Digital Biomarkers",
      "AI",
      "Product Design",
      "Clinical Data Science",
      "Gamification",
      "Human-Computer Interaction",
    ],
    impact: [
      "Developed a functional mobile MVP and helped position Emma through Harvard Brazil Hackathon recognition, In.Cube acceleration, and Hospitalar 2026 showcase.",
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
    timeframeLabel: "Aug 2025 - May 2026",
    imagePath: "featured-emma-cover.jpg",
    isFeatured: true,
    isPublished: true,
    publishedAt,
    sortOrder: 4,
    createdAt: publishedAt,
    updatedAt: publishedAt,
  },
];

export const strategicEvents: StrategicEvent[] = [
  {
    id: "strategic-event-ai-event-intelligence-summit-crm-asone-2026",
    title: "AI Event Intelligence - Summit CRM AsOne 2026",
    organization: "Embraer",
    location: "Sao Jose dos Campos - SP, Brazil",
    timeframeLabel: "Mar 2026",
    summary:
      "Applied AI solutions across all sessions of a corporate international event, enabling transcription, insight generation, and structured decision support.",
    recruiterSignal:
      "Shows executive-level exposure, practical AI implementation, business communication, and the ability to turn unstructured discussions into actionable knowledge.",
    impact:
      "Improved decision-making efficiency and enabled real-time knowledge consolidation during strategic discussions.",
    tags: [
      "Artificial Intelligence",
      "NLP",
      "Data Analysis",
      "Corporate Strategy",
      "Executive Communication",
      "Aviation",
    ],
    sortOrder: 1,
    isPublished: true,
  },
  {
    id: "strategic-event-embraer-services-summit-2026",
    title: "Participant & AI Technical Support - Embraer Services Summit 2026",
    organization: "Embraer",
    location: "Sao Jose dos Campos - SP, Brazil",
    timeframeLabel: "June 2026",
    summary:
      "Participated in a client-facing Embraer event focused on digital solutions and aircraft modification initiatives, consolidating discussion topics, executive summaries, and action items.",
    recruiterSignal:
      "Shows the ability to apply AI and data tools in a client-facing, international corporate environment while supporting leadership with structured insights and follow-up actions.",
    impact:
      "Improved decision-making efficiency, enabled real-time knowledge consolidation, and increased visibility with leadership through AI-supported summaries, insights, and action item tracking.",
    tags: [
      "Artificial Intelligence",
      "Data Analysis",
      "Executive Summaries",
      "Action Items",
      "Aviation",
      "Digital Solutions",
      "Innovation",
      "Communication",
    ],
    sortOrder: 2,
    isPublished: true,
  },
  {
    id: "strategic-event-emma-hospitalar-2026",
    title: "Co-Founder & Developer - Emma Digital Health Showcase at Hospitalar 2026",
    organization: "Emma / InovaHC (HCFMUSP)",
    location: "Sao Paulo Expo, Sao Paulo - SP, Brazil",
    timeframeLabel: "May 2026",
    summary:
      "Presented Emma at Hospitalar 2026 as part of the In.Cube cycle, demonstrating a functional mobile MVP focused on digital biomarkers, gamification, and real-world evidence strategy.",
    recruiterSignal:
      "Shows healthtech entrepreneurship, technical product maturity, pitch ability, stakeholder communication, and leadership in a high-level healthcare innovation environment.",
    impact:
      "Successfully defended the platform before a healthcare evaluation board, connected with hospitals and pharmaceutical stakeholders, and helped position Emma as a more mature digital health product.",
    tags: [
      "Digital Health",
      "Flutter",
      "Digital Biomarkers",
      "Healthtech",
      "Pitching",
      "Product Strategy",
      "RWE",
    ],
    sortOrder: 3,
    isPublished: true,
  },
  {
    id: "strategic-event-harvard-brazil-hackathon-emma",
    title: "Winner - Harvard Brazil Hackathon with Emma",
    organization: "Emma / Harvard Brazil Hackathon",
    location: "Sao Paulo - SP, Brazil",
    timeframeLabel: "May 2025",
    summary:
      "Co-led the development and presentation of Emma, a digital health platform using AI and digital biomarkers to monitor multiple sclerosis progression.",
    recruiterSignal:
      "Strong competitive recognition showing Heitor's ability to combine software engineering, healthcare research, user-centered design, and business storytelling under pressure.",
    impact:
      "Awarded 1st place among 60+ national teams with a functional AI health prototype.",
    tags: [
      "Artificial Intelligence",
      "Digital Health",
      "Biomedical Engineering",
      "Software Development",
      "Product Innovation",
      "Presentation",
    ],
    sortOrder: 4,
    isPublished: true,
  },
  {
    id: "strategic-event-incube-acceleration-program",
    title: "Participant - In.Cube Acceleration Program",
    organization: "InovaHC / HCFMUSP",
    location: "Sao Paulo - SP, Brazil",
    timeframeLabel: "Aug 2025 - May 2026",
    summary:
      "Participated in a healthtech acceleration program with Emma, refining clinical applicability, business model, scalability, and regulatory direction.",
    recruiterSignal:
      "Shows ability to operate beyond code, connecting technical development with clinical validation, market strategy, and healthcare innovation.",
    impact:
      "Selected as one of 10 healthtechs accelerated and developed a more structured business and validation direction for Emma.",
    tags: [
      "Healthtech",
      "Entrepreneurship",
      "Clinical Validation",
      "Product Development",
      "Business Strategy",
      "Regulation",
    ],
    sortOrder: 5,
    isPublished: true,
  },
  {
    id: "strategic-event-salesforce-agentforce-world-tour-sao-paulo-2026",
    title: "Invited Participant - Salesforce Agentforce World Tour Sao Paulo 2026",
    organization: "Salesforce",
    location: "Transamerica Expo Center, Sao Paulo - SP, Brazil",
    timeframeLabel: "May 2026",
    summary:
      "Participated by invitation in a strategic Salesforce ecosystem event focused on Agentforce, Data 360, autonomous AI agents, CRM automation, and intelligent workflows.",
    recruiterSignal:
      "Highly relevant to Heitor's current Sales Digital Tools role at Embraer, showing awareness of enterprise AI trends and practical CRM innovation.",
    impact:
      "Strengthened understanding of the evolution from systems of record to intelligent, data-driven, human-AI collaboration platforms.",
    tags: [
      "Salesforce",
      "Agentforce",
      "Data 360",
      "CRM",
      "AI Agents",
      "Automation",
      "Digital Transformation",
    ],
    sortOrder: 6,
    isPublished: true,
  },
  {
    id: "strategic-event-federal-revenue-hackathon-unifesp-hub",
    title: "Co-organizer - 1st Federal Revenue Hackathon Brazil, UNIFESP Hub",
    organization: "UNIFESP & Receita Federal do Brasil",
    location: "Sao Jose dos Campos - SP, Brazil",
    timeframeLabel: "May 2025",
    summary:
      "Helped coordinate one of the largest innovation events held at the UNIFESP campus, supporting logistics, partnerships, volunteer coordination, mentor engagement, and multi-stakeholder execution.",
    recruiterSignal:
      "Shows leadership, stakeholder management, event operations, communication, and the ability to mobilize people under tight deadlines.",
    impact:
      "Mobilized 300+ local participants and contributed to a broader event with 1,500+ participants across six hubs in Sao Paulo.",
    tags: [
      "Leadership",
      "Event Management",
      "Innovation",
      "Stakeholder Engagement",
      "Logistics",
      "Public Sector",
    ],
    sortOrder: 7,
    isPublished: true,
  },
  {
    id: "strategic-event-munic-2020-congress-presentation",
    title: "Congress Presenter - AI Analysis of MUNIC 2020",
    organization: "CEMADEN, FAPESP & ABRHidro",
    location: "Curitiba - PR, Brazil",
    timeframeLabel: "Oct 2024",
    summary:
      "Presented research applying FP-Growth and machine learning techniques to analyze public management data from 5,571 Brazilian municipalities and 159 attributes.",
    recruiterSignal:
      "Shows research maturity, data science depth, public-sector impact, and ability to communicate technical results in a national scientific setting.",
    impact:
      "Processed large-scale municipal data and extracted validated association rules for socio-environmental analysis.",
    tags: [
      "Artificial Intelligence",
      "Data Science",
      "Machine Learning",
      "Public Policy",
      "Research",
      "FP-Growth",
    ],
    sortOrder: 8,
    isPublished: true,
  },
  {
    id: "strategic-event-huawei-seeds-for-the-future",
    title: "Selected Participant - Huawei Seeds for the Future 2024 & 2025",
    organization: "Huawei",
    location: "Brazil, Remote",
    timeframeLabel: "2024 and 2025",
    summary:
      "Selected among 50 young talents from Brazil in two editions of Huawei's global technology program, completing modules in AI, 5G, cloud computing, and digital transformation.",
    recruiterSignal:
      "Shows national-level selection, international technology exposure, learning agility, and interest in emerging technologies.",
    impact:
      "Completed technical modules and assessments in AI, cloud, 5G, sustainability, and digital transformation.",
    tags: [
      "Artificial Intelligence",
      "5G",
      "Cloud Computing",
      "Digital Transformation",
      "Telecommunications",
      "Sustainability",
    ],
    sortOrder: 9,
    isPublished: true,
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
  strategicEvents: strategicEvents
    .filter((entry) => entry.isPublished)
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
