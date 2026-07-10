import type { HomepageSettings } from "@/types/domain";

export const defaultHomepageSettings: HomepageSettings = {
  id: 1,
  headline: "Heitor Reis",
  subheadline:
    "Computer Engineering student building across AI, low-level systems, and digital health — from winning the Harvard Brazil Hackathon with a digital-health platform to shipping AI-driven tools inside Embraer's commercial and contracts teams.",
  heroImagePath: "hero-heitor-profile.jpg",
  showPhotoInHero: true,
  updatedAt: new Date(0).toISOString(),
};

export const personalCards = [
  {
    title: "Running",
    summary: "Keeps discipline active outside technical work.",
    imagePath: "personal-running.jpg",
  },
  {
    title: "Music",
    summary: "A space for attention, rhythm, and creativity.",
    imagePath: "personal-music.jpg",
  },
  {
    title: "3D printing",
    summary: "A hands-on outlet for curiosity, iteration, and making ideas tangible.",
    imagePath: "personal-3d-printing.jpg",
  },
] as const;
