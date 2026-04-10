import type { JsonValue } from "@/types/domain";

export interface Database {
  public: {
    Tables: {
      experiences: {
        Row: {
          id: string;
          slug: string;
          title: string;
          organization: string;
          category: string;
          location: string | null;
          summary: string;
          responsibilities: string[];
          technologies: string[];
          impact: string[];
          timeframe_label: string | null;
          start_date: string | null;
          end_date: string | null;
          is_featured: boolean;
          feature_rank: number | null;
          is_published: boolean;
          published_at: string | null;
          detail_content: JsonValue;
          image_path: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: Partial<Database["public"]["Tables"]["experiences"]["Row"]>;
        Update: Partial<Database["public"]["Tables"]["experiences"]["Row"]>;
      };
      projects: {
        Row: {
          id: string;
          slug: string;
          title: string;
          category: string;
          summary: string;
          context: string;
          problem: string;
          solution: string;
          technologies: string[];
          impact: string[];
          learnings: string[];
          is_featured: boolean;
          feature_rank: number | null;
          is_published: boolean;
          published_at: string | null;
          related_experience_id: string | null;
          image_path: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: Partial<Database["public"]["Tables"]["projects"]["Row"]>;
        Update: Partial<Database["public"]["Tables"]["projects"]["Row"]>;
      };
      achievements: {
        Row: {
          id: string;
          title: string;
          organization: string;
          summary: string;
          impact: string | null;
          timeframe_label: string | null;
          image_path: string | null;
          is_featured: boolean;
          is_published: boolean;
          published_at: string | null;
          sort_order: number;
          created_at: string;
          updated_at: string;
        };
        Insert: Partial<Database["public"]["Tables"]["achievements"]["Row"]>;
        Update: Partial<Database["public"]["Tables"]["achievements"]["Row"]>;
      };
      posts: {
        Row: {
          id: string;
          slug: string;
          title: string;
          excerpt: string;
          content: string;
          category: string;
          related_section: string | null;
          related_project_slug: string | null;
          published_at: string | null;
          is_published: boolean;
          cover_image_path: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: Partial<Database["public"]["Tables"]["posts"]["Row"]>;
        Update: Partial<Database["public"]["Tables"]["posts"]["Row"]>;
      };
      media: {
        Row: {
          id: string;
          file_name: string;
          file_path: string;
          alt_text: string | null;
          media_type: string;
          bucket_id: string;
          is_public: boolean;
          related_entity_type: string | null;
          related_entity_id: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: Partial<Database["public"]["Tables"]["media"]["Row"]>;
        Update: Partial<Database["public"]["Tables"]["media"]["Row"]>;
      };
      homepage_settings: {
        Row: {
          id: number;
          headline: string;
          subheadline: string;
          hero_image_path: string | null;
          show_photo_in_hero: boolean;
          updated_at: string;
        };
        Insert: Partial<Database["public"]["Tables"]["homepage_settings"]["Row"]>;
        Update: Partial<Database["public"]["Tables"]["homepage_settings"]["Row"]>;
      };
      visitor_interest: {
        Row: {
          id: string;
          full_name: string;
          email: string | null;
          linkedin: string | null;
          company: string | null;
          role: string | null;
          message: string | null;
          consent_text_version: string;
          consent_given: boolean;
          submitted_at: string;
          created_at: string;
        };
        Insert: Partial<Database["public"]["Tables"]["visitor_interest"]["Row"]>;
        Update: Partial<Database["public"]["Tables"]["visitor_interest"]["Row"]>;
      };
      analytics_events: {
        Row: {
          id: string;
          session_id: string;
          event_type: string;
          page_path: string;
          section_key: string | null;
          metadata_json: JsonValue | null;
          occurred_at: string;
          created_at: string;
        };
        Insert: Partial<Database["public"]["Tables"]["analytics_events"]["Row"]>;
        Update: Partial<Database["public"]["Tables"]["analytics_events"]["Row"]>;
      };
      admin_profiles: {
        Row: {
          id: string;
          user_id: string;
          role: string;
          created_at: string;
        };
        Insert: Partial<Database["public"]["Tables"]["admin_profiles"]["Row"]>;
        Update: Partial<Database["public"]["Tables"]["admin_profiles"]["Row"]>;
      };
    };
  };
}
