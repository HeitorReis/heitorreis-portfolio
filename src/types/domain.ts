export type UUID = string;
export type ISODateString = string;
export type ISODateTimeString = string;

export type SectionKey =
  | "hero"
  | "featured-work"
  | "experience"
  | "projects"
  | "milestones"
  | "how-i-think"
  | "personal"
  | "updates"
  | "contact";

export type ExperienceCategory =
  | "professional"
  | "research"
  | "innovation"
  | "education"
  | "leadership";

export type ProjectCategory =
  | "ai-driven-system"
  | "engineering"
  | "research"
  | "compiler"
  | "hardware"
  | "tooling";

export type PostCategory =
  | "project-update"
  | "engineering-perspective"
  | "professional-reflection"
  | "crm-digital-transformation"
  | "ai-automation"
  | "leadership-communication";

export interface UpdateSection {
  heading: string;
  paragraphs: string[];
}

export interface DetailSection {
  key:
    | "context"
    | "problem"
    | "what-i-did"
    | "technologies"
    | "impact"
    | "learning";
  heading: string;
  body: string;
  bullets?: string[];
}

export interface Experience {
  id: UUID;
  slug: string;
  title: string;
  organization: string;
  category: ExperienceCategory;
  location: string | null;
  summary: string;
  responsibilities: string[];
  technologies: string[];
  impact: string[];
  timeframeLabel: string | null;
  startDate: ISODateString | null;
  endDate: ISODateString | null;
  isFeatured: boolean;
  featureRank: number | null;
  isPublished: boolean;
  publishedAt: ISODateTimeString | null;
  detailContent: DetailSection[];
  imagePath: string | null;
  createdAt: ISODateTimeString;
  updatedAt: ISODateTimeString;
}

export interface Project {
  id: UUID;
  slug: string;
  title: string;
  category: ProjectCategory;
  summary: string;
  context: string;
  problem: string;
  solution: string;
  technologies: string[];
  impact: string[];
  learnings: string[];
  isFeatured: boolean;
  featureRank: number | null;
  isPublished: boolean;
  publishedAt: ISODateTimeString | null;
  relatedExperienceId: UUID | null;
  imagePath: string | null;
  createdAt: ISODateTimeString;
  updatedAt: ISODateTimeString;
}

export type MilestoneCategory =
  | "Recognition"
  | "Research"
  | "Leadership"
  | "Product"
  | "Professional";

export interface MilestoneEvidence {
  label: string;
  context: string;
}

export interface Milestone {
  id: string;
  category: MilestoneCategory;
  title: string;
  organization: string;
  location?: string;
  startDate: ISODateString;
  endDate?: ISODateString;
  displayDate: string;
  description: string;
  contribution: string;
  evidence: MilestoneEvidence[];
  referenceUrl?: string;
  referenceLabel?: string;
  featured?: boolean;
  sortOrder: number;
}

export interface Post {
  id: UUID;
  slug: string;
  title: string;
  excerpt: string;
  content: UpdateSection[];
  category: PostCategory;
  relatedSection: SectionKey | null;
  relatedProjectSlug: string | null;
  sortOrder: number;
  publishedAt: ISODateTimeString | null;
  isPublished: boolean;
  coverImagePath: string | null;
  createdAt: ISODateTimeString;
  updatedAt: ISODateTimeString;
}

export interface HomepageSettings {
  id: number;
  headline: string;
  subheadline: string;
  heroImagePath: string | null;
  showPhotoInHero: boolean;
  updatedAt: ISODateTimeString;
}

export interface HomepagePayload {
  settings: HomepageSettings;
  featuredExperiences: Experience[];
  featuredProjects: Project[];
  milestones: Milestone[];
  latestPosts: Post[];
}
