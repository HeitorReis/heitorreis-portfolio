import type {
  AnalyticsEventType,
  JsonValue,
  MediaType,
  PostCategory,
  RelatedEntityType,
  SectionKey,
} from "@/types/domain";

export interface ContactSubmissionInput {
  fullName: string;
  email?: string;
  linkedin?: string;
  company?: string;
  role?: string;
  message?: string;
  consentGiven: boolean;
}

export interface AnalyticsEventInput {
  sessionId: string;
  eventType: AnalyticsEventType;
  pagePath: string;
  sectionKey?: SectionKey;
  metadataJson?: JsonValue;
}

export interface IngestPostPayload {
  title: string;
  slug?: string;
  excerpt: string;
  content: string;
  category: PostCategory;
  relatedSection?: SectionKey;
  relatedProjectSlug?: string;
  isPublished?: boolean;
  coverImagePath?: string;
}

export interface IngestAchievementPayload {
  title: string;
  organization: string;
  summary?: string;
  impact?: string;
  timeframeLabel?: string;
  imagePath?: string;
  isFeatured?: boolean;
  sortOrder?: number;
  isPublished?: boolean;
  publishedAt?: string;
}

export interface IngestProjectUpdatePayload {
  projectSlug: string;
  title: string;
  excerpt: string;
  content: string;
  isPublished?: boolean;
  publishedAt?: string;
  coverImagePath?: string;
}

export interface MediaUploadInput {
  fileName: string;
  altText?: string;
  mediaType?: MediaType;
  relatedEntityType?: RelatedEntityType;
  relatedEntityId?: string;
}
