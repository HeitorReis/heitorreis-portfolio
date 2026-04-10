import type { HomepageSettings } from "@/types/domain";

export const defaultHomepageSettings: HomepageSettings = {
  id: 1,
  headline: "Heitor Reis",
  subheadline:
    "With experience spanning Embraer, healthtech, research, and systems projects, Heitor brings a multidisciplinary engineering profile shaped by technical depth and practical execution.",
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
