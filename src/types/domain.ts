export type UUID = string;
export type ISODateString = string;
export type ISODateTimeString = string;

export type SectionKey =
  | "hero"
  | "featured-work"
  | "experience"
  | "projects"
  | "achievements"
  | "strategic-events"
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
  | "achievement-news"
  | "learning"
  | "milestone";

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

export interface Achievement {
  id: UUID;
  title: string;
  organization: string;
  summary: string;
  impact: string | null;
  timeframeLabel: string | null;
  imagePath: string | null;
  isFeatured: boolean;
  isPublished: boolean;
  publishedAt: ISODateTimeString | null;
  sortOrder: number;
  createdAt: ISODateTimeString;
  updatedAt: ISODateTimeString;
}

export interface StrategicEvent {
  id: UUID;
  title: string;
  organization: string;
  location: string;
  timeframeLabel: string;
  summary: string;
  recruiterSignal: string;
  impact: string | null;
  tags: string[];
  sortOrder: number;
  isPublished: boolean;
}

export interface Post {
  id: UUID;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: PostCategory;
  relatedSection: SectionKey | null;
  relatedProjectSlug: string | null;
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
  achievements: Achievement[];
  strategicEvents: StrategicEvent[];
  latestPosts: Post[];
}
